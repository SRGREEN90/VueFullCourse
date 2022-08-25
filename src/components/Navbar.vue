<template>
  <div class="navbar">
    <div @click="$router.push('/')">Vue3</div>
    <div class="navbar__btns">
      <my-button
          style="background-color: white"
          @click="$router.push('/posts')"
      >Posts</my-button>
      <my-button
          style="background-color: white;
          margin-left: 20px"
          @click="$router.push('/about')"
      >About app</my-button>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.navbar{
  height: 50px;
  background-color: teal;
  box-shadow: 2px 2px 4px gray;
  display: flex;
  align-items: center;
}
.navbar__btns{
  margin-left: auto;
}
</style>


<router-link to="/users">Users</router-link>
<router-link to="/about">About app</router-link>