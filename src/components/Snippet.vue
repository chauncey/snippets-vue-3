<template>
  <div class="container">
    <article class="media">
      <figure class="media-left">
        <div class="image is-64x64">
          <img :src="src" />
        </div>
      </figure>
      <div class="media-content">
        <div class="content">
          <div>
            <strong>{{ snippet.title }}</strong>
            <small>{{ snippet.type }}</small>
            <small>{{ snippet.group }}</small>
            <br />
            <pre>{{ snippet.content }}</pre>
          </div>
        </div>
        <nav class="level is-mobile">
          <div class="level-left">
            <a class="level-item">
              <span class="icon is-small">
                <i class="fa fa-reply"></i>
              </span>
            </a>
            <a class="level-item">
              <span class="icon is-small">
                <i class="fa fa-retweet"></i>
              </span>
            </a>
            <a class="level-item">
              <span class="icon is-small">
                <i class="fa fa-heart"></i>
              </span>
            </a>
          </div>
        </nav>
      </div>
      <div class="media-right">
        <button class="delete" @click="removeSnippet(snippet)"></button>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  name: 'Snippet',

  props: ['snippet', 'removeSnippet'],

  data() {
    return {
      snippets: Object,
    };
  },

  computed: {
    src() {
      const icons = {
        Python: '/images/python.png',
        Javascript: '/images/javascript.png',
        Shell: '/images/shell.png',
        'Plain Text': '/images/text.png',
      };
      return icons[this.snippet.type];
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  color: #42b983;
}
</style>
