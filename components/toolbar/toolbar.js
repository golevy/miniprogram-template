const app = getApp();
Component({
  /**
   * Component options
   */
  options: {
    addGlobalClass: true,
    multipleSlots: true,
  },

  /**
   * Component properties
   */
  properties: {
    bgColor: {
      type: String,
      default: '',
    },
    isCustom: {
      type: [Boolean, String],
      default: false,
    },
    isBack: {
      type: [Boolean, String],
      default: false,
    },
    bgImage: {
      type: String,
      default: '',
    },
  },

  /**
   * Component initial data
   */
  data: {
    toolbarHeight: app.globalData.toolbarHeight,
    appBarHeight: app.globalData.toolbarHeight + app.globalData.statusBarHeight,
    statusBarHeight: app.globalData.statusBarHeight,
    menu: app.globalData.menu,
  },

  /**
   * Component methods
   */
  methods: {
    BackPage() {
      const pages = getCurrentPages();
      if (pages.length == 1) {
        wx.reLaunch({
          url: '/pages/index/index',
        });
      } else {
        wx.navigateBack({
          delta: 1,
        });
      }
    },

    toHome() {
      wx.reLaunch({
        url: '/pages/index/index',
      });
    },
  },
});
