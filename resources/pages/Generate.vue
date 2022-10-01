<template>

    <div>
        <div class="gen">
            <h1 style="padding:5%; font-size: 65px; text-shadow: 1px 1px 3px skyblue; text-align:center">Create your
                custom QR Code</h1>

            <div style="padding-left: 11%; padding-right: 11%;" class="card">
                <div v-if="!isLoading">
                    <div class="card-body">
                        <div class="card" aria-hidden="true">

                            <span style="text-align:center; padding:5px" class="card-img-top" alt="...">

                                <div v-if="!loaded">
                                    <img src="../images/logo.png" alt="">
                                    <div class="card-body">
                                        <h5 class="card-title placeholder-glow">
                                            <span class="placeholder col-6"></span>
                                        </h5>
                                        <p class="card-text placeholder-glow">
                                            <span class="placeholder col-12"></span>


                                        </p>
                                        <a href="#" tabindex="-1"
                                            class="btn btn-primary disabled placeholder col-12"></a>
                                    </div>
                                </div>
                                <div class="text-center" style="text-align:center" v-else>
                                    <br>
                                    <div class="text-center" style="padding:2px; height:100%; width:210px; margin:auto; background-color:rgba(236, 236, 236, 0.089)"
                                        ref="printcontent">
                                        <span style="background-color:black; color:white; padding:12px; margin:5px; border-radius:12px; font-weight:700; font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif; text-shadow: -1px -1px 12px yellow ;font-size:12px"> SCAN ME</span>
                                            <qrcode-vue class="qrstyle" :value="value" :size="210" level="H" />

                                        
                                       
                                    </div>

                                    <div class="card-body">
                                        <h5 class="card-title placeholder-glow">
                                            <span class="col-6">THIS CODE GOES TO</span>
                                        </h5>
                                        <p class="card-text placeholder-glow">
                                            <span class="col-12">{{value}}</span>


                                        </p>

                                       
                                        <button @click="getImg" tabindex="-1" class="btn btn-outline-primary "><strong>
                                                Download
                                            </strong></button>
                                    </div>
                                </div>


                            </span>


                        </div>
                    </div>

                    <div class="mb-3">
                        <p>This input field is dynamic, any type of content to be converted into QR Code is accepted.
                        </p>
                        <input type="email" required class="form-control" id="exampleFormControlInput1"
                            v-model="pholder" placeholder="link, phone, email ..."><br>
                        <button @click="getqr" href="#" tabindex="-1"
                            class="btn btn-primary col-12"><strong>Generate</strong></button>

                    </div>
                </div>
                <div v-else>
                    <div style="margin:15%;" class="text-center">
                        <div class="spinner-grow text-info" style="width: 13rem; height: 13rem;" role="status">

                        </div>
                    </div>

                </div>
            </div>



        </div>
        <whyqr />
    </div>
</template>
<script>
import whyqr from '../components/whyqr.vue'
import QrcodeVue from 'qrcode.vue'
import html2canvas from 'html2canvas'

export default {
    name: 'Generate',
    components: {
        whyqr,
        QrcodeVue,
    },
    data() {
        return {
            isLoading: false,
            loaded: false,
            value: '',
            pholder: '',

            colorFrame: 'R',
        }
    },

    mounted() {
        window.scrollTo(0, 0)
    },

    methods: {
        getqr() {
            this.isLoading = true;
            setTimeout(() => {

                window.scrollTo(0, 220);

                if (this.pholder.length < 4) {
                    alert('Please enter valid input');
                    this.isLoading = !this.isLoading;
                    return;
                }
                this.value = this.pholder;
                this.loaded = true;
                this.isLoading = !this.isLoading;

            }, 500)
        },



        async getImg() {
            const el = this.$refs.printcontent;
            const options = {
                type: "dataURL"
            };
            const printCanvas = await html2canvas(el, options);

            const link = document.createElement("a");
            link.setAttribute("download", this.value + '_QRcode' + ".png");
            link.setAttribute(
                "href",
                printCanvas
                    .toDataURL("image/png")
                    .replace("image/png", "image/octet-stream")
            );
            link.click();

            console.log("QR Code downloaded");
        }
    }
}

</script>

<style>
.gen {
    margin: 5%
}

.qrstyle {
    padding: 5px;
    background-color: rgb(236, 236, 236);
    
}

</style>