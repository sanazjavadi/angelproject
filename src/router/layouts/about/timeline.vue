<script>
// timeline svg

import timeline1 from '@components/svg/timeline1-svg.vue'
import timeline2 from '@components/svg/timeline2-svg.vue'
import timeline3 from '@components/svg/timeline3-svg.vue'
import timeline4 from '@components/svg/timeline4-svg.vue'
export default {
  components: { timeline1, timeline2, timeline3, timeline4 },
}
</script>

<template>
  <section class="section-margin">
    <div class="container">
      <h2 class="about-timeline-title">چجوری آرزویی رو برآورده کنیم؟</h2>
      <div class="row justify-content-center">
        <div class="col-lg-10 col-md-12">
          <ol>
            <li class="how-it-works-step">
              <figure class="how-it-works-step-graphic"><timeline1 /> </figure>
              <div class="how-it-works-step-content ">
                <span> ۱- لیست آرزوها</span>
                <p
                  >اول از همه لیست بچه هایی که نیاز به کمک دارن رو ببین و هر
                  کدوم رو که دوست داری انتخاب کن
                </p>
              </div>
            </li>
            <li class="how-it-works-step">
              <figure class="how-it-works-step-graphic "><timeline2 /> </figure>
              <div class="how-it-works-step-content ">
                <span>۲- ثبت نام</span>
                <p
                  >اگه تو سایتمون ثبت نام نکردی تو صفحه اصلی رو دکمه ثبت نام
                  کلیک کن و یه اکانت واسه خودت بساز</p
                >
              </div>
            </li>
            <li class="how-it-works-step">
              <figure class="how-it-works-step-graphic "><timeline3 /> </figure>
              <div class="how-it-works-step-content ">
                <span>۳- برآورده کردن آرزو</span>
                <p
                  >بعد از این که آرزویی که می تونستی برآوزده کنی و انتخاب کردی
                  به درگاه وصل میشی و هزینه اون آرزو رو پرداخت میکین</p
                >
              </div>
            </li>
            <li class="how-it-works-step">
              <figure class="how-it-works-step-graphic ">
                <timeline4 />
              </figure>
              <div class="how-it-works-step-content ">
                <span>
                  ۴- چجوری میتونی به ما اعتماد کنی؟
                </span>
                <p>
                  از طریق نماد الکترونیکی که تو سایت هست و مهینطور از طریق لینک
                  زیر می تونی بخونی که روند کار چجوریه
                </p>
              </div>
            </li>
          </ol>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import '@design';
.section-margin {
  margin-top: 250px;

  @media (max-width: 768px) {
    margin-top: 250px;
  }
  .about-timeline-title {
    @extend %font-heading;
    text-align: center;
    color: $dark-blue;
  }
  ol {
    list-style: none;
    margin: 0;
    padding: 0;

    .how-it-works-step:nth-child(2n) {
      flex-direction: row-reverse;
    }

    .how-it-works-step {
      display: flex;
      text-align: right;
      flex-direction: row;
      position: relative;
      @media (max-width: 500px) {
        text-align: center;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        padding: 1rem 0;
      }

      &::after {
        position: absolute;
        content: '';
        width: 30px;
        height: 30px;
        background-color: #00bfc2;
        border-radius: 50%;
        left: 50%;
        top: 0;
        transform: translate(-50%, -50%);
        @media (max-width: 500px) {
          display: none;
        }
      }
      .how-it-works-step-content {
        width: 50%;
        @media (max-width: 500px) {
          width: 100%;
        }
        span {
          color: $dark-blue;
          font-weight: 700;
          text-align: right;
          font-size: 1.6rem;
          @media (max-width: 768px) {
            font-size: 1.3rem;
          }
          @media (max-width: 500px) {
            padding: 1rem 0;
          }
        }
        p {
          @extend %font-content;
          color: $dark-gray;
          margin: 0;
          padding-top: 0.7rem;
          font-weight: 500;
        }
      }

      .how-it-works-step-graphic {
        width: 50%;
        @media (max-width: 500px) {
          width: 100%;
          margin: auto;
          svg {
            width: 100px;
            height: 100px;
            margin: auto;
          }
        }
      }
      &:nth-child(odd) {
        .how-it-works-step-graphic {
          padding-left: 5.875rem;
          @media (max-width: 768px) {
            padding-left: 1rem;
          }
          @media (max-width: 500px) {
            padding-left: 0;
            margin: auto;
          }
        }
        .how-it-works-step-content {
          padding-right: 5.875rem;
          @media (max-width: 768px) {
            padding-right: 1rem;
          }
          @media (max-width: 500px) {
            padding-right: 0;
            margin: auto;
          }
        }
      }

      &:nth-child(2n) {
        .how-it-works-step-content {
          padding-left: 5.875rem;
          @media (max-width: 768px) {
            padding-left: 1rem;
          }
          @media (max-width: 500px) {
            padding-left: 0;
          }
        }
        .how-it-works-step-graphic {
          padding-right: 5.875rem;
          padding-bottom: 4rem;
          @media (max-width: 768px) {
            padding-right: 1rem;
          }
          @media (max-width: 500px) {
            padding: 1rem 0;
          }
        }
      }
    }
  }
}

.how-it-works-step:nth-child(odd):not(:last-child) .how-it-works-step-graphic {
  border-left: 1px solid #00bfc2;
  @media (max-width: 500px) {
    border: none;
  }
}
.how-it-works-step:nth-child(odd):not(:last-child) .how-it-works-step-content {
  border-right: 1px solid #00bfc2;
  @media (max-width: 500px) {
    border: none;
  }
}
.how-it-works-step:nth-child(2n):not(:last-child) .how-it-works-step-graphic {
  border-right: 1px solid #00bfc2;
  @media (max-width: 500px) {
    border: none;
  }
}
.how-it-works-step:nth-child(2n):not(:last-child) .how-it-works-step-content {
  border-left: 1px solid #00bfc2;
  @media (max-width: 500px) {
    border: none;
  }
}
</style>
