<template>
  <nav class="navbar-light side-bar">
    <div class="fw-bold fs-5 ps-1 my-2">Menu</div>
    <ul class="navbar-nav pt-2 px-2">
      <TheSidebar label="Dashboard" routeName="TheDashboard" />
      <TheSidebar label="MyShop" routeName="MyShop" />
      <TheSidebar label="Orders" routeName="TheOrder" />
      <!-- <TheSidebar label="Sales" routeName="TheSales" /> -->
      <TheSidebar label="Reports" routeName="TheReport" />
      <TheSidebar label="Setting" routeName="TheSetting" />
    </ul>
  </nav>
</template>

<script setup>
import TheSidebar from './SidebarItem.vue'
</script>


