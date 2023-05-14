<script setup lang="ts">
let theme = ref('light')
const AllTheme: string[] = ["light", "dark", "cupcake", "bumblebee", "emerald", "corporate", "synthwave", "retro", "cyberpunk", "valentine", "halloween", "garden", "forest", "aqua", "lofi", "pastel", "fantasy", "wireframe", "black", "luxury", "dracula", "cmyk", "autumn", "business", "acid", "lemonade", "night", "coffee", "winter"]
const setColorTheme = (newTheme: string): void => {
  console.log('修改主题', newTheme)
  theme.value = newTheme
  console.log(111, theme.value);
}
</script>

<template>
  <div :data-theme="theme" class="m-10">
    <div>
      DaisyUI安装成功
      <button class="btn btn-primary">Button</button>
    </div>
    <div>
      主题测试修改测试
      <ul>
        <li v-for="item in AllTheme" :key="item" @click="setColorTheme(item)">{{ item }}</li>
      </ul>
    </div>
  </div>
</template>

