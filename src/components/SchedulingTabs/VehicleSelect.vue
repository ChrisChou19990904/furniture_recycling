<template>
  <div class="vehicle-select-container">
    <div class="actions-row">
      <select class="filter-dropdown">
        <option>篩選車輛</option>
        <option>所有車輛</option>
        <option>待命中</option>
        <option>執行中</option>
      </select>
    </div>

    <div v-for="vehicle in vehicles" :key="vehicle.id" class="vehicle-item">
      <div class="vehicle-info-block">
        <div class="vehicle-image-placeholder">


          [Image of Truck]

        </div>
        <div class="info-details">
          <div class="vehicle-assessment">車輛評估: {{ vehicle.assessment }}</div>
          <div class="vehicle-id">車輛編號: {{ vehicle.id }}</div>
        </div>
      </div>
      <button class="review-btn">審核</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'; // 引入 ref 函式來建立響應式資料

// 將原本 data() 內的資料，改用 ref() 包裹起來
const vehicles = ref([
  { id: 'A001', assessment: '良好', status: '待命中' },
  { id: 'B023', assessment: '需保養', status: '待命中' },
  { id: 'C101', assessment: '良好', status: '執行中' },
]);
</script>

<style scoped>
.vehicle-select-container {
  background-color: #fff;
  padding: 20px;
  border: 1px solid #ccc;
}

.actions-row {
  margin-bottom: 20px;
}

.filter-dropdown {
  padding: 8px 10px;
  border: 1px solid #000;
  background-color: #fff;
}

.vehicle-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #ccc;
  padding: 15px;
  margin-bottom: 10px;
}

.vehicle-info-block {
  display: flex;
  align-items: center;
}

.vehicle-image-placeholder {
  width: 80px;
  height: 60px;
  border: 1px solid #000;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
  font-size: 12px;
  color: #666;
}

.info-details div {
  line-height: 1.5;
  font-size: 14px;
}

.vehicle-assessment {
  font-weight: bold;
}

.review-btn {
  padding: 8px 20px;
  background-color: #fff;
  border: 1px solid #000;
  cursor: pointer;
}
</style>