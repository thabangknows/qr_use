<template>
    <div>
        <nav class="navbar bg-light">
            <div class="container-fluid">
                <div class="row">
                    
                    <span>
                    <img style="width: 35px;" src="../images/logo.png" alt="">    
                    <p style="font-size:12px; font-weight:700">QR-use</p>
                </span>
              
                </div>
                
              <form class="d-flex" role="search">
                <router-link style="margin-right:15px; font-size:18px; text-decoration: none; padding:5px "  to="/"><strong> HOME</strong></router-link>
                <router-link style="margin-right:15px; font-size:18px; text-decoration: none; background-color: #230a31; padding:5px;color:white; border-radius:16px" to="About"><strong>ABOUT US</strong> </router-link>
              </form>
            </div>
          </nav>
    </div>
</template>

<script>
    export default {
        name: 'navbar'
    }
</script>

<style>
    .c {
        color: #230a31;
    }
    

</style>