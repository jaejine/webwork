<template>
  <h3>부모메세지</h3> <br>
  <ChildComponent @send-message="sendMessage"></ChildComponent>
</template>
<script>
import ChildComponent from "@/Components/ChildComponent4.vue"
export default{ components : {ChildComponent},
  methods : {
    sendMessage(message){
      // console.log("자식 컴포넌트가 커스텀 이벤트 호출했음")
      console.log(message)
    }
  }
}
</script>