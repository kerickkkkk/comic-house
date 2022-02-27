// 目的：

<template>
  <div>
    <h2>評論</h2>
    <hr>
    <div class="border p-3 mb-3">
      <textarea class="form-control mb-2" id="exampleFormControlTextarea1" rows="3"></textarea>
      <div class="text-end">
        <button class="btn btn-primary">發表評論</button>
      </div>
    </div>
    <ul class="commentList list-unstyled p-3">
      <li class="d-flex border-bottom border-light p-2">
        <div class="flex-shrink-0">
          <img src="https://picsum.photos/96/96?random=80" alt="...">
        </div>
        <div class="flex-grow-1 ms-3 d-flex flex-column">
          This is some content from a media component. You can replace this with any content and adjust it as needed.
          This is some content from a media component. You can replace this with any content and adjust it as needed.
          <div class="sub-control">
            <button class="btn btn-link border-0">
              <i class="fa fa-thumbs-o-up" aria-hidden="true"></i><i class="fa fa-thumbs-up" aria-hidden="true"></i>
            </button>
            <button class="btn btn-link">回覆</button>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'CustomerComment',
  data(){
    return{
      data:{
        type:Array,
        required:true,
        default: []
      }
    }
  }
}
</script>
<style lang="scss">
  
</style>