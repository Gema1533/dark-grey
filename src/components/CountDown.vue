<template>
  <div class="count-down container-fluid">
      <div class="m-auto container  " >
          <img src="../assets/count-down/flower-decor-3.png" id="flower-top" alt="">
          <div class="m-auto mt-4 card-count-down  d-flex flex-column align-items-center ">
              <p id="title"> WE'RE GETTING MARRIED</p>
              <p id="countdown">Countdown Timer</p>
                <!-- count down time-->
              <div class="time-count-down flex-wrap d-flex justify-content-center">  
                 <div class="box-date col-lg-1 col-3 mx-3 p-5" id="box-hari">
                    <h2>{{ displayDays }}</h2>
                    <span>Hari</span>
                </div>

                <div class="box-date col-lg-1 col-3 mx-3 p-5" id="box-jam">
                    <h2>{{ displayHours }}</h2>
                    <span>Jam</span>
                </div>

                <div class="box-date col-lg-1 col-3 mx-3 p-5" id="box-menit">
                    <h2>{{ displayMinutes }}</h2>
                    <span>Menit</span>
                </div>

                <div class="box-date col-lg-1 col-3 mx-3 p-5" id="box-detik">
                    <h2>{{ displaySeconds }}</h2>
                    <span>Detik</span>
                </div>
              </div>
                 <!-- btn -->              
               <a class="btn" id="btn-coundown">Add To Calendar</a>
          </div>
          
      </div>
  </div>
</template>

<script>
export default {
     data: () => ({
        displayDays: 0,
        displayHours: 0,
        displayMinutes: 0,
        displaySeconds: 0,
        loaded: false, // Agar Ketika di Refresh, Countdown Tidak Berubah Jadi 00:00:00:00
        expired: false //Mengatur jika waktu countdown sudah habis
    }),
    computed: {
        _seconds: () => 1000,
        _minutes() {
            return this._seconds * 60
        },
        _hours() {
            return this._minutes * 60
        },
        _days() {
            return this._hours * 24
        },
    },
    mounted() {
        this.showRemaining();
    },
    methods: {
        formatNum: num => (num < 10 ? "0" + num : num), // Format Untuk Mendisplay Date
        showRemaining() {
            const timer = setInterval(() => {
                const date = new Date(); // Mengambil Date 
                const dateEnd = new Date(2022, 11, 12, 10, 10, 10, 10); //Atur Countdown
                const distance = dateEnd.getTime() - date.getTime(); //Mencari jarak detik antara tanggal yang ditentukan dan tanggal sekarang

                if(distance < 0) { // Jika waktu countdown sudah habis, clearInterval Timer
                    clearInterval(timer);
                    this.expired = true;
                    this.loaded = true;
                    return
                }

                const days = Math.floor((distance / this._days));
                const hours = Math.floor((distance % this._days) / this._hours);
                const minutes = Math.floor((distance % this._hours) / this._minutes);
                const seconds = Math.floor((distance % this._minutes) / this._seconds);

                this.displaySeconds = this.formatNum(seconds);
                this.displayMinutes = this.formatNum(minutes);
                this.displayHours = this.formatNum(hours);
                this.displayDays = this.formatNum(days);
                this.loaded = true;
            }, 1000);
        }
    }

}
/**/
</script>

<style>
.count-down{
    background-color: #222222;
    min-height: 100%;
    display: grid;
    position: relative;
    padding-bottom: 5rem;
}

#flower-top{
    max-height: 20vh;
}
.card-count-down{
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.8) 48.44%, rgba(0, 0, 0, 0.064) 100%);
    box-shadow: 28px 28px 10px rgba(0, 0, 0, 0.4);
    border-radius: 35px;
    max-width: 1059px;
    padding: 2rem;
    min-height: auto;
    position: relative;
    display: grid;
    padding-bottom: 4rem;
    color: white;
}
 #title{
    font-family: var(--cabin);
    font-size: 30px;
    margin-top: 3rem;
}
 #countdown{
    font-size: 96px;
    font-family: var(--dancing-script);
}
.time-count-down{
    padding-top: 1rem;
}
.box-date {
    height: 130px;
    width: 130px;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.8) 48.44%, rgba(0, 0, 0, 0.064) 100%);
    border-radius: 11px;
    border: 3px solid #ffff;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-bottom: 2rem;
    }
.box-date h2 {
    font-family: var(--dancing-script);
    font-size: 60px;
    }

.box-date span {
    font-family: var(--dancing-script);
    letter-spacing: 1px;
    font-size: 30px;
    margin-top: -0.5rem;
    }

#btn-coundown{
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.8) 48.44%, rgba(0, 0, 0, 0.064) 100%);
    box-shadow: 28px 28px 10px rgba(0, 0, 0, 0.4);
    border-radius: 35px;
    max-width: auto;
    padding-left: 3rem;
    padding-right: 3rem;
    margin-top: 3rem;
    min-height: 119.93px;
    color: white;
    font-family: var(--dancing-script);
    font-size: 58px;
}

@media screen and (max-width: 800px) {
    #flower-top{
        max-height: 15vh;
    }

    .card-count-down #title{
        font-size: 25px;
       
    }
    #countdown{
        font-size:30px ;
    }
    #btn-coundown{
        font-size: 28px;
        width: auto;
        min-height: auto;
        margin-top: 0px;
        margin-bottom: 2rem;
     
    }
    .card-count-down{
        border-radius: 10px;
          box-shadow: 15px 18px 10px rgba(0, 0, 0, 0.4);
        padding: 1rem;
    }
    .box-date{
        border-radius: 10px;
        width: 10px;
        height:10px;
    }
    .box-date h2{
        font-size: 30px;
    }
    .box-date span{
        font-size: 20px;
    }
}
</style>
