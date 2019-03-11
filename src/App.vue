<template>
  <div id="app">
    <div id="nav">
        <h1>Message DAPP</h1>
    </div>
    <router-view class="pages"/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
#nav {
  padding: 20px;
  background-color: rgb(0, 132, 255)
}
h1{
  color: white;
  margin: 0px
}

.pages{
  padding: 50px
}
</style>
