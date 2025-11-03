<template>
  <div class="overview-list">
    <div class="search-filter-area">
      <div class="search-box">
        <input type="text" placeholder="輸入案件查詢" class="search-input" />
        <button class="search-btn">Q</button>
      </div>

      <div class="filter-conditions">
        <div class="filter-group">
          <label class="filter-label">回收物:</label>
          <select>
            <option>請選擇</option>
          </select>
        </div>
        <div class="filter-group">
          <label class="filter-label">預約時段:</label>
          <select>
            <option>請選擇</option>
          </select>
        </div>
        <div class="filter-group">
          <label class="filter-label">狀態:</label>
          <select>
            <option>請選擇</option>
          </select>
        </div>
        <span class="status-display">~~~~</span>
      </div>
    </div>

    <div class="case-list-placeholder">
      <p class="list-label">列表</p>
    </div>
  </div>
</template>

<script setup>
// Vue 3 <script setup> 語法
// 此組件為純靜態排版，無需任何邏輯。
</script>

<style scoped>
.overview-list {
  padding: 10px 0;
}

.search-filter-area {
  margin-bottom: 20px;
  padding-bottom: 15px;
  border-bottom: 1px solid #e0e0e0;
}

/* 搜尋欄位 */
.search-box {
  display: flex;
  margin-bottom: 15px;
}

.search-input {
  flex-grow: 1;
  padding: 10px;
  border: 1px solid #000;
  border-right: none;
}

.search-btn {
  padding: 10px 15px;
  background-color: #fff;
  border: 1px solid #000;
  cursor: pointer;
}

/* 篩選條件 */
.filter-conditions {
  display: flex;
  align-items: center;
  gap: 20px;
}

.filter-group {
  display: flex;
  align-items: center;
}

.filter-label {
  font-size: 14px;
  margin-right: 5px;
}

.filter-conditions select {
  padding: 5px 8px;
  border: 1px solid #000;
  background-color: #fff;
}

.status-display {
  font-size: 14px;
}

/* 列表佔位符 */
.case-list-placeholder {
  border: 1px solid #000;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f8f8f8;
}

.list-label {
  font-size: 16px;
  color: #666;
}
</style>