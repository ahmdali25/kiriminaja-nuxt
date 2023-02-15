<template>
    <section class="slider grid grid-cols-12 justify-items-center items-center">
      <a class="col-span-1 button button-prev" @click="prevSlide">
        <svg xmlns="http://www.w3.org/2000/svg" class="arrow-left" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <line x1="5" y1="12" x2="19" y2="12"></line>
          <line x1="5" y1="12" x2="11" y2="18"></line>
          <line x1="5" y1="12" x2="11" y2="6"></line>
        </svg>
      </a>
      <div class="col-span-10">
        <div v-for="slide in slides" :key="slide.id">
          <div v-if="activeSlide === slide.id" class="slide grid grid-cols-12 place-items-center">
            <div class="col-span-7">
                <h1 class="text-5xl font-bold leading-tight">{{ slide.title }}</h1>
                <p class="mt-5 text-lg text-neutral-700">{{ slide.paragraph }}</p>
                <ul v-for="list in slide.lists" :key="list.id" class="mt-5">
                  <li class="flex gap-2 items-center">
                    <div class="inline-block bg-primary-200 p-1 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-check" width="18" height="18" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M5 12l5 5l10 -10"></path>
                      </svg>
                    </div>
                    <span>{{ list.text }}</span>
                  </li>
                </ul>
                <div class="flex gap-3 mt-10">
                  <div>
                    <a href="#" class="flex gap-2 text-white py-3 pl-5 pr-5 rounded-full bg-primary-700">
                      <span>Daftar Gratis</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><line x1="5" y1="12" x2="19" y2="12"></line><line x1="13" y1="18" x2="19" y2="12"></line><line x1="13" y1="6" x2="19" y2="12"></line></svg>
                    </a>
                  </div>
                  <div class="flex gap-2 items-center cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0"></path>
                      <path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0"></path>
                      <line x1="3" y1="6" x2="3" y2="19"></line>
                      <line x1="12" y1="6" x2="12" y2="19"></line>
                      <line x1="21" y1="6" x2="21" y2="19"></line>
                    </svg>
                    <span>Selengkapnya</span>
                  </div>
                </div>
            </div>
            <div class="col-span-5">
              <img :src="require(`../assets/images/${slide.image}.webp`)" alt="Image Slide">
            </div>
          </div>
        </div> 
      </div>
      <a class="col-span-1 button button-next" @click="nextSlide">
        <svg xmlns="http://www.w3.org/2000/svg" class="arrow-right" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <line x1="5" y1="12" x2="19" y2="12"></line>
          <line x1="13" y1="18" x2="19" y2="12"></line>
          <line x1="13" y1="6" x2="19" y2="12"></line>
        </svg>
      </a>
    </section>
</template>

<script>
export default {
  name: 'SliderBanner',
  data: () => ({
    activeSlide: 1,
    slides: [
      {
        id: 1,
        title: "Ngulik Bisnis V.35: Membuat Proyeksi Keuangan yang Menarik!",
        paragraph: "Jangan lewatkan kesempatan mempelajari cara membuat proyeksi keuangan yang tepat dan menarik minat investor bersama Akademi KiriminAja",
        lists: [
          {id: 1, text: "Cara membuat proyeksi keuangan yang tepat"},
          {id: 2, text: "Strategi menentukan target keuangan yang realistis"},
          {id: 3, text: "Menawarkan ke investor dengan cara yang efektif"}
        ],
        image: "slide-1"
      },
      {
        id: 2,
        title: "Kejutan Valentine, Yuk Bikin Pelangganmu Makin Setia",
        paragraph: "Yuk brand yang sayang ke konsumen, warnai bulan Februari ini dengan memberikan kejutan valentine diskon ongkir bersama KiriminAja.",
        lists: [
          {id: 1, text: "Diskon pengiriman Rp 10.000"},
          {id: 2, text: "Cepat dan mudah"},
          {id: 3, text: "Hemat, aman, dan nyaman"}
        ],
        image: "slide-2"
      },
      {
        id: 3,
        title: "Bikin Website Instan yang Bisa Kirim Paket COD",
        paragraph: "Kolaborasi KiriminAja X Niagahoster membantu Anda berjualan online melalui website tanpa ribet memikirkan hal teknis, cukup upload produk saja.",
        lists: [
          {id: 1, text: "Terhindar dari potongan fee marketplace"},
          {id: 2, text: "Hemat menentukan biaya ongkir"},
          {id: 3, text: "Lebih maju dan reliable"}
        ],
        image: "slide-3"
      },
      {
        id: 4,
        title: "Khawatir Hadapi Resesi? Udah Tenang, KiriminAja!",
        paragraph: "KiriminAja berkomitmen empowering pelaku bisnis untuk berani melangkah dengan memberikan kepastian dan keandalan logistik.",
        lists: [
          {id: 1, text: "COD Funding dengan Belasan Pilihan Ekspedisi"},
          {id: 2, text: "Tersedia Layanan Dashboard dan Mobile Apps"},
          {id: 3, text: "Akademi KiriminAja untuk Bimbingan Bisnis"}
        ],
        image: "slide-4"
      }
    ]
  }),
  mounted() {
    // auto slide
    setInterval(() => {
      this.nextSlide();
    }, 10000);
  },
  methods: {
    nextSlide() {
      if (this.activeSlide !== this.slides.length) {
        this.activeSlide++;
      } else {
        this.activeSlide = 1;
      }
    },
    prevSlide() {
      if (this.activeSlide === 1) {
        this.activeSlide = this.activeSlide + (this.slides.length - this.activeSlide);
      } else {
        this.activeSlide--; 
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.slider {
  height: 600px;
  position: relative;
  overflow: hidden;
  border-radius: 15px;
}

.button {
  width: 40px;
  height: 40px;
  padding: 8px;
  border-radius: 50%;
  cursor: pointer;
  background-color: #fff;
  border: 1px solid #c9c5ca;

  &:hover {
    background-color: #EADDFF;
  }
}

.button-prev {
  top: 45%;
}

.button-next {
  top: 45%;
}
</style>