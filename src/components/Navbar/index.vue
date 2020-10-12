<template>
  <div class="navbar">
      <div>Home</div>
      <div>About Me</div>
      <div>Works</div>
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
  justify-content: space-evenly;
  width: 100%;
}
</style>
