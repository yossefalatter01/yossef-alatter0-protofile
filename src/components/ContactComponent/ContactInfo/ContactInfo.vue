<template>
    <div>
        <div class="card card-body">
            <h2 class="card-title text-left p-relative " id="headinfo">Contact Info</h2>
            <ul class="text-left card-text">
            <li class="mb-4 spero"><span class="cmo m-4">Email :</span><span class="tecmo">yossefalatter@gmail.com</span></li>
            <li class="mb-4 spero"><span class="cmo m-4">Phone :</span><span class="tecmo">01204923633</span></li>
            <li class="mb-4 spero"><span class="cmo m-4">WhatsApp :</span><span class="tecmo">01204923633</span></li>
        </ul>
        <ul class="d-flex justify-content-center impo-links flex-md-row ">
            <li class="mr-md-5 mr-4" @click="opentap('https://www.facebook.com/yossef.alatter/')"><font-awesome-icon class="face" :icon="{ prefix: 'fab', iconName: 'facebook' }" /></li>
            <li class="mr-md-5 mr-4" @click="opentap('https://www.instagram.com/yossefalatter/')"><font-awesome-icon class="inst" :icon="{ prefix: 'fab', iconName: 'instagram' }"/></li>
            <li class="mr-md-5 mr-4" @click="opentap('https://twitter.com/Yossef87138599')"><font-awesome-icon class="twit" :icon="{ prefix: 'fab', iconName: 'twitter' }"/></li>
            <li class="mr-md-5 mr-4" @click="opentap('https://github.com/yossefAlatter')"><font-awesome-icon class="gith" :icon="{ prefix: 'fab', iconName: 'github' }"/></li>
            <li class=" frmon" @click="opentap('https://www.frontendmentor.io/profile/yossefAlatter')"><img src="../../../assets/frontMonter.png"/></li>
        </ul>
        <!--  -->
        </div>
    </div>
</template>
<script>
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
library.add(faFacebook);
library.add(faInstagram);
library.add(faTwitter);
library.add(faGithub);
export default {
    name: "ContactInfo",
    methods:{
    opentap(v){
      window.open(v,"_blank");
    }
  }
}
</script>
<style lang="scss">
@import 'ContactInfo.scss';

</style>