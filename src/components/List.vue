<template>
  <div class="mb-5">
    <h2 class="text-center mb-4">
      <span class="border-bottom border-3 border-primary">{{title}}</span>
    </h2>
    <Swiper v-if="data.length > 0"
      :slidesPerView="6"
      :spaceBetween="50"
      :navigation="true"
      :pagination="{ clickable: true }"
    >
      <SwiperSlide v-for="(item,i) in data" :key="i">
        <Card :data="item"></Card>
      </SwiperSlide>
    </Swiper>
    <div v-else>
      沒有資料
    </div>
  </div>
</template>
<script>
import Card from './Card.vue'
export default {
  name: 'List',
  components:{
    Card
  },
  props : {
    data:{
      type:Array,
      required:true,
      default: []
    },
    title:{
      type: String,
      required:true,
      default: '列表'
    }
  }
}
</script>
