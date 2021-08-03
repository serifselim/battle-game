<template>
  <div class="side">
    <h4
      class="name-title"
      :class="character.name === 'You' ? 't-green' : 't-red'"
    >
      {{ character.name }}
    </h4>
    <div class="side-bars">
      <div
        class="side-bar"
        :class="character.name === 'You' ? 'bg-green' : 'bg-red'"
        :style="'width :' + character.health + '%;'"
      >
        <span>%{{ character.health }}</span>
      </div>
      <div class="side-bar bg-blue" :style="'width :' + character.mana + '%;'">
        <span>%{{ character.mana }}</span>
      </div>
    </div>
    <img :src="character.img" height="200" />
  </div>
</template>

<script>
export default {
  props: ["character"],
};
</script>