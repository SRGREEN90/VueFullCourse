<template>
  <div>
    <div class="post">
     <div><strong>Title:</strong></div>
     <div><strong>Description:</strong></div>
    </div>
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