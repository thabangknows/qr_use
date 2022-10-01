<template>
    <div>
        <h1 style="padding:5%; font-size: 65px; text-shadow: 1px 1px 3px skyblue; text-align:center">About Us</h1>



        <div style="margin-left: 5%; margin-right:5%" class="row">
            <div class="col-sm-6">
                <div style="margin:3%" class="card border-light">
                    <div class="card-body">
                        <h3 class="card-title">What is QR-use</h3><br>
                        <p class="card-text">
                            QR-use, a South African small company owned and managed by two co-partners Ramalepe Thabang
                            and Letselane Izaya. We worked on a number of projects, QR-use is 1 of them. <br><br> 
                            
                            <strong>Our short story</strong>

                            <br><br>
                            On our final year of studying, we had to present a system we worked on as a project. The link to the system was embedded into a QR Code and we did it a week before, on a certain QR Code generator. 

When our lecturer scanned the QR Code, he was redirected to the platform’s site. The site wrote ‘the qr code has expired, upgrade to premium to generate permanent qr codes’  
<br>
                            <br>
                            That motivated us and we were aslo inspired by how fast the world of technology is moving and having people wanting to own
                            their own QR codes, then we saw the need to invert QR-use.

                        </p>

                    </div>
                </div>
            </div>

            <div class="col-sm-6">
                <div style="margin:3%" class="card border-light">
                    <div class="card-body">
                        <h3 class="card-title">What makes us different?</h3><br>
                        <p class="card-text">A lot of QR code generators have subscription plans, especially when
                            wanting to use the custom designs. Although our system does not allow custom designs, we are
                            working on it, and we promise to keep it FREE of charge when the features arrive.
                        
                            <br><br>

                            Also, our User Interface was designed to be the most easy to use. We accomplished this by implimenting a dynamic input, which can generate QR Codes from any kind of input, the dynamic input field only accepts 4 characters and more.
                        </p>

                    </div>
                </div>
            </div>
        </div>
        <br><br><br>
        <div class="container text-center">
            <div class="row">

                <div class="col">
                    <router-link to="Generate">
                        <button style="text-align:center;" type="button" class="btn btn-outline-info"><strong> Generate
                                now</strong></button>

                    </router-link>
                </div>

            </div>
        </div>
        <br><br><br>
        <h3 style=" text-align:center" class="card-title">Meet the team</h3><br>
        <br><br>


        <div style="padding: 5%;" class="card-group">



            <div style="margin-left: 10%; margin-right:10%" class="card">
             
                <div class="card-body">
                    <h5 class="card-title">Ramalepe Thabang</h5>
                    <p class="card-text">
                        Hey there, I am the full stack developer of QR-use, I was mainly focused on the back-end side of
                        the application, which is PHP Laravel

                    </p>
                    <br>
                    <p class="card-text"><small class="text-muted">Phone: +27677679931</small></p>
               
                    <p class="card-text"><small class="text-muted">Email: <br> thabangknows@outlook.com</small></p>    
                
                </div>
            </div>


            <div style="margin-left: 10%; margin-right:10%" class="card" >
                
                <div class="card-body">
                    <h5 class="card-title">Letselane Izaya</h5>
                    <p class="card-text">
                        Eita! I am the front-end developer of the QR-use application, the front-end is on React JS,
                        which is the JavaScript framework for the client side.
                    </p>
          
                    <p class="card-text"><small class="text-muted">Phone: +27766213057</small></p>
               
                    <p class="card-text"><small class="text-muted">Email: <br> Izayaletselane@gmail.com</small></p>
                </div>
            </div>

            

        </div>
    </div>
</template>

<script>
    import VueToyFace from "vue-toy-face";
export default {
    name: 'About',
    components: {
        VueToyFace,
    },
    mounted(){
        window.scrollTo(0,0)
    }
}
</script>