// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  runtimeConfig: {
    // 私有配置只在服务器端可用，会被.env中的NUXT_ENV_VAR1覆盖
    envVar1: 'xxx',
    // 公共配置也可以在客户端使用，会被.env中的NUXT_PUBLIC_PUBLIC_ENV_VAR1覆盖
    public: {
      publicEnvVar1: 'sss'
    }
  }
})
