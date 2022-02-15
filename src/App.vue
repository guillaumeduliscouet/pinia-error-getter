<template>
  <div>Hello</div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import { defineStore } from 'pinia'

const useStore = defineStore({
    id: 'store',
    state: () => ({
        data: null,
    }),
    getters: {
      getData: (state) => {
        if(state.data === null) throw new Error('trying to use data before init')
      }
    },
    actions: {
        fixState() {
            this.data = ''
        },
    },
})


export default defineComponent({
    name: 'App',
    setup() {
      useStore()
    }
})
</script>
