<template>
  <button class="btn">
     <slot></slot>
  </button>
</template>

<script>
export default {
    name: 'my-button'
}
</script>

<style scoped>
.btn{
  margin-top: 10px;
  align-self: flex-end;
  padding: 10px 15px;
  background: none;
  color: teal;
  border: 3px solid teal;
  border-radius: 12px;
}
</style>