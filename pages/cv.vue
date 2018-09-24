<template>

  <section class="section is-small">
      <div class="intro">
        <a name="about"></a>
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
            <li><a href="#about">About</a></li>
          </ul>
          <p class="menu-label">
            Education
          </p>
          <ul class="menu-list">
            <li><a href="#imperial">Imperial College London</a></li>
            <li><a href="#csfc">Cardiff Sixth Form College</a></li>
            <li><a href="#spc">St. Paul's College</a></li>
          </ul>
          <p class="menu-label">
            Work Experience
          </p>
          <ul class="menu-list">
            <li><a href="#pwc">PwC, HK</a></li>
            <li><a href="#hopeson">Hopeson Investment Limited</a></li>
            <li><a href="#ricoh">RICOH, UK</a></li>
          </ul>
        </aside>
      </div>

      <div class="column">
        <h1 class="title"> Education 🏫</h1>
        <section class="section is-small">
          <div class="columns">
            <div class="column">
              <a name="imperial"></a>
              <h2 class="subtitle">Imperial College London
                <a href="http://www.imperial.ac.uk/">
                  <img class="icon" src="imperial.png"/>
                </a>
              </h2>
              <h4>Master of Engineering - MEng, <a href="https://www.imperial.ac.uk/study/ug/courses/computing-department/meng-computing-software-engineering-/">Computing (Software Engineering)</a> </h4>
              <h6>2016-2020</h6>
            </div>
            <div class="column">
              <section class="section is-small">
                <i>Activities:</i>
                <li>Treasurer of <a href="https://www.imperialcollegeunion.org/activities/a-to-z/pass">ICPASS</a></li>
                <li>Treasurer of <a href="https://www.imperialcollegeunion.org/search/union/interact">Imperial College Interact</a></li>
              </section>
            </div>
          </div>
        <hr>
          <div class="columns">
            <div class="column">
              <a name="csfc"></a>
              <h2 class="subtitle">Cardiff Sixth Form College
                <a href="https://www.ccoex.com/">
                  <img class="icon" src="cardiff.jpg"/>
                </a>
              </h2>
              <h4>GCE A-level, Maths, Further Maths, Physics and Chemistry</h4>
              <h6>2014-2016</h6>
            </div>
            <div class="column">
              <section class="section is-small">
                <i>Activities:</i>
                <li>School representative of Engineering Education Scheme Wales</li>
                <li>IT director of Young Enterprise Scheme</li>
                <li>Member of Engineering Society</li>
                <li>Chairman of Band Club</li>
              </section>
            </div>
          </div>
          <hr>
          <div class="columns">
            <div class="column">
              <a name="spc"></a>
              <h2 class="subtitle">St. Paul's College, Hong Kong
                <a href="http://www.spc.edu.hk/">
                  <img class="icon" src="SPC.jpg"/>
                </a>
              </h2>
              <h4>Secondary School</h4>
              <h6>2009-2014</h6>
            </div>
            <div class="column">
              <section class="section is-small">
                <i>Activities:</i>
                <li>Head Section Leader of Youth Red Cross Youth Unit 39</li>
                <li>Vice Chairman of Chess Club</li>
                <li>School Prefect</li>
                <li>Editor and reporter of school magazine</li>
              </section>
            </div>
          </div>

        </section>
        <hr>
        <h1 class="title"> Work Experience 🏢</h1>
        <section class="section is-small">
          <a name="pwc"></a>
          <h2 class="subtitle">PwC HK</h2>
          <h4>Trainee Assistant (Audit Methodology and Technology)</h4>
          <h6>August 2018</h6>
          <hr>
          <a name="hopeson"></a>
          <h2 class="subtitle">Hopeson Investment Limited</h2>
          <h4>Software Engineer Internship</h4>
          <h6>July 2018</h6>
          <hr>
          <a name="ricoh"></a>
          <h2 class="subtitle">RICOH, UK</h2>
          <h4>Trainee</h4>
          <h6>April 2015</h6>
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

