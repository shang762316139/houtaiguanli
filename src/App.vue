<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "BeileihoutaiApp",

  data() {
    return {};
  },
  components: {},
  computed: {},
  mounted() {},

  methods: {},
};
</script>

<style >
* {
  margin: 0;
  padding: 0;
}
#app,
html,
body {
  width: 100%;
  height: 100%;
}
.layOut-content .ant-menu-item-group-title {
  padding: 0 !important;
}
</style>
