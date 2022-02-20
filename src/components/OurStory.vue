<template>
  <div class="our-story container-fluid text-center">
    <div class="card-story mx-auto">
        <h1 class="title-story my-5">Our Story</h1>
        
        <div class="vertical-timeline container">
            <div class="timeline">
                <ul id="timeline-list">
                    <li v-for="item in items" :key="item.title" class="mb-5">

                        <div class="timeline-content p-5">
                            <h1>{{ item.title }}</h1>
                            <div class="tl-img d-flex justify-content-center mb-5 mt-3">
                                <img :src="item.img">
                            </div>
                            <p class="tl-desc text-center">
                                {{ item.description }}
                            </p>
                        </div>

                        <div class="timeline-time">
                            <h3>{{ item.date }}</h3>
                            <h5>{{ item.dateTitle }}</h5>
                        </div> 
                    </li>

                     <div style="clear: both"></div>
                </ul>
            </div>
        </div>
    </div>
  </div>
</template>

<script>



export default {
    data() {
        return {
            items: [
                {
                    title: "Awal Bertemu",
                    img: require("../assets/our-story/awalbertemu.png"),
                    description: "Awal pertama kali kami bertemu di salah satu pulau hanya sebagai bajak laut dan saling bercerita satu sama lain kemudiaan tanggal 28 Januari 2018 Kami mulai dekat. Butuh waktu yang amat panjang untuk saling menemukan. Butuh banyak cerita dan pengalaman kami lewati sebelum akhirnya saling bertemu dan memutuskan.",
                    date: "29 Desember 2017",
                    dateTitle: "Pertama Bertemu"
                },
                {
                    title: "Acara Lamaran",
                    img: require("../assets/our-story/acaralamaran.png"),
                    description: "Awal pertama kali kami bertemu di salah satu pulau hanya sebagai bajak laut dan saling bercerita satu sama lain kemudiaan tanggal 28 Januari 2018 Kami mulai dekat. Butuh waktu yang amat panjang untuk saling menemukan. Butuh banyak cerita dan pengalaman kami lewati sebelum akhirnya saling bertemu dan memutuskan.",
                    date: "12 Juni 2020",
                    dateTitle: "Lamaran"
                },
                {
                    title: "Acara Pernikahan",
                    img: require("../assets/our-story/acarapernikahan.png"),
                    description: "Awal pertama kali kami bertemu di salah satu pulau hanya sebagai bajak laut dan saling bercerita satu sama lain kemudiaan tanggal 28 Januari 2018 Kami mulai dekat. Butuh waktu yang amat panjang untuk saling menemukan. Butuh banyak cerita dan pengalaman kami lewati sebelum akhirnya saling bertemu dan memutuskan.",
                    date: "03 Januari 2021",
                    dateTitle: "Pernikahan"
                },
                
            ]
        }
    }
}
</script>

<style>
.our-story{
    min-height: auto;
    background-color: #222222;
    display: grid;
    padding-top: 5rem;
    padding-bottom: 5rem;
    position: relative;

}
.card-story{
    width: 80%;
    background: #0C0B0B;
    border-radius: 40px;
    padding:2rem;
}
.title-story{
    font-size: 64px ;
    font-family: var(--dancing-script);
}

.timeline {
    position: relative;
}
.timeline::before {
    content: '';
    position: absolute;
    left: 50%;
    width: 3px;
    height: 100%;
    background: #ffffff;
} 

#timeline-list li {
    position: relative;
    width: 50%;
    padding: 20px 40px;
}

#timeline-list li:nth-child(odd) {
    float: left;
    text-align: left;
    clear: both;
    transform: translateX(-1rem);
}

#timeline-list li:nth-child(even) {
    float: right;
    text-align: left;
    clear: both;
}

.timeline-content {
    width: 100%;
    background: #ffffff;
    position: relative;
}

.timeline-content::after {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
    border-left: 50px solid #fff;
    top: 20px;
    right: -8%;
    transform: rotate(30deg);
}

#timeline-list li:nth-child(even) .timeline-content::after {
    left: -8%;
    border-right: 60px solid #fff;
    border-left: none;
    transform: rotate(-30deg);
}

.timeline-content h1 {
    font-family: var(--dancing-script);
    font-weight: bold;
    color: #0C0B0B;
}

.tl-img {
    margin: auto;
    width: 100%;
}

.tl-img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.tl-desc {
    color: #000;
    font-family: var(--roboto);
    font-weight: 500;
}

#timeline-list .timeline-time {
    position: absolute;
    top: 5%;
    padding: 8px 16px;
    color: #000;
    font-family: var(--roboto);
    text-align: center;
}

#timeline-list .timeline-time h5 {
    font-weight: 300;
}

#timeline-list li:nth-child(odd) .timeline-time {
    right: -50%;
}

#timeline-list li:nth-child(even) .timeline-time {
    left: -50%;
}

@media screen and (max-width: 768px) {
    .timeline::before {
        left: -5%;
    }

    .timeline-content {
        width: 100% !important;
    }

    #timeline-list li:nth-child(odd) {
        float: none;
        transform: translateX(0);
    }
    
    #timeline-list li:nth-child(even) {
        float: none;
    }
    
    #timeline-list .timeline-time {
        position: static;
        padding: 0;
        margin-top: 5rem;
    }
}

@media screen and (max-width: 425px) {
    .title-story{
        font-size: 40px;
    }

}
</style>