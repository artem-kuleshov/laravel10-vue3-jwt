<template>
    <input v-model="email" type="email" class="form-control mb-3 mt-3" placeholder="email" autofocus>
    <input v-model="password" type="password" class="form-control mb-3" placeholder="password">
    <input @click="login" type="button" class="btn btn-primary" value="Login">
</template>

<script>
export default {
    name: "Login",
    data() {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        login() {
            axios.post('/api/auth/login', {email: this.email, password: this.password})
                .then(res => {
                    localStorage.setItem('access_token', res.data.access_token)
                    this.$router.push({ name: 'users.personal' })

                    const appComponent = this.$parent.$parent
                    appComponent.$refs.navbar.setAccessToken(res.data.access_token)
                })
        }
    }
}
</script>

<style scoped>

</style>
