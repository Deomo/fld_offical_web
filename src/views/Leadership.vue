<template>
  <div>
    <div class="head">
      <div class="head_img"></div>
      <div class="title animate__animated animate__lightSpeedInLeft">
        <p>管理层</p>
        <p style="font-size:3.6rem">Leadership</p>
      </div>
    </div>
    <div class="main" >
      <div class="content">
        <div class="leader animate__animated animate__flipInX">
          <div class="avatar" @click='$router.push({path: "/leadership/ceo" })'>
            <img src="../assets/leadership/liu.png" alt="">
          </div>
          <div class="introduce">
            <div class="intro_head">
              <div class="name">刘荣</div>
              <span class="post">创始人兼CEO</span>
            </div>
            <div class="degree">上海同济大学  硕士<br>清华大学五道口金融学院  硕士</div>
            <div class="line"></div>
            <article>
              <div>
                海南房乐多网络科技有限公司创始人兼首席执行官，拥有数十年房地产从业经验，房地产行业营销专家、房地产互联网创新模式的实践者，曾担任多家房地产龙头企业高管，目前为清华大学五道口金融学院在读硕士研究生。
              </div>
              </article>
          </div>
        </div>
        <div class="leader animate__animated animate__flipInX">
          <div class="avatar">
            <img src="../assets/leadership/zhang.png" alt="">
          </div>
          <div class="introduce">
            <div class="intro_head">
              <div class="name">张凯</div>
              <span class="post">合伙人&区域总经理</span>
            </div>
            <div class="degree"><br>上海同济大学  EMBA硕士</div>
            <div class="line"></div>
            <article>
              <div>
                公司运营管理、战略发展、项目获取、项目产品定位，规划设计、报批报建、营销策划、物业管理。<b>服务项目</b>:领城嘉鹏·25度阳光、嘉鹏·香醍25度、嘉鹏·25度海湾一号、德璟·海长安、三亚·領海、万宁石梅春墅、海棠花开等
              </div>
              </article>
          </div>
        </div>
        <div class="leader animate__animated animate__flipInX">
          <div class="avatar">
            <img src="../assets/leadership/shao.png" alt="">
          </div>
          <div class="introduce">
            <div class="intro_head">
              <div class="name">邵刘坤</div>
              <span class="post">合伙人&区域总经理</span>
            </div>
            <div class="line"></div>
            <article>
              <div>丰富的房地产全产业链开发运营经验，曾任职绿城集团，远洋等大型房地产企业集团高管，负责区域公司地产，酒店，物业等多个板块业务。<b>服务项目:</b>维多利亚花园、远洋华墅、鸿洲江山、香缇25度、崖城海湾一号、鸿洲时代海岸、鸿洲国际游艇会等</div>
              </article>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name:"Leadership",
    components:{

    },
    data(){
      return{
      }
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
  background: url('../../public/leadership.jpg') no-repeat;
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
  height: 149rem;
}
.leader{
  width: 100%;
  height: 50rem;
  box-sizing: border-box;
  display:flex;
  justify-content: space-evenly;
  align-items: center;
  border-bottom: 1rem solid rgb(223,241,243);
  background: #fff;

}
.avatar{
  width: 29.375rem;
  height: 37.125rem;
  margin-right: 2rem;
  border: 0.3rem solid rgb(23,83,89);
  cursor: pointer;
  box-shadow: 1rem 0.9rem 0.9rem -0.1rem rgba(95,92,92,0.75);
}
.avatar img{
  width: 100%;
  height: 100%;
}
.introduce{
  width: 55%;
  height: 65%;
  background: rgba(240, 235, 235, 0.795);
  position: relative;
  padding: 5rem 3rem 3rem 4rem;
  box-shadow: 1rem 0.9rem 0.9rem -0.1rem rgba(95,92,92,0.75);

}
.intro_head{
  width: 100%;
  display: flex;
  align-items:baseline;
}
.name{
  font-size: 4rem;
  line-height: 5rem;
  letter-spacing: 2rem;
  font-weight: 700;
  color:rgb(23,83,89) ;
}
.post{
  font-size:2rem;
  letter-spacing: 0.2rem;
  font-weight: 400;
  background:rgb(23,83,89) ;
  color: #fff;
  height: 3rem;
  line-height: 3rem;
  padding: 0 1rem;
}

.degree{
  font-size: 1.8rem;
  font-weight: 500;
  letter-spacing: 0.1rem;
  line-height: 3rem;
}
.line{
  width: 80%;
  border-bottom: 0.2rem solid rgb(23,83,89);
  height: 1rem;
  margin: 2rem 0;
}
article{
  font-size: 2rem;
  line-height: 3rem;
  letter-spacing: 0.3rem;
  text-indent: 4.5rem;
  padding: 1rem 0;
}
article div{
  height: 15rem;
  overflow: hidden;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  display: -webkit-box;

}
</style>
