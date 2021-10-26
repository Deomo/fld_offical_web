<template>
  <div>
    <div class="head">
      <div class="img"></div>
      <div class="title animate__animated animate__lightSpeedInLeft">
        <p>最新项目</p>
        <p style="font-size:3.6rem">Current Project</p>
      </div>
    </div>
    <div class="main" >
      <div class="content">
        <latestItem
          :itemStyle="itemStyle"
          v-for="(item,index) in items"
          :item="item"
          :key="index"
          :class="index % 2 == 0 ? bounceInRight : bounceInLeft"
          ></latestItem>
      </div>
    </div>
  </div>
</template>

<script>
import data from '../api/info.json';
import latestItem from '../components/latestItem.vue';
  export default {
    name:"Latest",
    components:{
      latestItem
    },
    data(){
      return{
        itemStyle:{
          "itemHeight":"55rem",
          "bdColor":"rgb(115, 151, 155)",
          "bgColor":"rgb(223, 241, 243)"
        },
        items:[],
        bounceInLeft:"animate__animated animate__bounceInLeft",
        bounceInRight:"animate__animated animate__bounceInRight"
      }
    },
    created(){
      this.items = data.items;
    }
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
  background: url('../../public/latest.jpg') no-repeat;
  background-size: cover;
}
.head .title{
  top:30%;
}
.main {
  width: 100%;
  /* height: 100%; */
  position: relative;
  overflow: hidden;
  background: rgb(223,241,243);
  padding: 0 15rem;
  box-sizing: border-box;
}
.content{
  width: 100%;
  margin: 2rem auto;
  background: #fff;
}


</style>
