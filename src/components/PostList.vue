<template>
  <div class="post" v-for="post in posts">
    <div><strong>Title: </strong>{{post.title}}}</div>
    <div><strong>Description: </strong>{{post.body}}}</div>
  </div>
</template>

<script>
export default {
  props: {
      posts: {
         type: Array,
         required: true
      }
}
}
</script>

<style scoped>
.post {
  padding: 15px;
  border: 3px solid teal;
  border-radius: 12px;
  margin-top: 10px;
  background-color: #cff8ee;
}
</style>