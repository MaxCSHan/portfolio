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
        <div class="home__container__photoholder">
            <div
              :key="1"
              class="photo"
              :style="{ 'background-image': 'url(https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/1fb71899287637.5eefa7f5b0ab2.jpg)' }"
            />
            <div
              :key="2"
              class="photo"
              :style="{ 'background-image': 'url(https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/61f75a99287637.5eefa7f5b2206.jpg)' }"
            />
            <div
              :key="3"
              class="photo"
              :style="{ 'background-image': 'url(https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/501f5299287637.5eefa7f5adf81.jpg)' }"
            />

        </div>

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
      height: 25rem;
      overflow: hidden;
      transform: rotateX(0);
      width: 20rem;
    }
  }
}

// .mask {
//   align-items: center;
//   animation: move 10s ease-in-out infinite;
//   height: 25rem;
//   overflow: hidden;
//   position: absolute;
//   transform: rotateX(0);
//   transform-origin: bottom right;
//   transform-style: preserve-3d;
//   width: 20rem;
// }

.photo {
  // animation-play-state: paused;
  background-repeat: no-repeat;
  background-size: cover;
  height: 25rem;
  position: absolute;
  width: 20rem;
  @for $i from 1 through 4 {
    &:nth-of-type(#{$i}) {
      animation-delay: 10s * ($i);
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
  transition: all 1.5s ease;
}

.slide-fade-leave-active {
  transition: all 1.5s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter,
.slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateX(10px);
}
</style>
