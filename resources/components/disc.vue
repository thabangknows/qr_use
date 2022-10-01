<template>
  <div>
    <div class="disc">
      <h1 style="padding:3%; color: skyblue;font-size: 65px; text-align:right">A QR code consists of black squares
        arranged in a square grid on a white background</h1>

      <div class="container-fluid">
        <img style="margin:auto; text-align:center" src="../images/img5.png" alt="">
      </div>
    </div>
    <br><br>

    <div class="card border-light mb-3">
      <div class="row g-0">

        <div class="col-md-6">
          <div style="padding-left:11%; padding-right:11%; background-color:#230a31; border-radius:11px"
            class="card-body">

            <h2 class="card-text" style=" color:skyblue; font-size: 44px; padding:15px; ">A QR code is a type of matrix
              barcode invented in 1994 by the Japanese automotive company Denso Wave. A barcode is a machine-readable
              optical label that can contain information about the item to which it is attached.</h2>
            <p class="card-text" style=" padding:5px; color:white ; border-radius:11px"><small
                class="text-muted">Source: <a href="https://en.wikipedia.org/wiki/QR_code#History">Wikipedia</a></small>
            </p>
          </div>
        </div>
        <div class="col-md-6">
          <img style=";" src="../images/img6.png" class="img-fluid rounded-start" alt="...">
        </div>
      </div>
    </div>
    <br><br><br><br>
    <div class="container text-center">
      <div class="row">

        <div class="col">
          <router-link to="Generate">
            <button style="text-align:center;" type="button" class="btn btn-outline-info"><strong> Create QR
                Code</strong></button>

          </router-link>
          <br><br><br>
        </div>

      </div>



      <div class="why">
        <h1 style="padding:3%; color: skyblue;font-size: 65px; text-align:left">Why Us</h1>
        <p style="padding-left:3%; color: skyblue; text-align:left">We help businesses and individuals grow by allowing them to convert
          any kind of input into QR Codes, with just few clicks</p>

        <ul style="font-size:28px;" class="list-group">
          <li class="list-group-item d-flex justify-content-between align-items-center">
            Free of charge
            <span class="badge bg-primary rounded-pill"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                fill="currentColor" class="bi bi-coin" viewBox="0 0 16 16">
                <path
                  d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9H5.5zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518l.087.02z" />
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                <path d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11zm0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
              </svg></span>
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-center">
            Easy to use
            <span class="badge bg-primary rounded-pill"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                fill="currentColor" class="bi bi-award" viewBox="0 0 16 16">
                <path
                  d="M9.669.864 8 0 6.331.864l-1.858.282-.842 1.68-1.337 1.32L2.6 6l-.306 1.854 1.337 1.32.842 1.68 1.858.282L8 12l1.669-.864 1.858-.282.842-1.68 1.337-1.32L13.4 6l.306-1.854-1.337-1.32-.842-1.68L9.669.864zm1.196 1.193.684 1.365 1.086 1.072L12.387 6l.248 1.506-1.086 1.072-.684 1.365-1.51.229L8 10.874l-1.355-.702-1.51-.229-.684-1.365-1.086-1.072L3.614 6l-.25-1.506 1.087-1.072.684-1.365 1.51-.229L8 1.126l1.356.702 1.509.229z" />
                <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1 4 11.794z" />
              </svg></span>
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-center">
            No-coding required
            <span class="badge bg-primary rounded-pill"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                fill="currentColor" class="bi bi-code-slash" viewBox="0 0 16 16">
                <path
                  d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z" />
              </svg></span>
          </li>

          <li class="list-group-item d-flex justify-content-between align-items-center">
            Download in png
            <span class="badge bg-primary rounded-pill"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                fill="currentColor" class="bi bi-image" viewBox="0 0 16 16">
                <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                <path
                  d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12z" />
              </svg></span>
          </li>

          <li class="list-group-item d-flex justify-content-between align-items-center">
            Permanent codes
            <span class="badge bg-primary rounded-pill"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clock-fill" viewBox="0 0 16 16">
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
            </svg></span>
          </li>
        </ul>

        
<br><br>
        <div class="row">

          <div class="col">
            <router-link to="About">
              <button style="text-align:center;" type="button" class="btn btn-outline-info"><strong>About Us</strong></button>
  
            </router-link>
        
          </div>
  
        </div>
  

      </div>
    </div>

  </div>
</template>
<script>
export default {
  name: 'disc'
}
</script>

<style>
.disc {
  background-image: url("../images/img4.png");
  background-size: cover;
  margin-top: -15px;
}
</style>