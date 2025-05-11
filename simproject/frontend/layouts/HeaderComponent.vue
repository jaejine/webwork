<template>
  <div class="header">
    <div class="container">
    <div class="header-left">
      <div class="menu-button">☰</div>
      <div class="logo">책 <span class="highlight">이야기</span></div>
      <div class="nav-links">
        <router-link to="/new-release">메인페이지</router-link>
        <router-link to="/quiz">게시판</router-link>
      </div>
    </div>
    <div class="header-center">
      <div class="search-bar">
        <input type="text" placeholder="검색" v-model="searchText">
        <button @click="onSearch">🔍</button>
      </div>
    </div>
    <div class="header-right">
      <div class="user-actions">
        <div class="icon" title="로그인">로그인</div>
      </div>
    </div>
  </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const searchText = ref('');
const onSearch = () => {
  alert(`검색어: ${searchText.value}`);
};
</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
}

body {
  margin: 0;
  font-family: 'Arial', sans-serif;
}

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 40px;
  border-bottom: 1px solid #ccc;
  flex-wrap: wrap;
  margin-bottom: 40px;
}

.header-left {
  display: flex;
  align-items: center;
  gap: 20px;
}

.logo {
  font-weight: bold;
  font-size: 24px;
  color: #001f4e;
}

.highlight {
  color: #6dbf00;
}

.menu-button {
  font-size: 20px;
  cursor: pointer;
}

.nav-links {
  display: flex;
  flex-direction: row;
  gap: 12px;
  flex-wrap: wrap;
}

.nav-links router-link {
  color: green;
  text-decoration: none;
  font-weight: bold;
  white-space: nowrap;
}

.nav-links router-link:hover {
  text-decoration: underline;
}

.header-center {
  flex: 1;
  display: flex;
  justify-content: center;
  padding: 0 20px;
  min-width: 300px;
}

.search-bar {
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 20px;
  padding: 5px 10px;
  width: 100%;
  max-width: 300px;
}

.search-bar input {
  border: none;
  outline: none;
  padding: 5px;
  flex: 1;
}

.search-bar button {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 16px;
}

.header-right {
  display: flex;
  align-items: center;
  gap: 15px;
}

.user-actions {
  display: flex;
  align-items: center;
  gap: 10px;
}
</style>