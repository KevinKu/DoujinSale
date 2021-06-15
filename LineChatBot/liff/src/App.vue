<template>
  <div>
    <div class="footer">
      <van-swipe 
        class="booth-number"
        vertical
      >
        <van-swipe-item
          v-for="number1 in booth_number_1"
          :key="number1"
          class="swipe-item"
        >
        {{ number1 }}
        </van-swipe-item>
      </van-swipe>
      <van-swipe 
        class="booth-number"
        vertical
      >
        <van-swipe-item
          v-for="number2 in booth_number_2"
          :key="number2"
          class="swipe-item"
        >
        {{ number2 }}
        </van-swipe-item>
      </van-swipe>
    </div> 
  </div>
</template>

<script>
import { Swipe, SwipeItem } from "vant";




const booth_number_1 = ["A","B","C"];


const booth_number_2 = ["1","2","3"];

export default {
  name: 'App',
  components: {
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem
  },
  data(){
      return {
        booth_number_1 : booth_number_1,
        booth_number_2 : booth_number_2
      };
  }
}
</script>

<style>



.footer {
  height: 30%;
  width: 100%;
  position: fixed;
  bottom: 0%;
  z-index: 1;
  display: flex;
  justify-content: center; 
  padding-bottom: 5vh;
}

.booth-number {
  border: solid;
  width: 40%;
  display: block;
  text-align: center;
  font-size: 30vw;
  overflow: hidden;
}

</style>
