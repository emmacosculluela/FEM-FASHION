<template>
  <div class="container">
    <h1>Trend Prediction</h1>
    <p class="body2">Quines creus que seran les properes tendències? Ajuda'ns a predir el futur de la moda femenina</p>
    <p> </p>
    <section class="form">
     <form action="" class="text-center">
         <input v-model="nombre" @keyup.enter="crearPersona" type="text" class="form-control" placeholder="Nom">
         <p> </p>
         <input v-model="edad" @keyup.enter="crearPersona" type="number" name="edad" placeholder="Edat" class="form-control">
         <p> </p>
         <input v-model="tendencia" @keyup.enter="crearPersona" type="text" class="form-control" placeholder="Tendència">
         <p> </p>
         <input @click="crearPersona" type="button" value="Afegir" class="btn btn-danger">
     </form>
    </section>
    <section class="data">
            <caption>Persones</caption>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">Nom</th>
                        <th scope="col">Edat</th>
                        <th scope="col">Tendència</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(persona, index) in personas" :key="persona.id">
                        <td>{{ persona.id }}</td>
                        <td>
                            <span v-if="formActualizar && idActualizar == index">
                                
                                <!-- Formulario para actualizar -->
                                <input v-model="nombreActualizar" type="text" class="form-control">
                            </span>
                            <span v-else>
                                
                                <!-- Dato nombre -->
                                {{ persona.nombre }}
                            </span>
                        </td>
                        <td>
                            <span v-if="formActualizar && idActualizar == index">
                                
                                <!-- Formulario para actualizar -->
                                <input v-model="edadActualizar" type="text" class="form-control">
                            </span>
                            <span v-else>
                                <!-- Dato edad -->
                                {{ persona.edad }}
                            </span>
                        </td>
                        <td>
                            <span v-if="formActualizar && idActualizar == index">
                                
                                <!-- Formulario para actualizar -->
                                <input v-model="tendenciaActualizar" type="text" class="form-control">
                            </span>
                            <span v-else>
                                
                                <!-- Dato nombre -->
                                {{ persona.tendencia }}
                            </span>
                        </td>
                        <td>
                            
                            <!-- Botón para guardar la información actualizada -->
                            <span v-if="formActualizar && idActualizar == index">
                                <button @click="guardarActualizacion(index)" class="btn btn-danger">Guardar</button>
                            </span>
                            <span v-else>
                                
                                <!-- Botón para mostrar el formulario de actualizar -->
                                <button @click="verFormActualizar(index)" class="btn btn-danger">Actualitzar</button>

                                <!-- Botón para borrar -->
                                <button @click="borrarPersona(index)" class="btn btn-danger">Esborrar</button>
                            </span>
                        </td>
                    </tr>
                </tbody>
            </table>
        </section>
        <pre> </pre>
  </div>
</template>

 <script>
    export default {
        data() {
        return {
            // Input nombre
            nombre: '',
            // Input edad
            edad: '',
            // Ver o no ver el formulario de actualizar
            tendencia: '',
            formActualizar: false,
            // La posición de tu lista donde te gustaría actualizar 
            idActualizar: -1,
            // Input nombre dentro del formulario de actualizar
            nombreActualizar: '',
            // Input edad dentro del formulario de actualizar
            edadActualizar: '',
            // Lista de personas
            tendenciaActualizar: '',
            personas: [] 
         }
    },
        methods: {
            crearPersona: function () {
                
                // Anyadimos a nuestra lista
                this.personas.push({
                    id: + new Date(),
                    nombre: this.nombre,
                    edad: this.edad,
                    tendencia: this.tendencia
                });
                
                // Vaciamos el formulario de añadir
                this.nombre = '';
                this.edad = '';
                this.tendencia = '';
            },
            verFormActualizar: function (persona_id) {
                
                // Antes de mostrar el formulario de actualizar, rellenamos sus campos
                this.idActualizar = persona_id;
                this.nombreActualizar = this.personas[persona_id].nombre;
                this.edadActualizar = this.personas[persona_id].edad;
                this.tendenciaActualizar = this.personas[persona_id].tendencia;
                
                // Mostramos el formulario
                this.formActualizar = true;
            },
            borrarPersona: function (persona_id) {
                
                // Borramos de la lista
                this.personas.splice(persona_id, 1);
            },
            guardarActualizacion: function (persona_id) {
                // Ocultamos nuestro formulario de actualizar
                this.formActualizar = false;
                // Actualizamos los datos
                this.personas[persona_id].nombre = this.nombreActualizar;
                this.personas[persona_id].edad = this.edadActualizar;
                this.personas[persona_id].tendencia = this.tendenciaActualizar;
            }
        }
    }
</script>

<style scoped>
p {
    margin-bottom: 1.6em; /*espai entre paràgrafs*/
}
.body2 {
    font-family: Georgia, 'Times New Roman', Times, serif; /*tipografia*/
    color: black; /*color*/
    font-size: 1.2rem; /*mida*/
    line-height: 1.6em; /*espai entre línies*/
    margin: 0;
} 
.btn {
    background-color: #fa7b74;
    border-color: unset;
    color: white;
}

.btn:hover{
    background: #fb9f9a;
}
</style>