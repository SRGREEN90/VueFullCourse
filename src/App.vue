<template>
        <div class="app">
       <h1>Page with posts</h1>
          <my-dialog v-model:show="dialogVisible">
            <post-form
                @create="createPost"
            />
          </my-dialog>

         <post-list
             :posts="posts"
             @remove="removePost"
         />
        </div>
</template>

<script>
import PostForm from "@/components/PostForm";
import PostList from "@/components/PostList";
import MyDialog from "@/components/UI/MyDialog";

//по дефолту всегда экспортируем объект
export default {
  components: {
    MyDialog,
    PostForm, PostList
  },
    data() {
         return {
      posts: [
        {id: 1, title: 'JavaScript', body: 'JavaScript description'},
        {id: 2, title: 'TypeScript', body: 'TypeScript description'},
        {id: 3, title: 'ReactJS', body: 'ReactJS description'},
        {id: 1, title: 'VueJS', body: 'VueJS description'}
      ],
           dialogVisible: false
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