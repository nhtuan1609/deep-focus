<template>
  <div>
    <iframe id="video" frameborder="0" allow="autoplay"></iframe>
    <div id="video-modal"></div>

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
          videoSrc: 'https://www.youtube.com/embed/Nmmsl2X_--U?controls=0&autoplay=1&loop=1&amp;start=500'
        },
        {
          name: 'Fire',
          imageSrc: require('~/assets/images/bonfire.png'),
          videoSrc: 'https://www.youtube.com/embed/bbLDfueL7eU?controls=0&autoplay=1&loop=1&amp;start=500'
        },
        {
          name: 'Wave',
          imageSrc: require('~/assets/images/ocean-waves.png'),
          videoSrc: 'https://www.youtube.com/embed/bn9F19Hi1Lk?controls=0&autoplay=1&loop=1&amp;start=500'
        },
        {
          name: 'Rain',
          imageSrc: require('~/assets/images/heavy-rain.png'),
          videoSrc: 'https://www.youtube.com/embed/-uwPACnBMVc?controls=0&autoplay=1&loop=1&amp;start=500'
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
      }, 5000)
    },
    pauseVideo() {
      this.isPlaying = false
      const videoElement = document.getElementById('video')
      videoElement.setAttribute('src', '')
      videoElement.classList.remove('display')
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
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity 0.5s linear;
  &.display {
    opacity: 1;
  }
}

#video-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
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
