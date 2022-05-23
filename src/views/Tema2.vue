<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.bg-white.container-top.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Traducción

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12(data-aos="fade-down")
        img(src="@/assets/curso/images/tema2/img_1.png")


    #t_2_1.titulo-segundo
      .h2 2.1  Definición
    
    .row.mb-3
      .col-lg-12
        p.mb-0 El antiguo quehacer de la traducción ha buscado siempre expresar una idea o un texto en otra lengua. Cientos de autores han enunciado diferentes definiciones de traducción. A continuación, se exponen los más representativos: 

    .row.justify-content-center.align-items-center.mt-5
      .col-lg-12(data-aos="fade-up")
        .tabla-a.color-acento-contenido.mb-1
          table
            thead
              tr.th-4.text-center
                th.back-table.td_width  Autor
                th.back-table Definición
            tbody
              tr.th-1
                td.td_width <b> George Steiner (1975) </b>
                td Afirma que la traducción hace referencia a todo acto de comunicación.
              tr
                td <b> Nida (1959) </b>
                td  Dice que la traducción es la operación mediante la cual se produce en la lengua del receptor el equivalente natural más próximo del mensaje de la lengua-fuente, atendiendo en primer lugar al significado y, en segundo lugar, al estilo. 
              tr.th-1
                td <b> Hatim y Mason (1997) </b> 
                td Definen la traducción como un acto de comunicación que retransmite, a través de las fronteras lingüísticas y culturales, otro acto de comunicación.
              tr
                td <b> Parkinson de Saz (1984) </b>
                td Afirma que la traducción ha sido fundamental en la historia de la cultura, facilitando la difusión de obras que, de otra manera, hubieran tenido un público mucho más restringido.
              tr.th-1
                td <b> López Guix y Minett Wilkinson, (1997) </b>
                td Sostienen que en la medida en que la traducción es una técnica, es posible hacer cierto tipo de generalizaciones; pero en la medida en que es un arte, sólo la intuición y la sensibilidad lingüística del traductor pueden decidir si la solución general es aplicable a cada caso concreto.
        figcaption 
          p.mb-0 Nota. Tomado de ISACA (s.f.).

    Separador

    #t_2_2.titulo-segundo
      .h2 2.2  Diferencia entre técnicas y métodos de traducción

    p.mb-3 Muchas personas, incluidos los expertos, suelen confundir o mezclar estas dos definiciones, o presentan limitaciones en sus investigaciones basándose en su experiencia académica o profesional. En el abordaje de uno de los temas anteriores se amplió la definición de los métodos de traducción, por lo que a continuación solo se expondrá la diferencia entre ambos términos y se ahondará únicamente en las técnicas de traducción.

    p.mb-5 El método traductor es el desarrollo de un proceso de traducción reglamentado; por consiguiente, tiene un carácter que va más allá de lo individual. Es consciente y se aplica para la totalidad de un texto. Aunque ya se había hablado de los métodos traducción palabra por palabra, traducción fiel y adaptación, también existen, entre otros, los métodos:


    .row.align-items-center.justify-content-center.mb-3     
      .col-lg-8(data-aos="fade-up")
        .jumbotron-1.mb-3
          .row.justify-content-center.align-items-center.px-2
            .col-lg-5.mb-0
              img(src="@/assets/curso/images/tema2/img_2_1.png")
            .col-lg-5
              ul.lista-ul
                li.mb-0 
                  i.fas.fa-check
                  | Literal
                li.mb-0 
                  i.fas.fa-check
                  | Semántico
                li.mb-0  
                  i.fas.fa-check
                  | Libre
                li.mb-0  
                  i.fas.fa-check
                  | Idiomático
                li.mb-0 
                  i.fas.fa-check
                  | Comunicativo
                li.mb-0  
                  i.fas.fa-check
                  | Filológico
                li.mb-0  
                  i.fas.fa-check
                  | Interpretativo comunicativo
             
    p.mb-5 Por otro lado, las técnicas de traducción tienen que ver con las diferentes metodologías dentro del texto. Son la aplicación concreta visible en el resultado, que afecta a zonas menores del texto. 

    .row.mb-3.ps-2(data-aos="zoom-in-down")
      .col-8.col-lg-3.bg-color-1.px-4
        .h3.mb-0 Traducir:

    p.mb-5 Es una actividad que radica en entender y transferir lo que está escrito en un texto, llamado texto origen, a su significado equivalente o lo más cercano posible, en otro idioma, a un texto meta. Así que, podríamos hablar de la hermenéutica, es decir, la habilidad de explicar, traducir o interpretar los diferentes tipos de comunicación, llámese verbal, no verbal o escrita. Por lo general un traductor se encontrará con diferentes tipos de texto al traducir, los cuales requieren un amplio conocimiento terminológico y cultural del idioma al que se pretende traducir. Entre los temas que encontrará se hallan: 

    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-up")
      div(titulo="La traducción literaria. ")
        .row.align-items-center.justify-content-center.p-4
          .col-lg-3.mb-3
            img(src='@/assets/curso/images/tema2/img_2.png'  alt='', style="width:600px; display:block; margin:auto 0 ;")
          .col-lg-9
            p.mb-3 Incluye los escritos en verso o prosa, que contienen las novelas, los cuentos, los poemas, la poesía, canciones, obras de teatro, etc.
        

      div(titulo="Traducción comercial. ")
        .row.align-items-center.justify-content-center.p-4
          .col-lg-3.mb-3
            img(src='@/assets/curso/images/tema2/img_3.png'  alt='', style="width:600px; display:block; margin:auto 0 ;")
          .col-lg-9
            p.mb-3 Esta se relaciona con la publicidad y el marketing, aquí se encuentran los folletos, catálogos información promocional de una empresa y las campañas publicitarias en las que se ofrecen productos o servicios. Hay que recordar que para esta especialidad se requiere que el traductor comprenda la creatividad lingüística que se halla en este tipo de escritura, ya que en la publicidad se juega con el idioma y la terminología para lograr el impacto publicitario esperado.

      
      div(titulo="Traducción especializada.")
        .row.align-items-center.justify-content-center.p-4
          .col-lg-3.mb-3
            img(src='@/assets/curso/images/tema2/img_4.png'  alt='', style="width:600px; display:block; margin:auto 0 ;")
          .col-lg-9
            p.mb-3 Generalmente, este tipo de traducción contiene un lenguaje y una terminología específica. Es más dirigida a un grupo en concreto. Así que, es de esperarse que el profesional que se encargue de una traducción especializada tenga conocimientos en la materia. Este tipo de escritura se encuentra en los textos técnicos que se relacionan con todo con lo que tiene que ver con la industria, tecnología, arquitectura, producción, entre muchos más; además incluye los textos científicos; textos jurídicos, traducción que demanda exactitud lingüística por su profundidad temática; textos financieros, están relacionados con los temas económicos, cifras, balances, etc.
    Separador

    #t_2_3.titulo-segundo
      .h2 2.3 Métodos de traducción    

    p.mb-5 Se entienden como las diferentes tipologías o enfoques que se le pueden aplicar a un proceso de traducción de un texto. Entre estos están: 

    .row.align-items-center.justify-content-center.p-4(data-aos="fade-up")
      .col-lg-4.col-auto.mb-3.mb-lg-0
        .tarjeta.p-4.tranform.p-4
          .row.justify-content-center
            .col-5
              img(src='@/assets/curso/images/tema2/ico_1.svg' alt='', style="width:100px; display:block; margin:-4rem 0 ;").mb-2
          h4.text-center.mt-5 La traducción palabra por palabra.
          p.text-center  Consiste en conservar la estructura de la frase, traducir las palabras una a una extrayendo su significado más literal, aunque este salga de contexto. Aquí, las expresiones culturales se traducen literalmente. Este proceso se vuelve ventajoso para entender cómo aprender a traducir un texto complejo. 
      .col-lg-4.col-auto.mb-3.mb-lg-0
        .tarjeta.tranform.p-4
          .row.justify-content-center
            .col-5
              img(src='@/assets/curso/images/tema2/ico_2.svg'  alt='', style="width:100px; display:block; margin:-4rem 0 ;").mb-3
          h4.text-center.mt-5 Traducción fiel. 
          p.text-center.mb-5  Está determinada por la estructura gramatical y su objetivo es traducir exactamente el significado del texto original, tratando de guardar fidelidad al diseño del texto origen.
      .col-lg-4.col-auto.mb-3.mb-lg-0
        .tarjeta.tranform.p-4
          .row.justify-content-center
            .col-5
              img(src='@/assets/curso/images/tema2/ico_3.svg'  alt='', style="width:100px; display:block; margin:-4rem 0 ;")
          h4.text-center.mt-5 Adaptación. 
          p.text-center Comúnmente utilizado en poesía, obras de teatro y cine. Debido a las diferencias culturales, existen expresiones que únicamente son comprensibles en el lugar de origen de dicha expresión. En este método se adaptan en el texto expresiones que les sean familiares a quienes las van a leer, aunque el significado de las palabras no sea el mismo. Podemos tomar el caso de la expresión en inglés Friday 13th (día de la mala suerte o del terror), desde nuestra realidad cultural, en español se podría adaptar a Martes 13.

    Separador

    #t_2_4.titulo-segundo
      .h2 2.4 Recursos técnicos y tecnológicos en la traducción  

    p.mb-3 Para realizar la ardua labor de llevar un texto de un idioma a otro procurando la mayor claridad y fidelidad posible al texto original, se requiere contar con diferentes recursos técnicos que, afortunadamente hoy en el mundo del traductor ya se cuentan, como también de una plataforma tecnológica que facilite la tarea. Entre estos recursos técnicos podemos hablar de: libros y revistas de traducción; diccionarios para traductores; glosarios de traducción; foros de traducción.

    p.mb-3 En el campo de la lengua de señas, teniendo en cuenta que a esta lengua se considera ágrafa, existe un sistema de escritura llamado signwriting, que permite graficar de manera comprensible lo expresado en dicha lengua. Además, cabría mencionar sobre sistemas individuales que algunos sordos crean para hacer sus escritos, realizar exposiciones o simplemente para tomar notas personales.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12(data-aos="fade-down")
        img(src="@/assets/curso/images/tema2/img_5.png")


    p.mb-3 Como recursos tecnológicos para traducir textos, hay una gama variada de plataformas tecnológicas y didácticas que optimizan el proceso, como traductores de voz que a medida que la persona va hablando, un dispositivo traduce lo que se dice de forma casi simultánea. Hasta en algunos lugares se habla sobre cómo las nuevas tecnologías podrían sustituir los traductores e intérpretes ya que la inteligencia artificial posibilitará una mayor eficacia en el proceso traductor. 

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-5.mb-5.mb-lg-0(data-aos="fade-right")
        img(src='@/assets/curso/images/tema2/img_6.png' alt="")
      .col-12.col-lg-7.mb-5.mb-lg-0(data-aos="fade-left")
        p.mb-3 Cuando se habla de la lengua de señas, podríamos pensar en avances similares. En países como España, específicamente en la Universidad Politécnica de Madrid, se ha venido desarrollando un módulo de traducción automática que hace reconocimiento de voz y traduce a Lengua de Señas Española (LSE). En nuestro país, en la Universidad Distrital Francisco José de Caldas de la ciudad de Bogotá, en el año 2013 se desarrolló una herramienta tecnológica que permite mejorar el aprendizaje de la lengua de señas colombiana en los niños con discapacidad auditiva. 

        p.mb-0 Podemos ver que en un futuro cercano contaremos con herramientas tecnológicas que optimizan el proceso traductor, las cuales será de gran ayuda al momento de llevar un texto escrito o texto graficado en lengua de señas.
          
















































</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
