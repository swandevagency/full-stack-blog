<template>
  <div>
    <div class="page-wrapper">
      <section class="menu-wrapper">
        <h1>Menu</h1>
        <div class="user-wrapper">
          <div class="username">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="28px"
              viewBox="0 0 28 28"
              width="28px"
              fill="#ff1e68"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"
              />
            </svg>
            <p>David Wayne</p>
          </div>
          <div class="edit-profile">
            <p>Edit profile</p>
          </div>
        </div>
        <div class="editing-blog-wrapper">
          <p>Blog editing</p>
          <div class="creatin-new-blog">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#fff"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M18 13h-5v5c0 .55-.45 1-1 1s-1-.45-1-1v-5H6c-.55 0-1-.45-1-1s.45-1 1-1h5V6c0-.55.45-1 1-1s1 .45 1 1v5h5c.55 0 1 .45 1 1s-.45 1-1 1z"
              />
            </svg>
            <p>Create new blog</p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    if (!localStorage.getItem('authToken')) {
      this.$router.push('/register')
    }
  },
}
</script>

<style scoped>
.page-wrapper {
  background-image: url('/irina-iriser-Vn7LOc5PE-E-unsplash.jpg');
  height: 100vh;
  background-position: center;
  background-size: cover;
  font-family: 'Poppins', sans-serif;
}
.menu-wrapper{
  display: flex;
  flex-direction: column;
  backdrop-filter: blur(30px);
  width: 25%;
  height: 100%;
  align-items: center;
}
.menu-wrapper h1{
  margin-top: 20px;
  color: white;
  font-size: 2em;
  font-weight: 300;
  font-style: italic;
}
.user-wrapper{
  margin-top: 10px;
  padding: 20px;
  background-color: rgb(255 255 255 / 65%);
  border: 1px solid white;
  border-radius: 4px;
}
.username{
  display: flex;
  flex-direction: row;
  font-size: 1.3em;
  font-weight: 500;
  align-items: center;
}
.username p{
  color: #32555f;
}
.edit-profile{
  margin:10px;
}
</style>
>
