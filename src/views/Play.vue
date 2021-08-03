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
      watchData(youData.value, "Lost");
    });

    watch(enemyData.value, (oldValue, newValue) => {
      console.log(oldValue.health);
      console.log(newValue.health);
      watchData(enemyData.value, "Win");
    });

    const watchData = (data, winner) => {
      if (data.health <= 0) {
        gameResult.value.winner = `You ${winner}`;
        gameResult.value.isEnd = true;
      } else if (data.health > 100) {
        data.health = 100;
      }
      if (data.mana <= 0) {
        data.mana = 0;
      }
    };

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

