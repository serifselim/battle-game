<template>
  <div class="actions">
    <ActionButton
      @click.prevent="handleClick(index)"
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
import getActions from "../../scripts/getActions";

export default {
  props: ["youData", "enemyData"],
  components: { ActionButton },

  setup({ youData, enemyData }) {
    const actions = ref([attackIcon, magicIcon, healthIcon, surIcon]);
    const { attack, magic, health, sur } = getActions();

    const handleClick = (index) => {
      switch (index) {
        case 0:
          attack(youData, enemyData);
          break;
        case 1:
          magic();
          break;
        case 2:
          health();
          break;
        case 3:
          sur();
          break;
        default:
          break;
      }
    };

    return { actions, handleClick };
  },
};
</script>
