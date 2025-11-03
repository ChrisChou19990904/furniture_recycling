<template>
  <div class="case-select-container">
    <div class="progress-bar-row">
      <div class="progress-bar-placeholder"></div>
      <span class="progress-text">目前選取數量/總數量: 67 %</span>
    </div>

    <div v-for="n in 5" :key="n" class="case-item">
      <div class="case-grid">
        <div class="case-id">案件編號: ~~~~~~</div>

        <div class="case-details">
          <span>時間: ~~:~~ ~~:~~</span>
          <span>回收點: ~~~</span>
          <span>回收物: ~~~</span>
        </div>

        <div class="selection-controls">
          <select>
            <option>展開</option>
          </select>
          <button class="action-btn">選取</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Vue 3 <script setup> 語法
// 由於此組件目前沒有響應式數據（如案件列表或動態進度），
// 腳本區只需要保持簡潔，並自動從檔案名稱推導組件名稱。

// 如果未來要讓進度動態化，可以這樣修改：
// import { ref } from 'vue';
// const progress = ref('67');
// (並將 template 中的 '67 %' 改為 '{{ progress }} %')
</script>

<style scoped>
/* 樣式部分保持不變，因為 CSS 佈局與 Vue 版本無關 */
.case-select-container {
  background-color: #fff;
  padding: 20px;
  border: 1px solid #ccc;
}

.progress-bar-row {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 20px;
}

.progress-bar-placeholder {
  /* 模擬線稿中的進度條 */
  height: 10px;
  width: 250px;
  background-color: #e0e0e0;
  border: 1px solid #000;
  position: relative;
}

.progress-bar-placeholder::after {
  /* 模擬 67% 的進度 (CSS 寫死) */
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 67%;
  background-color: #000;
}

.progress-text {
  font-size: 14px;
  font-weight: bold;
}

.case-item {
  border: 1px solid #ccc;
  padding: 15px;
  margin-bottom: 10px;
}

.case-grid {
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 1.5;
}

.case-id {
  font-weight: bold;
  flex-basis: 200px;
}

.case-details {
  flex-grow: 1;
}

.case-details span {
  display: block;
  font-size: 14px;
}

.selection-controls {
  display: flex;
  align-items: center;
  gap: 10px;
}

.selection-controls select {
  padding: 5px 8px;
  border: 1px solid #000;
  background-color: #fff;
}

.action-btn {
  padding: 5px 15px;
  background-color: #fff;
  border: 1px solid #000;
  cursor: pointer;
}
</style>