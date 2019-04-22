<template>
    <header>  
        <div class="leftIcon" @click="outnav"/>
        <div class="title" v-text="titless">探探</div>
        <div class="rightIcon" :style="{'background-image': `url(${urls})`}"/>
    </header> 
</template>
<script>
import bus from "../bus.js"
import $ from "jquery"
export default {
  data() {
    return {
      titless:"探探",
      urls:"../assets/right.png",
    };
  },
  created() {
    bus.$on("tocut", (data) => {
      this.titless = data.titles;     
      this.urls = data.urls;
    });
  },
  methods:{
    outnav(){
      $(".homes").animate({ left: "80%" }, 300);
      $(".nav").animate({ left: "0" }, 300);
    }
  }
};

</script>
<style scoped>
header {
   width: 100%;
  height: .5rem;
  line-height: .5rem;
  text-align: center;
  color: white;
  background-color: #D54433;
  font-size: .2rem;
  /* 弹性盒布局 */
  display: flex;
}
.leftIcon {
background-image: url(../assets/left.png);
    background-repeat: no-repeat;
    background-size: .24rem;
    background-position: center;
    flex: 1;
}
.rightIcon {
  
  background-repeat: no-repeat;
  background-size: .24rem;
  background-position: center;
  flex: 1;
}
.title {
  flex: 3;
}
</style>