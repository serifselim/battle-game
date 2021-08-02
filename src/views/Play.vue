<template>
  <Header />
  <div class="container">
    <Sides :youData="youData" :enemyData="enemyData" />
    <Actions :youData="youData" :enemyData="enemyData" />
  </div>
</template>

<script>
import { ref, watch } from "vue";
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
      isYourTurn: true,
    });
    const enemyData = ref({
      name: "Enemy",
      health: 100,
      mana: 100,
      img: enemyImg,
    });

    watch(youData.value, () => {
      if (youData.value.health <= 0) {
        youData.value.health = 0;
      } else if (youData.value.health > 100) {
        youData.value.health = 100;
      }

      if (youData.value.mana <= 0) {
        youData.value.mana = 0;
      }
    });

    watch(enemyData.value, () => {
      if (enemyData.value.health <= 0) {
        enemyData.value.health = 0;
      } else if (enemyData.value.health > 100) {
        enemyData.value.health = 100;
      }
    });

    return { youData, enemyData };
  },
};
</script>

