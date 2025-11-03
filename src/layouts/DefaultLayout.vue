<template>
  <div class="layout">
    <Sidebar class="sidebar" />
    <div class="main">
      <HeaderBar />
      <div class="content">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script setup>
import Sidebar from '../components/Sidebar.vue'
import HeaderBar from '../components/Header.vue'
</script>

<style scoped>
.layout {
  display: flex;
  height: 100vh;
  background-color: #f5f5f5;
}

.sidebar {
  width: 220px;
  background-color: #2d3e50;
  color: white;
  display: flex;
  flex-direction: column;
}

.main {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.content {
  flex: 1;
  padding: 20px;
  overflow-y: auto;
}
</style>
