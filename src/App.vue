<template>
  <div id="app">
    <!-- 导航 -->
    <el-menu
      :default-active="activeIndex"
      background-color="rgb(23,83,89)"
      mode="horizontal"
      text-color="#fff"
      active-text-color="#fff"
      router>
        <img src="./assets/logo.png" alt="logo">
        <el-menu-item index="/" style="margin-left: 45%">首页</el-menu-item>
        <el-menu-item index="/products">产品中心</el-menu-item>
        <el-menu-item index="/latest">最新项目</el-menu-item>
        <el-menu-item index="/leadership">管理层</el-menu-item>
        <el-menu-item index="/recruitment">加入我们</el-menu-item>
        <el-menu-item><a href="http://www.qufang360.com/admin">管理系统</a></el-menu-item>
    </el-menu>
    <!-- 导航 -->
    <router-view></router-view>
    <!-- view -->
    <Footer v-if="$route.path != '/'"></Footer>
  </div>
</template>
<script>
import Footer from './components/footer.vue'
export default {
  name:"app",
  components:{
    Footer
  },
  data() {
      return {
        activeIndex: '/',
      };
    },
    methods: {
    }
  }
</script>

<style>
*{
  margin: 0;
  padding: 0;
  font-family: "Microsoft YaHei";
}
@media only screen and (min-width: 320px){
  html {
    font-size: 20.625% !important;
  }
}
@media only screen and (min-width: 640px){
  html {
    font-size: 41.25% !important;
  }
}
@media only screen and (min-width: 750px){
  html {
    font-size: 49.5% !important;
  }
}
@media only screen and (min-width: 1242px){
  html {
    font-size: 62.5% !important;
  }
}
.title{
  position: absolute;
  top:15%;
  width: 100%;
  text-align: center;
  font-size:4.2rem;
  color:rgb(245,245,245);
  }
.el-menu{
  width: 100%;
  position: relative;
  border-bottom: 0px !important;
  z-index: 999;
}
.el-menu-item{
  font-size: 1.6rem;
  width: 10rem;
  text-align: center;
}
a,a:hover,a:link,a:visited,a:active {
  text-decoration: none;
}
.el-menu img{
  position: absolute;
  margin-top: 1em;
  margin-left: 10%;
  width:10em;
}
</style>
