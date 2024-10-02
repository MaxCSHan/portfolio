<template>
  <div class="cards">
      <game-card
      ref="deck"
        @keyup="keywordDetector"
        v-for="(card, index) in cards"
        :key="card.username+index"
        :card="card"
        :is-current="index === 0"
        @cardAccepted="cardAccepted(card)"
        @cardRejected="cardRejected"
        @cardSkipped="cardSkipped"
        @hideCard="hideCard"
      />
    <transition name='fade'>
      <div
        class="empty"
        v-if="cards.length<1"
      >你附近沒有其他人了</div>
    </transition>
  </div>
</template>

<script>
import GameCard from '@/components/GameCard'

export default {
  components: {
    GameCard
  },
  props: {
    cards: {
      type: Array,
      required: true
    }
  },
  methods: {
    cardAccepted(card) {
      this.$emit('cardAccepted', card)
    },
    cardRejected() {
      this.$emit('cardRejected')
    },
    cardSkipped() {
      this.$emit('cardSkipped')
    },
    hideCard() {
      this.$emit('hideCard')
    },
     keywordDetector (event) {
      console.log(event)
      if (event.code === 'ArrowUp' ) {
        console.log(1)
      } 
    }
  }
}
</script>

<style lang="scss" scoped>
.cards {
  align-items: center;
  //   border-radius: 20px;
  //   box-shadow: 0 0 20px #888;
  display: flex;
  height: 50vh;
  justify-content: center;
  margin: 50px;
  position: relative;
  width: 40vh;
}

.empty {
  color: #fd297b;
  font-size: 2em;
  text-align: center;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1.5s;
}

.fade-enter,
.fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
