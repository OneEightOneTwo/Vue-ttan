<template>
    <div class="mymessage">
       <div class="head_photo">
           <div>
                <span></span>
           </div>         
           <img src="../../assets/meinv.jpg" alt="">
       </div>
       <ul>
           <li>
               <p style="font-size:.18rem;font-weight:bolder;color:black;margin-bottom:.10rem">G g</p>
               <span style="background:rgb(58, 92, 248);">♂ 23</span>
               <span style="background:#e61f09">金牛座</span>
               <p style="margin:.08rem 0;color:#ccc;font-size:.14rem;">0m,1小时前活跃</p>
           </li>
           <li style="padding:.16rem;background:rgb(248, 236, 236)">
               <img src="../../assets/vip1.png" alt="" style="float:left;width:.22rem;height:.22rem;display:block">
               <span style="float: left;margin:0 .25rem">未开通会员</span>
               <span style="color:#e61f09;float: right;">查看特权</span>
           </li>
           <li>
               <img src="../../assets/aixin.png" alt="" style="float:left;width:.22rem;height:.22rem;display:block">
               <span style="font-size:.14rem;float: left;margin:0 .25rem">10人喜欢你</span>
               <span style="color:#e61f09;float: right;">谁喜欢我？</span>
               <p style="font-size:.14rem;color:#ccc;float: right;margin-top:.1rem">每天右划越多，获得喜欢数越多哦！</p>
           </li>
       </ul>
    </div> 
</template>
<script>
export default {};
</script>
<style scoped>
.mymessage {
   font-size: .16rem;
  height: 100%;
  width: 100%;
  overflow: scroll;
}
.mymessage ul li{
    padding:0.096rem 0.16rem;
    border-bottom: .0048rem solid #ccc;
    overflow: hidden;
}
.mymessage ul li:nth-child(1) span {
  margin-right: .03rem;
  color: #fff;
  background: rgb(58, 92, 248);
  border-radius: .05rem;
  text-align: center;
  font-size: .14rem;
  padding: .016rem 0.05rem
}
.head_photo {
  width: 100%;
  height: 58%;
  position: relative;
}
.head_photo img {
  height: 100%;
  width: 100%;
  display: block;
}
.head_photo div {
  width: 0.3rem;
  height: 0.3rem;
  background: #fff;
  position: absolute;
  right: 0.16rem;
  top: 0.16rem;
  border-radius: 50%;
}
.head_photo div span {
  width: 0.3em;
  height: 0.3em;
  background: url("../../assets/V.png");
  display: block;
  background-size: cover;
}
</style>
