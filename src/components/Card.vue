<template>
  <div>
      <b-card
        overlay
        text-variant="white"
        :title="titulo"
        :img-src="srcimg"
        :img-alt="alt"
        img-top
        tag="proyecto"
        style="max-width: 28rem;"
        class="mb-2"
      >

        <b-button
          v-b-tooltip.hover
          title="Anar a la pàgina de la Wikipedia"
          variant="dark"
          :href="url"
          >Més informació</b-button>

      </b-card>

      
  </div>
</template>

<script>
export default {
  props: ["id", "titulo", "srcimg", "alt", "url"]
};
</script>

<style scoped>
.card-title{
  font-size: 6rem;
}
</style>