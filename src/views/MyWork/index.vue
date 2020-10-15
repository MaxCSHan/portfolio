<template>
  <div class="mywork">
      <transition 
         appear
         name="fade">
    <div class="mywork__container">
      <game-cards-stack
        :cards="userData"
        @cardAccepted="handleCardAccepted"
        @cardRejected="handleCardRejected"
        @cardSkipped="handleCardSkipped"
        @hideCard="removeCardFromDeck"
      />
      <div class="match"><div
        v-for="(ele,index) in acceptedArray"
        :key="ele+index"
        class="avatar"
        :style="{ 'background-image': 'url(' + ele.avatar + ')' }"
      /></div>
      
    </div>
     </transition>

  </div>
</template>
<script>
import GameCardsStack from '../../components/GameCardsStack'
import { getUser } from '@/services/portfolioService'

export default {
  name: 'MyWork',
  components: { GameCardsStack },
  data: function () {
    return {
      userData: [],
      visibleCards: ['TENET', 'Wonder Woman', 'Avengers', 'Interstellar', 'Inception', 'Yi-yi'],
      acceptedArray: []
    }
  },
  created() {
    this.apiGetUser()
  },
  methods: {
    handleCardAccepted(value) {
      this.acceptedArray.push(value)
      console.log('handleCardAccepted', value, this.acceptedArray)
    },
    handleCardRejected() {
      console.log('handleCardRejected')
    },
    handleCardSkipped() {
      console.log('handleCardSkipped')
    },
    removeCardFromDeck() {
      this.userData.shift()
    },
    async apiGetUser() {
      const res = await getUser()
      const { success, data } = res
      if (success) {
        this.userData = data
        console.log('success')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../styles/mixins';

html body {
  overflow: hidden;
}

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

.match {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 25rem;
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
  height: 5rem;
  justify-content: center;
  width: 5rem;
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
