/* spread.js */
// 얕은복사 스택영역은 다르지만 참조하는 힙영역 객체는 같아서 arr,arrcp 둘다바뀜.
let arr = [1,2,3];

// let arrcp = arr;
// arrcp[0] = 10;
//console.log(arr);
//console.log(arrcp);

// 깊은복사 참조하는 객체의 값은 바뀌지않음
function arryDeepCopy(){
let arrDeepCp = [... arr]
arrDeepCp[0] = 100
console.log(arr)
console.log(arrDeepCp)
}

arryDeepCopy();

// 객체 얕은복사
function objectShallowCopy(){
  let emp = { name:"홍길동", age:20 }
  let empCp = emp;
  empCp.age = 30;
  console.log(emp)
  console.log(empCp)
}

objectShallowCopy();

// 객체 깊은복사
function objectDeepCopy(){
  let emp = { name:"홍길동", age:20 }
  let empCp = { ... emp, name:"김유신"};
  empCp.age = 30;
  console.log(emp)
  console.log(empCp)
}

objectDeepCopy();

// 가변인수 var
function func(...arg){

}