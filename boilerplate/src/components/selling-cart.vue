<script>
export default {}
</script>

<template>
  <div class="junior__classes">
    <div class="classes__thumb">
      <a href="class-details.html">
        <img
          src="https://d29u17ylf1ylz9.cloudfront.net/junior/images/class/md-img/1.jpg"
          alt="class images"
        />
      </a>
    </div>
    <div class="classes__inner">
      <div class="classes__icon">
        <img
          src="https://d29u17ylf1ylz9.cloudfront.net/junior/images/class/star/1.png"
          alt="starr images"
        />
        <span>$60</span>
      </div>
      <div class="class__details">
        <h4><a href="class-details.html">آرزوی محمد کوچولو </a></h4>
        <ul class="class__time">
          <li
            >من آرزو دارم یک ماشین کنترلی داشته باشم و یک تبلت دوست دارم داشته
            باشم.</li
          >
        </ul>
        <div class="class__btn">
          <BaseButton>
            دوست دارم به برآورده شدن این آرزو کمک کنم
          </BaseButton>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@design';

h4 {
  margin-top: 0;
  margin-bottom: 0.5rem;
}
ul {
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
a {
  -ms-touch-action: manipulation;
  touch-action: manipulation;
}
h4 {
  margin-bottom: 0.5rem;
  font-family: inherit;
  font-weight: 500;
  line-height: 1.2;
  color: inherit;
}
h4 {
  font-size: 1.5rem;
}
/*! CSS Used from: https://d29u17ylf1ylz9.cloudfront.net/junior/css/plugins.css */
/*! @import https://d29u17ylf1ylz9.cloudfront.net/junior/css/plugins/owl.carousel.min.css */
.owl-carousel .owl-item img {
  display: block;
  width: 100%;
}

a {
  color: #444;
  text-decoration: none;
  transition: 0.3s;
}
a:focus {
  outline: thin dotted;
}
a:active,
a:hover {
  color: #89d700;
  outline: 0;
}
a:hover {
  text-decoration: underline;
}
h4 {
  clear: both;

  line-height: 1.3;
}
h4 {
  font-size: 20px;
  margin: 25px 0;
}
ul {
  list-style-type: square;
}
img {
  -ms-interpolation-mode: bicubic;
  border: 0;
  vertical-align: middle;
}
::-webkit-input-placeholder {
  color: #89d700;
}
:-moz-placeholder {
  color: #89d700;
}
::-moz-placeholder {
  color: #89d700;
}
:-ms-input-placeholder {
  color: #89d700;
}
::-webkit-input-placeholder {
  color: #666666;
}
:-moz-placeholder {
  color: #666666;
}
::-moz-placeholder {
  color: #666666;
}
:-ms-input-placeholder {
  color: #666666;
}
h4,
ul {
  margin: 0;
  color: #444444;
}
h4 {
  line-height: 1.3;
}
h4 {
  font-size: 20px;
}
h4 {
  font-weight: 700;
}
a:hover,
a:focus,
a:active {
  text-decoration: none;
  outline: none;
}
a {
  transition: 0.3s;
}
img {
  max-width: 100%;
}
ul {
  list-style: none;
}
ul {
  list-style: none;
  padding-left: 0;
}
.activation__one .junior__classes {
  margin-bottom: 18px;
}
.classes__icon img {
  -webkit-animation: rotate 3s linear 0s infinite normal;
  animation: rotate 3s linear 0s infinite normal;
}
.junior__classes {
  margin-top: 40px;
  text-align: center;
  box-shadow: 0 6px 15px 0 rgba(0, 0, 0, 0.1);
}
.junior__classes .classes__thumb a img {
  width: 100%;
}
.junior__classes .classes__inner {
  position: relative;
}
.junior__classes .classes__inner .classes__icon {
  left: 50%;
  position: absolute;
  top: -50px;
  transform: translateX(-50%);
}
.junior__classes .classes__inner .classes__icon span {
  color: #000;
  font-size: 24px;
  font-weight: 700;
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
}
.junior__classes .classes__inner .class__details {
  padding-top: 46px;
  padding-bottom: 34px;
  padding-top: 46px;
}
.junior__classes .classes__inner .class__details h4 a {
  color: #444444;
  display: block;
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 25px;
  padding-bottom: 10px;
  position: relative;
  transition: 0.3s;
}
.junior__classes .classes__inner .class__details h4 a::before {
  background: #ddd none repeat scroll 0 0;
  bottom: 0;
  content: '';
  height: 1px;
  left: 50%;
  position: absolute;
  transform: translateX(-50%);
  width: 100px;
}
.junior__classes .classes__inner .class__details h4 a:hover {
  color: #89d700;
}
.junior__classes .classes__inner .class__details .class__time {
  margin-bottom: 24px;
}
.junior__classes .classes__inner .class__details .class__time li {
  color: #777777;
  font-size: 13px;
}
.junior__classes .classes__inner .class__details .class__time li + li {
  margin-top: 2px;
}
.junior__classes .classes__inner .class__details .class__btn a.dcare__btn--2 {
  border: 1px solid #dddddd;
  border-radius: 5px;
  color: #777777;
  display: inline-block;
  font-size: 15px;
  font-weight: 700;
  height: 40px;
  line-height: 37px;
  padding: 0 30px;
  text-transform: capitalize;
  transition: all 0.5s ease 0s;
}
.junior__classes
  .classes__inner
  .class__details
  .class__btn
  a.dcare__btn--2:hover {
  background: #89d700 none repeat scroll 0 0;
  border: 1px solid #89d700;
  color: #fff;
}
.owl-carousel .owl-item img {
  margin: auto;
  width: auto;
}
/*! CSS Used keyframes */
@-webkit-keyframes rotate {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes rotate {
  100% {
    transform: rotate(360deg);
  }
}
</style>
