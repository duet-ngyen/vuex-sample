<template>
  <div id="app" class="container">
    <NewEntity></NewEntity>
    <Search></Search>
    <ListEntity></ListEntity>
  </div>
</template>
<script>
import NewEntity from './NewEntity.vue'
import ListEntity from './ListEntity.vue'
import Search from './Search'
export default {
  components: {
    Search,
    NewEntity,
    ListEntity
  },
  mounted: function () {
    this.$store.dispatch('LOAD_ENTITY_LIST')
  }
}
</script>
