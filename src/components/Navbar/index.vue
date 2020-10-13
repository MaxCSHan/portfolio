<template>
  <div class="navbar">
    <router-link :to="{name:'Home'}">
      <div class="link" >Home</div>
    </router-link>
    <router-link :to="{name:'AboutMe'}">
    <div  class="link" >About Me</div>
    </router-link>
    <router-link :to="{name:'MyWork'}">
      <div class="link" >Works</div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.navbar {
  display: flex;
  flex-direction: row;
  font-family: 'Canela';
  justify-content: space-evenly;
  width: 100%;
}

.link {
  color: #000;
  font-size: 1rem;
  text-decoration: none;


}
</style>
