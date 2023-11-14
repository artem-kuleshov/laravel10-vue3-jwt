<template>
    <form>
        <input v-model="email" type="email" class="form-control mb-3 mt-3" placeholder="email" autofocus>
        <input v-model="password" type="password" class="form-control mb-3" placeholder="password">
        <p v-if="error" class="text-danger">{{ error }}</p>
        <input @click="login" type="button" class="btn btn-primary" value="Login">
    </form>
</template>

<script>
export default {
    name: "Login",
    data() {
        return {
            email: '',
            password: '',
            error: ''
        }
    },
    methods: {
        login() {
            this.error = ''

            axios.post('/api/auth/login', {email: this.email, password: this.password})
                .then(res => {
                    localStorage.setItem('access_token', res.data.access_token)
                    this.$router.push({ name: 'users.personal' })

                    const appComponent = this.$parent.$parent
                    appComponent.$refs.navbar.setAccessToken(res.data.access_token)
                })
                .catch(error => {
                    if (error.response.status === 422) {
                        this.error = error.response.data.error
                    }
                })
        }
    }
}
</script>

<style scoped>

</style>
