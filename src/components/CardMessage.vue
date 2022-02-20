<template>
 <div class="cardMessage" >
     <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner ">
    <div class="carousel-item active">
        <div class="container-fluid card-content grid d-flex flex-wrap align-items-center justify-content-center">
            <div class="slide-message">
                <div class="d-flex justify-content-between">
                    <p>Zoro</p>
                    <label  class="keterangan" name="ket">Hadir</label>
                </div>
                <p>
                    “Selamat atas pernikahannya. Semoga langgeng hingga maut memisahkan dan menjadi keluarga yang harmonis dan bisa saling membahagiakan.”
                </p>
            </div>
              <div class="slide-message">
                <div class="d-flex justify-content-between">
                    <p>Zoro</p>
                    <label  class="keterangan" name="ket">Hadir</label>
                </div>
                <p>
                    “Selamat atas pernikahannya. Semoga langgeng hingga maut memisahkan dan menjadi keluarga yang harmonis dan bisa saling membahagiakan.”
                </p>
            </div>
              <div class="slide-message">
                <div class="d-flex justify-content-between">
                    <p>Zoro</p>
                    <label  class="keterangan" name="ket">Hadir</label>
                </div>
                <p>
                    “Selamat atas pernikahannya. Semoga langgeng hingga maut memisahkan dan menjadi keluarga yang harmonis dan bisa saling membahagiakan.”
                </p>
            </div>
        </div>
    </div>
    <div class="carousel-item">
         <div class="container-fluid card-content grid d-flex flex-wrap align-items-center justify-content-center">
            <div class="slide-message">
                <div class="d-flex justify-content-between">
                    <p>Zoro</p>
                    <label  class="keterangan" name="ket">Hadir</label>
                </div>
                <p>
                    “Selamat atas pernikahannya. Semoga langgeng hingga maut memisahkan dan menjadi keluarga yang harmonis dan bisa saling membahagiakan.”
                </p>
            </div>
              <div class="slide-message">
                <div class="d-flex justify-content-between">
                    <p>Zoro</p>
                    <label  class="keterangan" name="ket">Hadir</label>
                </div>
                <p>
                    “Selamat atas pernikahannya. Semoga langgeng hingga maut memisahkan dan menjadi keluarga yang harmonis dan bisa saling membahagiakan.”
                </p>
            </div>
              <div class="slide-message">
                <div class="d-flex justify-content-between">
                    <p>Zoro</p>
                    <label  class="keterangan" name="ket">Hadir</label>
                </div>
                <p>
                    “Selamat atas pernikahannya. Semoga langgeng hingga maut memisahkan dan menjadi keluarga yang harmonis dan bisa saling membahagiakan.”
                </p>
            </div>
        </div>
    </div>
    <div class="carousel-item">
        <div class="container-fluid card-content grid d-flex flex-wrap align-items-center justify-content-center">
            <div class="slide-message">
                <div class="d-flex justify-content-between">
                    <p>Zoro</p>
                    <label  class="keterangan" name="ket">Hadir</label>
                </div>
                <p>
                    “Selamat atas pernikahannya. Semoga langgeng hingga maut memisahkan dan menjadi keluarga yang harmonis dan bisa saling membahagiakan.”
                </p>
            </div>
              <div class="slide-message">
                <div class="d-flex justify-content-between">
                    <p>Zoro</p>
                    <label  class="keterangan" name="ket">Hadir</label>
                </div>
                <p>
                    “Selamat atas pernikahannya. Semoga langgeng hingga maut memisahkan dan menjadi keluarga yang harmonis dan bisa saling membahagiakan.”
                </p>
            </div>
              <div class="slide-message">
                <div class="d-flex justify-content-between">
                    <p>Zoro</p>
                    <label  class="keterangan" name="ket">Hadir</label>
                </div>
                <p>
                    “Selamat atas pernikahannya. Semoga langgeng hingga maut memisahkan dan menjadi keluarga yang harmonis dan bisa saling membahagiakan.”
                </p>
            </div>
        </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
 </div>
</template>

<script>
export default {

}
</script>

<style>
.cardMessage{
    min-height: auto;
    padding-bottom: 2rem;
    position: relative;
    display: grid;
    background-color: #222222;
}
.carousel{
    margin-top: 5rem;
}
.card-content{
    height: auto;
  
}
.slide-message{
    width: 431px;
    min-height: 275px;
    padding: 2rem;
    font-size: 22px;
    background: #000000;
    border-radius: 10px;
    margin: 1rem;
    margin-top: 0 !important;
}
.keterangan{
    min-width: 80px;
    max-height: 32px;
    background: #48494B;
    border-radius: 5px;
}

@media screen and (max-width: 800px) {
    .slide-message{
    max-width: 190px;
    min-height: auto;
    padding: 1rem;
    font-size: 14px;
    margin: 1rem;
}
.keterangan{
    max-height: 23px;

}

}

@media screen and (max-width:450px) {
    .slide-message{
        max-width: 8rem;
        font-size: 10px;
    
}
.keterangan{
    max-height: 16px;
    min-width: 50px;

}
}

</style>