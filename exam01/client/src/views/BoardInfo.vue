<template>
  <div class="container">
    <div class="row">
      <table class="table table-bordered">
        <thead>
          <tr>
            <th class="text-center table-primary" style="width: 120px;">번호</th>
            <td class="text-center">{{ boardInfo.NO }}</td>
            <th class="text-center table-primary" style="width: 120px;">작성자</th>
            <td class="text-center">{{ boardInfo.WRITER }}</td>
            <th class="text-center table-primary" style="width: 120px;">작성일</th>
            <td class="text-center">{{ boardInfo.CREATED_DT }}</td>
          </tr>
          <tr>
            <th class="text-center table-primary" style="width: 120px;">제목</th>
            <td class="text-center" colspan="5">{{ boardInfo.TITLE }}</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colspan="7" class="text-left" valign="top" style="white-space: pre-wrap; border: none; background-color: white;">
              <pre>{{ boardInfo.CONTENT }}</pre>
            </td>
          </tr>
          <tr>
            <td colspan="7" class="text-center">
              <button class="btn btn-xs btn-info" @click="goToUpdataForm(boardInfo.id)">
                수정
              </button>
            </td>
          </tr>
        </tbody>
        <tr>
          <CommentComp :boarId="boardInfo.NO" />
        </tr>
      </table>
    </div>
    <!-- 댓글 -->
    <!-- <CommentComp :bid="boardInfo.id"/> -->
    <div class="row"></div>
  </div>
</template>
<script>
import CommentComp from '@/components/CommentComp.vue';
import { ref, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';  // useRouter, useRoute 훅을 사용합니다.
import axios from 'axios';

export default {
  setup() {
    const router = useRouter();  // useRouter로 라우터 접근
    const route = useRoute();    // useRoute로 현재 라우트 정보 접근

    const searchNo = ref("");  // ref를 사용하여 반응형 데이터 선언
    const boardInfo = ref({});  // 반응형 객체

    // 컴포넌트가 생성될 때 실행
    onMounted(() => {
      searchNo.value = route.query.NO;  // 쿼리 파라미터에서 NO 값을 가져옵니다.
      getBoardInfo();  // board 정보 가져오기
    });

    // 게시글 정보 가져오기
    const getBoardInfo = async () => {
      try {
        const response = await axios.get(`/api/board/${searchNo.value}`);
        boardInfo.value = response.data[0];  // 첫 번째 게시글 정보 설정
      } catch (error) {
        console.error("게시글 정보를 가져오는 데 실패했습니다.", error);
      }
    };

    // 수정 페이지로 이동
    const goToUpdataForm = (NO) => {
      router.push({ path: "/boardForm", query: { NO: NO } });
    };

    // 목록 페이지로 이동
    const goToListForm = () => {
      router.push({ path: "/board" });
    };

    // 반환값으로 템플릿에서 사용 가능한 변수를 제공합니다.
    return {
      searchNo,
      boardInfo,
      getBoardInfo,
      goToUpdataForm,
      goToListForm
    };
  }
};
</script>