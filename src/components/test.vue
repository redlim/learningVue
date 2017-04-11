<template>
  <div class="test">
    <h1>{{title}}</h1>
    <p v-if='showName'>{{user.firstName}}</p>
    <p v-text="user.lastName"></p>
    <input type="text" v-model="title" v-on:keyup="pressKey" v-on:keyup.enter="enterHandler">
  </div>
</template>

<script type="text/javascript">
  export default {
    name: 'test',
    data () {
      return {
        title: 'Hola Mundo',
        user: {
          firstName: 'John',
          lastName: 'Doe'
        },
        showName: false
      }
    },
    methods: {
      pressKey: function () {
        console.log('title', this.title)
      },
      enterHandler: function () {
        console.log('enter')
      }
    },
    created: function () {
      this.$http.get('https://jsonplaceholder.typicode.com/users')
      .then(function (response) {
        console.log(response.data)
      })
      console.log('create Run...')
    }
}
</script>

<style scoped>

</style>
