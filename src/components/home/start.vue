<template>
  <div>
    <!-- <div class="title">
      <p>右划<span>喜欢</span></p>
      <p>左划<span>无感</span></p>
    </div> -->
  
    
<div class="block">
    <span class="demonstration"></span>
    <el-carousel  height="5rem"
   >
      <el-carousel-item   v-for="(item,index) in images" :key="index">
        <h3> <img :src="item" style="height:100%"/></h3>
      </el-carousel-item>
    </el-carousel>
  </div>
    
 <div class="l_footer">
  <el-button type="success" class="anniu" >微信登录</el-button>
   <el-button class="anniu" @click = "login">手机号登录</el-button>

 </div>
  </div>
 
</template>

<script>
// import Xheader from "../../components/xheader.vue";
export default {
 data() {
    return {
     images:[
      //   require求请求图片过来
      require("../../assets/01.jpeg"),
      require("../../assets/56eff1e0c7eaeca89e3f2f285e34c309.jpg"),
      require("../../assets/222119151115124001.jpg"),
      require("../../assets/c41eee0efca8a575bbcc50a99d4789fb_1000x750.jpg")
      ]
    }
  },methods:{
    login(){
     
          this.$router.push({path:'login'})
    }
  }
};
</script >

<style scoped>
.anniu{
  width: 40%;
  margin-left: 0.25rem;
}
.l_footer{
  height: 2rem;
      margin-top: .5rem;
}
 .el-carousel__item h3 {
    color: #475669;
    font-size: .14rem;
    opacity: 0.75;
    line-height: 1.5rem;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }
</style>