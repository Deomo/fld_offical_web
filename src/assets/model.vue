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

    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return{

      }
    }
  }
</script>

<style scoped>
.head{
  height: 500px;
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
  height: 800px;
  position: relative;
  overflow: hidden;
  background: rgb(223,241,243);
  padding: 0 15rem;
  box-sizing: border-box;
}


</style>
