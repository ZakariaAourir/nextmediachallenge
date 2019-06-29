<template>
  <div id="app" class="back">
    <b-navbar toggleable="lg" type="dark" variant="dark">
    <b-navbar-brand href="/">NextM</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="/">Home</b-nav-item>
      </b-navbar-nav>
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-nav>
          <b-nav-item href="/login">Login</b-nav-item>
        </b-nav-nav>
        <b-nav-nav>
          <b-nav-item href="/register">Register</b-nav-item>
        </b-nav-nav>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
  <br><br>
  <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {

    }
  }
}
</script>

<style media="screen">
  body {
    background-color: #CECECE;
  }
</style>
