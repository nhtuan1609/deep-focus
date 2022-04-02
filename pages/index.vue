<template>
  <div>
    <div class="sound__list selected">
      <v-hover v-for="(sound, index) in selectedSounds" v-slot="{ hover }" :key="index">
        <v-tooltip bottom>
          <template #activator="{ on, attrs }">
            <v-card
              light
              :elevation="hover ? 6 : 1"
              :class="['sound__item', { 'on-hover': hover }]"
              v-bind="attrs"
              v-on="on"
              @click="removeSound(sound)"
            >
              <v-img :src="sound.imageSrc" :alt="sound.name" :max-width="50"></v-img>
            </v-card>
          </template>
          <span>{{ sound.name }}</span>
        </v-tooltip>
      </v-hover>
    </div>

    <div class="sound__list">
      <v-hover v-for="(sound, index) in sounds" v-slot="{ hover }" :key="index">
        <v-tooltip bottom>
          <template #activator="{ on, attrs }">
            <v-card
              light
              :elevation="hover ? 6 : 1"
              :class="['sound__item', { 'on-hover': hover }]"
              :disabled="!!selectedSounds.find((item) => item.id === sound.id)"
              v-bind="attrs"
              v-on="on"
              @click="addSound(sound)"
            >
              <v-img :src="sound.imageSrc" :alt="sound.name" :max-width="100"></v-img>
            </v-card>
          </template>
          <span>{{ sound.name }}</span>
        </v-tooltip>
      </v-hover>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  data() {
    return {
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
    addSound(sound) {
      this.selectedSounds.push(sound)
    },
    removeSound(sound) {
      const index = this.selectedSounds.findIndex((item) => item.id === sound.id)
      this.selectedSounds.splice(index, 1)
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

    &.selected {
      min-height: 80px;
      gap: 16px;
      margin-bottom: 100px;
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
