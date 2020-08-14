<template>
  <div id="app" class="home">
    <img class="logo" alt="Vue logo" src="./assets/logo.png" />
    <router-view />
  </div>
</template>
<script>
export default {
  components: {}
};
</script>
<style lang="scss">
@import "@/assets/normalize.scss";
.home {
  min-height: 100vh;
  background: rgb(65, 184, 131);
  background: linear-gradient(
    90deg,
    rgba(65, 184, 131, 1) 0%,
    rgba(53, 73, 94, 1) 100%
  );
}
.logo {
  filter: drop-shadow(2px 4px 6px black);
  transition: 0.5s;
  margin: 20px;
  &:hover {
    transform: scale(1.1);
  }
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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
</style>
