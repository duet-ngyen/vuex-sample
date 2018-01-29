<template>
  <div id="app" class="container">
    <NewEntity></NewEntity>
    <ListEntity></ListEntity>
  </div>
</template>
<script>
import NewEntity from './NewEntity.vue'
import ListEntity from './ListEntity.vue'
export default {
  components: {
    NewEntity,
    ListEntity
  },
  mounted: function () {
    this.$store.dispatch('LOAD_ENTITY_LIST')
  }
}
</script>
