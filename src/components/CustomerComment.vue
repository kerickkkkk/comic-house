// 目的：

<template>
  <div>
    <h2>
      <span class="border-bottom border-3 border-primary">評論</span>
    </h2>
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
          小日月
          <ol class="replay mb-2 p-3 bg-dark list-unstyled">
            <li class="border-bottom border-light py-2">
              <div class="info d-flex justify-content-between">
                <span>小明</span>
                <span>1</span>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo amet minima rem necessitatibus neque, eum debitis a? Facilis adipisci, labore quibusdam quidem, magni autem culpa expedita eum dicta sapiente ut.</p>
              <p class="text-muted">2022-02-22</p>
              <div class="sub-control">
                <button class="btn btn-link">檢舉</button>
                <button class="btn btn-link border-0">
                  <i class="fa fa-thumbs-o-up" aria-hidden="true"></i><i class="fa fa-thumbs-up" aria-hidden="true"></i>
                </button>
                <button class="btn btn-link">回覆</button>
              </div>
            </li>
            <li class="border-bottom border-light py-2">
              <div class="info d-flex justify-content-between">
                <span>小明</span>
                <span>1</span>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo amet minima rem necessitatibus neque, eum debitis a? Facilis adipisci, labore quibusdam quidem, magni autem culpa expedita eum dicta sapiente ut.</p>
              <p class="text-muted">2022-02-22</p>
              <div class="sub-control">
                <button class="btn btn-link">檢舉</button>
                <button class="btn btn-link border-0">
                  <i class="fa fa-thumbs-o-up" aria-hidden="true"></i><i class="fa fa-thumbs-up" aria-hidden="true"></i>
                </button>
                <button class="btn btn-link">回覆</button>
              </div>
            </li>
          </ol>
          This is some content from a media component. You can replace this with any content and adjust it as needed.
          This is some content from a media component. You can replace this with any content and adjust it as needed.
          <div class="sub-control">
            <button class="btn btn-link">檢舉</button>
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