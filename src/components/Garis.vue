
<template>
  <div class="separator container-fluid d-flex justify-content-center">
      <img src="../assets/separator/Garis-1.png" alt="">
  </div>
</template>

<script>
export default {

}
</script>

<style>
.separator{
    background-color:#222222 ;
    position: relative;
    min-height: 100%;
    display: grid;
    padding-bottom: 2rem;
    padding-top: 2rem;
}
.separator img{
    min-height: auto;
    max-width: 90%;
}

@media screen and (max-width: 800px) {
    .separator img{
        min-width: 10vh;
        margin-top: 0rem;
    }
}

</style>