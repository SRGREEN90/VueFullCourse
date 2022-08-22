<template>
        <div class="app">
         <post-form
             @create="createPost"
         />
         <post-list
             :posts="posts"
             @remove="removePost"
         />
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
    data() {
         return {
      posts: [
        {id: 1, title: 'JavaScript', body: 'JavaScript description'},
        {id: 2, title: 'TypeScript', body: 'TypeScript description'},
        {id: 3, title: 'ReactJS', body: 'ReactJS description'},
        {id: 1, title: 'VueJS', body: 'VueJS description'}
      ]
    }
  },
  methods: {
    createPost(post) {
        this.posts.push(post)
    },
    removePost(post) {
      this.posts = this.posts.filter(p => p.id !== post.id)
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