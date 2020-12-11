<template>
    <div>
        <div class="container-fluid lood">
            <me-photo class="fliping mb-5" />
            <div class="d-flex ">
            <div class="spinner-grow thecolor mr-4 spinner-grow-md" role="status">
  <span class="sr-only">Loading...</span>
            </div>
            <div class="spinner-grow thecolor mr-4 spinner-grow-md" role="status">
  <span class="sr-only">Loading...</span>
            </div>
            <div class="spinner-grow thecolor mr-4 spinner-grow-md" role="status">
  <span class="sr-only">Loading...</span>
            </div>
            <div class="spinner-grow thecolor mr-4 spinner-grow-md" role="status">
  <span class="sr-only">Loading...</span>
            </div>
            <div class="spinner-grow thecolor mr-4 spinner-grow-md" role="status">
  <span class="sr-only">Loading...</span>
            </div>
            <div class="spinner-grow thecolor spinner-grow-md " role="status">
  <span class="sr-only">Loading...</span>
            </div> 
        </div>
        </div>
    </div>
</template>
<script>
import MePhoto from '../../HomeComponent/MePhoto/MePhoto.vue'
export default {
  components: { MePhoto },
    name: "LoaderApp",
    
}
</script>
<style lang="scss">
@import 'LoaderApp.scss';
</style>