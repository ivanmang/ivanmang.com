<template>

  <section class="section is-small">
      <div class="intro">
        <img class="profile" src="cv.jpg">
        <h1 class="title">Ivan Mang</h1>
        <p>I am a Year 3 Computing student who has developed a good level of problem solving problem solving skills as well
          as enthusiasm for science and technology. I am eager to be challenged in order to grow and improve my
          communication and practical knowledge in software engineering, and become a software engineer in the near future.</p>
      </div>
    <hr>
    <div class="columns">
      <div class="column is-one-quarter">
        <aside class="menu">
          <p class="menu-label">
            About me
          </p>
          <ul class="menu-list">
            <li><a>About</a></li>
          </ul>
          <p class="menu-label">
            Education
          </p>
          <ul class="menu-list">
            <li><a>Imperial College London</a></li>
            <li><a>Cardiff Sixth Form College</a></li>
            <li><a>St. Paul's College</a></li>
          </ul>
        </aside>
      </div>
      <div class="column">
        <h1 class="title"> Education 🏫</h1>
        <section class="section is-small">
        <h2 class="subtitle">Imperial College London
          <a href="http://www.imperial.ac.uk/">
            <img class="icon" src="imperial.png"/>
          </a>
        </h2>
        <h4>Master of Engineering - MEng, Computing (Software Engineering)</h4>
        <h6>2016-2020</h6>
        <hr>
          <h2 class="subtitle">Cardiff Sixth Form College
            <a href="https://www.ccoex.com/">
              <img class="icon" src="cardiff.jpg"/>
            </a>
          </h2>
          <h4>GCE A-level, Maths, Further Maths, Physics and Chemistry</h4>
          <h6>2014-2016</h6>
          <hr>
          <h2 class="subtitle">St. Paul's College, Hong Kong
            <a href="http://www.spc.edu.hk/">
              <img class="icon" src="SPC.jpg"/>
            </a>
          </h2>
          <h4>Secondary School</h4>
          <h6>2009-2014</h6>
        </section>
      </div>
    </div>
  </section>
</template>

<style scoped>
  img.profile {
    margin-left: auto;
    margin-right: auto;
    border-radius: 150px;
    width: 150px;
  }
  img.icon {
    margin-left: auto;
    margin-right: auto;
    width: 40px;
    height: 40px;
  }
  div.intro {
    margin-left: auto;
    margin-right: auto;
    width: 31em;
    text-align: center;
  }
  h1.title {
    line-height: 150%;
  }
  div.content {
    margin-left: auto;
    margin-right: auto;
    width: 60em;
  }
</style>

