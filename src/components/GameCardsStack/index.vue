<template>
  <div class="cards">
    <game-card
      v-for="(card, index) in cards"
      :key="card.username+index"
      :card="card"
      :is-current="index === 0"
      @cardAccepted="cardAccepted(card)"
      @cardRejected="cardRejected"
      @cardSkipped="cardSkipped"
      @hideCard="hideCard"
    />
    <div class="empty" v-if="cards.length<1">There's nothing left behind.</div>
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
      cardAccepted(card){
          this.$emit('cardAccepted',card)
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

.empty {
  text-align: center;
}
</style>
