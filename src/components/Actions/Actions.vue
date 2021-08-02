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
      if (youData.isYourTurn) {
        switch (index) {
          case 0:
            attack(youData, enemyData);
            break;
          case 1:
            if (youData.mana < 5) {
              alert("Mana Needed !");
            } else {
              magic(youData, enemyData);
            }
            break;
          case 2:
            if (youData.mana < 5) {
              alert("Mana Needed !");
              youData.isYourTurn = true;
            } else {
              health(youData, enemyData);
            }
            break;
          case 3:
            sur(youData, enemyData);
            break;
          default:
            break;
        }
      } else {
        console.log("saldıramazsın emmioğlu");
      }
    };

    return { actions, handleClick };
  },
};
</script>
