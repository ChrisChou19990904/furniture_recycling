<template>
  <div id="app" class="admin-layout">
    <Sidebar />
    <main class="content-area">
      <header class="header">
        <div class="title-container">
          <svg viewBox="0 0 24 24" class="icon">...</svg> <h1>垃圾回收通</h1>
        </div>
        <div class="admin-info">
          <span>Admin</span>
          <svg viewBox="0 0 24 24" class="user-icon">...</svg> </div>
      </header>
      <router-view />
    </main>
  </div>
</template>

<script setup>
// Vue 3 的 <script setup> 語法
// 導入的組件會被自動註冊，無需 components 屬性
import Sidebar from './components/Sidebar.vue';
// 設置組件名稱（可選，但有助於除錯工具）
import { defineOptions } from 'vue';
defineOptions({
  name: 'App',
});
</script>

<style>
/* 基礎重置 */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body, html {
  height: 100%;
  font-family: Arial, sans-serif;
  background-color: #f4f4f4;
}

#app {
  display: flex;
  min-height: 100vh;
}

/* 頂部 Header 樣式 */
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  background-color: #ffffff;
  border-bottom: 1px solid #e0e0e0;
  margin-bottom: 20px;
}

.title-container {
  display: flex;
  align-items: center;
}

.title-container h1 {
  font-size: 20px;
  margin-left: 10px;
}

.admin-info {
  display: flex;
  align-items: center;
  font-size: 14px;
}

.admin-info .user-icon {
  width: 24px;
  height: 24px;
  border: 1px solid #000; /* 線稿風格 */
  border-radius: 50%;
  margin-left: 8px;
}
/* 主內容區域佈局 */
.content-area {
  flex-grow: 1;
  padding: 20px;
}
</style>
