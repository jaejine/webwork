<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-bottom">© KYOBO BOOK CENTRE</div>
    </div>
  </footer>
</template>


<script setup>
// 별도 스크립트 없음
</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  padding: 0 20px;
}

.footer {
  margin-top: 40px;
  background-color: #f8f8f8;
  padding: 30px 20px;
  font-size: 14px;
  color: #333;
}
.footer-top {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
}
.footer-logo {
  font-weight: bold;
  font-size: 24px;
  color: #001f4e;
}
.highlight {
  color: #6dbf00;
}
.footer-links {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
.footer-links router-link {
  color: #333;
  text-decoration: none;
}
.footer-info {
  margin-bottom: 20px;
  line-height: 1.6;
}
.footer-info a, .footer-info button {
  margin-left: 5px;
  color: #333;
  background: none;
  border: none;
  cursor: pointer;
  text-decoration: underline;
}
.footer-cert {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 10px;
}
.footer-bottom {
  text-align: center;
  font-size: 13px;
  color: #888;
}
</style>
