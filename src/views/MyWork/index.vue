<template>
  <div class="mywork">
      <div class="mywork__container">
          <game-cards-stack
			:cards="visibleCards"
			@cardAccepted="handleCardAccepted"
			@cardRejected="handleCardRejected"
			@cardSkipped="handleCardSkipped"
			@hideCard="removeCardFromDeck"
		/>
        </div>
    
  </div>
</template>
<script>
import GameCardsStack from "../../components/GameCardsStack";

export default {
  name: 'MyWork',
  components:{GameCardsStack},
  data: function () {
    return {
      visibleCards: ["TENET", "Wonder Woman", "Avengers","Interstellar","Inception","Yi-yi"]
    }
  },
  methods:{
      handleCardAccepted() {
      console.log("handleCardAccepted");
    },
    handleCardRejected() {
      console.log("handleCardRejected");
    },
    handleCardSkipped() {
      console.log("handleCardSkipped");
    },
    removeCardFromDeck() {
      this.visibleCards.shift();
    }
  
  }
}
</script>

<style lang="scss" scoped>
@import '../../styles/mixins';

.mywork {
  height: 100%;

  &__container {
    align-items: center;
    display: flex;
    flex: 1;
    flex-direction: column;
    height: 100%;

    &__title {
      color: #000;
      font-family: 'Canela';
      font-size: 1rem;
      text-align: center;
    }
    
  }

  
}


</style>
