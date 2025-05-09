<template>
<table>
  <tr v-for="(board, i) in boardList" :key="board.id" @click="goToDetail(board.id)">
    <!-- <td>{{img }}</td> -->
    <td>책제목 : {{ board.title }}</td>
    <td>내용 : {{ board.content }}</td>
    <td>작가 : {{ board.writer }}</td>
    <td>출판사 : {{ board.company }}</td>
    <td>등록날짜 : {{ board.add_date }}</td>
  </tr>
  <button type="button" @click="goToAddForm">글 등록</button>
</table>
</template>
<script setup>
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';

axios.defaults.baseURL = "/api/board";

const boardList = ref([]);
const router = useRouter();

const getBoardList = async () => {
  const result = await axios.get('');
  boardList.value = result.data;
};

const goToDetail = (id) => {
  router.push({ path: "/boardInfo", query: { id } });
};

const goToAddForm = (id) => {
  router.push({ path: "/boardaddform", query: { id } });
};

onMounted(() => {
  getBoardList();
});
</script>
