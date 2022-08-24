<template>
  <div class="navbar">
    <div>Vue3</div>
    <div class="navbar__btns">
      <my-button>Users</my-button>
      <my-button>About app</my-button>

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
}
</style>


<router-link to="/users">Users</router-link>
<router-link to="/about">About app</router-link>