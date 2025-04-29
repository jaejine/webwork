// import my from './mymodule.js' // my = {myfunc, myinfunc} => my.oooo 로 접근
// import {myfunc} from './mymodule.js'
import * as my from './mymodule.js'

my.myfunc('모듈 테스트!!');

// my('디폴트 함수');