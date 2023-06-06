<script>
import Hero from '../components/Hero.vue';
import NavbarComponent from '../components/Navbar.vue';

export default {
    components: {
        NavbarComponent,
        Hero
    }
}
</script>

<template>
    <NavbarComponent />
    <Hero />
</template>