<template>
  <div class="cart">
    <div class="header-cart">
      <ul>
        <li>
          نحوه پرداخت
        </li>
        <li>
          اتصال به درگاه بانک
        </li>
      </ul>
    </div>

    <div class="body-cart mx-5 my-4 p-3">
      <div class="payment-method-first"> پی پینگ</div>
      <div class="peyment-method-second mt-3">بانک پارسیان</div>
    </div>

    <div class="footer-cart m-auto">
      <baseButton>
        صفحه پرداخت
      </baseButton>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@design';
.cart {
  position: fixed;
  top: 0;
  right: 475px;
  width: 50vw;
  height: 100vh;
  background-color: white;
  z-index: 2;
  border-left: 1px solid $light-gray;
  display: flex;
  flex-direction: column;
  .header-cart {
    border-bottom: 1px solid $light-blue;
    position: relative;
    height: 60px;
    background: $dark-blue;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    ul {
      display: flex;
      align-items: center;
      justify-content: center;

      font-size: 18px;
      li {
        &:first-child {
          padding-left: 5rem;
        }
        &:last-child {
          padding-right: 5rem;
        }
      }
    }
  }

  .body-cart {
    height: 75vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .payment-method-first {
      background-color: #fff;
      text-align: center;
      width: 250px;
      padding: 3rem;
      border: 1px solid $light-gray;
      color: $dark-blue;
      font-weight: 900;
      font-size: 20px;
      border-radius: 5px;
    }
    .peyment-method-second {
      background-color: #fff;
      text-align: center;
      width: 250px;
      padding: 3rem;
      border: 1px solid $light-gray;
      color: $dark-blue;
      font-weight: 900;
      font-size: 20px;
      border-radius: 5px;
    }
  }
}
</style>
