<script>
export default {}
</script>

<template>
  <div class="product-row d-flex my-4 align-items-center">
    <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQuxKFiDMn0DzHdAc4FZ5U2KzONHwLXtsYmhw&usqp=CAU"
      alt=""
      class="img-fluid"
    />
    <div class="info pl-3">
      <p class="name font-weight-bolder ">آرزوی ارشیا </p>
      <p class="details ">آرزو دارم یک ماشین کنترلی داشته باشم. </p>
      <p class="price font-weight-bolder ">10,000 تومان</p>
    </div>
    <i class="fa fa-trash align-self-start" aria-hidden="true"> </i>
  </div>
</template>

<style lang="scss" scoped>
@import '@design';
.product-row {
  padding: 1rem;
  border: 1px solid $light-blue;
  border-radius: 5px;
  img {
    width: 60px;
    border-radius: 5px;
  }
  .info {
    text-align: right;
    color: $dark-gray;
    font-size: 12px;
    width: 85%;
    p {
      margin: 0;
    }
  }
}
</style>
