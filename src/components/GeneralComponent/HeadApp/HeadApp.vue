<template>
<div class="d-flex container p-0">
  <div class="pengo"></div>
  <div class="navo d-flex">
      <div class="squar bg-dark p-2 rounded"  @click="showNav()">
<div class="circle rounded-circle bg-white">
        <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-star-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>
      </div>
      </div>
      <div :class="{open:show,closee:hide}">
     <ul class="mydrop d-flex rounded">
        <li class="p-2 mr-3 ">
          <router-link to="/" class="a__o"><span><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-house-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M8 3.293l6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
  <path fill-rule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
</svg></span>Home</router-link>
        </li>
        <li class=" p-2 mr-3">
          <router-link to="/about" class="a__o"><span><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-file-person" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M12 1H4a1 1 0 0 0-1 1v10.755S4 11 8 11s5 1.755 5 1.755V2a1 1 0 0 0-1-1zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4z"/>
  <path fill-rule="evenodd" d="M8 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
</svg></span>About</router-link>
        </li>
        <li class="p-2 mr-3 ">
          <router-link to="/protofile" class="a__o"><span><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-menu-up" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M15 3.207v9a1 1 0 0 1-1 1h-3.586A2 2 0 0 0 9 13.793l-1 1-1-1a2 2 0 0 0-1.414-.586H2a1 1 0 0 1-1-1v-9a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1zm-13 11a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-3.586a1 1 0 0 0-.707.293l-1.353 1.354a.5.5 0 0 1-.708 0L6.293 14.5a1 1 0 0 0-.707-.293H2z"/>
  <path fill-rule="evenodd" d="M15 5.207H1v1h14v-1zm0 4H1v1h14v-1zm-13-5.5a.5.5 0 0 0 .5.5h6a.5.5 0 1 0 0-1h-6a.5.5 0 0 0-.5.5zm0 4a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 0-1h-11a.5.5 0 0 0-.5.5zm0 4a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 0-1h-8a.5.5 0 0 0-.5.5z"/>
</svg></span>Protofile</router-link>
        </li>
        <li class="p-2 mr-3 ">
          <router-link to="/contact" class="a__o"><span><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-telephone-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M2.267.98a1.636 1.636 0 0 1 2.448.152l1.681 2.162c.309.396.418.913.296 1.4l-.513 2.053a.636.636 0 0 0 .167.604L8.65 9.654a.636.636 0 0 0 .604.167l2.052-.513a1.636 1.636 0 0 1 1.401.296l2.162 1.681c.777.604.849 1.753.153 2.448l-.97.97c-.693.693-1.73.998-2.697.658a17.47 17.47 0 0 1-6.571-4.144A17.47 17.47 0 0 1 .639 4.646c-.34-.967-.035-2.004.658-2.698l.97-.969z"/>
</svg></span>Contact</router-link>
        </li>
      </ul> 
      </div>
  </div>
</div>
</template>
<script>

export default {
  name: "HeadApp",
  data: function(){
    return {
      show: true,
      hide: false,
    }
  },
  methods:{
    showNav(){
      if(this.show){
        this.show = false;
      }else{
        this.show = true;
      }
      if(this.hide){
        this.hide = false;
      }else{
        this.hide = true;
      }
    }
  }
};

</script>
<style lang="scss">
@import 'HeadApp.scss';
</style>
