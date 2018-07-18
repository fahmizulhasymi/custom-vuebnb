<template>
    <div>
        <router-view></router-view>
        <custom-footer></custom-footer>
    </div>
</template>

<script>
import CustomFooter from '../components/Footer.vue';

export default {
  name: 'App',
  components: {
      CustomFooter
  }
}
</script>

<style>
</style>

