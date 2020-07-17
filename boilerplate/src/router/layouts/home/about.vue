<template>
  <div class="we-create-area create-padding">
    <div class="container">
      <div class="row d-flex align-items-end">
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
            <a href="#" class="btn">Contact Us</a>
          </div>
        </div>
        <div class="col-lg-6 col-md-12">
          <div class="we-create-img">
            <img
              src="https://bemehrbani.com/blog/wp-content/uploads/2018/06/2.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@design';
/*! CSS Used from: http://127.0.0.1:5500/seos/assets/css/bootstrap.min.css */
*,
::after,
::before {
  box-sizing: border-box;
}
h3 {
  margin-top: 0;
  margin-bottom: 0.5rem;
}
p {
  margin-top: 0;
  margin-bottom: 1rem;
}
a {
  color: #007bff;
  text-decoration: none;
  background-color: transparent;
  -webkit-text-decoration-skip: objects;
}
a:hover {
  color: #0056b3;
  text-decoration: underline;
}
img {
  vertical-align: middle;
  border-style: none;
}
h3 {
  margin-bottom: 0.5rem;
  font-family: inherit;
  font-weight: 500;
  line-height: 1.2;
  color: inherit;
}
h3 {
  font-size: 1.75rem;
}
.container {
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}
@media (min-width: 576px) {
  .container {
    max-width: 540px;
  }
}
@media (min-width: 768px) {
  .container {
    max-width: 720px;
  }
}
@media (min-width: 992px) {
  .container {
    max-width: 960px;
  }
}
@media (min-width: 1200px) {
  .container {
    max-width: 1200px;
  }
}
.row {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
}
.col-lg-6,
.col-md-12 {
  position: relative;
  width: 100%;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
}
@media (min-width: 768px) {
  .col-md-12 {
    -ms-flex: 0 0 100%;
    flex: 0 0 100%;
    max-width: 100%;
  }
}
@media (min-width: 992px) {
  .col-lg-6 {
    -ms-flex: 0 0 50%;
    flex: 0 0 50%;
    max-width: 50%;
  }
}
.btn {
  display: inline-block;
  font-weight: 400;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
@media screen and (prefers-reduced-motion: reduce) {
  .btn {
    transition: none;
  }
}
.btn:focus,
.btn:hover {
  text-decoration: none;
}
.btn:focus {
  outline: 0;
  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
}
.btn:disabled {
  opacity: 0.65;
}
.d-flex {
  display: -ms-flexbox !important;
  display: flex !important;
}
.align-items-end {
  -ms-flex-align: end !important;
  align-items: flex-end !important;
}
@media print {
  *,
  ::after,
  ::before {
    text-shadow: none !important;
    box-shadow: none !important;
  }
  img {
    page-break-inside: avoid;
  }
  h3,
  p {
    orphans: 3;
    widows: 3;
  }
  h3 {
    page-break-after: avoid;
  }
  .container {
    min-width: 992px !important;
  }
}
/*! CSS Used from: http://127.0.0.1:5500/seos/assets/css/style.css */
h3 {
  font-family: 'Poppins', sans-serif;
  color: #2b4b80;
  margin-top: 0px;
  font-style: normal;
  font-weight: 500;
  text-transform: normal;
}
p {
  font-family: 'Poppins', sans-serif;
  color: #707b8e;
  font-size: 16px;
  line-height: 30px;
  margin-bottom: 15px;
  font-weight: normal;
}
a {
  -webkit-transition: all 0.3s ease-out 0s;
  -moz-transition: all 0.3s ease-out 0s;
  -ms-transition: all 0.3s ease-out 0s;
  -o-transition: all 0.3s ease-out 0s;
  transition: all 0.3s ease-out 0s;
}
a:focus {
  text-decoration: none;
  outline: none;
}
a {
  color: #635c5c;
}
a:hover {
  color: #fff;
}
a:focus,
a:hover {
  text-decoration: none;
}
a {
  color: #fff;
  outline: medium none;
}
.btn {
  background: #ff5c97;
  -moz-user-select: none;
  text-transform: capitalize;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 1px;
  line-height: 0;
  margin-bottom: 0;
  padding: 30px 44px;
  border-radius: 5px;
  min-width: 200px;
  cursor: pointer;
  transition: color 0.4s linear;
  position: relative;
  z-index: 1;
  border: 0;
  overflow: hidden;
  margin: 0;
}
.btn::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: #ec4683;
  z-index: 1;
  border-radius: 5px;
  transition: transform 0.5s;
  transition-timing-function: ease;
  transform-origin: 0 0;
  transition-timing-function: cubic-bezier(0.5, 1.6, 0.4, 0.7);
  transform: scaleX(0);
}
.btn:hover::before {
  transform: scaleX(1);
  color: #fff !important;
  z-index: -1;
}
.btn:focus {
  outline: 0;
  box-shadow: none;
}
.create-padding {
  padding-top: 240px;
  padding-bottom: 190px;
}
@media only screen and (min-width: 1200px) and (max-width: 1600px) {
  .create-padding {
    padding-top: 240px;
    padding-bottom: 190px;
  }
}
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .create-padding {
    padding-top: 240px;
    padding-bottom: 190px;
  }
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .create-padding {
    padding-top: 120px;
    padding-bottom: 95px;
  }
}
@media only screen and (min-width: 576px) and (max-width: 767px) {
  .create-padding {
    padding-top: 63px;
    padding-bottom: 90px;
  }
}
@media (max-width: 767px) {
  .create-padding {
    padding-top: 63px;
    padding-bottom: 90px;
  }
}
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
  padding-right: 25px;
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
.we-create-area .we-create-cap p {
  padding-right: 50px;
  margin-bottom: 56px;
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
/*! CSS Used fontfaces */
@font-face {
  font-family: 'Poppins';
  font-style: italic;
  font-weight: 100;
  font-display: swap;
  src: local('Poppins Thin Italic'), local('Poppins-ThinItalic'),
    url(https://fonts.gstatic.com/s/poppins/v11/pxiAyp8kv8JHgFVrJJLmE0tMMPKzSQ.woff2)
      format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
    U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
@font-face {
  font-family: 'Poppins';
  font-style: italic;
  font-weight: 100;
  font-display: swap;
  src: local('Poppins Thin Italic'), local('Poppins-ThinItalic'),
    url(https://fonts.gstatic.com/s/poppins/v11/pxiAyp8kv8JHgFVrJJLmE0tCMPI.woff2)
      format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
    U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,
    U+FEFF, U+FFFD;
}
@font-face {
  font-family: 'Poppins';
  font-style: italic;
  font-weight: 300;
  font-display: swap;
  src: local('Poppins Light Italic'), local('Poppins-LightItalic'),
    url(https://fonts.gstatic.com/s/poppins/v11/pxiDyp8kv8JHgFVrJJLm21lVGdeOcEg.woff2)
      format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
    U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
@font-face {
  font-family: 'Poppins';
  font-style: italic;
  font-weight: 300;
  font-display: swap;
  src: local('Poppins Light Italic'), local('Poppins-LightItalic'),
    url(https://fonts.gstatic.com/s/poppins/v11/pxiDyp8kv8JHgFVrJJLm21lVF9eO.woff2)
      format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
    U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,
    U+FEFF, U+FFFD;
}
@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 200;
  font-display: swap;
  src: local('Poppins ExtraLight'), local('Poppins-ExtraLight'),
    url(https://fonts.gstatic.com/s/poppins/v11/pxiByp8kv8JHgFVrLFj_Z1JlFc-K.woff2)
      format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
    U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 200;
  font-display: swap;
  src: local('Poppins ExtraLight'), local('Poppins-ExtraLight'),
    url(https://fonts.gstatic.com/s/poppins/v11/pxiByp8kv8JHgFVrLFj_Z1xlFQ.woff2)
      format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
    U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,
    U+FEFF, U+FFFD;
}
@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 300;
  font-display: swap;
  src: local('Poppins Light'), local('Poppins-Light'),
    url(https://fonts.gstatic.com/s/poppins/v11/pxiByp8kv8JHgFVrLDz8Z1JlFc-K.woff2)
      format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
    U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 300;
  font-display: swap;
  src: local('Poppins Light'), local('Poppins-Light'),
    url(https://fonts.gstatic.com/s/poppins/v11/pxiByp8kv8JHgFVrLDz8Z1xlFQ.woff2)
      format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
    U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,
    U+FEFF, U+FFFD;
}
@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: local('Poppins Regular'), local('Poppins-Regular'),
    url(https://fonts.gstatic.com/s/poppins/v11/pxiEyp8kv8JHgFVrJJnecmNE.woff2)
      format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
    U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: local('Poppins Regular'), local('Poppins-Regular'),
    url(https://fonts.gstatic.com/s/poppins/v11/pxiEyp8kv8JHgFVrJJfecg.woff2)
      format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
    U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,
    U+FEFF, U+FFFD;
}
@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-display: swap;
  src: local('Poppins Medium'), local('Poppins-Medium'),
    url(https://fonts.gstatic.com/s/poppins/v11/pxiByp8kv8JHgFVrLGT9Z1JlFc-K.woff2)
      format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
    U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-display: swap;
  src: local('Poppins Medium'), local('Poppins-Medium'),
    url(https://fonts.gstatic.com/s/poppins/v11/pxiByp8kv8JHgFVrLGT9Z1xlFQ.woff2)
      format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
    U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,
    U+FEFF, U+FFFD;
}
@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-display: swap;
  src: local('Poppins SemiBold'), local('Poppins-SemiBold'),
    url(https://fonts.gstatic.com/s/poppins/v11/pxiByp8kv8JHgFVrLEj6Z1JlFc-K.woff2)
      format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
    U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-display: swap;
  src: local('Poppins SemiBold'), local('Poppins-SemiBold'),
    url(https://fonts.gstatic.com/s/poppins/v11/pxiByp8kv8JHgFVrLEj6Z1xlFQ.woff2)
      format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
    U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,
    U+FEFF, U+FFFD;
}
@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: local('Poppins Bold'), local('Poppins-Bold'),
    url(https://fonts.gstatic.com/s/poppins/v11/pxiByp8kv8JHgFVrLCz7Z1JlFc-K.woff2)
      format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
    U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: local('Poppins Bold'), local('Poppins-Bold'),
    url(https://fonts.gstatic.com/s/poppins/v11/pxiByp8kv8JHgFVrLCz7Z1xlFQ.woff2)
      format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
    U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,
    U+FEFF, U+FFFD;
}
@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 800;
  font-display: swap;
  src: local('Poppins ExtraBold'), local('Poppins-ExtraBold'),
    url(https://fonts.gstatic.com/s/poppins/v11/pxiByp8kv8JHgFVrLDD4Z1JlFc-K.woff2)
      format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
    U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 800;
  font-display: swap;
  src: local('Poppins ExtraBold'), local('Poppins-ExtraBold'),
    url(https://fonts.gstatic.com/s/poppins/v11/pxiByp8kv8JHgFVrLDD4Z1xlFQ.woff2)
      format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
    U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,
    U+FEFF, U+FFFD;
}
@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 900;
  font-display: swap;
  src: local('Poppins Black'), local('Poppins-Black'),
    url(https://fonts.gstatic.com/s/poppins/v11/pxiByp8kv8JHgFVrLBT5Z1JlFc-K.woff2)
      format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
    U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 900;
  font-display: swap;
  src: local('Poppins Black'), local('Poppins-Black'),
    url(https://fonts.gstatic.com/s/poppins/v11/pxiByp8kv8JHgFVrLBT5Z1xlFQ.woff2)
      format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
    U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,
    U+FEFF, U+FFFD;
}
</style>
