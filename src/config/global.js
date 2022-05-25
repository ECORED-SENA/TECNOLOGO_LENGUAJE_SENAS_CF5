export default {
  global: {
    componenteFormativo: 'Fundamentos lingüísticos y proceso de traducción',
    descripcionCurso:
      'A partir de la Ley 324 de 1996 en su artículo segundo, el Estado Colombiano reconoce la lengua de señas como idioma propio de la Comunidad Sorda del País, formando a su vez parte del patrimonio lingüístico y cultural según lo establecido en el Artículo 2 de la Ley 982 de 2005. En el marco de estos avances normativos se abrieron múltiples posibilidades, entre ellas el acceso de esta población a la educación, el cual no solo ha permitido su formación, autonomía y progreso como comunidad, sino también ha generado nuevas necesidades en torno a las herramientas y al capital humano que le acompaña en su desarrollo integral en los diferentes entornos de vida.',
    fondoBannerPrincipal: require('@/assets/curso/images/header/fondo-banner-principal_1.svg'),
    imagenBannerPrincipal: require('@/assets/curso/images/header/banner-principal_4.png'),
    fondoBannerInterno: require('@/assets/curso/images/header/interno.svg'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Fundamentos lingüísticos, textuales y discursivos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Definición',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Áreas interdisciplinarias de la lingüística',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Estructuras de la lingüística textual',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Análisis del discurso',
            hash: 't_1_4',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Traducción',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Conceptos',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Diferencia entre técnicas y métodos de traducción',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Métodos de traducción',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Recursos técnicos y tecnológicos en la traducción',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo:
          ' Aspectos que intervienen en el proceso de traducción y equivalencias',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Procesos para la traducción',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Equivalencia entre lenguas en el proceso de traducción',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Técnicas de traducción y categorización análisis',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Análisis del discurso',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo:
              ' La toma de apuntes como apoyo a la traducción e interpretación',
            hash: 't_4_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.3',
            titulo: 'Categorización de las técnicas de traducción',
            hash: 't_4_3',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Sociolingüística',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '5.1',
            titulo: 'Concepto',
            hash: 't_5_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.2',
            titulo: ' Dialecto',
            hash: 't_5_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.3',
            titulo: 'Variedad dialectal',
            hash: 't_5_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.4',
            titulo: 'División dialectal en Colombia',
            hash: 't_5_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.5',
            titulo: 'El uso coloquial y técnico de las lenguas',
            hash: 't_5_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.6',
            titulo:
              'Factores gramaticales, pragmáticos y semánticos de la lengua fuente y meta (español – LSC y LSC - español)',
            hash: 't_5_6',
          },
        ],
      },
    ],
    subMenu: [
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Acosta, D. F. (2020). El voseo en Medellín, Colombia: un rasgo dialectal distintivo de la identidad paisa. Dialectologia: revista electrònica, 91-109.',
    },
    {
      referencia:
        'Bernal, J. (1985). En torno a la lingüística textual. Thesaurus-Instituto Caro y Cuervo, 40(2), 390-395.',
    },
    {
      referencia:
        'Carr, K. (2013). Métodos y técnicas de traducción de los culturemas en la versión española de Skumtimmen, de Johan Theorin.',
    },
    {
      referencia:
        'Coseriu, E., & Polo, J. (1986). Introducción a la lingüística (Vol. 65). Gredos.',
    },
    {
      referencia:
        'Fridman-Mintz, B. (2012). Reflexiones sobre las etnias sordas. In Congreso iberoamericano de educación bilingüe para sordos, Paraguay.',
    },
    {
      referencia:
        'Gómez Font, A. (1999). Un nuevo lenguaje técnico: el español en la red.',
    },
    {
      referencia:
        'Gómez, N. L. (1999). Estructuras básicas y procesos fonológicos en la lengua de señas colombiana.',
    },
    {
      referencia:
        'Hatim, B. y I. Mason. 1997. The Translator as Communicator, Londres-Nueva York: Routledge.',
    },
    {
      referencia:
        'López Guix, J. G., & Wilkinson, J. M. (1997). Manual de traducción inglés-castellano. Barcelona: Gedisa.',
    },
    {
      referencia:
        'Luque Nadal, L. (2009). Los culturemas:¿ unidades lingüísticas, ideológicas o culturales?. Language design: journal of theoretical and experimental linguistics, (special issue), 0093-120.',
    },
    {
      referencia:
        'Massome, M. Mendez, M. (1996). Una aproximación internaccional para el análisis de la Lengua de Señas Argentina.',
    },
    {
      referencia: 'Matamoros, M. (2015). Procedimientos de traducción. UAMex.',
    },
    {
      referencia:
        'Montes, J. (1983). Habla, lengua e idioma. Thesaurus: Boletín del instituto Caro y Cuervo, 38, 329-339.',
    },
    {
      referencia:
        'Montes Giraldo, J. J. (1982). El español de Colombia: propuesta de clasificación dialectal. Thesaurus: Boletín del Instituto Caro y Cuervo, 37(1), 23-92.',
    },
    {
      referencia:
        'Nida, Eugene A. (1959). “Principles of Translation as Exemplified by Bible Translating”, en Reuben Brower (ed.), On Translation. Cambridge, Massachussetts, Harvard University Press: 11-31.',
    },
    {
      referencia:
        'Oviedo, A. (2001). Apuntes para una gramática de la Lengua de Señas Colombiana. República de Colombia, Ministerio de Educación Nacional, Instituto Nacional para Sordos.',
    },
    {
      referencia:
        'Parkinson de Saz, S. M. (1984). Teoría y técnicas de la traducción. Boletín AEPE, 31, 91-109',
    },
    {
      referencia:
        'Steiner, G. (1975). Después de Babel. Aspectos del lenguaje y la traducción (trad. A. Castañón)..',
    },
    {
      referencia:
        'Silva-Corvalán, C. (2001). Sociolingüística y pragmática del español. Georgetown University Press.',
    },
    {
      referencia:
        'Stokoe, W. C. (1981). Etics & emics and the facial aspect of sign language signs. Sign Language Studies, 33(1), 377-381.',
    },
    {
      referencia:
        'Van Dijk, T. A. (2005). Estructuras y funciones del discurso: una introducción interdisciplinaria a la lingüística del texto ya los estudios del discurso. Siglo XXI.',
    },
    {
      referencia:
        'Vinay, J. P., & Darbelnet, J. (1958). A methodology for translation.',
    },
  ],
  glosario: [
    {
      termino: 'Afijo',
      significado:
        'Partícula lingüística que se une a la palabra o raíz de la palabra para formar otra, creando una nueva con significado diferente. Si se fija adelante se le llama prefijo, pero si se fija atrás de la palabra se le llama sufijo.',
    },
    {
      termino: 'Anafórico',
      significado:
        'Cuando el sentido de un término gramatical o léxico depende de otro término ya mencionado.',
    },
    {
      termino: 'Analogía',
      significado:
        'Procedimiento para crear o transformar palabras o expresiones nuevas.',
    },
    {
      termino: 'Antropónimo',
      significado:
        'Sustantivo propio que designa a un ser humano. Nombres propios de personas.',
    },
    {
      termino: 'Apócope',
      significado:
        'Forma abreviada de una palabra, en la que se quitan letras o sílabas. ',
    },
    {
      termino: 'Bilingüe',
      significado: 'Persona capaz de expresarse perfectamente en dos lenguas.',
    },
    {
      termino: 'Catafórico',
      significado:
        'Cuando el sentido de un término depende de otro que se encuentra mencionado posteriormente (vínculo prospectivo).',
    },
    {
      termino: 'Cohipónimo',
      significado: 'Palabras que nombran objetos de un mismo campo semántico.',
    },
    {
      termino: 'Deíctico',
      significado:
        'Cuando muestra, hace referencia o señala algo ya dicho o que se va a decir dentro o fuera del texto.',
    },
    {
      termino: 'Deixis',
      significado:
        'Señalar o mostrar una persona, una cosa, un lugar o un tiempo exteriores al discurso. Solo puede interpretarse si se presta atención al contexto. “Éstos”, “allá”, “mío” y “yo” son algunos elementos que forman parte de la deixis.',
    },
    {
      termino: 'Diafasía',
      significado:
        'Variable que determina la situación en la cual el hablante se encuentra (contexto, interlocutores, circunstancias o finalidad de la comunicación), según el tipo de relación entre los interlocutores y que selecciona el registro lingüístico, sea formal o informal.',
    },
    {
      termino: 'Diasistema',
      significado: 'La coexistencia de sistemas en toda la lengua.',
    },
    {
      termino: 'Diastratía',
      significado: 'Cambios de una lengua por razones socioculturales.',
    },
    {
      termino: 'Diatopía',
      significado:
        'Cambios de una lengua por razones geográficas o espaciales.',
    },
    {
      termino: 'Elipsis',
      significado:
        'Eliminación de un elemento discursivo cuyo contenido puede reconstruirse gracias a la información del contexto. Se refleja en el texto con puntos suspensivos. ',
    },
    {
      termino: 'Étnicocultural',
      significado:
        'Comunidad determinada con ancestros, tradiciones, rituales e historia en común (etnia), y con una lengua, gastronomía, música, danza y religión compartida (cultura).',
    },
    {
      termino: 'Eufemismos',
      significado:
        'Términos que se usan para reemplazar algo que queremos expresar pero que puede resultar un tanto duro o malsonante a los oídos de las demás personas. ',
    },
    {
      termino: 'Exofórico',
      significado:
        'Cuando el significado referencial no se encuentra en el interior del texto verbal y se busca fuera del texto.',
    },
    {
      termino: 'Fático',
      significado:
        '“Dicho de una expresión lingüística, de un texto, etc.: Que pretenden asegurar o mantener la comunicación entre el emisor y el receptor”. Diccionario de la RAE (Real Academia Española).',
    },
    {
      termino: 'Filología',
      significado:
        '“Lingüística. Ciencia que estudia las culturas tal como se manifiestan en su lengua”. Diccionario de la RAE (Real Academia Española).',
    },
    {
      termino: 'Fonética',
      significado:
        'Estudia los sonidos físicos de las lenguas, las diferencias articulatorias perceptibles.',
    },
    {
      termino: 'Fonología',
      significado:
        'Estudia el modo como los elementos fónicos, sonidos vocálicos y consonánticos, funcionan.',
    },
    {
      termino: 'Géneros discursivos',
      significado:
        'Son una serie de enunciados estables del lenguaje que se caracterizan por tener una serie de similitudes. Se desarrolla en cada actividad humana y es propia del lenguaje.',
    },
    {
      termino: 'Glotología',
      significado:
        '“Lingüística”. Diccionario de la RAE (Real Academia Española).',
    },
    {
      termino: 'Glosología ',
      significado:
        '“Lingüística. Ver glotología”.  Diccionario de la RAE (Real Academia Española).',
    },
    {
      termino: 'Gramática',
      significado:
        'Estudia la estructura de las palabras y las reglas para hablar correctamente.',
    },
    {
      termino: 'Hiperonimia',
      significado:
        'Relaciona de lo general a lo particular. Son palabras cuyo significado abarca al de otras palabras.',
    },
    {
      termino: 'Hiponimia',
      significado:
        'Cuando se utilizan términos que establecen inclusión entre los conceptos para reforzarlo. Los hipónimos están contenidos dentro de los hiperónimos. Palabras cuyo significado es específico.',
    },
    {
      termino: 'Idiomatismo',
      significado:
        'Rasgo lingüístico peculiar y característico de un idioma determinado. Palabra o expresión cuya traducción literal en otro idioma no tendría sentido lógico.',
    },
    {
      termino: 'Interjecciones',
      significado:
        'Palabras que expresan sentimientos muy vivos, de dolor, de alegría, de tristeza, entre otros.',
    },
    {
      termino: 'Isoglosas',
      significado:
        '“Línea imaginaria que en un mapa representa los límites de un mismo fenómeno lingüístico con los puntos intermedios entre ambos”. Diccionario de la RAE (Real Academia Española).',
    },
    {
      termino: 'Lexema',
      significado:
        'Raíz de una palabra con valor léxico, es decir, con significado original o primigenio y denota la familia de la que proviene.',
    },
    {
      termino: 'Lingüística',
      significado:
        '“Perteneciente o relativo al lenguaje. Ciencia del lenguaje”. Diccionario de la RAE (Real Academia Española).',
    },
    {
      termino: 'Metáfrase',
      significado:
        'Nombre o sustantivo cuyo significado determina la realidad.',
    },
    {
      termino: 'Monema',
      significado:
        'Las partes más pequeñas de las palabras que contienen significado.',
    },
    {
      termino: 'Monolingüe',
      significado: 'Hecho sociolingüístico asociado a emplear una sola lengua.',
    },
    {
      termino: 'Monosémico',
      significado: 'De significado único.',
    },
    {
      termino: 'Morfema',
      significado:
        'Unidad mínima de una palabra capaz de expresar un significado gramatical. El morfema se une al lexema de la palabra para modificarlo y completar su significado.',
    },
    {
      termino: 'Morfología',
      significado: 'Estudia la forma de las palabras. ',
    },
    {
      termino: 'Onomatopeya',
      significado:
        'La representación escrita de un sonido natural. Por ejemplo, las voces de los animales.',
    },
    {
      termino: 'Ortografía',
      significado:
        'Es el conjunto de normas que regulan la escritura, las letras y los signos de puntuación. ',
    },
    {
      termino: 'Panhispánico',
      significado:
        '“Perteneciente o relativo a todos los pueblos que hablan la lengua española”. Diccionario de la RAE (Real Academia Española).',
    },
    {
      termino: 'Pragmática',
      significado:
        '“Parte de la lingüística que estudia el lenguaje en su relación con los usuarios y las circunstancias de la comunicación. Es relativo a la práctica o la realización de las acciones y no la teoría..',
    },
    {
      termino: 'Pronombre',
      significado:
        'Palabras que se emplean para referirse a personas, animales o cosas sin nombrarlas. Pueden ser demostrativos, personales, posesivos, indefinidos y numerales.',
    },
    {
      termino: 'Proposición',
      significado:
        'Es una oración, es decir, una palabra o un conjunto de palabras con sentido completo.',
    },
    {
      termino: 'Prosodia',
      significado:
        'Estudia los elementos de la expresión oral, como el acento, el tono, la entonación, el ritmo.',
    },
    {
      termino: 'Quiasma',
      significado: 'Entrecruzamiento en forma de equis.',
    },
    {
      termino: 'Semántica',
      significado:
        '“Estudia el significado de las expresiones de un símbolo o palabra.',
    },
    {
      termino: 'Sinonimia',
      significado:
        'Cuando se evita repetir un término, reemplazándolo por un sinónimo simétrico.',
    },
    {
      termino: 'Sintagma',
      significado:
        'Palabra o grupo de palabras en el que hay un núcleo, que puede ser un pronombre o un nombre.',
    },
    {
      termino: 'Sintaxis',
      significado: 'Estudia el orden de las palabras en una oración.',
    },
    {
      termino: 'Sociolingüística',
      significado:
        '“Es una disciplina que abarca una gama amplísima de intereses relacionados con el estudio de una o más lenguas en su entorno social”. Silva-Corvalán (2001).',
    },
    {
      termino: 'Sufijo',
      significado:
        'Morfemas (dentro de los llamados afijos), que se escriben al final de una palabra y le modifican su significado.',
    },
    {
      termino: 'Sustitución',
      significado: 'Cuando se reemplaza una palabra por otra.',
    },
    {
      termino: 'Unívoco',
      significado:
        'Adjetivo que tiene un solo nombre, significado o interpretación.',
    },
    {
      termino: 'Vocativo',
      significado:
        'Palabras con las que el emisor busca llamar la atención, calificar o nombrar a la persona a la cual se dirige.',
    },
  ],
  complementario: [
    {
      texto:
        'Coseriu, E., & Polo, J. (1986). Introducción a la lingüística (Vol. 65). Gredos.',
      tipo: 'Artículo',
      descarga: '/downloads/ANEXO 2 Introduccion_a_la_linguistica.pdf',
    },
    {
      texto:
        'Bernal, J. (1985). En torno a la lingüística textual. Thesaurus-Instituto Caro y Cuervo, 40(2), 390-395',
      tipo: 'Artículo',
      descarga: '/downloads/ANEXO 3 Entorno a la lingüística textual.pdf',
    },
    {
      texto:
        'Parkinson de Saz, S. M. (1984). Teoría y técnicas de la traducción. Boletín AEPE, 31, 91-109.',
      tipo: 'Artículo',
      descarga: '/downloads/ANEXO 9 Teoría_y_técnicas_de_la_traducción.pdf',
    },
    {
      texto:
        'Carr, K. (2013). Métodos y técnicas de traducción de los culturemas en la versión española de Skumtimmen, de Johan Theorin.',
      tipo: 'Artículo',
      descarga:
        '/downloads/ANEXO 10 Métodos_y_técnicas_ traducción_ en_culturemas.pdf',
    },
    {
      texto: 'Matamoros, M. (2015). Procedimientos de traducción. UAMex.',
      tipo: 'Artículo',
      descarga: '/downloads/ANEXO 13 Procedimientos_de_traducción.pdf',
    },
    {
      texto:
        'Montes Giraldo, J. J. (1982). El español de Colombia: propuesta de clasificación dialectal. Thesaurus: Boletín del Instituto Caro y Cuervo, 37(1), 23-92.Acosta, D. F. (2020). El voseo en Medellín, Colombia: un rasgo dialectal distintivo de la identidad paisa. Dialectologia: revista electrònica, 91-109.',
      tipo: 'Artículo',
      descarga:
        '/downloads/Anexo 18 El_voseo_en_Medellín_un_rasgo_dialectal_distintivo.pdf',
    },
    {
      texto:
        'Gómez Font, A. (1998). Un nuevo lenguaje técnico: el español en la red.',
      tipo: 'Artículo',
      descarga: '/downloads/Anexo 19 Un_nuevo_lenguaje_técnico.pdf',
    },
    {
      texto:
        'Gómez, N. L. (1999). Estructuras básicas y procesos fonológicos en la lengua de señas colombiana.',
      tipo: 'Artículo',
      descarga:
        '/downloads/Anexo 21 Estructuras_basicas_y_procesos_fonológicos_en_LSC.pdf',
    },
    {
      texto:
        'Fridman-Mintz, B. (2012). Reflexiones sobre las etnias sordas. En el Congreso iberoamericano de educación bilingüe para sordos, Paraguay.',
      tipo: 'Artículo',
      descarga: '/downloads/Anexo 22 Sobre_como_nombramos_a_los_sordos.pdf',
    },
    {
      texto:
        'Massone, M. I., & Menéndez, S. M. (1996). Una aproximación interaccional para el análisis de la Lengua de Señas Argenfina.',
      tipo: 'Artículo',
      descarga:
        '/downloads/Anexo 23 Una_aproximación_interaccional_para_el_análisis_de_la_Lengua_de_Señas_Argentina.pdf',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Tania Yaneth Ramírez Benítez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de comercio y servicios - Regional Tolima',
      },
      {
        nombre: 'Jhacesiz Mary Hincapié Atehortúa',
        cargo: 'Instructora',
        centro: 'Centro de Servicios de Salud - Regional Antioquia.',
      },
      {
        nombre: 'Manuel Alejandro Garzón',
        cargo: 'Instructor',
        centro: 'Centro de Servicios de Salud - Regional Antioquia.',
      },
      {
        nombre: 'German Albeiro Saldarriga',
        cargo: 'Instructor',
        centro: 'Centro de Servicios de Salud - Regional Antioquia',
      },
      {
        nombre: 'Adriana María Bustamante',
        cargo: 'Profesional Diseño Curricular',
        centro: 'Centro de Servicios de Salud - Regional Antioquia',
      },
      {
        nombre: 'Luz Mila Pacheco Fuentes',
        cargo: 'Diseñador Instruccional',
        centro: 'Centro de Diseño y Metrología Regional Distrito Capital',
      },
      {
        nombre: 'Sergio Arturo Medina Castillo',
        cargo: 'Evaluador instruccional',
        centro:
          'Centro para la Industria de la Comunicación Gráfica Regional Distrito Capital.',
      },
      {
        nombre: 'Julieth Paola Vital López',
        cargo: 'Revisora de estilo',
        centro:
          'Centro para la Industria y la Comunicación Gráfica – Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: ['Juan Daniel Polanco Muñoz', 'Diana Carolina Acevedo'],
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Gustavo Adolfo Marún Suárez',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodriguez Rodriguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Wilson Andrés Arenales Caceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy Maria Ruiz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
