<template>
    <div class="biaobai">
       <div class="huli_tu">
            <div></div> 
            <img src="../../assets/huli.jpeg" alt="">                  
       </div>
       <p style="font-size:.18rem;font-weight:bolder;margin:.15rem">喜欢Ta，不敢讲？</p>
       <p>暗恋表白帮你试探Ta!</p>
       <p style="margin:.08rem">请在下列联系人中勾选</p>
        <div class="book">
            <ul>
                <li>
                    <p style="font-weight:bolder;margin:.15rem 0 .15rem .10rem;color:#e61f09">A</p>
                    <div>
                        <input type="checkbox">
                        <span>小明</span>
                    </div>
                    <div>
                        <input type="checkbox">
                        <span>小花</span>
                    </div>
                    <div>
                        <input type="checkbox">
                        <span>小黑</span>
                    </div>
                </li>
                <li>
                    <p style="font-weight:bolder;margin:.15rem 0 .15rem .10rem;color:#e61f09">B</p>
                    <div>
                        <input type="checkbox">
                        <span>老王</span>
                    </div>
                    <div>
                        <input type="checkbox">
                        <span>老李</span>
                    </div>
                    <div>
                        <input type="checkbox">
                        <span>老陈</span>
                    </div>
                </li>
            </ul>
        </div>
    </div> 
</template>
<script>
// import $ from "jquery";
export default {
    methods:{
        
    }
};
</script>
<style scoped>
.biaobai {
    font-size: .16rem;
  text-align: center;
  overflow: scroll;
  height: 100%;
  width: 100%;
}
.biaobai .huli_tu {
  width: 100%;
  height: 2.24rem;
  background: url("../../assets/huli.jpeg");
  position: relative;
  background-size: cover;
}
.biaobai .huli_tu div {
  width: 100%;
  height: 100%;
  background: #ffffff;
  opacity: 0.8;
}
.huli_tu img {
  width: 1.6rem;
  height: 1.6rem;
  display: block;
  position: absolute;
  top: 0.35rem;
  left: 1.072rem;
  border-radius: 30%;
}
.book ul li{
    text-align: left;
    width: 100%;
    border-top: .001rem solid #ccc;
    margin-top: 0.2rem
}
.book ul li div{
    margin: 0.2rem 0;
    line-height: .28rem
}
.book ul li div input{
    width: 0.16rem;
    height: 0.16rem;
    border-radius: 50%;
    margin: 0 0.24rem;
}
</style>