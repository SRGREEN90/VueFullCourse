<template>
  <div>
    <h1>Post page with composition api</h1>
    <my-input
        v-model="searchQuery"
        placeholder="Searching..."
        v-focus
    />
    <div class="app__btns">
      <my-button>
        Create a user
      </my-button>
      <my-select
          v-model="selectedSort"
          :options="sortOptions"
      />
    </div>
    <my-dialog v-model:show="dialogVisible">
      <post-form
      />
    </my-dialog>

    <post-list
        :posts="sortedAndSearchedPosts"
        v-if="!isPostsLoading"
        @remove="removePost"
    />

    <div v-else style="padding-left: 200px; color: red">LOADING...</div>

  </div>
</template>

<script>
import PostForm from "@/components/PostForm";
import PostList from "@/components/PostList";
import MyButton from "@/components/UI/MyButton";
import MySelect from "@/components/UI/MySelect";
import MyInput from "@/components/UI/MyInput";
import {usePosts} from "@/hooks/usePosts";
import useSortedPosts from "@/hooks/useSortedPosts";
import useSortedAndSearchedPosts from "@/hooks/useSortedAndSearchedPosts";

//по дефолту всегда экспортируем объект
export default {
  components: {
    MyInput,
    MySelect,
    MyButton,
    PostForm,
    PostList
  },
  data() {
    return {
      dialogVisible: false,
      sortOptions: [
        {value: 'title', name: 'By Name'},
        {value: 'body', name: 'By description'},
      ]
    }
  },
  methods: {
    removePost(post) {
      this.posts = this.posts.filter(p => p.id !== post.id)
    }
  },

  setup(props){
    const {posts, totalPages, isPostsLoading} = usePosts(10)
    const {sortedPosts, selectedSort} = useSortedPosts(posts)
    const {searchQuery, sortedAndSearchedPosts} = useSortedAndSearchedPosts(sortedPosts)

    return{
      posts,
      totalPages,
      isPostsLoading,
      sortedPosts,
      selectedSort,
      searchQuery,
      sortedAndSearchedPosts
    }
  }
}
</script>

<style scoped>

.app__btns{
  display: flex;
  justify-content: space-between;
  margin: 15px 0
}
.page__wrapper{
  display: flex;
  margin-top: 15px;
}
.page {
  border: 1px solid #19443a;
  padding: 10px;
}
.current-page{
  border: 2px solid red
}
.observer{
  height: 30px;
  background: green;
}
</style>