<template>
  <div>
    <div class="Home-page-wrapper">
      <div class="Home-page">
        <header class="header">
          <h1>Topix Blogs</h1>
        </header>
        <div class="options-wrapper">
          <h3>Choose an option</h3>
          <NuxtLink class="options signup" to="/register/signup">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#32555f"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm-9-2V8c0-.55-.45-1-1-1s-1 .45-1 1v2H2c-.55 0-1 .45-1 1s.45 1 1 1h2v2c0 .55.45 1 1 1s1-.45 1-1v-2h2c.55 0 1-.45 1-1s-.45-1-1-1H6zm9 4c-2.67 0-8 1.34-8 4v1c0 .55.45 1 1 1h14c.55 0 1-.45 1-1v-1c0-2.66-5.33-4-8-4z"
              />
            </svg>
            <p>Register</p>
          </NuxtLink>
          <NuxtLink class="options login-link" to="/register/login">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              enable-background="new 0 0 24 24"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#32555f"
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
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted(){
    if(!localStorage.getItem('authToken')){
      this.$router.push('/register');
    }
  }
}
</script>

<style lang="scss">
.Home-page-wrapper {
  background-image: url('/irina-iriser-Vn7LOc5PE-E-unsplash.jpg');
  height: 100vh;
  background-position: top;
  background-size: cover;
  font-family: 'Poppins', sans-serif;
}
.Home-page {
  backdrop-filter: blur(30px);
  background-color: #32555f1a;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.header {
  font-size: 23px;
  font-weight: 100;
  font-stretch: normal;
  font-style: normal;
  color: #fff;
  margin: 0 0 40px;
  line-height: 0.43;
  text-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);
}
.options-wrapper {
  display: flex;
  flex-direction: column;
  padding: 20px;
  border-radius: 4px;
  backdrop-filter: blur(30px);
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.2);
  border: solid 1px rgba(255, 255, 255, 0.65);
  background-color: #47494e;
}
.options-wrapper h3 {
  margin: 0 30.5px 8px;
  padding-bottom: 5px;
  font-weight: 400;
  line-height: 1.21;
  font-size: 20px;
  border-bottom: solid 1px rgba(255, 255, 255, 0.65);
  color: #fff;
}
.options {
  display: flex;
  justify-content: space-between;
  border: solid 1px rgba(255, 255, 255, 0.65);
  text-decoration: none;
  border-radius: 4px;
  padding: 10px 0px;
  background-color: rgba(255, 255, 255, 0.65);
  color: #32555f;
}
.options svg {
  margin-left: 5px;
}
.signup {
  margin: 20px 0px;
}
.signup p {
  margin-right: 85px;
}
.login-link p {
  margin-right: 96px;
}
</style>
>
