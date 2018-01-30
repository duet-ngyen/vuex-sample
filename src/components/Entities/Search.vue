<template>
  <div id="search-entity">
    <input class="form-control" @input="searchEntity" placeholder="Search Entity...">
  </div>
</template>

<script type="text/javascript">
  export default {
    methods: {
      searchEntity(e) {
        this.$store.dispatch('SEARCH_ENTITY', e.target.value)
      }
    }
  }
</script>
