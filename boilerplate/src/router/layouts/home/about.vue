<template>
  <section class="we-create-area">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-6 col-md-12">
          <div class="we-create-cap">
            <h3>ما چیکارمیکنیم</h3>
            <p
              >به مهربانی به مهربانی تلاشی دسته جمعی ست تا کودکان ایران به دلیل
              مشکلات اقتصادی از تحصیل بازنمانند. راهکار ما برای ادامه تحصیل آنها
              ارائه بورسیه است. به منظور مشسارکت فعال دانش آموزان در فرآیند رشد
              خود، تلاش های درسی، امتیازات ورزشی و هنری و البته همکاری مادرها در
              کلاس های فرهنگی مبلغ بورسیه را تعیین می کند. در همه جای ایران
              افراد می توانند کودکان بازمانده از تحصیل را شناسایی و پس ازاطمینان
              از دارا بودن شرایط آنها را در سامانه به مهربانی معرفی کنند.
              همیاران داوطلب ما به سراغ آنها خواهند رفت برای اینکه کمک کند تا
              توانمند شوند. تا شاید چرخه معیوب فقر بلاخره جایی شکسته شود</p
            >
          </div>
        </div>
        <div class="col-lg-6 col-md-12">
          <div class="we-create-img">
            <!-- <img src="@assets/images/charity.jpg" alt="" /> -->
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import '@design';

.we-create-area {
  position: relative;
}
.we-create-area::before {
  background-image: url(http://127.1:5500/seos/assets/img/shape/we-create_bg.png);
  position: absolute;
  content: '';
  top: 0;
  z-index: -1;
  min-height: 819px;
  min-width: 1006px;
  background-repeat: no-repeat;
  left: -117px;
}
@media only screen and (min-width: 1200px) and (max-width: 1600px) {
  .we-create-area::before {
    display: none;
  }
}
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .we-create-area::before {
    display: none;
  }
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .we-create-area::before {
    display: none;
  }
}
@media only screen and (min-width: 576px) and (max-width: 767px) {
  .we-create-area::before {
    display: none;
  }
}
@media (max-width: 767px) {
  .we-create-area::before {
    display: none;
  }
}
.we-create-area::after {
  background-image: url(http://127.1:5500/seos/assets/img/shape/we_create_right.png);
  position: absolute;
  content: '';
  z-index: -1;
  min-height: 262px;
  min-width: 207px;
  background-repeat: no-repeat;
  right: 0px;
  bottom: 178px;
}
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .we-create-area::after {
    display: none;
  }
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .we-create-area::after {
    display: none;
  }
}
@media only screen and (min-width: 576px) and (max-width: 767px) {
  .we-create-area::after {
    display: none;
  }
}
@media (max-width: 767px) {
  .we-create-area::after {
    display: none;
  }
}
.we-create-area .we-create-img img {
  width: 100%;
}
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .we-create-area .we-create-img img {
    padding-top: 30px;
  }
}
.we-create-area .we-create-cap h3 {
  color: #2b4b80;
  font-size: 50px;
  font-weight: 700;
  line-height: 1.3;
  margin-bottom: 29px;
}
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .we-create-area .we-create-cap h3 {
    font-size: 29px;
  }
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .we-create-area .we-create-cap h3 {
    font-size: 42px;
  }
}
@media only screen and (min-width: 576px) and (max-width: 767px) {
  .we-create-area .we-create-cap h3 {
    font-size: 36px;
    line-height: 1.3;
    padding-right: 0px;
  }
}
@media (max-width: 767px) {
  .we-create-area .we-create-cap h3 {
    font-size: 25px;
    line-height: 1.3;
    padding-right: 0px;
  }
}

@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .we-create-area .we-create-cap p {
    padding-right: 10px;
  }
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .we-create-area .we-create-cap p {
    padding-right: 10px;
  }
}
@media only screen and (min-width: 576px) and (max-width: 767px) {
  .we-create-area .we-create-cap p {
    padding-right: 10px;
  }
}
@media (max-width: 767px) {
  .we-create-area .we-create-cap p {
    padding-right: 10px;
  }
}
</style>
