<template>
    <view>
        <page-head :title="title"></page-head>
        <view class="lw-common-mt">
            <view class="lw-list">
                <view class="lw-list-cell">
                    <view class="lw-list-cell-left">
                        <view class="lw-label">名称</view>
                    </view>
                    <view class="lw-list-cell-db">
                        <input class="lw-input" type="text" placeholder="请输入联系人名称" name="name" :value="name" @input="nameChange"></input>
                    </view>
                </view>
                <view class="lw-list-cell">
                    <view class="lw-list-cell-left">
                        <view class="lw-label">手机号</view>
                    </view>
                    <view class="lw-list-cell-db">
                        <input class="lw-input" type="text" placeholder="请输入联系人手机号" name="phone" :value="phone" @input="phoneChange"></input>
                    </view>
                </view>
            </view>
            <view class="lw-padding-wrap">
                <view class="lw-btn-v">
                    <button type="primary" class="btn-setstorage" @tap="add">添加联系人</button>
                </view>
            </view>
        </view>
    </view>
</template>
<script>
    export default {
        data() {
            return {
                title: 'addPhoneContact',
                name: '',
                phone: ''
            }
        },
        methods: {
            nameChange: function(e) {
                this.name = e.detail.value
            },
            phoneChange: function(e) {
                this.phone = e.detail.value
            },
            add() {
                this.$lw.addPhoneContact({
                    firstName: this.name,
                    mobilePhoneNumber: this.phone,
                    success: function() {
                        this.$lw.showModal({
                        	content:'已成功添加联系人！',
                            showCancel:false
                        })
                    },
                    fail: function() {
                        this.$lw.showModal({
                        	content:'添加联系人失败！',
                            showCancel:false
                        })
                    }
                });
            }
        }
    }
</script>

<style>
</style>
