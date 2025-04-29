<template>
  <h3>부모메세지</h3> <br>
  <ChildComponent ref="child_component"></ChildComponent>
</template>
<script>
import ChildComponent from "@/Components/ChildComponent.vue"
export default{
  components : {ChildComponent},
  mounted(){
    this.$refs.child_component.$refs.btn.click();
    this.$refs.child_component.childFunc();
    this.$refs.child_component.msg = '부모가 보내는 메시지';
  }
}
</script>