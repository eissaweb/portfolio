<template>
  <div class="container-fluid ">

      <div class="">
        <div class="row justify-content-start">
          <div class="sidebar col-md-4 col-lg-3 col-sm-5">
            <SideBar />
          </div>
          <div class="content container bg- mt- rounded-lg p-3 col-lg-9 col-md-8 col-sm-7">
             <Navbar />
            <router-view/>
          </div>
        </div>
      </div>
  </div>
</template>
<script>
  import SideBar from './components/SideBar.vue'
  import Navbar from './components/Navbar.vue'

  export default {
    components: {
      SideBar,
      Navbar,
    }
  }
</script>
<style  lang="scss">
  @import './styles/main.scss';
  @import './styles/sidebar.scss';
</style>