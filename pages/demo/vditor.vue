<template>
  <div id="vditor" />
</template>

<script setup lang="ts">
import Vditor from 'vditor';
import 'vditor/dist/index.css';
// 解决Lute找不到问题
useHead({
  script: [
    {
      src: "https://unpkg.com/vditor@3.9.2/dist/js/lute/lute.min.js",
      id: "vditorLuteScript",
    },
  ],
});

const vditor = ref<Vditor | null>(null);

onMounted(() => {
  vditor.value = new Vditor('vditor', {
    height: 720,
    toolbarConfig: {
      pin: true,
    },
    // cache: {
    //   enable: false,
    // },
    after: () => {
      // vditor.value is a instance of Vditor now and thus can be safely used here
      vditor.value!.setValue('# Hello World');
    },
  });
});
</script>

<style></style>
