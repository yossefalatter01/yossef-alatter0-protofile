<template>
    <div class="mmm3">

        <div class="container w-80  mt-4 beyo card d-flex justify-content-center align-items-center hg">
            <h3 class="card-title bone mb-5 mb-sm-3" style="color: var(--mainText)">My Projects</h3>
            <my-projects />
        </div>
    </div>
</template>
<script>
import MyProjects from "../components/ProtofileComponent/MyProjects/MyProjects.vue";

export default {
    name: "Protofile",
    components: {
        MyProjects,
      
    }
}
</script>
<style lang="scss">
.mmm3{
    overflow: hidden;
}
@media screen and (max-width: 990px){
.hg{
    padding: 20px;
    height: 74vh;
}
}
@media screen and (min-width: 990px){
    .mmm3{
    animation-name: opening0;
    animation-duration: 1.5s;
    animation-timing-function: ease-in-out;
  }
  @keyframes opening0 {
    0%{transform: scale(0) rotate(0);}
    70%{transform: scale(0.5) rotate(360deg);}
    100%{transform: scale(1) rotate(360deg);}
  }
  .beyo{
       height: 540.400px;
       align-items: center;
       justify-content: center;
       overflow: hidden;
  }
}

</style>