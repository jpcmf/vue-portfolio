<template lang="html">
  <div class="centered">
    <section id="contact">
      <div class="inner">
        <section>
          <form id="contact-form" v-on:submit.prevent="processForm" name="contato" method="post">
            <div class="fields">
              <div class="field half">
                <label for="name">Name</label>
                <input type="text" name="name" id="name" v-model="name" v-validate data-vv-rules="required|min:3|max:30">
                <span class="error" v-show="errors.has('name')">{{ errors.first('name') }}</span>
              </div>
              <div class="field half">
                <label for="email">Email</label>
                <input type="text" name="email" id="email" v-model="email" v-validate data-vv-rules="required|email">
                <span class="error" v-show="errors.has('email')">{{ errors.first('email') }}</span>
              </div>
              <div class="field">
                <label for="message">Message</label>
                <textarea name="message" id="message" rows="6" v-model="message" v-validate data-vv-rules="required|min:10|max:200"></textarea>
                <span class="error" v-show="errors.has('message')">{{ errors.first('message') }}</span>
              </div>
            </div>
            <ul class="actions">
              <li><input type="submit" value="Send Message" class="primary"></li>
              <li><input type="reset" value="Clear"></li>
            </ul>
          </form>
          <div v-show="formResponse">
            Message submitted successfully!
          </div>
        </section>
        <section class="split">
          <section>
            <div class="contact-method">
              <span class="icon alt fa-envelope"></span>
              <h3>Email</h3>
              <a href="mailto:jpfricks@gmail.com">jpfricks@gmail.com</a>
            </div>
          </section>
          <section>
            <div class="contact-method">
              <span class="icon alt fa-phone"></span>
              <h3>Phone</h3>
              <span>+55 (41) 98785-0505</span>
            </div>
          </section>
          <section>
            <div class="contact-method">
              <span class="icon alt fa-home"></span>
              <h3>Address</h3>
              <span>
                Avenida dos Estados<br>
                Curitiba, PR 80610-040<br>
                Brazil
              </span>
            </div>
          </section>
        </section>
      </div>
    </section>
  </div>
</template>

<script>
export default {

  data() {
    return {
      name: '',
      email: '',
      message: '',
      formResponse: false,
    }
  },

  methods: {
    reset() {
      this.name = null;
      this.email = null;
      this.message = null;
      this.$validator.reset();
    },

    processForm() {
      var formdata = new FormData();

      formdata.append('name', this.name);
      formdata.append('emailFrom', this.email);
      formdata.append('message', this.message);

      this.$validator.validateAll()
      .then((result) => {
        if(!result){
          console.log('Please correct all errors...');
          return;
        }
      
        console.log('Submitting message...');
        this.$http.post('https://compacto-records.000webhostapp.com/sendmail/sendmail.php', formdata)
        .then((response) => {
          console.log('Success...');
          console.log(response);
          this.reset();
          this.formResponse = true;
        })
        .catch((response) => {
          console.log('Error...');
          console.log(response);
        })
      })
      .catch(() => {
      
      });
    }
  }
}
</script>

<style scoped lang="scss">
  .error {
    color: coral;
    font-size: 12px;
  }
</style>
