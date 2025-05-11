<template>
  <div class="layout">
    <HeaderComponent />

    <main class="container">
      <router-view />
    </main>

    <FooterComponent />
  </div>
</template>

<script>
import HeaderComponent from '../layouts/HeaderComponent.vue';
import FooterComponent from '../layouts/FooterComponent.vue';

export default {
  components: {
    HeaderComponent,
    FooterComponent,
  },
};
</script>

<style>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}
</style>
