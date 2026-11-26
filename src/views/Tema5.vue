<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Seguridad y salud en el trabajo en el mantenimiento de maquinaria agrícola
    .bloque-texto-g.bl01.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/temas/t5/img01.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0(data-aos="fade-down") Las actividades de mantenimiento de maquinaria agrícola implican la interacción con equipos, herramientas, sustancias y componentes que pueden representar riesgos para las personas. Durante estas labores pueden presentarse situaciones como golpes, cortes, atrapamientos, quemaduras, exposición a sustancias químicas, contacto con energía eléctrica y sobreesfuerzos físicos.
    p.mb-0 Por esta razón, es importante aplicar medidas de seguridad y salud en el trabajo que permitan prevenir accidentes, reducir la exposición a condiciones peligrosas y proteger la integridad de quienes realizan estas actividades. Para ello, se deben reconocer las disposiciones normativas aplicables, adoptar prácticas ergonómicas, utilizar los elementos de protección personal e identificar los peligros presentes en el entorno de trabajo.
    separador
    #t_5_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.1 Normativa de seguridad y salud en el trabajo aplicable al mantenimiento
    p.mb-4 En Colombia, las actividades de mantenimiento de maquinaria agrícola deben desarrollarse teniendo en cuenta las disposiciones de seguridad y salud en el trabajo, cuyo propósito es prevenir accidentes, enfermedades laborales y condiciones que puedan afectar la integridad de las personas.
    .bloque-texto-g.bloque-texto-g--inverso.bl01.p-3.p-sm-4.p-md-5.mb-4(data-aos="flip-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/temas/t5/img02.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El marco normativo establece responsabilidades para empleadores y trabajadores en la identificación de peligros, la evaluación de riesgos y la implementación de medidas de prevención y control. Estas disposiciones también orientan las condiciones de seguridad que deben considerarse durante el uso de herramientas, equipos, instalaciones y sustancias empleadas en las labores de mantenimiento.
    p.mb-4 Entre las principales normas relacionadas con la seguridad y salud en el trabajo se encuentran:
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col.col-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 7.
          span Normas relacionadas con la seguridad y salud en el trabajo
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th(data-aos="fade-down")(style= "width: 20%") Norma
                th(data-aos="fade-down")(style= "width: 80%") Aspectos relacionados con el mantenimiento de maquinaria agrícola
            tbody
              tr
                td.td-c01(data-aos="fade-down") Ley 9 de 1979
                td.td-c01(data-aos="fade-down") Establece medidas sanitarias y disposiciones para proteger la salud de los trabajadores en los lugares de trabajo.
              tr
                td(data-aos="fade-down") Ley 1562 de 2012
                td(data-aos="fade-down") Modifica el Sistema General de Riesgos Laborales y fortalece las disposiciones relacionadas con la prevención de accidentes y enfermedades laborales.
              tr
                td.td-c01(data-aos="fade-down") Decreto 1072 de 2015
                td.td-c01(data-aos="fade-down") Compila la reglamentación del sector trabajo e incluye las disposiciones para implementar el Sistema de Gestión de Seguridad y Salud en el Trabajo (SG-SST), entre ellas la identificación de peligros, la evaluación de riesgos y la aplicación de controles.
              tr
                td(data-aos="fade-down") Resolución 2400 de 1979
                td(data-aos="fade-down") Establece disposiciones sobre higiene y seguridad en los establecimientos de trabajo, relacionadas con las condiciones de los espacios, el uso de equipos y la prevención de accidentes.
              tr
                td.td-c01(data-aos="fade-down") Resolución 0312 de 2019
                td.td-c01(data-aos="fade-down") Define los estándares mínimos que deben cumplir los empleadores y contratantes para implementar el SG-SST, de acuerdo con las características de la organización.
    .row.justify-content-center.align-items-center.mb-4
      .col.col-lg-1.col-6.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/t5/img03.svg', alt='')
      .col.col-lg-9.col-12.order-lg-2.order-2
        p.mb-0(data-aos="fade-down") Estas normas proporcionan un marco para organizar las actividades de prevención y protección durante el mantenimiento de maquinaria agrícola. Su aplicación debe considerar las características de cada labor, las condiciones del lugar de trabajo y los peligros asociados con los equipos, las herramientas y los materiales utilizados.
    .row.justify-content-center.mb-4
      .col-lg-10.col-12
        .tarjeta.tarjeta.c04.px-4.py-2.mb-0
          p.mb-0.text-center En el mantenimiento de maquinaria agrícola, el cumplimiento de estas disposiciones implica adoptar prácticas como las siguientes:
    .row.justify-content-center.align-items-center.mb-4(data-aos="flip-up")
      .col-lg-6.col-12.mb-md-0.order-lg-2.order-2.mb-lg-0
        LineaTiempoD.color-acento-botones.especial
          .row(numero="1" titulo="Identificación de peligros")
            .col-12.mb-4.mb-md-0
              p.mb-0 Reconocer las fuentes o situaciones que pueden ocasionar lesiones o afectar la salud durante las actividades de mantenimiento.
          .row(numero="2" titulo="Evaluación de riesgos")
            .col-12.mb-4.mb-md-0
              p.mb-0 Analizar la probabilidad de ocurrencia y las posibles consecuencias de los peligros identificados.
          .row(numero="3" titulo="Implementación de controles")
            .col-12.mb-4.mb-md-0
              p.mb-0 Establecer medidas para eliminar los peligros o reducir los riesgos, de acuerdo con las condiciones de trabajo.
          .row(numero="4" titulo="Uso de elementos de protección personal")
            .col-12.mb-4.mb-md-0
              p.mb-0 Seleccionar y utilizar los elementos adecuados según los riesgos presentes en cada actividad.
          .row(numero="5" titulo="Capacitación y procedimientos seguros")
            .col-12.mb-4.mb-md-0
              p.mb-0 Recibir orientación sobre el manejo de herramientas, equipos, sustancias y procedimientos de mantenimiento.
          .row(numero="6" titulo="Inspección de equipos y herramientas")
            .col-12.mb-4.mb-md-0
              p.mb-0 Comprobar sus condiciones antes de utilizarlos y reportar cualquier daño o situación insegura.
      .col-lg-4.order-lg-1.order-1.mb-lg-0.mb-4.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/t5/img04.png', alt='')
    .row.justify-content-center.mb-0
      .col-lg-10.col-12
        p.mb-0 La aplicación de estas medidas contribuye a desarrollar las actividades de mantenimiento en condiciones seguras y a fortalecer una cultura de prevención en los entornos de trabajo.
    separador
    #t_5_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.2 Ergonomía en las actividades de mantenimiento
    p.mb-4 La ergonomía estudia la relación entre las personas, las actividades que realizan y las condiciones del entorno de trabajo. Su aplicación busca adaptar las tareas, las herramientas y los espacios a las capacidades de los trabajadores, con el propósito de reducir los esfuerzos físicos innecesarios y prevenir lesiones.
    .row.justify-content-center.align-items-stretch.mb-4.g-0
      .col-lg-7.col-12.order-lg-1.order-2
        .cajon.c01.px-4.py-3.h-100.w-100
          p.mb-4 Durante el mantenimiento de maquinaria agrícola pueden realizarse actividades que requieren adoptar posturas incómodas, levantar o trasladar componentes pesados, efectuar movimientos repetitivos y mantener determinadas posiciones durante periodos prolongados. Estas condiciones pueden generar fatiga, molestias musculares y trastornos musculoesqueléticos, especialmente en la espalda, el cuello, los hombros y las extremidades superiores. 
      .col-lg-5.col-8.col-md-6.order-lg-2.order-1.mb-lg-0.mb-4
        figure
          img(src='@/assets/curso/temas/t5/img05.jpg', alt='')
    .row.justify-content-center.mb-4
      .col-lg-8.col-12
        .tarjeta.tarjeta.c04.px-4.py-2.mb-0
          p.mb-0.text-center Entre los principales factores que deben tenerse en cuenta se encuentran:
    .row.justify-content-center.bg04
      .col-lg-10.col-12
        PasosA.color-primario.mb-4(tipo="n")
          .row.justify-content-center
            .col-lg-10.order-lg-1.order-2(data-aos="fade-right")
              h4 Posturas forzadas
              p.mb-0 Se presentan al trabajar inclinado, arrodillado, en cuclillas o con los brazos elevados durante la revisión de componentes ubicados en zonas de difícil acceso.
            .col-lg-2.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
              img(src='@/assets/curso/temas/t5/img06.svg', alt="")
          .row.justify-content-center
            .col-lg-2.col-8.mb-lg-0.mb-4(data-aos="fade-right")
              img(src='@/assets/curso/temas/t5/img07.svg', alt="")
            .col-lg-10(data-aos="fade-left")
              h4 Manipulación manual de cargas
              p.mb-0 Ocurre al levantar, sostener, empujar o trasladar piezas, herramientas, baterías, neumáticos y otros elementos de la maquinaria.
          .row.justify-content-center
            .col-lg-10.order-lg-1.order-2(data-aos="fade-right")
              h4 Movimientos repetitivos
              p.mb-0 Se relacionan con acciones continuas de las manos, muñecas y brazos al utilizar herramientas o realizar tareas de limpieza, ajuste e inspección.
            .col-lg-2.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
              img(src='@/assets/curso/temas/t5/img08.svg', alt="")
          .row.justify-content-center
            .col-lg-2.col-8.mb-lg-0.mb-4(data-aos="fade-right")
              img(src='@/assets/curso/temas/t5/img09.svg', alt="")
            .col-lg-10(data-aos="fade-left")
              h4 Esfuerzos físicos
              p.mb-0 Aparecen al aplicar fuerza para aflojar o ajustar elementos, mover componentes o manipular herramientas.
          .row.justify-content-center
            .col-lg-10.order-lg-1.order-2(data-aos="fade-right")
              h4 Posturas prolongadas
              p.mb-0 Se presentan cuando una persona permanece durante mucho tiempo en una misma posición, por ejemplo, al trabajar debajo de un equipo o realizar inspecciones en espacios reducidos.
            .col-lg-2.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
              img(src='@/assets/curso/temas/t5/img10.svg', alt="")
    p.mb-4 Para reducir los riesgos ergonómicos durante el mantenimiento de maquinaria agrícola, se recomienda aplicar las siguientes medidas:
    .tarjeta.tarjeta.bg05.p-4.mb-4
      LineaTiempoC.color-acento-botones(text-small)
        .row(titulo="a.")
          .col-md-6.mb-4.mb-md-0.order-lg-2.order-2
            h4 Adoptar posturas adecuadas
            p Mantener la espalda en una posición estable, evitar giros bruscos del tronco y acercarse al componente que se va a intervenir, siempre que las condiciones de seguridad lo permitan.
          .col-md-6.order-lg-1.order-1
            figure
              img(src='@/assets/curso/temas/t5/img11.jpg', alt='')
        .row(titulo="b.")
          .col-md-6.mb-4.mb-md-0.order-lg-2.order-2
            h4 Utilizar ayudas mecánicas
            p Emplear gatos, elevadores, polipastos, carros o dispositivos apropiados para movilizar componentes pesados, de acuerdo con su capacidad y las instrucciones de uso.
          .col-md-6.order-lg-1.order-1
            figure
              img(src='@/assets/curso/temas/t5/img12.jpg', alt='')
        .row(titulo="c.")
          .col-md-6.mb-4.mb-md-0.order-lg-2.order-2
            h4 Manipular las cargas correctamente
            p Evaluar el peso y las dimensiones del objeto, mantenerlo cerca del cuerpo y solicitar ayuda cuando su manipulación supere la capacidad física de una persona.
          .col-md-6.order-lg-1.order-1
            figure
              img(src='@/assets/curso/temas/t5/img13.jpg', alt='')
        .row(titulo="d.")
          .col-md-6.mb-4.mb-md-0.order-lg-2.order-2
            h4 Organizar el espacio de trabajo
            p Ubicar las herramientas y los materiales al alcance, mantener despejadas las zonas de circulación y evitar trabajar en posiciones que dificulten los movimientos.
          .col-md-6.order-lg-1.order-1
            figure
              img(src='@/assets/curso/temas/t5/img14.jpg', alt='')
        .row(titulo="e.")
          .col-md-6.mb-4.mb-md-0.order-lg-2.order-2
            h4 Realizar pausas y alternar tareas
            p Establecer periodos de recuperación y variar las actividades cuando sea posible, para disminuir la fatiga y la repetición continua de movimientos.
          .col-md-6.order-lg-1.order-1
            figure
              img(src='@/assets/curso/temas/t5/img15.jpg', alt='')
        .row(titulo="f.")
          .col-md-6.mb-4.mb-md-0.order-lg-2.order-2
            h4 Seleccionar herramientas adecuadas
            p Utilizar herramientas que faciliten el agarre y permitan realizar las tareas sin aplicar esfuerzos innecesarios.
          .col-md-6.order-lg-1.order-1
            figure
              img(src='@/assets/curso/temas/t5/img16.jpg', alt='')
    p.mb-4 La aplicación de estas medidas contribuye a mejorar las condiciones de trabajo, reducir la fatiga y prevenir lesiones durante las actividades de mantenimiento. 
    .row.justify-content-center.align-items-stretch.mb-0.g-0
      .col-12.col-lg-5.mb-lg-0.mb-4.d-flex.order-lg-2.order-1
        figure.w-100.d-flex.align-items-center
          img.w-100(src='@/assets/curso/temas/t5/img17.svg', alt='')
      .col-12.col-lg-7.d-flex.order-lg-1.order-2
        .cajon.c02.p-4.w-100.d-flex.align-items-center
          .w-100
            .row.align-items-center.mb-4(data-aos="flip-down")
              .col-auto.pe-0(style="z-index:2")
                figure
                  img(src='@/assets/curso/ico.svg', style="width: 57px", alt='').m-auto
              .col-lg-auto.col-9.titulo01(style="z-index:1")
                .p-3
                  h3.mb-0.ms-0 Ejemplo aplicado al mantenimiento de maquinaria agrícola
            p Durante el desmontaje de una rueda de tractor, el componente puede representar una carga considerable debido a su peso y dimensiones. Intentar levantarlo o trasladarlo manualmente sin evaluar las condiciones puede generar sobreesfuerzos y lesiones en la espalda o las extremidades.
            p.mb-0 Para reducir este riesgo, se deben utilizar equipos de elevación o ayudas mecánicas apropiadas, asegurar la estabilidad de la maquinaria y realizar la actividad siguiendo las recomendaciones del fabricante y los procedimientos de trabajo seguro.
    separador
    #t_5_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.3 Elementos de protección personal
    figure.mb-0
      img(src='@/assets/curso/temas/t5/img18.png', alt='') 
    .cajon.c01.p-4.mb-4
      p.mb-0 Los elementos de protección personal (EPP) son dispositivos o prendas diseñados para proteger a los trabajadores frente a los riesgos que pueden afectar su seguridad y salud durante el desarrollo de una actividad. En el mantenimiento de maquinaria agrícola, su uso permite reducir la exposición a golpes, cortes, partículas proyectadas, ruido, sustancias químicas, polvo y otros agentes presentes en el entorno de trabajo.
    p La selección de estos elementos debe realizarse de acuerdo con los peligros identificados, las características de la tarea y las condiciones en las que se desarrolla. Por esta razón, no todos los trabajos requieren los mismos elementos de protección; es necesario determinar cuáles ofrecen protección adecuada para cada actividad y verificar que se encuentren en buen estado.
    p.mb-4 Entre los elementos que pueden utilizarse durante las actividades de mantenimiento de maquinaria agrícola se encuentran:
    .row.justify-content-center.mb.lg-4
      .col.col-lg-10.col-12
        ImagenInfografica.color-acento-botones.desktop.mb-4
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/t5/img19.svg', alt='')
          .tarjeta.color-secundario.p-3(x="12.3%" y="15%" numero="+")
            p Protege la cabeza frente a golpes o impactos ocasionados por objetos, herramientas o componentes.
          .tarjeta.color-secundario.p-3(x="12.3%" y="38.5%" numero="+")
            p Protegen los ojos de partículas, polvo, salpicaduras y otros materiales que pueden proyectarse durante las labores.
          .tarjeta.color-secundario.p-3(x="12.3%" y="60%" numero="+")
            p Ayudan a prevenir cortes, abrasiones, quemaduras y el contacto con aceites, grasas u otras sustancias, según el material y el tipo de guante.
          .tarjeta.color-secundario.p-3(x="12.3%" y="81%" numero="+")
            p Protege los pies frente a golpes, aplastamientos, perforaciones y resbalones. Debe seleccionarse según las condiciones del área de trabajo.
          .tarjeta.color-secundario.p-3(x="90.8%" y="15%" numero="+")
            p Reduce la exposición al ruido generado por motores, herramientas y equipos. Puede incluir tapones u orejeras.
          .tarjeta.color-secundario.p-3(x="90.8%" y="38%" numero="+")
            p Ayuda a evitar la inhalación de polvo, partículas, vapores o aerosoles, de acuerdo con el contaminante y el tipo de filtro requerido.
          .tarjeta.color-secundario.p-3(x="90.8%" y="60%" numero="+")
            p Protege la piel y facilita el desarrollo de las actividades. Debe ajustarse adecuadamente al cuerpo, sin partes sueltas que puedan quedar atrapadas en elementos móviles.
          .tarjeta.color-secundario.p-3(x="90.8%" y="81%" numero="+")
            p Protege el rostro frente a partículas proyectadas, salpicaduras y chispas durante determinadas actividades.
    .row.justify-content-center.col-12.mb-4
      figure.movil
        img(src='@/assets/curso/temas/t5/img20.svg', alt='')
    p.mb-4 La protección que ofrecen los EPP depende de su selección, ajuste, estado y utilización correcta. Para garantizar su efectividad, se deben considerar las siguientes recomendaciones:
    .row.mb-4
      .col-lg-6
        .tarjeta-avatar-b.mb-4
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/t5/img21.svg' alt='AvatarTop')
          .tarjeta.tarjeta.c03
            .p-4
              h4 Identificar los riesgos
              p Reconocer los peligros asociados con la actividad para determinar los elementos de protección necesarios.
              br
      .col-lg-6
        .tarjeta-avatar-b.mb-4
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/t5/img22.svg' alt='AvatarTop')
          .tarjeta.tarjeta.c03
            .p-4
              h4 Seleccionar los elementos adecuados
              p Elegir EPP que correspondan al tipo de riesgo, las características de la tarea y las recomendaciones del fabricante.
      .col-lg-6
        .tarjeta-avatar-b.mb-4
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/t5/img23.svg' alt='AvatarTop')
          .tarjeta.tarjeta.c03
            .p-4
              h4 Verificar su estado
              p Revisar que no presenten daños, desgaste, deformaciones o deterioro que puedan afectar su capacidad de protección.
              br
      .col-lg-6
        .tarjeta-avatar-b.mb-4
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/t5/img24.svg' alt='AvatarTop')
          .tarjeta.tarjeta.c03
            .p-4
              h4 Utilizarlos correctamente
              p Colocarlos y ajustarlos de acuerdo con las instrucciones de uso, evitando modificaciones que reduzcan su eficacia.
              br
      .col-lg-6
        .tarjeta-avatar-b.mb-4
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/t5/img25.svg' alt='AvatarTop')
          .tarjeta.tarjeta.c03
            .p-4
              h4 Realizar limpieza y almacenamiento
              p Mantenerlos limpios y guardarlos en lugares apropiados para evitar su contaminación o deterioro.
              br
      .col-lg-6
        .tarjeta-avatar-b.mb-4
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/t5/img26.svg' alt='AvatarTop')
          .tarjeta.tarjeta.c03
            .p-4
              h4 Reemplazarlos cuando sea necesario
              p Retirar de uso los elementos dañados, vencidos o que hayan perdido sus condiciones de protección.
              br
    p.mb-4 La selección de los elementos de protección personal depende de los peligros presentes en cada labor de mantenimiento. A continuación, se presentan algunos ejemplos de los EPP que pueden requerirse según la actividad realizada:
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col.col-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 8.
          span Ejemplos de uso según la actividad
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th(data-aos="fade-down")(style= "width: 40%") Actividad de mantenimiento
                th(data-aos="fade-down")(style= "width: 60%") Elementos de protección que pueden requerirse
            tbody
              tr
                td.td-c01(data-aos="fade-down") Inspección de componentes del motor
                td.td-c01(data-aos="fade-down") Gafas de seguridad, guantes y calzado de seguridad.
              tr
                td(data-aos="fade-down") Limpieza de piezas con productos químicos
                td(data-aos="fade-down") Guantes compatibles con la sustancia, gafas y protección respiratoria cuando corresponda.
              tr
                td.td-c01(data-aos="fade-down") Uso de herramientas eléctricas
                td.td-c01(data-aos="fade-down") Gafas de seguridad, protección auditiva y calzado de seguridad.
              tr
                td(data-aos="fade-down") Manipulación de aceites y lubricantes
                td(data-aos="fade-down") Guantes adecuados y gafas de protección.
              tr
                td.td-c01(data-aos="fade-down") Trabajos con generación de chispas
                td.td-c01(data-aos="fade-down") Careta o protección facial, guantes y ropa de trabajo apropiada.
              tr
                td(data-aos="fade-down") Actividades en ambientes ruidosos
                td(data-aos="fade-down") Tapones u orejeras de protección auditiva.
    .row.justify-content-center.align-items-center.mb-4
      .col.col-lg-1.col-6.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/t5/img27.svg', alt='')
      .col.col-lg-11.col-12.order-lg-2.order-2
        .cajon.cajon.c01.px-4.py-3
          p.mb-0(data-aos="fade-down") Es importante tener en cuenta que los elementos de protección personal constituyen una medida complementaria dentro de la prevención de riesgos. Su utilización no reemplaza la eliminación de los peligros ni la aplicación de controles técnicos, administrativos y procedimientos de trabajo seguro.
    p.mb-0 En consecuencia, durante el mantenimiento de maquinaria agrícola se deben seleccionar y utilizar los EPP de acuerdo con los riesgos de cada actividad, garantizando su disponibilidad, conservación y uso adecuado.
    separador
    #t_5_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.4 Identificación de peligros y valoración de riesgos
    p.mb-4 La identificación de peligros y valoración de riesgos es un proceso que permite reconocer las fuentes, situaciones o condiciones que pueden ocasionar accidentes o afectar la salud de las personas durante el desarrollo de una actividad laboral. En el mantenimiento de maquinaria agrícola, este proceso facilita reconocer las condiciones peligrosas presentes en los equipos, las herramientas, los materiales y el entorno de trabajo.
    .row.justify-content-center.mb-4
      .col.col-12
        .cajon.cajon.color-secundario.p-4.mb-0
          p.mb-0 Un peligro es una fuente, situación o acto con potencial de causar daño, mientras que el riesgo corresponde a la combinación de la probabilidad de que ocurra un evento peligroso y la gravedad de sus consecuencias. Diferenciar estos conceptos permite analizar las condiciones de trabajo y establecer medidas para prevenir accidentes y enfermedades laborales.
    p.mb-4 Durante las actividades de inspección, limpieza, ajuste y mantenimiento pueden identificarse diferentes tipos de peligros:
    .row.mb-4
      .col-12
        .px-0.py-0
          .row.align-items-center.bg03(data-aos="fade-down")
            .col-lg-4.d-none.d-lg-block.py-0.px-0
              figure(data-aos="zoom-in")
                img(src="@/assets/curso/temas/t5/img28.png", alt="")
            .col-lg-8.px-0.py-0
              SlyderF.custom.color-acento-botones.px-lg-5.py-0.px-0(columnas="col-lg-6 col-xl-6")
                .tarjeta.tarjeta--slyder.p-3
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t5/img29.svg", alt="").img100.m-auto
                  h4.text-center Mecánicos
                  p.text-center Relacionados con partes móviles, puntos de atrapamiento, herramientas cortantes, piezas que pueden caer y componentes sometidos a presión.
                .tarjeta.tarjeta--slyder.p-3
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t5/img30.svg", alt="").img100.m-auto
                  h4.text-center Físicos
                  p.text-center Asociados con ruido, vibraciones, temperaturas elevadas, iluminación deficiente y exposición a condiciones ambientales.
                .tarjeta.tarjeta--slyder.p-3
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t5/img31.svg", alt="").img100.m-auto
                  h4.text-center Químicos
                  p.text-center Relacionados con el contacto o la inhalación de aceites, grasas, combustibles, disolventes y productos de limpieza.
                .tarjeta.tarjeta--slyder.p-3
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t5/img32.svg", alt="").img100.m-auto
                  h4.text-center Eléctricos
                  p.text-center Asociados con cables deteriorados, conexiones defectuosas, baterías y contacto con componentes energizados.
                .tarjeta.tarjeta--slyder.p-3
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t5/img33.svg", alt="").img100.m-auto
                  h4.text-center Biomecánicos
                  p.text-center Vinculados con posturas forzadas, movimientos repetitivos, manipulación manual de cargas y esfuerzos físicos.
                .tarjeta.tarjeta--slyder.p-3
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t5/img34.svg", alt="").img100.m-auto
                  h4.text-center Locativos
                  p.text-center Relacionados con superficies resbaladizas, desniveles, desorden, obstáculos y condiciones inadecuadas de las áreas de trabajo.
                .tarjeta.tarjeta--slyder.p-3
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t5/img35.svg", alt="").img100.m-auto
                  h4.text-center Biológicos
                  p.text-center Asociados con la exposición a microorganismos, residuos orgánicos, animales o materiales contaminados que pueden estar presentes en determinados entornos agrícolas.
    .row.justify-content-center.mb-4
      .col-lg-10
        p.mb-0.text-center Para reconocer y analizar los riesgos durante el mantenimiento de maquinaria agrícola, se pueden considerar las siguientes etapas:
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col-lg-8.col-12.mb-md-0.order-lg-1.order-2.mb-lg-0
        .row.justify-content-center.mb-0
          .col.col-12
            AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta-c01")
              .row(titulo="Identificar las actividades")
                .col-12.mb-0.mb-md-0
                  p Reconocer las tareas que se realizan, como inspeccionar, limpiar, lubricar, ajustar o reemplazar componentes.
              .row(titulo="Reconocer los peligros")
                .col-12.mb-0.mb-md-0
                  p Identificar las fuentes o condiciones que pueden ocasionar lesiones o afectar la salud de los trabajadores.
              .row(titulo="Identificar las posibles consecuencias")
                .col-12.mb-0.mb-md-0
                  p Establecer los daños que podrían presentarse, como cortes, golpes, quemaduras, atrapamientos, intoxicaciones o lesiones musculoesqueléticas.
              .row(titulo="Valorar los riesgos")
                .col-12.mb-0.mb-md-0
                  p Analizar la probabilidad de ocurrencia y la gravedad de las consecuencias para determinar el nivel de riesgo.
              .row(titulo="Establecer prioridades")
                .col-12.mb-0.mb-md-0
                  p Determinar cuáles riesgos requieren atención inmediata y qué medidas de intervención deben implementarse.
      .col-lg-4.order-lg-2.order-1.mb-lg-0.mb-4.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/t5/img36.png', alt='')
    p.mb-4 Para comprender cómo se desarrolla la identificación de peligros y la valoración de riesgos, se presenta a continuación una situación relacionada con la revisión del sistema de transmisión de un tractor agrícola:
    .row.justify-content-center.align-items-stretch.mb-4.g-0
      .col-12.col-lg-5.mb-lg-0.mb-4.d-flex.order-lg-2.order-1
        figure.w-100.d-flex.align-items-center
          img.w-100(src='@/assets/curso/temas/t5/img37.svg', alt='')
      .col-12.col-lg-7.d-flex.order-lg-1.order-2
        .cajon.c02.p-4.w-100.d-flex.align-items-center
          .w-100
            .row.align-items-center.mb-4(data-aos="flip-down")
              .col-auto.pe-0(style="z-index:2")
                figure
                  img(src='@/assets/curso/ico.svg', style="width: 57px", alt='').m-auto
              .col-lg-auto.col-9.titulo01(style="z-index:1")
                .p-3
                  h3.mb-0.ms-0 Ejemplo aplicado al mantenimiento de maquinaria agrícola
            p Durante la revisión del sistema de transmisión de un tractor, una persona puede estar expuesta al peligro de atrapamiento si realiza una inspección con el motor en funcionamiento y existen componentes en movimiento. La posible consecuencia sería una lesión grave en las manos o en otras partes del cuerpo.
            p.mb-0 Para analizar esta situación, se debe identificar la actividad, reconocer el peligro, establecer las posibles consecuencias y valorar el nivel de riesgo. A partir de este análisis, se determinan las medidas de control necesarias antes de realizar la intervención.
    p.mb-4 Este proceso permite reconocer anticipadamente las condiciones que pueden afectar la seguridad y salud de los trabajadores, establecer prioridades de intervención y orientar la aplicación de medidas preventivas. Su desarrollo debe considerar las características de la maquinaria, las actividades realizadas, las condiciones del entorno y los procedimientos establecidos por la organización.
    .row.justify-content-center.align-items-center.mb-0
      .col.col-lg-1.col-6.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/t5/img38.svg', alt='')
      .col.col-lg-11.col-12.order-lg-2.order-2
        .cajon.cajon.c01.px-4.py-3
          p.mb-0(data-aos="fade-down") En Colombia, la Guía Técnica Colombiana GTC 45 constituye una referencia metodológica para identificar los peligros y valorar los riesgos en seguridad y salud ocupacional. Su aplicación puede apoyar el análisis de las condiciones de trabajo y la definición de medidas de intervención.
    separador
    #t_5_5.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.5 Medidas de prevención y control de riesgos
    .row.justify-content-center.mb-4
      .col.col-lg-4.col-8.col-md-6.order-lg-1.order-2.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/temas/t5/img39.jpg', alt='')
      .col.col-lg-8.col-12.order-lg-2.order-2
        .cajon.cajon.c02.color-primario.p-4.mb-4
          p.mb-0 Las medidas de prevención y control de riesgos son acciones orientadas a eliminar los peligros o reducir la probabilidad de que ocasionen accidentes y enfermedades laborales. En el mantenimiento de maquinaria agrícola, su aplicación permite desarrollar las actividades en condiciones seguras y proteger a las personas frente a los riesgos asociados con los equipos, las herramientas, los materiales y el entorno de trabajo.
        p(data-aos="fade-down") Estas medidas deben establecerse a partir de los peligros identificados y de la valoración de los riesgos. Para seleccionar los controles adecuados, se debe considerar la naturaleza de la actividad, las características de la maquinaria y las condiciones en las que se realiza el mantenimiento.
        p.mb-0 La prevención de riesgos contempla diferentes niveles de intervención, que se aplican de acuerdo con su capacidad para reducir la exposición al peligro. La jerarquía de controles comprende:
    .row.justify-content-center.align-items-center.mb-4(data-aos="flip-up")
      .col-lg-6.col-12.mb-md-0.order-lg-1.order-2.mb-lg-0
        LineaTiempoD.color-acento-botones.especial
          .row(numero="1" titulo="Eliminación")
            .col-12.mb-4.mb-md-0
              p.mb-0 Suprimir el peligro para evitar la exposición. Por ejemplo, retirar del área de trabajo un elemento que obstruye el paso.
          .row(numero="2" titulo="Sustitución")
            .col-12.mb-4.mb-md-0
              p.mb-0 Reemplazar un elemento, sustancia o procedimiento peligroso por otro que represente un menor riesgo. Por ejemplo, utilizar un producto de limpieza menos peligroso cuando sea técnicamente viable.
          .row(numero="3" titulo="Controles de ingeniería")
            .col-12.mb-4.mb-md-0
              p.mb-0 Implementar modificaciones físicas o dispositivos que reduzcan la exposición al peligro. Por ejemplo, instalar guardas de protección en partes móviles de los equipos.
          .row(numero="4" titulo="Controles administrativos")
            .col-12.mb-4.mb-md-0
              p.mb-0 Establecer procedimientos, instrucciones, señalización, capacitación y organización de las actividades para reducir la exposición a los riesgos.
          .row(numero="5" titulo="Elementos de protección personal")
            .col-12.mb-4.mb-md-0
              p.mb-0 Utilizar equipos y prendas que protejan al trabajador frente a los riesgos que no se han podido eliminar o controlar suficientemente mediante otras medidas.
      .col-lg-4.order-lg-2.order-1.mb-lg-0.mb-4.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/t5/img40.jpg', alt='')
    .row.justify-content-center.mb-4
      .col-lg-10.col-12
        .tarjeta.tarjeta.c04.px-4.py-2.mb-0
          p.mb-0.text-center En las actividades de inspección, limpieza, ajuste y mantenimiento se deben considerar las siguientes medidas:
    .row.mb-4
      .col-lg.col-md-6.mb-lg-0.mb-4(data-aos="fade-right")
        .tarjeta-numerada.color-primario.px-5.py-4.h-100
          .tarjeta-numerada__numero
            .h2 1
          h4.text-center Inmovilización de la maquinaria
          p.text-center.mb-0 Estacionar el equipo en una superficie estable, aplicar el freno de estacionamiento, apagar el motor y evitar movimientos inesperados antes de iniciar la intervención.
      .col-lg.col-md-6.mb-lg-0.mb-4(data-aos="flip-right")
        .tarjeta-numerada.color-secundario.px-5.py-4.h-100
          .tarjeta-numerada__numero
            .h2 2
          h4.text-center Control de energías peligrosas
          p.text-center.mb-0 Aislar las fuentes de energía y liberar o asegurar las energías acumuladas, de acuerdo con el procedimiento del fabricante y las características del equipo.
      .col-lg.col-md-6.mb-lg-0.mb-4(data-aos="flip-left")
        .tarjeta-numerada.color-acento-contenido.px-5.py-4.h-100
          .tarjeta-numerada__numero
            .h2 3
          h4.text-center Protección de partes móviles
          p.text-center.mb-0 Evitar el contacto con ventiladores, correas, poleas, ejes y otros componentes que puedan generar atrapamientos.
      .col-lg.col-md-6.mb-lg-0.mb-4(data-aos="fade-left")
        .tarjeta-numerada.c01.px-5.py-4.h-100
          .tarjeta-numerada__numero
            .h2 4
          h4.text-center Manejo seguro de fluidos
          p.text-center.mb-0 Controlar las fugas de aceites, combustibles y refrigerantes, y evitar el contacto directo con sustancias que puedan afectar la salud.
    .row.mb-4
      .col-lg.col-md-6.mb-lg-0.mb-4(data-aos="fade-right")
        .tarjeta-numerada.color-primario.px-5.py-4.h-100
          .tarjeta-numerada__numero
            .h2 5
          h4.text-center Uso adecuado de herramientas
          p.text-center.mb-0 Seleccionar herramientas apropiadas para cada tarea, verificar su estado y utilizarlas de acuerdo con las instrucciones de seguridad.
      .col-lg.col-md-6.mb-lg-0.mb-4(data-aos="flip-right")
        .tarjeta-numerada.color-secundario.px-5.py-4.h-100
          .tarjeta-numerada__numero
            .h2 6
          h4.text-center Orden y limpieza
          p.text-center.mb-0 Mantener despejadas las áreas de trabajo, retirar obstáculos y limpiar oportunamente los derrames para prevenir caídas y otros accidentes.
      .col-lg.col-md-6.mb-lg-0.mb-4(data-aos="flip-left")
        .tarjeta-numerada.color-acento-contenido.px-5.py-4.h-100
          .tarjeta-numerada__numero
            .h2 7
          h4.text-center Señalización del área
          p.text-center.mb-0 Advertir sobre las actividades de mantenimiento y restringir el acceso de personas no autorizadas cuando sea necesario.
      .col-lg.col-md-6.mb-lg-0.mb-4(data-aos="fade-left")
        .tarjeta-numerada.c01.px-5.py-4.h-100
          .tarjeta-numerada__numero
            .h2 8
          h4.text-center Uso de elementos de protección personal
          p.text-center.mb-0 Utilizar los EPP seleccionados según los peligros y las condiciones de cada actividad.
    p.mb-4 La aplicación de estas medidas permite reducir la exposición a los peligros, prevenir accidentes y favorecer el desarrollo seguro de las actividades de mantenimiento. Su efectividad depende de la identificación previa de los riesgos, la selección de controles adecuados, la capacitación de los trabajadores y la verificación permanente de las condiciones de seguridad.
    .row.justify-content-center.align-items-center.mb-0
      .col.col-lg-1.col-6.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/t5/img41.svg', alt='')
      .col.col-lg-11.col-12.order-lg-2.order-2
        .cajon.cajon.c01.px-4.py-3
          p.mb-0(data-aos="fade-down") Es importante recordar que los elementos de protección personal son la última medida dentro de la jerarquía de controles; por tanto, no deben sustituir las acciones dirigidas a eliminar los peligros o reducir los riesgos desde su origen.
    separador
    #t_5_6.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.6 Factores de riesgo asociados al manejo de herramientas e insumos
    p Durante las actividades de mantenimiento de maquinaria agrícola se utilizan herramientas manuales, eléctricas y neumáticas, así como diferentes insumos, entre ellos aceites, lubricantes, combustibles y productos de limpieza. La manipulación inadecuada de estos elementos puede generar accidentes, lesiones o afectaciones a la salud.
    p.mb-4 Por esta razón, es importante reconocer los factores de riesgo asociados con su uso y almacenamiento, así como las posibles consecuencias que pueden presentarse durante las labores de mantenimiento:
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col.col-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 9.
          span Factores de riesgo, consecuencias y medidas preventivas
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th(data-aos="fade-down")(style= "width: 33%") Factor de riesgo
                th(data-aos="fade-down")(style= "width: 33%") Posibles consecuencias
                th(data-aos="fade-down")(style= "width: 34%") Medidas preventivas
            tbody
              tr
                td.td-c01(data-aos="fade-down") Herramientas en mal estado: uso de herramientas desgastadas, deterioradas o defectuosas.
                td.td-c01(data-aos="fade-down") Cortes, golpes, lesiones en las manos y accidentes durante la actividad.
                td.td-c01(data-aos="fade-down") Inspeccionar las herramientas antes de utilizarlas y retirar aquellas que presenten daños.
              tr
                td(data-aos="fade-down") Uso inadecuado de herramientas: emplear herramientas para funciones diferentes a las previstas.
                td(data-aos="fade-down") Golpes, proyección de partículas, atrapamientos y lesiones.
                td(data-aos="fade-down") Seleccionar la herramienta apropiada y utilizarla de acuerdo con su función.
              tr
                td.td-c01(data-aos="fade-down") Herramientas eléctricas: cables deteriorados, conexiones defectuosas o manipulación inadecuada.
                td.td-c01(data-aos="fade-down") Descargas eléctricas, quemaduras y cortocircuitos.
                td.td-c01(data-aos="fade-down") Revisar cables y conexiones, utilizar equipos en buen estado y evitar su manipulación en condiciones de humedad.
              tr
                td(data-aos="fade-down") Manipulación de combustibles y lubricantes: contacto directo, derrames o almacenamiento inadecuado.
                td(data-aos="fade-down") Irritación de la piel, intoxicaciones, incendios y contaminación.
                td(data-aos="fade-down") Utilizar recipientes apropiados, evitar fuentes de ignición y emplear los elementos de protección requeridos.
              tr
                td.td-c01(data-aos="fade-down") Productos de limpieza y sustancias químicas: exposición por contacto, inhalación o salpicaduras.
                td.td-c01(data-aos="fade-down") Irritación, quemaduras químicas y afectaciones respiratorias.
                td.td-c01(data-aos="fade-down") Consultar las indicaciones de seguridad del producto, garantizar ventilación y utilizar protección adecuada.
              tr
                td(data-aos="fade-down") Almacenamiento inadecuado: herramientas e insumos ubicados en zonas de paso o sin condiciones apropiadas.
                td(data-aos="fade-down") Caídas, golpes, derrames, incendios y deterioro de materiales.
                td(data-aos="fade-down") Mantener el orden, utilizar espacios de almacenamiento apropiados y separar las sustancias incompatibles.
              tr
                td.td-c01(data-aos="fade-down") Manipulación manual de herramientas y componentes: levantamiento o traslado de objetos pesados o voluminosos.
                td.td-c01(data-aos="fade-down") Sobreesfuerzos, lesiones musculares y golpes.
                td.td-c01(data-aos="fade-down") Utilizar ayudas mecánicas cuando sea necesario y aplicar técnicas adecuadas de manipulación de cargas.
    .row.justify-content-center.align-items-center.mb-0
      .col.col-lg-1.col-6.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/t5/img42.svg', alt='')
      .col.col-lg-11.col-12.order-lg-2.order-2
        .cajon.cajon.c01.px-4.py-1
          p.mb-0(data-aos="fade-down") La identificación de estos factores permite reconocer las condiciones que pueden afectar la seguridad durante el mantenimiento. Por ello, es necesario inspeccionar las herramientas, manipular adecuadamente los insumos, mantener las áreas organizadas y aplicar las medidas de prevención correspondientes.
</template>
<script>
export default {
  name: 'Tema5',
  data: () => ({
    // variables de vue
  }),
}
</script>
<style lang="sass"></style>
