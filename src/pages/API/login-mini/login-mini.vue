<template>
	<view class="lw-padding-wrap">
		<view class="lw-form-item lw-column">
			<view class="title">获取code</view>
			<input class="lw-input" v-model="applicationCode" placeholder="code" />
		</view>
		<view class="lw-btn-v">
			<button type="primary" class="page-body-button" @click="getCode">获取code</button>
		</view>
		<view class="lw-form-item lw-column">
			<view class="title">获取access_token</view>
			<input class="lw-input" v-model="applicationToken" placeholder="access_token" />
		</view>
		<view class="lw-btn-v">
			<button type="primary" class="page-body-button" @click="getToken">获取access_token</button>
		</view>

		<text>{{userInfo}}</text>
		<view class="lw-btn-v lw- lw-common-mt">
			<button type="primary" class="page-body-button" @click="getUserInfo">获取用户个人信息</button>
		</view>
		<!--     <button @tap="getPushToken" type="primary">推送获取access-token</button>
        <view class="input-demo">
            <input :disabled="true" v-model="pushToken"></input>
        </view> -->
		<!-- <button @tap="getTemplate" type="primary">推送消息模板</button>
        <view class="input-demo">
			<ac-row>
				<ac-col span="12">
				  <ac-picker class="acpicker" title="当前选择" :range="list1" :value="value" range-key="title"
								   @change="handleChange"></ac-picker>
				</ac-col>
			</ac-row>

        </view>
        <button @tap="pushTemplate" type="primary">推送消息</button> -->
	</view>
</template>

<script type="text/babel">
	export default {
    config: {
      navigationBarTitleText: '微应用授权'
    },
    data() {
      return {
        userInfo: '用户信息',
        applicationToken: 'access_token',
        applicationCode: 'code',
        // //测试数据 微应用123
        // clientId: '7f02219ab02b4c3ba244d9480f38d3df',
        // client_secret: '68ab3b036c6f4e61abee070d44cf432c'
        // 微应用类型 微应用实例
        clientId: '07e978ce87a3439ab0a567fccf2c30a6',
        client_secret: 'd6786e9317cc4d7aa7e86e685549957f',
        list: [],
        list1: [],
        value:0,
        template_id : '',
        pushToken: ''
      }
    },
    methods: {
      getCode(){
        let o = {
          scope:'snsapi_userinfo',
          clientId:this.clientId
        }
        this.$lw.cstoonLogin(o, (result)=> {
          this.applicationCode = result.code
         
        });

      },
      paramSer(json){
        var params = Object.keys(json).map(function (key) {
          // body...
          return encodeURIComponent(key) + "=" + encodeURIComponent(json[key]);
        }).join("&");
        return params;
      },
      getToken() {
        let param = {
            code: this.applicationCode,
            client_secret: this.client_secret,
            grant_type:'authorization_code',
            client_id: this.clientId
          }
        param = this.paramSer(param)
        this.$lw.request({
          url: 'http://59.61.216.120:18891/oauth/token?' + param,
          method:'POST',
          header:{
            'Content-Type':'application/x-www-form-urlencoded'
          },
          data:{},
          success:  (result)=> {
            this.applicationToken = result.data.access_token
          },
          fail:  (data)=> {
            alert('request fail'+JSON.stringify(data))
          }
        })
      },
      getUserInfo() {
        let param = {
            access_token:this.applicationToken
          }
        param = this.paramSer(param)
        this.$lw.request({
          url: 'http://59.61.216.120:18892/resource/user/userinfo?'+ param,
          method:'POST',
          data: {
          },
          header:{
            'Content-Type':'application/x-www-form-urlencoded'
          },
          success:  (result)=> {
            this.userInfo = result.data;
          },
          fail:  (data)=> {
            alert('request fail'+JSON.stringify(data))
          }
        })
      },
      getPushToken() {
        let param = {
            scope: 'client_baseinfo',
            client_secret: this.client_secret,
            grant_type:'client_credentials',
            client_id: this.clientId
          }
        param = this.paramSer(param)
        this.$lw.request({
          url: 'http://59.61.216.120:18891/oauth/token?' + param,
          method:'POST',
          data:{},
          header:{
            'Content-Type':'application/x-www-form-urlencoded'
          },
          success:  (result)=> {
            this.pushToken = result.data.access_token
          },
          fail:  (data)=> {
            alert('request fail'+JSON.stringify(data))
          }
        })
      },
      getTemplate(){
        this.$lw.request({
          url: 'http://59.61.216.120:18888/tongplatform/support/opensite/v1/template/queryAuditPassTemplates',
          method:'GET',
          data:{
            applicationId: this.clientId,
            appId: this.userInfo.content.appId
          },
          success:  (result)=> {
            if(result.data.status === 1){

              this.list = result.data.content
              this.list1 = []
              for(let i in this.list){

                this.list1.push({title:this.list[i].title,value:this.list[i].templateId})
              }
            }else{
              this.$lw.showToast({ title: result.data.message })
            }

          },
          fail:  (data)=> {
            alert('request fail'+JSON.stringify(data))
          }
        })
      },
      handleChange(val){
        this.value = val
        this.template_id = this.list[val].templateId
      },
      pushTemplate(){
        let data = ''
        if(this.list.length===0){
          return this.$lw.showToast({title:'请先获取模板'})
        }
        let keys = this.list[this.value].keys?this.list[this.value].keys:[]
        let keys1 = {}
        for(let i in keys){
          keys1[keys[i]] = '呵呵呵'
        }
        data = encodeURIComponent(JSON.stringify(keys1))
        this.template_id = this.list[this.value].templateId
        let param = {
            access_token: this.pushToken,
            touser: this.userInfo.content.id,
            template_id: this.template_id,
            url: '',
            app_id: this.userInfo.content.appId,
            site_id: '',
            site_area_code: ''
          }
        param = this.paramSer(param) + '&data='+data
        alert('url:http://59.61.216.120:18892/resource/client/message/push?' + param)
        this.$lw.request({
          url: 'http://59.61.216.120:18892/resource/client/message/push?' + param,
          method:'POST',
          header:{
            'Content-Type':'application/x-www-form-urlencoded'
          },
          data:{},
          success:  (result)=> {
            if(result.data.status === 1){
              this.$lw.showToast({title: '发送成功'})
            }else{
              this.$lw.showToast({title: '发送失败'})
            }
          },
          fail:  (data)=> {
            alert('request fail'+JSON.stringify(data))
          }
        })
      }
    }
  }
</script>
<style>
	.title {
		padding: 10upx 25upx;
	}
</style>
