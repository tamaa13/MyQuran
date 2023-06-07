<script>
import { mapActions, mapState } from 'pinia';
import { useMainStore } from '../stores/main';

export default {
    computed: {
        ...mapState(useMainStore, ['details', 'sounds']),
        audioURL() {
            return this.sounds.audio_url;
        },
    },
    data() {
        return {
            audio: null,
            isPlaying: false
        };
    },
    created() {
        console.log(this.$route.params.id);
        this.fetchDetail(+this.$route.params.id);
        this.fetchSound(+this.$route.params.id);
    },
    methods: {
        ...mapActions(useMainStore, ['fetchDetail', 'fetchSound']),
        toggleAudio() {
            if (this.audioURL) {
                if (!this.audio) {
                    this.audio = new Audio(this.audioURL);
                    this.audio.play();
                    this.isPlaying = true;
                } else {
                    if (this.isPlaying) {
                        this.audio.pause();
                        this.isPlaying = false;
                    } else {
                        this.audio.play();
                        this.isPlaying = true;
                    }
                }
            }
        },
    },
};
</script>

<template>
    <div class="w-auto">
        <div class="ml-[85px] mb-2">
            <label class="swap">

                <input type="checkbox" />

                <svg @click="toggleAudio" class="fill-current" xmlns="http://www.w3.org/2000/svg" width="25" height="25"
                    viewBox="0 0 24 24">
                    <template v-if="!isPlaying">
                        <path
                            d="M14,3.23V5.29C16.89,6.15 19,8.83 19,12C19,15.17 16.89,17.84 14,18.7V20.77C18,19.86 21,16.28 21,12C21,7.72 18,4.14 14,3.23M16.5,12C16.5,10.23 15.5,8.71 14,7.97V16C15.5,15.29 16.5,13.76 16.5,12M3,9V15H7L12,20V4L7,9H3Z" />
                    </template>
                    <template v-else>
                        <path
                            d="M3,9H7L12,4V20L7,15H3V9M16.59,12L14,9.41L15.41,8L18,10.59L20.59,8L22,9.41L19.41,12L22,14.59L20.59,16L18,13.41L15.41,16L14,14.59L16.59,12Z" />
                    </template>
                </svg>
            </label>
        </div>

        <div class="flex items-center justify-center mx-auto mb-20 w-11/12">
            <div class="h-screen px-4 pb-24 overflow-auto md:px-6">
                <div class="flex flex-wrap gap-5">
                    <div v-for="detail in details" :key="detail.id" class="flex shadow w-[6000px] rounded-md bg-base-300">
                        <div class="stat">
                            <div class="stat-title overflow-auto line-clamp-none text-end text-base">{{ detail.text_indopak
                            }}</div>
                            <div class="stat-value text-end">{{ detail.verse_key }}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
