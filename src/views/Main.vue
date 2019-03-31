<template>
  <div class="index">
    <MainHeader></MainHeader>
    <SnippetList></SnippetList>
  </div>
</template>

<script>
import MainHeader from './MainHeader';
import SnippetList from './SnippetList';

export default {
  name: 'index',

  components: {
    MainHeader,
    SnippetList,
  },

  data() {
    return {
      msg: 'Snippets',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
