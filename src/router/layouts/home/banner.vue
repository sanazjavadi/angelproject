<script>
import authForm from '@layouts/Authorization/index.vue'

import { utilityState, utilityMutations } from '@state/helpers.js'
export default {
  components: { authForm },
  data() {
    return {
      ThirdCluodPosition: 2086.75,
      secondCloudPosition: -4173.5,
    }
  },
  computed: {
    ...utilityState,
  },
  mounted() {
    this.changebackgroundPos()
  },

  methods: {
    ...utilityMutations,
    changebackgroundPos() {
      setInterval(() => {
        this.ThirdCluodPosition += 2
        this.secondCloudPosition -= 2
      }, 100)
    },

    _toggleModal() {
      this.toggleModal()
    },
  },
}
</script>

<template>
  <section class="banner-section">
    <div
      id="clouds3"
      class="clouds"
      :style="{ backgroundPositionX: ThirdCluodPosition + 'px' }"
    ></div>
    <div id="clouds1" class="clouds"></div>
    <div
      id="clouds2"
      class="clouds"
      :style="{ backgroundPositionX: secondCloudPosition + 'px' }"
    ></div>
    <div class="row justify-content-center banner-title">
      <div
        class="col-lg-6 col-11 d-flex flex-column justify-content-center align-items-center"
      >
        <span>
          یک قلب ! یک آرزو
        </span>
        <h2 class="mt-4">می تونی دنیا رو به جای قشنگ تری تبدیل کنی</h2>
      </div>
    </div>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-10 col-12 d-flex justify-content-center flex-wrap">
          <baseButton
            class="mt-3 mr-lg-3 mr-md-3 mr-sm-3 mr-1"
            theme="lightbtn"
          >
            می خوام کمک کنم
          </baseButton>

          <baseButton
            class="mt-3 ml-lg-3 ml-md-3 ml-sm-3 ml-1"
            @click="_toggleModal"
          >
            ورود
          </baseButton>
        </div>
      </div>
    </div>

    <auth-form v-if="showModal"> </auth-form>
  </section>
</template>

<style lang="scss" scoped>
@import '@design';
.banner-section {
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
    top: 600px;
    @media (max-width: 680px) {
      top: 500px;
    }
  }
  #clouds3 {
    margin-top: -30px;
    background-position-x: -140px;
    -webkit-transition: all 0.2s linear;
    transition: all 0.2s linear;
    top: 600px;
    background-image: url('https://www.typingclub.com/m/tpmedia/img/clouds3.png');
    @media (max-width: 680px) {
      top: 500px;
    }
  }
  .clouds {
    position: absolute;
    width: 100%;
    height: 120px;
    left: 0px;
    top: 600px;
    @media (max-width: 680px) {
      top: 500px;
    }
  }
  margin-top: 5rem;
  span,
  h2 {
    text-align: center;
    color: $header-color;
  }
  .banner-title {
    @media (max-width: 680px) {
      margin-top: 9rem;
    }
    span {
      font-size: 30px;
      font-weight: 400;
    }
    h2 {
      @extend %font-heading;
    }
  }
}
</style>
