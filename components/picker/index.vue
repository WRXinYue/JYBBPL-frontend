<template>
  <view class="wrap">
    <view class="wrapslot" @click="showModal">
      <slot></slot>
      <!-- <image class="headimg" src="/static/normal.png"/>
      <text class="headtext">点击上传头像</text> -->
    </view>

    <!-- modal -->

    <view class="modal modal-bottom-dialog" :hidden="hideFlag">
      <view class="modal-cancel" @click="hideModal"></view>

      <view
        class="bottom-dialog-body bottom-positon"
        :animation="animationData"
      >
        <!-- -->

        <view class="Mselect">
          <view
            v-for="(item,key) in optionList"
            :key="key"
            class="ms"
            @click="getOption(item.id)"
          >
            {{ item.label }}
          </view>
        </view>

        <view></view>

        <view class="Mcancel" @click="mCancel">
          <text>取消</text>
        </view>
      </view>
    </view>
  </view>
</template>
<script>
export default {
  data() {
    return {
      optionList:[
        {label: '使用微信头像', id: 0},
        {label: '使用相机拍摄', id: 1},
        {label: '从相册中上传', id: 2},
      ],
      value:'所有',
      hideFlag: true,//true-隐藏 false-显示
      animationData: {},//
    }
  },
  methods: {
    // 点击选项
    getOption(id) {
      var that = this;
      this.value = id;
      this.hideFlag = true
      this.$emit('modelselect', id);
    },
    //取消
    mCancel() {
      var that = this;
      that.hideModal();
    },

 // ----------------------------------------------------------------------modal

 // 显示遮罩层

    showModal() {
      var that = this;
      this.hideFlag = false

      // 创建动画实例

      var animation = wx.createAnimation({

        duration: 400,//动画的持续时间

        timingFunction: 'ease',//动画的效果 默认值是linear->匀速，ease->动画以低速开始，然后加快，在结束前变慢

      })

      this.animation = animation; //将animation变量赋值给当前动画

      var time1 = setTimeout(function () {

        that.slideIn();//调用动画--滑入

        clearTimeout(time1);

        time1 = null;

      }, 100)

    },

    // 隐藏遮罩层

    hideModal() {

      var that = this;

      var animation = wx.createAnimation({

        duration: 400,//动画的持续时间 默认400ms

        timingFunction: 'ease',//动画的效果 默认值是linear

      })

      this.animation = animation

      that.slideDown();//调用动画--滑出

      var time1 = setTimeout(function () {
          that.hideFlag = true;
          clearTimeout(time1);
          time1 = null;

      }, 220)//先执行下滑动画，再隐藏模块

    },

    //动画 -- 滑入

    slideIn() {

      this.animation.translateY(0).step() // 在y轴偏移，然后用step()完成一个动画

      this.animationData = this.animation.export()

    },

    //动画 -- 滑出

    slideDown () {

      this.animation.translateY(300).step()

      this.animationData = this.animation.export()
    }
  }
}
</script>
<style>
.arrow {
  display: inline-block;

  border: 6px solid transparent;

  border-top-color: #000;

  margin-left: 8px;

  position: relative;

  top: 6rpx;
}

/* ---------------------------- */

/*模态框*/

.modal {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
}

.modal-cancel {
  position: absolute;
  z-index: 2000;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.3);
}

.bottom-dialog-body {
  width: 100%;
  position: absolute;
  z-index: 3000;
  bottom: 0;
  left: 0;
  background: #dfdede;
  border-top-right-radius: 10rpx;
  border-top-left-radius: 10rpx;
}

/*动画前初始位置*/

.bottom-positon {
  -webkit-transform: translateY(100%);
  transform: translateY(100%);
}

/* 底部弹出框 */

.bottom-positon {
  text-align: center;
}

.Mselect {
  margin-bottom: 20rpx;
  border-top-right-radius: 10rpx;
  border-top-left-radius: 10rpx;
}

.Mselect .ms {
  padding: 26rpx 0;

  background: #fff;
}
.Mselect .ms:first-child{
  border-top-right-radius: 10rpx;
  border-top-left-radius: 10rpx;
}

.Mselect .ms:not(:last-of-type) {
  border-bottom: 1px solid #dfdede;
}

.Mcancel {
  background: #fff;

  padding: 26rpx 0;
}
</style>
