<!-- empview.vue-->
<template>
  <div>
  <div class="col"><emp-list @select="selectHandler" ref="listRef"/></div>
  <div class="col"><emp-form :selEmp="selectedEmp" @saved="saveHandler"/></div>
  </div>
</template>
<script>
import EmpList from "../components/EmpList.vue"
import EmpForm from "../components/EmpForm.vue"
import axios from "axios";
axios.defaults.baseURL = "http://localhost:3000/emp"; // API 서버 주소
export default {
  components : {EmpList, EmpForm},
  data(){
    return{     selectedEmp : { first_name : 'test'}  }
  },
  methods:{
    selectHandler(emp){
      this.selectedEmp = emp;
    }
  },
  saveHandler(){
    this.$refs.listRef.fetchList();
  }
}
</script>