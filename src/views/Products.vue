<template>
  <div>
    <div class="head">
      <div class="head_img"></div>
      <div class="title animate__animated animate__lightSpeedInLeft">
        <p>产品中心</p>
        <p style="font-size:3.6rem">Products center</p>
      </div>
    </div>
    <div class="main" >
      <div class="content animate__animated animate__bounceIn">
        <VerticalSlider
          :sliderStyle="sliderStyle"
          :apps="apps"
          class=""
        ></VerticalSlider>
      </div>
    </div>
  </div>
</template>

<script>
import VerticalSlider from '../components/verticalSlider';
import data from "../api/info.json";
  export default {
    name: "product",
    components:{
      VerticalSlider
    },
    data() {
      return {
        sliderStyle:{
          mainstyle:{
            'background':'rgb(199, 198, 198,0.5)',
            'width':"80%",
            'height': "80rem"
          },
          cardcolor:"rgb(236, 234, 234)",
          cardbackground:{
            'background':'url('+require('@/assets/logo.png')+')',
            'background-repeat': 'no-repeat',
            'background-size':'contain',
            'background-position': 'center',
          }
        },
        apps:[]
      };
    },
    created(){
      this.apps = data.apps
    }
  }
</script>

<style scoped>
.head{
  height: 35rem;
  width: 100%;
  position: relative;
}
.head_img{
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left:0;
  background: url('../../public/products.jpg') no-repeat;
  background-size: cover;
}
.head_img::after{
  content: '';
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left:0;
  background: rgba(2, 2, 2, 0.144);
}
.head .title{
  top:30%;
}
.main {
  width: 100%;
  height: 84rem;
  position: relative;
  overflow: hidden;
  background: rgb(223,241,243);
  padding: 2rem 15rem;
  box-sizing: border-box;
}

</style>