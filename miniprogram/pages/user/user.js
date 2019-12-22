var app = getApp();
Page
({

 data:{   },

  onLoad: function () 
  {
 
    if (app.globalData.user == null) 
    {
      wx.redirectTo
      ({

        url: '../login/login',

      })
    }

    else 
    {
      this.setData({ username: app.globalData.user.account })
    }
  },

    takecondition: function () {

      wx.navigateTo({

        url: '../user/take condition/take condition',

      })
    },

    takeconditions: function () {

      wx.navigateTo({

        url: '../user/condition/condition',

      })
    },

    where: function () {

      wx.navigateTo({

        url: '../user/condition/condition',

      })
    },



})