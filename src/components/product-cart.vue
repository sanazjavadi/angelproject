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
      <div class="w-100 d-flex justify-content-between">
        <p class="name font-weight-bolder ">آرزوی ارشیا </p>
        <i class="fa fa-trash align-self-start" aria-hidden="true"> </i>
      </div>

      <p class="details mt-1">آرزو دارم یک ماشین کنترلی داشته باشم. </p>
      <div class="w-100 d-flex justify-content-between align-items-center">
        <p>مقدار دلخواه خود را وارد کنید</p>
        <div class="d-flex align-items-center  mt-2 ">
          <baseInput placeholder="0,00" align="ltr" size="sm" />
          <!-- <p class="price font-weight-bolder pl-2 m-0"> تومان</p> -->
        </div>
      </div>
    </div>
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
    font-size: 12px;
    width: 100%;
    p {
      margin: 0;
      color: $dark-blue;
      font-weight: 500;
    }
    .name {
      font-size: 14px;
      color: $dark-gray;
    }
  }
}
</style>
