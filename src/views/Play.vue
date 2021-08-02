<template>
  <div class="result bg-orange" v-if="gameResult.isEnd">
    <div class="result-box bg-gray">
      <h2 :class="gameResult.winner === 'You Win' ? 't-green' : 't-red'">
        {{ gameResult.winner }}
      </h2>
      <button
        :class="gameResult.winner === 'You Win' ? 'bg-green' : 'bg-red'"
        @click.prevent="reset"
      >
        Restart
      </button>
    </div>
  </div>
  <div class="container" v-else>
    <h4 class="turn-title t-green" v-if="youData.isYourTurn">Your Turn</h4>
    <h4 class="turn-title t-red" v-else>Enemy's Turn</h4>
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

    const gameResult = ref({
      winner: "",
      isEnd: false,
    });

    watch(youData.value, () => {
      if (youData.value.health <= 0) {
        gameResult.value.winner = "You Lost";
        gameResult.value.isEnd = true;
      } else if (youData.value.health > 100) {
        youData.value.health = 100;
      }

      if (youData.value.mana <= 0) {
        youData.value.mana = 0;
      }
    });

    watch(enemyData.value, () => {
      if (enemyData.value.health <= 0) {
        gameResult.value.winner = "You Win";
        gameResult.value.isEnd = true;
      } else if (enemyData.value.health > 100) {
        enemyData.value.health = 100;
      }
    });

    const reset = () => {
      youData.value.health = 100;
      youData.value.mana = 100;
      enemyData.value.health = 100;
      enemyData.value.mana = 100;
      gameResult.value.isEnd = false;
    };

    return { youData, enemyData, gameResult, reset };
  },
};
</script>

