<template>
    <table class="table" v-if="fruits">
        <thead>
        <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="fruit in fruits">
            <th scope="row">{{  fruit.id }}</th>
            <td>{{  fruit.name }}</td>
            <td>{{  fruit.price }} руб.</td>
        </tr>
        </tbody>
    </table>
</template>

<script>
import api from "../../api";

export default {
    name: "Index",
    data() {
        return {
            fruits: null
        }
    },
    mounted() {
        this.getFruits();
    },
    methods: {
        async getFruits() {
            var data = await api.get('/api/fruits');
            this.fruits = data.data.data;
        }
    }
}
</script>

<style scoped>

</style>
