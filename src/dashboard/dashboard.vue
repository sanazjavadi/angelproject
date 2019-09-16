<template>

<div id="page-top">

  <!-- Page Wrapper -->
  <div id="wrapper">

    <!-- Sidebar -->
  <sidebar/>
    <!-- End of Sidebar -->

    <!-- Content Wrapper -->
    <div id="content-wrapper" class="d-flex flex-column">

      <!-- Main Content -->
      <div id="content">

        <!-- Topbar -->
            <topnav/>
        <!-- End of Topbar -->

        <!-- Begin Page Content -->
        <div class="container-fluid">

          <!-- Page Heading -->
          <div class="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 class="h3 mb-0 text-gray-800">Dashboard</h1>
            <a href="#" class="d-none d-sm-inline-block btn btn-sm btn-info shadow-sm"><i class="fas fa-download fa-sm text-white-50"></i> Generate Report</a>
          </div>

          <!-- Content Row -->
         
            <!-- Earnings (Monthly) Card Example -->
         <card/>
        

          
         

          <!-- Content Row -->
   
             <maincontent/>
        </div>
        <!-- /.container-fluid -->

      </div>
      <!-- End of Main Content -->

      <!-- Footer -->
      <footer class="sticky-footer bg-white">
        <div class="container my-auto">
          <div class="copyright text-center my-auto">
            <span>Copyright &copy; Your Website 2019</span>
          </div>
        </div>
      </footer>
      <!-- End of Footer -->

    </div>
    <!-- End of Content Wrapper -->

  </div>
  <!-- End of Page Wrapper -->

  <!-- Scroll to Top Button-->
  
  <!-- Logout Modal-->
  <div class="modal fade" id="logoutModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
          <button class="close" type="button" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div class="modal-body">Select "Logout" below if you are ready to end your current session.</div>
        <div class="modal-footer">
          <button class="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
          <a class="btn btn-primary" href="login.html">Logout</a>
        </div>
      </div>
    </div>
  </div>
  </div>
 
</template>

<script>
import sidebar from './sidebardash'
import topnav from './dashboardnav'
import card from './dashboardcard'
import maincontent from './content'
import axios from 'axios'
export default {
    components:{sidebar,topnav,card,maincontent},
    created(){
      this.getfetch();
    },
    methods:{
      getfetch(){
         return axios
         .get('http://5.253.27.170:3000/v1/users/profile', {
           headers:{
             authorization :'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1NjgxNDkxNzcsImlhdCI6MTU2ODE0ODI3Nywic3ViIjoiNWQ3Njk3MjQ5OTc1MWMwMDI1ODVhNmE0In0.OpIH1rJPrX3tEG0bKV77bIblzcCK9BiqaNzCj7Dam8I'
           }
         })
         .then(res=>{
       console.log(res);
         })
         .catch(err=>
         console.log(err.response))
      }
    }
}
</script>
<style src="../css/sb-admin-2.css" scoped>

</style>