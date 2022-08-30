import axios from "axios";
import {ref} from "vue";

export const usePosts() {
    const posts = ref([])
    const posts = ref([])
    const posts = ref([])
        try {
            this.isPostsLoading = true
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                params: {
                    _page: this.page,
                    limit: this.limit
                }
            });
            this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit)
            this.posts = response.data
        } catch (e) {
            alert('Error!!!')
        } finally {
            this.isPostsLoading = false
        }
}