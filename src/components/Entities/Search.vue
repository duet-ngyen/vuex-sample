<template>
  <div id="search-entity">
    <input class="form-control" @input="searchEntity" placeholder="Search Entity...">
    <autocomplete
      v-bind:url="autocompleteUrl"
      anchor="name"
      label="writer"
      param="name"
      :onInput="getData"
      :onSelect="selectData">
    </autocomplete>
  </div>
</template>

<script type="text/javascript">
require('vue2-autocomplete-js/dist/style/vue2-autocomplete.css');

  import Autocomplete from 'vue2-autocomplete-js';

  export default {
    components: { Autocomplete },
    data: function() {
      return {
        autocompleteUrl: process.env.API_URL + "/entities"
      }
    },
    methods: {
      searchEntity(e) {
        this.$store.dispatch('SEARCH_ENTITY', e.target.value)
      },
      getData(obj){
        var entities = this.$store.state.entities.list;
        var results = entities.filter( entity => entity.name.includes(obj));
      },
      selectData(obj){
        console.log(obj.name);
      }
    }
  }
</script>
