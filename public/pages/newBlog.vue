<template>
  <div>
    <div class="creating-blog-wrapper">
      <div class="create-blog-container">
        <div class="create-blog">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#ff1e68"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path
              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4 11h-3v3c0 .55-.45 1-1 1s-1-.45-1-1v-3H8c-.55 0-1-.45-1-1s.45-1 1-1h3V8c0-.55.45-1 1-1s1 .45 1 1v3h3c.55 0 1 .45 1 1s-.45 1-1 1z"
            />
          </svg>
          <h3>Create new blog</h3>
        </div>
        <div class="inputs">
          <form>
            <input
              type="text"
              v-model="blogsForm.title"
              id="title"
              placeholder="Blog title"
            />
            <input
              type="file"
              id="image"
              name="image"
              ref="file"
              @change="handleFileUpLoad()"
            />
            <textarea
              name="textarea"
              v-model="blogsForm.description"
              id="description"
              cols="30"
              rows="10"
              placeholder="Blog description"
            ></textarea>
          </form>
        </div>
        <span>{{ error }}</span>
        <div class="options">
          <NuxtLink to="/">Cancel</NuxtLink>
          <button @click="submitForm()">Create</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      blogsForm: {
        title: '',
        description: '',
      },
      error: '',
      
    }
  },
  methods: {
    submitForm() {
      const { title, description } = this.blogsForm
      if (!title) {
        this.error = 'please write title of the blog'
        return
      }
      if (!description) {
        this.error = 'please wirte description of the blog'
        return
      }
      const data = {
        title,
        description,
      }
      let formData = new FormData()
      formData.append('image', this.$refs.file.files[0]);
      formData.append('title', title);
      formData.append('description', description);
      const headers = {authorization: `Bearer ${localStorage.getItem('authToken')}`,"Content-Type": "multipart/form-data"};
      this.$axios
        .post('/user/blog/create', formData, {headers})
        .then((res) => {
          if (res.status === 200) {
            console.log(res)
          }
        })
        .catch((e) => {
          console.log(e)
        })
    },
    handleFileUpLoad() {
      this.file = this.$refs.file.files[0]
    },
  },
}
</script>

<style scoped>
.creating-blog-wrapper {
  font-family: 'Poppins', sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-image: url('/irina-iriser-Vn7LOc5PE-E-unsplash.jpg');
  background-position: center;
  background-size: cover;
}
.create-blog-container {
  border: 1px solid white;
  border-radius: 4px;
  backdrop-filter: blur(30px);
  padding: 10px;
  width: 30%;
}
.create-blog {
  display: flex;
  align-items: center;
}
.create-blog h3 {
  color: white;
  margin-left: 5px;
  font-size: 1.4em;
  font-weight: 300;
}
.inputs {
  margin-top: 10px;
}
.inputs form {
  display: flex;
  flex-direction: column;
}
input {
  margin-top: 20px;
  padding: 5px;
  background-color: rgba(255, 255, 255, 0.65);
  border: 1px solid transparent;
  border-radius: 4px;
  font-family: 'Poppins', sans-serif;
  color: #32555f;
}
textarea {
  margin-top: 20px;
  padding: 5px;
  background-color: rgba(255, 255, 255, 0.65);
  border: 1px solid transparent;
  border-radius: 4px;
  font-family: 'Poppins', sans-serif;
  color: #32555f;
}
.options {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 20px 0;
}
.options button {
  padding: 10px 40px;
  margin: 5px 0;
  font-family: 'Poppins', sans-serif;
  font-size: 1em;
  cursor: pointer;
  border-radius: 4px;
  border: 1px solid transparent;
  background-color: rgba(255, 255, 255, 0.65);
  color: #32555f;
}
.options a {
  padding: 10px 40px;
  margin: 5px 0;
  border-radius: 4px;
  border: 1px solid transparent;
  background-color: rgba(255, 255, 255, 0.65);
  color: #32555f;
  text-decoration: none;
}
span {
  color: red;
}
</style>
