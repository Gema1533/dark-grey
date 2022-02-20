<template>
  <div class="place-section container-fluid d-flex flex-column align-items-center justify-content-center">
        <div class="top-card d-flex align-items-center justify-content-center">
            <p>“Marriage: Love is the reason. Lifelong friendship is the gift. Kindness is the cause. Til’ death do us part is the length.”</p>
        </div>
         <div class="buttom-card  d-flex justify-content-center justify-content-evenly container flex-wrap">
            <!--card 1 -->
            <div class="d-flex flex-column align-items-center" id="card">
                <p >Akada Nikah</p>
                <p class="mt-3">Masjid : <br> Jami Nurul Al - Ikhlas</p>
                <div class="d-flex">
                    <div class="d-flex flex-column  two-item align-items-center">
                        <img src="../assets/place-section/Vector.png" alt="">
                        <p>Monday, <br> 03 Januari 2021</p>
                    </div>

                    <div class="separator-item"></div>

                    <div class="d-flex flex-column  two-item  align-items-center">
                        <img src="../assets/place-section/ic_baseline-access-time.png" alt=""> 
                        <p>09.00 WIB <br> Sampai Selesai1</p>  
                    </div>
                </div>
                <a class="btn-map btn" href="">
                    <img src="../assets/place-section/map.png" alt="">PERGI KELOKASI
                </a>
            </div>



            <!--card 2 -->
            <div class="d-flex flex-column  align-items-center" id="card">
                <p >Acara Resepsi</p>
                <p class="mt-3">Hotel : <br> Green Bamboo Residence</p>
                <div class="d-flex">
                    <div class="d-flex flex-column two-item align-items-center">
                        <img src="../assets/place-section/Vector.png" alt="">
                        <p>Monday, <br> 03 Januari 2021</p>
                    </div>

                    <div class="separator-item"></div>

                    <div class="d-flex flex-column two-item  align-items-center">
                        <img src="../assets/place-section/ic_baseline-access-time.png" alt=""> 
                        <p>09.40 WIB <br> Sampai Selesai</p>  
                    </div>
                </div>
                <a class="btn-map btn" href="">
                    <img src="../assets/place-section/map.png" alt="">PERGI KELOKASI
                </a>
            </div>
        </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.place-section{
    min-height: auto;
    display: grid;
    position: relative;
    background-color:#222222 ;
}
.top-card{
    max-width: 900px;
    min-height: 756px;
    background: #0B0A0A;
    box-shadow: 25px 25px 3px rgba(0, 0, 0, 0.35);
    border-radius: 25px;
    padding: 2rem;
}
.top-card p{
    font-size: 70px;
    line-height: 84px;
    font-family: var(--dancing-script);
}
.buttom-card #card{
    max-width: 600px;
    min-height: auto;
    background: #0B0A0A;
    box-shadow: 25px 25px 3px rgba(0, 0, 0, 0.35);
    border-radius: 30px;
    margin-top: 229px;
    padding: 2rem;
    
}
.buttom-card p{
    font-size: 50px;
    font-family: var(--dancing-script);
}

.buttom-card{
    padding-bottom: 5rem;
}
.separator-card{
    min-width: 87px;   
}
.two-item{
    max-width: 360px;
    padding: 1rem;
}
.separator-item{
    width: 20px;   
}
.two-item p{
    font-size: 20px;
    text-align: left;
    padding: 1rem;
    margin-top: 1rem;
    
}
.btn-map{
    background: #0B0A0A;
    box-shadow: 25px 25px 3px rgba(0, 0, 0, 0.35);
    border-radius: 30px;
    max-width: 50vh;
    border: 3px solid #FFFFFF;
    box-sizing: border-box;
    border-radius: 10px;
    color: white;
    font-family: var(--roboto);
}
.btn-map img{
    margin-right: 1rem;
}
.btn-map:hover{
    color: lightgreen;
}

@media screen and (max-width: 425px) {
    .top-card{
        min-height: 10px;
        box-shadow: 10px 15px 3px rgba(0, 0, 0, 0.35);
    }
    .top-card p{
        font-size: 20px;
        line-height: 40px;
    }
    .buttom-card p{
        font-size: 20px;
    }
    .two-item p{
        font-size: 14px;
        margin-top: 0px;
    }
    .two-item{
    
        max-width: auto;
        padding: 0px;
        margin-top: 1rem;
    }
    .two-item img{
        height: 40px;
    }
    .btn-map{
        max-width: 50vh;
        font-size: 12px;
    }
    .btn-map img{
        width: 30px;
    }
    .buttom-card #card{
        box-shadow: 15px 15px 3px rgba(0, 0, 0, 0.35);
        margin-top: 29px;
  

    }
}
</style>