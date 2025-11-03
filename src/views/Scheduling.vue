<template>
  <div class="page-container">
    <div class="tabs-nav">
      <router-link
          v-for="tab in schedulingTabs"
          :key="tab.key"
          :to="{ name: tab.routeName }"
          :class="['tab-item', { active: $route.name === tab.routeName }]"
      >
        {{ tab.label }}
      </router-link>
    </div>

    <div class="tab-content">
      <router-view />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// 將 data() 內的數據轉為 ref()
const schedulingTabs = ref([
  { key: 'vehicle', label: '車輛選擇', routeName: 'SchedulingVehicle' },
  { key: 'case', label: '案件選擇', routeName: 'SchedulingCase' },
  { key: 'path', label: '路徑規劃', routeName: 'SchedulingPath' },
  { key: 'auto', label: '自動生成', routeName: 'SchedulingAuto' },
]);
</script>