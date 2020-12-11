<template>
    <div class="mmm1">

        <div class="d-flex container w-80 mt-3 mt-md-4 card bemm mb-2" id="pogo">
            <div class="d-flex flex-column flex-md-row">
                <me-photo class="card p-md-5 mr-md-4 shadow phoph jumping" />
                <contact-info class="shadow jumping"/>
            </div>
        </div>
    </div>
</template>
<script>
import ContactInfo from "../components/ContactComponent/ContactInfo/ContactInfo.vue";
import MePhoto from "../components/HomeComponent/MePhoto/MePhoto.vue";
export default {
    name: "Contact",
    components: {
        ContactInfo,
        MePhoto,
    }
}
</script>
<style lang="scss">
@keyframes opening2 {
    0%{transform: scale(0) rotate(0);}
    70%{transform: scale(0.45) rotate(360deg);}
    100%{transform: scale(1) rotate(360deg);}
  }
   .bemm{
      
       justify-content: center;
       align-items: center;
   }
  
  @keyframes opening {
    0%{transform: scale(0) rotate(0);}
    70%{transform: scale(0.5) rotate(360deg);}
    100%{transform: scale(1) rotate(360deg);}
  }
  
@media screen and (max-width: 990px){
  .mmm1{
    animation-name: openmedia;
    animation-duration: 1.5s;
    animation-timing-function: ease-in-out;
  } 
  .bemm{
      padding: 5px;
  } 
  .phoph{
      margin-bottom: 18px;
      padding: 50px;
  }
  #pogo{
      background-color: transparent;
      border: none;
      outline: none;
      box-shadow: none;
  }
}
@media screen and (min-width: 990px){
    .mmm1{
    animation-name: opening2;
    animation-duration: 1.5s;
    animation-timing-function: ease-in-out;
  }
  .bemm{
       height: 540.400px;
  }
  .jumping {
    &:hover {
      -webkit-animation: jump 1s ease 0s 1 normal;
      -moz-animation: jump 1s ease 0s 1 normal;
      -ms-animation: jump 1s ease 0s 1 normal;
      animation: jump 1s ease 0s 1 normal;
    }
  }
  @-webkit-keyframes jump {
    0% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }
    20% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }
    40% {
      -webkit-transform: translateY(-30px);
      transform: translateY(-30px);
    }
    50% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }
    60% {
      -webkit-transform: translateY(-15px);
      transform: translateY(-15px);
    }
    80% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }
    100% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }
  }

  @keyframes jump {
    0% {
      transform: translateY(0);
    }
    20% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-30px);
    }
    50% {
      transform: translateY(0);
    }
    60% {
      transform: translateY(-15px);
    }
    80% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(0);
    }
  }
}
</style>