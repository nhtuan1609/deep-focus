<template>
  <div>
    <!-- overlay loading -->
    <overlay-loading
      v-if="isShowOverlayLoading"
      :is-show="isShowOverlayLoading"
      @onClose="isShowOverlayLoading = false"
    ></overlay-loading>

    <template v-else>
      <!-- dark mode button -->
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

      <!-- selected sound list -->
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

      <!-- sound list -->
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
              <audio :id="`player-${sound.id}`" loop>
                <source :src="sound.soundSrc" />
              </audio>
            </v-card>
          </template>
          <span>{{ sound.name }}</span>
        </v-tooltip>
      </div>

      <!-- confirm continue play dialog-->
      <v-dialog v-model="isShowConfirmPlaySelectedSoundsDialog" width="500" persistent>
        <v-card color="var(--color-card)">
          <v-card-title class="text-h5" style="color: var(--color-text)">Confirm Dialog</v-card-title>
          <v-card-text style="color: var(--color-text)"
            >Would you like to continue play selected sound list?</v-card-text
          >
          <v-divider style="border-color: var(--color-border)"></v-divider>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="var(--color-text)" text @click="rejectPlaySelectedSounds">Reject</v-btn>
            <v-btn color="success" text @click="acceptPlaySelectedSounds">Accept</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

      <!-- notification message -->
      <v-snackbar v-model="isShowNotification" right color="error" light>
        <span style="color: white">{{ notificationMessage }}</span>
        <template #action="{ attrs }">
          <v-btn color="white" icon v-bind="attrs" @click="isShowNotification = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </template>
      </v-snackbar>
    </template>
  </div>
</template>

<script>
import { THEME } from '~/constants/theme.js'
import OverlayLoading from '~/components/OverlayLoading.vue'

export default {
  name: 'HomePage',
  components: { OverlayLoading },
  data() {
    return {
      isDarkMode: false,
      selectedSounds: [],
      isShowConfirmPlaySelectedSoundsDialog: false,
      isShowNotification: false,
      notificationMessage: '',
      isShowOverlayLoading: true
    }
  },
  computed: {
    sounds() {
      return this.$store.getters['sounds/getSounds']
    }
  },
  watch: {
    isDarkMode() {
      setTimeout(() => {
        this.setColorTheme()
      }, 100)
    }
  },
  beforeMount() {
    this.loadDataFromLocalStorage()
    window.addEventListener('beforeunload', this.saveDataToLocalStorage)
  },
  beforeDestroy() {
    this.saveDataToLocalStorage()
  },
  methods: {
    /**
     * set color theme
     * @return {void}
     */
    setColorTheme() {
      const color = this.isDarkMode ? { ...THEME.DARK } : { ...THEME.LIGHT }
      this.$store.dispatch('preferences/updateColor', { color })
    },
    /**
     * change to dark mode or light mode
     * @return {void}
     */
    toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode
    },
    /**
     * play sound based on id
     * @param {string} id - sound id
     * @return {void}
     */
    playSound(soundId) {
      document.getElementById(`player-${soundId}`)?.play()
    },
    /**
     * stop sound based on id
     * @param {string} id - sound id
     * @return {void}
     */
    stopSound(soundId) {
      const player = document.getElementById(`player-${soundId}`)
      if (!player) return
      player.pause()
      player.currentTime = 0
    },
    /**
     * add selected sound to the selected sound list
     * @param {object} sound - sound information
     * @return {void}
     */
    addSound(sound) {
      if (this.selectedSounds.length === 5) {
        this.notificationMessage = 'You cannot select over 5 sounds!'
        this.isShowNotification = true
        setTimeout(() => {
          this.isShowNotification = false
        }, 3000)
        return
      }
      this.selectedSounds.push(sound)
      this.playSound(sound.id)
    },
    /**
     * remove selected sound out the selected sound list
     * @param {object} sound - sound information
     * @return {void}
     */
    removeSound(sound) {
      const index = this.selectedSounds.findIndex((item) => item.id === sound.id)
      this.selectedSounds.splice(index, 1)
      this.stopSound(sound.id)
    },
    /**
     * play all selected sounds
     * @param {string} id - sound id
     * @return {void}
     */
    playSelectedSounds() {
      this.selectedSounds.forEach((sound) => {
        this.playSound(sound.id)
      })
    },
    /**
     * close confirm dialog and play selected sounds
     * @return {void}
     */
    acceptPlaySelectedSounds() {
      this.isShowConfirmPlaySelectedSoundsDialog = false
      this.playSelectedSounds()
    },
    /**
     * close confirm dialog and clear selected sounds
     * @return {void}
     */
    rejectPlaySelectedSounds() {
      this.isShowConfirmPlaySelectedSoundsDialog = false
      this.selectedSounds = []
    },
    /**
     * load data from local storage
     * @return {void}
     */
    loadDataFromLocalStorage() {
      try {
        const data = localStorage.getItem('deep-focus')
        const { isDarkMode, selectedSoundIds } = data ? JSON.parse(data) : {}
        this.isDarkMode = isDarkMode ?? false
        this.selectedSounds = selectedSoundIds ? this.sounds.filter((sound) => selectedSoundIds.includes(sound.id)) : []
        if (this.selectedSounds.length > 0) this.isShowConfirmPlaySelectedSoundsDialog = true
      } catch (e) {
        localStorage.removeItem('deep-focus')
      }
    },
    /**
     * save data to local storage
     * @return {void}
     */
    saveDataToLocalStorage() {
      const parsedData = JSON.stringify({
        isDarkMode: this.isDarkMode,
        selectedSoundIds: this.selectedSounds.map((sound) => sound.id)
      })
      localStorage.setItem('deep-focus', parsedData)
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
