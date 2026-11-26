export default {
  global: {
    Name: 'Sistemas de la maquinaria agrícola y fundamentos para su mantenimiento seguro',
    Description:
      'El componente formativo aborda los principios básicos de electrotecnia e hidráulica, así como las características, funciones y mantenimiento de los sistemas auxiliares del motor diésel y los principales sistemas del tractor agrícola. Asimismo, desarrolla aspectos relacionados con la seguridad y salud en el trabajo, considerando la normativa aplicable, la ergonomía, el uso de elementos de protección personal, la identificación de peligros y la prevención y control de riesgos durante las actividades de mantenimiento.',
    imagenBannerPrincipal: '@/assets/curso/portada/banner-principal.png',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner-principal.png',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-1.svg',
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-2.svg',
      },
    ],
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
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo:
          'Fundamentos de electrotecnia aplicados a la maquinaria agrícola',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Conceptos básicos de electrotecnia',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Magnitudes eléctricas',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Fuentes de corriente continua',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Instrumentos de medición',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo:
              'Aplicaciones y riesgos eléctricos en la maquinaria agrícola',
            hash: 't_1_5',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Fundamentos de hidráulica aplicados a la maquinaria agrícola',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Conceptos básicos de hidráulica',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Propiedades de los fluidos',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Principios de Pascal y Arquímedes',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Unidades de presión y sus equivalencias',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Sistemas auxiliares del motor diésel',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Sistema de admisión de aire',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Sistema de escape',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Sistema de lubricación',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Sistema de refrigeración',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo: 'Sistema de alimentación de combustible',
            hash: 't_3_5',
          },
          {
            numero: '3.6',
            titulo:
              'Proceso de desairado del sistema de alimentación de combustible',
            hash: 't_3_6',
          },
          {
            numero: '3.7',
            titulo: 'Análisis de aceite como herramienta predictiva',
            hash: 't_3_7',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Sistemas del tractor agrícola',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Sistema eléctrico',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Sistema hidráulico',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Sistema de transmisión',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Sistema de dirección',
            hash: 't_4_4',
          },
          {
            numero: '4.5',
            titulo: 'Neumáticos y tipos de llantas',
            hash: 't_4_5',
          },
          {
            numero: '4.6',
            titulo: 'Presión de inflado de los neumáticos',
            hash: 't_4_6',
          },
          {
            numero: '4.7',
            titulo: 'Relación suelo-máquina y características del rodaje',
            hash: 't_4_7',
          },
          {
            numero: '4.8',
            titulo: 'Mantenimiento de los sistemas de dirección y rodaje',
            hash: 't_4_8',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo:
          'Seguridad y salud en el trabajo en el mantenimiento de maquinaria agrícola',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo:
              'Normativa de seguridad y salud en el trabajo aplicable al mantenimiento',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Ergonomía en las actividades de mantenimiento',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Elementos de protección personal',
            hash: 't_5_3',
          },
          {
            numero: '5.4',
            titulo: 'Identificación de peligros y valoración de riesgos',
            hash: 't_5_4',
          },
          {
            numero: '5.5',
            titulo: 'Medidas de prevención y control de riesgos',
            hash: 't_5_5',
          },
          {
            numero: '5.6',
            titulo:
              'Factores de riesgo asociados al manejo de herramientas e insumos',
            hash: 't_5_6',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
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
  glosario: [
    {
      termino: 'Análisis de aceite',
      significado:
        'Procedimiento que permite evaluar las condiciones del lubricante e identificar señales de desgaste, contaminación o posibles fallas en el motor.',
    },
    {
      termino: 'Caudal',
      significado:
        'Volumen de fluido que circula por un conducto durante un periodo determinado.',
    },
    {
      termino: 'Circuito eléctrico',
      significado:
        'Conjunto de elementos conectados que permiten la circulación de corriente eléctrica desde una fuente de energía hasta los dispositivos receptores.',
    },
    {
      termino: 'Corriente continua',
      significado:
        'Flujo de carga eléctrica que mantiene un mismo sentido de circulación a través de un circuito.',
    },
    {
      termino: 'Desairado',
      significado:
        'Procedimiento mediante el cual se elimina el aire presente en las tuberías y conductos del sistema de alimentación de combustible.',
    },
    {
      termino: 'Electrotecnia',
      significado:
        'Disciplina que estudia las aplicaciones de la electricidad y los principios relacionados con la generación, conducción y utilización de la energía eléctrica.',
    },
    {
      termino: 'Ergonomía',
      significado:
        'Disciplina que busca adaptar las actividades, herramientas y condiciones del entorno laboral a las capacidades de las personas para prevenir lesiones y mejorar las condiciones de trabajo.',
    },
    {
      termino: 'Fluido',
      significado:
        'Sustancia que puede fluir y adoptar la forma del recipiente o conducto que la contiene, como los líquidos y los gases.',
    },
    {
      termino: 'Hidráulica',
      significado:
        'Área de estudio que analiza el comportamiento de los fluidos y su aplicación en la transmisión de fuerza y energía.',
    },
    {
      termino: 'Ley de Ohm',
      significado:
        'Principio que establece la relación entre voltaje, corriente eléctrica y resistencia en un circuito eléctrico.',
    },
    {
      termino: 'Lubricación',
      significado:
        'Proceso mediante el cual se aplica un lubricante entre superficies en movimiento para reducir la fricción y el desgaste de los componentes.',
    },
    {
      termino: 'Mantenimiento predictivo',
      significado:
        'Estrategia que utiliza el seguimiento y análisis de las condiciones de los equipos para anticipar posibles fallas y orientar las intervenciones.',
    },
    {
      termino: 'Neumático',
      significado:
        'Elemento de caucho instalado en la rueda del tractor que soporta parte de la carga, proporciona tracción y facilita el desplazamiento sobre el terreno.',
    },
    {
      termino: 'Presión',
      significado:
        'Magnitud física que expresa la fuerza ejercida perpendicularmente sobre una superficie por unidad de área.',
    },
    {
      termino: 'Valoración de riesgos',
      significado:
        'Proceso mediante el cual se analiza la probabilidad de ocurrencia de un evento peligroso y la gravedad de sus posibles consecuencias para determinar el nivel de riesgo.',
    },
  ],
  referencias: [
    {
      referencia: 'Bridgestone. (s. f.). Understanding the anatomy of a tire.',
      link: 'https://commercial.bridgestone.com/en-us/resource-center/articles/tire-construction',
    },
    {
      referencia: 'Congreso de Colombia. (1979). Ley 9 de 1979.',
      link: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=1177',
    },
    {
      referencia: 'Congreso de Colombia. (2012). Ley 1562 de 2012.',
      link: 'https://normograma.mintic.gov.co/mintic/compilacion/docs/ley_1562_2012.htm',
    },
    {
      referencia: 'DigiKey. (s. f.). Calculadora de ley de Ohm.',
      link: 'https://www.digikey.com/es/resources/conversion-calculators/conversion-calculator-ohms',
    },
    {
      referencia:
        'Instituto Colombiano de Normas Técnicas y Certificación. (2012). Guía para la identificación de los peligros y la valoración de los riesgos en seguridad y salud ocupacional (GTC 45, segunda actualización).',
      link: '',
    },
    {
      referencia:
        'Ling, S. J., Sanny, J., & Moebs, W. (2016). University physics volume 1. OpenStax.',
      link: '',
    },
    {
      referencia:
        'Ministerio de Trabajo y Seguridad Social. (1979). Resolución 2400 de 1979.',
      link: '',
    },
    {
      referencia: 'Ministerio del Trabajo. (2015). Decreto 1072 de 2015.',
      link: 'https://www.mintrabajo.gov.co/documents/20147/0/DUR+1072+Sector+Trabajo+Actualizado+a+Diciembre+20+de+2021.pdf',
    },
    {
      referencia: 'Ministerio del Trabajo. (2019). Resolución 0312 de 2019.',
      link: 'https://www.mintrabajo.gov.co/documents/20147/59995826/Resolucion+0312-2019-+Estandares+minimos+del+Sistema+de+la+Seguridad+y+Salud.pdf',
    },
    {
      referencia:
        'National Institute of Standards and Technology. (2019). The International System of Units (SI) (9th ed.). U.S. Department of Commerce.',
      link: 'https://www.nist.gov/pml/special-publication-330',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez ',
          cargo:
            'Profesional G06. Responsable Ecosistema Virtual de Recursos Educativos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Diana Rocío Possos Beltrán',
          cargo: 'Responsable de línea de producción ',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Jorge Enrique Rodríguez Vargas',
          cargo: 'Instructor técnico',
          centro: 'Centro Agropecuario La Granja - Regional Tolima',
        },
        {
          nombre: 'Viviana Esperanza Herrera Quiñonez',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Jose Yobani Penagos Mora',
          cargo: 'Diseñador de contenidos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Sebastian Trujillo Afanador',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'María Fernanda Pineda Mora',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Jorge Bustos Gómez',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
