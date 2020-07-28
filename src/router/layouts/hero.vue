<template>
  <fragment>
    <div class="row justify-content-center">
      <h2 class="text-center hero-title"><slot /></h2>
    </div>
    <div id="clouds1" class="clouds"></div>
    <div id="clouds2" class="clouds"></div>
  </fragment>
</template>

<style lang="scss" scoped>
@import '@design';
.hero-title {
  margin-top: 5rem;
  @extend %font-heading;
  color: $dark-blue;
}
.clouds {
  position: absolute;
  width: 100%;
  height: 120px;
  left: 0px;
  top: 450px;
  @media (max-width: 680px) {
    top: 300px;
  }
}
#clouds1 {
  margin-top: -14px;
  -webkit-transition: all 0.2s linear;
  transition: all 0.2s linear;
  background-image: url('https://www.typingclub.com/m/tpmedia/img/clouds1.png');
}
#clouds2 {
  margin-top: 20px;
  -webkit-transition: all 0.2s linear;
  transition: all 0.2s linear;
  background-image: url('https://www.typingclub.com/m/tpmedia/img/clouds2.png');
  border-bottom: 10px solid white;
  top: 450px;
  @media (max-width: 680px) {
    top: 300px;
  }
}
</style>
