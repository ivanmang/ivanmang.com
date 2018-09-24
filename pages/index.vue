<template>
  <section class="section is-medium">
    <div class="columns">
      <div class="column is-one-third">
        <img src="profile.jpg" class="center"/>
      </div>
      <div class="column">
          <h2 class="subtitle">Hello, I am</h2>
          <h1 class="title">Ivan Mang</h1>
          <p>A Computing Student at Imperial College London </p>
        <section class="section is-small">
          <div class="column">
            <a style="margin-right:20px;" href="https://www.linkedin.com/in/ivan-mang-632a4a134/" target="_blank">
              <font-awesome-icon :icon="['fab', 'linkedin']" size="2x" />
            </a>
          </div>
          <div class="column">
            <a style="margin-right:20px;" href="https://www.facebook.com/ivan.mang.3" target="_blank">
              <font-awesome-icon :icon="['fab', 'facebook-square']" size="2x"/>
            </a>
          </div>
          <div class="column">
            <a style="margin-right:20px;" href="https://twitter.com/IvanMang1" target="_blank">
              <font-awesome-icon :icon="['fab', 'twitter-square']" size="2x"/>
            </a>
          </div>
          <div class="column">
            <a style="margin-right:20px;" href="https://github.com/ivanmang" target="_blank">
              <font-awesome-icon :icon="['fab', 'github-square']" size="2x"/>
            </a>
          </div>
          <div class="column">
            <a style="margin-right:20px;" href="mailto:ivanmang1997@gmail.com" target="_blank">
              <font-awesome-icon :icon="['fas', 'envelope-square']" size="2x"/>
            </a>
          </div>
        </section>
      </div>
    </div>
  </section>
</template>

<script>
  import { fas } from '@fortawesome/free-solid-svg-icons'
  import { faGithub } from '@fortawesome/free-brands-svg-icons'
  export default {
    computed: {
      fas () {
        return fas
      },
      faGithub () {
        return faGithub
      }
    },
  }
</script>

<style scoped>

  h1.title {
    line-height: 200%;
  }

  .column {
    float: left;
    padding: 10px;
  }

  .center {
    display: block;
    margin-left: auto;
    margin-right: auto;
    border-radius: 200px;
    width: 50%;
  }
</style>
