import { createMemoryHistory, createRouter } from 'vue-router'

// import HelloWorld from '../component/HelloWorld.vue'
import GoodsView from '../components/goods.vue';
import MemberForm from '../views/MemberForm.vue'
import TodoForm from '@/views/TodoForm.vue'
import MovieForm from '@/views/MovieForm.vue'
import EmpForm from '@/views/EmpList.vue'
import ParamView from '@/views/ParamView.vue';

const routes = [
  { path: '/', component: GoodsView },
  { path: '/memberForm', component: MemberForm },
  { path: '/movieForm', component: MovieForm },
  { path: '/empForm', component: EmpForm},
  { path: '/todoForm', component: TodoForm },
  { path: '/paramView/:username', component: ParamView }
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router;