<template>
  <div class="cart">
    <div class="header-cart">
      <ul>
        <li>
          نحوه برآورده کردن آرزو
        </li>
        <li>
          تکمیل اطلاعات
        </li>
      </ul>
    </div>

    <div class="body-cart mx-5 my-4 p-3">
      <div class="d-flex flex-column justify-content-between">
        <p>میخوام هزینه آرزو رو پرداخت کنم</p>
        <p>میخوام کالای آرزو رو تهیه کنم</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@design';
.cart {
  position: fixed;
  top: 0;
  right: 475px;
  width: 60vw;
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
    border: 1px solid $yellow;
    border-radius: 5px;
    position: relative;
    height: 70vh;
  }
}
</style>
