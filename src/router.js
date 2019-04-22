import Vue from 'vue'
import VueRouter from 'vue-router'
// emlement-ui样式
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// 引入iview
import iView from 'iview';
import 'iview/dist/styles/iview.css';
// 模块化必须显式使用Vue.use来加载路由功能

Vue.use(ElementUI);
Vue.use(iView);

Vue.use(VueRouter)
//使用路由中间件
import Xhome from './components/Xhome.vue'
import Mymessage from './components/home/Mymessage.vue'
import tantan from './components/home/tantan.vue'
import jihuo from './components/home/jihuo.vue'
import biaobai from './components/home/biaobai.vue'
import renzheng from './components/home/renzheng.vue'
import shezhi from './components/home/shezhi.vue'
import xinshou from './components/home/xinshou.vue'
import tuijian from './components/home/tuijian.vue'
import start from './components/home/start.vue'
import tidings from './components/home/tidings.vue'
import login from './components/home/login.vue'
import chatRoom from './components/home/chatRoom.vue'
const routes = [
    {
        path: '/xhome', component: Xhome, name: 'xhome',
        children: [
            {path: '/', redirect: 'tantan' },
            {path: 'mymessage', component: Mymessage, name: 'mymessage'},
            {path: 'tantan', component: tantan, name: 'tantan'},
            {path: 'jihuo', component: jihuo, name: 'jihuo'},
            {path: 'biaobai', component: biaobai, name: 'biaobai'},
            {path: 'renzheng', component: renzheng, name: 'renzheng'},
            {path: 'shezhi', component: shezhi, name: 'shezhi'},
            {path: 'xinshou', component: xinshou, name: 'xinshou'},
            {path: 'tuijian', component: tuijian, name: 'tuijian'},
            {path: 'start', component: start, name: 'start'},
            {path: 'tidings', component: tidings, name: 'tidings'},
            {path: 'login', component: login, name: 'login'},
            {path: 'chatRoom', component: chatRoom, name: 'chatRoom'},
        ]
    },
     // 设置默认重定向
     { path: '/', redirect: '/xhome' } 
]
const router = new VueRouter(
    {
        routes
    }
)

// 暴露路由对象，为后续挂载容器做准备
export default router