<template>
  <div>
    sdfassdf
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

<style scoped>
.page-wrapper{
  background-image: url('/irina-iriser-Vn7LOc5PE-E-unsplash.jpg');
  height: 100vh;
  background-position: top;
  background-size: cover;
  font-family: 'Poppins', sans-serif;
}
</style>>

