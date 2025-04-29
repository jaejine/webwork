<script>
import axios from 'axios';
export default{
  data(){
    return{emps:[]}
  },
  mounted(){
    axios.get("/empdata.json")
    .then((res)=>{this.emps=res.data});
  }
}
</script>
<template>
  iiiiii
  <table>
    <tr v-for="emp in emps">
      <td>{{ emp.employee_id }}</td>
      <td>{{ emp.first_name }}</td>
      <td>{{ emp.employee_id }}</td>
    </tr>
  </table>
</template>
<style>
  
</style>