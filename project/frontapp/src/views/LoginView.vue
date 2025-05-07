<template>
  email <input v-model="email">
  pw <input v-model="pw">
  <button type="button" @click="loginHanlder">로그인</button> <!--click.prevent 이면 타입=버튼 X 안써도됨-->
</template>
  <script>
import axios from 'axios';
  export default {
    data() {
      return {
        email : "",
        pw : "",
      };
    },
    methods : {
      async loginHanlder(){
        const url = "/api/users/login";
        const data ={email : this.email , pw : this.pw};
        const result = await axios.post(url,data);
        // await axios.post("/api/users/login", data)
        // 로그인 끝나면 메인 페이지 이동
        alert(result.data.code)
        // this.$store.commit('changeEmail', {email: this.email})
        // 이메일도 저장하도록 추가
        this.$store.dispatch('login',{email:this.email});
        this.$router.push({ path: "/" });
      }
    }
  }
  </script>
<style>
  
</style>