<template>
  <div class="page-container">
    <div class="tabs-nav">
      <div
          v-for="tab in tabs"
          :key="tab.key"
          :class="['tab-item', { active: currentTab === tab.key }]"
          @click="currentTab = tab.key"
      >
        {{ tab.label }}
      </div>
    </div>

    <div class="tab-content">
      <component :is="currentTabComponent"></component>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

// 引入所有 Tab 內容組件
import Overview from '../components/ApplicationTabs/Overview.vue';
import Unchecked from '../components/ApplicationTabs/Unchecked.vue';
import Reviewing from '../components/ApplicationTabs/Reviewing.vue';
import Dispatched from '../components/ApplicationTabs/Dispatched.vue';
import Completed from '../components/ApplicationTabs/Completed.vue';

// 1. 將 data() 轉為 ref()
const currentTab = ref('Unchecked'); // 預設顯示 '未審核'
const tabs = ref([
  { key: 'Overview', label: '總覽' },
  { key: 'Unchecked', label: '未審核' },
  { key: 'Reviewing', label: '審核中' },
  { key: 'Dispatched', label: '派車中' },
  { key: 'Completed', label: '已完成' },
]);

// 2. 將 computed 轉為 Vue 3 的 computed 函式
const currentTabComponent = computed(() => {
  // 動態載入組件，這裡直接根據 currentTab 的字串值返回對應的引入組件
  const components = {
    Overview,
    Unchecked,
    Reviewing,
    Dispatched,
    Completed,
  };
  return components[currentTab.value];
});
</script>

<style scoped>
.page-container {
  background-color: #fff;
  padding: 20px;
  border: 1px solid #ccc; /* 模擬線稿外框 */
}

.tabs-nav {
  display: flex;
  border-bottom: 1px solid #ccc;
  margin-bottom: 20px;
}

.tab-item {
  padding: 10px 15px;
  cursor: pointer;
  border: 1px solid transparent;
  margin-right: -1px; /* 讓邊框重疊 */
  border-bottom: none;
  font-size: 15px;
  font-weight: 500;
}

.tab-item.active {
  border-color: #ccc;
  border-bottom: 3px solid #000; /* 強調底線 */
  position: relative;
  top: 1px; /* 微調以覆蓋分隔線 */
}
</style>