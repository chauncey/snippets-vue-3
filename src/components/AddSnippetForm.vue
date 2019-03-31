<template>
  <div class="addSnippetForm">
    <h3>Add Snippet</h3>
    <div class="field">
      <label class="label">Title</label>
      <div class="control">
        <input class="input" type="text" placeholder="Title" :bind="title" />
      </div>
    </div>
    <div class="field">
      <label class="label">Type</label>
      <div class="control">
        <input class="input" type="text" placeholder="Type" :bind="type" />
      </div>
    </div>
    <div class="field">
      <label class="label">Group</label>
      <div class="control">
        <input class="input" type="text" placeholder="Group" :bind="group" />
      </div>
    </div>
    <div class="field">
      <label class="label">Content</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="Content"
          :bind="content"
        />
      </div>
    </div>
    <div class="field">
      <div class="control">
        <button class="button" @click="addSnippet()">
          Submit
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AddSnippetForm',

  props: ['snippet', 'addSnippet'],

  data() {
    return {
      title: '',
      type: '',
      group: '',
      content: '',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  color: #42b983;
}
.addSnippetForm {
  width: 50%;
  text-align: left;
  padding-bottom: 3em;
}
</style>
