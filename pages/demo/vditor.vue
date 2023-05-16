<template>
  <div id="vditor" />
</template>

<script setup lang="ts">
import Vditor from 'vditor'
import 'vditor/dist/index.css'


const vditor = ref<Vditor | null>(null);

const initVditor = () => {
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
      vditor.value!.setValue('# Hello World')
    },
  })
}

onMounted(() => {
  useHead({
    script: [
      {
        src: "https://unpkg.com/vditor@3.9.2/dist/js/lute/lute.min.js",
        id: "vditorLuteScript",
        onload: () => {
          // 解决Lute找不到问题, 加载lute后再执行Vditor创建
          // 测试发现这种方式部署后没问题，开发环境下还需要手动刷新
          initVditor()
        }
      },
    ],
  })
})
</script>

<style></style>
