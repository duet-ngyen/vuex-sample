<template>
  <div id="entity-detail">
    {{ entity }}
  </div>
</template>

<script type="text/javascript">
  export default{
    name: 'Entity',
    mounted: function () {
      this.$store.dispatch('LOAD_ENTITY_LIST')
    },
    computed: {
      entity () {
        return this.$store.state.entities.list.filter( e => (e.id == this.$route.params.id))
      }
    }
  }
</script>
