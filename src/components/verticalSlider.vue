// 样式
//  sliderStyle:{
//    mainstyle:{
//      'background':'rgb(199, 198, 198,0.5)',//主背景颜色
//      'width':"140rem",
//      'height': "80rem"
//    },
//    cardcolor:"rgb(236, 234, 234)",// 卡片背景色
//    cardbackground:{
//      'background':'url('+require('@/assets/logo.png')+')',// 卡片背景图
//      'background-repeat': 'no-repeat',
//      'background-size':'contain',
//      'background-position': 'center',
//    }
//  },
//  数据结构
// "apps":[
//     {
//       "url":"./app/app.png",
//       "title":"多多趣房",
//       "description":"全国热销楼盘，10w+注册经纪人，一个APP尽在掌握；房源信息、实景照片、周边配套...一切“拿图说话”；"
//     },
//     }
// ]
<template>
  <div class="slider" :style="sliderStyle.mainstyle">
      <div class="box" ref="box">
            <ul :style="{marginTop:top+'rem'}" :class="transition" ref="ul">
            <li class="product"
                v-for="(item,index) in apps"
                :key="index"
                :style="{background:sliderStyle.cardcolor}">
                <img :src="item.url" alt="">
              <div class="details">
                <h1>{{item.title}}</h1>
                <span>{{item.description}}</span>
              </div>
              <div class="after" :style="sliderStyle.cardbackground"></div>
            </li>
            <li class="product" :style="{background:sliderStyle.cardcolor}">
              <img :src="apps[0].url" alt="">
              <div class="details">
                <h1>{{apps[0].title}}</h1>
                <span>{{apps[0].description}}</span>
              </div>
              <div class="after" :style="sliderStyle.cardbackground"></div>
            </li>
          </ul>
        </div>
      <div class="pages">
            <div class="pages_box">
              <div class="pre page" @click="prev">PREV</div>
              <div class="next page" @click="next">NEXT</div>
            </div>
      </div>
  </div>
</template>

<script>
  export default {
    name:"verticalSlider",
    props:["sliderStyle","apps"],
    data(){
      return{
        top:0,
        currentIndex:0,
        transition:'transition',
        boxHeight:0
      }
    },
    methods:{
      next(){
        this.transition='transition'
        this.currentIndex++
        this.top = -62 * this.currentIndex;
        if(this.currentIndex > this.$refs.ul.childNodes.length - 1){
          this.currentIndex = 0;
          this.top = -62 * this.currentIndex;
          this.transition='';
          setTimeout(()=>{
            this.currentIndex++;
            this.top = -62 * this.currentIndex;
            this.transition='transition'
          },0)
        }
      },
      prev(){
          if(this.currentIndex == 0){
          this.currentIndex = this.$refs.ul.childNodes.length - 1;
          this.top = -62 * this.currentIndex;
          this.transition='';
          setTimeout(()=>{
            this.transition='transition';
            this.currentIndex--;
            this.top = -62 * this.currentIndex;
          },0)
        }else{
          this.transition='transition';
          this.currentIndex--;
          this.top = -62 * this.currentIndex;
        }
      },
    }
  }
</script>

<style scoped>
.slider{
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 10rem;
  box-sizing: border-box;
  margin: 2rem auto;
}
.box{
  width: 90rem;
  height: 60rem;
  box-shadow: 0.8rem 0.7rem 0.9rem 1rem rgba(0,0,0,0.51);
  margin:0 auto;
  border-radius: 3%;
  overflow: hidden;
}
ul{
  height: 100%;
  width: 100%;
}
.transition{
  transition: all 0.8s ease-in-out;
}
.product{
  width: 100%;
  height: 100%;
  border-radius: 3%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  box-shadow: 1rem -1rem 0.1rem 0.8rem rgba(0,0,0,0.51);
  margin-bottom:2rem ;
}
.pages{
  text-align: center;
  width: 8rem;
  height: 75%;
  display: flex;
  align-items: center;
}
.pages_box{
  height: 60%;
  position: relative;
}
.page{
  width: 8rem;
  height: 8rem;
  border-radius: 8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2.6rem;
  font-weight: 800;
  cursor: pointer;
  box-shadow: 0.6rem 0.7rem 0.9rem 0.1rem rgba(0,0,0,0.51);
  background: rgba(23,83,89,0.5);
  color: aliceblue;
  margin-left: 1rem;
}

.page:active{
  box-shadow: 0.5rem 0.6rem 1rem 0.3rem rgba(0,0,0,0.51) inset;
  background: rgb(23,83,89,0.8);
  color: rgba(238, 240, 243, 0.8);
  font-size:2.4rem;
}
.next{
  position: absolute;
  bottom: 0;
  left: 0;
}
.product img{
  width: 15rem;
  border: 0.4rem dashed rgb(23,83,89);
  padding: 0.5rem;
  border-radius: 15rem;
  margin-right: 6rem;
  z-index: 1;
  box-shadow: 0.6rem 0.7rem 0.9rem 0.1rem rgba(0,0,0,0.51);

}
.details{
  width: 60%;
  height: 60%;
  background: rgba(245, 243, 243,0);
  border-radius: 5%;
  position: relative;
  padding: 4rem;
  box-sizing: border-box;
  color: rgba(0,0,0,0.8);
  z-index: 1;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
}
.details:hover{
  box-shadow: 0.6rem 0.7rem 0.9rem 0.1rem rgba(0,0,0,0.51);
  background: rgba(23,83,89,0.5);
  color: aliceblue;
  font-weight: 600;
}
h1{
  display: block;
  font-size: 4rem;
  letter-spacing: 0.5rem;
  margin-bottom: 2.5rem;
  z-index: 1;
}
.details span{
  font-size: 2.4rem;
  line-height: 4rem;
}
.after{
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0.8;
}

</style>