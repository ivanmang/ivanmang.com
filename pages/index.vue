<template>
  <section class="section is-medium">
    <div class="row">
      <div class="column side">
        <img src="profile.jpg" class="center"/>
      </div>
      <div class="column middle">
          <h2 class="subtitle">Hello, I am</h2>
          <h1 class="title">Ivan Mang</h1>
          <p>A Computing Student at Imperial College London </p>
        <section class="section is-small">

        </section>
      </div>
    </div>
  </section>
</template>

<style scoped>
  img {
    margin-left: auto;
    margin-right: auto;
    border-radius: 250px;
    width: 250px;
  }
  h1.title {
    line-height: 200%;
  }
  /* Create three unequal columns that floats next to each other */
  .column {
    float: left;
    padding: 10px;
  }

  /* Left and right column */
  .column.side {
    width: 40%;
  }
  /* Middle column */
  .column.middle {
    width: 50%;
  }
  /* Clear floats after the columns */
  .row:after {
    content: "";
    display: table;
    clear: both;
  }
  .center {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 50%;
  }
</style>
