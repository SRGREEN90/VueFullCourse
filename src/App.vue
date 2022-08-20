<template>
        <div class="app">
         <post-form/>
         <post-list :posts="posts"/>
        </div>
</template>

<script>
import PostForm from "@/components/PostForm";
import PostList from "@/components/PostList";

//по дефолту всегда экспортируем объект
export default {
  components: {
    PostForm, PostList
  },
    data(){
         return {
      posts: [
        {id: 1, title: 'JavaScript', body: 'JavaScript description'},
        {id: 2, title: 'TypeScript', body: 'TypeScript description'},
        {id: 3, title: 'ReactJS', body: 'ReactJS description'},
        {id: 1, title: 'VueJS', body: 'VueJS description'}
      ],
      title: '',
      body: ''
    }
  },
  methods: {
    createPost() {
      const newPost = {
        id: Date.now(),
        title: this.title,
        body: this.body
      }
      this.posts.push(newPost);
      this.title = '';
      this.body = ''
    },
  }
}
</script>

<style scoped>
 * {
   margin: 0;
   padding: 0;
   box-sizing: border-box;
 }

 form{
   display: flex;
   flex-direction: column;
 }

</style>