<template lang="html">
  <div class="centered">
    <div id="main" class="alt">
      <section id="one">
        <div class="inner">
          <header class="major">
            <h1>About</h1>
          </header>
          <div class="content">
            <!-- <div class="image about"></div> -->
            <div class="image main">
              <img src="../../assets/about-2019.jpg" alt="JPCMF Front-end Developer and UI Designer">
            </div>
            <p>
              Hi, you can call me João :) <br>
              I am a Front-end Developer and UI Designer from Brazil based in Curitiba.<br><br>
              I like working as freelancer, solving problems with Design and making great ideas happen. I love sharing the knowledge that I have gained from my experience with other people. When I am not developing websites I like to produce electronic music and play some records. <br><br>
              You can find me on Twitter (<a href="https://www.twitter.com/jpcmf80" title="www.twitter.com/jpcmf80" target="_blank">@jpcmf80</a>) and, if you're interested in my professional experience, please have a look at my links or drop me a message.</p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  metaInfo: {
    title: 'About',
    titleTemplate: '%s | JPCMF Front-end Developer and UI Designer'
  }
}
</script>

<style lang="scss" scoped>
.content {
  display: flex;
  align-items: center;
  flex-direction: column;

  @media only screen and (min-width : 992px) {
    flex-direction: row;
  }

  .image {
    width: 100%;

    @media only screen and (min-width : 992px) {
      margin-right: 2.5em;
      width: 50%;
    }
  }

  p {
    margin: 0;
    width: 100%;

    @media only screen and (min-width : 992px) {
      width: 50%;
    }
  }
}
</style>
