<template>
  <div>
    <van-collapse 
      v-model="issue"
      class="list" 
      accordion 
    >
      <van-collapse-item 
        title="test"
        size="large"
        value="hihi"
        label="甚麼東西"
      >
        困難
      </van-collapse-item>
    </van-collapse>
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
import { Collapse, CollapseItem } from "vant";
import "vant/lib/collapse/style";
import "vant/lib/collapse-item/style";




const booth_number_1 = ["A","B","C"];


const booth_number_2 = ["1","2","3"];

export default {
  name: "App",
  components: {
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [Collapse.name]: Collapse,
    [CollapseItem.name]: CollapseItem
  },
  data(){
      return {
        booth_number_1 : booth_number_1,
        booth_number_2 : booth_number_2,
        issue: []
      };
  }
}
</script>

<style>

.list {
  height: 100%;
  width: 100%;
  margin:30% 5% 5% auto;
}

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
