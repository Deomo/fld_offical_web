<template>
  <div class="mouse_body">
    <div class="mouse">
    </div>
    <p class="mouse_p">滚 动 鼠 标</p>
  </div>
</template>

<script>
  export default {
    name: "mouse"
  }
</script>

<style scoped>
.mouse_body{
  width: 180px;
  height: 100px;
  text-align: center;
  animation: drop 1.5s linear infinite;
}
.mouse{
  width: 34px;
  height: 58px;
  background: rgb(71, 70, 70) linear-gradient(transparent 0%,transparent 50%,white 51%,white 100%);
  border-radius: 34px;
  margin:auto;
  position: relative;
}
.mouse:before,
.mouse:after{
  content: '';
  position: absolute;
}
.mouse:before{
  width: 28px;
  height: 52px;
  left: 3px;
  top: 3px;
  border-radius: 32px;
  background: rgb(34, 33, 33);
}
.mouse:after{
  width: 6px;
  height: 6px;
  border-radius: 10px;
  background: white;
  margin-top: 15px;
  animation: scroY 1.5s linear infinite;
}
.mouse_p{
  font-weight: 400;
  margin-top: 30px;
  color: aliceblue;
  letter-spacing: 4px;
  text-indent: 4px;
  animation: textColor 1.5s linear infinite;
}
@keyframes drop {
  0%{
    transform: translate(-50%,0px);
  }
  90%{
    transform: translate(-50%,10px);
  }
  100%{
    transform: translate(-50%,0px);
  }
}
@keyframes textColor {
    0%{
    opacity: 1;
    transform:  scale(1);
  }
  5%{
    opacity: 1;
    transform:  scale(1);
  }
  12%{
    opacity: 1;
    transform: scale(1.03);
  }
  20%{
    opacity: 0.9;
    transform: scale(1.04);
  }
  30%{
    opacity: 0.8;
    transform: scale(1.05);
  }
  40%{
    opacity: 0.7;
    transform: scale(1.06);
  }
  70%{
    opacity: 0.2;
    transform:  scale(1.1);
  }
  100%{
    opacity: 0;
    transform: scale(1);
  }
}
@keyframes scroY {
  0%{
    opacity: 1;
    transform: translate(-50%,0px) scale(1);
  }
  5%{
    opacity: 1;
    transform: translate(-50%,-3px) scale(1.2);
  }
  12%{
    opacity: 1;
    transform: translate(-50%,-3px) scale(1);
  }
  20%{
    opacity: 0.9;
    transform: translate(-50%,0px) scale(1);
  }
  30%{
    opacity: 0.8;
    transform: translate(-50%,8px) scale(0.9);
  }
  40%{
    opacity: 0.7;
    transform: translate(-50%,12px) scale(0.8);
  }
  70%{
    opacity: 0.6;
    transform: translate(-50%,20px) scale(0.7);
  }
  99.9%{
    opacity: 0.4;
    transform: translate(-50%,28px) scale(0.6);
  }
  100%{
    opacity: 1;
    transform: translate(-50%,-3px) scale(1.2);
  }
}
</style>