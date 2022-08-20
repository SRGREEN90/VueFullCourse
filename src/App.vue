<template>
  <div>
    <div>
      Likes count {{likes}}
    </div>
  </div>
</template>

<script>
//по дефолту всегда экспортируем объект

export default {
  data() {
    return {
      likes: 0
    }
  }
}
</script>

<style>

</style>