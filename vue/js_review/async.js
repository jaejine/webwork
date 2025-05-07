// // 비동기 : ajax
// // 결과넘어오면 콘솔로그로 뿌림
import axios from 'axios'

// function getBoard(){
// axios("/api/board/1")
//      .then( res => console.log("2", res.data.title) )
// }

// // 호출
// getBoard();
// console.log("1", "the end");

// --------------------------------------------------------------

// 동기 : async
// 함수 앞에 async 처리할 부분앞  await then절 지우고
function test(){
  async function getBoard(){
    let res = await axios("/api/board/1")
    console.log("2:", res.data.title)
  }
  console.log("1", "the end");
}

// 호출
test();