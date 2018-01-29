<template>
  <div id="entities">
    <h1>Hello from List Entity</h1>
    <ul>
      <li v-for="entity in entities">
        {{entity['id']}} - {{entity['name']}}
      </li>
    </ul>
  </div>
</template>

<script type="text/javascript">
  import { mapState } from 'vuex'
  export default {
    name: 'ListEntity',
    computed: {
      entities () {
        return this.$store.state.entities.list
      }
    }
  }
</script>
