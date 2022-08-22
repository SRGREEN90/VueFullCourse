<template>
  <div class="post" >
   <div>
     <div><strong>Title: </strong>{{post.title}}}</div>
     <div><strong>Description: </strong>{{post.body}}}</div>
   </div>

    <div class="post__btns">
        <my-button>Delete</my-button>
    </div>
  </div>
</template>

<script>

export default {
  props: {
  post:{
    type: Object,
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
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>