<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
html,body{
    /* 100px=26.67vw */
  font-size: 26.67vw;
}
html,body,#app,Xhome{
  width: 100%;
  height: 100%;
}
ul li{
  list-style: none;
}
</style>
