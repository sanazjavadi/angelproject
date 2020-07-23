<script>
import twiiter from '@components/svg/twiiter-svg.vue'
import instagram from '@components/svg/instagram-svg.vue'
import youtube from '@components/svg/youtube-svg.vue'
export default {
  components: {
    twiiter,
    instagram,
    youtube,
  },
}
</script>

<template>
  <footer class="main-footer mt-5 pt-5">
    <div
      class="parallax-scene parallax-scene-7 anim-icons"
      style="transform: translate3d(0px, 0px, 0px) rotate(0.0001deg); transform-style: preserve-3d; backface-visibility: hidden; pointer-events: none;"
    >
      <span
        data-depth="0.60"
        class="parallax-layer icon icon-sun-gray"
        style="transform: translate3d(-5.2px, -36.5px, 0px); transform-style: preserve-3d; backface-visibility: hidden; position: relative; display: block; left: 0px; top: 0px;"
      ></span>
      <span
        data-depth="0.60"
        class="parallax-layer icon icon-star-gray"
        style="transform: translate3d(-5.2px, -36.5px, 0px); transform-style: preserve-3d; backface-visibility: hidden; position: absolute; display: block; left: 0px; top: 0px;"
      ></span>
      <span
        data-depth="0.60"
        class="parallax-layer icon icon-star-gray-2"
        style="transform: translate3d(-5.2px, -36.5px, 0px); transform-style: preserve-3d; backface-visibility: hidden; position: absolute; display: block; left: 0px; top: 0px;"
      ></span>
      <span
        data-depth="0.60"
        class="parallax-layer icon icon-star-gray-3"
        style="transform: translate3d(-5.2px, -36.5px, 0px); transform-style: preserve-3d; backface-visibility: hidden; position: absolute; display: block; left: 0px; top: 0px;"
      ></span>
      <span
        data-depth="0.40"
        class="parallax-layer icon icon-balloon-gray"
        style="transform: translate3d(-3.4px, -24.3px, 0px); transform-style: preserve-3d; backface-visibility: hidden; position: absolute; display: block; left: 0px; top: 0px;"
      ></span>
    </div>

    <!--footer upper-->
    <div class="footer-upper">
      <div class="container-fluid">
        <div class="row  justify-content-center">
          <!--Big Column-->
          <div class="big-column col-xl-6 col-lg-12 col-md-12 col-sm-12">
            <div class="row ">
              <!--Footer Column-->
              <div class="footer-column col-lg-6 col-md-6 col-sm-12 m-auto">
                <div class="footer-widget logo-widget">
                  <h4 class="widget-title">درباره ما</h4>
                  <div class="text"
                    >به مهربانی به مهربانی تلاشی دسته جمعی ست تا کودکان ایران به
                    دلیل مشکلات اقتصادی از تحصیل بازنمانند</div
                  >
                  <div class="logo">
                    <BaseLogo :height="50" :width="50" />
                  </div>
                </div>
              </div>

              <!--Footer Column-->
            </div>
          </div>

          <!--Big Column-->
          <div
            class="big-column col-xl-6 col-lg-12 col-md-12 col-sm-12 mt-4 mt-lg-0"
          >
            <div class="row clearfix">
              <!--Footer Column-->

              <!--Footer Column-->
              <div class="footer-column col-lg-6 col-md-6 col-sm-12 m-auto">
                <div class="footer-widget contact-widget">
                  <h4 class="widget-title">تماس با ما</h4>
                  <div class="widget-content">
                    <ul>
                      <li> <a href="tel:666-888-0000">0218685</a></li>
                      <li
                        ><a href="mailto:info@gaowa.com">info@angel.com</a></li
                      >
                    </ul>
                    <div class="mt-3">
                      <BaseButton theme="lightbtn">
                        تماس با ما
                      </BaseButton>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--Footer Bottom-->
    <div class="footer-bottom">
      <div class="container-fluid ">
        <div class="copyright ml-lg-3">
          تمام حقوق برای بنیاد نیکوکاری فرشته محفوظ است</div
        >
        <ul class="social-icon-two">
          <li
            ><a href="#"> <twiiter /> </a
          ></li>
          <li
            ><a href="#"><instagram /></a
          ></li>
          <li
            ><a href="#"><youtube /></a
          ></li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@import '@design';

