<template>
<div class=app>
     <navbar />

    <router-view/>
</div>
</template>

<script>
import Navbar from './components/Navbar'

export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>

<style lang="scss" >

html body {
  height: 100%;
}

.app {
  display: flex;
  flex: 1;
  flex-direction: column;
  height: 2160px;
}
</style>

