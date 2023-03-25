<template>
	<view class="content">
    
    <!-- <image class="image-bg" :src="currentInfo.background"/> -->
    <swiper v-if="currentInfo.themes.length>0" class="image-bg"  autoplay @change="changeColor" >
      <swiper-item class="swiper-item" v-for="(item,index) in currentInfo.themes" :key="index">
        <image class="image-bg" :src="item.background"/>
      </swiper-item>
    </swiper>
		<view class="contain">
      <view class="thembox" :style="{bottom: thembottom}">
        <view class="head-box" :style="{marginTop: headboxStyle, height: showImgW}">
          <canvas canvas-id="myCanvas" class="myCanvas" :style="{width: showImgW, height: showImgW}"></canvas>
          <view  class="showimg showimg-box head-img-border" :style="{width: showImgW, height: showImgW}">
            <pickerselect  @modelselect="modelselect">
              <view class="showimg normalimgbox" :style="{width: showImgW, height: showImgW, background: currentInfo.iconColor}">
                <image class="headimg normalimg"  src="https://bj.bcebos.com/txy-dev/txy/main/normal.png"/>
              </view>
              <view id="my-canvas" class="my_canvas">
                
                <view class="showimg" :style="{width: showImgW, height: showImgW}">
                  <image mode="aspectFill " data-type="image" :data-url="headUrl"  class="headimg my_draw_canvas" :src="headUrl"/>
                </view>
                <view class="showimg" :style="{width: showImgW, height: showImgW}">
                  <image mode="heightFix" data-type="image" :data-url="selectimg" class="headimg my_draw_canvas" :src="selectimg"/>
                </view>
              </view>
            </pickerselect>
          </view>
        </view>
        <view class="uni-margin-wrap" :style="{marginTop: wrapMarginTop}">
          <image @click="moveleft" class="move-left" src="https://bj.bcebos.com/txy-dev/txy/main/left.png"/>
          <swiper class="swiper" :style="{ height: swiperHeight}" :current="current" :indicator-dots="indicatorDots" display-multiple-items="4">
            <swiper-item class="swiper-item" v-for="(item,index) in currentInfo.txyThemeTplList" :key="index">
              <view class="select-box">
                <view class="select-boxk">
                  <image @click="selectheadimg(item.url)" class="head-border" :src="item.url"/>
                  <icon :class="{'selectimg' : selectimg ==item.url}" class="selectimgnone" color="#1afa29" type="success" size="26"/>
                </view>
              </view>
            </swiper-item>
          </swiper>
          <image @click="moveright" class="move-right" src="https://bj.bcebos.com/txy-dev/txy/main/right.png"/>
        </view>
        <view class="btnsbox">
          <view class="btnitem">
            <pickerselect  @modelselect="modelselect">
              <view class="btn">上传图片</view>
            </pickerselect>
          </view>
          <view class="btnitem">
            <view v-if="headUrl" @click="saveImg" class="btn">生成头像</view>
            <pickerselect v-else  @modelselect="modelselect">
              <view class="btn">生成头像</view>
            </pickerselect>
          </view>
          <!-- <view class="btnitem">
            <button open-type='share' class="share-text">分享好友</button>
          </view> -->
        </view>
      </view>
      <view class="themswitch">
        <view class="thenbtn">
          <image @click="changeTheme(0)" class="thenbtnimg" src="https://bj.bcebos.com/txy-dev/txy/main/wanbtn.png"/>
        </view>
        <view class="thenbtn">
          <image @click="changeTheme(1)" class="thenbtnimg" src="https://bj.bcebos.com/txy-dev/txy/main/sjbbtn.png"/>
        </view>
      </view>
      <imgCropper ref="gmyImgCropper" :quality="1" cropperType="fixed" :imgSrc="headUrl" @getImg="getImg"></imgCropper>
		</view>

	</view>
</template>

