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
            <v-img :src="sound.imageSrc" :alt="sound.name" width="50" aspect-ratio="1"></v-img>
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
            <v-img :src="sound.imageSrc" :alt="sound.name" width="100" aspect-ratio="1"></v-img>
            <audio :id="`player-${index}`" loop>
              <source :src="sound.soundSrc" />
            </audio>
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
          soundSrc: 'https://docs.google.com/uc?export=download&id=1KgjpOG5vwdCMciA_EVnylwHMrI0jYcgs'
        },
        {
          name: 'Ocean Waves',
          imageSrc: require('~/assets/images/ocean-waves.png'),
          soundSrc: 'https://docs.google.com/uc?export=download&id=1TlCAunirg2kFwx88u_FdjJDB67TL-hV6'
        },
        {
          name: 'Heavy Rain',
          imageSrc: require('~/assets/images/heavy-rain.png'),
          soundSrc: 'https://docs.google.com/uc?export=download&id=1GiAvkjwLxMXdmZ2HCxr1g9ekr94zkenC'
        },
        {
          name: 'Thunder',
          imageSrc: require('~/assets/images/thunder.png'),
          soundSrc: 'https://docs.google.com/uc?export=download&id=10go94SC2jS71hNa4SJ126-AF3Y7trqSc'
        },
        {
          name: 'Wind',
          imageSrc: require('~/assets/images/wind.png'),
          soundSrc: 'https://docs.google.com/uc?export=download&id=1ivctAolnWpE8f4EPswSkKDHQ6BmXHbZU'
        },
        {
          name: 'Waterfall',
          imageSrc: require('~/assets/images/waterfall.png'),
          soundSrc: 'https://docs.google.com/uc?export=download&id=1XcemX8FsuVxdqATPUwEJLr7hIB2CB76a'
        },
        {
          name: 'Birds',
          imageSrc: require('~/assets/images/birds.png'),
          soundSrc: 'https://docs.google.com/uc?export=download&id=1udgu1AO4xv6n_5Di1noN1BrMpKUIBRW7'
        },
        {
          name: 'Frogs',
          imageSrc: require('~/assets/images/frogs.png'),
          soundSrc: 'https://docs.google.com/uc?export=download&id=1pMKQyKOh9-uzA2HtUCLt8m-X4Zr2t2sK'
        },
        {
          name: 'Chimes',
          imageSrc: require('~/assets/images/chimes.png'),
          soundSrc: 'https://docs.google.com/uc?export=download&id=1zZYnZuZL610Sfh6xuQQ2_xqB-3bh6wkb'
        },
        {
          name: 'Sleeping',
          imageSrc: require('~/assets/images/sleeping.png'),
          soundSrc: 'https://docs.google.com/uc?export=download&id=1ZFLfZLrLVHq5-aUinz_a_hKQasH9ffan'
        },
        {
          name: 'Coffee House',
          imageSrc: require('~/assets/images/coffee-house.png'),
          soundSrc: 'https://docs.google.com/uc?export=download&id=1fSCEyhfIxNoBB7j4pqQ8o_Bap2RqGXIX'
        },
        {
          name: 'Cooking',
          imageSrc: require('~/assets/images/cooking.png'),
          soundSrc: 'https://docs.google.com/uc?export=download&id=197u6_P-naEiHBMVG9FNl-kwgWbnYmVWL'
        },
        {
          name: 'Market',
          imageSrc: require('~/assets/images/market.png'),
          soundSrc: 'https://docs.google.com/uc?export=download&id=1S0z-2G4NeXCn-Ac2PZwejiROKAcJDltC'
        },
        {
          name: 'Yoga',
          imageSrc: require('~/assets/images/yoga.png'),
          soundSrc: 'https://docs.google.com/uc?export=download&id=1Vm6wLQzl1gAWr4s0SuxxZWGh3vbU03U-'
        },
        {
          name: 'Coding',
          imageSrc: require('~/assets/images/coding.png'),
          soundSrc: 'https://docs.google.com/uc?export=download&id=1vBQVNcd17CxHfN8oRc4cPMrx_mJrKsKS'
        },
        {
          name: 'Piano',
          imageSrc: require('~/assets/images/piano.png'),
          soundSrc: 'https://docs.google.com/uc?export=download&id=1BCdhLOywPuWfuxt30T76ny7cH0sfD_dH'
        },
        {
          name: 'flute',
          imageSrc: require('~/assets/images/flute.png'),
          soundSrc: 'https://docs.google.com/uc?export=download&id=1d37tSI07zBAqwsu0FopvdfaaiMHgY-uC'
        },
        {
          name: 'Guitar',
          imageSrc: require('~/assets/images/guitar.png'),
          soundSrc: 'https://docs.google.com/uc?export=download&id=1xpGZGFeD5onhhvBhfUsJVS9sFKG-4Oxl'
        },
        {
          name: 'Jazz',
          imageSrc: require('~/assets/images/jazz.png'),
          soundSrc: 'https://docs.google.com/uc?export=download&id=1w20Idz6ELZ838o1j94YbkABNcqasNeX3'
        },
        {
          name: 'Disc Player',
          imageSrc: require('~/assets/images/disc-player.png'),
          soundSrc: 'https://docs.google.com/uc?export=download&id=10CyiiYqvadI50i3HzC2S76O-pUMBBeLR'
        },
        {
          name: 'Beatbox',
          imageSrc: require('~/assets/images/beatbox.png'),
          soundSrc: 'https://docs.google.com/uc?export=download&id=11stXdybAZy2lllhGmjnypvNGJrh_ncV9'
        },
        {
          name: 'EDM',
          imageSrc: require('~/assets/images/edm.png'),
          soundSrc: 'https://docs.google.com/uc?export=download&id=1tCQWTlUFsqDIbGcAT8UiCEPexeSVxovT'
        },
        {
          name: 'Opera',
          imageSrc: require('~/assets/images/opera.png'),
          soundSrc: 'https://docs.google.com/uc?export=download&id=16gxd6fBa8pnCF22wCz0FqJAintjjtILB'
        },
        {
          name: 'Theater',
          imageSrc: require('~/assets/images/theater.png'),
          soundSrc: 'https://docs.google.com/uc?export=download&id=15sXNZlki9RZrg5C2S1Y3TVLkLHZgRpjj'
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

      document.getElementById(`player-${sound.id}`).play()
    },
    /**
     * remove selected sound out the selected sound list
     * @param {object} sound - sound information
     * @return {void}
     */
    removeSound(sound) {
      const index = this.selectedSounds.findIndex((item) => item.id === sound.id)
      this.selectedSounds.splice(index, 1)

      const player = document.getElementById(`player-${sound.id}`)
      player.pause()
      player.currentTime = 0
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
