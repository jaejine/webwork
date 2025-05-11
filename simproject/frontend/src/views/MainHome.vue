<template>
    <div class="board-wrapper">
      <table class="board-table">
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>작성자</th>
            <th>작성일</th>
            <th>조회</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="board in boardList" :key="board.id">
            <td>{{ board.id }}</td>
            <td class="title"><router-link :to="`/board/${board.id}`">{{ board.title }}</router-link>
            </td>
            <td>{{ board.title }}</td>
            <td>{{ board.writer }}</td>
            <td>{{ formatDate(board.create_date) }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script setup>
  import { onMounted, ref } from 'vue';
  import { useRouter } from 'vue-router';
  import axios from 'axios';

  const boardList = ref([]);
  const router = useRouter();

  const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('ko-KR');  // 'ko-KR'은 한국 날짜 포맷을 의미
}

  const getBoardList = async ()=>{
    const result = await axios.get('');
    boardList.value = result.data;
  }

  onMounted(() => {
  getBoardList();
});
  </script>
  
<style scoped>
.board-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;
  text-align: left;
}

.board-table thead {
  background-color: #f5f5f5;
  font-weight: 500; /* 살짝만 굵게 (기본 normal은 400, bold는 700) */
}

.board-table th,
.board-table td {
  padding: 12px 10px;
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
}

.board-table th:first-child,
.board-table td:first-child {
  border-left: none;
}
.board-table th:last-child,
.board-table td:last-child {
  border-right: none;
}

.board-table .title a {
  color: #333;
  text-decoration: none;
  font-weight: normal;
}

.board-table .title a:hover {
  text-decoration: underline;
}

</style>
  