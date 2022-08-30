import {computed, ref} from 'vue'

export default function useSortedPosts(posts){
   const selectedSort = ref('')
  const sortedPosts = computed(()=>{
     return [...posts].sort((post1, post2) => post1[selectedSort]?.localeCompare(post2[selectedSort]))
  })
}