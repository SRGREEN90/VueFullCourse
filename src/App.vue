<template>
        <div class="app">

       <h1>Page with posts</h1>
       <my-input
       v-model="searchQuery"
       placeholder="Searching..."
       />
       <div class="app_btns">
         <my-button @click="showDialog" >
           Create a user
         </my-button>
         <my-select
           v-model="selectedSort"
           :options="sortOptions"
         />
       </div>


          <my-dialog v-model:show="dialogVisible">
            <post-form
                @create="createPost"
            />
          </my-dialog>

         <post-list
             :posts="sortedAndSearchedPosts"
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
import MySelect from "@/components/UI/MySelect";
import MyInput from "@/components/UI/MyInput";

//по дефолту всегда экспортируем объект
export default {
  components: {
    MyInput,
    MySelect,
    MyButton,
    MyDialog,
    PostForm,
    PostList
  },
    data() {
         return {
           posts: [],
           dialogVisible: false,
           isPostsLoading: false,
           selectedSort: '',
           searchQuery: '',
           page: 1,
           limit: 10,
           totalPage: 0,
           sortOptions: [
             {value: 'title', name: 'By Name'},
             {value: 'body', name: 'By description'},
             {value: 'id', name: 'By id'}
           ]
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
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
              params: {
                _page: this.page,
                limit: this.limit
              }
            });
            this.totalPage = Math.ceil(response.headers['x-total-count'] / this.limit)
            this.posts = response.data
            this.isPostsLoading = false
          },1000)

        } catch (e) {
            alert('Error!!!')
        } finally {

        }
    }
  },
   mounted() {
     this.fetchPosts()
  },
  computed: {
    sortedPosts() {
      return [...this.posts].sort((post1, post2) => post1[this.selectedSort]?.localeCompare(post2[this.selectedSort]))
    },
    sortedAndSearchedPosts() {
      return  this.sortedPosts.filter(post => post.title.toLowerCase().includes(this.searchQuery.toLowerCase()))
    }
  }
}
</script>

<style scoped>
 * {
   margin: 0;
   padding: 0;
   box-sizing: border-box;
 }
 .app{
   padding: 20px;
 }

 .app_btns{
   display: flex;
   justify-content: space-between;
   margin: 15px 0
 }

</style>