<template>
<div class="container">
  <input v-model="keyword">
 <div class="aboutme">
    <div
      class=column
      v-for="(col) in colArray"
      :key="col"
      :style="styleObject"
    >
      <div
        v-for="(user,index) in grid[col]"
        :key="user+index"
        class="card"
      >
        <div class="img-container">
          <img
            class=avatar
            :src="user.node.display_url"
          >
          <div class="mask">
            <a :href="'https://www.instagram.com/p/'+ user.node.shortcode" target="_blank" class="btn-save">GO</a>
          </div>
        </div>

        <div v-if="user.node.edge_media_to_caption.edges[0].node.text.length>100" class="text">{{  user.node.edge_media_to_caption.edges[0].node.text.substring(0,100)}}  <a :href="'https://www.instagram.com/p/'+ user.node.shortcode" target="_blank">...</a></div>
        <div v-else class="text">{{  user.node.edge_media_to_caption.edges[0].node.text}}</div>

      </div>
    </div>
  </div>
</div>
 

</template>
<script>
import { getUser, getInsUser } from '@/services/portfolioService'

export default {
  name: 'AboutMe',
  components: {},
  data: function () {
    return {
      msg: 'Swipe me',
      users: [],
      colNum: 3,
      colArray: [],
      grid: {},
      styleObject: {
        'min-width': 0
      },
      insData:[],
      keyword:"居酒屋"
    }
  },
  watch: {},
  mounted() {
    this.onScroll()
  },
  computed: {
    // cols(){
    //   (window.foo = window.foo || []).push('bar')
    // }
    mostliked () {
return this.insData.filter(ele => ele).sort((a, b) =>
        b.node.edge_liked_by.count-a.node.edge_liked_by.count )
    }
  },
  async created() {
    await this.getInsUser(this.keyword)
    
    console.log(this.mostliked)
    await this.apiGetUser()
    this.colArray = [...Array(this.colNum).keys()]
    this.colArray.forEach((col) =>
      this.mostliked.forEach((ele, index) => (index % this.colNum === col ? (this.grid[col] = this.grid[col] || []).push(ele) : null))
    )

    this.styleObject['min-width'] = 100 / this.colNum + '%'
  },
  methods: {
    onScroll() {
      window.onscroll = () => {
        let bottomOfWindow =
          Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop) + window.innerHeight >=
          this.$el.querySelector(".column").scrollHeight*0.9
        if (bottomOfWindow) {
          this.apiGetMoreUser() // replace it with your code
        }
      }
    },
    async apiGetUser() {
      const res = await getUser()
      const { success, data } = res
      if (success) {
        this.users = data
        console.log('success')
      }
    },
    async getInsUser (keyword) {
      const res = await getInsUser(keyword)
      if (res) {
        this.insData=res.graphql.hashtag.edge_hashtag_to_media.edges
      }
    }
    ,
    async apiGetMoreUser() {
      const res = await getInsUser (this.keyword)
      const { success, data } = res
      if (success) {
            this.colArray = [...Array(this.colNum).keys()]
        const startpoint = this.users.length % this.colNum
        this.colArray.forEach((col) =>
          data.forEach((ele, index) => ((index + startpoint) % this.colNum === col ? (this.grid[col] = this.grid[col] || []).push(ele) : null))
        )
      }
      this.users = this.users.concat(data)

      console.log('success')
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  margin-top: 4.5vh;


}

.aboutme {
  display: flex;
  flex-direction: row;
  // margin-top: 4.5vh;
  padding: 0 8vh;

  &__container {
    align-items: center;
    display: flex;
    flex: 1;
    flex-direction: column;
    height: 100%;
    justify-content: center;

    &__title {
      color: #000;
      font-family: 'Canela';
      font-size: 1rem;
      text-align: center;
    }
  }
}

.column {
  display: flex;
  flex-direction: column;

}

.card {
  background: transparent;
  border: 0;
  flex-shrink: 1;
  margin: 10px;
}

.img-container {
  flex-grow: 0;
}

.avatar {
  // border-radius: 1rem;
  width: 100%;
}

.img-container:hover .avatar {
  opacity: 0.75;
}

.mask {
  opacity: 0;
  position: absolute;
  right: 0%;
  top: 3vh;
  transform: translate(-50%, -50%);
  transition: 0.5s ease;
}

.btn-save {
  background: #e60022;
  border-radius: 1rem;
  color: #fff;
  padding: 0.25rem 1rem;
  text-align: center;
}

.img-container:hover .mask {
  opacity: 0.8;
}

.img-container:hover .mask:hover {
  opacity: 1;
}

.text {
  padding: 1rem;
}
</style>
