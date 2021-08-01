<template>
  <Header />
  <div class="container">
    <Sides :youData="youData" :enemyData="enemyData" />
    <Actions :youData="youData" :enemyData="enemyData" />
  </div>
</template>

<script>
import { ref } from "vue";
import { Header, Actions, Sides } from "../components";
import { youImg, enemyImg } from "../assets";

export default {
  components: { Header, Actions, Sides },
  setup() {
    const youData = ref({
      name: "You",
      health: 100,
      mana: 100,
      img: youImg,
    });
    const enemyData = ref({
      name: "Enemy",
      health: 100,
      mana: 100,
      img: enemyImg,
    });

    return { youData, enemyData };
  },
};
</script>

