<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.bg-white.container-top.p-4.p-md-5.cs
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1  Técnicas de traducción y categorización

    .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in-down")
      .col-lg-12(data-aos="fade-down")
        img(src="@/assets/curso/images/tema4/img_1.png")

    #t_4_1.titulo-segundo
      .h2 4.1 Análisis del discurso
    
   
    p.mb-3 En la lingüística, analizar el discurso es una tendencia y una necesidad para obtener una concepción activa del lenguaje, por lo que dejó de tener solo importancia marginal desde hace 20 años. Así, leer el discurso se ha considerado como leer la realidad social. Existen muchas propuestas para hacer un análisis del discurso, por lo que en ocasiones puede resultar en un constante dolor de cabeza para muchos, sin embargo, previo a dicho análisis discursivo, es fundamental tener claridad teórica sobre: 

    .row.justify-content-center.align-items-center.p-2.mb-3
      .col-lg-12
        ul.lista-ul
          li 
            i.fas.fa-check
            | ¿Qué se busca en el discurso?
          li
            i.fas.fa-check
            | ¿Cuál es el contenido del discurso? (estructura textual, estrategias lingüísticas, el uso del silencio en la comunicación, entre otros).
          li 
            i.fas.fa-check
            | ¿Cuáles son las ideas primarias y secundarias?


    .row.justify-content-center
      .col-lg-10.d-none.d-lg-block
        .row.justify-content-center.align-items-center.mb-5.fondo-2.p-5(data-aos="zoom-in-down")
          .col-lg-5
            .jumbotron-4.p-2
              p.mb-3 <b>¿Qué se busca en el discurso?</b>
              p.mb-3 <b> ¿Cuál es el contenido del discurso? </b> (estructura textual, estrategias lingüísticas, el uso del silencio en la comunicación, entre otros).
              p.mb-3 <b> ¿Cuáles son las ideas primarias y secundarias? </b>
          .col-lg-5
            img(src="@/assets/curso/images/tema4/img_2.svg" alt='', )

    .row.d-block.d-lg-none
      .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in-down")
        .col-lg-5
          .jumbotron-5.p-3
            p.mb-3 <b>¿Qué se busca en el discurso?</b>
            p.mb-3 <b> ¿Cuál es el contenido del discurso? </b> (estructura textual, estrategias lingüísticas, el uso del silencio en la comunicación, entre otros).
            p.mb-3 <b> ¿Cuáles son las ideas primarias y secundarias? </b>
        .col-lg-5
          img(src="@/assets/curso/images/tema4/img_2.svg" alt='', style="width:480px; display:block; margin:auto 1rem ;")
  
    
    Separador

    #t_4_2.titulo-segundo
      .h2 4.2 La toma de apuntes como apoyo a la traducción e interpretación
    
    .row.align-items-center.justify-content-center.mb-3     
      .col-lg-10(data-aos="zoom-in-down")
        .jumbotron-6.mb-3.p-2
          .row.justify-content-center.align-items-center.p-2
            .col-lg-10
              p.mb-3 Existen múltiples formas de toma de apuntes como apoyo al proceso de traducción e interpretación. A continuación, se enuncian algunas que pueden ser de mucha utilidad:
              a.anexo.mb-4(:href="obtenerLink('/downloads/Formas_de_toma_de_apuntes.pdf')" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-pdf.svg")
                .anexo__texto
                  p #[b Anexo]. Formas de toma de apuntes como apoyo al proceso de traducción e interpretación.
    Separador

    #t_4_3.titulo-segundo
      .h2 4.3 Categorización de las técnicas de traducción
      p.mb-3 Jean-Paul Vinay y Jean Darbelnet (1958) son pioneros en los estudios de la taxonomía clásica de los procedimientos de traducción. Su trabajo da pie para enunciar algunas de las técnicas de traducción que se continúan trabajando hasta el día de hoy:
    .tarjeta.bg_grad-02.p-4.mb-5(data-aos="zoom-in-up")
      SlyderA
        .row.justify-content-center.align-items-center.p-5
          h3 Modulación
          p.mb-3 La modulación es una técnica de traducción en la que el mensaje varía mediante un cambio de perspectiva o un cambio semántico. “La ‘falsa modulación’ produce con frecuencia la distorsión del mensaje porque en este procedimiento de traducción más que en cualquier otro tiende a intervenir la subjetividad del traductor”, Vinay y  Darbelnet (1958).
          .col-md-10.mb-4.mb-md-0
            .tabla-a.color-acento-contenido.bac-table.mb-5
                table
                  thead
                    tr
                      th.py-3.mb-0
                        h4.font Enfoque
                      th.py-3.mb-0
                        h4.font Variedades de modulación
                      th.py-3.mb-0 
                        h4.font Ejemplo
                  tbody
                    tr
                      td
                        ul.lista-ul.margin-list-1
                          li 
                            i.fas.fa-check
                            | Cambio en el punto de vista.
                          li
                            i.fas.fa-check
                            | Opera con categorías de pensamiento, y no con categorías gramaticales.
                          li 
                            i.fas.fa-check
                            | Sensibilidad, experiencia y creatividad del traductor.
                      td
                        ul.lista-ul.mt-5
                          li 
                            i.fas.fa-check
                            | Lo abstracto por lo concreto o lo general por lo particular (o viceversa).
                          li
                            i.fas.fa-check
                            | Explicativa, la causa por el efecto. La parte por el todo.
                          li 
                            i.fas.fa-check
                            | La parte por el todo.
                          li 
                            i.fas.fa-check
                            | Una parte por otra.
                          li 
                            i.fas.fa-check
                            | Inversión de términos o de punto de vista.
                          li 
                            i.fas.fa-check
                            | Lo contrario negativado.
                          li
                            i.fas.fa-check
                            | Cambio de comparación o de símbolo.
                          li 
                            i.fas.fa-check
                            | Forma usual, por una culta.
          
                      td 
                        ul.lista-ul.margin-list-1
                          li 
                            i.fas.fa-check
                            | <i> Don’t get so excited </i>- Tranquilízate.
                          li
                            i.fas.fa-check
                            | <i> Blind  flying </i> - Pilotaje sin visibilidad (volar a ciegas).
                          li 
                            i.fas.fa-check
                            | <i> Peaceful and still </i> - Pacífico y sereno.

        .row.justify-content-center.align-items-center.p-5
          h3 Transposición
          p.mb-3 La transposición, también llamada recategorización, consiste en realizar un cambio en la estructura gramatical de la frase sin alterar su significado. Puede ser obligatoria, es decir, por el funcionamiento de la lengua, o facultativa, por elección del traductor. Algunos expertos la consideran el alma de la traducción.
          .col-md-10.mb-4.mb-md-0    
            .tabla-a.color-acento-contenido.bac-table.mb-5 
                table
                  thead
                    tr
                      th.py-3.mb-0
                        h4.font Enfoque
                      th.py-3.mb-0
                        h4.font Variedades de modulación
                      th.py-3.mb-0
                        h4.font Ejemplo
                  tbody
                    tr
                      td
                        ul.lista-ul
                          li 
                            i.fas.fa-check
                            | Lograr la naturalidad de expresión en el léxico, la estructura y el enunciado.
                          li
                            i.fas.fa-check
                            | Cambio en una categoría gramatical o, en otras palabras, una parte de la oración o la condición morfológica de una palabra.
                        
                      td
                        ul.lista-ul.mt-5
                          li 
                            i.fas.fa-check
                            | Doble transposición (doble recategorización).
                          li
                            i.fas.fa-check
                            | Transposición cruzada (quiasma).
                          li 
                            i.fas.fa-check
                            | Adverbio / verbo.
                          li 
                            i.fas.fa-check
                            | Adverbio / sustantivo.
                          li
                            i.fas.fa-check
                            | Adverbio / adjetivo.
                          li 
                            i.fas.fa-check
                            | Verbo / sustantivo.
                          li 
                            i.fas.fa-check
                            | Adjetivo / verbo.
          
                      td 
                        ul.lista-ul.margin-list-2
                          li 
                            i.fas.fa-check
                            | <i> I won’t be late </i>- No tardaré.
                          li
                            i.fas.fa-check
                            | <i> He learns quickly </i> - Es veloz para aprender.
                          li 
                            i.fas.fa-check
                            | <i> Waiting for your letter </i> - A la espera de su carta.



        .row.justify-content-center.align-items-center.p-5
          h3 Literal
          p.mb-3 Esta técnica también es conocida como metafrase, donde la traducción del texto se realiza de forma literal, palabra por palabra, sin alterar ni la estructura ni el significado de este. Con esta técnica se pierde el sentido del texto ya que no suelen haber muchas palabras con una única traducción en un idioma. Por lo que suele utilizarse solo cuando la lengua meta conserva la misma sintaxis, sentido y estilo que la original.
          .col-md-10.mb-4.mb-md-0
            .tabla-a.color-acento-contenido.bac-table.mb-5 
                table
                  thead
                    tr
                      th.py-3.mb-0
                        h4.font Enfoque
                      th.py-3.mb-0
                        h4.font Variedades de modulación
                      th.py-3.mb-0
                        h4.font Ejemplo
                  tbody
                    tr
                      td
                        ul.lista-ul
                          li 
                            i.fas.fa-check
                            | Trasvase o equivalencia monema por monema. 
                          li
                            i.fas.fa-check
                            | Correspondencia precisa de estructura y significación sin alterar la lengua original.
                      td 
                        ul.lista-ul
                          li 
                            i.fas.fa-check
                            | <i> I am reading a book </i> - Yo estoy leyendo un libro.
                          li
                            i.fas.fa-check
                            | <i> As a whole </i> – Como un todo (En conjunto).
                          li
                            i.fas.fa-check
                            | <i> I’m late </i> – Estoy tarde (llegué tarde).
            
        
        .row.justify-content-center.align-items-center.p-5
          h3 Calco
          p.mb-3 Similar a la traducción literal, el calco adopta la estructura y las expresiones de la lengua origen y las traslada a la lengua meta, pero sin respetar su estructura y creando un neologismo.
          .col-md-10.mb-4.mb-md-0
            .tabla-a.color-acento-contenido.bac-table.mb-5 
                table
                  thead
                    tr
                      th.py-3.mb-0
                        h4.font Enfoque
                      th.py-3.mb-0
                        h4.font Variedades de modulación
                      th.py-3.mb-0
                        h4.font Ejemplo
                  tbody
                    tr
                      td
                        ul.lista-ul
                          li 
                            i.fas.fa-check
                            |	Toma prestada el sintagma de la lengua origen.
                          li
                            i.fas.fa-check
                            | Se traducen literalmente los elementos que lo componen.
                        
                      td
                        ul.lista-ul.mt-5
                          li 
                            i.fas.fa-check
                            | Calco de expresión.
                          li
                            i.fas.fa-check
                            | Calco de estructura o sintáctico.

                          li 
                            i.fas.fa-check
                            | Calcos problemáticos, que señalan defectos en las traducciones (léxicos, ortográficos, tipográficos o sintácticos).
                      td 
                        ul.lista-ul
                          li 
                            i.fas.fa-check
                            | <i> Handball </i> – Balonmano
                          li
                            i.fas.fa-check
                            | <i> Headhunder </i> - Cazatalentos
                          li 
                            i.fas.fa-check
                            | <i> Skyscraper  </i> – Rascacielos.

            
        .row.justify-content-center.align-items-center.p-5
          h3  Préstamo
          p.mb-3 Consiste en utilizar una palabra o expresión de la lengua origen en la lengua meta. Normalmente se señala en formato cursiva para identificar la técnica de traducción. 
          .col-md-10.mb-4.mb-md-0
            .tabla-a.color-acento-contenido.bac-table.mb-5 
                table
                  thead
                    tr
                      th.py-3.mb-0
                        h4.font Enfoque
                      th.py-3.mb-0
                        h4.font Variedades de modulación
                      th.py-3.mb-0
                        h4.font Ejemplo
                  tbody
                    tr
                      td
                        ul.lista-ul
                          li 
                            i.fas.fa-check
                            | Tomar palabras de una lengua sin traducirlas.
                          li
                            i.fas.fa-check
                            | Llenar un vacío léxico cuando en la lengua meta no hay una equivalencia.
                        
                      td
                        ul.lista-ul
                          li 
                            i.fas.fa-check
                            | Extranjerismo.
                          li
                            i.fas.fa-check
                            | Extranjerismo naturalizado.
                          li 
                            i.fas.fa-check
                            | Préstamo necesario (pertinente).
                          li 
                            i.fas.fa-check
                            | Préstamo innecesario.

                      td 
                        ul.lista-ul
                          li 
                            i.fas.fa-check
                            | Blue jeans.
                          li
                            i.fas.fa-check
                            | Sándwich.
                          li 
                            i.fas.fa-check
                            | Software.
                          li 
                            i.fas.fa-check
                            | Chip.

        .row.justify-content-center.align-items-center.p-5
          h3  Equivalencia
          p.mb-3 La equivalencia o adaptación, es una técnica que utiliza diferentes recursos estructurales y estilísticos de la lengua origen, siempre y cuando transmitan el mismo mensaje. Cuando una de las lenguas utiliza un código propio o un idiomantismo, busca una correspondencia en significado entre las dos lenguas. Está ligado a los proverbios, frases idiomáticas, juegos de palabras, metáforas, juegos fónicos, variantes dialectales, entre otros.
          .col-md-10.mb-4.mb-md-0
            .tabla-a.color-acento-contenido.bac-table.mb-5 
                table
                  thead
                    tr
                      th.py-3.mb-0
                        h4.font Enfoque
                      th.py-3.mb-0
                        h4.font Variedades de modulación
                      th.py-3.mb-0
                        h4.font Ejemplo
                  tbody
                    tr
                      td
                        ul.lista-ul.margin-list
                          li 
                            i.fas.fa-check
                            | Pertenece al plano semántico, no al léxico.
                          li
                            i.fas.fa-check
                            |	Abarca la totalidad del mensaje ligado a la situación.
                        
                      td

                      td 
                        ul.lista-ul
                          li 
                            i.fas.fa-check
                            | <i> It’s raining cats and dogs  </i> - Llueve a cántaros..
                          li
                            i.fas.fa-check
                            | <i> To pull somebody’s leg </i>- Tomar del pelo a alguien.

                          li 
                            i.fas.fa-check
                            | <i> Haste makes waste </i> – Del afán no queda sino el cansancio.
                          li 
                            i.fas.fa-check
                            | <i> There are as like as two peas </i> – Son como dos gotas de agua.

        .row.justify-content-center.align-items-center.p-5
          h3  Adaptación
          p.mb-3 La adaptación, conocida también como traducción libre, sustitución o equivalente cultural, es una técnica de traducción en la que los elementos culturales y realidades de la lengua origen se adaptan a la cultura de la lengua meta. 
          .col-md-10.mb-4.mb-md-0
            .tabla-a.color-acento-contenido.bac-table.mb-5 
                table
                  thead
                    tr
                      th.font Enfoque
                      th.font Variedades de modulación
                      th.font Ejemplo
                  tbody
                    tr
                      td
                        ul.lista-ul.margin-list
                          li 
                            i.fas.fa-check
                            | Resultado más familiar y comprensible.
                          li
                            i.fas.fa-check
                            | Se crea en relación con otra situación, evitando un calco cultural o un contrasentido.

                        
                      td
                         ul.lista-ul
                          li 
                            i.fas.fa-check
                            | Inexistencia de equivalentes léxicos en la lengua de llegada. 
                          li
                            i.fas.fa-check
                            | Inexistencia de un contexto similar (o equivalente) en la cultura meta. 
                          li 
                            i.fas.fa-check
                            | Cambio de género al traducir (ejemplo: cuando se cambia literatura para adultos por una versión para niños). 
          
                          li 
                            i.fas.fa-check
                            |  Destinatario diferente al de la lengua original.

                        

                      td 
                        ul.lista-ul
                          li 
                            i.fas.fa-check
                            P Tomar el té (en Inglaterra). - Tomar un café (en Colombia). - Tomar un vino (en Argentina).
                          li
                            i.fas.fa-check
                            P <i> Friday </i> 13th. - martes 13 (Día de la mala suerte). <i> Come rain or come shine. </i> - Pase lo que pase.


                          li 
                            i.fas.fa-check
                            P <i> He kissed his daughter on the mouth. </i> - Abrazó tiernamente a su hija.
          
      

        .row.justify-content-center.align-items-center.p-5
          h3  Paráfrasis
          p.mb-3 Ampliación o explicación del significado de un término o fragmento en algún idioma. Se suele usar con textos de baja calidad o con omisiones, para dejar claro el significado confuso en el idioma fuente. Imita sin alterar y ayuda a comprender un enunciado (aclara localismos).
          .col-md-10.mb-4.mb-md-0
            .tabla-a.color-acento-contenido.bac-table
                table
                  thead
                    tr
                      th.font Enfoque
                      th.font Variedades de modulación
                      th.font Ejemplo
                  tbody
                    tr
                      td
                        ul.lista-ul.margin-list
                          li 
                            i.fas.fa-check
                            | El traductor utiliza sus propias palabras con un vocabulario sencillo, pero cuidando las ideas de la lengua origen.
                          li
                            i.fas.fa-check
                            | Expresa el mismo contenido, pero con diferente estructura sintáctica. 

                        
                      td
                        

                      td 
                        ul.lista-ul
                          li 
                            i.fas.fa-check
                            | El horno no está para bollos.
                          li
                            i.fas.fa-check
                            | Debido a lo tensa que se encuentra la situación, lo mejor sería no sumar más complicaciones por el moment.

                          li 
                            i.fas.fa-check
                            | Facepalm - Gesto de llevar la palma de la mano a la cara para sugerir irónicamente desaprobación ante algo ilógico o tonto.
          
                          li 
                            i.fas.fa-check
                            |  <i> V.I.P. </i> - Persona muy importante.












   





















</template>

<script>
export default {
  name: 'Tema3',
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
