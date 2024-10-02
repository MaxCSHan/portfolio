<template>
  <div class="mywork">
    <!-- <nav class="sidebar"  >
      <div class="sidebar-header">
        <h3>Bootstrap Sidebar</h3>
      </div>

      <ul class="list-unstyled components">
        <p>Dummy Heading</p>
        <li class="active">
          <a
            href="#homeSubmenu"
            data-toggle="collapse"
            aria-expanded="false"
            class="dropdown-toggle"
          >Home</a>
          <ul
            class="collapse list-unstyled"
            id="homeSubmenu"
          >
            <li>
              <a href="#">Home 1</a>
            </li>
            <li>
              <a href="#">Home 2</a>
            </li>
            <li>
              <a href="#">Home 3</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a
            href="#pageSubmenu"
            data-toggle="collapse"
            aria-expanded="false"
            class="dropdown-toggle"
          >Pages</a>
          <ul
            class="collapse list-unstyled"
            id="pageSubmenu"
          >
            <li>
              <a href="#">Page 1</a>
            </li>
            <li>
              <a href="#">Page 2</a>
            </li>
            <li>
              <a href="#">Page 3</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#">Portfolio</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </nav> -->
    <div id="content">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <button
            type="button"
            @click="collapse()"
            class="btn btn-info"
          >
            <i class="fas fa-align-left"></i>
            <span>Toggle Sidebar</span>
          </button>

        </div>
      </nav>
      <transition
        appear
        name="fade"
      >
        <div class="mywork__container">
          <game-cards-stack
            :cards="cards"
            @cardAccepted="handleCardAccepted"
            @cardRejected="handleCardRejected"
            @cardSkipped="handleCardSkipped"
            @hideCard="removeCardFromDeck"
          />
          <vue-slider
            v-model="maximumDistance"
            :width="300"
            :max="1000"
          ></vue-slider>
          <vue-slider
            v-model="ageRange"
            :order="false"
            :width="300"
            :max="100"
            :min="18"
          />
          <div class="match">
            <div
              v-for="(ele,index) in acceptedArray"
              :key="ele+index"
              class="avatar"
              :style="{ 'background-image': 'url(' + ele.avatar + ')' }"
            />
          </div>
        </div>
      </transition>
    </div>

  </div>
</template>
<script>
import VueSlider from 'vue-slider-component'
import 'vue-slider-component/theme/default.css'
import GameCardsStack from '../../components/GameCardsStack'
import { getUser } from '@/services/portfolioService'

export default {
  name: 'MyWork',
  components: { GameCardsStack, VueSlider },
  data: function () {
    return {
      userData: [],
      visibleCards: ['TENET', 'Wonder Woman', 'Avengers', 'Interstellar', 'Inception', 'Yi-yi'],
      acceptedArray: new Set(),
      maximumDistance: 1000,
      ageRange: [18, 90],
      cards: [],
      sidebarCollapse:false
    }
  },
  watch: {
    maximumDistance() {
      this.cards = this.inRangeCards
    },
    ageRange() {
      this.cards = this.inRangeCards
    }
  },
  computed: {
    inRangeCards() {
      return this.userData.filter((ele) => ele.distance <= this.maximumDistance && ele.age >= this.ageRange[0] && ele.age <= this.ageRange[1])
    }
  },
  async created() {
    await this.apiGetUser()
    this.userData.forEach((element) => {
      element['distance'] = this.distance(element.location)
    })
    this.cards = this.inRangeCards
  },
  methods: {
    handleCardAccepted(value) {
      this.acceptedArray.add(value)
      // console.log('handleCardAccepted', value, this.acceptedArray)
    },
    handleCardRejected() {
      console.log('handleCardRejected')
    },
    handleCardSkipped() {
      console.log('handleCardSkipped')
    },
    removeCardFromDeck() {
      this.cards.shift()
    },
    async apiGetUser() {
      const res = await getUser()
      const { success, data } = res
      if (success) {
        this.userData = data
        console.log('success')
      }
    },
    toRad(value) {
      return (value * Math.PI) / 180
    },
    distance(location) {
      const lat2 = location.latitude
      const lon2 = location.longitude
      const lat1 = 25.032969
      const lon1 = 121.565414

      const R = 6371
      //has a problem with the .toRad() method below.
      var x1 = lat2 - lat1
      var dLat = this.toRad(x1)
      var x2 = lon2 - lon1
      var dLon = this.toRad(x2)
      var a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(this.toRad(lat1)) * Math.cos(this.toRad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2)
      var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
      return R * c
    },
    collapse(){
      this.sidebarCollapse=!this.sidebarCollapse
      console.log("switch")
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
  align-items: stretch;
  display: flex;
  height: 100%;
  width: 100%;

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

.sidebar {
  max-width: 250px;
  min-height: 100vh;
  min-width: 250px;
}

.sidebar.active {
  margin-left: -250px;
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
