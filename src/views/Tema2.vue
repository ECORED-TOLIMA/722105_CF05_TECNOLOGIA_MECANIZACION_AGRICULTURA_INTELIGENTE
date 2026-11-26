<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Fundamentos de hidráulica aplicados a la maquinaria agrícola
    p.mb-4 La maquinaria agrícola incorpora sistemas hidráulicos que permiten transmitir fuerza y generar movimiento mediante el aprovechamiento de la presión de un fluido. Estos sistemas facilitan la ejecución de diferentes labores, como elevar implementos, accionar cilindros y controlar mecanismos que requieren fuerza para su funcionamiento.
    .row.justify-content-center.mb-4
      .col.col-lg-5.col-8.col-md-6.order-lg-2.order-2.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/temas/t2/img01.jpg', alt='')
      .col.col-lg-7.col-12.order-lg-1.order-2
        .cajon.cajon.c02.color-primario.px-4.py-2.mb-3
          p.mb-0 La hidráulica proporciona los principios físicos necesarios para comprender el comportamiento de los fluidos y su aplicación en la transmisión de energía. El conocimiento de conceptos como presión, fuerza y caudal, así como de propiedades de los fluidos, permite interpretar el funcionamiento de los sistemas hidráulicos y reconocer los factores que influyen en su desempeño.
        p.mb-4(data-aos="fade-down") Asimismo, principios como los de Pascal y Arquímedes permiten explicar diferentes fenómenos relacionados con los fluidos y su comportamiento. El estudio de las unidades de presión y sus equivalencias facilita la interpretación de valores y especificaciones técnicas presentes en los equipos y en la documentación de los fabricantes.
        .row.justify-content-center.mb-0
          .col.col-lg-2.col-6.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3.d-none.d-lg-block
            figure
              img(src='@/assets/curso/temas/t2/img02.svg', alt='')
          .col.col-lg-10.col-12.order-lg-2.order-2
            .cajon.cajon.c01.px-4.py-3
              p.mb-0(data-aos="fade-down") Estos conocimientos constituyen una base para comprender el funcionamiento de los sistemas hidráulicos de la maquinaria agrícola y reconocer su importancia en las actividades de revisión y mantenimiento.
    separador
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.1 Conceptos básicos de hidráulica
    .row.justify-content-center.align-items-stretch.mb-4.g-0
      .col-lg-8.col-12.order-lg-2.order-2
        .cajon.c01.px-4.py-3.h-100.w-100
          p.mb-4 La hidráulica es una rama de la física que estudia el comportamiento de los líquidos, tanto en reposo como en movimiento, y su aplicación en la transmisión de fuerza y energía. Sus principios permiten comprender cómo se aprovecha la presión de un fluido para generar movimiento y realizar trabajos que requieren fuerza.
          .row.mb-0
            .col-lg-2.d-none.d-lg-block
              figure
                img(src='@/assets/curso/temas/t2/img04.svg', alt='')
            .col.col-10
              p.mb-0(data-aos="fade-down") En la maquinaria agrícola, la hidráulica tiene aplicaciones importantes en el funcionamiento de diferentes mecanismos. Los tractores y otros equipos utilizan sistemas hidráulicos para elevar y descender implementos, accionar cilindros, facilitar la dirección y operar dispositivos de carga. Estas aplicaciones permiten realizar labores que requieren fuerza y precisión, contribuyendo a la eficiencia de las operaciones agrícolas.
      .col-lg-4.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-4
        figure
          img(src='@/assets/curso/temas/t2/img03.jpg', alt='')
    p.mb-4 Para comprender el funcionamiento de los sistemas hidráulicos, es necesario reconocer algunos conceptos relacionados con el comportamiento de los fluidos:
    .row.mb-4
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/t2/img05.svg' alt='')
          .tarjeta.c03
            .p-4
              h4.text-center Hidráulica
              p.mb-0.text-center Disciplina que estudia el comportamiento de los líquidos y su aprovechamiento para transmitir fuerza y energía.
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/t2/img06.svg' alt='')
          .tarjeta.c03
            .p-4
              h4.text-center Fluido
              p.mb-0.text-center Sustancia que puede fluir y adaptarse a la forma del recipiente que la contiene. Los líquidos utilizados en los sistemas hidráulicos permiten transmitir energía entre sus componentes.
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/t2/img07.svg' alt='')
          .tarjeta.c03
            .p-4
              h4.text-center Presión
              p.mb-0.text-center Fuerza ejercida perpendicularmente sobre una superficie por unidad de área. En los sistemas hidráulicos permite transmitir fuerza a través del fluido.
    .row.mb-4
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/t2/img08.svg' alt='')
          .tarjeta.c03
            .p-4
              h4.text-center Fuerza
              p.mb-0.text-center Interacción capaz de modificar el estado de movimiento de un cuerpo o producir una deformación. En los mecanismos hidráulicos se aprovecha para generar movimientos y realizar trabajos.
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/t2/img09.svg' alt='')
          .tarjeta.c03
            .p-4
              h4.text-center Caudal
              p.mb-0.text-center Volumen de fluido que circula por una sección determinada durante una unidad de tiempo. Influye en la velocidad de desplazamiento de los mecanismos hidráulicos.
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/t2/img10.svg' alt='')
          .tarjeta.c03
            .p-4
              h4.text-center Transmisión de fuerza
              p.mb-0.text-center Proceso mediante el cual la presión aplicada a un fluido confinado se transmite a través de este y permite accionar diferentes componentes del sistema.
    p.mb-4 Los sistemas hidráulicos aprovechan las propiedades de los líquidos para transmitir energía y accionar mecanismos. Entre sus principales aplicaciones se encuentran:
    .row.justify-content-center.align-items-center.mb-4(data-aos="flip-up")
      .col-lg-6.col-12.mb-md-0.order-lg-1.order-2.mb-lg-0
        LineaTiempoD.color-acento-botones.especial
          .row(numero="1" titulo="Elevación de implementos")
            .col-12.mb-4.mb-md-0
              p.mb-0 Permite subir y bajar equipos acoplados al tractor, como arados, rastras y sembradoras.
          .row(numero="2" titulo="Accionamiento de cilindros hidráulicos")
            .col-12.mb-4.mb-md-0
              p.mb-0 Facilita el desplazamiento de componentes mediante la extensión y retracción de cilindros.
          .row(numero="3" titulo="Dirección hidráulica")
            .col-12.mb-4.mb-md-0
              p.mb-0 Proporciona asistencia para orientar las ruedas y facilitar las maniobras de la maquinaria.
          .row(numero="4" titulo="Sistemas de carga")
            .col-12.mb-4.mb-md-0
              p.mb-0 Permite elevar, inclinar y posicionar elementos en equipos como cargadores frontales.
          .row(numero="5" titulo="Accionamiento de mecanismos auxiliares")
            .col-12.mb-4.mb-md-0
              p.mb-0 Suministra la fuerza necesaria para operar diferentes dispositivos incorporados a los equipos agrícolas.
      .col-lg-6.order-lg-2.order-1.mb-lg-0.mb-4.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/t2/img11.jpg', alt='')
    p.mb-4 Un sistema hidráulico está conformado por diferentes componentes que trabajan de manera conjunta para generar, controlar y transmitir energía mediante un fluido. Entre los elementos más comunes se encuentran:
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col.col-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 3.
          span Elementos básicos de un circuito eléctrico y sus funciones
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th(data-aos="fade-down")(style= "width: 30%") Componente
                th(data-aos="fade-down")(style= "width: 70%") Función
            tbody
              tr
                td.td-c01(data-aos="fade-down") Depósito hidráulico
                td.td-c01(data-aos="fade-down") almacena el fluido utilizado por el sistema.
              tr
                td(data-aos="fade-down") Bomba hidráulica
                td(data-aos="fade-down") impulsa el fluido y proporciona el caudal necesario para el funcionamiento del sistema.
              tr
                td.td-c01(data-aos="fade-down") Filtros
                td.td-c01(data-aos="fade-down") retienen partículas e impurezas que pueden afectar los componentes.
              tr
                td(data-aos="fade-down") Válvulas de control
                td(data-aos="fade-down") regulan o dirigen el flujo del fluido y permiten controlar los movimientos.
              tr
                td.td-c01(data-aos="fade-down") Cilindros hidráulicos
                td.td-c01(data-aos="fade-down") transforman la energía hidráulica en movimiento lineal.
              tr
                td(data-aos="fade-down") Tuberías y mangueras
                td(data-aos="fade-down") conducen el fluido entre los diferentes componentes.
    p.mb-4 El conocimiento de los fundamentos de hidráulica permite comprender cómo se transmite la fuerza mediante los fluidos y cómo funcionan los mecanismos que incorporan esta tecnología. También facilita la identificación de los componentes generales de un sistema hidráulico y la comprensión de las condiciones que pueden influir en su funcionamiento.
    .row.justify-content-center.mb-0
      .col.col-lg-1.col-6.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/t2/img12.svg', alt='')
      .col.col-lg-9.col-12.order-lg-2.order-2
        .cajon.cajon.c01.px-4.py-3
          p.mb-0(data-aos="fade-down") Estos conceptos constituyen la base para estudiar las propiedades de los fluidos, los principios de Pascal y Arquímedes, y las unidades de presión utilizadas en los sistemas hidráulicos de la maquinaria agrícola.
    separador
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.2 Propiedades de los fluidos
    .bloque-texto-g.bl01.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/temas/t2/img13.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0(data-aos="fade-down") Los fluidos son sustancias que pueden fluir y adoptar la forma del recipiente que los contiene. En los sistemas hidráulicos de la maquinaria agrícola, los líquidos cumplen una función fundamental, ya que permiten transmitir energía y fuerza entre los diferentes componentes. Por esta razón, conocer sus propiedades, facilita la comprensión de su comportamiento y de las condiciones que influyen en el funcionamiento de estos sistemas.
    p.mb-4 Entre las principales propiedades de los fluidos se encuentran la densidad, la viscosidad, el peso específico y la compresibilidad. Estas características permiten describir su comportamiento y comprender por qué determinados fluidos son adecuados para aplicaciones hidráulicas.
    .cajon.cajon.c06.p-5.mb-4
      SlyderB(:datos="datosSlyder")
    p.mb-4 En los sistemas hidráulicos de los tractores y otros equipos agrícolas, las propiedades de los fluidos influyen en la transmisión de fuerza, la respuesta de los mecanismos y la protección de los componentes. Por ejemplo, utilizar un aceite con una viscosidad inadecuada puede afectar la circulación del fluido, incrementar el desgaste de las piezas y disminuir la eficiencia del sistema.
    .row.justify-content-center.mb-0
      .col.col-lg-5.col-8.col-md-6.order-lg-1.order-2.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/temas/t2/img19.jpg', alt='')
      .col.col-lg-7.col-12.order-lg-2.order-2
        .cajon.cajon.color-secundario.px-4.py-4.mb-4
          p.mb-0 Por esta razón, la selección del fluido hidráulico debe considerar las especificaciones técnicas del fabricante, las condiciones de operación y el rango de temperatura de trabajo. Asimismo, es importante mantener el fluido en condiciones adecuadas y realizar las revisiones correspondientes para evitar la presencia de contaminantes que puedan afectar el funcionamiento de los componentes.
        p.mb-0(data-aos="fade-down") El reconocimiento de estas propiedades permite comprender cómo se comportan los fluidos dentro de los sistemas hidráulicos y por qué su selección y conservación son aspectos importantes para el funcionamiento y mantenimiento de la maquinaria agrícola.
    separador
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.3 Principios de Pascal y Arquímedes
    p.mb-4 El comportamiento de los fluidos permite explicar diferentes fenómenos físicos que se aprovechan en el funcionamiento de los sistemas hidráulicos y en otras aplicaciones de la maquinaria agrícola. Entre estos fenómenos se encuentran los descritos por los principios de Pascal y Arquímedes, los cuales permiten comprender cómo se transmite la presión en un líquido y cómo actúan las fuerzas de flotación sobre los cuerpos sumergidos.
    .row.justify-content-center.mb-4
      .col.col-12
        .cajon.cajon.c02.p-4.mb-0
          .row.align-items-center.mb-4(data-aos="flip-down")
            .col-auto.pe-0(style="z-index:2")
              figure
                img(src='@/assets/curso/ico.svg', style="width: 57px" ,alt='').m-auto
            .col-lg-auto.col-9.titulo01(style="z-index:1")
              .p-3
                h3.mb-0.ms-2 Principio de Pascal
          p.mb-4 El principio de Pascal establece que cuando se aplica presión a un fluido confinado dentro de un recipiente, esta se transmite con igual intensidad en todas las direcciones y hacia todos los puntos del fluido y las paredes del recipiente.
          .row.justify-content-center.align-items-center.mb-4
            .col.col-lg-4.col-8.col-md-6.order-lg-1.order-2.mb-lg-0.mb-3
              figure
                img(src='@/assets/curso/temas/t2/img20.jpg', alt='')
            .col.col-lg-6.col-12.order-lg-2.order-2
              .cajon.cajon.color-secundario.px-4.py-3.mb-2
                p.mb-0 Este principio constituye la base del funcionamiento de los sistemas hidráulicos, ya que permite transmitir fuerza mediante un líquido contenido en un circuito. Su aplicación facilita multiplicar la fuerza ejercida cuando se utilizan pistones de diferentes áreas.
              p.mb-2 La relación entre la fuerza, la presión y el área se expresa mediante la siguiente fórmula:
              .tarjeta.tarjeta--blanca.px-4.py-1
                .col-auto
                  .formula-box.d-flex.align-items-center.flex-wrap.justify-content-center.p-4.py-0
                    span.fw-bold.me-3.text-dark P=
                    .fraccion.text-center
                      span.numerador.fw-bold.px-3 F
                      span.denominador.fw-bold.px-3 A
                p.mb-2 Donde:
                ul.lista-ul--color.lista-ul.mb-0
                  li 
                    i.fas.fa-seedling
                    p.mb-0 P: presión, expresada en pascales (Pa).
                  li 
                    i.fas.fa-seedling
                    p.mb-0 F: fuerza aplicada, expresada en newtons (N).
                  li 
                    i.fas.fa-seedling
                    p.mb-0 A: área sobre la que actúa la fuerza, expresada en metros cuadrados (m²).
          .row.justify-content-center.mb-4
            .col-lg-10
              p.mb-4 En un sistema hidráulico con dos pistones conectados, la presión transmitida permite establecer la siguiente relación:
              .tarjeta.tarjeta--blanca.px-4.py-1.mb-4
                .col-auto
                  .formula-box.d-flex.align-items-center.flex-wrap.justify-content-center.p-4.py-0
                    .fraccion.text-center
                      span.numerador.fw-bold.px-3 F<sub>1</sub>
                      span.denominador.fw-bold.px-3 A<sub>1</sub>
                    span.fw-bold.mx-3.text-dark =
                    .fraccion.text-center
                      span.numerador.fw-bold.px-3 F<sub>2</sub>
                      span.denominador.fw-bold.px-3 A<sub>2</sub>
              p.mb-4 Donde:
              .row.justify-content-center.mb-0
                .col-lg-6
                  ul.lista-ul--color.lista-ul.mb-0
                    li 
                      i.fas.fa-seedling
                      p.mb-0 F₁: fuerza aplicada sobre el primer pistón.
                    li 
                      i.fas.fa-seedling
                      p.mb-0 A₁: área del primer pistón.
                .col-lg-6
                  ul.lista-ul--color.lista-ul.mb-0
                    li 
                      i.fas.fa-seedling
                      p.mb-0 F₂: fuerza obtenida en el segundo pistón.
                    li 
                      i.fas.fa-seedling
                      p.mb-0 A₂: área del segundo pistón.
    .row.justify-content-center.align-items-center.mb-4
      .col.col-12
        .cajon.cajon.color-secundario.px-4.py-4
          p.mb-0 Por ejemplo, si se aplica una fuerza de 100 N sobre un pistón cuya área es de 0,01 m², la presión generada es de 10 000 Pa. Si esta presión actúa sobre un segundo pistón con un área de 0,05 m², la fuerza obtenida será de 500 N.
    p.mb-4 Este comportamiento permite comprender cómo los sistemas hidráulicos pueden generar fuerzas mayores a partir de una fuerza inicial menor. En la maquinaria agrícola, este principio se aprovecha en mecanismos como los sistemas de elevación de implementos, los cilindros hidráulicos y algunos sistemas de dirección.
    .row.justify-content-center.mb-4
      .col.col-12
        .cajon.cajon.c02.p-4.mb-0
          .row.align-items-center.mb-4(data-aos="flip-down")
            .col-auto.pe-0(style="z-index:2")
              figure
                img(src='@/assets/curso/ico.svg', style="width: 57px" ,alt='').m-auto
            .col-lg-auto.col-9.titulo01(style="z-index:1")
              .p-3
                h3.mb-0.ms-2 Principio de Arquímedes
          p.mb-4 El principio de Arquímedes establece que todo cuerpo sumergido total o parcialmente en un fluido experimenta una fuerza vertical hacia arriba, denominada fuerza de empuje, cuyo valor es igual al peso del fluido desplazado por el cuerpo.
          .row.justify-content-center.align-items-center.mb-4
            .col.col-lg-4.col-8.col-md-6.order-lg-1.order-2.mb-lg-0.mb-3
              figure
                img(src='@/assets/curso/temas/t2/img21.jpg', alt='')
            .col.col-lg-6.col-12.order-lg-2.order-2
              .cajon.cajon.color-secundario.p-4.mb-4
                p.mb-0 Este principio permite explicar por qué algunos cuerpos flotan, otros permanecen suspendidos y otros se hunden, dependiendo de la relación entre su peso y el empuje que ejerce el fluido.
              p.mb-4 La fuerza de empuje se calcula mediante la siguiente expresión:
              .tarjeta.tarjeta--blanca.px-4.py-1
                .col-auto
                  .formula-box.d-flex.align-items-center.flex-wrap.justify-content-center.p-4.py-0
                    span.fw-bold.text-dark E = &rho; &times; g &times; V
                p.mb-2 Donde:
                ul.lista-ul--color.lista-ul.mb-0
                  li 
                    i.fas.fa-seedling
                    p.mb-0 E: fuerza de empuje, expresada en newtons (N).
                  li 
                    i.fas.fa-seedling
                    p.mb-0 ρ: densidad del fluido, expresada en kilogramos por metro cúbico (kg/m³).
                  li 
                    i.fas.fa-seedling
                    p.mb-0 g: aceleración de la gravedad, aproximadamente 9,81 m/s².
                  li 
                    i.fas.fa-seedling
                    p.mb-0 V: volumen de fluido desplazado, expresado en metros cúbicos (m³).
    .row.justify-content-center.align-items-center.mb-4
      .col.col-12
        .cajon.cajon.color-secundario.p-4.mb-0
          p.mb-0 Por ejemplo, cuando un objeto se introduce en un recipiente con agua, desplaza una cantidad de líquido y recibe una fuerza de empuje hacia arriba. Si esta fuerza es igual o superior a su peso, el objeto puede flotar; si es menor, el objeto se hunde.
    .row.justify-content-center.mb-0
      .col.col-lg-6.col-8.col-md-6.order-lg-2.order-2.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/temas/t2/img22.jpg', alt='')
      .col.col-lg-6.col-12.order-lg-1.order-2
        p.mb-4(data-aos="fade-down") En la maquinaria agrícola, el principio de Pascal tiene una aplicación directa en los sistemas hidráulicos utilizados para levantar, bajar y controlar implementos, ya que permite transmitir presión y generar la fuerza necesaria para mover diferentes mecanismos. Por su parte, el principio de Arquímedes permite comprender el comportamiento de los cuerpos en los fluidos y fenómenos como la flotación de equipos y elementos que operan en ambientes inundados.
        .cajon.cajon.c02.color-primario.p-4.mb-0
          p.mb-0 El conocimiento de ambos principios permite comprender el comportamiento de los fluidos y las fuerzas que intervienen en diferentes fenómenos, así como reconocer su importancia en el funcionamiento de los sistemas hidráulicos y en otras situaciones relacionadas con las actividades agrícolas.
    separador
    #t_2_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.4 Unidades de presión y sus equivalencias
    p La presión es una magnitud física que expresa la fuerza ejercida sobre una determinada superficie. En los sistemas hidráulicos de la maquinaria agrícola, permite comprender la intensidad con la que actúa un fluido sobre las paredes de los conductos y los componentes del circuito. Su medición es importante para interpretar las especificaciones técnicas de los equipos y verificar las condiciones de funcionamiento de los sistemas hidráulicos.
    p.mb-4 La presión se calcula mediante la relación entre la fuerza aplicada y el área sobre la cual actúa, de acuerdo con la siguiente expresión:
    .row.justify-content-center.align-items-stretch.mb-4.g-0
      .col-12.col-lg-5.mb-lg-0.mb-4.d-flex
        .cajon.c03.p-4.w-100.d-flex.align-items-center.justify-content-center
          .tarjeta.tarjeta--blanca.p-4.w-100
            .formula-box.d-flex.align-items-center.flex-wrap.justify-content-center.p-4.py-0
              span.fw-bold.ms-3.text-dark P =
              .fraccion.text-center
                span.numerador.fw-bold.px-3 F
                span.denominador.fw-bold.px-3 A
      .col-12.col-lg-5.d-flex
        .cajon.c02.p-4.w-100.d-flex.align-items-center
          .w-100
            p.mb-3(data-aos="fade-down") Donde:
            ul.lista-ul.mb-0
              li
                i.lista-ul__vineta
                | P: presión.
              li
                i.lista-ul__vineta
                | F: fuerza aplicada, expresada en newtons (N).
              li
                i.lista-ul__vineta
                | A: área sobre la cual actúa la fuerza, expresada en metros cuadrados (m²).
    p.mb-4 La unidad de presión en el Sistema Internacional de Unidades es el pascal (Pa), que corresponde a la presión ejercida por una fuerza de un newton sobre un área de un metro cuadrado. Sin embargo, en el ámbito de la maquinaria agrícola y los sistemas hidráulicos también se utilizan otras unidades, como el bar, el kilopascal (kPa), el megapascal (MPa) y la libra por pulgada cuadrada (psi).
    .row.justify-content-center.mb-4
      .col-lg-6.col-12
        .tarjeta.tarjeta.c04.px-4.py-2.mb-0
          p.mb-0.text-center Entre las unidades de presión más utilizadas se encuentran:
    .row.justify-content-center.align-items-center.mb-4(data-aos="flip-up")
      .col-lg-6.col-12.mb-md-0.order-lg-2.order-2.mb-lg-0
        LineaTiempoD.color-acento-botones.especial
          .row(numero="1" titulo="Pascal (Pa)")
            .col-12.mb-4.mb-md-0
              p.mb-0 Unidad básica de presión del Sistema Internacional.
          .row(numero="2" titulo="Kilopascal (kPa)")
            .col-12.mb-4.mb-md-0
              p.mb-0 Equivale a mil pascales y se utiliza para expresar valores de presión de mayor magnitud.
          .row(numero="3" titulo="Megapascal (MPa)")
            .col-12.mb-4.mb-md-0
              p.mb-0 Equivale a un millón de pascales y se emplea en especificaciones de sistemas que trabajan con presiones elevadas.
          .row(numero="4" titulo="Bar")
            .col-12.mb-4.mb-md-0
              p.mb-0 Unidad de uso frecuente en aplicaciones industriales e hidráulicas.
          .row(numero="5" titulo="Libra por pulgada cuadrada (psi)")
            .col-12.mb-4.mb-md-0
              p.mb-0 Unidad utilizada principalmente en países que emplean el sistema anglosajón de medidas.
      .col-lg-6.order-lg-1.order-1.mb-lg-0.mb-4.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/t2/img23.jpg', alt='')
    p.mb-4 La conversión entre unidades permite interpretar correctamente los valores de presión registrados en instrumentos de medición, manuales técnicos y especificaciones de los fabricantes. Algunas equivalencias de uso frecuente son:
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col.col-12.col-lg-10
        .titulo-sexto.color-acento-contenido
          h5 Tabla 4.
          span Equivalencias entre unidades de presión
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th(data-aos="fade-down")(style= "width: 40%") Unidad
                th(data-aos="fade-down")(style= "width: 60%") Equivalencia
            tbody
              tr
                td.td-c01(data-aos="fade-down") 1 kPa
                td.td-c01(data-aos="fade-down") 1.000 Pa
              tr
                td(data-aos="fade-down") 1 MPa
                td(data-aos="fade-down") 1.000.000 Pa
              tr
                td.td-c01(data-aos="fade-down") 1 bar
                td.td-c01(data-aos="fade-down") 100.000 Pa
              tr
                td(data-aos="fade-down") 1 bar
                td(data-aos="fade-down") 100 kPa
              tr
                td.td-c01(data-aos="fade-down") 1 bar
                td.td-c01(data-aos="fade-down") 14,5 psi aproximadamente
              tr
                td(data-aos="fade-down") 1 psi
                td(data-aos="fade-down") 6,895 kPa aproximadamente
              tr
                td.td-c01(data-aos="fade-down") 1 MPa
                td.td-c01(data-aos="fade-down") 10 bar
    .row.justify-content-center.mb-4
      .col.col-lg-10.col-12
        .cajon.cajon.c02.color-primario.p-4.mb-0
          p.mb-0 Por ejemplo, si un manómetro registra una presión de 150 bar, este valor equivale a 15 MPa o aproximadamente 2.176 psi. Esta conversión permite interpretar la misma medición en diferentes unidades, según la información presentada por el instrumento o el fabricante.
    .row.justify-content-center.mb-0
      .col.col-lg-6.col-8.col-md-6.order-lg-2.order-2.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/temas/t2/img24.jpg', alt='')
      .col.col-lg-6.col-12.order-lg-1.order-2
        p.mb-3(data-aos="fade-down") En los sistemas hidráulicos de los tractores y otros equipos agrícolas, la presión permite verificar las condiciones de funcionamiento de componentes como bombas, válvulas y cilindros. Por esta razón, es necesario reconocer las unidades utilizadas y realizar conversiones cuando los valores registrados en los instrumentos no coinciden con los indicados en la documentación técnica.
        .cajon.cajon.c03.p-4.mb-0
          p.mb-0 La interpretación adecuada de las unidades de presión facilita la lectura de manómetros, la comprensión de las especificaciones del fabricante y la identificación de valores que se encuentren fuera de los rangos establecidos para el equipo. Estas consideraciones son importantes para orientar las actividades de revisión y mantenimiento de los sistemas hidráulicos.
