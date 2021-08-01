<template>
  <div class="actions">
    <ActionButton
      @click.prevent="test(index)"
      v-for="(action, index) in actions"
      :key="action"
      :icon="action"
    />
  </div>
</template>

<script>
import { ref } from "vue";
import { attackIcon, magicIcon, healthIcon, surIcon } from "../../assets";
import ActionButton from "../Actions/ActionButton.vue";

export default {
  props: ["youData", "enemyData"],
  components: { ActionButton },

  setup({ youData, enemyData }) {
    const actions = ref([attackIcon, magicIcon, healthIcon, surIcon]);

    return { actions };
  },
};
</script>
