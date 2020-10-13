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
@import url('//db.onlinewebfonts.com/c/19560807c484bbbfcd37de7a0011a829?family=Canela');
@font-face {
  font-family: 'Canela';
  src: url('//db.onlinewebfonts.com/t/19560807c484bbbfcd37de7a0011a829.eot');
  src: url('//db.onlinewebfonts.com/t/19560807c484bbbfcd37de7a0011a829.eot?#iefix') format('embedded-opentype'),
    url('//db.onlinewebfonts.com/t/19560807c484bbbfcd37de7a0011a829.woff2') format('woff2'),
    url('//db.onlinewebfonts.com/t/19560807c484bbbfcd37de7a0011a829.woff') format('woff'),
    url('//db.onlinewebfonts.com/t/19560807c484bbbfcd37de7a0011a829.ttf') format('truetype'),
    url('//db.onlinewebfonts.com/t/19560807c484bbbfcd37de7a0011a829.svg#Canela') format('svg');
}

html {
  height: 100%;
}

body {
  height: 100%;
  margin: 0;
}

.app {
  display: flex;
  flex: 1;
  flex-direction: column;
  height: 100%;

}
</style>

