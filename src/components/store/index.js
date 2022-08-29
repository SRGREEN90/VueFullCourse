import {createStore} from "vuex"
import {postModule} from "@/components/store/postModule";

export default createStore({
    state: {
        isAuth: false
    },
      modules: {
         post: postModule
      }
})