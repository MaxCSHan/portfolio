<template>
  <div
    v-if="isShowing"
    ref="interactElement"
    :class="{
      isanimating: isInteractAnimating,
      iscurrent: isCurrent
    }"
    class="card"
    :style="{ transform: transformString ,'background-image': 'url(' + card.avatar + ')'}"
  >

    <div class="info">

      <div class="person">
        <div class="cardtitle">{{ card.username }}</div>

        <div class="cardtitle">{{ card.age }}</div>
      </div>
      <div class="second">
        <div>{{distance(card.location)}}公里遠 </div>

      </div>

    </div>

  </div>
</template>

<script>
import interact from 'interact.js'
const ACCEPT_CARD = 'cardAccepted'
const REJECT_CARD = 'cardRejected'
const SKIP_CARD = 'cardSkipped'

export default {
  static: {
    interactMaxRotation: 15,
    interactOutOfSightXCoordinate: 500,
    interactOutOfSightYCoordinate: 600,
    interactYThreshold: 150,
    interactXThreshold: 100
  },

  props: {
    card: {
      type: Object,
      required: true
    },
    isCurrent: {
      type: Boolean,
      required: true
    }
  },

  data() {
    return {
      isShowing: true,
      isInteractAnimating: true,
      isInteractDragged: null,
      interactPosition: {
        x: 0,
        y: 0,
        rotation: 0
      }
    }
  },

  computed: {
    transformString() {
      if (!this.isInteractAnimating || this.isInteractDragged) {
        const { x, y, rotation } = this.interactPosition
        return `translate3D(${x}px, ${y}px, 0) rotate(${rotation}deg)`
      }

      return null
    }
  },

  mounted() {
    const element = this.$refs.interactElement
    // console.log(element)
    element.addEventListener('keyup', $event => this.$emit('keyup', $event))

    // ['keyup','keydown','keypress','focus','blur'].map(event => {element.input.addEventListener(event, $event => this.$emit(event, $event))})

    interact(element).draggable({
      onstart: () => {
        this.isInteractAnimating = false
      },

      onmove: (event) => {
        const { interactMaxRotation, interactXThreshold } = this.$options.static
        const x = this.interactPosition.x + event.dx
        const y = this.interactPosition.y + event.dy

        let rotation = interactMaxRotation * (x / interactXThreshold)

        if (rotation > interactMaxRotation) rotation = interactMaxRotation
        else if (rotation < -interactMaxRotation) rotation = -interactMaxRotation

        this.interactSetPosition({ x, y, rotation })
      },

      onend: () => {
        const { x, y } = this.interactPosition
        const { interactXThreshold, interactYThreshold } = this.$options.static
        this.isInteractAnimating = true

        if (x > interactXThreshold) this.playCard(ACCEPT_CARD)
        else if (x < -interactXThreshold) this.playCard(REJECT_CARD)
        else if (y > interactYThreshold) this.playCard(SKIP_CARD)
        else this.resetCardPosition()
      }
    })
  },

  beforeDestroy() {
    interact(this.$refs.interactElement).unset()
  },

  methods: {
    hideCard() {
      setTimeout(() => {
        this.isShowing = false
        this.$emit('hideCard', this.card)
      }, 300)
    },

    playCard(interaction) {
      const { interactOutOfSightXCoordinate, interactOutOfSightYCoordinate, interactMaxRotation } = this.$options.static

      this.interactUnsetElement()

      switch (interaction) {
        case ACCEPT_CARD:
          this.interactSetPosition({
            x: interactOutOfSightXCoordinate,
            rotation: interactMaxRotation
          })
          this.$emit(ACCEPT_CARD)
          break
        case REJECT_CARD:
          this.interactSetPosition({
            x: -interactOutOfSightXCoordinate,
            rotation: -interactMaxRotation
          })
          this.$emit(REJECT_CARD)
          break
        case SKIP_CARD:
          this.interactSetPosition({
            y: interactOutOfSightYCoordinate
          })
          this.$emit(SKIP_CARD)
          break
      }

      this.hideCard()
    },

    interactSetPosition(coordinates) {
      const { x = 0, y = 0, rotation = 0 } = coordinates
      this.interactPosition = { x, y, rotation }
    },

    interactUnsetElement() {
      interact(this.$refs.interactElement).unset()
      this.isInteractDragged = true
    },
    resetCardPosition() {
      this.interactSetPosition({ x: 0, y: 0, rotation: 0 })
    },
    toRad  (value) {
        return (value * Math.PI) / 180
      }
    ,
    distance(location) {
      var lat2 = location.latitude
      var lon2 = location.longitude
      var lat1 = 25.032969
      var lon1 = 121.565414

      var R = 6371 // km
      //has a problem with the .toRad() method below.
      var x1 = lat2 - lat1
      var dLat = this.toRad(x1)
      var x2 = lon2 - lon1
      var dLon = this.toRad(x2)
      var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(this.toRad(lat1)) * Math.cos(this.toRad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2)
      var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
        return  Math.round(R * c)
     
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../styles/index';

$cards-total: 3;
$cards-width: 40vh;
$cards-position-offset: 55vh * 0.06;
$cards-scale-offset: 0.08;
$default-translation: $cards-position-offset * $cards-total;
$default-scale: 1 - ($cards-scale-offset * $cards-total);
$fs-card-title: 2em;
$fs-card-age: 1em;

.card {
  @include card();
  @include absolute(0);
  @include sizing(100% 80vw);
  //   @include flex-center();

  //   background-image: linear-gradient(-180deg,
  //   $primary-gradient-start 2%,
  //   $primary-gradient-end 100%);
  background-color: #fff;
  background-repeat: no-repeat;
  background-size: cover;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  color: $c-white;
  display: flex;
  flex-direction: column;
  font-size: $fs-h2;
  font-weight: $fw-bold;
  height: 50vh;
  margin: auto;
  max-height: 50vh;
  opacity: 0;
  pointer-events: none;
  transform: translateY($default-translation) scale($default-scale);
  transform-origin: 50%, 100%;
  user-select: none;
  will-change: transform, opacity;

  @include after() {
    @include sizing(21px 3px);
    @include absolute(right 0 bottom 11px left 0);

    background: rgba($c-black, 0.3);
    border-radius: 100px;
    margin: auto;
  }

  &.iscurrent {
    pointer-events: auto;
  }

  &.isanimating {
    transition: transform 0.7s $ease-out-back;
  }
}

.info {
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: left;
  margin-bottom: 2vh;
  margin-top: auto;
}

.person {
  display: flex;
  flex-direction: row;
}

.cardtitle {
  font-size: $fs-card-title;
  margin-left: 1vh;
}

.age {
  font-size: $fs-card-age;
}

.second {
  margin-left: 1vh;
}

@for $i from 1 through $cards-total {
  $index: $i - 1;
  $translation: $cards-position-offset * $index;
  $scale: 1 - ($cards-scale-offset * $index);

  .card:nth-child(#{$i}) {
    opacity: 1;
    transform: translateY($translation) scale($scale);
    z-index: $cards-total - $index;

    @if $i == 3 {
      background-color: $c-red-25;
      color: $c-red-25;
    } @else if $i == 2 {
      background-color: $c-red-50;
      color: $c-red-50;
    }

    @if $i != 1 {
      background-image: none;

      @include after() {
        @include sizing(0 0);
      }
    }
  }
}

.avatar {
  align-items: center;
  background-color: #fff;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 10%;
  display: inline-box;
  display: inline-flexbox;
  display: inline-flex;
  height: 20rem;
  justify-content: center;
  width: 20rem;
}
</style>
