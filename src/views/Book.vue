<template>
  <div class="book container">
    <!-- 單部內容 -->
    <section>
      <div class="card mb-3 bg-dark">
        <div class="row g-0">
          <div class="col-3">
            <img :src="comic.introduction.url" class="img-fluid rounded-start" :alt="comic.introduction.title">
          </div>
          <div class="col-9">
            <div class="card-body">
              <h1 class="card-title">{{comic.introduction.title}}</h1>
              <p class="card-text">{{comic.introduction.content}}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="mb-5">
      <h2>
        <span class="border-bottom border-3 border-primary">目錄</span>
      </h2>
      <div>
        <ul class="nav nav-pills mb-2" role="tablist">
          <li v-for="page in 5" :key="page" class="nav-item" role="presentation">
            <button 
              :class="{active : currentPage === page}"
              @click="this.currentPage = page"
              class="nav-link hoverBottom rounded-0" type="button" role="tab">
              第 {{page}} 頁
            </button>
          </li>
        </ul>
        <div class="tab-content">
          <div class="tab-pane fade show active" role="tabpanel">
            <button v-for="n in 50" :key="n" class="btn btn-outline-primary me-2 mb-2">第一話: ABCDEFG {{n}} </button>
          </div>
        </div>
      </div>

    </section>
    <!-- 留言： -->
    <CustomerComment></CustomerComment>
  </div>
</template>

<script>
import CustomerComment from "@/components/CustomerComment.vue"

export default {
  name: 'Book',
  components:{
    CustomerComment
  },
  data () {
    return {
      currentPage:1,
      comic : {
        introduction: {
            title: 'title08',
            url: 'https://picsum.photos/300/400?random=80',
            content: '內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容，內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容',
            author: '作者',
            category :'分類六'
          },
        },
        data : {
          1 :[
            'https://picsum.photos/1920/540?random=80',
          ]
        }
      }

  }
}
</script>

