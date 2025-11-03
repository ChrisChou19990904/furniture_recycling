<template>
  <div class="path-planning-container">
    <div class="planning-layout">
      <div class="station-selection">
        <div v-for="n in 4" :key="n" class="station-group">
          <label :for="'station-' + n" class="station-label">回收站點 {{ n }}:</label>
          <select :id="'station-' + n" class="station-dropdown">
            <option>選擇站點 {{ n }}</option>
            <option>回收站點 A</option>
            <option>回收站點 B</option>
          </select>
        </div>
      </div>

      <div class="map-container-placeholder">
        <span class="map-label">Google Map</span>
      </div>
    </div>
  </div>
</template>

<script setup>
// Vue 3 <script setup> 語法
// 由於此組件沒有響應式數據，不需要 export default 或 import ref。
// name 屬性會自動從檔案名稱推導。
</script>

<style scoped>
.path-planning-container {
  background-color: #fff;
  padding: 20px;
  border: 1px solid #ccc;
}

.planning-layout {
  display: flex;
  gap: 20px;
}

.station-selection {
  flex-basis: 300px; /* 線稿中左側區域的寬度 */
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.station-group {
  display: flex;
  flex-direction: column;
}

.station-label {
  font-size: 14px;
  margin-bottom: 5px;
}

.station-dropdown {
  padding: 8px 10px;
  border: 1px solid #000;
  background-color: #fff;
}

.map-container-placeholder {
  flex-grow: 1;
  height: 400px; /* 模擬地圖高度 */
  border: 1px solid #000;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f0f0f0;
}

.map-label {
  font-size: 18px;
  color: #666;
}
</style>