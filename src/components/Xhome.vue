<template> 
    <div class="all">     
      <!-- 侧栏 -->
        <div class="nav">
          <!-- 背景遮罩 -->
          <div class="beijing">
            <div>
              <!-- 头像部 -->
              <div class="Hportrait" @click="mynews">
                <div class="H_portrait">
                  <div class="photo">
                    <img src="../assets/meinv.jpg" alt="">
                    <span style="font-size: .192rem" >V</span>
                  </div >
                  <p style="color:#fff;padding:0.5rem 0;font-size: .192rem">G g</p>
                  <p style="font-size: .192rem">点击查看/编辑</p>
                </div>
              </div>
              <!-- 选项卡部 -->
              <div class="navlist">
                <ul>
                  <li  @click="tocut(index)"
                      v-for="(t,index) in arrs"
                      :key="index">
                    <span></span>
                    <p v-text="arrs[index].title"></p>
                    <div></div>
                  </li>                  
                </ul>
              </div>
            </div>              
          </div>        
        </div>
        <!-- home主页内容 -->
        <div class="homes">
            <!-- 头部组件 -->
            <Xheaders/>
            <div class="main">
              <!-- 侧栏路由 -->
              
              <router-view/>
            </div>            
        </div>           
    </div>     
</template>
<script>
// 引入头部组件
import Xheaders from "./Xheaders"
import bus from "../bus.js"
import $ from "jquery";
export default {
  data() {
    return {
      // 个人信息
      name2: "mymessage",
      arrs: [
        { title: "探探", name: "tantan",urls:require("../assets/right.png")},
        { title: "激活特权", name: "jihuo",urls:require("../assets/dian.png")},
        { title: "匿名暗恋表白", name: "biaobai",urls:require("../assets/sousuo.png")},
        { title: "认证中心", name: "renzheng",urls:require("../assets/right.png")},
        { title: "设置", name: "shezhi",urls:require("../assets/right.png") },
        { title: "新手引导", name: "xinshou",urls:require("../assets/wenhao.png")},
        { title: "推荐给好友", name: "tuijian" }
      ]
    };
  },
  components: {
    // 挂载头部组件
    Xheaders
  },
  methods: {
    // 点击个人信息切换路由
    mynews() {
      $(".homes").animate({ left: "0" }, 300);
      $(".nav").animate({ left: "-80%" }, 300);
      let name = this.name2;
      this.$router.push({ name });
    },
    // 点击切换路由
    tocut(index) {
      $(".homes").animate({ left: "0" }, 300);
      $(".nav").animate({ left: "-80%" }, 300);
      let name = this.arrs[index].name;
      let titles=this.arrs[index].title
      let urls=this.arrs[index].urls
      this.$router.push({ name });
      bus.$emit('tocut',{
        titles,
        urls      
      })     
    }
  }
};
</script>
<style scoped>
.homes {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
}
.all {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
}
.main {
  width: 100%;
  height: 100%;
}
.nav {
  height: 100%;
  width: 80%;
  position: absolute;
  left: -80%;
  background: url("../assets/meinv.jpg") no-repeat;
  background-size: cover;
  
}
.H_portrait {
  width: 1.3rem;
  margin: 0.4rem auto;
  text-align: center;
  color: rgb(54, 53, 53);
}
.photo {
  position: relative;
}
.photo img {
  width: .8rem;
  height: .8rem;
  background: #fff;
  display: block;
  margin: auto;
  border-radius: 50%;
}
.photo span {
  display: inline-block;
  width: .24rem;
  height: .24rem;
  border-radius: 50%;
  background: rgb(2, 133, 185);
  position: absolute;
  right: .224rem;
  bottom: .048rem;
  color: #fff;
  font-weight: bolder;
  text-align: center;
  line-height: .24rem;
}
.navlist {
  color: #fff;
  width: 2.4rem;
  margin: auto;
  font-size: .192rem;
}
.navlist ul li {
  padding: .25rem 0;
}
.navlist ul li p {
  float: left;
}
.navlist ul li span {
  float: left;
  margin-right: .24rem;
}
.navlist ul li div {
  float: right;
}
.dian {
  width: 0.1rem;
  height: 0.1rem;
  background: red;
  border-radius: 50%;
  margin-top: 0.12rem;
}
.navlist ul li:nth-child(1) span {
  background: url("../assets/tantan.png");
}
.navlist ul li:nth-child(2) span {
  background: url("../assets/jihuo.png");
}
.navlist ul li:nth-child(3) span {
  background: url("../assets/biaobai.png");
}
.navlist ul li:nth-child(4) span {
  background: url("../assets/idka.png");
}
.navlist ul li:nth-child(5) span {
  background: url("../assets/shezhi.png");
}
.navlist ul li:nth-child(6) span {
  background: url("../assets/wenhao.png");
}
.navlist ul li:nth-child(7) span {
  background: url("../assets/fenxiang.png");
}
.navlist ul li:nth-child(1) span,
.navlist ul li:nth-child(2) span,
.navlist ul li:nth-child(3) span,
.navlist ul li:nth-child(4) span,
.navlist ul li:nth-child(5) span,
.navlist ul li:nth-child(6) span,
.navlist ul li:nth-child(7) span {
  background-size: cover;
  width: .25rem;
  height: .25rem;
  display: inline-block;
}
.beijing {
  background: black;
  opacity: 0.5;
  width: 100%;
  height: 100%;
  overflow: scroll;
}
</style>


