<template>
  <div class="unchecked-list">
    <div class="actions-row">
      <label>
        <input type="checkbox" checked />
        全部選取
      </label>
      <select>
        <option>篩選</option>
      </select>
    </div>

    <div v-for="n in 3" :key="n" class="case-item">
      <div class="case-header">
        <input type="checkbox" />
        <span class="case-id">案件編號: ~~~~~~</span>
        <div class="details">
          <span>時間: ~~:~~ ~~:~~</span>
          <span>回收點: ~~~</span>
          <span>回收物: ~~~</span>
        </div>
      </div>
      <button class="review-btn">審核</button>
    </div>
  </div>
</template>

<script setup>
// Vue 3 <script setup> 語法
// 此組件無需任何邏輯或響應式數據，腳本區保持簡潔。
</script>

<style scoped>
/* 樣式部分保持不變 */
.unchecked-list {
  padding: 10px 0;
}

.actions-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 1px solid #e0e0e0;
}

.case-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #ccc;
  padding: 15px;
  margin-bottom: 10px;
  line-height: 1.5;
}

.case-header {
  display: flex;
  align-items: center;
}

.case-header input[type="checkbox"] {
  margin-right: 15px;
}

.case-id {
  font-weight: bold;
  margin-right: 20px;
}

.details span {
  display: block;
  font-size: 14px;
}

.review-btn {
  padding: 8px 20px;
  background-color: #fff;
  border: 1px solid #000;
  cursor: pointer;
}
</style>