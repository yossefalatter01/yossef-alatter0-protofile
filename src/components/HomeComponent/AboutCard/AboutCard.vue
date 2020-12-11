<template>

        <div class="card shadow coko" style="width: 18rem;">
          <div class="line"></div>
  <div class="card-body">
    <h5 class="card-title bone" id="abouthead">About Me</h5>
    <p class="card-text">I'm yossef alatter . I am a beginner frontend developer interersting in building responsive website that have creative and detailed desgin .</p>
    <router-link to="/about" class="card-link btn btn-primary shadow" id="bto-tog">Show More</router-link>
  </div>
</div>

</template>
<script>
export default {
    name: "AboutCard",
}
</script>
<style lang="scss">
  @import 'AboutCard';
</style>