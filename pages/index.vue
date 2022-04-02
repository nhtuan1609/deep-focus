<template>
  <div>
    <div class="sound__list selected">
      <v-hover v-for="(sound, index) in selectedSounds" v-slot="{ hover }" :key="index">
        <v-card
          light
          :elevation="hover ? 6 : 1"
          :class="['sound__item', { 'on-hover': hover }]"
          @click="removeSound(sound)"
        >
          <v-img :src="sound.imageSrc" :alt="sound.name" :max-width="50"></v-img>
        </v-card>
      </v-hover>
    </div>

    <div class="sound__list">
      <v-hover v-for="(sound, index) in sounds" v-slot="{ hover }" :key="index">
        <v-card
          light
          :elevation="hover ? 6 : 1"
          :class="['sound__item', { 'on-hover': hover }]"
          :disabled="!!selectedSounds.find((item) => item.id === sound.id)"
          @click="addSound(sound)"
        >
          <v-img :src="sound.imageSrc" :alt="sound.name" :max-width="200"></v-img>
        </v-card>
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
      return [
        {
          id: '1',
          name: 'Birds',
          imageSrc: require('~/assets/images/birds.png'),
          soundSrc: ''
        },
        {
          id: '2',
          name: 'Bonfire',
          imageSrc: require('~/assets/images/bonfire.png'),
          soundSrc: ''
        },
        {
          id: '3',
          name: 'Ocean Waves',
          imageSrc: require('~/assets/images/ocean-waves.png'),
          soundSrc: ''
        },
        {
          id: '4',
          name: 'Heavy Rain',
          imageSrc: require('~/assets/images/heavy-rain.png'),
          soundSrc: ''
        },
        {
          id: '5',
          name: 'Wind',
          imageSrc: require('~/assets/images/wind.png'),
          soundSrc: ''
        },
        {
          id: '6',
          name: 'Waterfall',
          imageSrc: require('~/assets/images/waterfall.png'),
          soundSrc: ''
        },
        {
          id: '7',
          name: 'Chimes',
          imageSrc: require('~/assets/images/chimes.png'),
          soundSrc: ''
        },
        {
          id: '8',
          name: 'Frogs',
          imageSrc: require('~/assets/images/frogs.png'),
          soundSrc: ''
        }
      ]
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
      margin-bottom: 64px;
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
