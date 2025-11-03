<template>
  <div class="dispatched-list">
    <div class="actions-row">
      <select class="filter-dropdown">
        <option>篩選派車狀態</option>
        <option>待回收</option>
        <option>已出發</option>
        <option>已完成</option>
      </select>
    </div>

    <div v-for="item in dispatchedCases" :key="item.id" class="case-item">
      <div class="case-grid">
        <div class="case-id">{{ item.caseId }}</div>

        <div class="case-detail-group">
          <span class="detail-label">案件詳情:</span>
          <select class="detail-dropdown">
            <option>展開</option>
          </select>
        </div>
        <div class="case-detail-group">
          <span class="detail-label">派車內容:</span>
          <select class="detail-dropdown">
            <option>展開</option>
          </select>
        </div>

        <div class="case-memo">
          <span class="memo-label">備註:</span>
          <span>{{ item.memo }}</span>
        </div>

        <div class="dispatch-status-group">
          <span class="status-label">派車狀態:</span>
          <select class="status-dropdown" v-model="item.dispatchStatus">
            <option>待前往收取</option>
            <option>已出發</option>
            <option>已完成</option>
          </select>
        </div>

        <div class="action-btn-container">
          <button class="action-btn">
            {{ item.actionLabel }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'; // 引入 ref 來管理響應式數據

// 將 data() 內的數據轉為 ref()
const dispatchedCases = ref([
  {
    id: 1,
    caseId: '案件編號: 20231103005',
    memo: '~',
    dispatchStatus: '待前往收取',
    actionLabel: '派車狀態',
  },
  {
    id: 2,
    caseId: '案件編號: 20231103006',
    memo: '~',
    dispatchStatus: '已出發',
    actionLabel: '派車狀態',
  },
  // 更多案件...
]);
</script>

<style scoped>
.dispatched-list {
  padding: 10px 0;
}

.actions-row {
  margin-bottom: 20px;
}

.filter-dropdown {
  padding: 8px 10px;
  border: 1px solid #000;
  background-color: #fff;
}

.case-item {
  border: 1px solid #ccc;
  padding: 15px;
  margin-bottom: 10px;
}

.case-grid {
  /* 使用 CSS Grid 實現線稿中的多欄佈局 */
  display: grid;
  grid-template-columns: 180px 1fr 150px 150px 120px; /* 案件編號 | 詳情/內容 | 備註 | 派車狀態 | 按鈕 */
  grid-template-rows: auto auto; /* 兩行 */
  gap: 10px 20px;
  align-items: center;
}

.case-id {
  font-weight: bold;
  grid-column: 1 / 2;
  grid-row: 1 / 3; /* 垂直跨越兩行 */
}

/* 案件詳情/派車內容 */
.case-detail-group {
  display: flex;
  align-items: center;
}

.detail-label {
  margin-right: 5px;
  font-size: 14px;
}

.detail-dropdown {
  padding: 3px 5px;
  border: 1px solid #000;
  background-color: #fff;
  font-size: 14px;
}

/* 備註 */
.case-memo {
  grid-column: 3 / 4;
  grid-row: 1 / 2;
  display: flex;
  font-size: 14px;
}

.memo-label {
  margin-right: 5px;
  font-weight: bold;
}

/* 派車狀態 */
.dispatch-status-group {
  grid-column: 4 / 5;
  grid-row: 1 / 2;
  display: flex;
  align-items: center;
}

.status-label {
  margin-right: 5px;
  font-size: 14px;
}

.status-dropdown {
  padding: 3px 5px;
  border: 1px solid #000;
  background-color: #fff;
  font-size: 14px;
}

/* 操作按鈕 */
.action-btn-container {
  grid-column: 5 / 6;
  grid-row: 1 / 3;
  align-self: center;
  justify-self: center;
}

.action-btn {
  padding: 8px 15px;
  background-color: #fff;
  border: 1px solid #000;
  cursor: pointer;
  font-size: 14px;
}
</style>