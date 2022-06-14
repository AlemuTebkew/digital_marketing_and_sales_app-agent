<template>
<div>
  
</div>
  <the-header></the-header>
  <div class="d-flex">
    <div class="sidebar shadow">
      <the-sidebar></the-sidebar>
    </div>
    <div class="container-fluid position-relative ">
      <router-view></router-view>
    </div>
  </div>


  <div
    v-if="store.getters.isLoading"
    class="route-loading p-0 position-fixed top-0 start-0 bottom-0 end-0 w-100 h-100"
  >
    <div class="loading-spinner">
      <img src="../assets/loader.gif" alt="slow connection" />
    </div>
  </div>

  <!-- <the-login> -->
</template>

<script setup>
import TheSidebar from "../components/TheSidebar.vue";
import TheHeader from "../components/TheHeader.vue";
import {useStore} from 'vuex'
const store = useStore()

</script>