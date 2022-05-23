<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal
      .titulo-principal__numero
        span
          i.fas.fa-info.fa
      h1 Introducción
    
    .row.justify-content-center.align-items-center
      .col-lg-5.mb-3(data-aos="fade-right")
        img(src="@/assets/curso/images/tema1/img_intro.png" alt='AvatarTop').m-auto
      .col-lg-7(data-aos="fade-left")
        p La traducción de textos hoy por hoy exige una alta demanda debido a la gran cantidad de literatura que se produce por diferentes medios. Reconociendo que la lengua de señas sea una lengua que no se escribe, si es necesario conocer que existen sistemas que permiten plasmarla gráficamente. Así que, en este componente se dará atención a comprender la metodología que se aplica a esta rama de la comunicación. 

        p.mb-0 El aprendiz adquirirá fundamentos lingüísticos que le permitirán realizar procesos de traducción tanto textuales como discursivos, reconocerá los diferentes tipos de traducción que existen, qué aspectos intervienen en dicho proceso, sabrá aplicar los métodos y las técnicas de traducción. Todo esto para que se logre como resultado de aprendizaje el reconocer los elementos lingüísticos, sociolingüísticos, psicolingüísticos y culturales teniendo en cuenta la lengua origen y la lengua meta.



</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
