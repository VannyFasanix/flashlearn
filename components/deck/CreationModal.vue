<template>
    <form @submit.prevent="submitForm">
      <div>
        <label for="title">Title:</label>
        <input id="title" type="text" v-model="form.title" />
        <span v-if="errors.title" class="error">{{ errors.title }}</span>
      </div>
      <div>
        <label for="description">Description:</label>
        <textarea id="description" v-model="form.description"></textarea>
        <span v-if="errors.description" class="error">{{ errors.description }}</span>
      </div>
      <button type="submit">Create Deck</button>
    </form>
  </template>
  
  <script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const form: any = ref({
  title: '',
  description: ''
})

const errors: any = ref({
  title: '',
  description: ''
})

const router = useRouter()

const submitForm = async () => {
  // Validazione dei campi del form
  if (!form.title) {
    errors.title = 'Please enter a title.'
    return
  }
  if (!form.description) {
    errors.description = 'Please enter a description.'
    return
  }

  // Invia i dati del form al server (ad esempio, con Axios)
  try {
    // Esegui una richiesta HTTP per creare un nuovo deck utilizzando i dati del form
    // await axios.post('/api/decks', form.value)

    // Dopo che il deck è stato creato con successo, reindirizza l'utente alla pagina principale dei deck
    router.push('/decks')
  } catch (error) {
    console.error('Error creating deck:', error)
  }
}
</script>

<style scoped>
.error {
  color: red;
}
</style>
