<template>
   <div class="jihuo">     
      <!-- 头像部 -->
      <div class="guding">
          <div class="tab_header">
              <div class="back">
                  <div class="headimg" style="width: 100%;">
                      <div style="float: left;">
                          <img src="../../assets/meinv.jpg" alt=""> 
                      </div>
                      <div style="float: left;">
                          <p>G g</p>
                          <span>暂未激活会员</span>                      
                      </div>                    
                  </div>
              </div>
          </div> 
          <div class="tab_Control">
              <ul>
                <li @click="selevip(index)"
                    v-for="(t,index) in sele"
                    :key="index" v-text="sele[index].name">VIP特权
                </li>
              </ul>
          </div>
      </div>
      <!-- 内容部main -->
      <div class="tab_main">
          <ul>
              <li class="vip vip2">
                <ul>
                    <li @click="vipka(index)"
                        v-for="(t,index) in viparry"
                        :key="index">
                        <div></div>
                        <div>
                            <p v-text="viparry[index].name">会员身份识别</p>
                            <p v-text="viparry[index].title">昵称升级红色，专属身份标识！</p>
                        </div>                          
                    </li> 
                    <!-- 底部footer插槽 -->
                    <chacao>获取VIP会员</chacao>                                                   
                </ul>
              </li>
              <li class="vip2" style="display:none">
                <div style="padding:.20rem">
                    <img src="../../assets/vip5.png" alt="" style="float:left;width:.5rem;height:.5rem; margin-right:.15rem">
                    <p style="font-size:.16rem;color:black;font-weight:bolder;margin:.05rem 0">查看谁喜欢我</p>
                    <p style="font-size:.14rem;color:#ccc">TA喜欢了我？右划立即配对！</p>
                </div>
                <!-- 底部footer插槽 -->
                <chacao>获取查看谁喜欢我</chacao>
              </li>
              <li class="vip2" style="display:none">
                <div style="padding:.2rem 0 0 .2rem">
                    <img src="../../assets/shandian.png" alt="" style="float:left;width:.5rem;height:.5rem; margin-right:.15rem">
                    <p style="font-size:.16rem;color:black;font-weight:bolder;margin:.05rem 0">超级曝光</p>
                    <p style="font-size:.14rem;color:#ccc">匹配利器！30分钟内10倍的人优先看到你！</p>
                </div>
                <!-- 底部footer插槽 -->
                <chacao>获取超级曝光</chacao>
              </li>
          </ul>
      </div>   
      <!-- 遮罩 -->
      <window6></window6>      
    </div> 
