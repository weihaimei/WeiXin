//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    banner:[
    {"img":"http://i1.douguo.net/upload/banner/5/f/3/5f388cf5d383300f94bcfd61dfb8c513.jpg"},
    {"img":"http://i1.douguo.net/upload/banner/b/e/1/be0385f1e38cf9fc6d1889676ba8a971.jpg"},
    {"img":"http://i1.douguo.net/upload/banner/3/4/3/34f23396d789770fab85a81091f35eb3.jpg"},
    {"img":"http://i1.douguo.net/upload/banner/6/7/5/67f345993d8b46d5f48d12afffbbe535.jpg"},
    {"img":"http://i1.douguo.net/upload/banner/b/2/9/b23a33b2fed22babbbd48e54f5634a99.jpg"}
    ],
    classify:[
      {      
        img:"http://cp1.douguo.net/upload/caiku/a/4/5/750x480_a466a42a0e2343f29efb78dff3d707f5.png",
        text:"肉类"
      }, 
      {
        img:"http://i1.douguo.net//upload/shicai/1446100499.jpg",
        text:"蔬菜"
      }, 
      {
        img:"http://i1.douguo.net//upload/shicai/1446026450.jpg",
        text:"水果"
      }, 
      {
     img:"http://cp1.douguo.net/upload/caiku/6/f/a/300x300_6f8bb44447b6b4b1ad09f08f056f56ca.jpg",
        text:"甜品"
      },
      {
        img:"http://i1.douguo.net/static/wap/img/more.png?yupeng20151123",
        text:"全部"
      }
    ],
    goods: {
      "image": "http://cdnimg.pinxiango.com/img/banner/background/15113222086551.png?x-oss-process=image/resize,m_pad,h_320,w_700,color_FFFFFF",
      "link": "http://www.pinxiango.com/product/product-3255.html",
      "product": [
        {
          "id": "3254",
          "name": "云南昭通苹果",
          "model": "15个装",
          "cate_id": null,
          "stock_status_id": "7",
          "resume": "高原野生果 产地直采 甜脆多汁",
          "image": "http://cdnimg.pinxiango.com/img/product/img/3/3254/15113179578922.jpg?x-oss-process=image/resize,m_pad,h_250,w_250,color_FFFFFF",
          "price": "42.00",
          "sale_price": null,
          "distribution": "310100",
          "quantity": "182",
          "is_wish": 0,
          "status": null
        },
        {
          "id": "3255",
          "name": "云南昭通苹果",
          "model": "4个装",
          "cate_id": null,
          "stock_status_id": "7",
          "resume": "高原野生果 产地直采 甜脆多汁",
          "image": "http://cdnimg.pinxiango.com/img/product/img/3/3255/15113179679413.jpg?x-oss-process=image/resize,m_pad,h_250,w_250,color_FFFFFF",
          "price": "12.00",
          "sale_price": "1.10",
          "distribution": "310100",
          "quantity": "574",
          "is_wish": 0,
          "status": null
        },
        {
          "id": "3237",
          "name": "新西兰进口西冷牛排",
          "model": "150g",
          "cate_id": null,
          "stock_status_id": "7",
          "resume": "韧度强，嚼劲感十足",
          "image": "http://cdnimg.pinxiango.com/img/product/img/3/3237/15111587663501.jpg?x-oss-process=image/resize,m_pad,h_250,w_250,color_FFFFFF",
          "price": "37.00",
          "sale_price": null,
          "distribution": "310100",
          "quantity": "149",
          "is_wish": 0,
          "status": null
        },
        {
          "id": "3238",
          "name": "新西兰进口眼肉牛排",
          "model": "150g",
          "cate_id": null,
          "stock_status_id": "7",
          "resume": "诱人雪花纹路，肉质柔软多汁",
          "image": "http://cdnimg.pinxiango.com/img/product/img/3/3238/15111576126517.jpg?x-oss-process=image/resize,m_pad,h_250,w_250,color_FFFFFF",
          "price": "44.00",
          "sale_price": null,
          "distribution": "310100",
          "quantity": "149",
          "is_wish": 0,
          "status": null
        },
        {
          "id": "3240",
          "name": "新西兰进口羊颈排（羊蝎子）",
          "model": "1000g",
          "cate_id": null,
          "stock_status_id": "7",
          "resume": "骨肉比例均匀，啃起来就是香",
          "image": "http://cdnimg.pinxiango.com/img/product/img/3/3240/15112361845505.jpg?x-oss-process=image/resize,m_pad,h_250,w_250,color_FFFFFF",
          "price": "68.00",
          "sale_price": null,
          "distribution": "310100",
          "quantity": "-2",
          "is_wish": 0,
          "status": null
        },
        {
          "id": "3241",
          "name": "新西兰进口羔羊小排",
          "model": "500g",
          "cate_id": null,
          "stock_status_id": "7",
          "resume": "肥瘦相间 肉质鲜嫩 煎烤适宜",
          "image": "http://cdnimg.pinxiango.com/img/product/img/3/3241/15111596407928.jpg?x-oss-process=image/resize,m_pad,h_250,w_250,color_FFFFFF",
          "price": "48.00",
          "sale_price": null,
          "distribution": "310100",
          "quantity": "68",
          "is_wish": 0,
          "status": null
        },
        {
          "id": "3242",
          "name": "加拿大进口3A眼肉牛排",
          "model": "200g",
          "cate_id": null,
          "stock_status_id": "7",
          "resume": "诱人雪花纹路，肉质柔软多汁",
          "image": "http://cdnimg.pinxiango.com/img/product/img/3/3242/15111603755105.jpg?x-oss-process=image/resize,m_pad,h_250,w_250,color_FFFFFF",
          "price": "78.00",
          "sale_price": null,
          "distribution": "310100",
          "quantity": "35",
          "is_wish": 0,
          "status": null
        },
        {
          "id": "3217",
          "name": "山东特产 | 栖霞红富士苹果",
          "model": "2.5KG",
          "cate_id": null,
          "stock_status_id": "7",
          "resume": "甜脆多汁，红扑扑惹人爱",
          "image": "http://cdnimg.pinxiango.com/img/product/img/3/3217/15081391344441.jpg?x-oss-process=image/resize,m_pad,h_250,w_250,color_FFFFFF",
          "price": "48.00",
          "sale_price": null,
          "distribution": "310100",
          "quantity": "104",
          "is_wish": 0,
          "status": null
        }
      ]
    },
    indicatorDots:true,
    autoplay: true,
    interval: 3000,
    duration: 1000,
    circular: true
  },
  //事件处理函数
})
