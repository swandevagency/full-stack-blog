<template>
  <div>
    <div class="login-page-wrapper">
      <div class="login-page">
        <div class="login-wrapper">
          <div class="login">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              enable-background="new 0 0 24 24"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="red"
            >
              <g>
                <rect fill="none" height="24" width="24" />
                <rect fill="none" height="24" width="24" />
              </g>
              <g>
                <path
                  d="M10.3,7.7L10.3,7.7c-0.39,0.39-0.39,1.01,0,1.4l1.9,1.9H3c-0.55,0-1,0.45-1,1v0c0,0.55,0.45,1,1,1h9.2l-1.9,1.9 c-0.39,0.39-0.39,1.01,0,1.4l0,0c0.39,0.39,1.01,0.39,1.4,0l3.59-3.59c0.39-0.39,0.39-1.02,0-1.41L11.7,7.7 C11.31,7.31,10.69,7.31,10.3,7.7z M20,19h-7c-0.55,0-1,0.45-1,1v0c0,0.55,0.45,1,1,1h7c1.1,0,2-0.9,2-2V5c0-1.1-0.9-2-2-2h-7 c-0.55,0-1,0.45-1,1v0c0,0.55,0.45,1,1,1h7V19z"
                />
              </g>
            </svg>
            <p>Login</p>
          </div>
          <div class="account-information">
            <div class="info">
              <p>Account information</p>
            </div>
            <form class="email-password">
              <input
                type="email"
                id="email"
                placeholder="Email address"
                required
                v-model="loginInformation.email"
              />
              <input
                type="password"
                id="password"
                placeholder="Password"
                required
                v-model="loginInformation.password"
              />
            </form>
            <span class="error">{{ error }}</span>
          </div>
          <div class="links-wrapper-login-page">
            <NuxtLink to="/" id="cancle">Cancel</NuxtLink>
            <button id="submit" @click="submitLogin()">Login</button>
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
      loginInformation: {
        email: '',
        password: '',
      },
      error: null,
    }
  },
  methods: {
    async submitLogin() {
      this.error = '';
      const { email, password } = this.loginInformation
      if (!email) {
        this.error = 'please enter your email'
        return
      }
      if (!password) {
        this.error = 'please enter your password'
      }
      const data = {
        email,
        password,
      }
      try {
        const res = await this.$axios.put('/user/login', data);
        localStorage.setItem('authToken', res.data);
        this.$router.push('/');
      } catch (error) {
        console.log(error);
        this.error = 'the combination of this email and password is wrong !'
      }
      // this.$axios
      //   .put('/user/login',data)
      //   .then((res) => {
      //     if(res.status === 200) {
      //       const token = res.data;
      //       localStorage.setItem('authToken', token);
      //       this.$router.push('/blog');
      //     }
      //   })
      //   .catch((e) => {
      //     console.log(e)
      //   })
    },
  },
}
</script>

<style>
.login-page-wrapper {
  background-image: url('/irina-iriser-Vn7LOc5PE-E-unsplash.jpg');
  height: 100vh;
  background-position: top;
  background-size: cover;
  font-family: 'Poppins', sans-serif;
}
.login-page {
  backdrop-filter: blur(30px);
  background-color: #32555f1a;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.login-wrapper {
  display: flex;
  width: 45vw;
  flex-direction: column;
  padding: 10px;
  border-radius: 4px;
  backdrop-filter: blur(30px);
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.2);
  border: solid 1px rgba(255, 255, 255, 0.65);
  background-color: #47494e;
}
.login {
  display: flex;
  font-size: 17px;
  font-weight: 500;
  color: #fff;
}
.login p {
  margin-left: 10px;
}
.info {
  margin-top: 30px;
  font-size: 13px;
  font-weight: 400;
  color: #fff;
}
.email-password {
  display: flex;
  flex-direction: column;
  margin-top: 20px;
}
.email-password input {
  padding: 5px;
  border: solid 1px rgba(255, 255, 255, 0.65);
  background-color: rgba(255, 255, 255, 0.65);
  border-radius: 4px;
  margin-bottom: 15px;
}
.links-wrapper-login-page {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  flex-flow: wrap;
}
.links-wrapper-login-page a {
  border: solid 1px #fff;
  background-color: #47494e;
  border-radius: 4px;
  text-decoration: none;
  color: #fff;
  padding: 10px 55px;
}
.links-wrapper-login-page button {
  border: solid 1px #fff;
  background-color: #47494e;
  border-radius: 4px;
  font-size: 18px;
  color: #fff;
  padding: 10px 55px;
}
</style>
