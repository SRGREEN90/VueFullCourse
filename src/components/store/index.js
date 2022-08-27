import {createStore} from "vuex"

export default createStore({
      state: {
         likes: 3,
            isAuth: false
      },
      getters: {
          doubleLikes(state) {
                return state.likes * 2
          }
      },
      mutations: {
            incrementLikes(state) {
                  return state.likes += 2
            },
            decrementLikes(state) {
                  return state.likes -= 2
            }
      },
      actions: {

      },
      modules: {

      }
})