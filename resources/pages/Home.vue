<template>
    <div>
        <hereo />
        <type />
        <disc />
        <br><br>
    </div>
</template>

<script>

import hereo from '../components/hereo.vue' 
import type from '../components/types.vue'
import disc from '../components/disc.vue'
    export default{
        name: 'Home',

        components: {
            hereo, 
            type,
            disc,
        }
    }
</script>