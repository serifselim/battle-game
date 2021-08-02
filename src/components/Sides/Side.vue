<template>
  <div class="side">
    <h4
      class="name-title"
      :class="character.name === 'You' ? 't-green' : 't-red'"
    >
      {{ character.name }} {{ character.health }}
    </h4>
    <div class="side-bars">
      <div
        class="side-bar"
        :class="character.name === 'You' ? 'bg-green' : 'bg-red'"
      />
      <div class="side-bar bg-blue" />
    </div>
    <img :src="character.img" height="200" />
  </div>
</template>

<script>
export default {
  props: ["character"],
};
</script>