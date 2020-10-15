<template>
  <div class="home">

    <div class="home__container">
      <transition
        appear
        name="fade"
      >
        <div class="home__container__title">
          {{msg}}
        </div>
      </transition>
      <transition
        appear
        name="slide-fade"
      >
        <div
          class="home__container__photoholder"
          :style="{ 'background-image': 'url(https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/1fb71899287637.5eefa7f5b0ab2.jpg)' }"
        />
      </transition>

    </div>

  </div>
</template>
<script>
// import LoadCube from "../../components/LoadCube";

export default {
  name: 'Home',
  components: {},
  data: function () {
    return {
      msg: 'Max Chen'
    }
  }
}
</script>

<style lang="scss" scoped>
.home {
  height: 100%;

  &__container {
    align-items: center;
    display: flex;
    flex: 1;
    flex-direction: row;
    height: 100%;
    justify-content: space-evenly;

    &__title {
      color: #000;
      font-family: 'Canela';
      font-size: 9rem;
      text-align: center;
    }

    &__photoholder {
      align-items: center;
      background-color: #fff;
      background-repeat: no-repeat;
      background-size: cover;
      display: inline-box;
      display: inline-flexbox;
      display: inline-flex;
      height: 25rem;
      justify-content: center;
      width: 20rem;
    }
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1.5s;
}

.fade-enter,
.fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.slide-fade-enter-active {
  transition: all 1s ease;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter,
.slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateX(10px);
}
</style>
