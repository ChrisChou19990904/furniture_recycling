<template>
  <nav class="sidebar">
    <div class="menu-item">基礎設定</div>
    <div class="menu-group">
      <div class="menu-item">申請列表</div>
      <router-link to="/application/unchecked" class="sub-item">申請列表內容</router-link>
    </div>
    <div class="menu-group">
      <div class="menu-item">排程</div>
      <router-link to="/scheduling/vehicle" class="sub-item">車輛選擇</router-link>
      <router-link to="/scheduling/case" class="sub-item">案件選擇</router-link>
      <router-link to="/scheduling/path" class="sub-item">路徑規劃</router-link>
      <router-link to="/scheduling/auto" class="sub-item">自動生成</router-link>
    </div>
  </nav>
</template>

<script setup>
// Vue 3 <script setup> 語法
// 此組件為純靜態導航，無需任何邏輯。
</script>

<style scoped>
.sidebar {
  width: 200px;
  background-color: #ffffff;
  border-right: 1px solid #e0e0e0;
  padding: 20px 0;
  flex-shrink: 0;
}

.menu-item {
  padding: 10px 20px;
  font-weight: bold;
  cursor: pointer;
  border-left: 3px solid transparent;
}

.menu-item.active {
  background-color: #e0f7fa; /* 淺色背景強調 */
  border-left-color: #007bff; /* 藍色線條強調 */
}

.menu-group {
  margin-bottom: 15px;
}

.sub-item {
  display: block;
  padding: 8px 20px 8px 30px; /* 內縮 */
  text-decoration: none;
  color: #333;
  font-size: 14px;
}

/* 為了還原線稿的左邊導航，我們不需要過多的複雜互動，僅提供結構 */
</style>