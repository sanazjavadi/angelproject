<template>
  <!-- What We do start-->
  <div class="what-we-do we-padding">
    <div class="container">
      <!-- Section-tittle -->
      <div class="row d-flex justify-content-center">
        <div class="col-lg-8">
          <div class="section-tittle text-center">
            <h2>What We Will Do For Your </h2>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-4 col-md-6">
          <div class="single-do text-center mb-30">
            <div class="do-icon">
              <span class="flaticon-tasks"></span>
            </div>
            <div class="do-caption">
              <h4>Link Building</h4>
              <p
                >Hunky dory barney fanny around up the duff no biggie loo cup of
                tea jolly good ruddy say arse!</p
              >
            </div>
            <div class="do-btn">
              <a href="#"><i class="ti-arrow-right"></i> get started</a>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6">
          <div class="single-do active text-center mb-30">
            <div class="do-icon">
              <span class="flaticon-social-media-marketing"></span>
            </div>
            <div class="do-caption">
              <h4>Content marketing</h4>
              <p
                >Hunky dory barney fanny around up the duff no biggie loo cup of
                tea jolly good ruddy say arse!</p
              >
            </div>
            <div class="do-btn">
              <a href="#"><i class="ti-arrow-right"></i> get started</a>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6">
          <div class="single-do text-center mb-30">
            <div class="do-icon">
              <span class="flaticon-project"></span>
            </div>
            <div class="do-caption">
              <h4>On Page SEO</h4>
              <p
                >Hunky dory barney fanny around up the duff no biggie loo cup of
                tea jolly good ruddy say arse!</p
              >
            </div>
            <div class="do-btn">
              <a href="#"><i class="ti-arrow-right"></i> get started</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- What We do End-->
</template>

