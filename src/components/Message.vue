<template>

  <div class="message  d-flex flex-column justify-content-center align-items-center ">
         <img src="../assets/galery-section/flower-decor-2.png" id="flower-top" alt="">
          <p id="title">Kirimkan Pesan <br>Untuk Kami Berdua</p>
      <div class="card-message container d-flex justify-content-center align-items-center" >
          <form class="container" action="#" method="#">
              <div class="d-flex flex-column justify-content-center align-items-center ">
                <input class="input-message" type="text" name="" placeholder="Nama Anda">
                <textarea class="textarea-message" name="" id="" rows="100"></textarea>
                <select  class="input-message" placeholder="Konfirmasi kehadiran" id="option-form" name="" >
                            <option value="#" disabled selected>Konfirmasi Kehadiran</option>
                            <option value="hadir">Hadir</option>
                            <option value="tidak_hadir">Tidak Hadir</option>                   
                </select>
                <button type="submit" class="btn-message me-auto" >Kirim</button>
              </div>
          </form>
      </div>

    

  </div>
</template>

<script>
export default {

}

</script>

<style>
.message{
    background-color: #222222;
    min-height: 100vh;
    position: relative;
    display: grid;
}

.card-message{
    max-width: auto;
    min-height: auto;
    padding-top: 2rem;
    padding-bottom: 2rem;
    background: #0B0A0A;
    border: 3px solid #000000;
    box-sizing: border-box;
    border-radius: 30px;
    color: black;
}
.input-message{
    background: #FFFFFF;
    border: 3px solid #000000;
    box-sizing: border-box;
    border-radius: 10px;
    min-width: 100%;
    height: 67px;
    padding: 5px;
    color: black;
}
.input-message option{
    color: black;
}
.textarea-message{
    background: #FFFFFF;
    min-width: 100%;
    max-height: 195px;
    padding: 5px;
    margin-top: 2rem;
    margin-bottom: 2rem;
    color: black;
    border: 3px solid #000000;
    box-sizing: border-box;
    border-radius: 10px
}
.btn-message{
    background: #48494B;
    border: 3px solid #000000;
    box-sizing: border-box;
    border-radius: 10px;
    font-size: 25px;
    min-width: auto;
    margin-top: 2rem;
    padding: 0.6rem;
}
.btn-message:hover{
    background-color: green;

}
@media screen and (max-width: 800px) {
    .message #title{
        font-size: 30px;
    }
    .btn-message{
        font-size: 14px;
    }
    .card-message{
        max-width: 45vh;
        border-radius: 10px;
    }
    .input-message{
        font-size: 14px;
        height: 40px;
    }
    .textarea-message{
        background: #FFFFFF;
        min-width: 100%;
        max-height: 125px;
       
    }
}



</style>