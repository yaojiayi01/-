Page
({
  data:{

  },

  person: function () {

     wx.navigateTo({

      url: '../mypage/person/person',

    })
  },
    
  news: function () {

    wx.navigateTo({

      url: '../mypage/news/news',

    })
  },
   
    help: function() {

      wx.navigateTo({

        url: '../mypage/help/help',

    })
  },

 aboutus:function(){

   wx.navigateTo({

     url: '../mypage/aboutus/aboutus',

   })
 },

 exit:function(){

  wx.redirectTo({

    url: '../login/login',

  })
}












})