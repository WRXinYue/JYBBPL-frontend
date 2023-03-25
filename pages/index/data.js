const txyThemeTplList = [];
const txyThemeTplList2 = [];

for(let i=1; i<26; i++) {
  if (orider.indexOf(i) < 0) {

    let obj = {
      themeId: "",
      id: i,
      url: ``
    }
    txyThemeTplList.push(obj)
  }
}
for(let i=1; i<25; i++) {
  let obj = {
    themeId: "",
    id: i,
    url: ``
  }
  txyThemeTplList2.push(obj)
}
// url 添加自己的素材
export const themeList = [
  {
    background: 'https://bj.bcebos.com/txy-dev/txy/wsj/bg.png',
    hotFlag: 0,
    iconColor: '#413A6D',
    id: 1,
    shareTitle: '点击免费领取万圣节专属头像',
    shareDesc: '一键生成万圣节专属头像',
    shareImg: 'https://bj.bcebos.com/txy-dev/txy/wsj/share.jpg',
    
    txyThemeTplList: txyThemeTplList,
    themes: [
      {
        background: 'https://bj.bcebos.com/txy-dev/txy/wsj/bg.png',
        iconColor: '#413A6D'
      },
    ]
  },
  {
    background: 'https://bj.bcebos.com/txy-dev/txy/sjb/bg1.png',
    hotFlag: 1,
    iconColor: '#2555A4',
    id: 1,
    shareTitle: '点击免费领取世界杯专属头像',
    shareDesc: '一键生成世界杯专属头像',
    shareImg: 'https://bj.bcebos.com/txy-dev/txy/sjb/bg1.png',
    txyThemeTplList: txyThemeTplList2,
    themes: [
      
      {
        background: 'https://bj.bcebos.com/txy-dev/txy/sjb/bg1.png',
        iconColor: '#2555A4'
      },
      {
        background: 'https://bj.bcebos.com/txy-dev/txy/sjb/bg2.png',
        iconColor: 'rgba(151, 109, 0, 0.8)'
      },
      {
        background: 'https://bj.bcebos.com/txy-dev/txy/sjb/bg4.png',
        iconColor: '#2555A4'
      },
      // {
      //   background: 'https://bj.bcebos.com/txy-dev/txy/sjb/bg3.png',
      //   iconColor: 'rgba(151, 109, 0, 0.2900)'
      // }
    ]
  }
]