<template>
  <v-app dark>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout'
}
</script>

<style lang="scss">
:root {
  --color-background: #f5f5f5;
  --color-text: #333;
}

.v-application {
  background-color: var(--color-background) !important;
}
</style>
