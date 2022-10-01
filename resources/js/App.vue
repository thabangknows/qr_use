<template>
    <div>
        <navbar />
        <router-view></router-view>
        <fter />
    </div>
</template>

<script>
    import navbar from '../components/navbar.vue'
    import fter from '../components/fter.vue'
    import Home from '../pages/Home.vue';

    export default{
        name: 'App',

        components: {
    navbar,
    fter,
    Home
}
    }
</script>