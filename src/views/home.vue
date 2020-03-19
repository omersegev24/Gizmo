<template>
  <div class="home">
    <router-link to='/templates'>Get Started</router-link>
      <div v-for="cmp in cmps" :key="cmp.id"> -->
        {{cmp.type}}
        <button @click="addCmp(cmp)">Add</button>
     </div>

  </div>
</template>

<script>

import {cmpService} from '../services/cmp.service.js'

export default {
  name: 'Home',
  data(){
    return{
      cmps:[]
    }
  },
  async created() {
    var cmps = await cmpService.query();
    this.cmps = cmps;
  },
  methods:{
    addCmp(cmp){
      this.$store.dispatch({ type: 'addCmp', cmp })
    }
  },
  
}
</script>
