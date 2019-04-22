<template>
    <div class="put_in" v-show="bool">
        <!-- 遮罩 -->
        <div class="put_bj" @click="bj_out"></div>
        <div class="put_in_window">
            <img :src="vipurls" alt="">
            <p style="font-size:19px;font-weight:bolder" v-text="vipname">身份标识！</p>
            <p v-text="viptitle"></p>
            <div style="color:#fff;background:#e61f09">立即购买</div>
            <div style="color:#ccc;background:#fff" @click="bj_out2">知道了</div>
        </div>
    </div>
</template>
<script>
import bus from "../../../bus.js";
export default {
  data() {
    return {
      bool: false,
      viptitle: "",
      vipurls: "",
      vipname: ""
    };
  },
  mounted() {
    bus.$on("vipka", data => {
      this.bool = true;
      this.viptitle = data.vip_title;
      this.vipurls = data.vip_urls;
      this.vipname = data.vip_name;
    });
  },
  methods: {
    bj_out() {
      this.bool = false;
    },
    bj_out2() {
      this.bool = false;
    }
  }
};
</script>
<style scoped>
.put_in {
  width: 100%;
  height: 100%;
}
.put_bj {
  width: 100%;
  height: 100%;
  background: black;
  opacity: 0.5;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
}
.put_in_window {
  width: 80%;
  height: 60%;
  background: #fff;
  position: fixed;
  top: 8.34375rem;
  left: 2.34375rem;
  z-index: 100;
  text-align: center;
  border-radius: 0.625rem;
}
.put_in_window p:nth-child(3) {
  margin: 0.625rem 1.25rem 3rem 1.25rem;
  font-size: 0.875rem;
  color: rgb(97, 97, 97);
}
.put_in_window img {
  width: 5rem;
  height: 5rem;
  margin: 1.25rem auto;
  padding-top: 1.25rem;
  display: block;
}
.put_in_window div {
  margin: 1rem;
  padding: 0.625rem 0;
  text-align: center;
  border-radius: 0.4rem;
}
</style>
