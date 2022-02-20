<template>
<input type="checkbox" name="" id="check">
  <div class="cover container-fluid d-flex flex-column justify-content-center " >
      <div class="slide-section container-fluid d-flex flex-column justify-content-center" >
            <img src="../assets/flash-section/34591-9-wedding-invitation-border-transparent-image-1.png" id="img-1" alt="">
            <img src="../assets/flash-section/34591-9-wedding-invitation-border-transparent-image-2.png" id="img-2" alt="">
          <div class="item-card ">
              <img class="card-img-top" src="../assets/flash-section/d7d1dccfdabdea423d7e635e7fa66d48-wedding-invitation-label-2-by-vexels1.png" alt="">
              <p id="pasangan">Luffy <br>&<br>Hancock</p>
              <p id="title">We invited you to celebrate our wedding
                <br> Monday, 03 January 2021</p>
              <label for="check">
                  <i class="btn " id="btn">OPEN INVITATION</i>
              </label>
          </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.cover{
    min-height: 100vh;
    position: fixed;
    z-index: 90;
    background-color:rgb(0, 0, 0, 0.5);
}
.slide-section{
    background-color: #222222;
    min-height: 85vh;
    max-width: 90%;
    border-radius: 10px;
    z-index: 100;
    position: relative;
    place-items: center;
}
#img-1,#img-2{
    position: absolute;
    height: 40vh;
}
#img-1{
    left: 2rem;
    top:1rem;
}
#img-2{
    right: 2rem;
    top:1rem;
}
.item-card{
    padding-bottom: 2rem;
}
.item-card img{
    max-height: 244px;
    max-width: 244px;

}
.item-card #pasangan{
    font-size: 45px;
    font-family: var(--dancing-script);
    color: white;
}
.item-card #title{
    font-size: 24px;
    font-family: var(--dancing-script);
    color: white;
    margin-top: 2rem;
}
 #btn{
    font-family: var(--roboto);
    background: linear-gradient(180deg, #000000 0%, #414040 100%);
    color: white;
    font-size: 40px;
    height: auto;
    border: solid white 1px;;
    margin-top: 0.5rem;
    
}
label #btn:hover {
    background: white;
    color: black;
    font-family: fantasy;
}
/* display */
#check{
    display: none;
}

#check:checked~.cover{
    margin-top: -10000px;
}
@media screen and (max-width: 768px) {
    #img-1,#img-2{
    max-width: 15vh;
    max-height: 15vh;
    }
    .item-card img{
       
        min-height: 25vh;
        max-width: 25vh;
    }
    .item-card #pasangan{
    font-size: 40px;
    }
   .item-card #title{
    font-size: 18px;
    margin-top: 1rem;

    }
    #btn{
        font-size: 16px;
        margin-top:;
        
    }
}

@media screen and (max-width: 425px) {

    .item-card #pasangan{
        font-size: 25px;     
        
    }
    .item-card #title{
        font-size: 14px;
    }
    .slide-section{
        min-height: auto;
    }
     #img-1,#img-2{
        max-width: 7vh;
        max-height: 13vh;
        }
    #btn{
        font-size: 15px;
        max-height: 40px;
    }
   
}
</style>