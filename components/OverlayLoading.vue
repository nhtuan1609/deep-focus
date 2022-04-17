<template>
  <v-overlay class="overlay" :value="isShow" color="var(--color-background)" opacity="1">
    <v-progress-linear :value="progressValue" color="blue-grey" height="25">
      <template #default="{ value }">
        <strong>{{ Math.ceil(value) }}%</strong>
      </template>
    </v-progress-linear>
  </v-overlay>
</template>

<script>
export default {
  name: 'OverlayLoading',
  props: {
    isShow: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      progressValue: 0,
      progressTimer: undefined
    }
  },
  watch: {
    isShow() {
      if (this.isShow) this.startLoading()
    }
  },
  created() {
    if (this.isShow) this.startLoading()
  },
  methods: {
    /**
     * start loading progress bar
     * @return {void}
     */
    startLoading() {
      this.progressTimer = setInterval(() => {
        this.progressValue++
        if (this.progressValue >= 100) this.stopLoading()
      }, 50)
    },
    /**
     * stop loading progress bar
     * @return {void}
     */
    stopLoading() {
      this.$emit('onClose')
      clearInterval(this.progressTimer)
      this.progressValue = 0
    }
  }
}
</script>

<style lang="scss" scoped>
.overlay ::v-deep .v-overlay__content {
  width: 100%;
  padding: 0 32px;
}
</style>
