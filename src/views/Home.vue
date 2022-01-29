<template>
  <div class="home">

   <Slider/> 

   <pre> </pre>

   <div> <!--class="container-md"-->
          <b-card-group columns>
            <div columns v-for="proyecto in proyectos" :key="proyecto.id">
             <Card :srcimg="proyecto.srcimg" :alt="proyecto.alt" :titulo="proyecto.titulo" :url="proyecto.url"></Card> 
            </div>
           </b-card-group>
   </div>

  <pre> </pre>

   <div class="container">
         <section>   
             <img alt="Vue logo" src="../assets/logo.png">
             <p></p>
             <h1>A cada dècada la seva tendència. Així es resumeix mig segle de moda femenina</h1>
             <p class="body2"><b>50 anys</b>. Aquest aparentment curt període de temps es torna molt llarg si parlem en termes de moda. Els canvis socials, polítics i culturals han deixat la seva empremta en els estilismes i, malgrat la constant recuperació de tendències passades per part dels dissenyadors, l’evolució de la moda és més que evident. A continuació, t'expliquem el més memorable de la moda femenina als anys 70, 80 i 90.</p>
         </section>
   </div>
   <pre> </pre>
   <pre> </pre>

   </div>
</template>

<script>
import Slider from '../components/Slider.vue'
import Card from '../components/Card.vue' 
//(para utilizar en localhos)
//const lstProysJson = '/public/../data.json';
//para utilizar en produccion
const lstProysJson = '../data.json';
export default {
  props: {  
   name: {
      type: String,
      default: 'ListaProyectos'
    }
  },
  components: {
        Slider,
        Card
      },
  data() {
      return {
        proyectos:[],
        githubPage: 1,
        page: 1,
        loading: false,
        perPage: 5
      }
    },
    mounted() {
      this.fetchData()
    },
    methods: {
        async fetchData() {
          const res = await fetch (lstProysJson);
          const val= await res.json();
          this.proyectos=val;
          console.log(val);
        }
    }
  }
</script>

<style scoped>
/*h1 i h2*/
h1 {
    font-size: 2rem; /*mida*/
    line-height: 1.3em; /*espai entre línies*/
    color: #fa7b74; /*color*/
}

h2 {
    font-size: 1.5rem; /*mida*/
    line-height: 1.3em; /*espai entre línies*/
    color: black; /*color*/
}

p {
    margin-bottom: 1.6em; /*espai entre paràgrafs*/
}

.body2 {
    font-family: Georgia, 'Times New Roman', Times, serif; /*tipografia*/
    color:black; /*color*/
    font-size: 1.2rem; /*mida*/
    line-height: 1.6em; /*espai entre línies*/
    margin: 0;
} 

/*retoc de les imatges per ordre de dalt a baix*/
.imatgeResponsive {
    width: 100%; /*per adaptar les imatges a la mida de la pantalla*/
    height: auto;
}

.container {
    width: 85%;
    max-width: 850px;
    margin: 0 auto; /*per centrar el contingut*/
} 
</style>
