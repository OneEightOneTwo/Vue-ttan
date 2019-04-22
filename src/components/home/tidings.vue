<template>
  <div class="eight_menu">
    <div class="l_back"></div>
    <h1>所有配对</h1>
    <div class="quan">
      <span></span>朋友圈
    </div>
 
      <Tabs value="name1" type="line">
        <TabPane label="我的喜欢" name="name1" type="line" size="small">
          <div class="main">
            <dl class="like">
              <dt></dt>
              <dd>查看我喜欢的</dd>
              <p>曾经对眼的？划过就能收藏喔</p>
            </dl>
            <dl class="like">
              <dt></dt>
              <dd>探探小助手</dd>
              <p>月下流光，你最近一共收到3个妹子的喜欢</p>
            </dl>
          </div>
        </TabPane>
        <TabPane label="聊天" name="name2">
          <div class="main">
            <dl class="like">
              <dt></dt>
              <dd>探探小助手</dd>
              <p>月下流光，你最近一共收到3个妹子的喜欢</p>
            </dl>
          </div>
        </TabPane>
      </Tabs>
    </div>

</template>

<script>
export default {
};
</script>
<style >
.l_back{
  height: .3rem;
  width: .2rem;
  background: url(../../assets/back.png)no-repeat center;
  background-size: contain;
}
.eight_menu {
  color: white;
  /* height: 100rem; */
  background: #251d1b;
}
h1 {
  height: 0.7rem;
  font-size: 0.25rem;
  line-height: 0.7rem;
  padding-left: 0.2rem;
}
.quan {
  height: 0.4rem;
  background: #3a3a3a;
  font-size: 0.18rem;
  width: 80%;
  margin-left: 5%;
  line-height: 0.4rem;
  border-radius: 0.1rem;
}
.quan span {
  height: 0.4rem;
  width: 0.2rem;
  background: url(../../assets/quan.png) no-repeat center;
  background-size: contain;
  display: block;
  float: left;
  margin-right: 0.1rem;
}
.news {
  font-size: 0.15rem;
}
.news .nav {
  height: 0.5rem;
  text-align: center;
}
.nav li {
  float: left;
  width: 48%;
  border-bottom: 0.02rem solid #c03e1e;
  margin-left: 2%;
  list-style: none;
  line-height: 0.5rem;
}
.news .c_main {
  position: relative;
  height: 2rem;
  width: 100%;
  background: #282626;

}
.c_main .main {
  position: absolute;
  width: 100%;
   
}

.main .like {
  height: 0.5rem;
  border-bottom: 0.01rem solid #f1e3e3;
   color: white;
}
.main .like:hover {
  background: #494746;
}
.like dt {
  background: url(../../assets/talk.png) no-repeat center;
  width: 0.5rem;
  height: 0.4rem;
  background-size: contain;
  margin-left: 0.1rem;
  float: left;
  margin-right: 0.1rem;
}
.like dl p {
  width: value;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.main .like:nth-child(2) dt {
  background: url(../../assets/test.png) no-repeat center;
  background-size: contain;
}
.like dd .like p {
  float: right;
}
.like {
  /* display: flex; */
}
.ivu-tabs-nav {
  width: 100%;
}
.ivu-tabs-nav .ivu-tabs-tab {
  width: 50%;
}
</style>

