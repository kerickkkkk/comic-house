<template>
  <!-- layout nav -->
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <!-- active 控制當下頁面 -->
            <router-link to="/" class="nav-link" :class="{active: $route.name === 'Home'}">首頁</router-link> 
          </li>
          <li class="nav-item">
            <!-- active 控制當下頁面 -->
            <router-link to="/book" class="nav-link" :class="{active: $route.name === 'Book'}">單本</router-link> 
          </li>
          <li class="nav-item">
            <!-- active 控制當下頁面 -->
            <router-link to="/book-page" class="nav-link" :class="{active: $route.name === 'BookPage'}">單頁</router-link> 
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">註冊</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <router-view/>
  <!-- layout footer -->
  <footer class="py-5 bg-dark">
    <div class="container text-center">
        僅作練習使用
    </div>
  </footer>
</template>

<script>
export default {
  name:'App',
  mounted(){
    // sweet alert
    // this.$swal('Hello Vue world!!!')
  }
}
</script>
<style lang="scss">
@import '~bootstrap/dist/css/bootstrap.css';
@import "./assets/stylesheet/all.scss";
@import url('https://fonts.googleapis.com/css2?family=Festive&display=swap');

.navbar-brand{
  font-family: 'Festive', cursive;
}
</style>
