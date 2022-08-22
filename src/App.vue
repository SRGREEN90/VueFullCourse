<template>
        <div class="app">

       <h1>Page with posts</h1>

          <my-button @click="showDialog" style="margin: 15px 0">
            Create a user
          </my-button>

          <my-dialog v-model:show="dialogVisible">
            <post-form
                @create="createPost"
            />
          </my-dialog>

         <post-list
             :posts="posts"
             @remove="removePost"
             v-if="!isPostsLoading"
         />
          <div v-else style="padding-left: 200px; color: red">LOADING...</div>
        </div>
</template>

<script>
import PostForm from "@/components/PostForm";
import PostList from "@/components/PostList";
import MyDialog from "@/components/UI/MyDialog";
import MyButton from "@/components/UI/MyButton";
import axios from "axios";

//по дефолту всегда экспортируем объект
export default {
  components: {
    MyButton,
    MyDialog,
    PostForm, PostList
  },
    data() {
         return {
      posts: [],
           dialogVisible: false,
          isPostsLoading: false
    }
  },
  methods: {
    createPost(post) {
        this.posts.push(post);
        this.dialogVisible = false
    },
    removePost(post) {
      this.posts = this.posts.filter(p => p.id !== post.id)
    },
    showDialog() {
       this.dialogVisible = true
    },
   async fetchPosts() {
        try {
          this.isPostsLoading = true
          setTimeout(async  () => {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10')
            this.posts = response.data
            this.isPostsLoading = false
          },1000)

        } catch (e) {
            alert('Error!!!')
        } finally {

        }
    }
  },
   mounted(){
     this.fetchPosts()
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