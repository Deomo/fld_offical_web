<template>
  <div>
    <div class="head">
      <div class="img"></div>
      <div class="title animate__animated animate__lightSpeedInLeft">
        <p>加入我们</p>
        <p style="font-size:3.6rem">Enterprise recruitment</p>
      </div>
    </div>
    <div class="main">
      <div class="content animate__animated animate__slideInUp">
        <Tab :tab_data='data' :tab_style="tab_style"></Tab>
        </div>
      </div>
    </div>
</template>

<script>
import data from '../api/info.json';
import Tab from '../components/tab.vue';
  export default {
    components:{
      Tab
    },
    name:'',
    data(){
      return{
        data:{},
        tab_style:{
          height:"115rem",
          top: "-4%",
        }
      }
    },
    mounted() {
      this.data = data.tab_data
    },
  }
</script>

<style scoped>
.head{
  height: 35rem;
  width: 100%;
  position: relative;
}
.head .img{
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left:0;
  background: url('../../public/recruitment.jpg') no-repeat;
  background-size: cover;
}
.head .title{
  top:30%;
}
.main{
  width: 100%;
  background: rgb(223,241,243);
  position: relative;
  padding: 0 15rem;
  box-sizing: border-box;
}
.content{
  width: 100%;
  height: 120rem;
  margin: 0 auto;
  position: relative;
}
.el-tabs{
  position: absolute;
  top: 5rem;
  font-size: 4rem;
}

</style>