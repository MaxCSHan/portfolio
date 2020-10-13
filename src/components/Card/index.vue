<template>
  <div class="card">
    <div class="card__container"></div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.card {
  display: flex;
  flex-direction: row;
  font-family: 'Canela';
  justify-content: space-evenly;
  width: 100%;
  
  &__container {
    background-image: linear-gradient(-180deg,
    #d94e47 2%,
    #df1165 100%);
    border: solid 0.3em #000;
    border-radius: 2em;
    height: 50vh;
    width: 40vh;
  }
}


</style>
