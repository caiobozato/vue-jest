<template>
  <div>
    <h3>welcome to button count application</h3>
    <p>Button count is: {{ count }}</p>
    <button @click="changeCount">Click me</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      count: 0
    }
  },
  methods: {
    changeCount () {
      this.count += 1
    }
  }
}
</script>

<style>
button {
  padding: 10px;
  color: white;
  background: #0062ff;
}
</style>
