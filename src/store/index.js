import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import dogs from '@/assets/dogs.json'

export default new Vuex.Store({
  state: {
    dogs: dogs
  },
  mutations: {
  },
  actions: {
  },
  getters: {
    //this is the method we call
    dog(state) {
      //this is the function we called
      return (chipNr) => {
        return state.dogs.filter(dog => dog.chipNumber === chipNr)[0]
      }
    },
    dogCount(state) {
      return state.dogs.length;
    }
  }
})
