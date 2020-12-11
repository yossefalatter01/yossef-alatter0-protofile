<template>
  <div class="about mmm2">
    <div class="d-flex container w-lg-80 w-100 mt-4 p-0 flex-column flex-lg-row px-2">
      <personal-info-card class="w-lg-50 w-100 mr-lg-3 mb-3 mb-lg-0 jumping"/>
      <skills-card class="w-lg-50 w-100 mb-4 mb-lg-0 jumping"/>
    </div>
  </div>
</template>
<script>
import PersonalInfoCard from "../components/AboutComponent/PersonalInfoCard/PersonalInfoCard.vue";
import SkillsCard from "../components/AboutComponent/SkillsCard/SkillsCard.vue";
export default {
  name: "About",
  components: {
    PersonalInfoCard,
    SkillsCard,
  },
};
</script>
<style lang="scss">
  @keyframes opening2 {
    0%{transform: scale(0) rotate(0);}
    70%{transform: scale(0.45) rotate(360deg);}
    100%{transform: scale(1) rotate(360deg);}
  }
  @media screen and (max-width: 990px){
  .mmm2{
    animation-name: openmedia;
    animation-duration: 1.5s;
    animation-timing-function: ease-in-out;
  }  
}
@media screen and (min-width: 990px){
    .mmm2{
    animation-name: opening2;
    animation-duration: 1.5s;
    animation-timing-function: ease-in-out;
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
