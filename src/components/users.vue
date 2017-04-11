<template>
  <div class="users">
    <h1>{{title}}</h1>
    <ul>
      <li v-for="user in users">
        <p v-if='showName'>{{user.username}}</p>
        <p v-text="user.website"></p>
        <input type="text" v-model="user.phone" v-on:keyup="pressKey" v-on:keyup.enter="enterHandler">
      </li>
    </ul>

  </div>
</template>

<script type="text/javascript">
  export default {
    name: 'test',
    data () {
      return {
        title: 'Hola Mundo',
        users: [],
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
        this.users = response.data
      })
    }
}
</script>

<style scoped>

</style>
