<template>
<div class="m-5 border p-5">
      <div class="d-flex justify-content-between">
         <h3 class=""> Roles</h3>
         
         <!-- <button class="btn btn-warning" @click="f">Add Role</button> -->
   
   <button class="btn btn-warning" @click="getModal" >
     Add Role
   </button>
      </div>
   
       <hr/>
         <div class="d-flex justify-content-between mt-10" v-for="role in roles" :key="role.id">

            <h3>
        
            {{role.name}}  
             
            </h3>
         <div>

          <span class="me-2" @click="$router.push({name:'RolePermission',params:{id:role.id}})" role="button"><i class="far fa-eye"></i></span>
  
        
         </div>
     
         </div>

</div>
<add-modal id="roleModal"/>
  

</template>

<script>
import {Modal} from 'bootstrap'
import AddModal from '../views/AddRole.vue'
import ApiClient from '../resources/baseUrl'
 export default{
   data(){
     return{
      roleModal:''
     }
   },

   components:{
      AddModal,
   },
   methods:{

    async getRolePermissions(){

         try {
               const res=await ApiClient.get('api/roles/');

               if (res.status === 200) {
                 // this.roles=res.data
               }

         } catch (error) {
            console.log('jj')
         }finally{
            console.log('jj')

         }
       },
       getModal(){
         this.roleModal.show()
       }
   },
     mounted(){
     // this.getAllRoles();
      this.roleModal=new Modal(document.getElementById('roleModal'))

   } ,
  
   computed:{
      roles(){
         return this.$store.getters.roles
      }
   }
  
 }
</script>

<style>

</style>