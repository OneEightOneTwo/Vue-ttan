<template>
  <div class="xinshou">
    <div class="heade_t">
      <div>如何成为探探高手！</div>
      <p>探探3.4.6.1</p>
    </div>
    <ul class="kinds">
      <li
        @click="yidao(index)"
        v-for="(t,index) in Instructions"
        :key="index"
        v-text="Instructions[index].title"
      ></li>
    </ul>
  </div>
</template>
<script>
export default {
  yidao() {},
  data() {
    return {
      Instructions: [
        { title: "探探怎么玩？" },
        { title: "怎样让更多人喜欢我？" },
        { title: "我没有配对，或喜欢数长期不涨！" },
        { title: "聊不起来，打招呼没人理。" }
      ]
    };
  }
};
</script>
<style scoped>
.xinshou {
  width: 100%;
  height: 100%;
  overflow: scroll;
}
.heade_t {
  width: 100%;
  height: 30%;
  background: url("../../assets/meinv.jpg");
  overflow: hidden;
  background-size: cover;
}
.heade_t div {
  font-size: 0.2rem;
  font-weight: bolder;
  color: #fff;
  text-align: center;
  width: 100%;
  padding: 0.7rem 0;
}
.heade_t p {
  color: rgb(80, 79, 79);
  text-align: center;
  font-size: 0.14rem;
}
.xinshou ul {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}

.xinshou ul li {
  padding: 0.2rem 0;
  margin-left: 0.1rem;
  border-bottom: 0.01rem solid #ccc;
  font-size: 0.16rem;
  background: #fffcfc;
}
</style>