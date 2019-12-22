// pages/user/takemedicine/takemedicine.js
const helper = require('../utils/util');
const app = getApp()

Page({
  data: {
    src: '',
    result:''
  },
  onLoad: function () {

  },
  //选取图片
  async select() {
    let that = this;
    const img = await helper.chooseImage();//得到图片路径
    console.log(img[0])
    if (img != false) {
      const temp = await helper.compressImage(img[0], 50);//图片压缩
      console.log(temp)

      const base = temp != false ? await helper.base(temp) : helper.showModal();
      console.log(base)
      var str = base //去除前缀
      if (str == 0) {
        console.log("空字符")
      }
      else {
        str = str.replace("data:image/jpg;base64,", "");
      }
      that.setData({
        src: base //数据传输长度为 4320079 已经超过最大长度 1048576 如果图片过大记得压缩哦
      })


      wx.request({
        method: "POST",
        url: 'https://aip.baidubce.com/rest/2.0/image-classify/v2/advanced_general', //仅为示例，并非真实的接口地址
        data: {
          access_token: '24.787d567c2e72255c5d55a4d1e39d8c7d.2592000.1579265753.282335-18056110',
          image: str
        },
        header: {
          'content-type': 'application/x-www-form-urlencoded' // 默认值
        },
        success: function (res) {
          console.log(res.data)
          var str0 = res.data.result[0].keyword;
          var str1 = res.data.result[1].keyword;
          var str2 = res.data.result[2].keyword;
          var str3 = res.data.result[3].keyword;
          var str4 = res.data.result[4].keyword;
          var str_all = str0 + str1 + str2 + str3 + str4;
          console.log(str0 + str1 + str2 + str3 + str4);
          var db = wx.cloud.database()
          db.collection("upload").add({
            data:{
              upload: str0 + str1 + str2 + str3 + str4,
            },

          })
          if (str_all.indexOf("交通") != -1) {
            wx.vibrateLong();
          }
          else console.log("空字符")
        },

      })


    }
  },

  async download(){
    var that = this;
    wx.cloud.callFunction({
      name: "read2",
      success: function (res) {
        console.log(res)
        var yes = res.result.data[res.result.data.length - 1]
        that.setData({
          result:yes.upload
        })
      }
    })
  },
})
