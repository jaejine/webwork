<template>
  <div class="comment-section">
    <h3>댓글</h3>
    
    <!-- 댓글 작성 폼 -->
    <form @submit.prevent="submitComment">
      <div>
        <label for="comment">댓글:</label>
        <textarea v-model="newComment" id="comment" rows="3" required></textarea>
      </div>
      <button type="submit">댓글 작성</button>
    </form>

    <!-- 댓글 목록 -->
    <div v-if="comments.length > 0">
      <h4>댓글 목록</h4>
      <ul>
        <li v-for="(comment, index) in comments" :key="index">
          <strong>{{ comment.WRITER }}:</strong>
          <p>{{ comment.CONTENT }}</p>
        </li>
      </ul>
    </div>
    <div v-else>
      <p>댓글이 없습니다.</p>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import axios from 'axios';

export default {
  props: {
    boardId: {
      type: Number,
      required: true
    }
  },
  setup(props) {
    // 댓글 관련 변수 선언
    const newComment = ref(''); // 새로운 댓글 내용
    const comments = ref([]);   // 댓글 목록

    // 댓글 작성 메소드
    const submitComment = async () => {
      if (newComment.value.trim() === '') {
        alert('댓글 내용을 입력해주세요.');
        return;
      }

      const commentData = {
        WRITER: '현재 사용자', // 실제 사용자 정보를 여기에 처리
        CONTENT: newComment.value,
        BNO: props.boardId // 댓글을 게시물 ID와 연결
      };

      try {
        // 서버에 댓글 저장 요청 (실제 API URL로 수정 필요)
        await axios.post('/api/comments', commentData);
        
        // 댓글 목록에 새로운 댓글 추가
        comments.value.push(commentData);
        
        // 댓글 작성 후 입력 필드 초기화
        newComment.value = '';
      } catch (error) {
        console.error('댓글 작성 중 오류 발생:', error);
      }
    };

    // 댓글 목록 불러오기 (서버에서 데이터 가져오기)
    const getComments = async () => {
      try {
        const response = await axios.get(`/api/comments/${props.boardId}`);
        comments.value = response.data;
      } catch (error) {
        console.error('댓글 불러오기 실패:', error);
      }
    };

    // 컴포넌트 마운트 시 댓글 목록 불러오기
    onMounted(() => {
      getComments();
    });

    return {
      newComment,
      comments,
      submitComment
    };
  }
};
</script>

<style scoped>
.comment-section {
  margin-top: 20px;
}

.comment-section form {
  margin-bottom: 15px;
}

.comment-section textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  margin-bottom: 10px;
}

.comment-section button {
  padding: 5px 10px;
  background-color: #4CAF50;
  color: white;
  border: none;
  cursor: pointer;
}

.comment-section button:hover {
  background-color: #45a049;
}

.comment-section ul {
  list-style-type: none;
  padding: 0;
}

.comment-section li {
  margin-bottom: 10px;
  padding: 10px;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
}

.comment-section li strong {
  font-weight: bold;
}

.comment-section li p {
  margin: 5px 0;
}
</style>
