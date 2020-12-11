<template>
  <div class="home d-flex justify-content-center align-items-center mmm0">
    <div class="container w-80 mt-4">
      <div class="bbo">
        <div class="row">
          <about-card class="col-lg-4 text-left a1 jumping" />
          <me-photo class="col-lg-4 a2 jumping" />
          <contact-card
            class="col-lg-4 d-flex text-left justify-content-center-start a3 jumping"
          />
        </div>
        <div class="row mt-4"><protofile-card class="col-12 jumping" /></div>
      </div>

      <div class="bbk">
        <div class="row ml-3 mr-3">
          <me-photo class="col-12 mb-4" />
          <about-card class="col-12 text-left mb-4" />
          <protofile-card class="col-12 mb-4 p-0" />
          <contact-card
            class="col-12 d-flex text-left justify-content-center-start mb-4"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import AboutCard from "../components/HomeComponent/AboutCard/AboutCard.vue";
import ContactCard from "../components/HomeComponent/ContactCard/ContactCard.vue";
import ProtofileCard from "../components/HomeComponent/ProtofileCard/ProtofileCard.vue";
import MePhoto from "../components/HomeComponent/MePhoto/MePhoto.vue";
export default {
  name: "Home",
  components: {
    AboutCard,
    ContactCard,
    ProtofileCard,
    MePhoto,
  },
};
</script>
<style lang="scss">
@keyframes opening {
  0% {
    transform: scale(0) rotate(0);
  }
  70% {
    transform: scale(0.5) rotate(360deg);
  }
  100% {
    transform: scale(1) rotate(360deg);
  }
}
@keyframes openmedia {
  from {
    visibility: hidden;
    opacity: 0;
  }
  to {
    visibility: visible;
    opacity: 1;
  }
}
@media screen and (max-width: 990px) {
  .bbk {
    display: block;
    position: absolute;
    top: 66px;
    left: 0;
  }
  .bbo {
    display: none;
  }
  .mmm0 {
    height: 0;
    animation-name: openmedia;
    animation-duration: 1.5s;
    animation-timing-function: ease-in-out;
  }
}
@media screen and (min-width: 990px) {
  .bbk {
    display: none;
  }
  .bbo {
    display: block;
  }
  .mmm0 {
    animation-name: opening;
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