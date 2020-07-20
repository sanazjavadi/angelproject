<script>
export default {
  data() {
    return {
      count: 0,
    }
  },
  mounted() {
    setTimeout(this.countUp(0, 400, 2000), -100000)
  },
  methods: {
    countUp(start, end, duration) {
      const range = end - start
      let current = start
      const increment = end > start ? 1 : -1
      const stepTime = Math.abs(Math.floor(duration / range))
      const timer = setInterval(() => {
        current += increment
        // obj.innerHTML = current;
        this.count = current
        if (current === end) {
          clearInterval(timer)
        }
      }, stepTime)
    },
  },
}
</script>

<template>
  <section>
    <div class="container-fluid p-0">
      <div class="count-up">
        <h2 class="pb-4">
          تا الان
        </h2>
        <span>
          {{ count }}
        </span>

        <h2 class="pt-4">
          آرزو برآورده شده
        </h2>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import '@design';
.count-up {
  width: 100%;
  background-color: $dark-blue;
  text-align: center;
  padding: 4rem 0;
  color: white;
  font-weight: 900;
  position: relative;
  border: 1px solid #f0f0e7;
  &::before {
    position: absolute;
    content: url('');
    width: 150px;
    height: 150px;
    border-radius: 50%;
    top: -150px;
    left: 45%;
  }
  span {
    font-size: 50px;
  }
}
</style>
