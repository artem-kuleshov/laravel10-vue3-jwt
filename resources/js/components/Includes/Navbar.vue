<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item" v-if="!this.accessToken">
                    <router-link :to="{name:'users.login'}" class="nav-link">Login</router-link>
                </li>
                <li class="nav-item" v-if="!this.accessToken">
                    <router-link :to="{name:'users.registration'}" class="nav-link">Registration</router-link>
                </li>
                <template v-if="this.accessToken">
                    <li class="nav-item" >
                        <router-link :to="{name:'users.personal'}" class="nav-link">Personal</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{name:'fruits.index'}" class="nav-link">List</router-link>
                    </li>
                    <li class="nav-item">
                        <a @click="logout" href="javascript:void(0)" class="nav-link">Logout</a>
                    </li>
                </template>
            </ul>
        </div>
    </nav>
</template>

<script>
import api from "../../api";
export default {
    name: "Navbar",
    data() {
        return {
            accessToken: null
        }
    },

    mounted() {
        this.getAccessToken()
    },

    methods: {
        getAccessToken() {
            this.accessToken = localStorage.getItem('access_token')
        },
        setAccessToken(token) {
            this.accessToken = token
        },
        logout() {
            api.post('/api/auth/logout')
            .then(res => {
                localStorage.removeItem('access_token')
                this.setAccessToken(null)
                this.$router.push({ name: 'users.login' })
            })
        }
    }
}
</script>

<style scoped>

</style>
