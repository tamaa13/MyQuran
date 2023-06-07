<script>
import 'animate.css'
import { mapActions } from 'pinia';
import { useMainStore } from '../stores/main';
export default {
    data() {
        return {
            input: {
                email: '',
                password: ''
            }
        }
    }
    ,
    methods: {
        ...mapActions(useMainStore, ['login'])
    }
}
</script>

<template>
    <div class="hero min-h-screen bg-base-200">
        <div class="hero-content flex-col lg:flex-row-reverse">
            <div class="text-center lg:text-left ml-8">
                <div class="w-48 animate__animated animate__slideInDown flex items-center text-center">
                    <img src="https://cdn.pixabay.com/photo/2020/01/08/20/17/building-4751158_1280.png" alt="">
                </div>
                <h1 class="text-5xl font-bold animate__animated animate__slideInUp">Ngaji now!</h1>
                <p class="py-6 animate__animated animate__slideInUp">Mari kita jadikan Al-Qur'an sebagai teman setia dalam
                    kehidupan kita. Dengan mengaji, kita
                    akan memperoleh hikmah, kebijaksanaan, dan petunjuk dari Allah yang tak ternilai harganya.</p>
            </div>
            <form @submit.prevent="login(input)" action="" class="hover:scale-105">
                <div
                    class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 animate__animated animate__slideInLeft ">
                    <div class="card-body">
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Email</span>
                            </label>
                            <input v-model="input.email" type="text" placeholder="email" class="input input-bordered" />
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Password</span>
                            </label>
                            <input v-model="input.password" type="password" placeholder="password"
                                class="input input-bordered" />
                            <label class="label">
                                <a @click.prevent="this.$router.push('/register')" href="#"
                                    class="label-text-alt link link-hover">Don't have account?</a>
                            </label>
                        </div>
                        <div class="form-control mt-6">
                            <button type="submit" class="btn btn-primary">Login</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>