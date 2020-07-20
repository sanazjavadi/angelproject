<script>
import blockqoute from '@components/blockqoute.vue'
export default {
  components: {
    blockqoute,
  },
}
</script>

<template>
  <div class="dream-block p-4">
    <div class="inner-box">
      <div class="image-box">
        <figure class="image">
          <router-link to="/">
            <blockqoute
              color="#aa66fd

"
            >
              من اسمم مریمه. من خیلی دوس دارم یه عروسک داشته باشم که باهاش حرف
              بزنم. آخه مامان بابام تو آسمونن من نمیتونم باهاشون حرف بزنم و بازی
              کنم.
            </blockqoute>
          </router-link>
        </figure>
      </div>
    </div>
    <div class="lower-content pb-3">
      <div class="d-flex align-items-center pb-2">
        <div class="avatar ">
          <img
            class="img-fluid"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQuxKFiDMn0DzHdAc4FZ5U2KzONHwLXtsYmhw&usqp=CAU"
            alt=""
          />
        </div>
        <h4 class="pl-2">
          <router-link to="/"> آرزوی بهاره کوچولو</router-link>
        </h4>
      </div>

      <BaseButton>
        می خوام به برآوردن این آرزو کمک کنم
      </BaseButton>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@design';
.container-fluid {
  padding: 0;
}
.dream-block {
  position: relative;
  margin-bottom: 30px;
  max-width: 380px;
  min-height: 500px;
  border-radius: 10px;
  width: 100%;
  overflow: hidden;
  box-shadow: 3px 3px 20px rgb(240, 221, 225);
  .inner-box {
    position: relative;
    overflow: hidden;
    transition: all 300ms ease;

    .image-box {
      position: relative;
      .image {
        position: relative;
        margin-bottom: 0;
        // transform: scaleX(-1);

        a {
          img {
            width: 100%;
            height: 250px;
          }
        }
      }
    }
  }

  .lower-content {
    position: relative;
    padding: 0 30px 0;
    .avatar {
      width: 70px;
      height: 70px;
      border-radius: 50%;
      overflow: hidden;
    }
    h4 {
      a {
        position: relative;
        display: block;
        font-size: 18px;
        line-height: 2.4em;
        color: $dark-blue;

        font-weight: 700;
      }
    }

    .btn-box {
      width: 100%;
      background-color: white;
    }
  }
}
</style>
