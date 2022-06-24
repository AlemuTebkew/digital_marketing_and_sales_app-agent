import { createStore } from 'vuex'
import auth from './auth/index';
import ApiClient from '../resources/baseUrl'

export default createStore({
  state: {
    roles:[]
  },
  getters: {
    roles(state){
      
      return state.roles
    }
  },
  mutations: {
    setRole(state,payload){
     console.log('pay===',payload)
      state.roles=payload
    }
  },
  actions: {
    async getAllRoles({commit}){

      try {
            const res=await ApiClient.get('api/roles');

            if (res.status === 200) {
               commit('setRole',res.data);
               console.log('allroles=='+res.data)
            }

      } catch (error) {
         console.log('jj')
      }finally{
         console.log('jj')

      }
    }
  },
  modules: {
    auth
  }
})
