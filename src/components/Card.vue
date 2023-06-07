<script>
import { mapActions, mapState } from 'pinia';
import { useMainStore } from '../stores/main';

export default {
    computed: {
        ...mapState(useMainStore, ['surah'])
    },
    created() {
        this.fetchSurah()
    },
    methods: {
        ...mapActions(useMainStore, ['fetchSurah']),
        async goDetail(id) {
            this.$router.push(`${id}`)
        }
    }
}
</script>

<template>
    <div v-for="allsurah in surah" :key="allsurah.id" class="card w-48 bg-base-300 shadow-xl hover:scale-105 flex mx-auto">
        <div class="card-body flex gap-4">
            <h2 class="card-title">{{ allsurah.name_simple }} ({{ allsurah.verses_count }} Ayat)</h2>
            <h2 class="card-title">{{ allsurah.name_arabic }} ({{ allsurah.translated_name.name }})</h2>
            <p></p>
            <div class="card-actions justify-end">
                <button @click.prevent="goDetail(allsurah.id)" class="btn btn-primary">Baca</button>
            </div>
        </div>
    </div>
</template>