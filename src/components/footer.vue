<template>
    <div class="footer">
      <div class="main">
       <div class="content">
          <div class="left">
            <h1>三亚总部</h1>
            <span>海南省三亚市吉阳区中铁置业大厦1206</span>
            <span>简历投递：fangleduo@126.com</span>
            <span style="fontSize:1.4rem;">格式：学校+专业+学历+姓名+岗位</span>
          </div>
          <div class="logo">
            <img src="../assets/logo2.png" alt="">
          </div>
          <div class="right">
            <span class="phone">0898-8859 4768</span>
            <span>周一至周六 8:30 - 18:00</span>
          </div>
       </div>
      </div>
      <div class="bottom">海南房乐多网络科技有限公司版权所有&nbsp;&nbsp;&nbsp;&nbsp;琼ICP备&nbsp;&nbsp;2020003187&nbsp;&nbsp;号</div>
    </div>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>
.footer{
  height: 20rem;
  width: 100%;
  background: rgb(23,83,89);
  color:white;
  position: relative;
}
.bottom{
  width: 100%;
  height: 3rem;
  position: absolute;
  left: 0;
  bottom: 0;
  text-align: center;
  color: white;
  background: rgb(11, 60, 65);
  line-height: 3rem;
}
.main{
  height: 17rem;
}
.content{
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  padding: 0 20rem;
  box-sizing: border-box;
  position: relative;
}
.content span{
  display: block;
  font-size: 1.5rem;
  padding-bottom: .5rem;
}
.content .left h1{
  font-size: 2.5rem;
  margin-bottom: 1rem;
}
.content .right{
  transform: translateY(3rem);
  text-align: right;
}
.content .right .phone{
  font-size: 2.3rem;
  font-weight: bolder;
}
.logo{
  width: 6rem;
}
.logo img{
  width: 100%;
}
</style>