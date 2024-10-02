<template>
  <div class="navbar">
    <router-link :to="{name:'Home'}"  class="link" >
      Home
    </router-link>
    <router-link :to="{name:'AboutMe'}"  class="link" >
      About Me
    </router-link>
    <router-link :to="{name:'MyWork'}" class="link" >
      My Works
    </router-link>
    <router-link :to="{name:'Chat'}" class="link" >
      Chat
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
  margin: 0 1vh;
  width: 100%;
}

.link {
  background: none;
  border: 0;
  color: #000;
  cursor: pointer;
  font-size: 1rem;
  outline: none;
}
</style>
