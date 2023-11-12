<template>
    <div class="container">
        <router-link :to="{name:'users.login'}">Login</router-link>
        <router-link :to="{name:'users.registration'}">Registration</router-link>
        <router-link :to="{name:'fruits.index'}">List</router-link>

        <div>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
export default {
    name: "App"
}
</script>

<style scoped>

</style>
