// 모듈캡슐화 하는이유 : 접근(노출) 범위 제어 
function myfunc(msg){
  console.log(msg);
}

// 외부에서 볼수없게끔
function myinfunc(msg){
  console.log(msg);
}

function defFunction(msg){
  console.log('default',msg);
}

// export default defFunction;
export {myfunc, myinfunc}; // 한거번에 익스포트