<template>
  <div class="reviewing-list">
    <div class="actions-row">
      <select class="filter-dropdown">
        <option>篩選審核狀態</option>
        <option>待處理</option>
        <option>已通過</option>
        <option>已拒絕</option>
      </select>
    </div>

    <div v-for="item in reviewingCases" :key="item.id" class="case-item">
      <div class="case-grid">
        <div class="case-id">{{ item.caseId }}</div>
        <div class="case-details">
          <span>時間: {{ item.time }}</span>
          <span>回收點: {{ item.location }}</span>
          <span>回收物: {{ item.item }}</span>
        </div>

        <div class="case-status-actions">
          <span class="status-label">審核狀態:</span>
          <select v-model="item.status" class="status-dropdown">
            <option>展開</option>
            <option>收合</option>
          </select>
        </div>

        <div class="case-memo">
          <span class="memo-label">備註:</span>
          <span>{{ item.memo }}</span>
        </div>

        <div class="expand-btn-container">
          <button @click="toggleExpand(item.id)" class="expand-btn">
            {{ item.isExpanded ? '收合' : '展開' }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'; // 引入 ref 來管理響應式數據

// 1. 將 data() 內的數據轉為 ref()
const reviewingCases = ref([
  {
    id: 1,
    caseId: '案件編號: 20231103001',
    time: '10:00 ~ 12:00',
    location: '台中市西屯區',
    item: '廢輪胎',
    status: '展開',
    memo: '~',
    isExpanded: false
  },
  {
    id: 2,
    caseId: '案件編號: 20231103002',
    time: '14:00 ~ 16:00',
    location: '台中市南屯區',
    item: '廢家電',
    status: '展開',
    memo: '~',
    isExpanded: false
  },
  // 更多案件...
]);

// 2. 將 methods 邏輯直接定義為函式
const toggleExpand = (id) => {
  // 注意：在 <script setup> 中操作 ref 數組時，需要透過 .value
  const index = reviewingCases.value.findIndex(c => c.id === id);
  if (index !== -1) {
    reviewingCases.value[index].isExpanded = !reviewingCases.value[index].isExpanded;
  }
};
</script>

<style scoped>
.reviewing-list {
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
  line-height: 1.5;
}

.case-grid {
  /* 使用 CSS Grid 實現線稿中的多欄佈局 */
  display: grid;
  grid-template-columns: 180px 1fr 150px 100px; /* 案件編號 | 細節 | 狀態/備註 | 展開 */
  grid-template-rows: auto auto; /* 兩行 */
  gap: 10px 20px;
  align-items: start;
}

/* 案件編號 */
.case-id {
  font-weight: bold;
  grid-column: 1 / 2;
  grid-row: 1 / 3; /* 讓案件編號垂直跨越兩行 */
  padding-top: 5px;
}

/* 案件細節 */
.case-details {
  grid-column: 2 / 3;
  grid-row: 1 / 2;
}

.case-details span {
  display: block;
  font-size: 14px;
}

/* 審核狀態與下拉選單 */
.case-status-actions {
  grid-column: 3 / 4;
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
}

/* 備註 */
.case-memo {
  grid-column: 2 / 4; /* 備註橫跨兩欄 */
  grid-row: 2 / 3;
  display: flex;
  font-size: 14px;
}

.memo-label {
  margin-right: 5px;
  font-weight: bold;
}

/* 展開按鈕 */
.expand-btn-container {
  grid-column: 4 / 5;
  grid-row: 1 / 3;
  align-self: center; /* 垂直居中 */
  justify-self: center; /* 水平居中 */
}

.expand-btn {
  padding: 5px 10px;
  background-color: #fff;
  border: 1px solid #000;
  cursor: pointer;
  font-size: 14px;
}
</style>