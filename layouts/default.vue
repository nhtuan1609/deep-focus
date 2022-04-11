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
import { THEME } from '~/constants/theme.js'

export default {
  name: 'DefaultLayout',
  computed: {
    color() {
      return this.$store.getters['preferences/getColor']
    }
  },
  watch: {
    color: {
      deep: true,
      handler(newColor) {
        if (!newColor) return
        if (newColor.primary) this.$vuetify.theme.themes.dark.primary = newColor.primary
        if (newColor.primaryDark) this.$vuetify.theme.themes.dark.primaryDark = newColor.primaryDark
        if (newColor.secondary) this.$vuetify.theme.themes.dark.secondary = newColor.secondary
        if (newColor._primary) this.$vuetify.theme.themes.dark._primary = newColor._primary
        if (newColor._secondary) this.$vuetify.theme.themes.dark._secondary = newColor._secondary
        if (newColor._accent) this.$vuetify.theme.themes.dark._accent = newColor._accent
        if (newColor._base) this.$vuetify.theme.themes.dark._base = newColor._base
        if (newColor._white) this.$vuetify.theme.themes.dark._white = newColor._white
        if (newColor._text) this.$vuetify.theme.themes.dark._text = newColor._text
        if (newColor._success) this.$vuetify.theme.themes.dark._success = newColor._success
        if (newColor._warning) this.$vuetify.theme.themes.dark._warning = newColor._warning
        if (newColor._error) this.$vuetify.theme.themes.dark._error = newColor._error
        if (newColor._clickable) this.$vuetify.theme.themes.dark._clickable = newColor._clickable
        if (newColor._hightLight) this.$vuetify.theme.themes.dark._hightLight = newColor._hightLight
      }
    }
  },
  created() {
    setTimeout(() => {
      this.$store.dispatch('preferences/updateColor', { color: { ...THEME.LIGHT } })
    }, 100)
  }
}
</script>

<style lang="scss">
:root {
  --color-background: var(--v-_base-base);
  --color-text: var(--v-_text-base);
  --color-card: var(--v-_white-base);
  --color-shadow: var(--v-_text-darken4);
  --color-disabled: var(--v-_base-base);
  --color-border: var(--v-_text-lighten5);
}

* {
  color: var(--color-text);
}

html {
  overflow-y: auto;
}

.v-application {
  background-color: var(--color-background) !important;

  .dark-mode.elevation-1 {
    box-shadow: 0px 2px 1px -1px rgb(255 255 255 / 20%), 0px 1px 1px 0px rgb(255 255 255 / 14%),
      0px 1px 3px 0px rgb(255 255 255 / 12%) !important;
  }

  .dark-mode.elevation-6 {
    box-shadow: 0px 3px 5px -1px rgb(255 255 255 / 20%), 0px 6px 10px 0px rgb(255 255 255 / 14%),
      0px 1px 18px 0px rgb(255 255 255 / 12%) !important;
  }

  .v-card--disabled {
    background-color: var(--color-disabled) !important;
  }
}
</style>
