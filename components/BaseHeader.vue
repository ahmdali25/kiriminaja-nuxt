<template>
    <header class="mt-5">
      <div class="container mx-auto xl:w-10/12 2xl:w-9/12 px-3">
        <div class="grid grid-cols-12 gap-4 items-center">
          <div class="col-span-2">
           <NuxtLink to="/">
            <img src="../assets/logo.png" width="140" alt="Logo">
           </NuxtLink>
          </div>
          <div class="col-span-2">
            <ul class="flex gap-5 place-content-center">
              <li class="hover:font-semibold">
                <NuxtLink to="/">Home</NuxtLink>
              </li>
              <li>
                <button @click="showDropdown">
                  <span class="hover:font-semibold">Layanan</span>
                  <div v-if="dropdown" class="absolute bg-white rounded-3xl mt-2 px-4 py-4">
                    <ul>
                      <li class="px-4 py-4 py-1 rounded-3xl hover:bg-blue-50">
                        <NuxtLink to="/integration">
                          <div class="flex">
                            <div class="aspect-square p-2 rounded-full bg-primary-50">
                              <svg xmlns="http://www.w3.org/2000/svg" class="dna" width="28" height="28" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <path d="M14.828 14.828a4 4 0 1 0 -5.656 -5.656a4 4 0 0 0 5.656 5.656z" class="text-orange-300"></path>
                                <path d="M9.172 20.485a4 4 0 1 0 -5.657 -5.657"></path>
                                <path d="M14.828 3.515a4 4 0 0 0 5.657 5.657"></path>
                              </svg>
                            </div>
                            <div>
                              <h6 class="font-medium -ml-52">Integrasi API</h6>
                              <p class="text-sm text-neutral-500 ml-5"> Hubungkan bisnis online existingmu dengan kami</p>
                            </div>
                          </div>
                        </NuxtLink>
                      </li>
                    </ul>
                  </div>
                </button>
              </li>
              <li class="hover:font-semibold">
                <NuxtLink to="/about">About</NuxtLink>
              </li>
            </ul>
          </div>
          <div class="col-span-8 flex ml-auto">
            <ul class="flex gap-5 place-items-center place-content-end">
              <li class="hover:font-semibold">
                <NuxtLink to="/client">Masuk</NuxtLink>
              </li>
              <li>
                <a href="#" class="flex gap-2 text-white py-3 pl-5 pr-5 rounded-full bg-primary-700">
                  <span>Daftar Gratis</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><line x1="5" y1="12" x2="19" y2="12"></line><line x1="13" y1="18" x2="19" y2="12"></line><line x1="13" y1="6" x2="19" y2="12"></line></svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
</template>

<script>
export default {
  data: () => ({
    dropdown: false
  }),
  mounted () {
    document.addEventListener('click', this.closeDropdown)
  },
  beforeDestroy () {
    document.removeEventListener('click',this.closeDropdown)
  },
  methods: {
    showDropdown() {
      this.dropdown = !this.dropdown;
    },
    closeDropdown (e) {
      if (!this.$el.contains(e.target)) {
        this.dropdown = false
      }
    }
  }
}
</script>