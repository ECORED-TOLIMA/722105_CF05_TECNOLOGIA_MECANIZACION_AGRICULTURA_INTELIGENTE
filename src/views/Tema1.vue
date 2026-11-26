<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Fundamentos de electrotecnia aplicados a la maquinaria agrícola
    p.mb-4 La maquinaria agrícola incorpora sistemas eléctricos que permiten realizar diferentes funciones relacionadas con su funcionamiento, control y operación. Estos sistemas utilizan principios físicos que explican el comportamiento de la electricidad, por lo que comprender sus fundamentos resulta importante para reconocer sus componentes, interpretar sus características y entender su aplicación en los equipos agrícolas.
    .bloque-texto-g.bloque-texto-g--inverso.bl01.p-3.p-sm-4.p-md-5.mb-4(data-aos="flip-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/temas/t1/img01.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La electrotecnia proporciona los conocimientos básicos para comprender el funcionamiento de los circuitos eléctricos, las magnitudes que intervienen en ellos y los instrumentos utilizados para medirlas. Estos principios permiten reconocer la importancia de las fuentes de corriente continua, identificar las aplicaciones eléctricas en la maquinaria y comprender los riesgos asociados con la manipulación de sus componentes.
    .row.justify-content-center.mb-0
      .col.col-lg-auto.col-6.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/t1/img02.svg', alt='')
      .col.col-lg-10.col-12.order-lg-2.order-2
        .cajon.cajon.c01.px-4.py-3
          p.mb-0(data-aos="fade-down") El estudio de estos fundamentos permite comprender el funcionamiento de los sistemas eléctricos y reconocer su importancia en las actividades de revisión y mantenimiento de la maquinaria agrícola.
    separador
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.1 Conceptos básicos de electrotecnia
    .row.justify-content-center.mb-4
      .col.col-lg-4.col-8.col-md-6.order-lg-2.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/temas/t1/img03.jpg', alt='')
      .col.col-lg-8.col-12.order-lg-1.order-2
        p.mb-3 La electrotecnia es la disciplina que estudia las aplicaciones de la energía eléctrica, así como los principios y fenómenos relacionados con su generación, transformación, distribución y utilización. Sus conocimientos permiten comprender el funcionamiento de los circuitos y dispositivos eléctricos presentes en diferentes máquinas y equipos, entre ellos los utilizados en las actividades agrícolas.
        .cajon.cajon.color-secundario.p-4.mb-3
          p.mb-0 En la maquinaria agrícola, la electricidad cumple funciones esenciales para el arranque del motor, la alimentación de los sistemas de iluminación, la activación de dispositivos de control y el funcionamiento de componentes electrónicos. Por esta razón, conocer los principios básicos de electrotecnia facilita la comprensión de los sistemas eléctricos y contribuye a reconocer posibles anomalías durante las actividades de mantenimiento.
        p.mb-0 Para comprender los principios de la electrotecnia, es necesario reconocer algunos conceptos relacionados con el comportamiento de la energía eléctrica:
    .row.justify-content-center.align-items-center.mb-4(data-aos="flip-up")
      SlyderF.color-acento-botones(columnas="col-lg-6 col-xl-4")
        .tarjeta.bg01.px-4.py-5
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/t1/img04.svg' alt='AvatarTop')
          h4.text-center Electricidad
          p.text-center Fenómeno físico asociado a la presencia y el movimiento de cargas eléctricas. Su aprovechamiento permite alimentar diferentes dispositivos y sistemas de una máquina.
        .tarjeta.bg01.px-4.py-5
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/t1/img05.svg' alt='AvatarTop')
          h4.text-center Carga eléctrica
          p.text-center Propiedad de la materia que origina fenómenos eléctricos. Puede ser positiva o negativa y se relaciona con el comportamiento de los cuerpos frente a otros cuerpos cargados.
        .tarjeta.bg01.px-4.py-5
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/t1/img06.svg' alt='AvatarTop')
          h4.text-center Corriente eléctrica
          p.text-center Movimiento ordenado de cargas eléctricas a través de un material conductor. Permite transportar energía eléctrica hacia los componentes de un circuito.
        .tarjeta.bg01.px-4.py-5
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/t1/img07.svg' alt='AvatarTop')
          h4.text-center Circuito eléctrico
          p.text-center Conjunto de elementos conectados que permiten el paso de la corriente eléctrica cuando existe un recorrido cerrado.
        .tarjeta.bg01.px-4.py-5
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/t1/img08.svg' alt='AvatarTop')
          h4.text-center Conductor eléctrico
          p.text-center Material que facilita el desplazamiento de las cargas eléctricas. El cobre y el aluminio son ejemplos utilizados en la fabricación de cables y conexiones.
        .tarjeta.bg01.px-4.py-5
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/t1/img09.svg' alt='AvatarTop')
          h4.text-center Aislante eléctrico
          p.text-center Material que dificulta el paso de la corriente eléctrica y se utiliza para proteger los conductores y reducir el riesgo de contactos eléctricos. Algunos ejemplos son el caucho, el plástico y el vidrio.
    p.mb-4 Un circuito eléctrico está constituido por diferentes elementos que trabajan de manera conjunta para permitir el funcionamiento de un dispositivo o sistema, como se presenta a continuación:
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col-lg-10.col-12
        .titulo-sexto.color-acento-contenido
          h5 Figura 1.
          span Circuito eléctrico
      .row.justify-content-center
        .col-10
          figure.desktop
            img(src='@/assets/curso/temas/t1/img10.svg', alt='La figura 1 representa un circuito eléctrico básico compuesto por una fuente de energía (batería), conductores (cables), elementos de protección (fusible), interruptor y receptor o carga (bombilla), conectados mediante un circuito cerrado.')
      .col-12.mb-0
        figure.movil
          img(src='@/assets/curso/temas/t1/img11.svg', alt='La figura 1 representa un circuito eléctrico básico compuesto por una fuente de energía (batería), conductores (cables), elementos de protección (fusible), interruptor y receptor o carga (bombilla), conectados mediante un circuito cerrado.')
    .row.justify-content-center.mb-4
      .col-lg-4.col-12
        .tarjeta.tarjeta.c04.px-4.py-2.mb-0
          p.mb-0 Entre sus elementos principales se encuentran:
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col.col-12.col-lg-10
        .titulo-sexto.color-acento-contenido
          h5 Tabla 1.
          span Elementos básicos de un circuito eléctrico y sus funciones
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th(data-aos="fade-down")(style= "width: 30%") Elemento
                th(data-aos="fade-down")(style= "width: 70%") Función
            tbody
              tr
                td.td-c01(data-aos="fade-down") Fuente de energía
                td.td-c01(data-aos="fade-down") Suministra la energía eléctrica necesaria para el funcionamiento del circuito.
              tr
                td(data-aos="fade-down") Conductores
                td(data-aos="fade-down") Transportan la corriente eléctrica entre los diferentes componentes.
              tr
                td.td-c01(data-aos="fade-down") Interruptor
                td.td-c01(data-aos="fade-down") Permite abrir o cerrar el circuito y controlar el paso de la corriente.
              tr
                td(data-aos="fade-down") Receptor o carga
                td(data-aos="fade-down") Transforma la energía eléctrica en otra forma de energía, como luz, calor o movimiento.
              tr
                td.td-c01(data-aos="fade-down") Elementos de protección
                td.td-c01(data-aos="fade-down") Interrumpen el circuito cuando se presentan condiciones anormales, como sobrecorrientes o cortocircuitos.
    .row.justify-content-center.align-items-stretch.mb-4.g-0
      .col-lg-8.col-12.order-lg-1.order-2
        .cajon.c01.px-4.py-2.h-100.w-100
          p.mb-3 En un tractor agrícola, por ejemplo, la batería suministra energía eléctrica para alimentar diferentes circuitos. Al accionar el interruptor de encendido, se habilitan determinadas conexiones que permiten activar los sistemas correspondientes. De esta manera, los conductores, dispositivos de control y elementos de protección trabajan conjuntamente para garantizar el funcionamiento de los componentes eléctricos.
          .row.mb-0
            .col-lg-2.d-none.d-lg-block.mb-3
              figure
                img(src='@/assets/curso/temas/t1/img13.svg', alt='')
            .col.col-10
              p.mb-0(data-aos="fade-down") Los conocimientos básicos de electrotecnia permiten comprender cómo se distribuye y utiliza la energía eléctrica en los equipos agrícolas. También facilitan la identificación de los elementos que conforman los circuitos y proporcionan fundamentos para interpretar mediciones eléctricas, reconocer conexiones y comprender las condiciones que pueden afectar su funcionamiento.
      .col-lg-4.col-8.col-md-6.order-lg-2.order-1.mb-lg-0.mb-4
        figure
          img(src='@/assets/curso/temas/t1/img12.jpg', alt='')
    p.mb-0 Estos conocimientos constituyen la base para abordar las magnitudes eléctricas, las fuentes de corriente continua y los instrumentos de medición que se utilizan en la revisión y el mantenimiento de la maquinaria agrícola.
    separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.2 Magnitudes eléctricas
    figure.mb-0
      img(src='@/assets/curso/temas/t1/img14.png', alt='') 
    .cajon.c01.p-4.mb-4
      p.mb-0 Las magnitudes eléctricas son propiedades físicas que permiten describir y medir el comportamiento de la electricidad en un circuito. Su conocimiento facilita la comprensión de las condiciones de funcionamiento de los componentes eléctricos y permite interpretar los valores obtenidos durante las actividades de inspección y mantenimiento de la maquinaria agrícola.
    p.mb-4 Entre las principales magnitudes eléctricas se encuentran el voltaje, la corriente eléctrica y la resistencia. Estas se relacionan entre sí y permiten explicar cómo se comporta la energía eléctrica cuando circula por un circuito.
    TabsC.color-acento-botones.mb-4
      .py-3.py-md-4(titulo="Voltaje o tensión eléctrica")
        .px-4
          .row.justify-content-center
            .col-lg-5.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/temas/t1/img15.jpg', alt='')
            .col-lg-7.mb-4.mb-md-0
              ul.lista-ul.mb-0
                li
                  i.lista-ul__vineta
                  | El voltaje, también denominado tensión eléctrica, es la diferencia de potencial eléctrico entre dos puntos de un circuito. Esta diferencia permite impulsar el movimiento de las cargas eléctricas a través de un conductor. Su unidad de medida es el voltio (V).
                li
                  i.lista-ul__vineta
                  | En la maquinaria agrícola, el voltaje está presente en las baterías y los sistemas eléctricos que alimentan componentes como el motor de arranque, las luces, los sensores y los dispositivos electrónicos.
      .py-3.py-md-4(titulo="Corriente eléctrica o amperaje")
        .px-4
          .row.justify-content-center
            .col-lg-5.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/temas/t1/img16.jpg', alt='')
            .col-lg-7.mb-4.mb-md-0
              ul.lista-ul.mb-0
                li
                  i.lista-ul__vineta
                  | La corriente eléctrica es el flujo de cargas eléctricas que circula por un conductor durante un intervalo de tiempo. Su unidad de medida es el amperio (A).
                li
                  i.lista-ul__vineta
                  | La intensidad de corriente permite determinar la cantidad de carga eléctrica que circula por un circuito. En los tractores, por ejemplo, la batería suministra corriente para alimentar los componentes eléctricos y proporcionar la energía necesaria para el arranque del motor.
      .py-3.py-md-4(titulo="Resistencia eléctrica")
        .px-4
          .row.justify-content-center
            .col-lg-5.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/temas/t1/img17.jpg', alt='')
            .col-lg-7.mb-4.mb-md-0
              ul.lista-ul.mb-0
                li
                  i.lista-ul__vineta
                  | La resistencia eléctrica es la oposición que presenta un material al paso de la corriente eléctrica. Su unidad de medida es el ohmio (Ω). Esta propiedad depende de factores como el material del conductor, su longitud, su sección transversal y la temperatura.
                li
                  i.lista-ul__vineta
                  | En los circuitos de la maquinaria agrícola, la resistencia influye en el comportamiento de los componentes eléctricos y las conexiones. Una resistencia de contacto elevada, por ejemplo, puede generar pérdidas de energía y calentamiento en una conexión defectuosa.
      .py-3.py-md-4(titulo="Continuidad eléctrica")
        .px-4
          .row.justify-content-center
            .col-lg-5.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/temas/t1/img18.jpg', alt='')
            .col-lg-7.mb-4.mb-md-0
              ul.lista-ul.mb-0
                li
                  i.lista-ul__vineta
                  | La continuidad eléctrica es la condición que permite el paso de la corriente a través de un circuito o conductor sin interrupciones. Se utiliza para comprobar si existe una conexión eléctrica entre dos puntos.
                li
                  i.lista-ul__vineta
                  | Durante las actividades de mantenimiento, la prueba de continuidad permite identificar cables interrumpidos, conexiones defectuosas o componentes que presentan circuitos abiertos. Para realizar esta comprobación se utiliza generalmente un multímetro en la función correspondiente.
    .row.justify-content-center.mb-4
      .col.col-lg-1.col-6.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/t1/img19.svg', alt='')
      .col.col-lg-11.col-12.order-lg-2.order-2
        .cajon.cajon.c02.px-4.py-3
          p.mb-0(data-aos="fade-down") El voltaje, la corriente y la resistencia se relacionan mediante la ley de Ohm, que establece que la corriente eléctrica es directamente proporcional al voltaje e inversamente proporcional a la resistencia, siempre que las demás condiciones del circuito permanezcan constantes.
    .row.justify-content-center.mb-4
      .col-lg-6.col-12
        .tarjeta.tarjeta.c04.px-4.py-2.mb-0
          p.mb-0 La relación entre estas magnitudes se expresa mediante la siguiente fórmula:
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col-lg-10.col-12
        .titulo-sexto.color-acento-contenido
          h5 Figura 2.
          span Triangulo de la ley de Ohm
      .row.justify-content-center
        .col-10
          figure.desktop
            img(src='@/assets/curso/temas/t1/img20.svg', alt='La figura 2 representa el triángulo de la ley de Ohm, en el que se relacionan el voltaje (V), la corriente eléctrica (I) y la resistencia (R). También incluye la fórmula base y las fórmulas derivadas para calcular cada una de estas magnitudes.')
      .col-12.mb-0
        figure.movil
          img(src='@/assets/curso/temas/t1/img21.svg', alt='La figura 2 representa el triángulo de la ley de Ohm, en el que se relacionan el voltaje (V), la corriente eléctrica (I) y la resistencia (R). También incluye la fórmula base y las fórmulas derivadas para calcular cada una de estas magnitudes.')
    p.mb-4 A partir de esta relación se pueden obtener las fórmulas derivadas para calcular la corriente y la resistencia.
    .row.justify-content-center.align-items-stretch.mb-4.g-0
      .col-lg-6.col-12.order-lg-2.order-2
        .cajon.c03.px-4.py-3.h-100.w-100
          .row.mb-0
            .col.col-12
              p.mb-4(data-aos="fade-down") Por ejemplo, si un circuito eléctrico tiene un voltaje de 12 V y una resistencia de 6 Ω, la corriente que circula es:
            .row.mb-4.justify-content-center
              .col-lg-8.col-12
                .tarjeta.tarjeta--blanca.px-4.py-2
                  .col-auto
                    .formula-box.d-flex.align-items-center.flex-wrap.justify-content-center.p-4.py-0
                      span.fw-bold.me-3.text-dark I=
                      .fraccion.text-center
                        span.numerador.fw-bold.px-3 V
                        span.denominador.fw-bold.px-3 R
                      span.fw-bold.mx-3.text-dark =
                      .fraccion.text-center
                        span.numerador.fw-bold.px-3 12
                        span.denominador.fw-bold.px-3 6
                      span.fw-bold.ms-3.text-dark =2A
            .col.col-12
              p.mb-0(data-aos="fade-down") Esto significa que por el circuito circula una corriente eléctrica de 2 amperios.
      .col-lg-6.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-4
        figure
          img(src='@/assets/curso/temas/t1/img22.svg', alt='')
    p.mb-4 La comprensión de estas relaciones permite interpretar las mediciones realizadas en los sistemas eléctricos de la maquinaria agrícola, comprender las especificaciones de sus componentes y reconocer posibles anomalías. Por ejemplo, una caída de voltaje, una resistencia excesiva en una conexión o la interrupción de la continuidad pueden afectar el funcionamiento del sistema de arranque, la iluminación y otros dispositivos eléctricos del tractor.
    .row.justify-content-center.mb-0
      .col.col-lg-auto.col-6.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/t1/img23.svg', alt='')
      .col.col-lg-10.col-12.order-lg-2.order-2
        .cajon.cajon.c01.px-4.py-3
          p.mb-0(data-aos="fade-down") Por esta razón, la medición e interpretación del voltaje, la corriente y la resistencia son actividades importantes para evaluar el estado de los circuitos y orientar las labores de mantenimiento de la maquinaria agrícola.
    separador
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.3 Fuentes de corriente continua
    p.mb-4 La corriente continua es una forma de energía eléctrica en la que las cargas eléctricas circulan en un mismo sentido a través de un conductor. Se caracteriza por mantener una polaridad definida, con terminales positivo (+) y negativo (−), lo que permite alimentar diferentes componentes eléctricos y electrónicos.
    .row.justify-content-center.mb-4
      .col.col-lg-10.col-12
        .cajon.cajon.color-secundario.p-4.mb-4
          p.mb-0 En la maquinaria agrícola, la corriente continua es fundamental para el funcionamiento de los sistemas eléctricos del tractor, ya que permite suministrar energía a componentes como el motor de arranque, los sistemas de iluminación, los indicadores del tablero y los dispositivos de control.
        p.mb-0 Las fuentes de corriente continua son dispositivos capaces de suministrar energía eléctrica manteniendo una polaridad definida. Entre las más comunes se encuentran:
    .row.mb-4
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/t1/img24.svg' alt='')
          .tarjeta.c03
            .p-4
              h4.text-center Baterías
              p.mb-0.text-center Almacenan energía mediante procesos electroquímicos y la suministran en forma de corriente continua. En la maquinaria agrícola se utilizan principalmente para alimentar el sistema eléctrico y proporcionar la energía necesaria durante el arranque del motor.
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/t1/img25.svg' alt='')
          .tarjeta.c03
            .p-4
              h4.text-center Pilas
              p.mb-0.text-center Transforman la energía química en energía eléctrica. Se emplean principalmente en dispositivos portátiles, instrumentos y equipos electrónicos.
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/t1/img26.svg' alt='')
          .tarjeta.c03
            .p-4
              h4.text-center Fuentes de alimentación
              p.mb-0.text-center Convierten la corriente alterna en corriente continua mediante circuitos electrónicos. Se utilizan en equipos de prueba, dispositivos electrónicos y actividades de diagnóstico.
    p.mb-4 La batería es una de las principales fuentes de corriente continua en los tractores y otras máquinas agrícolas. Su función consiste en almacenar energía eléctrica y suministrarla cuando los diferentes componentes del sistema la requieren.
    .row.justify-content-center.mb-4
      .col-lg-6.col-12
        .tarjeta.tarjeta.c04.px-4.py-2.mb-0
          p.mb-0.text-center Entre sus características principales se encuentran:
    .row.justify-content-center
      .col-xl-4.col-lg-4.col-md-10.col-12.mb-xl-0
        .crd_hover_txt.mb-4(data-aos="flip-left")(@mouseover="mostrarIndicador = true")
          .indicador--hover(v-if="mostrarIndicador")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/t1/img27.jpg", alt="")
          .crd_hover_txt--body
            h5.t1.mb-3 Tensión nominal
            h5.t2.mb-2 Tensión nominal
            p.mb-0 Corresponde al valor de voltaje para el cual está diseñada la batería. En muchos tractores se utilizan baterías de 12 V, aunque algunos equipos cuentan con sistemas eléctricos de otras tensiones.
      .col-xl-4.col-lg-4.col-md-10.col-12.mb-xl-0
        .crd_hover_txt.mb-4(data-aos="flip-left")(@mouseover="mostrarIndicador = true")
          .indicador--hover(v-if="mostrarIndicador")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/t1/img28.jpg", alt="")
          .crd_hover_txt--body
            h5.t1.mb-3 Capacidad
            h5.t2.mb-2 Capacidad
            p.mb-0 Representa la cantidad de carga eléctrica que puede suministrar la batería durante un periodo determinado. Se expresa generalmente en amperios-hora (Ah).
      .col-xl-4.col-lg-4.col-md-10.col-12.mb-xl-0
        .crd_hover_txt.mb-4(data-aos="flip-left")(@mouseover="mostrarIndicador = true")
          .indicador--hover(v-if="mostrarIndicador")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/t1/img29.jpg", alt="")
          .crd_hover_txt--body
            h5.t1.mb-3 Polaridad
            h5.t2.mb-2 Polaridad
            p.mb-0 Identifica los terminales positivo (+) y negativo (−), cuya conexión debe respetarse para evitar daños en los componentes eléctricos.
    .row.justify-content-center.mb-4
      .col.col-12
        .cajon.cajon.c02.color-primario.p-4
          p.mb-0 El conocimiento de las fuentes de corriente continua permite comprender cómo se suministra energía a los diferentes componentes eléctricos de la maquinaria agrícola. En particular, reconocer las características de la batería facilita la comprensión de su función dentro del sistema eléctrico y de las condiciones que pueden afectar su funcionamiento.
    p.mb-0 Por esta razón, es importante identificar sus características, reconocer la polaridad de sus terminales y comprender su relación con los componentes eléctricos del tractor. Estos conocimientos constituyen una base para abordar el uso de instrumentos de medición y las actividades de revisión de los sistemas eléctricos.
    separador
    #t_1_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.4 Instrumentos de medición
    .bloque-texto-g.bl01.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/temas/t1/img30.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0(data-aos="fade-down") Los instrumentos de medición eléctrica permiten comprobar las magnitudes presentes en los circuitos y obtener información sobre las condiciones de funcionamiento de los componentes eléctricos. Su utilización facilita la identificación de posibles anomalías y proporciona información importante para orientar las actividades de revisión y mantenimiento de la maquinaria agrícola.
    p.mb-4 Entre los instrumentos utilizados para comprobar las magnitudes eléctricas se encuentran el voltímetro, el amperímetro y el ohmímetro. También se emplea el multímetro, que integra varias funciones de medición en un solo dispositivo.
    .row.justify-content-center.mb-4
      .col-lg-6.col-12
        .tarjeta.tarjeta.c04.px-4.py-2.mb-0
          p.mb-0.text-center Los principales instrumentos de medición eléctrica son:
    .desktop
      .row.mb-4
        .col-6.col-md-3.mb-4.mb-xl-0
          .tarjeta.tarjeta-slide.arriba.tarjeta.c06(@mouseover="indicadorTarjetaSlide = false")
            .indicador--hover(v-if="indicadorTarjetaSlide")
            .tarjeta-slide__contenedor
              .tarjeta-slide__img(:style="{'background-image': `url(${require_src('@/assets/curso/temas/t1/img31.png')})`}")
              .tarjeta-slide__contenido.p-auto.p-xl-5
                h4 Voltímetro
                p.mb-0 Instrumento utilizado para medir la diferencia de potencial eléctrico entre dos puntos de un circuito. Su unidad de medida es el voltio (V). En la maquinaria agrícola puede utilizarse para comprobar la tensión de una batería o verificar el voltaje en determinados componentes eléctricos.
        .col-6.col-md-3.mb-4.mb-xl-0
          .tarjeta.tarjeta-slide.arriba.tarjeta.c06(@mouseover="indicadorTarjetaSlide = false")
            .tarjeta-slide__contenedor
              .tarjeta-slide__img(:style="{'background-image': `url(${require_src('@/assets/curso/temas/t1/img32.png')})`}")
              .tarjeta-slide__contenido.p-auto.p-xl-5
                h4 Amperímetro
                p.mb-0 Permite medir la intensidad de corriente eléctrica que circula por un circuito. Su unidad de medida es el amperio (A). Su utilización ayuda a comprobar el consumo de corriente de diferentes componentes eléctricos.
        .col-6.col-md-3.mb-4.mb-xl-0
          .tarjeta.tarjeta-slide.arriba.tarjeta.c06(@mouseover="indicadorTarjetaSlide = false")
            .tarjeta-slide__contenedor
              .tarjeta-slide__img(:style="{'background-image': `url(${require_src('@/assets/curso/temas/t1/img33.png')})`}")
              .tarjeta-slide__contenido.p-auto.p-xl-5
                h4 Ohmímetro
                p.mb-0 Instrumento que permite medir la resistencia eléctrica de un componente o circuito. Su unidad de medida es el ohmio (Ω). Se utiliza para comprobar la resistencia de elementos eléctricos y detectar posibles condiciones anormales.
        .col-6.col-md-3.mb-4.mb-xl-0
          .tarjeta.tarjeta-slide.arriba.tarjeta.c06(@mouseover="indicadorTarjetaSlide = false")
            .tarjeta-slide__contenedor
              .tarjeta-slide__img(:style="{'background-image': `url(${require_src('@/assets/curso/temas/t1/img34.png')})`}")
              .tarjeta-slide__contenido.p-auto.p-xl-5
                h4 Multímetro
                p.mb-0 Instrumento que integra diferentes funciones de medición, como voltaje, corriente y resistencia. Dependiendo del modelo, también permite realizar pruebas de continuidad y otras comprobaciones eléctricas.
    .movil.mb-0
      .row.justify-content-center.align-items-center.mb-5
        .col-md-10.col-12
          .tarjeta.tarjeta.c06.p-4
            figure.mb-3
              img(src='@/assets/curso/temas/t1/img35.png', alt='')
            h4 Voltímetro
            p.mb-0 Instrumento utilizado para medir la diferencia de potencial eléctrico entre dos puntos de un circuito. Su unidad de medida es el voltio (V). En la maquinaria agrícola puede utilizarse para comprobar la tensión de una batería o verificar el voltaje en determinados componentes eléctricos.
      .row.justify-content-center.align-items-center.mb-5
        .col-md-10.col-12
          .tarjeta.tarjeta.c06.p-4
            figure.mb-3
              img(src='@/assets/curso/temas/t1/img36.png', alt='')
            h4 Amperímetro
            p.mb-0 Permite medir la intensidad de corriente eléctrica que circula por un circuito. Su unidad de medida es el amperio (A). Su utilización ayuda a comprobar el consumo de corriente de diferentes componentes eléctricos.
      .row.justify-content-center.align-items-center.mb-5
        .col-md-10.col-12
          .tarjeta.tarjeta.c06.p-4
            figure.mb-3
              img(src='@/assets/curso/temas/t1/img37.png', alt='')
            h4 Ohmímetro
            p.mb-0 Instrumento que permite medir la resistencia eléctrica de un componente o circuito. Su unidad de medida es el ohmio (Ω). Se utiliza para comprobar la resistencia de elementos eléctricos y detectar posibles condiciones anormales.
      .row.justify-content-center.align-items-center.mb-5
        .col-md-10.col-12
          .tarjeta.tarjeta.c06.p-4
            figure.mb-3
              img(src='@/assets/curso/temas/t1/img38.png', alt='')
            h4 Multímetro
            p.mb-0 Instrumento que integra diferentes funciones de medición, como voltaje, corriente y resistencia. Dependiendo del modelo, también permite realizar pruebas de continuidad y otras comprobaciones eléctricas.
    p.mb-4 El multímetro es uno de los instrumentos más utilizados en las actividades de revisión de los sistemas eléctricos de la maquinaria agrícola. Su versatilidad permite comprobar diferentes magnitudes mediante la selección de la función y el rango de medición correspondiente. Para comprender su funcionamiento, es importante reconocer sus componentes principales y la función que cumple cada uno:
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col-lg-10.col-12
        .titulo-sexto.color-acento-contenido
          h5 Figura 3.
          span Multímetro digital y sus componentes principales
      .row.justify-content-center
        .col-10
          figure.desktop
            img(src='@/assets/curso/temas/t1/img39.svg', alt='La figura 3 representa un multímetro digital con sus componentes principales: pantalla, selector de funciones, terminales de conexión y puntas de prueba roja y negra. A la derecha se describe la función de cada componente.')
      .col-12.mb-0
        figure.movil
          img(src='@/assets/curso/temas/t1/img40.svg', alt='La figura 3 representa un multímetro digital con sus componentes principales: pantalla, selector de funciones, terminales de conexión y puntas de prueba roja y negra. A la derecha se describe la función de cada componente.')
    p.mb-4 Una vez identificados los componentes del multímetro, es necesario conocer las funciones de medición que ofrece y las magnitudes que permite comprobar. Estas funciones varían según el modelo del instrumento, pero generalmente incluyen la medición de voltaje, corriente y resistencia, así como la prueba de continuidad. A continuación, se presentan las principales funciones:
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col.col-12.col-lg-10
        .titulo-sexto.color-acento-contenido
          h5 Tabla 2.
          span Funciones del multímetro
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th(data-aos="fade-down")(style= "width: 20%") Función
                th(data-aos="fade-down")(style= "width: 60%") Descripción
                th(data-aos="fade-down")(style= "width: 20%") Unidad o indicación
            tbody
              tr
                td.td-c01(data-aos="fade-down") Voltaje (V)
                td.td-c01(data-aos="fade-down") Mide la diferencia de potencial entre dos puntos.
                td.td-c01(data-aos="fade-down") Voltios (V)
              tr
                td(data-aos="fade-down") Corriente (A)
                td(data-aos="fade-down") Mide la intensidad de corriente que circula por un circuito.
                td(data-aos="fade-down") Amperios (A)
              tr
                td.td-c01(data-aos="fade-down") Resistencia (Ω)
                td.td-c01(data-aos="fade-down") Mide la oposición al paso de la corriente eléctrica.
                td.td-c01(data-aos="fade-down") Ohmios (Ω)
              tr
                td(data-aos="fade-down") Continuidad
                td(data-aos="fade-down") Comprueba si existe conexión eléctrica entre dos puntos.
                td(data-aos="fade-down") Señal acústica o indicación en pantalla, según el equipo.
    p.mb-4 Para obtener resultados confiables y evitar daños en el instrumento o en los componentes eléctricos, es necesario utilizar el multímetro de acuerdo con la magnitud que se desea medir y seguir algunas recomendaciones:
    .row.mb-4
      .col-12
        .px-0.py-0
          .row.align-items-center.bg03(data-aos="fade-down")
            .col-lg-4.d-none.d-lg-block.py-0.px-0
              figure(data-aos="zoom-in")
                img(src="@/assets/curso/temas/t1/img41.png", alt="")
            .col-lg-8.px-0.py-0
              SlyderF.custom.color-acento-botones.px-lg-5.py-0.px-0(columnas="col-lg-6 col-xl-6")
                .tarjeta.tarjeta--slyder.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t1/img42.svg", alt="").img100.m-auto
                  p.text-center Seleccionar la función y el rango de medición apropiados.
                .tarjeta.tarjeta--slyder.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t1/img43.svg", alt="").img100.m-auto
                  p.text-center Verificar que las puntas de prueba estén conectadas en los terminales correspondientes.
                .tarjeta.tarjeta--slyder.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t1/img44.svg", alt="").img100.m-auto
                  p.text-center Comprobar la polaridad al realizar mediciones de corriente continua.
                .tarjeta.tarjeta--slyder.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t1/img45.svg", alt="").img100.m-auto
                  p.text-center Desenergizar el circuito antes de medir resistencia o comprobar continuidad.
                .tarjeta.tarjeta--slyder.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t1/img46.svg", alt="").img100.m-auto
                  p.text-center Para medir corriente, conectar el instrumento en serie con el circuito y utilizar la entrada correspondiente.
                .tarjeta.tarjeta--slyder.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t1/img47.svg", alt="").img100.m-auto
                  p.text-center Consultar las indicaciones del fabricante y respetar las medidas de seguridad establecidas.
    p.mb-4 El uso de instrumentos de medición permite obtener información sobre el estado de los circuitos eléctricos y sus componentes. Por ejemplo, el multímetro puede utilizarse para comprobar la tensión de una batería, verificar la continuidad de un conductor o medir la resistencia de un componente, de acuerdo con el procedimiento correspondiente.
    .row.justify-content-center.mb-0
      .col.col-12
        .cajon.cajon.color-secundario.p-4
          p.mb-0 Estas comprobaciones facilitan el reconocimiento de condiciones que pueden afectar el funcionamiento del sistema eléctrico, como conexiones defectuosas, interrupciones en los conductores o valores de tensión inadecuados. Por esta razón, el conocimiento de los instrumentos de medición constituye una base importante para orientar las actividades de revisión y mantenimiento de la maquinaria agrícola.
    separador
    #t_1_5.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.5 Aplicaciones y riesgos eléctricos en la maquinaria agrícola
    .bloque-texto-g.bl01.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/temas/t1/img48.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0(data-aos="fade-down") Los sistemas eléctricos de la maquinaria agrícola cumplen funciones importantes para el funcionamiento, control y operación de los equipos. A través de sus diferentes componentes, permiten realizar actividades como el arranque del motor, la iluminación, la señalización y la activación de dispositivos de control. Por esta razón, comprender sus aplicaciones, facilita el reconocimiento de la importancia de la electricidad en las labores agrícolas y de las condiciones que pueden afectar el funcionamiento de los equipos.
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10.col-12
        p.mb-4 En los tractores y otras máquinas agrícolas, la energía eléctrica se utiliza para alimentar diferentes sistemas y dispositivos. Entre sus principales aplicaciones se encuentran:
        .row.justify-content-center.align-items-center.mb-4(data-aos="flip-up")
          .col-lg-7.col-12.mb-md-0.order-lg-1.order-2.mb-lg-0
            LineaTiempoD.color-acento-botones.especial
              .row(numero="1" titulo="Sistema de arranque")
                .col-12.mb-4.mb-md-0
                  p.mb-0 Utiliza la energía suministrada por la batería para accionar el motor de arranque, que permite poner en funcionamiento el motor diésel.
              .row(numero="2" titulo="Sistema de iluminación")
                .col-12.mb-4.mb-md-0
                  p.mb-0 Proporciona luz mediante faros delanteros, luces traseras y otros dispositivos, facilitando la operación de la maquinaria en condiciones de baja visibilidad.
              .row(numero="3" titulo="Sistema de señalización")
                .col-12.mb-4.mb-md-0
                  p.mb-0 Incorpora luces direccionales, luces de freno y dispositivos de advertencia que contribuyen a comunicar las maniobras y condiciones de operación.
              .row(numero="4" titulo="Instrumentos del tablero")
                .col-12.mb-4.mb-md-0
                  p.mb-0 Permiten consultar información relacionada con el funcionamiento de la máquina, como indicadores de temperatura, presión, nivel de combustible y condiciones del sistema eléctrico.
              .row(numero="5" titulo="Sistemas electrónicos de control")
                .col-12.mb-4.mb-md-0
                  p.mb-0 Integran sensores, unidades de control y otros dispositivos que permiten supervisar diferentes parámetros y regular determinadas funciones de la maquinaria.
              .row(numero="6" titulo="Sistemas de protección y seguridad")
                .col-12.mb-4.mb-md-0
                  p.mb-0 Incluyen dispositivos eléctricos que contribuyen a prevenir condiciones de funcionamiento inadecuadas, como interruptores de seguridad y alarmas.
          .col-lg-5.order-lg-2.order-1.mb-lg-0.mb-4.d-none.d-lg-block
            figure
              img(src='@/assets/curso/temas/t1/img49.png', alt='')
    p.mb-4 Durante la operación, revisión y mantenimiento de los sistemas eléctricos pueden presentarse situaciones que representan riesgos para las personas y los equipos. Estos riesgos están relacionados principalmente con el contacto con partes energizadas, las conexiones defectuosas, los cortocircuitos y la manipulación inadecuada de las baterías.
    .row.justify-content-center.mb-4
      .col-lg-6.col-12
        .tarjeta.tarjeta.c04.px-4.py-2.mb-0
          p.mb-0.text-center Entre los principales riesgos eléctricos se encuentran:
    .row.justify-content-center.align-items-center.mb-4(data-aos="flip-up")
      SlyderF.color-acento-botones(columnas="col-lg-6 col-xl-4")
        .tarjeta.bg01.px-3.py-5
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/t1/img50.svg' alt='AvatarTop')
          h4.text-center Contacto eléctrico directo
          p.text-center Ocurre cuando una persona entra en contacto con partes activas de una instalación o componente eléctrico, como terminales, cables o conexiones energizadas.
        .tarjeta.bg01.px-3.py-5
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/t1/img51.svg' alt='AvatarTop')
          h4.text-center Contacto eléctrico indirecto
          p.text-center Se presenta cuando una persona entra en contacto con superficies metálicas que adquieren tensión debido a una falla en el aislamiento eléctrico.
        .tarjeta.bg01.px-3.py-5
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/t1/img52.svg' alt='AvatarTop')
          h4.text-center Cortocircuitos
          p.text-center Se producen cuando dos puntos con diferente potencial eléctrico entran en contacto mediante una trayectoria de baja resistencia, lo que puede generar corrientes elevadas, calentamiento y daños en los componentes.
        .tarjeta.bg01.px-3.py-5
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/t1/img53.svg' alt='AvatarTop')
          h4.text-center Sobrecargas eléctricas
          p.text-center Ocurren cuando un circuito conduce una corriente superior a la capacidad para la cual fue diseñado, lo que puede provocar calentamiento excesivo y deterioro de los conductores.
        .tarjeta.bg01.px-3.py-5
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/t1/img54.svg' alt='AvatarTop')
          h4.text-center Arcos eléctricos y chispas
          p.text-center Pueden generarse durante conexiones defectuosas, cortocircuitos o manipulaciones inadecuadas de componentes eléctricos. Representan un riesgo de quemaduras e incendio.
        .tarjeta.bg01.px-3.py-5
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/t1/img55.svg' alt='AvatarTop')
          h4.text-center Riesgos asociados con las baterías
          p.text-center Incluyen cortocircuitos entre terminales, quemaduras por contacto con el electrolito en baterías que contienen soluciones ácidas y generación de gases inflamables durante determinados procesos de carga.
    .row.justify-content-center.mb-4
      .cajon.c02.px-4.py-3.h-100.w-100.d-flex.align-items-center
        .row.justify-content-center
          p.mb-4 Algunas condiciones durante las actividades de mantenimiento pueden aumentar la posibilidad de que se presenten incidentes eléctricos:
          .col.col-lg-3.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3
            figure
              img(src='@/assets/curso/temas/t1/img56.svg', alt='')
          .col.col-lg-9.col-12.order-lg-2.order-2
            .tarjeta.tarjeta--blanca.p-4
              ul.lista-ul--color.lista-ul.mb-0
                li 
                  i.fas.fa-seedling
                  p.mb-1 Manipular cables, terminales o conexiones sin verificar previamente el estado del circuito.
                li 
                  i.fas.fa-seedling
                  p.mb-1 Utilizar herramientas metálicas que puedan generar contacto accidental entre los terminales de una batería.
                li 
                  i.fas.fa-seedling
                  p.mb-1 Realizar mediciones con el multímetro sin seleccionar la función o los terminales adecuados.
                li 
                  i.fas.fa-seedling
                  p.mb-1 Trabajar con cables deteriorados, conexiones flojas o aislamiento defectuoso.
                li 
                  i.fas.fa-seedling
                  p.mb-1 Realizar actividades de mantenimiento sin desconectar las fuentes de energía cuando el procedimiento lo requiere.
                li 
                  i.fas.fa-seedling
                  p.mb-0 Permitir la acumulación de humedad, suciedad o residuos en las conexiones eléctricas.
    p.mb-4 Para reducir la posibilidad de accidentes durante la revisión y el mantenimiento de los sistemas eléctricos, es necesario aplicar medidas de prevención y control:
    .row.mb-4
      .col-12
        .px-0.py-0
          .row.align-items-center.bg03(data-aos="fade-down")
            .col-lg-4.d-none.d-lg-block.py-0.px-0
              figure(data-aos="zoom-in")
                img(src="@/assets/curso/temas/t1/img57.png", alt="")
            .col-lg-8.px-0.py-0
              SlyderF.custom.color-acento-botones.px-lg-5.py-0.px-0(columnas="col-lg-6 col-xl-6")
                .tarjeta.tarjeta--slyder.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t1/img58.svg", alt="").img100.m-auto
                  p.text-center Identificar los componentes y las fuentes de energía eléctrica antes de iniciar cualquier intervención.
                .tarjeta.tarjeta--slyder.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t1/img59.svg", alt="").img100.m-auto
                  p.text-center Desconectar la batería cuando el procedimiento de mantenimiento lo requiera y seguir las indicaciones del fabricante.
                .tarjeta.tarjeta--slyder.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t1/img60.svg", alt="").img100.m-auto
                  p.text-center Evitar el contacto con terminales y conductores energizados.
                .tarjeta.tarjeta--slyder.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t1/img61.svg", alt="").img100.m-auto
                  p.text-center Utilizar herramientas apropiadas y en buen estado, con aislamiento cuando corresponda.
                .tarjeta.tarjeta--slyder.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t1/img62.svg", alt="").img100.m-auto
                  p.text-center Emplear los elementos de protección personal establecidos para la actividad.
                .tarjeta.tarjeta--slyder.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t1/img63.svg", alt="").img100.m-auto
                  p.text-center Verificar el estado de los cables, conectores, terminales y dispositivos de protección.
                .tarjeta.tarjeta--slyder.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t1/img64.svg", alt="").img100.m-auto
                  p.text-center Utilizar los instrumentos de medición de acuerdo con sus especificaciones y las instrucciones del fabricante.
                .tarjeta.tarjeta--slyder.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t1/img65.svg", alt="").img100.m-auto
                  p.text-center Mantener las baterías en condiciones adecuadas de limpieza, ventilación y sujeción.
    p.mb-4 El reconocimiento de las aplicaciones y los riesgos eléctricos permite comprender la importancia de intervenir los sistemas de la maquinaria agrícola bajo condiciones seguras. La identificación de conexiones defectuosas, conductores deteriorados y componentes en condiciones inadecuadas contribuye a prevenir fallas y reducir la posibilidad de accidentes.
    .row.justify-content-center.mb-0
      .col.col-12
        .cajon.cajon.color-secundario.p-4
          p.mb-0 Por tanto, las actividades de revisión y mantenimiento deben realizarse considerando las características de cada sistema, las recomendaciones del fabricante y las medidas de seguridad correspondientes. De esta manera, se favorece la conservación de los equipos, la protección de las personas y la continuidad de las actividades agrícolas.
</template>
<script>
export default {
  name: 'Tema1',
  data: () => ({
    // variables de vue
  }),
}
</script>
<style lang="sass"></style>
