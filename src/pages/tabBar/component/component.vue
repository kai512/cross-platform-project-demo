<template>
    <view class="lw-container">
        <view class="lw-header-logo">
            <image class="lw-header-image" src="/static/componentIndex.png"></image>
        </view>
        <view class="lw-hello-text">
            <text class="hello-text">lw-app内置组件，展示样式仅供参考</text>
           <!-- <lw-link class="hello-link" :href="'https://uniapp.dcloud.io/component/'" :text="'https://uniapp.dcloud.io/component/'"
                :inWhiteList="true"></lw-link> -->
        </view>
        <view class="lw-panel" v-for="(item, index) in list" :key="item.id">
            <view class="lw-panel-h" :class="item.open ? 'lw-panel-h-on' : ''" @click="triggerCollapse(index)">
                <text class="lw-panel-text">{{item.name}}</text>
                <text class="lw-panel-icon lw-icon" :class="item.open ? 'lw-panel-icon-on' : ''">{{item.pages ? '&#xe581;' : '&#xe470;'}}</text>
            </view>
            <view class="lw-panel-c" v-if="item.open">
                <view class="lw-navigate-item" v-for="(item2,key) in item.pages" :key="key" @click="goDetailPage(item2)">
                    <text class="lw-navigate-text">{{item2.name ? item2.name : item2}}</text>
                    <text class="lw-navigate-icon lw-icon">&#xe470;</text>
                </view>
            </view>
        </view>
    </view>
</template>
<script>
    // TODO 修复Android v3 加载过慢问题
    // #ifdef APP-PLUS
    var domModule = weex.requireModule('dom');
    domModule.addRule('fontFace', {
        'fontFamily': "uniicons",
        'src': "url('/static/lw.ttf')"
    });
    // #endif

    import { lwLink } from 'linewell-ui'
    export default {
        components: {
            lwLink
        },
        data() {
            return {
                list: [{
                        id: 'view',
                        name: '视图容器',
                        open: false,
                        pages: [
                            'view',
                            'scroll-view',
                            'swiper'
                            // #ifndef MP-TOUTIAO
                            ,
                            'movable-view',
                            'cover-view'
                            // #endif
                        ]
                    }, {
                        id: 'content',
                        name: '基础内容',
                        open: false,
                        pages: ['text', 'rich-text', 'progress']
                    }, {
                        id: 'form',
                        name: '表单组件',
                        open: false,
                        pages: ['button', 'checkbox', 'form', 'input', 'label', 'picker', 'picker-view', 'radio',
                            'slider',
                            'switch', 'textarea',
                            // #ifdef APP-PLUS || MP-WEIXIN || H5
                            'editor',
                            // #endif
                        ]
                    }, {
                        id: 'nav',
                        name: '导航',
                        open: false,
                        pages: ['navigator']
                    }, 
					{
                        id: 'media',
                        name: '媒体组件',
                        open: false,
                        pages: [
                            'image',
                            // 'video',
                            // #ifndef MP-ALIPAY || MP-TOUTIAO
                            'audio',
                            // #endif
                        ],
                    },
                    // #ifndef MP-TOUTIAO
                    {
                        id: 'map',
                        name: '地图',
                        open: false,
                        pages: ['map']

                    },
                    // #endif
					// #ifndef QUICKAPP-WEBVIEW-UNION
                    {
                        id: 'canvas',
                        name: '画布',
                        open: false,
                        pages: ['canvas']
                    },
					// #endif
                    // #ifdef APP-PLUS || H5
                    {
                        id: 'web-view',
                        name: '网页',
                        open: false,
                        pages: [{
                            name: '网络网页',
                            url: '/pages/component/web-view/web-view'
                        }, {
                            name: '本地网页',
                            url: '/pages/component/web-view-local/web-view-local'
                        }]
                    },
                    // #endif
                    // #ifndef APP-PLUS || H5
                    {
                        id: 'web-view',
                        name: '网页',
                        open: false,
                        pages: ['web-view']
                    },
                    // #endif
                    // #ifndef H5 || MP-BAIDU || QUICKAPP-WEBVIEW
                    {
                        url: 'ad',
                        name: 'AD组件',
                        open: false
                    },
                    // #endif
                ],
                navigateFlag: false
            }
        },
        onShareAppMessage() {
            return {
                title: '欢迎体验lw-app',
                path: '/pages/tabBar/component/component'
            }
        },
        onNavigationBarButtonTap(e) {
            this.$lw.navigateTo({
                url: '/pages/about/about'
            });
        },
        methods: {
            triggerCollapse(e) {
                if (!this.list[e].pages) {
                    this.goDetailPage(this.list[e].url);
                    return;
                }
                for (var i = 0; i < this.list.length; ++i) {
                    if (e === i) {
                        this.list[i].open = !this.list[e].open;
                    } else {
                        this.list[i].open = false;
                    }
                }
            },
            goDetailPage(e) {
                if (this.navigateFlag) {
                    return;
                }
                this.navigateFlag = true;
                if (typeof e === 'string') {
                    this.$lw.navigateTo({
                        url: '/pages/component/' + e + '/' + e
                    })
	
                } else {

					this.$lw.navigateTo({
					    url: e.url
					})
				
                }
                setTimeout(() => {
                    this.navigateFlag = false;
                }, 200)
            }
        }
    }
</script>

<style>
    @import '../../../common/lw-nvue.css';
	.lw-panel-h, .lw-navigate-item{display: flex;}
</style>
