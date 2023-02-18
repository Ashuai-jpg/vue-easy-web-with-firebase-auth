import { createStore } from 'vuex'
import router from '../router'
import axios from 'axios'
import { auth } from '../firebase'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from 'firebase/auth'

export default createStore({
  state: {
    user: auth.currentUser,
    num:1,
    users: []

  },
  mutations: {

    SET_USER(state, user) {
      state.user = user
    },

    CLEAR_USER(state) {
      state.user = null
    },

    SEARCH_USER(state, rawusers) {
      state.users = rawusers
    }

  },
  actions: {
    async login({ commit }, details) {
      const { email, password } = details

      try {
        await signInWithEmailAndPassword(auth, email, password)
        localStorage.setItem('user', JSON.stringify(auth.currentUser.uid), 'userName', JSON.stringify(email))

      } catch (error) {
        console.log(error);
        switch (error.code) {
          case 'auth/user-not-found':
            alert("User not found")
            break
          case 'auth/wrong-password':
            alert("Wrong password")
            break
          default:
            alert("Something went wrong")
        }
        return
      }

      commit('SET_USER', auth.currentUser)
      setTimeout(() => {
        router.push('/index')
      }, 1000)
    },

    async register({ commit }, details) {
      const { email, password } = details

      try {
        await createUserWithEmailAndPassword(auth, email, password)
      } catch (error) {
        console.log(error)
        switch (error.code) {
          case 'auth/email-already-in-use':
            alert("Email already in use")
            break
          case 'auth/invalid-email':
            alert("Invalid email")
            break
          case 'auth/operation-not-allowed':
            alert("Operation not allowed")
            break
          case 'auth/weak-password':
            alert("Weak password")
            break
          case 'auth/admin-restricted-operation':
            alert("admin restricted operation")
            break
          default:
            alert("Something went wrong")
        }

        return
      }

      commit('SET_USER', auth.currentUser)

      router.push('/auth')
    },

    async logout({ commit }) {
      await signOut(auth)

      commit('CLEAR_USER')
      localStorage.removeItem('user')

      setTimeout(() => {
        router.push('/auth')
      }, 1000)
    },

    // fetchUser ({ commit }) {
    //   auth.onAuthStateChanged(async user => {
    //     if (user === null) {
    //       commit('CLEAR_USER')
    //     } else {
    //       commit('SET_USER', user)

    //       if (router.isReady() && router.currentRoute.value.path === '/auth') {
    //         router.push('/home')
    //       }
    //     }
    //   })
    // },
    
   async searchUsers({ commit }, paload) {
    let rawusers ={}
    await  axios.get(`https://api.github.com/search/users?q=${paload.value}`).then(
        response => {
          console.log('Request success', response.data.items)
         let rawusers = response.data.items
         commit('SEARCH_USER', rawusers)
         
        },
        error => {
          console.log('Bad request', response.data)
        }
      )
        
      

    }

  }
})