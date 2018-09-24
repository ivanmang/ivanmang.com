<template>
  <div>
    <navbar></navbar>
    <nuxt/>
    <footer class="footer">
      <div class="content has-text-centered">
        <p>
          Copyright © Ivan Mang 2018
        </p>
      </div>
    </footer>
  </div>
</template>

<script>
  import Navbar from '../components/Navbar'

  export default {
    components: {
      Navbar
    }
  }
</script>

<style>
  html {
    font-family: "Source Sans Pro", "Helvetica Neue", Arial, sans-serif;
  }
  .footer {
    left: 0;
    bottom: 0;
    width: 100%;
    text-align: center;
  }
</style>
