<template>
  <div class="snippet-list">
    <AddSnippetForm :addSnippet="addSnippet"></AddSnippetForm>
    <Snippet
      v-for="snippet in snippets"
      :key="snippet.id"
      :snippet="snippet"
      :removeSnippet="removeSnippet"
    ></Snippet>
    <button @click="lastSnippetId()">snip</button>
  </div>
</template>

<script>
import AddSnippetForm from './AddSnippetForm';
import Snippet from './Snippet';
import snippetsRef from '../config';

export default {
  name: 'snippet-list',
  firebase: {
    snippets: snippetsRef,
  },

  components: {
    AddSnippetForm,
    Snippet,
  },

  data() {
    return {
      newSnippet: {
        title: '',
        type: '',
        content: '',
        group: '',
      },
    };
  },
  methods: {
    lastSnippetId() {
      const snippetsLength = snippetsRef.length;
      const lastSnippet = snippetsRef[snippetsLength];
      /* eslint-disable-next-line */
      alert(lastSnippet);
      /* eslint-disable-next-line */
      alert(lastSnippet.id);
      return lastSnippet.id;
    },
    addSnippet() {
      snippetsRef.push(this.newSnippet);
      this.newSnippet.title = '';
      this.newSnippet.type = '';
      this.newSnippet.content = '';
      this.newSnippet.group = '';
    },
    removeSnippet(snippet) {
      snippetsRef.child(snippet['.key']).remove();
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.snippet-list {
  padding-left: 20px;
  padding-right: 20px;
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
