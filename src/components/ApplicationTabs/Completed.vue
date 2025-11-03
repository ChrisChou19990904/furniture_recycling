<template>
  <div class="completed-list">
    <div class="actions-row">
      <select class="filter-dropdown">
        <option>請選狀態</option>
        <option>已結案</option>
        <option>待歸檔</option>
      </select>
    </div>

    <div v-for="item in completedCases" :key="item.id" class="case-item">
      <div class="case-grid">
        <div class="case-id">
          案件編號: {{ item.caseId }}
          <div class="details">
            <span>時間: {{ item.time }}</span>
            <span>回收點: {{ item.location }}</span>
            <span>回收物: {{ item.item }}</span>
          </div>
        </div>

        <div class="expand-btn-container">
          <button @click="toggleExpand(item.id)" class="expand-btn">
            展開
          </button>
        </div>

        <div class="completion-date-group">
          <span class="label">完成日期:</span>
          <button class="date-select-btn">選擇日期</button>
        </div>

        <div class="case-memo">
          <span class="label">備註:</span>
          <span>{{ item.memo }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'; // 引入 ref 來管理響應式數據

// 1. 將 data() 內的數據轉為 ref()
const completedCases = ref([
  {
    id: 1,
    caseId: '20231103001',
    time: '10:00 ~ 12:00',
    location: '台中市',
    item: '廢輪胎',
    memo: '~',
    isExpanded: false
  },
  {
    id: 2,
    caseId: '20231103002',
    time: '14:00 ~ 16:00',
    location: '新北市',
    item: '廢家電',
    memo: '~',
    isExpanded: false
  },
  // 更多案件...
]);

// 2. 將 methods 邏輯直接定義為函式
const toggleExpand = (id) => {
  // 操作 ref 數組時，必須透過 .value
  const index = completedCases.value.findIndex(c => c.id === id);
  if (index !== -1) {
    completedCases.value[index].isExpanded = !completedCases.value[index].isExpanded;
  }
};
</script>

<style scoped>
.completed-list {
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
  grid-template-columns: 2fr 100px 1.5fr 1fr; /* 案件資訊 | 展開 | 完成日期 | 備註 */
  align-items: start;
  gap: 10px 20px;
}

.case-id {
  grid-column: 1 / 2;
  font-weight: bold;
}

.details span {
  display: block;
  font-size: 14px;
  font-weight: normal;
}

/* 展開按鈕 */
.expand-btn-container {
  grid-column: 2 / 3;
  align-self: center;
  justify-self: center;
}

.expand-btn {
  padding: 5px 10px;
  background-color: #fff;
  border: 1px solid #000;
  cursor: pointer;
  font-size: 14px;
}

/* 完成日期 */
.completion-date-group {
  grid-column: 3 / 4;
  display: flex;
  align-items: center;
}

.date-select-btn {
  padding: 5px 10px;
  background-color: #fff;
  border: 1px solid #000;
  cursor: pointer;
  font-size: 14px;
}

/* 備註 */
.case-memo {
  grid-column: 4 / 5;
  display: flex;
}

.label {
  font-weight: bold;
  margin-right: 5px;
  font-size: 14px;
}
</style>