<template>
  <div class="head-section container-fluid " >
      <div class="d-flex flex-column align-items-center item-head ">
  
          <img  src="../assets/head-section/bunga-1.png"  id="bunga-1-top" alt="">
        
          <div class="d-flex p-card flex-wrap justify-content-center justify-content-evenly container ">
            <div class="card-pasangan d-flex flex-column  align-items-center  " >
                    <img src="../assets/head-section/GROOM_011111-1.png" alt="">
                    <p id="nama">Luffy</p>
                    <p id="title">Monkey D Luffy</p>
                    <p id="parents">Son of Mr.Dragon & Mrs. Aisyah</p>                          
            </div>

            <div class="card-pasangan d-flex flex-column align-items-center  " >             
                    <img src="../assets/head-section/BRIDE_01-1.png" alt="">
                    <p id="nama">Hancock</p>
                    <p id="title">Boa Hancock</p>
                    <p id="parents">Son of Mr. Udin & Mrs. Gloriosa</p>                             
            </div> 
          </div>

          <!-- Quote-->
            <div class="quote-head-section  ">
                <p class="title">WE LOVE EACH OTHER</p>
                <p class="desc">Our Prayer</p>
                <p class="contents">" Dan di antara tanda-tanda kekuasaan-Nya diciptakan-Nya untukmu pasangan hidup dari jenismu <br>
                sendiri supaya kamu dapat ketenangan hati dan dijadikannya kasih sayang di antara kamu. <br>
                Sesungguhnya yang demikian menjadi tanda-tanda kebesaran-Nya bagi orang-orang yang berpikir. "</p>
                <p class="qs">- Q.S. Ar-Rum: 21 -</p>
        
            </div>
      </div>

  </div>
</template>

<script>
export default {

}
</script>

<style>
.head-section{
    background-color: #222222;
    min-height:100vh;
    display: grid;
    position: relative;
}
.item-head{
    display: grid;
    position: relative;
}

#bunga-1-top{
    min-height: auto;
    max-width: 90%;
  
}

/* card */
.card-pasangan{
    background-color: #0B0A0A;
    margin-top: 7rem;
    min-width: 450px;
    height: auto;
    padding: 1rem;
    border-radius: 20px;
}

/* item card */
.card-pasangan img{
    height: 228px;
    width: 274px;
    
}

.card-pasangan img{
    margin-top: -8rem;
}
.card-pasangan #nama{
    font-size: 45px;
    font-family: var(--dancing-script);
}

.card-pasangan p{
    font-family: var(--roboto);
    font-size: 18px;
    
 
}
.separator-1{
    margin-left: 1rem;
    margin-right: 1rem;
}

.quote-head-section{
    margin-top: 2rem;
    font-family: var(--dancing-script);
    font-size: 30px;
  
  
   
}

@media screen and (max-width: 768px) {
    #bunga-1-top{
        max-width: 5vh;
        margin-top: 1rem;
    }
    .p-card{
        margin-top: 2rem;
        
    }
    .card-pasangan{
        min-width: auto;
       
    }
}

@media screen and (max-width: 800px) {
    #bunga-1-top{
        margin-top: 1rem;
        min-width: 40vh;
    }
    .card-pasangan{
        margin-top: 1rem;
        min-height: auto;
        max-width: 20vh;
    }
    
    .card-pasangan img{
        height: auto;
        width: 110px;
        margin-top: -4rem;
    }
    .card-pasangan #nama{
        font-size: 30px;  
    }   
    .card-pasangan p{
        font-size: 12px;

    }
    .quote-head-section{
        margin-top: 2rem;;
        font-size: 17px;
   
    }
    
    #title{
        margin-top: 0px;
        font-size: 15px;
    }
    .separator-1{
        margin-left: 10px;
        margin-right: 10px;
    }

   
}

</style>