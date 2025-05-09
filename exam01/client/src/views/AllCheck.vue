<template>
  <div class="container">
    <table>
      <tr>
        <td class="">No.</td>
        <td>제목</td>
        <td>작성자</td>
        <td>작성일자</td>
        <td>댓글 수</td>
      </tr>
      <tr v-for="board in boardList" :key="board.NO" @click="goDetail(board.NO)">
        <td><hr>{{ board.NO }}</td>
        <td><hr>{{ board.TITLE }}</td>
        <td><hr>{{ board.WRITER }}</td>
        <td><hr>{{ formatDate(board.CREATED_DT) }}</td>
        <!-- <td>{{ board. }}</td> -->
      </tr>
    </table>
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';

// axios.defaults.baseURL = ""

const boardList = ref([]);
const router = useRouter();

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('ko-KR');  // 'ko-KR'은 한국 날짜 포맷을 의미
}

const getBoardList = async () => {
  const result = await axios.get("/api/board");
  console.log(result.data);
  boardList.value = result.data;
}

const goDetail = (NO) => {
  router.push({ path: "/boardinfo", query: { NO } });
};

onMounted(() => {
  getBoardList();
});

</script>

<!-- v-for="d in " :key="all" -->