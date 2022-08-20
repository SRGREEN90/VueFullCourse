<template>
  <div>
    <div>
      <button v-on:click="addLike">Like</button>
      <button @click="addDislike">Dislike</button>
    </div>
    <div>Likes count <strong>{{likes}}</strong></div>
    <div>Dislikes count <strong>{{dislikes}}</strong></div>
  </div>
</template>

<script>
//по дефолту всегда экспортируем объект

export default {
  data() {
    return {
      likes: 0,
      dislikes: 5
    }
  },
  methods: {
    addLike(){
      this.likes += 1
    },
    addDislike(){
      this.dislikes += 1
    },
  }
}
</script>

<style>

</style>