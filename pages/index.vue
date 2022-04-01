<template>
  <div>
    <iframe id="video" frameborder="0" allow="autoplay"></iframe>
    <div class="video__modal"></div>

    <v-btn class="button__dashboard" light large icon color="#333" elevation="2" @click="isShowVideos = !isShowVideos">
      <v-icon>mdi-view-dashboard</v-icon>
    </v-btn>

    <div v-if="isShowVideos" class="videos">
      <v-hover v-for="(video, index) in videos" v-slot="{ hover }" :key="index">
        <v-card
          light
          :elevation="hover ? 6 : 1"
          :class="['videos__item', { 'on-hover': hover }, { selected: video.name === selectedVideo.name }]"
          @click="selectVideo(video)"
        >
          <v-img :src="video.imageSrc" :alt="video.name" :max-width="200"></v-img>
        </v-card>
      </v-hover>
    </div>

    <div v-if="isLoading" class="loading__modal">
      <v-progress-linear :value="loadingProgress" color="blue-grey" height="16">
        <template #default="{ value }">
          <strong>{{ Math.ceil(value) }}%</strong>
        </template>
      </v-progress-linear>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  data() {
    return {
      isPlaying: false,
      isShowVideos: true,
      selectedVideo: {},
      isLoading: false,
      loadingProgress: 0,
      loadingInterval: undefined
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
  watch: {
    loadingProgress() {
      if (this.loadingProgress < 100) return
      this.isLoading = false
      this.loadingProgress = 0
      clearInterval(this.loadingInterval)

      const videoElement = document.getElementById('video')
      videoElement.classList.add('display')
      this.isShowVideos = false
    }
  },
  methods: {
    playVideo() {
      this.isPlaying = true
      const videoElement = document.getElementById('video')
      videoElement.setAttribute('src', this.selectedVideo.videoSrc)
      this.startLoading()
    },
    pauseVideo() {
      this.isPlaying = false
      const videoElement = document.getElementById('video')
      videoElement.setAttribute('src', '')
      videoElement.classList.remove('display')
    },
    selectVideo(video) {
      if (video.name === this.selectedVideo.name) {
        this.selectedVideo = {}
        this.pauseVideo()
      } else {
        this.selectedVideo = video
        this.playVideo()
      }
    },
    startLoading() {
      this.loadingProgress = 0
      this.isLoading = true
      this.loadingInterval = setInterval(() => {
        this.loadingProgress++
      }, 100)
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

.video__modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.button__dashboard {
  position: fixed;
  top: 12px;
  right: 12px;
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

    &.selected {
      background-color: #777;
    }
  }
}

.loading__modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 32px;
  background-color: var(--color-background);
}
</style>
