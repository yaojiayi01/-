var app = getApp() ;
Page
({

data:{      },
onLoad:function(){
  if (!wx.cloud) {
    console.error('请使用 2.2.3 或以上的基础库以使用云能力')
  } else {
    wx.cloud.init({
      traceUser: true,
    })
  }


  //初始化数据库
  const db = wx.cloud.database()
  //向数据库添加一条记录
  db.collection('upload').add({
    // data 字段表示需新增的 JSON 数据
    data: {
      content: "blind",
      tag: 1
    },
    success: function (res) {
      // res 是一个对象，其中有 _id 字段标记刚创建的记录的 id
      console.log(res)
    }
  })
},


onSubmit: function(e) {

  app.globalData.user = e.detail.value;

  console.log(app.globalData.userInfo)

  if (app.globalData.user.account == '1' && app.globalData.user.pwd == '1') {

    wx.showToast({

      title: '登录成功',

      duration: 2000,

    })

    wx.switchTab({



      url: '../user/user'



    })

  }

  else {

    wx.showToast({

      title: '用户名或密码错误',

      duration: 2000,

    })

  }

}

})