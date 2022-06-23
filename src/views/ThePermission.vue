<template>
<div class="my-6">
   <h3 class="my-10"> Permissions</h3>
   <div class="row my-10">

      <form @submit.prevent="assignPermissions()">
       <div class=""  >

         <div class="form-check" v-for="permission in permissions" :key="permission.id" >
         <input class="form-check-input" type="checkbox" :value="permission.id" v-model="checkValues" id="flexCheckDefault">
         <label class="form-check-label" for="flexCheckDefault">
            {{permission.name}}  
         </label>
         </div>

      </div>

       <div class="form-group">
          <button class="btn btn-primary" type="submit">Assign Permissions</button>

      </div>

      
      </form>
   
  </div>
</div>
  

</template>

<script>
import ApiClient from '../resources/baseUrl'
 export default{
   data(){
     return{
      permissions:'',
      rolePermissions:[],
      sendData:{
         sendpermissions:[],
      },
      checkValues:[],
     }
   },

   methods:{

       async getAllPermissions(){

         try {
               const res=await ApiClient.get('api/permissions');

               if (res.status === 200) {
                  console.log('allperm='+res.data)
                  this.permissions=res.data
               }

         } catch (error) {
            console.log('jj')
         }finally{
            console.log('jj')

         }
       },


        async getRolePermissions(){

         try {
               const res=await ApiClient.get('api/roles/'+this.$route.params.id);

               if (res.status === 200) {
                  console.log('roleperm='+res.data)
                  this.rolePermissions=res.data
                  this.checkValues=res.data
               }

         } catch (error) {
            console.log('jj')
         }finally{
            console.log('jj')

         }
       },
         async assignPermissions(){
         // this.sendData.role=this.$route.params.id
         // this.sendData.permissions.push(this.checkValues)
         //            console.log(this.sendData)
         
         try {
               const res=await ApiClient.post('api/assign_permission/'+this.$route.params.id,{permissions:this.checkValues});

               if (res.status === 200) {
                  
                  console.log('permission granted')
               }

         } catch (error) {
            console.log('jj')
         }finally{
            console.log('jj')

         }
       },
  
   },
     mounted(){
      this.getRolePermissions();
      this.getAllPermissions();
   } 
  
 }
</script>

<style>

</style>