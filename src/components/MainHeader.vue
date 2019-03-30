<template>
  <div class="main-header">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'main-header',

  data() {
    return {
      msg: 'Snippets',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main-header {
  font-size: 20pt;
  text-align: center;
  margin-top: 60px;
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
