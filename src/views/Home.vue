<template>
  <div class="home">
    <section class="banner container">
      <Swiper
        :slidesPerView="1"
        :spaceBetween="50"
        navigation
        :pagination="{ clickable: true }"
      >
        <SwiperSlide v-for="(image,i) in images" :key="i">
          <img :src="`${image.url}`" class="vh-50">
        </SwiperSlide>
      </Swiper>
    </section>
    <section class="Classification container py-5">
      <h2 class="text-center mb-3">漫畫分類</h2>
      <Swiper
        :slidesPerView="6"
        :spaceBetween="50"
        :navigation="true"
        :pagination="{ clickable: true }"
      >
        <SwiperSlide v-for="(image,i) in images" :key="i">
          <div class="overflow-hidden">
            <div class="card text-white shadow" 
              style="height: 200px;"
              role="button">
              <!-- <img :src="`${image.url}`" class="card-img" :alt="`${image.title || ''}`"> -->
              <div class="card-img-overlay p-0">
                <div
                  class="bg-cover card text-white shadow enlarge
                  position-absolute top-0 bottom-0 start-0 end-0
                  "
                  :style="{backgroundImage: `url(${image.url})`}"
                >

              </div>
                <h3 class="card-title h5 b-0 mb-0 position-absolute bottom-0 start-0 end-0">
                  <span class="bg-dark opacity-75 text-center d-block p-1">
                    {{image.title}}
                  </span>
                </h3>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  data(){
    return{
      images : [
        {
          title: 'title01',
          url: 'https://picsum.photos/1920/540?random=10',
          content: '內容內容',
          author: '作者',
          category :'分類一'
        },
        {
          title: 'title02',
          url: 'https://picsum.photos/1920/540?random=20',
          content: '內容內容',
          author: '作者',
          category :'分類一'
        },
        {
          title: 'title03',
          url: 'https://picsum.photos/1920/540?random=30',
          content: '內容內容',
          author: '作者',
          category :'分類二'
        },
        {
          title: 'title04',
          url: 'https://picsum.photos/1920/540?random=40',
          content: '內容內容',
          author: '作者',
          category :'分類二'
        },
        {
          title: 'title05',
          url: 'https://picsum.photos/1920/540?random=50',
          content: '內容內容',
          author: '作者',
          category :'分類二'
        },
        {
          title: 'title06',
          url: 'https://picsum.photos/1920/540?random=60',
          content: '內容內容',
          author: '作者',
          category :'分類三'
        },
        {
          title: 'title07',
          url: 'https://picsum.photos/1920/540?random=70',
          content: '內容內容',
          author: '作者',
          category :'分類三'
        },
        {
          title: 'title08',
          url: 'https://picsum.photos/1920/540?random=80',
          content: '內容內容',
          author: '作者',
          category :'分類六'
        },

      ],
    }
  },
  mounted(){
    // const url =  'http://127.0.0.1:8100'
    // axios => this.$http
    // this.$http.get(url).then(res => {
    //   console.log(res)
    // }).catch(e => console.log(e))
  }
}
</script>

<style lang="scss">

  
</style>