</template>
<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
    datosSlyder: [
      {
        titulo: 'Densidad',
        texto:
          'Corresponde a la cantidad de masa contenida en un determinado volumen de una sustancia. Se expresa generalmente en kilogramos por metro cúbico (kg/m³). Esta propiedad permite comparar la relación entre la masa y el volumen de diferentes fluidos.',
        imagen: '@/assets/curso/temas/t2/img14.png',
        // leyendaImagen: 'Leyenda_de_la_imagen',
      },
      {
        titulo: 'Viscosidad',
        texto:
          'Es la resistencia que presenta un fluido al movimiento o al deslizamiento de sus capas internas. Un fluido con alta viscosidad ofrece mayor resistencia al flujo, mientras que uno con baja viscosidad fluye con mayor facilidad. En la maquinaria agrícola, esta propiedad es importante para seleccionar los aceites hidráulicos, ya que influye en la circulación del fluido y en la lubricación de los componentes.',
        imagen: '@/assets/curso/temas/t2/img15.png',
        // leyendaImagen: 'Leyenda_de_la_imagen',
      },
      {
        titulo: 'Peso específico',
        texto:
          'Representa el peso de una sustancia por unidad de volumen. Se expresa en newtons por metro cúbico (N/m³) y permite relacionar el peso de un fluido con el espacio que ocupa.',
        imagen: '@/assets/curso/temas/t2/img16.png',
        // leyendaImagen: 'Leyenda_de_la_imagen',
      },
      {
        titulo: 'Compresibilidad',
        texto:
          'Es la capacidad de un fluido para disminuir su volumen cuando se somete a presión. Los líquidos presentan una compresibilidad muy baja en comparación con los gases, característica que favorece su utilización en sistemas hidráulicos para transmitir fuerza y movimiento.',
        imagen: '@/assets/curso/temas/t2/img17.png',
        // leyendaImagen: 'Leyenda_de_la_imagen',
      },
      {
        titulo: 'Temperatura',
        texto:
          'Influye en el comportamiento de los fluidos, especialmente en su viscosidad. Cuando aumenta la temperatura de un aceite, generalmente disminuye su viscosidad y se vuelve más fluido. Por el contrario, cuando la temperatura baja, puede aumentar su viscosidad y dificultar su circulación.',
        imagen: '@/assets/curso/temas/t2/img18.png',
        // leyendaImagen: 'Leyenda_de_la_imagen',
      },
    ],
  }),
}
</script>
<style lang="sass"></style>
