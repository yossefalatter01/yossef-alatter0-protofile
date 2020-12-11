<template>
    <div>
      <div class="card mr-2 togglee h-100 shadow" style="width: 13rem;background-color: white">
      <div class="bbo">
        <p class="bbo-info">{{ title }}</p>
        <a class="btn btn-primary bto shadow" id="bto-tog" @click="opentap('https://mad-details-challenge.vercel.app/')">Visit</a>
      </div>
      <img :src="path" class="card-img-top" alt="project2" />
      <div class="card-body">
        <p class="card-text titlee text-left">
          
        </p>
      </div>
    </div>  
    </div>
</template>
<script>
export default {
    name: "MyCards",
    props:["title","langs","path"],
    data(){
        return {
            imgSrc: "../../../assets/project2.jpg",
        }
    }
}
</script>