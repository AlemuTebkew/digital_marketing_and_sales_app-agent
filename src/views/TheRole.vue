<template>
<div class="mt-3">
      <div class="d-flex justify-content-between">
         <h3 class=""> Roles</h3>
         
         <button class="btn btn-warning" @click="f">Add Role</button>

      </div>
   
       <hr/>
         <div class="d-flex justify-content-between mt-10" v-for="role in roles" :key="role.id">

            <h3>
        
            {{role.name}}  
             
            </h3>
         <div>

          <button class="btn btn-primary" @click="$router.push({name:'RolePermission',params:{id:role.id}})">Permissions</button>

         </div>
         </div>

</div>
  

</template>

<script>
import ApiClient from '../resources/baseUrl'
 export default{
   data(){
     return{
      roles:'',
     }
   },

   methods:{

       async getAllRoles(){

         try {
               const res=await ApiClient.get('api/roles');

               if (res.status === 200) {
                  this.roles=res.data
                  console.log('allroles=='+res.data)
               }

         } catch (error) {
            console.log('jj')
         }finally{
            console.log('jj')

         }
       },
  
    async getRolePermissions(){

         try {
               const res=await ApiClient.get('api/roles/');

               if (res.status === 200) {
                  this.roles=res.data
               }

         } catch (error) {
            console.log('jj')
         }finally{
            console.log('jj')

         }
       },
   },
     mounted(){
      this.getAllRoles();
   } 
  
 }
</script>

<style>

</style>