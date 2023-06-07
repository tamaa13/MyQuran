<script>
import CardDetail from '../components/CardDetail.vue';
import FooterComponent from '../components/Footer.vue';
import Navbar from '../components/Navbar.vue';

export default {
    components: {
        Navbar,
        FooterComponent,
        CardDetail
    }
}
</script>

<template>
    <Navbar />
    <!-- <div class="flex items-center justify-center mx-auto my-20 w-10/12">
        <div class="h-screen px-4 pb-24 overflow-auto md:px-6">
            <div class="flex flex-wrap gap-5"> -->
                <CardDetail />
            <!-- </div>
        </div>
    </div> -->
    <FooterComponent />
</template>