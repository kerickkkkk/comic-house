// 純顯
<template>
  <div class="overflow-hidden">
    <div class="card text-white shadow" 
      style="height: 200px;"
      role="button">
      <div class="card-img-overlay p-0">
        <div
          class="bg-cover card text-white shadow enlarge
          position-absolute top-0 bottom-0 start-0 end-0
          "
          :style="{backgroundImage: `url(${data.url})`}"
        >

      </div>
        <h3 class="card-title h5 b-0 mb-0 position-absolute bottom-0 start-0 end-0">
          <span class="bg-dark opacity-75 text-center d-block p-1">
            {{data.title}}
          </span>
        </h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    data :{
      type:Object,
      required: true
    }
  }
}
</script>

