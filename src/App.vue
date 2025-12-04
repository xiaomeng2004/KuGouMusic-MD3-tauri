<script setup lang="ts">
const value = ref(false);
</script>

<template>
  <div>
    <mdui-switch @change="(event: any) => value = event.target.checked"></mdui-switch>
    <mdui-button>
      {{ value }}
    </mdui-button>
  </div>
</template>