<script>
import pickerselect from '../../components/picker/index.vue'
import imgCropper from '../../components/cropper/index.vue'
import {drawMyCanvas} from './canvas.js'
import {themeList} from './data.js'
	export default {
		data() {
			return {
        indicatorDots: false,
        current: 0,
        listLen: 0,
        selectimg: '',
        headUrl: '',
        phoneHeight: 812,
        currentInfo: {
          background: '',
          hotFlag: '1',
          iconColor: '',
          id: 1,
          shareTitle: '',
          shareDesc: '',
          shareImg: '',
          txyThemeTplList: []
        },
        activeIndex: 0,
        themes: []
			}
		},
		onLoad() {
      let phoneHeight = wx.getSystemInfoSync().screenHeight
      let phoneWidth = wx.getSystemInfoSync().screenWidth
      this.phoneHeight = phoneHeight
      this.changeTheme(1)
		},
    computed: {
      headboxStyle() {
        return 610*this.phoneHeight/812 + 'rpx'
      },
      showImgW() {
        return 400*this.phoneHeight/812 + 'rpx'
      },
      swiperHeight() {
        return 192*this.phoneHeight/812 + 'rpx'
      },
      wrapMarginTop() {
        return 60*this.phoneHeight/812 + 'rpx'
      },
      thembottom() {
        return 290*this.phoneHeight/812 + 'rpx'
      }
    },
    components: {
      pickerselect,imgCropper
    },
    onShareAppMessage: function () {
      const _this = this;
      return {
        title: _this.currentInfo.shareTitle,
        desc: _this.currentInfo.shareDesc,
        path: '/pages/index/index', // 路径，传递参数到指定页面。
        imageUrl:_this.currentInfo.shareImg,
      }
    },
       /*分享朋友圈 */
   onShareTimeline: function() {
      const _this = this;
      return {
        title: _this.currentInfo.shareTitle,
        imageUrl: _this.currentInfo.shareImg
      }
    },
		methods: {
      changeTheme(actId) {
        if (actId> -1) {
          this.activeIndex = actId
        }
        this.currentInfo = themeList.find((item) => {
          return item.hotFlag === this.activeIndex
        })
        if (this.currentInfo.themes) {
          this.themes = this.currentInfo.themes
        }else {
          this.themes = []
        }
        this.listLen = this.currentInfo.txyThemeTplList.length;
        this.selectimg = this.currentInfo.txyThemeTplList[0].url
      },
      changeColor(current) {
        let index = current.target.current
        this.currentInfo.iconColor = this.themes[index].iconColor
        this.currentInfo.shareImg = this.themes[index].background
        
      },
      moveleft() {
        const min = 0;
        if (this.current - 3 < min) {
          this.current = 0
        }else {
          this.current = this.current - 3
        }
      },
      moveright() {
        const max = this.listLen - 4
        if (this.current + 3 > max) {
          this.current = max
        }else {
          this.current = this.current + 3
        }
        
        console.log(this.current)
      },
      selectheadimg(url) {
        this.selectimg = url
      },
      saveImg() {
        let option = {
          headUrl: this.headUrl,
          selectimg: this.selectimg
        }
        drawMyCanvas(option)
      },
      modelselect(id) {
        console.log(id)
        let selectid = id;
        // 0 微信头像 1 相机拍照 2 本地图片
        if (selectid === 0) {
          this.wxLogin()
        }else {
          this.pictureClick(selectid)
        }
      },
      pictureClick (selectid) {
        const _this = this;
        let typelist = selectid === 1 ? ['camera'] : ['album']
        uni.chooseImage({
            count: 1,
            sourceType: typelist, //这要注意，camera掉拍照，album是打开手机相册
            crop: {
              width: 320,
              height: 320
            },
            success: (res)=> {
                _this.$refs.gmyImgCropper.chooseImage(res)
            }
        });
      },
      getImg(e){
        this.headUrl = e;
      },
      wxLogin() {
        let _this  = this;
        wx.getUserProfile({
          desc: '获取你的头像',
          success: res => {
            console.log(res)
            _this.headUrl = res.userInfo.avatarUrl
          },
          fail: () => {
            //拒绝授权
            wx.showToast({
              title: '您拒绝了请求,不能获取你的头像',
              icon: 'error',
              duration: 2000
            });
            return;
          }
        });
      },
      // shareOther(){
      //   wx.showShareMenu({
      //     withShareTicket: true,
      //     menus: ['shareAppMessage', 'shareTimeline']
      //   })
      //   console.log(777)
      //   // uni.share({
      //   //   provider: 'weixin',
      //   //   type: 5,
      //   //   title: '给自己微信头像添加点色彩吧',
      //   //   scene: 'WXSceneSession',
      //   //   imageUrl: 'https://bj.bcebos.com/txy-dev/guoqing/4.png',
      //   //   miniProgram: {
      //   //     id: 'gh_1c24248e1d1f',
      //   //     path: 'pages/index/index',
      //   //     type: 1,
      //   //     webUrl: 'http://uniapp.dcloud.io'
      //   //   }
      //   // })
      // }
		}
	}
</script>

<style lang="less">
	@import url('./index.less');
</style>
