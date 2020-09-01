<script>
export default {
  data() {
    return {
      usersPics: [
        {
          name: 'ساناز جوادی',
          top: 48,
          left: -20,
        },
        {
          name: 'ساناز جوادی',
          top: -48,
          left: 373,
        },
        {
          name: 'ساناز جوادی',
          top: -30,
          left: 90,
        },
        {
          name: 'ساناز جوادی',
          top: 469,
          left: 393,
        },
        {
          name: 'ساناز جوادی',
          top: 62,
          left: 495,
        },
        {
          name: 'ساناز جوادی',
          top: 170,
          left: 539,
        },
        {
          name: 'ساناز جوادی',
          top: 270,
          left: 539,
        },
        {
          name: 'ساناز جوادی',
          top: 370,
          left: 500,
        },

        {
          name: 'ساناز جوادی',
          top: 170,
          left: -70,
        },
        {
          name: 'ساناز جوادی',
          top: 270,
          left: -80,
        },
        {
          name: 'ساناز جوادی',
          top: 370,
          left: -80,
        },
        {
          name: 'ساناز جوادی',
          top: 470,
          left: 0,
        },
      ],
    }
  },
}
</script>

<template>
  <div class="who-help-us">
    <div v-for="(userPic, index) in usersPics" :key="index">
      <p
        :style="{ top: userPic.top + 'px', left: userPic.left + 'px' }"
        alt=""
        class="users-pic"
      >
        {{ userPic.name }}
      </p>
    </div>
    <div class="circulate">
      <p> فرشته هایی که بیش ترین کمک </p>
      <p>
        رو بهمون کردن
      </p>
      <baseButton theme="lightbtn">
        منم میخوام کمک کنم
      </baseButton>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@design';
.who-help-us {
  position: relative;
  width: auto;
  height: 100%;
  .users-pic {
    position: absolute;
    color: $dark-blue;
    display: inline-block;
    font-weight: 500;
    font-size: 13px;
    white-space: nowrap;
  }
  .circulate {
    width: 500px;
    height: 500px;
    border-radius: 100%;
    background-color: #fff;
    border: 30px solid $light-blue;
    -webkit-box-shadow: 2px 0px 51px 24px $light-blue;
    -moz-box-shadow: 2px 0px 51px 24px $light-blue;
    box-shadow: 2px 0px 51px 24px $light-blue;
    overflow: hidden;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    p {
      color: $dark-blue;
      font-size: 18px;
      font-weight: 700;
    }
  }
}
</style>