.social-icon-two li {
  display: inline-block;
  margin-left: 30px;
  a {
    display: block;
    -webkit-transition: all 300ms ease;
    -moz-transition: all 300ms ease;
    -ms-transition: all 300ms ease;
    -o-transition: all 300ms ease;
    transition: all 300ms ease;
  }
}

.parallax-scene {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}
.anim-icons {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  height: 100%;
  width: 100%;
  max-width: 1170px;
  margin: 0 auto;
}
.anim-icons .icon {
  position: absolute !important;
  background-repeat: no-repeat;
  background-position: center;
}
.main-footer {
  position: relative;
  background-color: $dark-blue;
}

.main-footer .anim-icons .icon {
  opacity: 0.08;
}
.main-footer .icon-balloon-gray {
  left: auto !important;
  right: -360px !important;
  top: 80px !important;
  bottom: auto !important;
}
.main-footer .icon-sun-gray {
  left: -250px !important;
  top: 190px !important;
}
.main-footer .icon-star-gray {
  top: 50px !important;
  left: 280px !important;
}
.main-footer .icon-star-gray-2 {
  left: -25px !important;
  top: auto !important;
  bottom: 210px !important;
}
.main-footer .icon-star-gray-3 {
  left: auto !important;
  right: -100px !important;
  bottom: 185px !important;
  top: auto !important;
}
.icon-sun-gray {
  height: 52px;
  width: 98px;
  background-image: url('http://t.commonsupport.xyz/gaowa/images/icons/icon-sun-gray.png');
}
.icon-star-gray {
  height: 51px;
  width: 43px;
  background-image: url('http://t.commonsupport.xyz/gaowa/images/icons/icon-star-gray.png');
}
.icon-star-gray-2 {
  height: 19px;
  width: 15px;
  background-image: url('http://t.commonsupport.xyz/gaowa/images/icons/icon-star-gray-2.png');
}
.icon-star-gray-3 {
  height: 27px;
  width: 31px;
  background-image: url('http://t.commonsupport.xyz/gaowa/images/icons/icon-star-gray-3.png');
}
.icon-balloon-gray {
  height: 277px;
  width: 217px;
  background-image: url('http://t.commonsupport.xyz/gaowa/images/icons/icon-balloon-gray.png');
}
.main-footer .footer-upper {
  position: relative;
  background-position: center;
  background-repeat: no-repeat;
  padding: 20px 0px 40px;
}
.main-footer .footer-upper .footer-column {
  position: relative;
  margin-bottom: 40px;
}
.main-footer .footer-widget .widget-title {
  position: relative;
  font-size: 24px;
  font-weight: 400;
  color: #ffffff;
  margin-bottom: 35px;
}
.widget-content {
  position: relative;
  font-size: 16px;
  font-weight: 400;
  color: #ffffff;
  margin-bottom: 35px;
  li {
    padding: 0.5rem;
  }
  li a {
    color: white;
  }
}
.logo-widget {
  position: relative;
}
.logo-widget .logo {
  width: 20%;
  cursor: pointer;
  -webkit-transition: all 300ms ease;
  -moz-transition: all 300ms ease;
  -ms-transition: all 300ms ease;
  -o-transition: all 300ms ease;
  transition: all 300ms ease;
  z-index: 9999;
}

.logo-widget .text {
  color: #c8bfe3;
  font-size: 16px;
  line-height: 30px;
  margin-bottom: 20px;
}

.main-footer .footer-bottom {
  padding: 50px 0px;
  text-align: center;
  border-top: 1px solid rgba(255, 255, 255, 0.15);
}

.main-footer .footer-bottom .social-icon-two {
  float: left;
}
.main-footer .footer-bottom .copyright {
  float: right;
  color: #c8bfe3;
  font-weight: 400;
  font-size: 16px;
  line-height: 30px;
}
/*! CSS Used from: http://t.commonsupport.xyz/gaowa/css/responsive.css */
@media only screen and (max-width: 1139px) {
  .main-footer .links-widget {
    padding-left: 0;
  }
}
@media only screen and (max-width: 767px) {
  .main-footer .footer-upper {
    padding: 70px 0 30px;
  }
  .main-footer .footer-bottom {
    padding-bottom: 70px;
  }
  .main-footer .footer-bottom .copyright,
  .main-footer .footer-bottom .social-icon-two {
    width: 100%;
  }
}
</style>
