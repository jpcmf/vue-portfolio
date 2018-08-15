<template lang="html">
  <div class="centered">
    <section id="contact">
      <div class="inner">
        <section>
          <!-- <form @submit.prevent="processForm" method="post" action="#" id="contact-form"> -->
          <form name="contact" method="post" netlify>
            <div class="fields">
              <!-- <div class="field">
                <label for="name">Subject</label>
                <input type="text" name="subject" id="subject" v-model="subject" v-validate data-vv-rules="required|min:3|max:30">
                <span class="error" v-show="errors.has('subject')">{{ errors.first('subject') }}</span>
              </div> -->
              <div class="field half">
                <label for="name">Name</label>
                <input type="text" name="name" id="name" v-model="form.name" v-validate data-vv-rules="required|min:3|max:30">
                <span class="error" v-show="errors.has('name')">{{ errors.first('name') }}</span>
              </div>
              <div class="field half">
                <label for="email">Email</label>
                <input type="text" name="email" id="email" v-model="form.email" v-validate data-vv-rules="required|email">
                <span class="error" v-show="errors.has('email')">{{ errors.first('email') }}</span>
              </div>
              <div class="field">
                <label for="message">Message</label>
                <textarea name="message" id="message" rows="6" v-model="form.message" v-validate data-vv-rules="required|min:10|max:200"></textarea>
                <span class="error" v-show="errors.has('message')">{{ errors.first('message') }}</span>
              </div>
            </div>
            <ul class="actions">
              <!-- <li><input type="submit" value="Send Message" class="primary"></li> -->
              <li><input type="submit" value="Send Message" class="primary" @click.prevent="handleSubmit"></li>
              <li><input type="reset" value="Clear"></li>
            </ul>
          </form>
        </section>
        <section class="split">
          <section>
            <div class="contact-method">
              <span class="icon alt fa-envelope"></span>
              <h3>Email</h3>
              <a href="#">hire@jpcmf.com</a>
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
              <span>Avenida dos Estados<br>
                Curitiba, PR 539<br>
                Brazil</span>
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
          form: {
            name: '',
            email: '',
            message: ''
          }
          // subject: '',
          // name: '',
          // emailFrom: '',
          // message: ''
        }
      },

      methods: {
        encode(data) {
          return Object.keys(data)
            .map(
              key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
            )
            .join('&')
        },
        handleSubmit() {
          this.$validator.validateAll()
            .then((result) => {
              if(!result) {
                console.log('Please correct all error!')
                // console.log(this)
                return;
              }
              console.log('Submitting message...')
              fetch('/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: this.encode({ 'form-name': 'contact', ...this.form })
              })
              .then(() => {
                alert('Success!')
                this.reset()
              })
              .catch(error => alert(error));
            })
            // .catch(() => {
            //
            // });
        },

        reset: function() {
          // this.subject = null;
          this.name = null;
          this.emailFrom = null;
          this.message = null;
          this.$validator.reset()
        },

        processForm: function() {
          // var formdata = new FormData();
          // // formdata.append('subject', this.subject);
          // formdata.append('name', this.name);
          // formdata.append('emailFrom', this.emailFrom);
          // formdata.append('message', this.message);
          //
          // this.$validator.validateAll()
          //   .then((result) => {
          //     if(!result) {
          //       console.log('Please correct all error!')
          //       // console.log(this)
          //       return;
          //     }
          //     console.log('Submitting message...')
          //     this.$http.post('https://www.joaolabs.tk/sendmail.php', formdata)
          //       .then((response) => {
          //         this.reset()
          //         // console.log(response)
          //       })
          //   })
          //   .catch(() => {
          //
          //   });

          // this.$validator
          //   .validateAll()
          //   .then(success => {
          //     if (success) {
          //       this.service
          //         .register(this.foto)
          //         .then(() => {
          //           if (this.id) this.$router.push({name: 'home'})
          //           this.foto = new Pic()
          //           this.$validator.reset()
          //         }, err => console.log(err))
          //     }
          //   })

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
