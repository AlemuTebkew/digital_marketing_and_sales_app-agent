<template>
  <router-view/>
</template>
<script>
export default {
   created(){
      this.$store.dispatch('getAllRoles');
   },
}
</script>
<style>
.route-loading {
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
}
.sidebar {
  min-height: 100vh;
  width: 18em !important;
}
.loading-spinner {
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translate(-50%, -50%);
  /* z-index: 1; */
}
</style>
<style>
table {
  border-collapse: collapse;
  width: 100%;
}
/* new design change start*/
tr:last-child {
  border-bottom: 2px solid hsl(234, 6%, 33%);
}
th {
  text-align: left;
  padding: 8px;
}
tr {
  border-bottom: 2px solid hsl(233, 6%, 26%);
}
td {
  text-align: left;
  padding: 8px;
  vertical-align: top;
}

.btn-bg-primary {
  background-color: #ff7e00;
}
.warining input,
.warining textarea {
  border: 1px red solid;
}
.warining span {
  display: inline;
  color: red;
  font-size: 14px;
}
</style>

