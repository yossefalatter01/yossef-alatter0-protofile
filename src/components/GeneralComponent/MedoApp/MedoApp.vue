<template>
    <div >
        <div class="pt-3 pl-3">
        <div class="squarooo">
            <div class="mystar">
       <font-awesome-icon class="staroo" :icon="{ prefix: 'fas', iconName: 'star' }" />
    </div>
        </div>
    </div>
    </div>
</template>
<script>
import { library } from "@fortawesome/fontawesome-svg-core";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
library.add(faStar);
library.add(faHome);
library.add(faUser);
library.add(faEye);
library.add(faPhone);

export default {
    name: "MedoApp",
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
}
</script>
<style lang="scss">
@import 'Medo.scss';
</style>