</template>
<script>
import bus from "../../bus.js";
import $ from "jquery";
// 弹窗
import window6 from "./pages/window6.vue";
// <!-- 引入底部footer插槽 -->
import chacao from "./pages/chacao.vue";
export default {
  components: {
    chacao,
    window6
  },
  data() {
    return {
      // vip特权数据
      viparry: [
        {
          title: "昵称升级红色1，专属身份标识！",
          name: "会员身份识别",
          urls: "../../assets/vip1.png"
        },
        {
          title: "昵称升级红色2，专属身份标识！",
          name: "每天5个“超级喜欢”",
          urls: "../../assets/vip2.png"
        },
        {
          title: "昵称升级红色3，专属身份标识！",
          name: "划错无限反悔",
          urls: "../../assets/vip3.png"
        },
        {
          title: "昵称升级红色4，专属身份标识！",
          name: "任意更改定位",
          urls: "../../assets/vip4.png"
        },
        {
          title: "昵称升级红色5，专属身份标识！",
          name: "无限喜欢次数",
          urls: "../../assets/vip5.png"
        }
      ],
      // 点击选项卡数据
      sele: [
        { name: "VIP特权" },
        { name: "查看谁喜欢我" },
        { name: "超级曝光" }
      ],
      // tanc数据
      vip_data:[{
          title: "让你的卡片更受欢迎，配对更容易！红色昵称，卡片角标，会员专属标签，多重维度彰显身份！",
          name: "身份标识！",
          urls: require("../../assets/vip1.png")
        },
        {
          title: "提高配对率5倍以上！帮你突出并置顶展示，记得留给你最喜欢的人哦，获取会员每天5个",
          name: "超级喜欢！",
          urls: require("../../assets/vip2.png")
        },
        {
          title: "经常手滑错了？用反悔轻松找回上一个人，让你拥有多次机会！获取会员不限量！",
          name: "反悔！",
          urls: require("../../assets/vip3.png")
        },
        {
          title: "任意修改自己的位置，与世界各地的朋友配对。足不出户，认识香港、伦敦、里约的朋友！",
          name: "地理位置漫游！",
          urls: require("../../assets/vip4.png")
        },
        {
          title: "vip会员可以无限右划，从此再无限制。尽情滑动，与更多朋友配对！",
          name: "无限喜欢次数！",
          urls: require("../../assets/vip5.png")
        }]
    };
  },
  methods: {
    vipka(index) {
      // console.log(1112233,index)
      let vip_title = this.vip_data[index].title
      let vip_name = this.vip_data[index].name
      let vip_urls = this.vip_data[index].urls
      bus.$emit('vipka',{       
        vip_title,
        vip_name,
        vip_urls  
      }) 
    },
    selevip(index) {      
      $(".tab_Control ul li").eq(index).addClass("colorred").siblings().removeClass("colorred");
      $('.vip2').eq(index).css({display:"block"}).siblings().css({display:"none"})
    }
  }
};
</script>
<style scoped>
.jihuo {
  width: 100%;
  height: 100%;
  font-size: .16rem;
}
.tab_header {
  background-size: cover;
  width: 100%;
  height: 1.328rem;
  background: url("../../assets/meinv.jpg");
}
.back {
  background: rgb(27, 27, 27);
  opacity: 0.8;
  width: 100%;
  height: 100%;
}
.headimg {
  padding: 0.36rem 0 0 0.2rem;
}
.headimg p,
.headimg span {
  color: #fff;
  margin-left: 0.2rem;
  padding-top: 0.1rem;
}
.headimg span {
  font-size: 0.12rem;
  color: #ccc;
}
.headimg img {
  width: 0.6rem;
  height: 0.6rem;
  display: block;
  border-radius: 50%;
  float: left;
  margin-left: 0.1rem;
}
.tab_Control {
  width: 100%;
  height: 0.45rem;
  border-bottom: rgb(61, 60, 60) 0.0048rem solid;
 
}
.tab_Control .colorred {
  color: #e61f09;
  border-bottom: #ff0000 0.01rem solid;
}
.tab_Control ul{
    display: flex;
}
.tab_Control ul li {
  float: left;
  line-height: 0.44rem;
  /* padding: 0 1.633rem; */
  color: rgb(61, 60, 60);
  flex: 1;
  text-align: center
}

.tab_main {
  overflow: scroll;
  height: 3.9rem;
}

.tab_main ul li {
  float: left;
  width: 100%;
}
.vip ul li {
  text-align: left;
  width: 100%;
  padding: 0.15rem 0;
}
.vip ul li div {
  float: left;
}
.vip ul li div:nth-child(2) p:nth-child(1) {
  color: rgb(85, 80, 80);
  font-weight: bolder;
  padding: 0.05rem;
}
.vip ul li div:nth-child(2) p:nth-child(2) {
  font-size: 0.12rem;
  color: rgb(85, 80, 80);
}
.vip ul li div:nth-child(1) {
  margin: 0 0.2rem;
  width: 0.5rem;
  height: 0.5rem;
}
.vip ul li:nth-child(1) div:nth-child(1) {
  background: url("../../assets/vip1.png");
  background-size: cover;
}
.vip ul li:nth-child(2) div:nth-child(1) {
  background: url("../../assets/vip2.png");
  background-size: cover;
}
.vip ul li:nth-child(3) div:nth-child(1) {
  background: url("../../assets/vip3.png");
  background-size: cover;
}
.vip ul li:nth-child(4) div:nth-child(1) {
  background: url("../../assets/vip4.png");
  background-size: cover;
}
.vip ul li:nth-child(5) div:nth-child(1) {
  background: url("../../assets/vip5.png");
  background-size: cover;
}
</style>