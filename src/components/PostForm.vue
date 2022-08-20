<template>
  <form @submit.prevent>
    <h4>Creating a post</h4>
    <input
        v-bind:value="title"
        @input="title = $event.target.value"
        class="input" type="text"
        placeholder="Enter title!"
    >
    <input
        v-bind:value="body"
        @input="body = $event.target.value"
        class="input" type="text"
        placeholder="Enter description!"
    >
    <button
        class="btn"

    >Create</button>

  </form>
</template>

<script>
export default {

}
</script>

<style scoped>
.input{
  width: 100%;
  border: 3px solid teal;
  padding: 10px 15px;
  margin-top: 10px;
  border-radius: 12px;
  background-color: #cff8ee;
}
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

