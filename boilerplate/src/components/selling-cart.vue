<script>
export default {}
</script>

<template>
  <div class="dream-block">
    <div class="inner-box">
      <div class="image-box">
        <figure class="image">
          <router-link to="/">
            <img
              src="http://t.commonsupport.xyz/gaowa/images/resource/program-1.jpg"
              alt=""
            />
          </router-link>
        </figure>
      </div>
    </div>
    <div class="lower-content">
      <h4>
        <router-link to="/"> آرزوی بهاره کوچولو</router-link>
      </h4>

      <div class="text">
        آرزو دارم یک دفتر داشته باشم. من لپ تاپ دوست دارم.
      </div>

      <div class="btn-box">
        <BaseButton>
          می خوام به برآوردن ای آرزو کمک کنم
        </BaseButton>
      </div>
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
  max-width: 350px;

  min-height: 500px;
  width: 100%;
  .inner-box {
    position: relative;
    overflow: hidden;

    transition: all 300ms ease;
    .image-box {
      position: relative;
      .image {
        position: relative;
        margin-bottom: 0;
        background-color: #ff4880;
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
    background-color: white;
    padding: 30px 20px 0;
    h4 {
      a {
        position: relative;
        display: block;
        font-size: 18px;
        line-height: 2.4em;
        color: $dark-blue;
        margin-bottom: 18px;
        font-weight: 700;
      }
    }
    .text {
      position: relative;
      margin-bottom: 18px;
    }
    .btn-box {
      width: 100%;
    }
  }
}
</style>
