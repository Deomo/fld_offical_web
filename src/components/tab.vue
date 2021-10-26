<template>
<div class="tabs" :style="tab_style">
  <ul class="tab_ul">
    <li class="tab_li"
      :class="{li_active:num ===index }"
      @mouseenter="num=index"
      v-for="(item,index) in tab_data.title"
      :key='index'
    >{{item}}</li>
  </ul>
  <div class="tab_content">
      <div class="tab_body"
    v-for="(item,index) in tab_data.title"
    :key='index'
    :class="{body_active:num===index}"
    >
    <div class="tab_item" v-for="(obj,key) in tab_data.content[item]" :key="key">
      <div class="tab_title">
        <div class="post">{{obj.post}}</div>
      </div>
      <div class="tab_detail">{{obj.detail}}</div>
    </div>
    </div>
  </div>
</div>
<!-- 使用说明：
  1 、数据格式
"tab_data": {
    "title":["研发岗","职能岗","运营岗"],
    "content":{
      "研发岗":[
        {
          "post":"前端开发",
          "detail":"1、移动端内嵌H5页面的开发和维护；'
        }
      ]
    }
  2、样式，可以控制内容框height、top、left：
  tab_style:{
          height:"80rem",
          top: "10%",
          left:"50%"
        } -->
</template>

<script>
  export default {
    name:'tab',
    props:['tab_data','tab_style'],
    data() {
      return {
        num:0,
      }
    },
  }
</script>

<style scoped>
/**tabs */
ul,li{
  padding:0;
  margin:0;
  list-style:none
  }
.tabs {
  width: 100%;
  height: 110rem;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 10%;
}
.tab_ul{
  position: absolute;
  width:80%;
  top: 0;
  left: 50%;
  height: 10rem;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  z-index:999;
}
.tab_content{
  width: 100%;
  height: 100%;
  position: absolute;
  background:rgb(245, 241, 241);
  left: 0;
  top: 6%;
  box-sizing: border-box;
}
.tab_li{
  width: 25%;
  height: 100%;
  background: rgb(223, 241, 243);
  color: rgb(23, 83, 89);
  margin-right:1rem;
  border-radius: 1rem;
  box-sizing: border-box;
  font-size: 2.5rem;
  text-align: center;
  cursor: pointer;
  transition: all 0.5s ease;
}
.tab_li::before{
  display: inline-block;
  content: "";
  height: 100%;
  vertical-align: middle;
}
.li_active{
  color: aliceblue;
  background: rgb(23, 83, 89);

}
.tab_body{
  width: 100%;
  height: 100%;
  position: absolute;
  padding: 5% 10%;
  box-sizing: border-box;
  opacity: 0;
  visibility: hidden;
  transition: all 0.5s linear;
}
.body_active{
  opacity: 1;
  visibility: visible;
}

.tab_item{
  width: 100%;
  /* height: 20%; */
}
.tab_title{
  width: 100%;
  border-bottom: 0.3rem solid rgb(23, 83, 89);
  margin-bottom: 2rem;
  opacity:0.7;
}
.tab_title .post{
  width: 18rem;
  font-size: 2.5rem;
  line-height: 4rem;
  background: rgb(23, 83, 89);
  height: 4rem;
  text-align: center;
  color: #fff;
  transition: all 0.3s ease-in;
}
.tab_item:hover .post{
  transform: translateX(50%);
}
.tab_item:hover .tab_title{
  opacity: 1;
}
.tab_detail{
  width: 100%;
  height: 18rem;
  padding: 1.5em auto;
  line-height: 1.5em;
  font-size: 2.3rem;
  overflow: hidden;
  text-overflow: ellipsis;
}

</style>