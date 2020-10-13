<template>
  <div class="cards">
    <GameCard
      v-for="(card, index) in cards"
      :key="card"
      :card="card"
      :is-current="index === 0"
      @cardAccepted="cardAccepted"
      @cardRejected="cardRejected"
      @cardSkipped="cardSkipped"
      @hideCard="hideCard"
    />
  </div>
</template>

<script>
import GameCard from "@/components/GameCard";

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
  methods:{
      cardAccepted(){
          this.$emit('cardAccepted')
      },
      cardRejected(){
          this.$emit('cardRejected')
      },
      cardSkipped(){
          this.$emit('cardSkipped')
      },
      hideCard(){
          this.$emit('hideCard')
      }
  }
};
</script>

<style lang="scss" scoped>
.cards {
  display: flex;
  height: 50vh;
  margin: 50px;
  position: relative;
  width: 40vh;
}
</style>
