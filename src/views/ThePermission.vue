<template>
<div class="m-5">
   
     <div class="d-flex">
            <input class="form-control w-50 mx-3" type="text" v-model="role.name"/>
            <button type="button"  class="form-control btn btn-sm btn-warning savechange" @click="updateRole">SaveChange</button>

      </div>
      
   <h3 class="mt-2"> Permissions</h3>
   <div class="row mt-2">

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
      role:{
       
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
       filterRole(){
         this.roles.forEach(role=>{
            console.log('filter',this.$route.params.id)
            if(role.id *1 === this.$route.params.id *1){
            this.role=role
            console.log('filter',this.role)
            }
         })
       },

       async updateRole(){

            try {
            const res=await ApiClient.post('api/roles',{name:this.role.name})

            if (res.status === 201) {
                console.log('saved')
                this.successMessage='Role Added Successfully'
                this.roleModal.hide()
            }
        
        } catch (error) {
            this.successMessage='error while saving'
         }
         }
  
   },
     mounted(){
      this.getRolePermissions();
      this.getAllPermissions();
   } ,
    computed:{
      roles(){
         return this.$store.getters.roles
      }
   },
   created(){
      this.filterRole();

   }
  
 }
</script>

<style>
.savechange{
   /* float: right; */
   width: 100px;
}
</style>