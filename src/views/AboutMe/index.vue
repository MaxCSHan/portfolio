<template>
  <div class="aboutme">
      
    <div class="aboutme__container">
        <div class="aboutme__container__title">
        {{msg}}
      </div>
        <card/>
      
    </div>

  </div>
</template>
<script>
import Card from '../../components/Card'

export default {
  name: 'AboutMe',
  components:{Card},
  data: function () {
    return {
      msg: 'Swipe me'
    }
  }
}
</script>

<style lang="scss" scoped>


.aboutme {
  height: 100%;

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

  


</style>
