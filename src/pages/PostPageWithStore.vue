<template>
  <div>
    <h1>Post page with store</h1>
    <my-input
        :model-value="searchQuery"
        @update:model-value="setSearchQuery"
        placeholder="Searching....."
        v-focus
    />
    <div class="app__btns">
      <my-button
          @click="showDialog"
      >
        Create a user
      </my-button>

      <my-select
          :model-value="selectedSort"
          @update:model-value="setSelectedSort"
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
    <div v-else style="padding-left: 200px; color: red">LOADING....</div>
    <div v-intersection="loadMorePosts" class="observer"></div>
              <div class="page__wrapper">
                <div
                    v-for="pageNumber in totalPages"
                    :key="pageNumber"
                    class="page"
                    :class="{'current-page': page === pageNumber}"
                    @click="changePage(pageNumber)"
                >
                  {{pageNumber}}</div>
              </div>
  </div>
</template>

<script>
import PostForm from "@/components/PostForm";
import PostList from "@/components/PostList";
import MyButton from "@/components/UI/MyButton";
import MySelect from "@/components/UI/MySelect";
import MyInput from "@/components/UI/MyInput";
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'

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
      dialogVisible: false
    }
  },
  methods: {
    ...mapMutations({
      setPage: 'post/setPage',
      setSearchQuery: 'post/setSearchQuery',
      setSelectedSort: 'post/setSelectedSort'
    }),
    ...mapActions({
         loadMorePosts: 'post/loadMorePosts',
         fetchPosts: 'post/fetchPosts'
    }),
    createPost(post) {
      this.posts.push(post);
      this.dialogVisible = false
    },
    removePost(post) {
      this.posts = this.posts.filter(p => p.id !== post.id)
    },
    showDialog() {
      this.dialogVisible = true
    }
  },
  mounted() {
    this.fetchPosts()
  },
  computed: {
     ...mapState({
       posts: state => state.post.posts,
       isPostsLoading: state => state.post.isPostsLoading,
       selectedSort: state => state.post.selectedSort,
       searchQuery: state => state.post.searchQuery,
       page: state => state.post.page,
       limit: state => state.post.limit,
       totalPages: state => state.post.totalPages,
       sortOptions: state => state.post.sortOptions,
     }),
    ...mapGetters({
      sortedPosts: 'post/sortedPosts',
      sortedAndSearchedPosts: 'post/sortedAndSearchedPosts'
    })
  },
  watch:{
    // page(){
    //   this.fetchPosts()
    // }
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