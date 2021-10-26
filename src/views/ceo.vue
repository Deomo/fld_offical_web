<template>
<div>
<div class="banner animate__animated animate__fadeIn">
	<div class="mask"></div>
</div>

<main>
	<div class="usercard clearfix animate__animated animate__fadeInDown">
		<div class="pic">
		</div>
		<div class="profile">
			<div class="welcome">
				<span class="hello">CEO</span>
			<div class="angel"></div>
			</div>
		</div>
		<div class="self">
			<h1><span>刘 荣</span></h1>
            <p>创始人兼首席执行官</p>
			<hr>
				<table>
					<tr>
					<th>国&nbsp;&nbsp;籍：</th>
            <td>中&nbsp;&nbsp;国</td>
					</tr>
            <tr>
					<th>民&nbsp;&nbsp;族：</th>
            <td>汉&nbsp;&nbsp;族</td>
				</tr>
            <tr>
					<th>毕业院校：</th>
				<td>上海同济大学   硕士<br/>清华大学五道口金融学院   硕士</td>
				</tr>
            <tr>
					<th>主要成就：</th>
            <td>房乐多创始人</td>
				</tr>
				</table>
		</div>
    <footer class="media">
      <img src="../assets/logo.png" alt="">
		</footer >
	</div>
</main>

<section class="proskills animate__animated animate__fadeInUp">
	<div class="clearfix">
		刘荣，海南房乐多网络科技有限公司创始人。<br><br>
		中国房地产行业营销专家，中国房地产互联网创新模式的实践者。<br><br>
		<article>80后，江苏人，现任海南房乐多网络科技有限公司CEO。拥有数十年房地产从业经验，曾任深圳房多多网络科技有限公司（纳斯达克上市企业）投旅业务部总经理一职。</article><br><br>
		<article>2017年，刘荣创立房乐多，提出以大数据为支撑，构建互联网旅居的服务平台，专注于为开发商、商户、旅居客户提供高质量的服务。</article><br><br>

		<article>2018年，刘荣提出“走出去”的旅居战略，聚焦全球旅居地产领域，以海南旅居市场为大本营，先后布局了京津冀、粤港澳大湾区、云贵川、东南亚等旅居市场。服务房企包括：万科、碧桂园、恒大、世茂、金茂、富力、中梁等多家品牌开发商。并构建了“地产+科技+数据+金融”的全球旅居平台。</article><br><br>
    <article>2020年，刘荣率领房乐多上海区域团队正式进驻长三角旅居市场。为实现区域旅居项目的快速去化，房乐多通过标准化业务动作，高效执行能力，“城市＋商户”覆盖联动，助力房企打破旅居产品交易壁垒。</article>
	</div>
</section>
</div>
</template>

<script>
  export default {
  }
</script>

<style scoped>
.clearfix::after{
    content: '';
    display: block;
    clear: both;
}

body{
    margin:0;
    background-color:rgb(239, 239, 239);
}

p,td,tr{
  font-size: 2rem;
}
/*首页背景*/
.barlinner{
    padding:0 1.6rem;
}

.banner{
    background-image: url("../../public/leadership.jpg");
    height: 52rem ;
    background-position: center;
    background-size: cover;
}

.banner .mask{
    height: 52rem ;
    background-color:rgba(0, 0, 0,0.6);
}

/*个人卡片*/
.usercard{
    border:0.1rem solid rgba(152, 173, 157, 0.94);
    max-width: 94rem;
    margin-left: auto;
    margin-right: auto;
    background-color:white;
    margin-top: -37rem;
    box-shadow: .1rem .3rem 2.5rem -.1prem rgba(127,148,132,0.94);
}

.usercard .pic{
    margin:6.7rem 6.2rem 0rem 6.2rem;
    float:left;
    width: 30rem;
    height: 34.6rem;
    background-image: url("../assets/leadership/ceo.jpg");
    background-position: center;
    background-size: cover;
}

.welcome{
    float:left;
    margin-top: 6.7rem;
}

.usercard .self{
    margin-top: 12rem;
}

.usercard .hello{
    background-color: rgb(23,83,89);
    font-size: 1.8rem;
    padding: .6rem 1rem;
    font-weight: bold;
    color: white;
}
.angel{
    border:1rem solid transparent;
    width:0;
    height:0;
    border-left-color:rgb(23,83,89);
    border-top-width:0;
    margin:.6rem 0 0 .6rem;
  }

  .usercard .self h1{
    margin-bottom: 0;
    margin-top: 1rem;
    font-family: "arial black";
    font-size:4.8rem;
    color: rgb(61, 68, 81);
}

.usercard .self h1 span{
    font-family: "sans-serif";
    margin-right: .8rem;
    font-size: 5.5rem;
}

.usercard p{
    margin-top: 0;
}

hr {
  width: 44rem;
  margin-left: 0;

}
.usercard .media{
    height: 10.2rem;
    width: 100%;
    background-color: rgb(23,83,89);
    margin-top: 8rem;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
}
.media img{
  height: 6rem;
}

.usercard table{
  margin-left: 41rem;
  width:46.2rem
}

.usercard table th,
.usercard table td{
    padding: 1rem 0;
    text-align: left;
}

ol,ul{
    list-style: none;
    padding: 0;
    margin: 0;
}

.proskills div{
    box-shadow: .1rem .3rem 2.5rem -.1rem rgba(97,90,97,0.94);
    background-color: #fff;
    padding: 10rem 15rem 10rem 15rem ;
    width: 64rem;
    margin:5rem auto;
    letter-spacing:.25rem;
    font-size: 2.2rem;
}

.proskills div article{
  display: flex;
  text-align: justify;
}

</style>