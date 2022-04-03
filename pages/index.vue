<template>
  <div>
    <v-tooltip left>
      <template #activator="{ on }">
        <v-btn color="var(--color-text)" absolute top right large icon v-on="on" @click="toggleDarkMode">
          <v-icon v-if="isDarkMode">mdi-white-balance-sunny</v-icon>
          <v-icon v-else>mdi-moon-waning-crescent</v-icon>
        </v-btn>
      </template>
      <span v-if="isDarkMode">Light Mode</span>
      <span v-else>Dark Mode</span>
    </v-tooltip>

    <div v-if="!!selectedSounds.length" class="sound__list selected">
      <v-tooltip v-for="(sound, index) in selectedSounds" :key="index" bottom>
        <template #activator="{ on, value: hover }">
          <v-card
            color="var(--color-card)"
            :elevation="hover ? 6 : 1"
            :class="['sound__item', { 'dark-mode': isDarkMode }, { 'on-hover': hover }]"
            v-on="on"
            @click="removeSound(sound)"
          >
            <v-img :src="sound.imageSrc" :alt="sound.name" :max-width="50"></v-img>
          </v-card>
        </template>
        <span>{{ sound.name }}</span>
      </v-tooltip>
    </div>

    <div class="sound__list">
      <v-tooltip v-for="(sound, index) in sounds" :key="index" bottom>
        <template #activator="{ on, value: hover }">
          <v-card
            color="var(--color-card)"
            :elevation="hover ? 6 : 1"
            :class="['sound__item', { 'dark-mode': isDarkMode }, { 'on-hover': hover }]"
            :disabled="!!selectedSounds.find((item) => item.id === sound.id)"
            v-on="on"
            @click="addSound(sound)"
          >
            <v-img :src="sound.imageSrc" :alt="sound.name" :max-width="100"></v-img>
          </v-card>
        </template>
        <span>{{ sound.name }}</span>
      </v-tooltip>
    </div>
  </div>
</template>

<script>
import { THEME } from '~/constants/theme.js'

export default {
  name: 'HomePage',
  data() {
    return {
      isDarkMode: false,
      selectedSounds: []
    }
  },
  computed: {
    sounds() {
      const soundList = [
        {
          name: 'Bonfire',
          imageSrc: require('~/assets/images/bonfire.png'),
          soundSrc: ''
        },
        {
          name: 'Ocean Waves',
          imageSrc: require('~/assets/images/ocean-waves.png'),
          soundSrc: ''
        },
        {
          name: 'Heavy Rain',
          imageSrc: require('~/assets/images/heavy-rain.png'),
          soundSrc: ''
        },
        {
          name: 'Thunder',
          imageSrc: require('~/assets/images/thunder.png'),
          soundSrc: ''
        },
        {
          name: 'Wind',
          imageSrc: require('~/assets/images/wind.png'),
          soundSrc: ''
        },
        {
          name: 'Waterfall',
          imageSrc: require('~/assets/images/waterfall.png'),
          soundSrc: ''
        },
        {
          name: 'Birds',
          imageSrc: require('~/assets/images/birds.png'),
          soundSrc: ''
        },
        {
          name: 'Frogs',
          imageSrc: require('~/assets/images/frogs.png'),
          soundSrc: ''
        },
        {
          name: 'Chimes',
          imageSrc: require('~/assets/images/chimes.png'),
          soundSrc: ''
        },
        {
          name: 'Sleeping',
          imageSrc: require('~/assets/images/sleeping.png'),
          soundSrc: ''
        },
        {
          name: 'Coffee House',
          imageSrc: require('~/assets/images/coffee-house.png'),
          soundSrc: ''
        },
        {
          name: 'Cooking',
          imageSrc: require('~/assets/images/cooking.png'),
          soundSrc: ''
        },
        {
          name: 'Market',
          imageSrc: require('~/assets/images/market.png'),
          soundSrc: ''
        },
        {
          name: 'Piano',
          imageSrc: require('~/assets/images/piano.png'),
          soundSrc: ''
        },
        {
          name: 'Yoga',
          imageSrc: require('~/assets/images/yoga.png'),
          soundSrc: ''
        },
        {
          name: 'Coding',
          imageSrc: require('~/assets/images/coding.png'),
          soundSrc: ''
        }
      ]
      return soundList.map((sound, index) => {
        return { ...sound, id: index }
      })
    }
  },
  methods: {
    /**
     * add selected sound to the selected sound list
     * @param {object} sound - sound information
     * @return {void}
     */
    addSound(sound) {
      this.selectedSounds.push(sound)
    },
    /**
     * remove selected sound out the selected sound list
     * @param {object} sound - sound information
     * @return {void}
     */
    removeSound(sound) {
      const index = this.selectedSounds.findIndex((item) => item.id === sound.id)
      this.selectedSounds.splice(index, 1)
    },
    /**
     * change to dark mode or light mode
     * @return {void}
     */
    toggleDarkMode() {
      const color = this.isDarkMode ? { ...THEME.LIGHT } : { ...THEME.DARK }
      this.$store.dispatch('preferences/updateColor', { color })
      this.isDarkMode = !this.isDarkMode
    }
  }
}
</script>

<style lang="scss" scoped>
.sound {
  &__list {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 32px;
    margin: 100px 0;

    &.selected {
      gap: 16px;
    }
  }

  &__item {
    height: fit-content;
    width: fit-content;
    padding: 8px;
    transition: opacity 0.3s linear, box-shadow 0.3s linear;

    &:not(.on-hover) {
      opacity: 0.7;
    }
  }
}
</style>
