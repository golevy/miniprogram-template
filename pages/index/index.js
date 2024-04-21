const app = getApp();

Page({
  /**
   * Page initial data
   */
  data: {
    currentTab: 'home',
    navigationBarHeight: app.globalData.navigationBarHeight, // Safe area
    tabs: [
      {
        id: 'home',
        name: '首页',
        icon: '/public/images/ic_circle.svg',
        iconActive: '/public/images/ic_circle_active.svg',
      },
      {
        id: 'logs',
        name: '日志',
        icon: '/public/images/ic_circle.svg',
        iconActive: '/public/images/ic_circle_active.svg',
      },
    ],
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad(options) {
    const { windowWidth, statusBarHeight } = app.globalData;
    const tabWidth = windowWidth / (this.data.pages.length + 1) || 120;
    this.setData({
      tabWidth,
      statusBarHeight,
    });
  },

  onTabSelect(e) {
    const targetTab = e.currentTarget.dataset.tabid;
    this.setData({
      targetTab,
    });
  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady() {},

  /**
   * Lifecycle function--Called when page show
   */
  onShow() {},

  /**
   * Lifecycle function--Called when page hide
   */
  onHide() {},

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload() {},

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh() {},

  /**
   * Called when page reach bottom
   */
  onReachBottom() {},

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage() {},
});
