<template>
  <div class="home">
    <!-- 橫幅廣告一些熱門的 -->
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
      <List :data="images" title="漫畫分類"></List>
    </section>
    <!-- 推薦的區塊與介紹可以寫在這邊 -->
    <section class="vh-50 bg-dark container-fluid">
      <div class="row no-gutters h-100">
        <div v-for="image in imagesOnlyFour" :key="image" class="col-3 bg-cover parallax h-100 d-flex justify-content-center align-items-center" 
          :style="{backgroundImage:`linear-gradient(to right,rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8) ),url(${image.url})`}">
          <div>
            <h3>{{image.title}}</h3>
            <p>{{image.content}}</p>
          </div>
        </div>
      </div>
    </section>
    <!-- 主要展示區 -->
    <main class="container py-5">
      <div class="row">
        <div class="col-8">
          <ul class="nav nav-pills mb-2" role="tablist">
            <li v-for="category in categories" :key="category" class="nav-item" role="presentation">
              <button 
                :class="{active : currentCategory === category}"
                @click="this.currentCategory = category"
                class="nav-link hoverBottom rounded-0" type="button" role="tab">
                {{category}}
              </button>
            </li>
          </ul>
          <div class="tab-content">
            <div class="tab-pane fade show active" role="tabpanel">
              <div class="container-fluid ps-0 overflow-scroll" style="height: 50vh">
                <div class="row">
                  <div v-for="card in filterImage" :key="card" class="col-3 mb-2">
                    <Card :data="card"></Card>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-4">
          <aside class="p-3">
            <h4 class="mb-3">
              <span class="border-bottom border-3 border-primary">索引</span>
            </h4>
            <button v-for="comicIndex in comicIndexs" :key="comicIndex" class="btn btn-sm btn-primary me-2 mb-2">
              {{comicIndex}}
            </button>
          </aside>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
// @ is an alias to /src
import Card from '@/components/Card.vue'
import List from '@/components/List.vue'

export default {
  name: 'Home',
  components:{
    Card,
    List
  },
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
          category :'分類一'
        },
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
          category :'分類一'
        },
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
          category :'分類一'
        },
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
          category :'分類一'
        },
        {
          title: 'title04',
          url: 'https://picsum.photos/1920/540?random=40',
          content: '內容內容',
          author: '作者',
          category :'分類一'
        },
        {
          title: 'title11',
          url: 'https://picsum.photos/1920/540?random=90',
          content: '內容內容',
          author: '作者',
          category :'分類一'
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
          category :'分類五'
        },
        {
          title: 'title08',
          url: 'https://picsum.photos/1920/540?random=80',
          content: '內容內容',
          author: '作者',
          category :'分類六'
        },

      ],
      currentCategory:'分類一',
      comicIndexs:['冒險', '音樂','戰爭']
    }
  },
  computed:{
    categories(){
      return [... new Set(this.images.map(image => image.category))] || []
    },
    filterImage (){
      return this.images.filter(image => image.category === this.currentCategory)
    },
    imagesOnlyFour(){
      return this.images.filter((image, i) => i < 4)
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