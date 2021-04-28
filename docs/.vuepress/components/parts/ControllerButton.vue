<template>
    <button class="controller-button">
      <slot>button</slot>
    </button>
</template>

<script>
export default {
  name: "controller-button",
  data: function(){
    return {}
  }
}
</script>

<style lang="stylus" scoped>
.controller-button {
  color: $accentColor;
  background-color: #fff;
  border: solid 2px $accentColor;
  border-radius: 5px;
  padding: .5rem 3rem;

  &:hover {
    color: #fff;
    background-color: $accentColor;
    transition: all 250ms ease-in-out;
  }
}
</style>