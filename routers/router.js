const app = getApp();

const Pages = {
  Index: {
    authRequired: false,
    url: '/pages/index/index?tab=',
  },
};

export const navigateToIndexPage = (tabid) => {
  navigate(Pages.Index, tabid);
};

export const navigate = (page, urlParam = null) => {
  if (!page || !page.url) {
    return;
  }

  const url = urlParam ? page.url + urlParam : page.url;
  if (page.authRequired) {
    if (app.userInfo) {
      wx.navigateTo({
        url,
      });
    } else {
      //
    }
  } else {
    wx.navigateTo({
      url,
    });
  }
};
