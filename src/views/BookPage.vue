<template>
  <div class="book py-4">
    <!-- 上頁分業 -->
    <nav class="d-flex justify-content-center mb-3">
      <ul class="pagination justify-content-center mb-0 me-3">
        <li class="page-item">
          <a class="page-link" href="#" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        <li class="page-item">
          <select class="form-select rounded-0">
            <option value="1">第 1 頁</option>
            <option value="2">第 2 頁</option>
            <option value="3">第 3 頁</option>
          </select>
        </li>
        <li class="page-item">
          <a class="page-link" href="#" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
      <div class="perPage d-flex align-items-center">
        <span class="text-nowrap">每頁：</span>
        <select class="form-select me-2">
          <option value="1">1</option>
          <option value="10">10</option>
          <option value="100">100</option>
        </select>
        <span>筆</span>
      </div>
    </nav>
    <!-- 單部內容 -->
    <div class="container">
      <ol class="list-unstyled">
        <li v-for="n in 5" :key="n" class="img-box position-relative mb-2">
          <img class="mx-auto d-block" :src="`https://picsum.photos/600/900?random=${n*10}`" alt="">
        </li>
      </ol>
    </div>
    <!-- 下部分頁 -->
    <nav class="d-flex justify-content-center mb-3">
      <ul class="pagination justify-content-center me-3 mb-0">
        <li class="page-item">
          <a class="page-link" href="#" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        <li class="page-item">
          <a class="page-link" href="#">
            1
          </a>
        </li>
        <li class="page-item">
          <a class="page-link" href="#">
            2
          </a>
        </li>
        <li class="page-item">
          <select class="form-select rounded-0">
            <option value="1">第 1 頁</option>
            <option value="2">第 2 頁</option>
            <option value="3">第 3 頁</option>
          </select>
        </li>
        <li class="page-item">
          <a class="page-link" href="#">
            3
          </a>
        </li>
        <li class="page-item">
          <a class="page-link" href="#">
            4
          </a>
        </li>
        <li class="page-item">
          <a class="page-link" href="#" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>

    <!-- 留言： -->

  </div>
</template>

<script>
export default {
  name: 'BookPage',
  data () {
    return {
    }
  }
}
</script>

