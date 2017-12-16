//food.js
//获取应用实例
const app = getApp()

Page({
  data: {
    banner: [
      {
        "id": "317",
        "name": "水果",
        "icon2": "http://cdnimg.pinxiango.com/img/category/mobile/cate_317_3.png"
      },
      {
        "id": "286",
        "name": "海鲜",
        "icon2": "http://cdnimg.pinxiango.com/img/category/mobile/cate_286_3.png"
      },
      {
        "id": "316",
        "name": "乳品",
        "icon2": "http://cdnimg.pinxiango.com/img/category/mobile/cate_316_3.png"
      },
      {
        "id": "261",
        "name": "鲜蔬",
        "icon2": "http://cdnimg.pinxiango.com/img/category/mobile/cate_261_3.png"
      },
      {
        "id": "272",
        "name": "肉类",
        "icon2": "http://cdnimg.pinxiango.com/img/category/mobile/cate_272_3.png"
      },
      {
        "id": "281",
        "name": "套餐",
        "icon2": "http://cdnimg.pinxiango.com/img/category/mobile/cate_281_3.png"
      },
      {
        "id": "276",
        "name": "粮油",
        "icon2": "http://cdnimg.pinxiango.com/img/category/mobile/cate_276_3.png"
      },
      {
        "id": "287",
        "name": "酒水",
        "icon2": "http://cdnimg.pinxiango.com/img/category/mobile/cate_287_3.png"
      }
    ],
    "good": [
      {
        "id": "3275",
        "name": "黄金百香果",
        "model": "5个装",
        "image": "http://cdnimg.pinxiango.com/img/product/img/3/3275/15118555404623.jpg?x-oss-process=image/resize,m_pad,h_338,w_338,color_FFFFFF",
        "price": "25.00",
        "resume": "果香独特 高甜微酸 唤起甜蜜记忆"
      },
      {
        "id": "3264",
        "name": "品鲜GO特选 昆仑山天然雪山矿泉水",
        "model": "350ml*12",
        "image": "http://cdnimg.pinxiango.com/img/product/img/3/3264/15115007278932.jpg?x-oss-process=image/resize,m_pad,h_338,w_338,color_FFFFFF",
        "price": "46.00",
        "resume": "纯净零污染 天然弱碱性"
      },
      {
        "id": "3255",
        "name": "云南昭通丑苹果",
        "model": "4个装",
        "image": "http://cdnimg.pinxiango.com/img/product/img/3/3255/15113179679413.jpg?x-oss-process=image/resize,m_pad,h_338,w_338,color_FFFFFF",
        "price": "12.00",
        "resume": "离太阳最近的苹果"
      },
      {
        "id": "3254",
        "name": "云南昭通丑苹果",
        "model": "15个装",
        "image": "http://cdnimg.pinxiango.com/img/product/img/3/3254/15113179578922.jpg?x-oss-process=image/resize,m_pad,h_338,w_338,color_FFFFFF",
        "price": "42.00",
        "resume": "离太阳最近的苹果"
      },
      {
        "id": "3250",
        "name": "粽礼三味",
        "model": "140g*6",
        "image": "http://cdnimg.pinxiango.com/img/product/img/3/3250/15108819273699.jpg?x-oss-process=image/resize,m_pad,h_338,w_338,color_FFFFFF",
        "price": "23.40",
        "resume": "粽米软糯 馅料上品 色香味的完美融合"
      },
      {
        "id": "3246",
        "name": "德运全脂牛奶",
        "model": "1L*10",
        "image": "http://cdnimg.pinxiango.com/img/product/img/3/3246/15102134091596.jpg?x-oss-process=image/resize,m_pad,h_338,w_338,color_FFFFFF",
        "badge": "",
        "price": "110.00",
        "resume": "澳洲原装进口 黄金奶源 香醇口感"
      },
      {
        "id": "3245",
        "name": "德运脱脂牛奶",
        "model": "1L*10",
        "image": "http://cdnimg.pinxiango.com/img/product/img/3/3245/15102134435569.jpg?x-oss-process=image/resize,m_pad,h_338,w_338,color_FFFFFF",
        "price": "110.00",
        "resume": "澳洲原装进口 美味健康两不误"
      },
      {
        "id": "3244",
        "name": "德运全脂牛奶",
        "model": "1L",
        "image": "http://cdnimg.pinxiango.com/img/product/img/3/3244/15101982386997.jpg?x-oss-process=image/resize,m_pad,h_338,w_338,color_FFFFFF",
        "price": "13.80",
        "resume": "澳洲原装进口 黄金奶源 香醇口感"
      },
      {
        "id": "3243",
        "name": "德运脱脂牛奶",
        "model": "1L",
        "image": "http://cdnimg.pinxiango.com/img/product/img/3/3243/15101982624264.jpg?x-oss-process=image/resize,m_pad,h_338,w_338,color_FFFFFF",
        "price": "13.80",
        "resume": "澳洲原装进口 美味健康两不误"
      },
      {
        "id": "3242",
        "name": "加拿大进口3A眼肉牛排",
        "model": "200g",
        "image": "http://cdnimg.pinxiango.com/img/product/img/3/3242/15111603755105.jpg?x-oss-process=image/resize,m_pad,h_338,w_338,color_FFFFFF",
        "price": "78.00",
        "resume": "诱人雪花纹路，肉质柔软多汁"
      }
    ]
  },
  //事件处理函数
})