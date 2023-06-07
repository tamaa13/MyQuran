<script>
import { mapActions, mapState } from 'pinia';
import { useMainStore } from '../stores/main';
import Loader from './Loader.vue';


export default {
    components: {
        Loader
    },
    computed: {
        ...mapState(useMainStore, ['modalData'])
    },
    methods: {
        ...mapActions(useMainStore, ['modal'])
    }
}
</script>

<template>
    <div
        class="hero w-11/12 bg-base-300 flex mx-auto hover:scale-105 mt-32 rounded-md drop-shadow-2xl animate__animated animate__zoomInRight">
        <div class="hero-content flex-col lg:flex-row-reverse">
            <div>
                <h1 class="text-5xl font-bold">Butuh kata-kata mutiara ?</h1>
                <p class="py-6">{{ modalData.result }}</p>
                <button class="btn btn-primary" @click.prevent="modal()">Kata-Kata buat kamu</button>
            </div>
        </div>
    </div>
</template>