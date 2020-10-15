<template>
  <div class="loader-mask">
    <div class="loader-mask__inner">
      <div class="box">
        <div class="cube" />
        <div class="cube" />
        <div class="cube" />
        <div class="cube" />
        <div class="cube" />
        <div class="cube" />
        <div class="cube" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoadCube'
}
</script>

<style lang="scss" scoped>
$c-white: #fff;
$c-black: #000;
$ani-dur: 8s;
$size: 50px;
@mixin fill {
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
}

// .loader-mask {
//   //   background: rgba(0, 0, 0, 0.8);
//   height: 100%;
//   left: 0;
//   position: fixed;
//   top: 0;
//   width: 100%;
//   z-index: 99999;

//   &__inner {
//     align-items: center;
//     display: flex;
//     height: 100%;
//     justify-content: center;
//     position: relative;
//     width: 100%;
//   }
// }

// .loader {
//   animation: load6 1.7s infinite ease, round 1.7s infinite ease;
//   border-radius: 50%;
//   color: #fff;
//   font-size: 90px;
//   height: 1em;
//   margin: 72px auto;
//   overflow: hidden;
//   position: relative;
//   text-indent: -9999em;
//   transform: translateZ(0);
//   width: 1em;
// }

*
*::before,
*::after {
  box-sizing: border-box;
}

.cube {
  animation: move $ani-dur ease-in-out infinite;
  background: #722c8c;
  box-shadow: 5em 5em 0.3em 0.1em #dbdbdb;
  height: 1em;
  position: absolute;
  // animation-play-state: paused;
  transform-style: preserve-3d;
  width: 1em;

  &::before,
  &::after {
    @include fill;

    content: '';
  }

  &::before {
    background-color: #4a1c5b;
    transform: rotateY(-90deg);
    transform-origin: 100% 100%;
  }

  &::after {
    background-color: #66277c;
    transform: rotateX(90deg);
    transform-origin: 0% 100%;
  }

  @for $i from 1 through 8 {
    &:nth-of-type(#{$i}) {
      animation-delay: $ani-dur * ($i / 8 - 8);
    }
  }

  @keyframes move {
    0% { transform: translate(0, 0); }
    12.5% { transform: translate(1em, 0); }
    25% { transform: translate(2em, 0); }
    31.25% { transform: translate(2em, 0); }
    37.5% { transform: translate(2em, 1em); }
    50% { transform: translate(2em, 2em); }
    62.5% { transform: translate(1em, 2em); }
    75% { transform: translate(0, 2em); }
    87.5% { transform: translate(0, 1em); }

    // 0%,
    // 87.5%,
    // 100% { transform: translate(1em, 0); }
    // 12.5% { transform: translate(2em, 0); }
    // 25% { transform: translate(2em, 1em); }

    // 37.5%,
    // 50% { transform: translate(1em, 1em); }
    // 62.5% { transform: translate(0, 1em); }
    // 75% { transform: translate(0, 0); }
  }
}

.box {
  @include fill;

  font-size: $size;
  height: 2em;
  margin: 30vmin auto;
  transform: rotateX(60deg) rotateZ(45deg);
  transform-style: preserve-3d;
  width: 3em;

  &:hover * { animation-play-state: paused; }
  &:active * { animation-play-state: running; }
}

// @keyframes load6 {
//   0% {
//     box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;
//   }

//   5%,
//   95% {
//     box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;
//   }

//   10%,
//   59% {
//     box-shadow: 0 -0.83em 0 -0.4em, -0.087em -0.825em 0 -0.42em, -0.173em -0.812em 0 -0.44em, -0.256em -0.789em 0 -0.46em, -0.297em -0.775em 0 -0.477em;
//   }

//   20% {
//     box-shadow: 0 -0.83em 0 -0.4em, -0.338em -0.758em 0 -0.42em, -0.555em -0.617em 0 -0.44em, -0.671em -0.488em 0 -0.46em, -0.749em -0.34em 0 -0.477em;
//   }

//   38% {
//     box-shadow: 0 -0.83em 0 -0.4em, -0.377em -0.74em 0 -0.42em, -0.645em -0.522em 0 -0.44em, -0.775em -0.297em 0 -0.46em, -0.82em -0.09em 0 -0.477em;
//   }

//   100% {
//     box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;
//   }
// }

// @keyframes round {
//   0% {
//     transform: rotate(0deg);
//   }

//   100% {
//     transform: rotate(360deg);
//   }
// }

// .circle {
//   animation: spin 1s infinite linear;
//   border: 10px solid rgba(255, 255, 255, 0.2);
//   border-radius: 100%;
//   border-top-color: #fff;
//   box-sizing: border-box;
//   height: 80px;
//   width: 80px;
// }

// @keyframes spin {
//   100% {
//     transform: rotate(360deg);
//   }
// }

// .spinner {
//   text-align: center;
//   width: 70px;
// }

// .spinner > div {
//   animation: sk-bouncedelay 1.4s infinite ease-in-out both;
//   background-color: #fff;
//   border-radius: 100%;
//   display: inline-block;
//   height: 18px;
//   width: 18px;
// }

// .spinner .bounce1 {
//   animation-delay: -0.32s;
// }

// .spinner .bounce2 {
//   animation-delay: -0.16s;
// }

// @keyframes sk-bouncedelay {
//   0%,
//   80%,
//   100% {
//     transform: scale(0);
//   }

//   40% {
//     transform: scale(1);
//   }
// }

// .circle {
//   animation: spin 1.3s infinite linear;
//   border: 10px solid rgba(255, 255, 255, 0.2);
//   border-radius: 100%;
//   border-top-color: #fff;
//   box-sizing: border-box;
//   height: 80px;
//   width: 80px;
// }

// @keyframes spin {
//   100% {
//     transform: rotate(360deg);
//   }
// }
</style>
