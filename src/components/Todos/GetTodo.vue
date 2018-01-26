<template>
  <div id="get-todo" class="container">
    <input class="form-control" :value="newTodo" @change="getTodo" placeholder="I need to...">
    <button class="btn btn-primary" @click="addTodo">Add Todo</button>
  </div>
</template>

<script type="text/javascript">
  export default{
    methods: {
      getTodo(e){
        console.log(e.target.value)
        this.$store.dispatch('getTodo', e.target.value)
      },
      addTodo(){
        this.$store.dispatch('addTodo')
        this.$store.dispatch('clearTodo')
      }
    },
    computed: {
      newTodo(){
        return this.$store.getters.newTodo
      }
    }
  }
</script>
