<template>
    <div class="container">
        <!-- <h2>signup</h2>
       <ul>
         <li v-for="pro in products">
                <router-link :to="`/admin/${pro.id}`"> {{pro.name}}</router-link>
               
               </li>
           </ul>  -->

          <div class="row">
            
              <div class="col-6 offset-md-3  mt-5 pt-5">
                  <form>
                        <h4>welcome {{member}}</h4>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputEmail4">Name</label>
      <input type="text" class="form-control" id="inputEmail4" placeholder="your name" v-model="member">
    </div>
    <div class="form-group col-md-6">
      <label for="inputPassword4">Password</label>
      <input type="password" class="form-control" id="inputPassword4" placeholder="Password">
    </div>
  </div>
  <div class="form-group">
    <label for="inputAddress">Address</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="">
  </div>
  <div class="form-group">
    <label for="inputAddress2">phone number</label>
    <input type="text" class="form-control" id="inputAddress2" placeholder="">
  </div>
  <div class="form-row">
    
  <button type="submit" class="btn btn-primary" v-on:click="register">Sign in</button>
  </div>
</form>

              </div>
              </div> 
    </div>
       
</template>
<script>
export default {
    data:function(){
return{
 member:"",

    // products: [
    //             {
    //                 id:0,
    //                 name: 'sibzamini',
                  
    //             },
    //             {
    //                 id:1,
    //                 name: 'piaz',
                  
    //             },{
    //                 id:2,
    //                 name: 'gole sanaz',
                  
    //             }
    //         ]
   
}
    },
    methods:{
   register (){
       alert(this.member);
   }
    }
}
</script>