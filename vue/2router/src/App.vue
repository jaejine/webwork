<script>
import GoodsView from './components/goods.vue';
import MemberForm from './views/MemberForm.vue';
import MovieForm from './views/MovieForm.vue';
import TodoForm from './views/TodoForm.vue';
import EmpForm from './views/EmpForm.vue';
import { RouterLink, RouterView } from 'vue-router'

export default{
    components:{GoodsView, MemberForm, MovieForm,TodoForm,EmpForm},
    data(){
      return{
        fruits:["사과","바나나","오렌지"],
        message:"greeting"
      }
    },
    method:{}
  }
</script>

<template>
  <div class="container">
  <h1>Hello App!</h1>
  <p>
    <strong>Current route path:</strong> {{ $route.fullPath }}
  </p>
 <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <RouterLink to="/" class="nav-link active" aria-current="page">Home</RouterLink>
          </li>
          <div class="card">
            <div class="card-body">
          <li class="nav-item">
            <RouterLink to="/memberForm" class="nav-link active" aria-current="page">회원가입</RouterLink>
          </li>
          </div>
          </div>
          <li class="nav-item">
            <RouterLink to="/movieForm" class="nav-link" aria-current="page">영화</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/empForm" class="nav-link" aria-current="page">사원</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/todoForm" class="nav-link" aria-current="page">할거</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/paramView/kim" class="nav-link" aria-current="page">파라미터</RouterLink>
            <RouterLink to="/paramView/park" class="nav-link" aria-current="page">파라미터</RouterLink>
          </li>
        </ul>
      </div>
   </div>
  </nav>
  <div class="card" style="width: 18rem;">
  <div class="card-body">
  <main>
    <RouterView />
  </main>
</div>
</div>
</div>
</template>