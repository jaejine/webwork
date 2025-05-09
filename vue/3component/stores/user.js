import { defineStore } from 'pinia'

export const useUserStore = defineStore('counter', {
  //data(){return{}}
  state: () => ({ userid: 'Kim', grade: 'admin' }),
  getters: {
    
  },
  //methods:{}
  actions: {
    setUserid(userid){
      this.userid = userid
    }
  },
})