<template>
    <view>
        <page-head :title="title"></page-head>
        <view class="lw-padding-wrap lw-common-mt">
            <view class="progress-box">
                <progress :percent="pgList[0]" show-info stroke-width="3" />
            </view>
            <view class="progress-box">
                <progress :percent="pgList[1]" stroke-width="3" />
                <lw-icons type="close" class="progress-cancel" color="#dd524d"></lw-icons>
            </view>
            <view class="progress-box">
                <progress :percent="pgList[2]" stroke-width="3" />
            </view>
            <view class="progress-box">
                <progress :percent="pgList[3]" activeColor="#10AEFF" stroke-width="3" />
            </view>
            <view class="progress-control">
                <button type="primary" @click="setProgress">设置进度</button>
                <button type="warn" @click="clearProgress">清除进度</button>
            </view>
        </view>
    </view>
</template>
<script>
    import lwIcons from "linewell-ui/lib/lw-icons/lw-icons.vue"
    export default {
        data() {
            return {
                title: 'progress',
                pgList: [0, 0, 0, 0]
            }
        },
        components: {
            lwIcons
        },
        methods: {
            setProgress() {
                this.pgList = [20, 40, 60, 80]
            },
            clearProgress() {
                this.pgList = [0, 0, 0, 0]
            }
        }
    }
</script>

<style>
    .progress-box {
        display: flex;
        height: 50rpx;
        margin-bottom: 60rpx;
    }

    .lw-icon {
        line-height: 1.5;
    }

    .progress-cancel {
        margin-left: 40rpx;
    }
    
    .progress-control button{
        margin-top: 20rpx;
    }
</style>
