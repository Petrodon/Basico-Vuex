<template>
<v-app>
    <v-content>
    <v-layout text-center>
        <v-container>
            <v-flex autocomplete="off" mt-3 xs4 offset-xs4>
                <v-text-field placeholder="Nome" v-model="vals.name"></v-text-field>
            </v-flex>
            <v-flex mt-3 xs4 offset-xs4>
                <v-textarea
                placeholder="Mensagem"
                v-model="vals.msg"
                counter="250"
                no-resize required></v-textarea>
            </v-flex>
            <v-flex>
                <v-btn @click="mandar()">Enviar</v-btn>
            </v-flex>
        </v-container>
    </v-layout>
    </v-content>
</v-app>
</template>

<script>
import { mapState } from 'vuex'

export default {
    computed: {
        ... mapState({
            vals: state => state.vals
        })
    },
    methods: {
        mandar() {
            this.$router.push('/view')
        }
    }
}
</script>
