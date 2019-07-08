import Vue from 'vue'
import Vuex from 'vuex'
import toyService from './services/ToyService'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    toys: [],
    pagesCount:'',
    isLoading: false,
    filterBy: {
      text: '',
      status: '',
      page: 1
    }
  },
  mutations: {
    setToys(state, { toys }) {
      state.toys = toys.items;
      state.pagesCount = toys.querySize;
    },
    isLoading(state, { isLoading }) {
      state.isLoading = isLoading;
    },
    deleteToy(state, { toyId }) {
      const idx = state.toys.findIndex(toy => toy._id === toyId);
      state.toys.splice(idx, 1);
    },
    setPage(state, page) {
      state.filterBy.page = page;
    },
    saveToy(state, { toy }) {
      const idx = state.toys.findIndex(currToy => currToy._id === toy._id);
      if (idx !== -1) {
        state.toys.splice(idx, 1, toy);

      } else {
        state.toys.unshift(toy);
      }
    },
  },
  actions: {
    loadToys(context) {
      context.commit({ type: 'isLoading', isLoading: true })
      return toyService.query(this.state.filterBy)
        .then(toys => {
          context.commit({ type: 'isLoading', isLoading: false })
          context.commit({ type: 'setToys', toys })
          return toys;
        })
    },
    deleteToy(context, payload) {
      console.log('Payload is: ', payload)
      toyService.remove(payload.toyId)
        .then(() => {
          context.commit(payload)
        })
    },
    saveToy(context, { toy }) {
      return toyService.save(toy)
        .then(savedToy => {
          context.commit({ type: 'saveToy', toy: savedToy })
          return savedToy;
        })
    },
  },
  getters: {
    toysToShow(state) {
      return state.toys.filter(toy =>
        (toy.name.toLowerCase().includes(state.filterBy.text) || state.filterBy.text === '') &&
        (toy.inStock === (state.filterBy.status === 'inStock') || state.filterBy.status === ''))
    },
    pagesCount(state){
      return +state.pagesCount;
    }
  }
})
