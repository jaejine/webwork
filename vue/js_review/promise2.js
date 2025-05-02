// function wakeUp() {
//   return new Promise((resolve, reject)=>{
//   setTimeout(() => {
//       console.log("1. 일어났어요! ⏰");
//       resolve();
//     }, 1000);
//   })
// }

// function washFace() {
//   return new Promise((resolve, reject)=>{
//     setTimeout(() => {
//       console.log("2. 세수했어요! 💦");
//       resolve();
//     }, 1000);
//   })
// }

// function eatBreakfast() {
//   return new Promise((resolve, reject)=>{
//     setTimeout(() => {
//       console.log("3. 아침 먹었어요! 🍞");
//       resolve();
//     }, 1000);
//   })
// }

// wakeUp()
// .then(washFace)
// .then(eatBreakfast)
// .then(()=>console.log("출근 준비완료"))

// -------------------------------- 2번 방법

function wakeUp() {
  return new Promise((resolve, reject)=>{
  setTimeout(() => {
      console.log("1. 일어났어요! ⏰");
      resolve();
    }, 1000);
  })
}

function washFace() {
  return new Promise((resolve, reject)=>{
    setTimeout(() => {
      console.log("2. 세수했어요! 💦");
      resolve();
    }, 1000);
  })
}

function eatBreakfast() {
  return new Promise((resolve, reject)=>{
    setTimeout(() => {
      console.log("3. 아침 먹었어요! 🍞");
      resolve();
    }, 1000);
  })
}

// async function morningRoutin(){
//   await wakeUp()
//   await washFace()
//   await eatBreakfast()
//   console.log("출근 준비완료")
// }

// morningRoutin();

// 방법 2 (이방법 더 선호함.)
const morningRoutin = async ()=>{
  await wakeUp()
  await washFace()
  await eatBreakfast()
  console.log("출근 준비완료")
}

morningRoutin();