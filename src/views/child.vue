<template>
    <div class="row">
   <div class="col-12">
    <div class="sq d-flex jusrify-content-center align-content-center ">
        <div class="angel"></div>
  <div class="bg-circle">
      <div class="inner in1">
      </div>
      <div class="inner in2">
      </div>
      <div class="inner in3">
      </div>
      <div class="inner in4">
      </div>
      <div class="inner-cr">

      </div>
  </div>
  <div class="content">
<h1>Kids Name</h1>
<hr>
<h4>some text about kids dreams</h4>
  </div>
  <div class="angel2"></div>
    </div>
   </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.content{
        height:300px;
    width:430px;
    color:#0033E7;
    position:absolute;
     top: 30%;
    left: 10%;

}
.sq{
    height:500px;
    width:900px;
    border:1px solid black;
    position:relative;
    margin-top:10%;
    margin-left:5%;
    background-color:rgb(255, 255, 255);
}
.angel{
        width:150px;
    height:150px;
    background-color: rgb(255, 255, 255);
      border:5px solid  #5E3F95;
    border-radius:100%;
    position: absolute;
left: 27px;
    top: -15%;
    opacity:1;

    background-image:url(https://cdn3.iconfinder.com/data/icons/merry-cristmas/500/SingleCartoonChristmasNata_15-512.png);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
}
.angel2{
        width:200px;
    height:200px;
    background-color: rgb(19, 209, 216);
      border:5px solid  rgb(46, 219, 231);
    border-radius:100%;
    position: absolute;
    left: -83px;
    bottom: -22%;
    opacity:1;
    z-index: -1;
    animation:move 2s alternate infinite

}
.bg-circle{
    width:500px;
    height:500px;
    background-color: #5E3F95;
      border:10px solid  #5E3F95;
    border-radius:100%;
    position: absolute;
        right: -170px;
    top: 28%;
    opacity:1;
}
.inner-cr{
    
       width:250px;
    height:250px;
    border:15px solid  #5E3F95;    
    background-color: #5E3F95;
    border-radius: 100%;
    position: absolute;
right: 53%;
    top: -10%;
    opacity: 1;
    background-image: url(https://youaremom.com/wp-content/uploads/2018/04/child-happy-grass.jpg);
   background-size: cover;
   background-repeat: no-repeat;
  background-position: center;
}
.inner{
    width:50px;
    height:50px;
    border:3px solid  #7d1780;    
    background-color: #5E3F95;
    border-radius: 100%;
    position: absolute;
    opacity: 1;
    background-image: url(https://www.globalvillagespace.com/wp-content/uploads/2019/05/7-secrets-to-raising-a-happy-child.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
}
.in1{
    right: 35%;
    top:8%;
}
.in2{
    right: 35%;
    top:22%;
}
.in3{
    right: 35%;
    top:36%;
}
.in4{
    right: 35%;
    top:50%;
}
@keyframes move {
      from {bottom: -22%;}
  to {bottom: -18%;}
}
</style>