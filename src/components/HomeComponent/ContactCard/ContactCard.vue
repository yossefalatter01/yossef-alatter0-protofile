<template>

        <div class="card shadow coko" style="width: 18rem;">
            <div class="line"></div>
  <div class="card-body">
    <h5 class="card-title bone" id="contacthead">Contact Me</h5>
    <p class="card-text text-left">
        if you want to contact me i am always available in any time to answer your question .to show my media click the show more
    </p>
    <router-link to="/contact" class="card-link btn btn-primary shadow" id="bto-tog">Show More</router-link>
  </div>
</div>

</template>
<script>
export default {
    name: "ContactCard",
}
</script>
<style lang="scss">
  @import 'ContactCard' ;
</style>