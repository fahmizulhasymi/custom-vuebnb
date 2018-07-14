<template>
    <i class="carousel-control fa fa-2x" :class="'fa-chevron-' + this.dir"  @click="clicked"></i>
</template>

<script>
export default {
  props: ["dir"],
  methods: {
    clicked() {
      this.$emit("change-image", this.dir === "left" ? -1 : 1);
    }
  }
};
</script>
<style>
.carousel-control {
  padding: 1rem;
  color: #ffffff;
  opacity: 0.85;
  cursor: pointer;
}

@media (min-width: 744px) {
  .carousel-control {
    font-size: 3rem;
  }
}
</style>
