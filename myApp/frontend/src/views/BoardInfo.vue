<template>
  <div class="container">
    <div class="row">
      <table class="table table-bordered">
        <thead>
          <tr>
            <td rowspan="2" style="width: 180px; text-align: center; vertical-align: middle;">
              <img :src="`/img/book1.jpg`" alt="책 이미지" style="max-width: 150px; height: auto;" />
            </td>
            <th class="text-center table-primary" style="width: 120px;">제목</th>
            <td class="text-center">{{ boardInfo.title }}</td>
            <th class="text-center table-primary" style="width: 120px;">출판사</th>
            <td class="text-center">{{ boardInfo.company }}</td>
            <th class="text-center table-primary" style="width: 120px;">작가</th>
            <td class="text-center">{{ boardInfo.writer }}</td>
          </tr>
          <tr>
            <th class="text-center table-primary" style="width: 120px;">등록일</th>
            <td class="text-center" colspan="5">{{ boardInfo.add_date }}</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colspan="7" class="text-left" valign="top" style="white-space: pre-wrap; border: none; background-color: white;">
              <pre>{{ boardInfo.content }}</pre>
            </td>
          </tr>
          <tr>
            <td colspan="7" class="text-center">
              <button class="btn btn-xs btn-info" @click="goToUpdataForm(boardInfo.id)">
                수정
              </button>
              <button class="btn btn-xs btn-warning" @click="goToListForm()">
                목록
              </button>
              <button class="btn btn-xs btn-danger" @click="">
                삭제
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- 댓글 -->
    <!-- <CommentComp :bid="boardInfo.id"/> -->
    <div class="row"></div>
  </div>
</template>
<script>
import axios from 'axios';
import BoardList from './BoardList.vue';
// import CommentComp from './CommentComp.vue';
export default{
  // components:{CommentComp},
  data(){
    return{
      searchNo: "",
      boardInfo : {}
    }
  },
  created(){
    this.searchNo = this.$route.query.id;
    this.getBoardInfo();
  },
  mounted(){
    this.searchNo;
  },
  methods:{
    async getBoardInfo(){
      let board = await axios.get(`/api/board/${this.searchNo}`);
      this.boardInfo = board.data[0];
    },
  goToUpdataForm(id){
      // param : boardInfo/1 (라우터 /:id)    or    query : ?id=1
      this.$router.push({ path: "/boardForm", query: {id : id}})
    },
  goToListForm(){
      this.$router.push({ path: "/board" })
    }
  }
}
</script>