// 自定义：'item','card_style','showInfo'
// 'item': item.title —— mask标题;item.imgUrl —— 背景图片;item.detail —— 详情链接;
// 'card_style'：width，height，
// 'showInfo' :是否hover展示详情 
// infobg : info的style
<template>
  <div class="content" :style="card_style">
    <div class="img">
      <img :src="item.imgUrl" alt="">
    </div>
      <div class="info" v-if="showInfo" :style="infobg">
        <div class="title">
          <p>{{item.title}}</p> 
        </div>
        <div class="detail">
          <a :href="item.detail" target="_blank">DETAIL</a>
        </div>
      </div>
  </div>
</template>

<script>
  export default {
    name: "imgCard",
    props:['item','card_style','showInfo','infobg'],
    data(){
      return {
      }
    }
  }
</script>

<style scoped>
.content{
  display: inline-block;
  position: relative;
  overflow: hidden;
  border-radius: 1rem;
}
.img,img{
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
}

.info{
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: all 0.5s linear;
  position: absolute;
  /* background: rgba(23, 83, 89, 0.6); */
  animation: infoOut 0.5s linear ease-in;
}
.content:hover .info{
  opacity: 1;
}
.content:hover img{
  transform: scale(1.3);
  transition: all 0.5s linear;
}
.title{
  color: #fff;
  font-size: 2.4rem;
  width: 88%;
  top: 10%;
  opacity: 1;
  position: absolute;
  margin: 7% 5%;
  text-align: center;

}
.title p{
  overflow: hidden;
  text-overflow:ellipsis;
}
.detail{
  width: 35%;
  height: 20%;
  border: white 0.2rem solid;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 20%;
  cursor: pointer;
}
.detail a{
  font-size: 2rem;
  color: #fff;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
}


</style>