<template>
  <div class="big">
    <transition name="dfs" :leave-active-class="donghuaname">
      <div
        class="last"
        @touchstart="fun1"
        @touchmove="fun2"
        @touchend="fun3"
        v-show="go"
        ref="last1"
      >
        <img src="../../assets/timg.jpg" alt>
        <div>
          <p class="name" v-text="name"></p>
          <div>
            <span class="sex" v-text="sex"></span>
          </div>
          <p class="juli">300m</p>
        </div>
      </div>
    </transition>
    <transition name="dfs" :leave-active-class="donghuaname">
      <div
        class="now"
        @touchstart="fun1"
        @touchmove="fun2"
        @touchend="fun3"
        v-show="huantu"
        ref="now1"
      >
        <img src="../../assets/timg.jpg" alt>
        <div>
          <p class="name" v-text="name"></p>
          <div>
            <span class="sex" v-text="sex"></span>
          </div>
          <p class="juli">500m</p>
        </div>
      </div>
    </transition>

    <div>
      <!-- 点击实现小动画 -->
      <ul>
        <li @click="fanhui">
          <transition name="bounce">
            <span v-show="show1">
              <i class="iconfont">&#xe6c3;</i>
            </span>
          </transition>
          <transition name="bounce">
            <span v-show="!show1">
              <i class="iconfont">&#xe6c3;</i>
            </span>
          </transition>
        </li>
        <li class="lispace" @click="dislike">
          <transition name="bounce">
            <span v-show="show2" class="bigli" style>
              <i class="iconfont">&#xe628;</i>
            </span>
          </transition>
          <transition name="bounce">
            <span v-show="!show2" class="bigli" style>
              <i class="iconfont">&#xe628;</i>
            </span>
          </transition>
        </li>
        <li @click="superlike">
          <transition name="bounce">
            <span v-show="show3">
              <i class="iconfont">&#xe625;</i>
            </span>
          </transition>
          <transition name="bounce">
            <span v-show="!show3">
              <i class="iconfont">&#xe625;</i>
            </span>
          </transition>
        </li>
        <li class="lispace" @click="like">
          <transition name="bounce">
            <span v-show="show4" class="bigli">
              <i class="iconfont">&#xe602;</i>
            </span>
          </transition>
          <transition name="bounce">
            <span v-show="!show4" class="bigli">
              <i class="iconfont">&#xe602;</i>
            </span>
          </transition>
        </li>
        <li @click="shoucang">
          <transition name="bounce">
            <span v-show="show5">
              <i class="iconfont">&#xe60b;</i>
            </span>
          </transition>
          <transition name="bounce">
            <span v-show="!show5">
              <i class="iconfont">&#xe60b;</i>
            </span>
          </transition>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show1: true,
      show2: true,
      show3: true,
      show4: true,
      show5: true,
      go: true,
      sex: "♀22",
      name: "taeri",
      fir: 10,
      startx: 0,
      starty: 0,
      endx: 0,
      endy: 0,
      huantu: true,
      donghuaname: "",
      huantukg: 1,
      abc: 0
    };
  },
  methods: {
    fun1: function(e) {
      if (this.huantukg == 1) {
        this.$refs.now1.style.zIndex = 10;
        this.$refs.last1.style.zIndex = 1;
        this.go = true;
      } else {
        this.$refs.last1.style.zIndex = 10;
        this.$refs.now1.style.zIndex = 1;
        this.huantu = true;
      }
      this.startx = e.targetTouches[0].clientX;
      this.starty = e.targetTouches[0].clientY;
    },
    fun2: function(e1) {
      this.endx = e1.targetTouches[0].clientX;
      this.endy = e1.targetTouches[0].clientY;
      if (this.huantukg == 1) {
        this.$refs.now1.style.top = .39 + (this.endy - this.starty) + "rem";
        this.$refs.now1.style.left = .33 + (this.endx - this.startx) + "rem";
        if (Math.abs(this.endx - this.startx) > 200)
          this.$refs.last1.style.transform = "scale(1.08)";
        else {
          this.abc = 1 + (Math.abs(this.endx - this.startx) / 300) * 0.08;
          this.$refs.last1.style.transform = "scale(" + this.abc + ")";
        }
      } else {
        this.$refs.last1.style.top = .39 + (this.endy - this.starty) + "rem";
        this.$refs.last1.style.left = .33 + (this.endx - this.startx) + "rem";
        if (Math.abs(this.endx - this.startx) > 200)
          this.$refs.now1.style.transform = "scale(1.08)";
        else {
          this.abc = 1 + (Math.abs(this.endx - this.startx) / 300) * 0.08;
          this.$refs.now1.style.transform = "scale(" + this.abc + ")";
        }
      }
    },
    fun3: function() {
      if (this.endx - this.startx > 300) {
        if (this.huantukg == 1) {
          this.show4 = !this.show4;
          this.donghuaname = "animated bounceOutRight";
          this.huantu = !this.huantu;
          this.huantukg = 0;
        } else {
          this.show4 = !this.show4;
          this.donghuaname = "animated bounceOutRight";
          this.go = !this.go;
          this.huantukg = 1;
        }
      } else if (this.endx - this.startx < -200) {
        this.show2 = !this.show2;
        this.donghuaname = "animated bounceOutLeft";
        this.huantu = !this.huantu;
      } else if (this.endy - this.starty < -200) {
        this.show3 = !this.show3;
        this.donghuaname = "animated bounceUpLeft";
        this.huantu = !this.huantu;
      }
      this.endy = 0;
      this.endx = 0;
      this.$refs.now1.style.top = .39 + "rem";
      this.$refs.now1.style.left = .33 + "rem";
      this.$refs.last1.style.top = .39 + "rem";
      this.$refs.last1.style.left = .33 + "rem";
    },
    fanhui: function() {
      this.show1 = !this.show1;
    },
    dislike: function() {
      this.show2 = !this.show2;
      this.donghuaname = "animated bounceOutLeft";
        if (this.huantukg == 1) {
          this.$refs.now1.style.zIndex = 10;
        this.$refs.last1.style.zIndex = 1;
        this.go = true;
        this.huantu = !this.huantu;
        this.huantukg = 0;
        this.$refs.last1.style.transform = "scale(1.08)";
      } else {
        this.$refs.now1.style.zIndex = 1;
        this.$refs.last1.style.zIndex = 10;
        this.huantu = true;
        this.go = 0;
        this.huantukg = 1;
        
      }
    },
    superlike: function() {
      this.show3 = !this.show3;
    },
    like: function() {
      this.show4 = !this.show4;
      this.donghuaname = "animated bounceOutRight";
      if (this.huantukg == 1) {
          this.$refs.now1.style.zIndex = 10;
        this.$refs.last1.style.zIndex = 1;
        this.go = true;
        this.huantu = !this.huantu;
        this.huantukg = 0;
        this.$refs.last1.style.transform = "scale(1.08)";
      } else {
        this.$refs.now1.style.zIndex = 1;
        this.$refs.last1.style.zIndex = 10;
        this.huantu = true;
        this.go = 0;
        this.huantukg = 1;
        
      }
    },
    shoucang: function() {
      this.show5 = !this.show5;
    }
  }
};
</script>
<style scoped>
ul {
  width: 100%;
  position: absolute;
  bottom: .10rem;
  list-style: none;
  display: inline-block;
}
li {
  float: left;
  width: .44rem;
  height: .44rem;
  border-radius: .22rem;
  margin-top: .22rem;
  margin-left: .12rem;
  margin-right: .12rem;
  background: grey;
  text-align: center;
  line-height: .32rem;
  overflow: hidden;
}
ul li span {
  display: block;
  font-size: .14rem;
  width: .32rem;
  height: .32rem;
  border-radius: .16rem;
  margin-left: .6rem;
  margin-top: .6rem;
  background: gainsboro;
}
ul li span i {
  color: red;
}
.lispace {
  width: .52rem;
  height: .52rem;
  border-radius: .26rem;
}
.big {
  width: 100%;
  height: 6rem;
  position: relative;
  overflow: hidden;
}
.bigli {
  width: .40rem;
  height: .40rem;
  border-radius: .20rem;
}
.last {
  position: absolute;
  width: 3.14rem;
  height: 4.40rem;
  left: .33rem;
  z-index: 1;
  top: .39rem;
  border: .01rem solid gainsboro;
  border-radius: .10rem;
  /* transform: scale(1.08); */
  font-size: .14rem;
  background: beige;
}
.last img {
  width: 3.14rem;
  height: 3.40rem;
  border-top-right-radius: .10rem;
  border-top-left-radius: .10rem;
}
.now {
  position: absolute;
  width: 3.14rem;
  height: 4.40rem;
  left: .33rem;
  z-index: 9;
  top: .39rem;
  border: .01rem solid gainsboro;
  border-radius: .10rem;
  transform: scale(1.08);
  font-size: .14rem;
  background: beige;
}
.now img {
  width: 3.14rem;
  height: 3.40rem;
  border-top-right-radius: .10rem;
  border-top-left-radius: .10rem;
}
.name {
  font-size: .22rem;
  font-weight: 100;
  margin-left: .10rem;
  margin-bottom: .10rem;
}
.sex {
  margin-left: .10rem;
  background: pink;
}
.juli {
  margin-left: .10rem;
  margin-top: .10rem;
}
.bounce-enter-active {
  animation: bounce-in 1s;
}
@keyframes bounce-in {
  0% {
    transform: scale(0.5);
  }
  25% {
    transform: scale(1.1);
  }
  50% {
    transform: scale(0.8);
  }
  75% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
}
</style>