<style lang="scss" scoped>
@import '@design';
/*! CSS Used from: http://127.0.0.1:5500/seos/assets/css/bootstrap.min.css */
*,
::after,
::before {
  box-sizing: border-box;
}
h2,
h4 {
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
h2,
h4 {
  margin-bottom: 0.5rem;
  font-family: inherit;
  font-weight: 500;
  line-height: 1.2;
  color: inherit;
}
h2 {
  font-size: 2rem;
}
h4 {
  font-size: 1.5rem;
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
.col-lg-4,
.col-lg-8,
.col-md-6 {
  position: relative;
  width: 100%;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
}
@media (min-width: 768px) {
  .col-md-6 {
    -ms-flex: 0 0 50%;
    flex: 0 0 50%;
    max-width: 50%;
  }
}
@media (min-width: 992px) {
  .col-lg-4 {
    -ms-flex: 0 0 33.333333%;
    flex: 0 0 33.333333%;
    max-width: 33.333333%;
  }
  .col-lg-8 {
    -ms-flex: 0 0 66.666667%;
    flex: 0 0 66.666667%;
    max-width: 66.666667%;
  }
}
.d-flex {
  display: -ms-flexbox !important;
  display: flex !important;
}
.justify-content-center {
  -ms-flex-pack: center !important;
  justify-content: center !important;
}
.text-center {
  text-align: center !important;
}
@media print {
  *,
  ::after,
  ::before {
    text-shadow: none !important;
    box-shadow: none !important;
  }
  a:not(.btn) {
    text-decoration: underline;
  }
  h2,
  p {
    orphans: 3;
    widows: 3;
  }
  h2 {
    page-break-after: avoid;
  }
  .container {
    min-width: 992px !important;
  }
}
/*! CSS Used from: http://127.0.0.1:5500/seos/assets/css/flaticon.css */
[class^='flaticon-']:before,
[class^='flaticon-']:after {
  font-family: Flaticon;
}
.flaticon-social-media-marketing:before {
  content: '\f103';
}
.flaticon-tasks:before {
  content: '\f104';
}
.flaticon-project:before {
  content: '\f105';
}
/*! CSS Used from: http://127.0.0.1:5500/seos/assets/css/themify-icons.css */
[class^='ti-'] {
  font-family: 'themify';
  speak: none;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.ti-arrow-right:before {
  content: '\e628';
}
/*! CSS Used from: http://127.0.0.1:5500/seos/assets/css/style.css */
h2,
h4 {
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
.mb-30 {
  margin-bottom: 30px;
}
.we-padding {
  padding-top: 100px;
}
@media only screen and (min-width: 1200px) and (max-width: 1600px) {
  .we-padding {
    padding-top: 100px;
  }
}
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .we-padding {
    padding-top: 80px;
  }
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .we-padding {
    padding-top: 80px;
  }
}
@media only screen and (min-width: 576px) and (max-width: 767px) {
  .we-padding {
    padding-top: 80px;
  }
}
@media (max-width: 767px) {
  .we-padding {
    padding-top: 80px;
  }
}
.section-tittle h2 {
  color: #2b4b80;
  font-size: 50px;
  font-weight: 700;
  margin-bottom: 66px;
  line-height: 1.3;
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .section-tittle h2 {
    font-size: 45px;
    line-height: 1.3;
  }
}
@media only screen and (min-width: 576px) and (max-width: 767px) {
  .section-tittle h2 {
    font-size: 23px;
    line-height: 1.3;
  }
}
@media (max-width: 767px) {
  .section-tittle h2 {
    font-size: 23px;
    line-height: 1.3;
  }
}
.what-we-do {
  position: relative;
}
.what-we-do::before {
  background-image: url(http://127.1:5500/seos/assets/img/shape/what_do.png);
  position: absolute;
  content: '';
  top: -187px;
  z-index: 1;
  background-repeat: no-repeat;
  left: 0px;
  max-width: 243px;
  max-height: 482px;
  width: 243px;
  height: 482px;
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .what-we-do::before {
    display: none;
  }
}
@media only screen and (min-width: 576px) and (max-width: 767px) {
  .what-we-do::before {
    display: none;
  }
}
@media (max-width: 767px) {
  .what-we-do::before {
    display: none;
  }
}
.what-we-do::after {
  background-image: url(http://127.1:5500/seos/assets/img/shape/what_do_right.png);
  position: absolute;
  content: '';
  bottom: -187px;
  z-index: -1;
  background-repeat: no-repeat;
  right: 0px;
  max-width: 351px;
  max-height: 461px;
  width: 351px;
  height: 461px;
  bottom: 125px;
}
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .what-we-do::after {
    display: none;
  }
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .what-we-do::after {
    display: none;
  }
}
@media only screen and (min-width: 576px) and (max-width: 767px) {
  .what-we-do::after {
    display: none;
  }
}
@media (max-width: 767px) {
  .what-we-do::after {
    display: none;
  }
}
.what-we-do .single-do {
  -webkit-transition: all 0.3s ease-out 0s;
  -moz-transition: all 0.3s ease-out 0s;
  -ms-transition: all 0.3s ease-out 0s;
  -o-transition: all 0.3s ease-out 0s;
  transition: all 0.3s ease-out 0s;
  padding: 56px 40px 69px;
  border-radius: 6px;
}
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .what-we-do .single-do {
    padding: 41px 17px 63px;
  }
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .what-we-do .single-do {
    padding: 41px 17px 63px;
  }
}
@media only screen and (min-width: 576px) and (max-width: 767px) {
  .what-we-do .single-do {
    padding: 41px 17px 63px;
  }
}
@media (max-width: 767px) {
  .what-we-do .single-do {
    padding: 41px 17px 63px;
  }
}
.what-we-do .single-do .do-icon span {
  font-size: 73px;
  margin-bottom: 20px;
  display: inline-block;
  color: #ff5c97;
}
.what-we-do .single-do .do-caption h4 {
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 23px;
}
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .what-we-do .single-do .do-caption h4 {
    font-size: 21px;
  }
}
.what-we-do .single-do .do-caption p {
  margin-bottom: 40px;
}
.what-we-do .single-do .do-btn a {
  color: #c5ccd8;
  text-transform: uppercase;
  font-size: 13px;
  font-weight: 500;
  -webkit-transition: all 0.3s ease-out 0s;
  -moz-transition: all 0.3s ease-out 0s;
  -ms-transition: all 0.3s ease-out 0s;
  -o-transition: all 0.3s ease-out 0s;
  transition: all 0.3s ease-out 0s;
}
.what-we-do .single-do .do-btn a i {
  background: #c5ccd8;
  width: 24px;
  height: 24px;
  display: inline-block;
  line-height: 24px;
  color: #fff;
  border-radius: 50%;
  margin-right: 7px;
  -webkit-transition: all 0.3s ease-out 0s;
  -moz-transition: all 0.3s ease-out 0s;
  -ms-transition: all 0.3s ease-out 0s;
  -o-transition: all 0.3s ease-out 0s;
  transition: all 0.3s ease-out 0s;
}
.single-do:hover {
  box-shadow: 0px 10px 30px 0px rgba(133, 66, 189, 0.1);
}
.single-do:hover .do-btn a {
  color: #7b40c0;
}
.single-do:hover .do-btn a i {
  background: #7b40c0;
}
.single-do.active {
  box-shadow: 0px 10px 30px 0px rgba(133, 66, 189, 0.1);
}
.single-do.active .do-btn a {
  color: #7b40c0;
}
.single-do.active .do-btn a i {
  background: #7b40c0;
}
.mb-30 {
  margin-bottom: 30px;
}
/*! CSS Used fontfaces */
@font-face {
  font-family: 'Flaticon';
  src: url('http://127.0.0.1:5500/seos/assets/fonts/Flaticon.eot');
  src: url('http://127.0.0.1:5500/seos/assets/fonts/Flaticon.eot#iefix')
      format('embedded-opentype'),
    url('http://127.0.0.1:5500/seos/assets/fonts/Flaticon.woff2')
      format('woff2'),
    url('http://127.0.0.1:5500/seos/assets/fonts/Flaticon.woff') format('woff'),
    url('http://127.0.0.1:5500/seos/assets/fonts/Flaticon.ttf')
      format('truetype'),
    url('http://127.0.0.1:5500/seos/assets/fonts/Flaticon.svg#Flaticon')
      format('svg');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'Flaticon';
  src: url('http://127.0.0.1:5500/seos/assets/fonts/Flaticon.svg#Flaticon')
    format('svg');
}
@font-face {
  font-family: 'themify';
  src: url('http://127.0.0.1:5500/seos/assets/fonts/themify.eot?-fvbane');
  src: url('http://127.0.0.1:5500/seos/assets/fonts/themify.eot#iefix-fvbane')
      format('embedded-opentype'),
    url('http://127.0.0.1:5500/seos/assets/fonts/themify.woff?-fvbane')
      format('woff'),
    url('http://127.0.0.1:5500/seos/assets/fonts/themify.ttf?-fvbane')
      format('truetype'),
    url('http://127.0.0.1:5500/seos/assets/fonts/themify.svg?-fvbane#themify')
      format('svg');
  font-weight: normal;
  font-style: normal;
}
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
