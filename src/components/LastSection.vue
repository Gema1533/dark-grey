<template>
  <div class="end-section  text-center" >
      <div class="table-end-section container-fluid d-flex flex-column">
        <p id="judul" class="kolom-title">Doa Restu Anda Merupakan Karunia Yang Sangat Berarti Bagi Kami.</p>
        <p id="ket">Dan jika memberi adalah ungkapan tanda kasih anda, anda dapat memberi kado secara cashless dengan mengirim <br>
        amplop digital secara transfer pada akun di bawah ini :</p>
        <div class="d-flex justify-content-center flex-wrap">
          
              <div class="qr-code d-flex flex-column align-items-center">
                <p id="judul">BCA - 4980131187</p>
                <img src="../assets/end-section/qr-left.png" alt="">
              </div>
              <div class="qr-code d-flex flex-column align-items-center">
                <p id="judul">OVO - 087780933640</p>
                <img src="../assets/end-section/qr-right.png" alt="">
              </div>

        </div>

        <div class="d-flex end justify-content-center align-items-center">

           
            <p class="kolom-title nama-pasangan">Luffy & Hancock</p>
          
        </div>

      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
    .end-section{
        min-height: auto;
        background: #222222;
        color: var(--white);
        font-weight: 400;
        position: relative;
        padding-bottom: 5rem;
    }
   
    .table-end-section #judul{
        font-size: 3rem;
        margin-top: 5rem;
    }
     .table-end-section #ket{
        font-size: 1.4rem;
    }
    
    .qr-code{
        background: white;   
        min-height: 20rem;
        min-width: 25rem;
        padding: 1rem;
        border-radius: 5px;
        color: black;
        display: grid;
        margin: 2rem;
    }

    .qr-code img{
        width: 13rem;
    }
  
    .qr-code #judul{
        font-size: 1.9rem;
        margin-top: 0px;
        color: black;
    }

    .nama-pasangan{
        font-size: 80px;
        margin-left: 1rem;
        margin-right: 1rem;
    }
    .end {
        margin-top: 3rem;
    }

     /* === CSS Untuk Isi dari Kolom Info === */
    .kolom-title {
        font-family: var(--dancing-script);
    }

    @media screen and (max-width: 768px) {
    .table-end-section #judul{
        font-size: 1.5rem;
        margin-top: 2rem;
    
    }
    .table-end-section #ket{
        font-size: 0.7rem;
        margin-top: -0.5rem;
    }

      .qr-code{
        min-height: 10rem;
        min-width: 9rem;
        padding: 0.5rem;
        border-radius: 2px;
        margin: 0.5rem;
      
    }
    .qr-code img{
        width: 10rem;
    }
  
    .qr-code #judul{
        margin-top: 0px;
        font-size: 1rem;
    }

     .nama-pasangan{
        font-size: 3rem;
        margin-left: 0.5rem;
        margin-right: 0.5rem;
    }
    .end img{
        
        max-height: 3rem;
    }
    .end{
        margin-top: 1rem;
    }
    }

    @media screen and (max-width: 450px) {
  .table-end-section #judul{
        font-size: 0.9rem;
        margin-top: 2rem;
    
    }
     .table-end-section #ket{
        font-size: 0.4rem;
 
    }
    .qr-code img{
        width: 9rem;
    }
     .qr-code #judul{
        margin-top: 0px;
        font-size: 0.8rem;
    }
      .nama-pasangan{
        font-size: 2.5rem;

    }
    }


</style>