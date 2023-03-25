import Wxml2Canvas from 'wxml2canvas'
export const startDraw = ()=> {
  let that = this
        // 创建wxml2canvas对象
        let drawMyImage = new Wxml2Canvas({
          element: 'myCanvas', // canvas的id,
          obj: that, // 传入当前组件的this
          width: 200* 2,
          height: 200 * 2,
          background: '#141415', // 生成图片的背景色
          progress(percent) { // 进度
            console.log(percent);
          },
          finish(url) { // 生成的图片
            wx.hideLoading()
            savePoster(url)
          },
          error(res) { // 失败原因
            console.log(res);
            wx.hideLoading()
          }
        }, this);
        let data = {
            // 获取wxml数据
            list: [{
                type: 'wxml',
                class: '.my_canvas .my_draw_canvas',  // my_canvas要绘制的wxml元素根类名， my_draw_canvas单个元素的类名（所有要绘制的单个元素都要添加该类名）
                limit: '.my_canvas', // 要绘制的wxml元素根类名
                x: 0,
                y: 0
            }]
        }
        // 绘制canvas
        drawMyImage.draw(data, this);
}
export const drawMyCanvas = () => {
  wx.showLoading()
  const that = this
  wx.createSelectorQuery()
    .select('#my-canvas') // 在 WXML 中填入的 id
    .fields({ scrollOffset: true, size: true }, () => {
      startDraw()
    }).exec(() => {
      console.log(888)
    })
} 



export const savePoster = (url) => {
  const that = this
  wx.saveImageToPhotosAlbum({
    filePath: url,
    success: function() {
        wx.showToast({
            title: '保存成功',
            icon: 'none',
            duration: 1500
        });
    },
    fail(err) {
      if (err.errMsg === "saveImageToPhotosAlbum:fail:auth denied" || err.errMsg === "saveImageToPhotosAlbum:fail auth deny" || err.errMsg === "saveImageToPhotosAlbum:fail authorize no response") {
        wx.showModal({
          title: '提示',
          content: '需要您授权保存相册',
          showCancel: false,
          success: modalSuccess => {
            wx.openSetting({
              success(settingdata) {
                if (settingdata.authSetting['scope.writePhotosAlbum']) {
                    wx.saveImageToPhotosAlbum({
                        filePath: url,
                        success: function () {
                          wx.showToast({
                            title: '保存成功',
                            icon: 'success',
                            duration: 2000
                          })
                        },
                    })
                } else {
                    wx.showToast({
                        title: '授权失败，请稍后重新获取',
                        icon: 'none',
                        duration: 1500
                    });
                }
              }
            })
          }
        })
      }
    }
  })
}


