<template>
  <v-app>
    <v-container>
    <v-layout text-center>
      <v-flex>
      <h1>Mensagem de {{ vals.name }}</h1><br>
      <p>{{ vals.msg }}</p>
      <p>{{ vls }}</p>
      <v-btn @click="addsr()">Formalizar Nome</v-btn>
      </v-flex>
    </v-layout>
    </v-container>
  </v-app>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex'

export default {
  computed: {
    ... mapGetters({
      vls: 'vls'
    }),
    ... mapState({
      vals: state => state.vals
    })
  },
  methods: {
    ...mapMutations({
      addsr: 'addsr'
    }),
  }
}
</script>
