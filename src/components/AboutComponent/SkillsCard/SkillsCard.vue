<template>
  <div>
    <div class="card card-body shadow text-left popacto">
      <h2 class="card-title p-relative" id="skillhead">Skills</h2>
      <ul>
        <li class="mb-3">
          <div class="spero1 pb-1"><span class="text-danger m-4">HTML</span></div>
          <div class="progress">
            <div
              class="progress-bar progress-bar-striped progress-bar-animated bg-danger"
              role="progressbar"
              style="width: 50%;"
              aria-valuenow="50"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              50%
            </div>
          </div>
        </li>
        <li class="mb-3">
          <div class="spero2 pb-1"><span class="text-info m-4">CSS</span></div>
          <div class="progress">
            <div
              class="progress-bar progress-bar-striped progress-bar-animated bg-info"
              role="progressbar"
              style="width: 60%;"
              aria-valuenow="60"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              60%
            </div>
          </div>
        </li>
        <li class="mb-3">
          <div class="spero3 pb-1"><span class="text-warning m-4">JS</span></div>
          <div class="progress">
            <div
              class="progress-bar progress-bar-striped progress-bar-animated bg-warning"
              role="progressbar"
              style="width: 40%;"
              aria-valuenow="40"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              40%
            </div>
          </div>
        </li>
        <li class="mb-3">
          <div class="spero6 pb-1"><span class="text-primary m-4">JQuery</span></div>
          <div class="progress">
            <div
              class="progress-bar progress-bar-striped progress-bar-animated "
              role="progressbar"
              style="width: 20%;"
              aria-valuenow="20"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              20%
            </div>
          </div>
        </li>
        <li class="mb-3">
          <div class="spero4 pb-1"><span class="text-boot m-4">Bootstrap</span></div>
          <div class="progress">
            <div
              class="progress-bar progress-bar-striped progress-bar-animated bg-boot"
              role="progressbar"
              style="width: 35%;"
              aria-valuenow="35"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              35%
            </div>
          </div>
        </li>
        <li class="mb-3">
          <div class="spero5 pb-1"><span class="text-scss m-4">Scss</span></div>
          <div class="progress">
            <div
              class="progress-bar progress-bar-striped progress-bar-animated bg-sass"
              role="progressbar"
              style="width: 45%;"
              aria-valuenow="45"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              45%
            </div>
          </div>
        </li>
        <li class="mb-1">
          <div class="spero6 pb-1"><span class="text-success m-4">Vue.js</span></div>
          <div class="progress">
            <div
              class="progress-bar progress-bar-striped progress-bar-animated bg-success"
              role="progressbar"
              style="width: 20%;"
              aria-valuenow="20"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              20%
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "SkillsCard",
};
</script>
<style lang="scss" >
@import "SkillsCard";
</style>
