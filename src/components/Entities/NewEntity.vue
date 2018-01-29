<template>
  <div id="get-todo" class="container">
    <input class="form-control" :value="newEntity" @change="getNewEntity" placeholder="New entity...">
    <button class="btn btn-primary" @click="addEntity">Add Entity</button>
  </div>
</template>

<script type="text/javascript">
  export default{
    methods: {
      getNewEntity(e){
        this.$store.dispatch('getNewEntity', e.target.value)
      },
      addEntity(){
        this.$store.dispatch('addEntity')
        // this.$store.dispatch('getEntities')
      }
    },
    computed: {
      newEntity(){
        return this.$store.getters.newEntity
      }
    }
  }
</script>
