<template>
  <div>
    <div class="signup-page-wrapper">
      <div class="signup-page">
        <div class="register-wrapper">
          <div class="register">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="red"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm-9-2V8c0-.55-.45-1-1-1s-1 .45-1 1v2H2c-.55 0-1 .45-1 1s.45 1 1 1h2v2c0 .55.45 1 1 1s1-.45 1-1v-2h2c.55 0 1-.45 1-1s-.45-1-1-1H6zm9 4c-2.67 0-8 1.34-8 4v1c0 .55.45 1 1 1h14c.55 0 1-.45 1-1v-1c0-2.66-5.33-4-8-4z"
              />
            </svg>
            <p>Register</p>
          </div>
          <div class="user-identity">
            <div class="name">
              <p>User identity</p>
            </div>
            <form class="firstname">
              <input
                required
                type="text"
                id="Firstname"
                placeholder="First name"
                v-model="registerForm.firstName"
              />
              <input
                required
                id="lastname"
                type="text"
                placeholder="Last name"
                v-model="registerForm.lastName"
              />
            </form>
          </div>
          <div class="account-info">
            <div class="account">
              <p>Account information</p>
            </div>
            <form class="account-form">
              <div class="email-username">
                <input
                  required
                  id="email"
                  type="email"
                  placeholder="Email address"
                  v-model="registerForm.email"
                />
                <input
                  required
                  id="username"
                  type="text"
                  placeholder="User name"
                  v-model="registerForm.userName"
                />
              </div>
              <div class="password">
                <input
                  required
                  type="password"
                  placeholder="Password"
                  v-model="registerForm.password"
                />
                <input
                  required
                  type="password"
                  placeholder="Re-enter Password"
                  v-model="registerForm.repeatPassword"
                />
              </div>
            </form>
          </div>
          <span v-if="error" class="error">{{ error }}</span>
          <div class="checkbox">
            <input type="checkbox" id="two-step-verification" />
            <label for="two-step-verification">Two-step verification</label>
          </div>
          <div class="links-wrapper">
            <NuxtLink id="cancel" to="/">Cancel</NuxtLink>
            <button @click="submitForm()" id="submit">Register</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      registerForm: {
        firstName: '',
        lastName: '',
        email: '',
        userName: '',
        password: '',
        repeatPassword: '',
      },
      error: null,
    }
  },
  methods: {
    submitForm() {
      const { firstName, lastName, email, userName, password, repeatPassword } =
        this.registerForm
      const emailRegex = /\S+@\S+\.\S+/
      if (!firstName || !lastName) {
        this.error = 'please enter your firstname and your last name'
        return
      }
      if (password !== repeatPassword) {
        this.error = 'passwords dont match'
        return
      }
      if (!email || !emailRegex.test(email)) {
        this.error = 'please provide a valid email'
        return
      }
      if (!userName) {
        this.error = 'please enter your username'
        return
      }
      if (!password) {
        this.error = 'please enter a password'
        return
      }
      const data = {
        firstName,
        lastName,
        email,
        userName,
        password,
      }
      console.log(this.error);
      this.$axios.post('/user/signup', data)
      .then((res) => {
        console.log(res);
      })
      .catch((e) => {
        console.log('bad luck');
        console.log(e)
      })
    },
  },
}
</script>

<style>
.signup-page-wrapper {
  background-image: url('/irina-iriser-Vn7LOc5PE-E-unsplash.jpg');
  height: 100vh;
  background-position: top;
  background-size: cover;
  font-family: 'Poppins', sans-serif;
}
.signup-page {
  backdrop-filter: blur(30px);
  background-color: #32555f1a;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.register-wrapper {
  display: flex;
  flex-direction: column;
  padding: 10px;
  border-radius: 4px;
  backdrop-filter: blur(30px);
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.2);
  border: solid 1px rgba(255, 255, 255, 0.65);
  background-color: #47494e;
}
.register {
  display: flex;
  font-size: 17px;
  font-weight: 500;
  color: #fff;
}
.register p {
  margin-left: 5px;
}
.name {
  margin-top: 30px;
  font-size: 13px;
  font-weight: 400;
  color: #fff;
}
.firstname {
  margin-top: 5px;
}
.firstname input {
  border: solid 1px rgba(255, 255, 255, 0.65);
  background-color: rgba(255, 255, 255, 0.65);
  padding: 5px;
  border-radius: 4px;
}
#lastname {
  margin-left: 10px;
}
.account {
  margin-top: 20px;
  font-size: 13px;
  font-weight: 400;
  color: #fff;
}
.account-form {
  margin-top: 15px;
}
.email-username {
  margin-bottom: 10px;
}
.email-username input {
  padding: 5px;
  border: solid 1px rgba(255, 255, 255, 0.65);
  background-color: rgba(255, 255, 255, 0.65);
  border-radius: 4px;
}
#username {
  margin-left: 10px;
}
.password input {
  padding: 5px;
  border: solid 1px rgba(255, 255, 255, 0.65);
  background-color: rgba(255, 255, 255, 0.65);
  border-radius: 4px;
  width: 97%;
}
.checkbox {
  margin-top: 10px;
  display: flex;
  align-items: center;
}
.checkbox label {
  margin-left: 5px;
  font-size: 14px;
  font-weight: 400;
  color: #fff;
}
.links-wrapper {
  margin: 20px 0px;
}
.links-wrapper a {
  border: solid 1px #fff;
  background-color: #47494e;
  border-radius: 4px;
  text-decoration: none;
  color: #fff;
  padding: 10px 55px;
}
#register {
  margin-left: 10px;
}
#cancel {
  margin-left: 5px;
}
.error {
  color: red;
  font-size: 12px;
}
/*#submit{
  background-color: #47494e;
  border: none;
  font-size: 16px;
  font-weight: 500;
  color: #fff;
}*/
</style>
