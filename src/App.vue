<template>
  <div id="app">
    <div id="myloader">
      <loader-app />
    </div>
    <div id="mycuroo">
      <div class="themoo">
      <theme-app />
      </div>
      <div class="spansos">
        <head-app />
        <!-- <theme-app /> -->
      </div>
      <div class="goog">
        <div @click="hide()" class="kknt">
          <medo-app />
        </div>
        <div :class="{ openoo: hideNav }">
          <div class="p-nav">
            <div class="medonav">
              <div class="nav-menu">
                <ul>
                  <router-link to="/" class="" tag="li">
                    <div @click="fix()">
                      <font-awesome-icon
                        class="boco"
                        :icon="{ prefix: 'fas', iconName: 'home' }"
                      />
                      <p>HOME</p>
                    </div>
                  </router-link>
                  <router-link to="/about" class="" tag="li">
                    <div @click="fix()">
                      <font-awesome-icon
                        class="boco"
                        :icon="{ prefix: 'fas', iconName: 'user' }"
                      />
                      <p>ABOUT</p>
                    </div>
                  </router-link>
                  <router-link to="/protofile" class="" tag="li">
                    <div @click="fix()">
                      <font-awesome-icon
                        class="boco"
                        :icon="{ prefix: 'fas', iconName: 'eye' }"
                      />
                      <p>PROTOFILE</p>
                    </div>
                  </router-link>
                  <router-link to="/contact" class="ggg" tag="li">
                    <div @click="fix()">
                      <font-awesome-icon
                        class="boco"
                        :icon="{ prefix: 'fas', iconName: 'phone' }"
                      />
                      <p>CONTACT</p>
                    </div>
                  </router-link>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div :class="{ cvmo: cur, gooo: hideBody }">
        <router-view />
      </div>
    </div>
  </div>
</template>
<script>
import HeadApp from "./components/GeneralComponent/HeadApp/HeadApp.vue";
import LoaderApp from "./components/GeneralComponent/LoaderApp/LoaderApp.vue";
import MedoApp from "./components/GeneralComponent/MedoApp/MedoApp.vue";
import ThemeApp from './components/GeneralComponent/ThemeApp/ThemeApp.vue';
// import ThemeApp from "./components/GeneralComponent/ThemeApp/ThemeApp.vue";
// import MedoNav from "./components/GeneralComponent/MedoNav/MedoNav.vue"
export default {
  name: "app",
  data() {
    return {
      hideNav: true,
      cur: true,
      hideBody: false,
    };
  },
  components: {
    HeadApp,
    MedoApp,
    LoaderApp,
    ThemeApp,
    // ThemeApp
    // MedoNav
  },
  methods: {
    hide() {
      this.hideNav = false;
      this.hideBody = true;
    },
    fix() {
      this.hideNav = true;
      this.hideBody = false;
    }},
  created() {
    setTimeout(() => {
      document.getElementById("myloader").style.display = "none";
      document.getElementById("mycuroo").style.display = "block";
    }, 6000);
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#mycuroo{
  display: none;
  .themoo{
    position: fixed;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    z-index: 595;
  }
}
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
@import "components/GeneralComponent/MedoNav/MedoNav.scss";
@media screen and (max-width: 990px) {
  .spansos {
    display: none;
  }
  .goog {
    display: block;
    min-width: 40px;
    min-height: 40px;
  }
  .openoo {
    display: none;
  }
  @keyframes popos {
    from {
      transform: scale(0);
    }
    to {
      transform: scale(1);
    }
  }
  .gooo {
    display: none;
  }
  .p-nav {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform-origin: top left;
    animation-name: popos;
    animation-duration: 0.8s;
    animation-timing-function: ease-out;
  }
  .kknt{
    width: 50px;
  }
}
@media screen and (min-width: 990px) {
  .spansos {
    display: block;
  }
  .goog {
    display: none;
  }
}
</style>
