<template>
  <div class="essential-links">
    <h2>Essential Links</h2>
    <ul>
      <li><router-link to="/SnippetList">Snippet List</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'essential-links',
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.essential-links {
  text-align: center;
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
