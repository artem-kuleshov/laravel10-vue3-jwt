<template>
    <div class="container">
        <Navbar ref="navbar" />
        <div>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import Navbar from "./Includes/Navbar.vue";
export default {
    name: "App",
    components: {Navbar}
}
</script>

<style scoped>

</style>
