<template>
  <section class="section-margin">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-3">
          <div class="inner-box">
            <div class="icon-box"> </div>
          </div>
        </div>
        <div class="col-lg-3">
          <div class="inner-box">
            <div class="icon-box"> </div>
          </div>
        </div>
        <div class="col-lg-3">
          <div class="inner-box">
            <div class="icon-box"> </div>
          </div>
        </div>
        <div class="col-lg-3">
          <div class="inner-box">
            <div class="icon-box"> </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import '@design';
.section-margin {
  margin-top: 350px;
}
.inner-box {
  text-align: center;
  padding: 80px 0;
  border-radius: 5px;
  background-color: #ffffff;
  border: 1px solid #e8e6ec;
  .icon-box {
    position: relative;
    display: inline-block;
    height: 110px;
    width: 110px;
    line-height: 110px;
    text-align: center;
    font-size: 55px;
    color: #ffffff;
    border-radius: 50%;
    overflow: hidden;
    background-color: #1e2c67;
    margin-bottom: 20px;
  }
}
</style>
