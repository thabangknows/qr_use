<template>
    <div class="hereo">
        <h1 style="padding:11%; font-size: 65px; text-shadow: 1px 1px 3px white">Get your own QR Code with just few
            clicks, it's free</h1>
        <br>

        <div class="container text-center">
            <div class="row">

                <div class="col">


                    <div style="color: skyblue;">
                        <span style=" font-size: 65px; text-shadow: 1px 1px 11px darkblue">
                            <vue3-autocounter ref='counter' :startAmount='0' :endAmount='326' :duration='3' suffix='+' :autoinit='true' @finished='alert(`Counting finished!`)'/>
                        </span>
                        
                        <h6 style="color:skyblue">codes generated</h6>
                    </div>




                    <br>
                    <router-link to="Generate">
                        <button style="text-align:center;" type="button" class="btn btn-outline-info"><strong> Generate
                                now</strong></button>

                    </router-link>
                </div>

            </div>
        </div>
        <br>
    </div>

</template>

<script>
    import Vue3autocounter from 'vue3-autocounter';

export default {
    name: 'hereo',
    components: {
        'vue3-autocounter': Vue3autocounter
    },
    methods: {
        theFormat(number) {
            return number.toFixed(2);
        },
        completed() {
            console.log('Animation ends!');
        },
        playAnimation() {
            this.$refs.number2.play()
        }
    }
}
</script>

<style>
.hereo {
    background-image: url("../images/img3.png");
    background-size: cover;

}
</style>