<template>
  <div>
    <full-page :options="options">
      <div class="section section_1" >
          <div class="title">
            <img src="../assets/logo.png" alt="房乐多">
          </div>
          <div id="slogen" :class="slogen">共创旅居美好生活</div>
          <Mouse class="mouse_component"></Mouse>
        </div>
        <div class="section section_2" >
          <div class="mask">
            <div class="title" :class="project" style="top:10%">
              <p>精 品 项 目</p>
              <p style="font-size:3.2rem">Suecessful Cass</p>
            </div>
            <div id="projects" :class="project">
              <div id="project_box">
                <ImgCard
                  v-for="(item,index) in projectCase"
                  :key="index"
                  :card_style="card_style"
                  :item="item"
                  :showInfo="true"
                  :infobg="infobg"
                  class="imgcard"
                  ></ImgCard>
              </div>
            </div>
          </div>
        </div>
        <div class="section section_3" >
          <div class="mask">
            <div class="title" :class="project" style="top:10%">
              <p>发 展 历 程</p>
              <p style="font-size:3.2rem">Development Process</p>
            </div>
            <div class="development">
              <div class="content" :class="slidIn"></div>
            </div>
          </div>
        </div>
    </full-page>
  </div>
</template>
<script>
import Mouse from '../components/mouse.vue'
import ImgCard from '../components/imgCard.vue'
import data from '../api/info.json'
  export default {
    name: 'home',
    components:{
      Mouse,
      ImgCard
    },
      data (){
        return {
          options: {
            afterLoad: this.afterLoad,
            onLeave: this.onLeave,
            loopBottom: true,
            // anchors: ['page1', 'page2', 'page3'],
          },
          sec2Active:true,
          project:'',
          slogen:'animate__animated animate__fadeInUp',
          slidIn:'slidIn',
          /***Card样式 */
          card_style:{
            width: '32rem',
            height: '20rem',
          },
          infobg: 'background: rgba(23, 83, 89, 0.6)',
          projectCase:[],
        }
      },
    methods: {
      afterLoad: function(origin) {
        if(origin.index == 1){
          this.project = 'animate__animated animate__fadeInDown'
          this.slogen = 'animate__animated animate__fadeInUp'
          this.slidIn = 'slidIn'
        }
        if(origin.index == 2){
          this.project = 'animate__animated animate__fadeInDown'
          this.slogen = 'animate__animated animate__fadeInUp'
          this.slidIn = 'slidIn'
        }
        if(origin.index == 0){
          this.project = 'animate__animated animate__fadeInDown'
          this.slogen = 'animate__animated animate__fadeInUp'
          this.slidIn = 'slidIn'
        }
      },
      onLeave: function(origin) {
        if(origin.index == 0){
          this.project = ''
          this.slogen = ''
          this.slidIn = ''
        }
        if(origin.index == 1){
          this.project = ''
          this.slogen = ''
          this.slidIn = ''
        }
        if(origin.index == 2){
          this.project = ''
          this.slogen = ''
          this.slidIn = ''
        }
      }
    },
    mounted(){
      this.projectCase = data.projectCase;
    }
  }
</script>
<style scoped>
.section {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
}
.section_1 {
  background: url('../assets/home/page1.jpg') no-repeat;
  background-size: cover;
}
.title img{
  width: 24rem;
}
#slogen{
  font-size: 6rem;
  letter-spacing: 0.3em;
  color: aliceblue;
  position: absolute;
  top: 40%;
  width: 100%;
  text-align: center;
}
.section_2 {
  background: url('../assets/home/page2.jpg') no-repeat;
  background-size: cover;
  /* padding: auto; */
}
.section_3 {
  background: url('../assets/home/page3.jpg') no-repeat;
  background-size: cover
}
.mouse_component{
  position: absolute;
  bottom: 25%;
  left: 50%;
  transform: translateX(-50%);
}
.mask{
  width: 100%;
  height: 100%;
  background: rgba(20,20,20,0.3);
}
/**section2 */
#projects{
  width: 100%;
  height: 50rem;
  overflow: hidden;
  position: absolute;
  top: 25%;
}
#project_box{
    width: 75%;
    height: 100%;
    text-align: center;
    margin: auto;
}
.imgcard{
  margin: 2rem 2rem;
}
/**section3 */
.development {
  width: 120rem;
  height: 55rem;
  /* background: red; */
  position: absolute;
  top: 25%;
  left: 50%;
  transform: translateX(-50%);
  overflow: hidden;
}
.development .content{
  width: 100%;
  height: 100%;
  background: url('../../public/development.png');
  background-size: 100% 100%;
  position: absolute;
  left: 0;
  top: 0;
}
.slidIn{
  animation: fadeRight 1s linear;
}

@keyframes fadeRight {
  0%{
      transform: translate(100%,0);
  }
  100%{
    transform: translate(0%,0);
  }
}
</style>