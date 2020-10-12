<template>
  <div class="home">
    <div class="home__container">
      <div class="home__container__title">
        {{msg}}
      </div>
    </div>

  </div>
</template>
<script>

export default {
  name: 'Home',
  data: function () {
    return {
      msg: 'Max Chen'
    }
  }
}
</script>

<style lang="scss" scoped>
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

.home {
  height: 1080px;
  width: 100%;

  &__container {
    align-items: center;
    background-image: url('https://cdn.shopify.com/s/files/1/0023/6260/5680/collections/IMG_7163_3000x.jpg?v=1570711224');
    background-size: cover;
    display: flex;
    flex: 1;
    flex-direction: column;
    height: 1080px;
    justify-content: center;
    width: 100%;

    &__title {
      color: #fff;
      font-family: 'Canela';
      font-size: 30vh;
      text-align: center;
    }
    
  }

  
}


</style>
