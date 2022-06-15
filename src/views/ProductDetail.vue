<template>
<h2>Product Detail</h2>
<div class="row border gy-5 gx-3 px-4 my-3" >
  <div class="col-md-6 col-lg-3  ">
    <h4 class="text-bold" > Product Name </h4>
    <h6> {{product.name}} </h6>

  </div>

  <div class="col-md-6 col-lg-3  5">
    <h4> Product Model </h4>
    <h6> {{product.model}} </h6>

  </div>


  <div class="col-md-6 col-lg-3">
    <h4> Product Brand </h4>
    <h6> {{product.brand}} </h6>
    </div>

  <div class="col-md-6 col-lg-3">
    <h4> Product Description </h4>
    <h6 class="fs-5 "> {{product.description}} </h6>
   </div>
  <div class="col-md-6 col-lg-3">
    <h4>  Maximum Supply Voltage </h4>
    <h6> {{product.maximum_supply_voltage}} </h6>
   </div>

  <div class="col-md-6 col-lg-3">
    <h4> Maximum Current Power </h4>
    <h6> {{product.maximum_current_power}} </h6>
   </div>
   
  <div class="col-md-6 col-lg-3">
    <h4> Product Price </h4>
    <h6> {{product.price}} </h6>
   </div>
  <div class="col-md-6 col-lg-3">
    <h4> Product Function </h4>
    <h6> {{product.function}} </h6>
   </div>

  <div class="col-md-6 col-lg-3">
    <h4> Product Application </h4>
    <h6> {{product.application}} </h6>
   </div>
    
     <div class="col-md-6 col-lg-3">
    <h4 class=""> Product Effciency </h4>
    <h6> {{product.effciency}} </h6>
   </div>

</div>
  <div class="mx-5 my-5">  
     <img class="mx-2 " width="200" height="200" v-for="img in product.images" :key="img.id" :src="img.path"/>
  </div>

 
</template>


// //
// Product Name { "id": 3, "name": "ll", "model": "HB200", "brand": "XINPUGUANG", "warranty":
//  "8months-1year", "function": "Provide Power", "application": "Home Electricity", "material":
//   "10BB PERC single crystal half cell, tempered glass,EVA, aluminum alloy frame", "effciency": 
//   "very efficient", "maximum_supply_voltage": "/30.8V", "maximum_current_power": "8.92 A", "price":
//    2500, "qty": 29, "description": "Flexible Solar Panel 100W ,200W 12V Solar Panel Kit Monocrystalline 
//    cell ,20A charge controller, extension cable，Alligator clip cable for outdoor off grid boat rv trailer (200W)", "category_id": 7, 
//    "images": [ { "id": 39, "path": "http://10.161.176.225:8000/productimages/v71Ur1655231202.gif" }, { "id": 40, "path": "http://10.161.176.225:8000/productimages/p51Gu1655231202.png" },
//  { "id": 41, "path": "http://10.161.176.225:8000/productimages/Aa7hY1655231202.gif" } ] }//
<script>
import apiClient from '../resources/baseUrl'

export default {

data(){
  return{
    product:''
  }
},
  methods:{


    async productDetail(){
     // alert(query)
       try {
        this.$store.commit("setIsLoading", true);
        const response = await apiClient.get(
          `/api/products/${this.$route.params.id}`
        );
        if (response.status === 200) {
           this.product=response.data.data
           console.log("product="+this.products)
        }
      } catch (e) {
        //
      } finally {
        this.$store.commit("setIsLoading", false);
      }
   },
  },
  created(){
    this.productDetail();
  },
}
</script>

<style>

</style>