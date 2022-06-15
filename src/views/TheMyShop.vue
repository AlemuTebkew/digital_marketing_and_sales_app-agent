<template>
  <h5>Product Details</h5>
  <div>
    In the product section, you will review and manage 
    all products with their details. You can view and edit 
    many information such as product name, description, stock, price and more.
  </div>

  <ul class="nav mt-4">
  <li class="nav-item-tab">
  <a  class="nav-link text-black" role="button" @click="fetchProducts('all')">
        All Products
   </a>  </li>
  <li class="nav-item " >
  <a  class="nav-link text-black" role="button" @click="fetchProducts('outstock')">
        Out Stock
   </a>  </li>
  <li class="nav-item">
   <a  class="nav-link text-black" role="button" @click="fetchProducts('instock')">
        In stock
   </a>  
   </li>

    <li class="nav-item">
   <a  class="nav-link text-black" role="button" @click="fetchProducts('active')">
        Active
   </a>  
   </li>

    <li class="nav-item">
   <a  class="nav-link text-black " role="button" @click="fetchProducts('inactive')">
        In Active
   </a>  
   </li>

    <li class="nav-item">
   <a  class="nav-link text-black " role="button" @click="fetchProducts('pending')">
         pending
   </a>  
   </li>
</ul>
  
  
<hr class="mt-0 "/>
<div class="d-flex justify-content-between p-2 selection-bar">
   <div class="d-flex  border rounded">
      <input type="text"  class="form-control search-input" placeholder="Search" aria-label="search" aria-describedby="basic-addon2"/>
        <span role="button"  class="input-group-text search rounded-0" id="basic-addon2">
            <i class="fas fa-search"></i>
        </span>           
   </div>
   
   <div class="d-flex">
      <div class="pe-2">
        <select
          class="form-select"
          aria-label="selectFilte"
        >
          <option value=" ">Sort</option>
          <option>
            Lowest to Higest Price
          </option>
        </select>
      </div>
      <div>
        <select
          class="form-select"
          aria-label="selectFilterRegion"
        >
          <option value=" ">Filter</option>
          <option>
             Category
          </option>
        </select>
      </div>

       <div>
        <button class="btn bg-white border">
          <span class=""> <i class="fa-solid fa-file-export"></i> </span>  
          Export
        </button>

        
      </div>
     </div>
    </div>
  <!-- Table -->
      <table class="mt-2">
      <tr>
        <th>No</th>
        <th>Sku</th>
        <th>Image</th>
        <th>Title</th>
        <th>Category</th>
         <th>Product Stock</th>
        <th>Product Price</th>
        <th>Status</th>
        <th><span class="sr-only">Action</span></th>
      </tr>
      <tr
        v-for="(product,index) in products"
        :key="product.id"
      >
        <td>{{index+1}}</td>
        <td>{{product.model}}</td>
        <td>
          <img
            :src="product.images?.path"
            width="100"
            height="100"
            alt="product image"
          />
        </td>
        <td>{{product.name}}</td>
        <td>{{product.category?.title}}</td>
        <td>{{product.price}}</td>
        <td>{{product.qty}}</td>
        <td>{{product.isActive ? 'In Stock' : 'Out Stock'}}</td>
        <td
        >
          <span class="me-2" @click="$router.push({name:'ProductDetail'})" role="button"
            ><i class="far fa-eye"></i
          ></span>
        
        </td>
      </tr>
    </table>
    <!-- <add-product-modal :isAddModalVisible="isAddModalVisible" @closeAddModal="closeAddModal"/> -->
</template>

<script>

import apiClient from '../resources/baseUrl'
// import {useStore} from 'vuex'
export default {
  
  data(){
     return {
          products:''
     }
  },
  methods:{


    async fetchProducts(query){
       try {
        this.$store.commit("setIsLoading", true);
        const response = await apiClient.get(
          '/api/products'+"?filter="+query
        );
        if (response.status === 200) {
           this.products=response.data.data
           console.log(this.products)
        }
      } catch (e) {
        //
      } finally {
        this.$store.commit("setIsLoading", false);
      }
   },

       async filterProducts(){
       try {
        this.$store.commit("setIsLoading", true);
        const response = await apiClient.get(
          '/api/products'
        );
        if (response.status === 200) {
           this.products=response.data.data
           console.log(this.products)
        }
      } catch (e) {
        //
      } finally {
        this.$store.commit("setIsLoading", false);
      }
   },
    },

    mounted(){
     this.fetchProducts()

    }
    
  }
 
 
  


</script>

<style>
  .search-input{
    border-bottom-right-radius: 0 !important;
    border-top-right-radius: 0 !important;
}
.selection-bar{
  background-color: rgb(250, 250, 250);
}
  .input-group{
    padding: 0 !important;
    margin: 0 !important;
  }
table {
  border-collapse: collapse;
  width: 100%;
}
/* new design change start*/
tr:last-child {
  border-bottom: 2px solid #f1f1f1;
}
th {
  text-align: left;
  padding: 8px;
}
tr {
  border-bottom: 2px solid #f1f1f1;
}
td {
  text-align: left;
  padding: 8px;
  vertical-align: top;
}
.text-dark-blue {
  color: #2f4587;
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
