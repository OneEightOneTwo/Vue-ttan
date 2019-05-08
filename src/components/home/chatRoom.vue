<template>
  <div>
    <!-- <header class="c_header">
      <div class="c_leftIcon"></div>
      <div class="title">
        <span></span>探探小助手
        <slot></slot>
      </div>
      <div class="c_rightIcon"></div>
    </header> -->
    <!-- 内容 -->
    <div class="c_content"  >
      <dl v-for="(item,idx) in c_main" :key="idx">
        <template v-if="item.statu == 0">
          <div>
            <dt></dt>        
            <dd >{{item.xinxi}}</dd>
          </div>
        </template>
        <template v-if="item.statu == 1">
            <div>
              <dd >{{item.xinxi}}</dd>
              <dt></dt>   
            </div>
          </template>
      </dl>
    </div>
    <!-- 输入框 -->
    <div class="c_send">
      <i class="adds"></i>
      <i class="expression"></i>
      <el-input placeholder="请输入内容" size="small" style="width: 2.6rem" v-model="input" clearable></el-input>
      <el-button type="danger" size="mini" class="send_s" @click="send">发送</el-button>
    </div>
  </div>
</template>
<script>
export default {
 
  data(){
   return{
    input: "",
      c_main:
      [{
       "xinxi":"教育局欧普峰哥uu还会忽悠非故意如何摧毁热身份和方法和瑞士和绯红积分回到家附近佛ID马路口级jdfeyuicy8空苦咖啡路口见公婆提交个人是的发个V大夫好评多人怕恐怕可靠的皮肤看到佛牌大V扣的放方法",
        statu: 0
      },
      {
        "xinxi":"个何瑞团体偶家提偶回家云机房监控车是黄齑淡饭大护法规范地方就分工会儿歌日合格发的福利时刻考虑金风科技就减肥一诶瑞吉欧防盗门",
        statu: 0
      },
      {
        "xinxi":"大半年及产能化发一份给我进口量纷纷大幅符合福我货到付款抵抗力批号发货",
        statu: 0
      },
      {
        "xinxi":"额问题会恢复对方是你大你就如同仁堂呵呵他浮动我就欧舒丹好",
        statu: 0
      },
      {
        "xinxi":"额问题会恢复对方是你大你就如同仁堂呵呵他浮动我就欧舒丹好",
        statu: 0
      },
      {
        "xinxi":"额问题会恢复对方是你大你就如同仁堂呵呵他浮动我就欧舒丹好",
        statu: 0
      },
      {
        "xinxi":"额问题会恢复对方是你大你就如同仁堂呵呵他浮动我就欧舒丹好",
        statu: 0
      },
      {
        "xinxi":"额问题会恢复对方是你大你就如同仁堂呵呵他浮动我就欧舒丹好",
        statu: 0
      },
      {
        "xinxi":"额问题会恢复对方是你大你就如同仁堂呵呵他浮动我就欧舒丹好",
        statu: 0
      },{
       "xinxi":"教育局欧普峰哥uu还会忽悠非故意如何摧毁热身份和方法和瑞士和绯红积分回到家附近佛ID马路口级jdfeyuicy8空苦咖啡路口见公婆提交个人是的发个V大夫好评多人怕恐怕可靠的皮肤看到佛牌大V扣的放方法",
       statu: 0
      },
      {
        "xinxi":"个何瑞团体偶家提偶回家云机房监控车是黄齑淡饭大护法规范地方就分工会儿歌日合格发的福利时刻考虑金风科技就减肥一诶瑞吉欧防盗门",
        statu: 0
      },
      {
        "xinxi":"大半年及产能化发一份给我进口量纷纷大幅符合福我货到付款抵抗力批号发货",
        statu: 0
      },
    ]
   }
     
    
  },
  methods:{
    send(){
      this.c_main.push({
        xinxi: this.input,
        statu: 1
      })
      // console.log(this.input);
      // console.log(this.con);
      // c_main.push(this.input);
    // this.con.push(`<dl> 
    //     <dt>挺好听的和东方红东方<dt>
    //     <dl>`),
      this.input=""
    }
  }
  
};
</script>
<style scoped>
.c_header {
  width: 100%;
  height: 0.5rem;
  line-height: 0.5rem;
  text-align: center;
  color: white;
  background-color: #d54433;
  font-size: 0.2rem;
  /* 弹性盒布局 */
  display: flex;
}
.c_leftIcon {
  background-image: url(../../assets/back.png);
  background-repeat: no-repeat;
  background-size: 0.24rem;
  background-position: center;
  flex: 1;
}
.title {
  flex: 3;
  font-size: 0.16rem;
}
.title span {
  background: url(../../assets/test.png) no-repeat center;
  width: 0.4rem;
  height: 0.4rem;
  background-size: contain;
  float: left;
  margin-right: -1.3rem;
  background-position: 0 0.02rem;
}
.c_rightIcon {
  background: url(../../assets/add.png) no-repeat center;

  background-size: 0.24rem;

  flex: 1;
}
/* 内容 */
.c_content {
  height: 5.7rem;
  background: url(../../assets/222119151115124001.jpg) no-repeat center;
  overflow: scroll;
  opacity: 0.5;
}
.c_content dl {
  display: flex;
  z-index: 100;
 
  padding: 0.1rem 0.1rem  0 0.1rem;

  margin: 0 .2rem 0 0;
}
.c_content dl div{
  display: flex;
}
.c_content dl div dt {
  background: url(../../assets/test.png) no-repeat center;
  height: 0.4rem;
  width: 0.4rem;
  border-radius: 0.2rem;
  background-size: contain;
  flex: 1;
}

.c_content dl div dd {
  flex: 6;
  background: #f1f1f1;
  box-shadow: 0.01rem 0.001rem 0.02rem #af9c9c;
  border-radius: 0.009rem;
  color: black;
  width: 3rem;
}
.c_send {
  border-radius: 0.07rem;
  width: 100%;
  height: 0.45rem;
  line-height: 0.45rem;
  /* text-align: center; */
  color: white;

  font-size: 0.2rem;
  /* 弹性盒布局 */
  display: flex;
  border: 0.016rem solid #ec7e7e;
}
.c_send .adds,
.c_send .expression {
  display: inline-block;
  height: 0.45rem;
  width: 0.33rem;
  margin-left: 0.05rem;
  /* margin-right: .1rem; */
  background: url(../../assets/adds.png) no-repeat center;
  background-size: contain;
  background-position: 0 0.05rem;
}
.c_send .expression {
  background: url(../../assets/expression.png) no-repeat center;
  background-size: contain;
}
.send_s {
  width: 0.8rem;
  height: 0.3rem;
  margin: 0.08rem 0.03rem 0 0.03rem;
}
</style>


