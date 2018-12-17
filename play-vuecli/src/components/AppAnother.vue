<template>
    <div>
        {{ content }}
    </div>
</template>

<script>
import list_data from './list-data';

export default {
  name: 'AppAnother',
  props: {
    content: String
  },
  data: function(){
      return {};
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
