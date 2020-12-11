<template>
  <div>
    
        <div class="themo-con " id="mythemopo" >
          
          <div  class="indics py-3 px-2  shadow" @click="openpepo()"><font-awesome-icon class="" :icon="{ prefix: 'fas', iconName: 'angle-left' }" /></div>
        <div class="popmenu shadow" id="mypopmenu">
            <ul >
                <li class="text-primary" @click="winteroo()"><font-awesome-icon class="winter mr-3" :icon="{ prefix: 'fas', iconName: 'snowflake' }" />Winter</li>
                <li class="text-success" @click="springoo()"><font-awesome-icon class="spring mr-3" :icon="{ prefix: 'fas', iconName: 'seedling' }" />Spring</li>
                <li class="text-danger" @click="summeroo()"><font-awesome-icon class="summer mr-3" :icon="{ prefix: 'fas', iconName: 'umbrella-beach' }" />Summer</li>
                <li class="text-warning" @click="autumnoo()"><font-awesome-icon class="autumn mr-3" :icon="{ prefix: 'fas', iconName: 'leaf' }" />Autumn</li><hr class="p-0 m-2">
                <li class="" @click="darkoo()"><font-awesome-icon class="dark mr-3" :icon="{ prefix: 'fas', iconName: 'moon' }" />Dark Mode</li>
                <li class="text-secondary" @click="lightoo()"><font-awesome-icon class="light mr-3" :icon="{ prefix: 'fas', iconName: 'sun' }" />Light Mode</li>

            </ul>
        </div>
          
        </div>
    
  </div>
</template>
<script>
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSnowflake } from '@fortawesome/free-solid-svg-icons';
import { faSeedling } from '@fortawesome/free-solid-svg-icons';
import { faSun } from '@fortawesome/free-solid-svg-icons';
import { faUmbrellaBeach } from '@fortawesome/free-solid-svg-icons';
import { faLeaf } from '@fortawesome/free-solid-svg-icons';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';

library.add(faSnowflake);
library.add(faSeedling);
library.add(faSun);
library.add(faUmbrellaBeach);
library.add(faLeaf);
library.add(faMoon);
library.add(faAngleLeft);


export default {
  name: "ThemeApp",
  data(){
    return{
      count : 4,
    }
  },
  methods:{
    openpepo(){
      if(this.count%2===0){
        document.getElementById("mythemopo").style.transition = "all 0.8s";
        document.getElementById("mythemopo").style.transform = "translateX(0)";
        document.getElementById("mythemopo").style.zIndex = "999";
      }else{
        document.getElementById("mythemopo").style.transform = "translateX(144px)";
        document.getElementById("mythemopo").style.zIndex = "-99";
      }
      this.count++;
    },
    darkoo(){
      localStorage.setItem('dark',1);
      document.documentElement.style.setProperty(
      "--backgroundColor",
      " hsl(230, 17%, 14%)"
    );
    document.documentElement.style.setProperty(
      "--subText",
      " white"
    );
    document.documentElement.style.setProperty(
      "--mainText",
      " white"
    );
    document.documentElement.style.setProperty(
      "--cardbgColor",
      "hsl(228, 28%, 20%)"
    );
    document.documentElement.style.setProperty(
      "--photoColor",
      "rgb(117,65,200)"
    );
    document.documentElement.style.setProperty(
      "--progressColor",
      "white"
    );
    },
    lightoo(){
      localStorage.setItem('dark',0);
      document.documentElement.style.setProperty(
      "--backgroundColor",
      " rgb(248,250,247)"
    );
    document.documentElement.style.setProperty(
      "--subText",
      "  rgba(77, 77, 77, 0.514)"
    );
    document.documentElement.style.setProperty(
      "--mainText",
      " black"
    );
    document.documentElement.style.setProperty(
      "--cardbgColor",
      "white"
    );
    document.documentElement.style.setProperty(
      "--photoColor",
      "white"
    );
    document.documentElement.style.setProperty(
      "--progressColor",
      "rgb(233,236,239)"
    );
    },
    springoo(){
      localStorage.setItem('them',0);
      document.documentElement.style.setProperty(
      "--mainColor",
      " rgb(40,167,69)"
    );
    },
    winteroo(){
      localStorage.setItem('them',1);
      document.documentElement.style.setProperty(
      "--mainColor",
      "  rgb(0, 123, 255)"
    );
    },
    summeroo(){
      localStorage.setItem('them',2);
      document.documentElement.style.setProperty(
      "--mainColor",
      " rgb(220,53,69)"
    );
    },
    autumnoo(){
      localStorage.setItem('them',3);
      document.documentElement.style.setProperty(
      "--mainColor",
      "rgb(255,193,7)"
    );
    }
  },
  created(){
    if(localStorage.getItem('dark') == 1){
       document.documentElement.style.setProperty(
      "--backgroundColor",
      " hsl(230, 17%, 14%)"
    );
    document.documentElement.style.setProperty(
      "--subText",
      " white"
    );
    document.documentElement.style.setProperty(
      "--mainText",
      " white"
    );
    document.documentElement.style.setProperty(
      "--cardbgColor",
      "hsl(228, 28%, 20%)"
    );
    document.documentElement.style.setProperty(
      "--photoColor",
      "rgb(117,65,200)"
    );
    document.documentElement.style.setProperty(
      "--progressColor",
      "white"
    );
    }else{
       document.documentElement.style.setProperty(
      "--backgroundColor",
      " rgb(248,250,247)"
    );
    document.documentElement.style.setProperty(
      "--subText",
      "  rgba(77, 77, 77, 0.514)"
    );
    document.documentElement.style.setProperty(
      "--mainText",
      " black"
    );
    document.documentElement.style.setProperty(
      "--cardbgColor",
      "white"
    );
    document.documentElement.style.setProperty(
      "--photoColor",
      "white"
    );
    document.documentElement.style.setProperty(
      "--progressColor",
      "rgb(233,236,239)"
    );
    }
    if(localStorage.getItem('them') == 0){
      document.documentElement.style.setProperty(
      "--mainColor",
      " rgb(40,167,69)"
    );
    }else if(localStorage.getItem('them') == 1){
      document.documentElement.style.setProperty(
      "--mainColor",
      "  rgb(0, 123, 255)"
    );
    }else if(localStorage.getItem('them') == 2){
      document.documentElement.style.setProperty(
      "--mainColor",
      " rgb(220,53,69)"
    );
    }else if(localStorage.getItem('them') == 3){
      document.documentElement.style.setProperty(
      "--mainColor",
      "rgb(255,193,7)"
    );
    }else{
       document.documentElement.style.setProperty(
      "--mainColor",
      "  rgb(0, 123, 255)"
    );
    }
  }


};
</script>
<style lang="scss">
@import "ThemeApp.scss";
</style>