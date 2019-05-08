<template>
    <div class="renzheng">
        <!-- 遮罩 -->
        <div class="pop" v-show="bool">
            <div class="pop_up" @click="pop_up2"></div>
            <div class="pop_up_window">
                <img src="../../assets/huli2.jpeg" alt="">
                <p style="font-size:.18rem;font-weight:bolder;color:black;margin:.30rem 0 .15rem 0">已完成认证</p>
                <p style="font-size:.14rem;color:#fff;margin-bottom:.10rem">恭喜，你已完成真实头像认证</p>
                <div @click="windowout">好的</div>
            </div>       
        </div>       
        <div class="back_box" @click="windows">
            <div class="renzheng_box">
                <div style="text-align:center;margin-top:.15rem">
                    <p style="font-size:.18rem;font-weight: bolder;">真实头像认证</p>
                    <p style="font-size:.14rem;color:#a5a4a4">大幅提高配对成功率，享受专属特权</p>
                </div>
                <div class="box_lis">
                    <ul>
                        <li>
                            <div><img src="../../assets/V.png" alt=""></div>
                            <p style="font-size:.14rem;color:#a5a4a4;margin-top:.05rem">认证标识</p>
                        </li>
                        <li>
                            <div><img src="../../assets/aixin.png" alt=""></div>
                            <p style="font-size:.14rem;color:#a5a4a4;margin-top:.05rem">更多喜欢次数</p>
                        </li>
                        <li>
                            <div><img src="../../assets/zan.png" alt=""></div>
                            <p style="font-size:.14rem;color:#a5a4a4;margin-top:.05rem">优先推荐</p>
                        </li>
                    </ul>
                </div>
            </div>
            <p class="rz_but">认证成功</p>
        </div>
        <div class="sh_footer">*认证资料仅用于审核，其他用户不可见</div>
    </div> 
</template>
<script>

export default {
  data() {
    return {
      bool: false
    };
  },
  methods: {
    windows() {
        this.bool=true
    },
    windowout(){
        this.bool=false
    },
    pop_up2(){
      this.bool=false
    }
  }
};
</script>
<style scoped>
.renzheng {
   font-size: .16rem;
  width: 100%;
  height: 100%;
  background: rgb(228, 227, 227);
  overflow: hidden;
}
.back_box {
  background: #fff0f0;
  height: 2.24rem;
  border-radius: 0.1rem;
  margin: 0.08rem;
}
.renzheng_box {
  background: #fff;
  margin-top: 0.24rem;
  height: 1.84rem;
  width: 100%;
  border-radius: 0.1rem 0.1rem 0 0;
  overflow: hidden;
}
.rz_but {
  text-align: center;
  padding: 0.1rem 0;
  color: #e61f09;
}
.sh_footer {
  text-align: center;
  margin-top: 0.2rem;
  color: #a5a4a4;
}
.box_lis ul li {
  float: left;
  margin: 0.208rem 0.224rem 0 0.224rem;
  text-align: center;
}
.box_lis ul li div {
  width: 0.64rem;
  height: 0.64rem;
  background: #e61f09;
  border-radius: 50%;
  margin: 0 auto;
  background: #fff0f0;
  position: relative;
}
.box_lis ul li div img {
  width: 0.3rem;
  height: 0.3rem;
  display: block;
  margin: auto;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
/* .pop {
  display: block;
} */
.pop_up {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: black;
  opacity: 0.5;
  z-index: 100;
}
.pop_up_window {
  width: 80%;
  height: 60%;
  background: #b1d5e3;
  margin: auto;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
  border-radius: 0.1rem;
  text-align: center;
}
.pop_up_window div {
  font-size: .14rem;
  font-weight: bolder;
  color: #fff;
  margin:0.32rem 0.15rem 0.15rem 0.15rem;
  background: #e61f09;
  padding: 0.1rem;
  border-radius: 0.064rem;
}
.pop_up_window img {
  width: 2.24rem;
  height: 2.24rem;
  display: block;
  margin: auto;
}
</style>