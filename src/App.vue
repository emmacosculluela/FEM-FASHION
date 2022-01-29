<template>
  <div id="app">
    <b-navbar toggleable="md" type="light" variant="white"> 
      <b-container> 
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-navbar-brand href="#" id="logo">FEM FASHION</b-navbar-brand>
      </b-container>
    <b-collapse is-nav id="nav-collapse"> 
      <b-navbar-nav>
        <b-nav-item :to="{name:'Home'}" exact>Home</b-nav-item>
        <b-nav-item :to="{name:'70s'}">70s</b-nav-item>
        <b-nav-item :to="{name:'80s'}">80s</b-nav-item>
        <b-nav-item :to="{name:'90s'}">90s</b-nav-item>
        <b-nav-item :to="{name:'TrendPrediction'}">TrendPrediction</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
    </b-navbar>
    <router-view/>
    <Footer1 />
    <Footer2 />
  </div>
</template>

<style>
#app {
  font-family: Georgia, 'Times New Roman', Times, serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color:black;
}

#logo {
  font-family: Vogue-Regular;
  letter-spacing: 5px;
  font-size: 2em;
}

#nav-collapse a {
  font-weight: bold;
  color: black;
}

#nav-collapse a.router-link-exact-active {
  color: #fa7b74;
}

#nav-collapse a:hover {
  color: grey;
}

</style>

<script>
import Footer1 from './components/Footer1'
import Footer2 from './components/Footer2'
export default {
  name: 'App',
  components: {
    Footer1,
    Footer2
  },
}
</script>
