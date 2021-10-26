// "items":[
//     {
//       "imgUrl": "./case/图片.png",
//       "titile": "标题",
//       "text": "介绍",
//       "left": false
//     }]
<template>
  <div
    class="item"
    :style="{'height':itemStyle.itemHeight}">
    <div class="item_head">
      <span
        class="head_line"
        :style="{'borderColor':itemStyle.bdColor}"
        ></span>
      <div
        class="head_image"
        :class="item.left?'':'image_right'"
        :style="{'borderColor':itemStyle.bdColor}"
        >
          <img :src="item.imgUrl" alt="">
      </div>
      <div
        class="head_title"
        :class="item.left?'':'title_left'"
        >{{item.titile}}</div>
    </div>
    <div class="item_text" :style="{'backgroundColor':itemStyle.bgColor}">
      <article :title="item.text">
        {{item.text}}
      </article>
      </div>
  </div>
</template>

<script>
  export default {
    name:"latestItem",
    props:['itemStyle','item'],
  }
</script>

<style scoped>
.item{
  padding: 2rem 0;
  width: 100%;
  height: 60rem;
}
.item_head{
  width: 100%;
  height: 65%;
  position: relative;
}
.head_line{
  width: 100%;
  height: 50%;
  position: absolute;
  border-bottom: 0.4rem solid;
  border-color: rgb(210, 211, 211);;
}
.head_image{
  width: 25%;
  height: 80%;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 15%;
  border: 0.4rem solid;
  border-color: rgb(210, 211, 211);;
  border-radius: 2rem;
  overflow: hidden;
}
.image_right{
  left: 55%;
}
.head_image img{
  width: 100%;
  height: 100%;
  cursor: pointer;
  transform: scale(1);
  transition: all 1s ease-in-out;
}
.head_image img:hover{
  transform: scale(1.2);
}
.head_title{
  font-size: 3.5rem;
  font-weight: 800;
  position: absolute;
  top: 75%;
  transform: translate(-50%,-100%);
  left: 65%;
}

.title_left{
  left: 35%;
}

.item_text{
  width: 70%;
  height: 35%;
  background: rgb(210, 211, 211);
  margin: 0 auto;
  border-radius: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
.item_text article{
  width: 90%;
  height: 12rem;
  font-size: 2rem;
  line-height: 3rem;
  letter-spacing: 0.1rem;
  cursor: pointer;
  display: -webkit-box;
  overflow: hidden;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
}
</style>