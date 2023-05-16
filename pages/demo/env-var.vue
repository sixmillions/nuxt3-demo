<template>
  <div>环境变量使用 https://nuxt.com/docs/getting-started/configuration</div>
  <div>替换nuxt.config.ts中的私有配置，需要用“NUXT_”开头，然后变量名驼峰转大写，用下划线分。例如 apiToken -- NUXT_API_TOKEN</div>
  <div>替换nuxt.config.ts中的公共配置，需要用“NUXT_PUBLIC”开头，然后变量名驼峰转大写，用下划线分隔。例如 pubicKey -- NUXT_PUBLIC_PUBLIC_KEY</div>
</template>
<script setup>
const runtimeConfig = useRuntimeConfig()
console.log(runtimeConfig.envVar1, runtimeConfig.publicEnvVar1)
</script>
