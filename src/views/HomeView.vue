<script>
import Card from '../components/Card.vue';
import FooterComponent from '../components/Footer.vue';
import Hero from '../components/Hero.vue';
import NavbarComponent from '../components/Navbar.vue';

export default {
    components: {
        NavbarComponent,
        Hero,
        Card,
        FooterComponent
    }
}
</script>

<template>
    <NavbarComponent />
    <Hero />
    <span></span>
    <hr class="flex mx-auto w-full mt-28">
    <div class="flex items-center justify-center mx-auto my-20 w-10/12">
        <div class="h-screen px-4 pb-24 overflow-auto md:px-6">
            <div class="flex flex-wrap gap-5">
                <Card />
            </div>
        </div>
    </div>
    <FooterComponent />
</template>