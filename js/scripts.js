const { createApp } = Vue

createApp({
  data() {
    return {
      message: 'Hello Vue!',
      image: 'https://testrigor.com/wp-content/uploads/2023/03/vuejs-logo.png'
    }
  }
}).mount('#app')