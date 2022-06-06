import { AppConfig } from "remax/wechat";

const config: AppConfig = {
  pages: ['pages/index/index', 'pages/my/index', 'pages/message/index'],
  window: {
    navigationBarTitleText: '矿大鹊桥',
    navigationBarBackgroundColor: '#5795f1'
  },
  tabBar: {
    color: "#000000",
    selectedColor: '#47eb47',
    backgroundColor: "#5795f1",
    list: [
      {
        pagePath: 'pages/index/index',
        iconPath: '/images/home.png',
        selectedIconPath: '/images/home-select.png',
        text: '首页',
      },
      {
        pagePath: 'pages/message/index',
        iconPath: '/images/message.png',
        selectedIconPath: '/images/message-select.png',
        text: '消息',
      },
      {
        pagePath: 'pages/my/index',
        iconPath: '/images/user-center.png',
        selectedIconPath: '/images/user-center-select.png',
        text: '我的',
      }
    ]
  }
};

export default config;
