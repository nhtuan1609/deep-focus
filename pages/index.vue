<template>
  <div>
    <video id="video" muted loop />

    <div class="videos">
      <v-hover v-for="(video, index) in videos" v-slot="{ hover }" :key="index">
        <v-card
          light
          :elevation="hover ? 6 : 1"
          :class="['videos__item', { 'on-hover': hover }]"
          @click="selectVideo(video)"
        >
          <v-img :src="video.imageSrc" :alt="video.name" :max-width="200"></v-img>
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
      isPlaying: false
    }
  },
  computed: {
    videos() {
      return [
        {
          name: 'Birds',
          imageSrc: require('~/assets/images/birds.png'),
          videoSrc: require('~/assets/videos/birds.mp4')
        },
        {
          name: 'Fire',
          imageSrc: require('~/assets/images/bonfire.png'),
          videoSrc: require('~/assets/videos/bonfire.mp4')
        },
        {
          name: 'Wave',
          imageSrc: require('~/assets/images/ocean-waves.png'),
          videoSrc: require('~/assets/videos/ocean-waves.mp4')
        },
        {
          name: 'Rain',
          imageSrc: require('~/assets/images/heavy-rain.png'),
          videoSrc: require('~/assets/videos/heavy-rain.mp4')
        }
      ]
    }
  },
  methods: {
    playVideo(src) {
      this.isPlaying = true
      const videoElement = document.getElementById('video')
      videoElement.setAttribute('src', src)
      setTimeout(() => {
        const videoElement = document.getElementById('video')
        videoElement.classList.add('display')
        videoElement.play()
      }, 1000)
    },
    pauseVideo() {
      this.isPlaying = false
      const videoElement = document.getElementById('video')
      videoElement.classList.remove('display')
      videoElement.pause()
    },
    selectVideo(video) {
      this.isPlaying ? this.pauseVideo() : this.playVideo(video.videoSrc)
    }
  }
}
</script>

<style lang="scss" scoped>
#video {
  position: fixed;
  right: 0;
  bottom: 0;
  width: 100%;
  opacity: 0;
  transition: opacity 0.5s linear;
  &.display {
    opacity: 1;
  }
}

.videos {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 32px;

  &__item {
    cursor: pointer;
    padding: 8px;
    transition: opacity 0.3s linear, box-shadow 0.3s linear;

    &:not(.on-hover) {
      opacity: 0.7;
    }
  }
}
</style>
