<template>
  <div id="entities">
    <h1>Hello from List Entity</h1>
    <ul>
      <li v-for="entity in entities">
        {{entity['name']}}
      </li>
    </ul>
  </div>
</template>

<script type="text/javascript">
  export default {
    data() {
      return {
        entities: this.$store.getters.entities
      };
    },
    created(){
      this.$store.getters.entities = this.$http.get('/entities')
        .then(request => this.buildEntityList(request.data))
        .catch(() => { alert('Something went wrong!') })
    },
    methods: {
      buildEntityList (data) {
        this.entities = data
      }
    }
  }
</script>
