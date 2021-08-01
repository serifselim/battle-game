<template>
  <div class="sides">
    <Side
      v-for="character in characters"
      :key="character"
      :character="character"
    />
  </div>
</template>

<script>
import { ref } from "vue";
import Side from "../Sides/Side.vue";
export default {
  props: ["youData", "enemyData"],
  components: { Side },

  setup({ youData, enemyData }) {
    const characters = ref([youData, enemyData]);
    return { characters };
  },
};
</script>
