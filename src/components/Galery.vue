<template>
  <div class="galery container-fluid">
      <div class="m-auto container">
        <img src="../assets/galery-section/flower-decor-2.png" id="flower-top" alt="">
        <p id="title">Wedding Galery</p>
       <div class="galery-img container d-flex justify-content-center align-items-center flex-wrap">
          
            <div class="d-flex flex-column" >
                    <img id="left" src="../assets/galery-section/Rectangle-17.png" alt="">
                    <img id="left" src="../assets/galery-section/Rectangle-16.png" alt="">
            </div>
           
            <div class="d-flex flex-column">
                    <img id="right" src="../assets/galery-section/Rectangle-12.png" alt="">
                    <img id="right" src="../assets/galery-section/Rectangle-50.png" alt="">
                    <img id="right" src="../assets/galery-section/Rectangle-51.png" alt="">
            </div>
          
        </div>  
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.galery{
    min-height: auto;
    padding-bottom: 2rem;
    position: relative;
    display: grid;
    background-color: #222222;
}
#flower{
    max-height: 20vh;
}
#title{
    font-family: var(--dancing-script);
    font-size: 60px;
}

@media screen and (max-width: 800px){
    .galery #flower{
        max-height: auto;
        min-width: auto;
    }
    .galery #title{
        font-size: 40px;
    }
    .galery-img #left{
        max-width: 22vh;
    }
    .galery-img #right{
        max-width: 17vh;
    }

}

</style>