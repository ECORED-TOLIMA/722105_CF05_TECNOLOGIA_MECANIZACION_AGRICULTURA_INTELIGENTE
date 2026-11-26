<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Sistemas del tractor agrícola
    .row.justify-content-center.mb-4
      .col.col-lg-5.col-8.col-md-6.order-lg-2.order-2.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/temas/t4/img01.jpg', alt='')
      .col.col-lg-7.col-12.order-lg-1.order-2
        p(data-aos="fade-down") El tractor agrícola integra diferentes sistemas que trabajan de manera coordinada para permitir su desplazamiento, funcionamiento y operación durante las actividades agropecuarias. Cada uno cumple funciones específicas que contribuyen al desempeño de la máquina, la transmisión de potencia y el control de sus movimientos, así como a la interacción con los implementos y las condiciones del terreno.
        .cajon.cajon.color-secundario.px-4.py-3.mb-0
          p.mb-0 Entre los principales sistemas se encuentran el eléctrico, el hidráulico, el de transmisión y el de dirección. También se abordarán las características de los neumáticos, los tipos de llantas, la presión de inflado y la relación entre el suelo y la máquina, aspectos que influyen en la estabilidad, la tracción y la eficiencia del trabajo agrícola.
    p.mb-0 El conocimiento de estos sistemas y sus características permite comprender el funcionamiento del tractor, reconocer la importancia de sus componentes e identificar las condiciones que pueden afectar su desempeño. Asimismo, facilita la comprensión de las actividades de mantenimiento necesarias para conservar los equipos en condiciones adecuadas de funcionamiento y seguridad.
    separador
    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.1 Sistema eléctrico
    p.mb-4 El sistema eléctrico del tractor agrícola está integrado por componentes que permiten generar, almacenar, distribuir y utilizar la energía eléctrica necesaria para el funcionamiento de diferentes dispositivos. Entre sus principales funciones se encuentran facilitar el arranque del motor, proporcionar iluminación, activar los sistemas de señalización y alimentar los instrumentos y dispositivos electrónicos de control.
    .row.justify-content-center.align-items-stretch.mb-4.g-0
      .col-lg-7.col-12.order-lg-2.order-2
        .cajon.c01.px-4.py-3.h-100.w-100
          p.mb-4 Este sistema es fundamental para la operación del tractor, ya que permite el funcionamiento coordinado de elementos eléctricos y electrónicos que intervienen en el arranque, la supervisión y el control de la máquina. Su desempeño depende del estado de las conexiones, los conductores, las fuentes de energía y los dispositivos que lo conforman.
          .row.mb-0
            .col-lg-2.d-none.d-lg-block
              figure
                img(src='@/assets/curso/temas/t4/img03.svg', alt='')
            .col.col-10
              p.mb-0(data-aos="fade-down") En los tractores agrícolas, el sistema eléctrico trabaja principalmente con corriente continua y utiliza una batería como fuente de almacenamiento de energía. Durante el funcionamiento del motor, el alternador genera energía eléctrica para alimentar los diferentes dispositivos y recargar la batería, manteniendo la disponibilidad de energía para las operaciones del equipo.
      .col-lg-5.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-4
        figure
          img(src='@/assets/curso/temas/t4/img02.jpg', alt='')
    .row.justify-content-center.mb-4
      .col-lg-8.col-12
        .tarjeta.tarjeta.c04.px-4.py-2.mb-0
          p.mb-0.text-center Entre las principales funciones del sistema eléctrico del tractor agrícola se encuentran:
    .row.justify-content-center
      .col-xl-4.col-lg-4.col-md-10.col-12.mb-xl-0
        .crd_hover_txt.mb-4(data-aos="flip-left")(@mouseover="mostrarIndicador = true")
          .indicador--hover(v-if="mostrarIndicador")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/t4/img04.jpg", alt="")
          .crd_hover_txt--body
            h5.t1.mb-3 Arranque del motor
            h5.t2.mb-2 Arranque del motor
            p.mb-0 Suministra la energía necesaria para accionar el motor de arranque y permitir que el motor diésel inicie su funcionamiento.
      .col-xl-4.col-lg-4.col-md-10.col-12.mb-xl-0
        .crd_hover_txt.mb-4(data-aos="flip-left")(@mouseover="mostrarIndicador = true")
          .indicador--hover(v-if="mostrarIndicador")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/t4/img05.jpg", alt="")
          .crd_hover_txt--body
            h5.t1.mb-3 Alimentación eléctrica
            h5.t2.mb-2 Alimentación eléctrica
            p.mb-0 Proporciona energía a los diferentes dispositivos y componentes eléctricos y electrónicos del tractor.
      .col-xl-4.col-lg-4.col-md-10.col-12.mb-xl-0
        .crd_hover_txt.mb-4(data-aos="flip-left")(@mouseover="mostrarIndicador = true")
          .indicador--hover(v-if="mostrarIndicador")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/t4/img06.jpg", alt="")
          .crd_hover_txt--body
            h5.t1.mb-3 Iluminación
            h5.t2.mb-2 Iluminación
            p.mb-0 Permite disponer de luces delanteras, traseras y de trabajo para facilitar las operaciones en condiciones de baja visibilidad.
    .row.justify-content-center
      .col-xl-4.col-lg-4.col-md-10.col-12.mb-xl-0
        .crd_hover_txt.mb-4(data-aos="flip-left")(@mouseover="mostrarIndicador = true")
          .indicador--hover(v-if="mostrarIndicador")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/t4/img07.jpg", alt="")
          .crd_hover_txt--body
            h5.t1.mb-3 Señalización
            h5.t2.mb-2 Señalización
            p.mb-0 Alimenta las luces direccionales, las luces de freno y otros dispositivos que permiten advertir las maniobras del tractor.
      .col-xl-4.col-lg-4.col-md-10.col-12.mb-xl-0
        .crd_hover_txt.mb-4(data-aos="flip-left")(@mouseover="mostrarIndicador = true")
          .indicador--hover(v-if="mostrarIndicador")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/t4/img08.jpg", alt="")
          .crd_hover_txt--body
            h5.t1.mb-3 Instrumentación y control
            h5.t2.mb-2 Instrumentación y control
            p.mb-0 Suministra energía a los indicadores del tablero, sensores y dispositivos electrónicos que permiten supervisar las condiciones de funcionamiento de la máquina.
      .col-xl-4.col-lg-4.col-md-10.col-12.mb-xl-0
        .crd_hover_txt.mb-4(data-aos="flip-left")(@mouseover="mostrarIndicador = true")
          .indicador--hover(v-if="mostrarIndicador")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/t4/img09.jpg", alt="")
          .crd_hover_txt--body
            h5.t1.mb-3 Recarga de la batería
            h5.t2.mb-2 Recarga de la batería
            p.mb-0 Permite recuperar la energía almacenada en la batería mediante el funcionamiento del alternador.
    p.mb-0 El conocimiento de estas funciones permite comprender la importancia del sistema eléctrico en la operación del tractor agrícola y reconocer la relación entre sus diferentes componentes. También proporciona las bases para identificar posibles alteraciones en su funcionamiento y comprender las actividades de revisión y mantenimiento que se desarrollan posteriormente.
    separador
    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.2 Sistema hidráulico
    .row.justify-content-center.align-items-center.mb-4
      .col.col-lg-1.col-6.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/t4/img10.svg', alt='')
      .col.col-lg-11.col-12.order-lg-2.order-2
        p.mb-0(data-aos="fade-down") El sistema hidráulico del tractor agrícola permite transmitir fuerza y generar movimiento mediante la circulación de un fluido sometido a presión. Su funcionamiento facilita la operación de diferentes mecanismos y permite accionar implementos que requieren fuerza para elevarse, descender o modificar su posición durante las labores agrícolas.
    p.mb-4 Este sistema desempeña un papel importante en la operación del tractor, ya que permite controlar implementos acoplados y accionar dispositivos como cilindros hidráulicos, sistemas de elevación y mecanismos auxiliares. Su funcionamiento depende de la adecuada circulación del aceite, la presión generada y las condiciones de los componentes que conforman el circuito.
    .row.justify-content-center.mb-4
      .col-lg-8.col-12
        .tarjeta.tarjeta.c04.px-4.py-2.mb-0
          p.mb-0.text-center Entre las principales funciones del sistema hidráulico del tractor agrícola se encuentran:
    .row.justify-content-center.align-items-center.mb-4(data-aos="flip-up")
      SlyderF.color-acento-botones(columnas="col-lg-6 col-xl-4")
        .tarjeta.bg01.px-4.py-5
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/t4/img11.svg' alt='AvatarTop')
          h4.text-center Elevación y descenso de implementos
          p.text-center Permite levantar, bajar y regular la posición de los implementos acoplados al tractor.
        .tarjeta.bg01.px-4.py-5
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/t4/img12.svg' alt='AvatarTop')
          h4.text-center Accionamiento de cilindros hidráulicos
          p.text-center Proporciona la fuerza necesaria para extender o retraer cilindros utilizados en diferentes mecanismos.
        .tarjeta.bg01.px-4.py-5
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/t4/img13.svg' alt='AvatarTop')
          h4.text-center Control de implementos
          p.text-center Facilita la regulación de la posición y el movimiento de equipos agrícolas durante las labores de campo.
        .tarjeta.bg01.px-4.py-5
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/t4/img14.svg' alt='AvatarTop')
          h4.text-center Accionamiento de sistemas auxiliares
          p.text-center Suministra energía hidráulica a dispositivos que requieren movimiento o fuerza para realizar determinadas operaciones.
        .tarjeta.bg01.px-4.py-5
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/t4/img15.svg' alt='AvatarTop')
          h4.text-center Asistencia en la dirección
          p.text-center En los tractores que incorporan dirección hidráulica, facilita el giro de las ruedas y reduce el esfuerzo requerido para orientar la máquina.
    p.mb-4 El sistema hidráulico está conformado por diferentes componentes que permiten almacenar, impulsar, regular, filtrar y distribuir el aceite a presión. Estos elementos trabajan de manera coordinada para transmitir fuerza y accionar los mecanismos del tractor. Entre los principales se encuentran:
    .row.mb-4
      .col-12
        .px-0.py-0
          .row.align-items-center.bg03(data-aos="fade-down")
            .col-lg-4.d-none.d-lg-block.py-0.px-0
              figure(data-aos="zoom-in")
                img(src="@/assets/curso/temas/t4/img16.png", alt="")
            .col-lg-8.px-0.py-0
              SlyderF.custom.color-acento-botones.px-lg-5.py-0.px-0(columnas="col-lg-6 col-xl-6")
                .tarjeta.tarjeta--slyder.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t4/img17.svg", alt="").img100.m-auto
                  h4.text-center Cárter
                  p.text-center Depósito ubicado en la parte inferior del motor, donde se almacena el aceite lubricante.
                .tarjeta.tarjeta--slyder.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t4/img18.svg", alt="").img100.m-auto
                  h4.text-center Bomba de aceite
                  p.text-center Impulsa el aceite y permite que circule por los conductos del sistema, manteniendo la presión necesaria para su distribución.
                .tarjeta.tarjeta--slyder.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t4/img19.svg", alt="").img100.m-auto
                  h4.text-center Colador de aceite
                  p.text-center Retiene partículas de mayor tamaño antes de que el aceite ingrese a la bomba, contribuyendo a proteger sus componentes.
                .tarjeta.tarjeta--slyder.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t4/img20.svg", alt="").img100.m-auto
                  h4.text-center Filtro de aceite
                  p.text-center Retiene partículas e impurezas presentes en el lubricante para evitar que circulen por el motor y ocasionen desgaste.
                .tarjeta.tarjeta--slyder.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t4/img21.svg", alt="").img100.m-auto
                  h4.text-center Conductos de lubricación
                  p.text-center Permiten transportar y distribuir el aceite hacia los diferentes componentes internos del motor.
                .tarjeta.tarjeta--slyder.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t4/img22.svg", alt="").img100.m-auto
                  h4.text-center Válvula reguladora de presión
                  p.text-center Controla la presión del aceite y evita que supere los valores establecidos para el funcionamiento del sistema.
                .tarjeta.tarjeta--slyder.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t4/img23.svg", alt="").img100.m-auto
                  h4.text-center Enfriador de aceite
                  p.text-center En los motores que lo incorporan.
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col-lg-10.col-12
        .titulo-sexto.color-acento-contenido
          h5 Figura 8.
          span Componentes principales del sistema hidráulico del tractor agrícola
      .row.justify-content-center
        .col-10
          figure.desktop
            img(src='@/assets/curso/temas/t4/img24.svg', alt='La figura 8 representa los principales componentes de un sistema hidráulico: depósito de aceite, bomba hidráulica, válvulas de control, filtro, tuberías y conexiones, y cilindro hidráulico. También indica la circulación del aceite dentro del circuito.')
      .col-12.mb-0
        figure.movil
          img(src='@/assets/curso/temas/t4/img25.svg', alt='La figura 8 representa los principales componentes de un sistema hidráulico: depósito de aceite, bomba hidráulica, válvulas de control, filtro, tuberías y conexiones, y cilindro hidráulico. También indica la circulación del aceite dentro del circuito.')
    .row.justify-content-center.mb-0
      .col-lg-10.col-12
        p.mb-0 El sistema hidráulico amplía la capacidad de trabajo del tractor, mejora su versatilidad y contribuye a la eficiencia de las labores agrícolas, al permitir el uso de diversos implementos y equipos.
    separador
    #t_4_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.3 Sistema de transmisión
    .row.justify-content-center.align-items-stretch.mb-4.g-0
      .col-lg-7.col-12.order-lg-1.order-2
        .cajon.c01.px-4.py-3.h-100.w-100
          p.mb-4 El sistema de transmisión del tractor agrícola tiene como función transmitir la potencia generada por el motor hacia las ruedas motrices y otros mecanismos que intervienen en el desplazamiento y la operación de la máquina. Su funcionamiento permite aprovechar la potencia del motor y adaptarla a las diferentes condiciones de trabajo, mediante la selección de velocidades y la modificación del par motor.
          .row.mb-0
            .col-lg-2.d-none.d-lg-block
              figure
                img(src='@/assets/curso/temas/t4/img27.svg', alt='')
            .col.col-10
              p.mb-0(data-aos="fade-down") En las labores agrícolas, este sistema es fundamental porque permite ajustar el movimiento del tractor según el tipo de terreno, la carga y la actividad que se realiza. Por ejemplo, durante las labores de arado se requieren condiciones de velocidad y fuerza diferentes a las necesarias para el transporte de productos o el desplazamiento por vías.
      .col-lg-5.col-8.col-md-6.order-lg-2.order-1.mb-lg-0.mb-4
        figure
          img(src='@/assets/curso/temas/t4/img26.jpg', alt='')
    .row.justify-content-center.mb-4
      .col-lg-8.col-12
        .tarjeta.tarjeta.c04.px-4.py-2.mb-0
          p.mb-0.text-center Entre las principales funciones del sistema de transmisión se encuentran:
    .row.justify-content-center.align-items-center.mb-4(data-aos="flip-up")
      .col-lg-6.col-12.mb-md-0.order-lg-1.order-2.mb-lg-0
        LineaTiempoD.color-acento-botones.especial
          .row(numero="1" titulo="Transmitir la potencia del motor")
            .col-12.mb-4.mb-md-0
              p.mb-0 Conduce la energía mecánica generada por el motor hacia las ruedas motrices.
          .row(numero="2" titulo="Regular la velocidad de desplazamiento")
            .col-12.mb-4.mb-md-0
              p.mb-0 Permite seleccionar diferentes relaciones de transmisión para adaptar la velocidad del tractor a cada labor.
          .row(numero="3" titulo="Modificar el par motor")
            .col-12.mb-4.mb-md-0
              p.mb-0 Permite disponer de la fuerza necesaria para mover el tractor y arrastrar implementos, especialmente en trabajos que requieren mayor esfuerzo.
          .row(numero="4" titulo="Permitir cambios de marcha")
            .col-12.mb-4.mb-md-0
              p.mb-0 Facilita seleccionar las velocidades de avance y retroceso de acuerdo con las condiciones de operación.
          .row(numero="5" titulo="Distribuir la potencia")
            .col-12.mb-4.mb-md-0
              p.mb-0 Transmite el movimiento hacia los elementos encargados de impulsar las ruedas y, cuando está disponible, accionar la toma de fuerza.
      .col-lg-6.order-lg-2.order-1.mb-lg-0.mb-4.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/t4/img28.jpg', alt='')
    p.mb-4 El sistema de transmisión está conformado por diferentes mecanismos que reciben, regulan y distribuyen la potencia generada por el motor. Su configuración puede variar según el tipo de tractor y la tecnología utilizada. Entre sus principales componentes se encuentran:
    .row.mb-4
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/t4/img29.svg' alt='')
          .tarjeta.c03
            .p-4
              h4.text-center Embrague
              p.mb-0.text-center Conecta o interrumpe la transmisión de potencia del motor hacia la caja de cambios, facilitando el cambio de marchas y el control del movimiento.
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/t4/img30.svg' alt='')
          .tarjeta.c03
            .p-4
              h4.text-center Caja de cambios
              p.mb-0.text-center Permite seleccionar diferentes relaciones de transmisión para modificar la velocidad y el par disponible según las condiciones de trabajo.
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/t4/img31.svg' alt='')
          .tarjeta.c03
            .p-4
              h4.text-center Eje de transmisión
              p.mb-0.text-center Conduce el movimiento giratorio entre los componentes del sistema, de acuerdo con el diseño del tractor.
    .row.mb-4
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/t4/img32.svg' alt='')
          .tarjeta.c03
            .p-4
              h4.text-center Diferencial
              p.mb-0.text-center Distribuye el movimiento hacia las ruedas motrices y permite que giren a diferentes velocidades durante las curvas.
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/t4/img33.svg' alt='')
          .tarjeta.c03
            .p-4
              h4.text-center Reducción final
              p.mb-0.text-center Disminuye la velocidad de giro y aumenta el par transmitido a las ruedas, proporcionando la fuerza necesaria para el desplazamiento.
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/t4/img34.svg' alt='')
          .tarjeta.c03
            .p-4
              h4.text-center Toma de fuerza (TDF)
              p.mb-0.text-center Transmite la potencia del motor hacia implementos y equipos agrícolas que requieren movimiento giratorio, como algunas segadoras, pulverizadoras y rotocultores.
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col-lg-10.col-12
        .titulo-sexto.color-acento-contenido
          h5 Figura 9.
          span Componentes principales del sistema de transmisión del tractor agrícola
      .row.justify-content-center
        .col-10
          figure.desktop
            img(src='@/assets/curso/temas/t4/img35.svg', alt='La figura 8 representa los principales componentes de un sistema hidráulico: depósito de aceite, bomba hidráulica, válvulas de control, filtro, tuberías y conexiones, y cilindro hidráulico. También indica la circulación del aceite dentro del circuito.')
      .col-12.mb-0
        figure.movil
          img(src='@/assets/curso/temas/t4/img36.svg', alt='La figura 8 representa los principales componentes de un sistema hidráulico: depósito de aceite, bomba hidráulica, válvulas de control, filtro, tuberías y conexiones, y cilindro hidráulico. También indica la circulación del aceite dentro del circuito.')
    .row.justify-content-center.align-items-center.mb-4
      .col.col-lg-1.col-6.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/t3/img101.svg', alt='')
      .col.col-lg-9.col-12.order-lg-2.order-2
        .cajon.cajon.c01.px-4.py-3
          p.mb-0(data-aos="fade-down") La figura presenta una configuración ilustrativa. La disposición y los componentes pueden variar según el modelo y el tipo de transmisión del tractor.
    .row.justify-content-center.mb-4
      .col.col-12
        .cajon.cajon.color-secundario.p-4.mb-0
          p.mb-0 El sistema de transmisión permite adaptar la potencia del motor a las condiciones de cada labor agrícola, facilitando el desplazamiento del tractor y el accionamiento de los implementos. Su funcionamiento adecuado contribuye a aprovechar la fuerza disponible, seleccionar velocidades apropiadas y desarrollar las actividades de campo de manera eficiente.
    p.mb-0 Por esta razón, es importante reconocer sus componentes y comprender sus funciones, ya que su estado influye directamente en el desempeño del tractor, la capacidad de trabajo y la seguridad durante la operación.
    separador
    #t_4_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.4 Sistema de dirección
    .row.justify-content-center.align-items-stretch.mb-4.g-0
      .col-lg-7.col-12.order-lg-2.order-2
        .cajon.c01.px-4.py-3.h-100.w-100
          p.mb-4 El sistema de dirección del tractor agrícola permite orientar las ruedas directrices para controlar la trayectoria y la dirección de desplazamiento de la máquina. Su funcionamiento facilita realizar giros, maniobras y cambios de sentido durante las labores agrícolas, contribuyendo al control y la seguridad en la operación. 
          .row.mb-0
            .col-lg-2.d-none.d-lg-block
              figure
                img(src='@/assets/curso/temas/t4/img38.svg', alt='')
            .col.col-10
              p.mb-0(data-aos="fade-down") En los tractores agrícolas, este sistema puede funcionar mediante mecanismos mecánicos, asistencia hidráulica o dirección hidrostática, según el diseño y la tecnología del equipo. En los sistemas con asistencia hidráulica, la presión del aceite facilita el movimiento de los mecanismos de dirección y reduce el esfuerzo que debe realizar el operador sobre el volante.
      .col-lg-5.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-4
        figure
          img(src='@/assets/curso/temas/t4/img37.jpg', alt='')
    .row.justify-content-center.mb-4
      .col-lg-8.col-12
        .tarjeta.tarjeta.c04.px-4.py-2.mb-0
          p.mb-0.text-center Entre las principales funciones del sistema de transmisión se encuentran:
    .row.justify-content-center.align-items-center.mb-4(data-aos="flip-up")
      SlyderF.color-acento-botones(columnas="col-lg-6 col-xl-4")
        .tarjeta.bg01.px-4.py-5
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/t4/img39.svg' alt='AvatarTop')
          h4.text-center Orientar las ruedas directrices
          p.text-center Permite modificar la dirección de las ruedas para controlar la trayectoria del tractor.
        .tarjeta.bg01.px-4.py-5
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/t4/img40.svg' alt='AvatarTop')
          h4.text-center Facilitar las maniobras
          p.text-center Permite realizar giros y cambios de sentido durante las actividades agrícolas.
        .tarjeta.bg01.px-4.py-5
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/t4/img41.svg' alt='AvatarTop')
          h4.text-center Mantener el control de la trayectoria
          p.text-center Contribuye a conservar la dirección de desplazamiento seleccionada por el operador.
        .tarjeta.bg01.px-4.py-5
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/t4/img42.svg' alt='AvatarTop')
          h4.text-center Reducir el esfuerzo del operador
          p.text-center En los sistemas asistidos, facilita el giro del volante mediante mecanismos hidráulicos o hidrostáticos.
        .tarjeta.bg01.px-4.py-5
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/t4/img43.svg' alt='AvatarTop')
          h4.text-center Favorecer la seguridad
          p.text-center Permite controlar los movimientos del tractor durante el desplazamiento y las maniobras en el terreno.
    p.mb-4 El sistema de dirección está integrado por mecanismos que transmiten el movimiento del volante hacia las ruedas directrices. En los tractores que incorporan asistencia hidráulica, también cuenta con componentes que utilizan la presión del aceite para facilitar el giro. Entre los principales se encuentran:
    .row.justify-content-center.mb-4
      .col.col-lg-6.col-12.mb-4
        .cajon.cajon.c02.p-4
          .row.justify-content-center
            .col.col-lg-2.col-6.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3.d-none.d-lg-block
              figure
                img(src='@/assets/curso/temas/t4/img44.svg', alt='')
            .col.col-lg-10.col-12.order-lg-2.order-2
              h4 Volante de dirección
              p.mb-0(data-aos="fade-down") Permite al operador indicar el sentido de giro del tractor.
              br
      .col.col-lg-6.col-12.mb-4
        .cajon.cajon.c02.p-4
          .row.justify-content-center
            .col.col-lg-2.col-6.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3.d-none.d-lg-block
              figure
                img(src='@/assets/curso/temas/t4/img45.svg', alt='')
            .col.col-lg-10.col-12.order-lg-2.order-2
              h4 Columna de dirección
              p.mb-0(data-aos="fade-down") Transmite el movimiento del volante hacia los mecanismos encargados de orientar las ruedas.
      .col.col-lg-6.col-12.mb-4
        .cajon.cajon.c02.p-4
          .row.justify-content-center
            .col.col-lg-2.col-6.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3.d-none.d-lg-block
              figure
                img(src='@/assets/curso/temas/t4/img46.svg', alt='')
            .col.col-lg-10.col-12.order-lg-2.order-2
              h4 Mecanismo de dirección
              p.mb-0(data-aos="fade-down") Transforma el movimiento del volante en el desplazamiento necesario para orientar las ruedas directrices.
      .col.col-lg-6.col-12.mb-4
        .cajon.cajon.c02.p-4
          .row.justify-content-center
            .col.col-lg-2.col-6.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3.d-none.d-lg-block
              figure
                img(src='@/assets/curso/temas/t4/img47.svg', alt='')
            .col.col-lg-10.col-12.order-lg-2.order-2
              h4 Bomba hidráulica
              p.mb-0(data-aos="fade-down") En los sistemas con asistencia hidráulica, suministra el aceite a presión para facilitar el movimiento de la dirección.
      .col.col-lg-6.col-12.mb-4
        .cajon.cajon.c02.p-4
          .row.justify-content-center
            .col.col-lg-2.col-6.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3.d-none.d-lg-block
              figure
                img(src='@/assets/curso/temas/t4/img48.svg', alt='')
            .col.col-lg-10.col-12.order-lg-2.order-2
              h4 Válvula de control
              p.mb-0(data-aos="fade-down") Regula el paso del aceite hacia el mecanismo o cilindro de dirección, según el giro solicitado por el operador.
      .col.col-lg-6.col-12.mb-4
        .cajon.cajon.c02.p-4
          .row.justify-content-center
            .col.col-lg-2.col-6.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3.d-none.d-lg-block
              figure
                img(src='@/assets/curso/temas/t4/img49.svg', alt='')
            .col.col-lg-10.col-12.order-lg-2.order-2
              h4 Cilindro hidráulico
              p.mb-0(data-aos="fade-down") Transforma la presión del aceite en movimiento lineal para facilitar la orientación de las ruedas.
      .col.col-lg-6.col-12
        .cajon.cajon.c02.p-4
          .row.justify-content-center
            .col.col-lg-2.col-6.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3.d-none.d-lg-block
              figure
                img(src='@/assets/curso/temas/t4/img50.svg', alt='')
            .col.col-lg-10.col-12.order-lg-2.order-2
              h4 Depósito de aceite hidráulico
              p.mb-0(data-aos="fade-down") Almacena el fluido utilizado por el circuito de asistencia hidráulica, cuando el sistema dispone de un circuito específico.
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col-lg-10.col-12
        .titulo-sexto.color-acento-contenido
          h5 Figura 10.
          span Componentes del sistema de dirección asistida hidráulicamente del tractor agrícola
      .row.justify-content-center
        .col-10
          figure.desktop
            img(src='@/assets/curso/temas/t4/img51.svg', alt='La figura 8 representa los principales componentes de un sistema hidráulico: depósito de aceite, bomba hidráulica, válvulas de control, filtro, tuberías y conexiones, y cilindro hidráulico. También indica la circulación del aceite dentro del circuito.')
      .col-12.mb-0
        figure.movil
          img(src='@/assets/curso/temas/t4/img52.svg', alt='La figura 8 representa los principales componentes de un sistema hidráulico: depósito de aceite, bomba hidráulica, válvulas de control, filtro, tuberías y conexiones, y cilindro hidráulico. También indica la circulación del aceite dentro del circuito.')
    .row.justify-content-center.align-items-center.mb-4
      .col.col-lg-1.col-6.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/t4/img53.svg', alt='')
      .col.col-lg-9.col-12.order-lg-2.order-2
        .cajon.cajon.c01.px-4.py-3
          p.mb-0(data-aos="fade-down") La figura presenta un sistema de dirección con asistencia hidráulica. La configuración y los componentes pueden variar según el modelo y el tipo de dirección del tractor.
    p.mb-0 El sistema de dirección es fundamental para controlar la trayectoria del tractor y realizar maniobras con precisión durante las actividades agrícolas. Su funcionamiento adecuado contribuye a la maniobrabilidad, la estabilidad y la seguridad de la máquina, especialmente durante los giros, los desplazamientos y las labores que requieren seguir trayectorias determinadas.
    separador
    #t_4_5.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.5 Neumáticos y tipos de llantas
    .row.justify-content-center.mb-4
      .col.col-lg-5.col-8.col-md-6.order-lg-2.order-2.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/temas/t4/img54.jpg', alt='')
      .col.col-lg-7.col-12.order-lg-1.order-2
        p.mb-4(data-aos="fade-down") Los neumáticos del tractor agrícola cumplen una función fundamental en el desplazamiento y la operación de la maquinaria, ya que permiten soportar el peso del equipo, transmitir la fuerza de tracción al suelo y proporcionar estabilidad durante las labores agrícolas.
        .cajon.cajon.c02.color-primario.p-4.mb-0
          p.mb-0 Su diseño y características influyen en la capacidad de tracción, la compactación del suelo y el comportamiento del tractor en diferentes terrenos. Por esta razón, la selección de los neumáticos debe considerar el tipo de actividad, las condiciones del suelo, las características del equipo y las recomendaciones del fabricante.
    p.mb-4 Los neumáticos agrícolas están diseñados para trabajar en terrenos con diferentes condiciones de humedad, consistencia y resistencia. Entre sus características principales se encuentran:
    .row.mb-4
      .col-12
        .px-0.py-0
          .row.align-items-center.bg03(data-aos="fade-down")
            .col-lg-4.d-none.d-lg-block.py-0.px-0
              figure(data-aos="zoom-in")
                img(src="@/assets/curso/temas/t4/img55.png", alt="")
            .col-lg-8.px-0.py-0
              SlyderF.custom.color-acento-botones.px-lg-5.py-0.px-0(columnas="col-lg-6 col-xl-6")
                .tarjeta.tarjeta--slyder.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t4/img56.svg", alt="").img100.m-auto
                  h4.text-center Banda de rodadura
                  p.text-center Superficie que entra en contacto con el suelo y cuyo diseño permite generar tracción y favorecer el desplazamiento.
                .tarjeta.tarjeta--slyder.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t4/img57.svg", alt="").img100.m-auto
                  h4.text-center Tacos o garras
                  p.text-center Relieves de la banda de rodadura que se introducen parcialmente en el terreno y contribuyen a mejorar la adherencia.
                .tarjeta.tarjeta--slyder.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t4/img58.svg", alt="").img100.m-auto
                  h4.text-center Carcasa
                  p.text-center Estructura interna que proporciona resistencia y soporta las cargas del tractor.
                .tarjeta.tarjeta--slyder.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t4/img59.svg", alt="").img100.m-auto
                  h4.text-center Flancos
                  p.text-center Laterales del neumático que permiten su flexión y contribuyen a soportar las condiciones de trabajo.
                .tarjeta.tarjeta--slyder.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t4/img60.svg", alt="").img100.m-auto
                  h4.text-center Capacidad de carga
                  p.text-center Peso máximo que puede soportar el neumático según las condiciones de presión y velocidad establecidas por el fabricante.
    p.mb-4 Los neumáticos se clasifican según el diseño de su banda de rodadura y las condiciones de operación para las que fueron diseñados. Entre los tipos más comunes se encuentran:
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col.col-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 5.
          span Tipos de neumáticos agrícolas
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th(data-aos="fade-down")(style= "width: 40%") Tipo de neumático
                th(data-aos="fade-down")(style= "width: 60%") Características y aplicación
            tbody
              tr
                td.td-c01(data-aos="fade-down") Agrícola convencional (R1)
                td.td-c01(data-aos="fade-down") Presenta tacos profundos y separados, diseñados para proporcionar tracción en terrenos agrícolas.
              tr
                td(data-aos="fade-down") Agrícola de mayor profundidad (R1W)
                td(data-aos="fade-down") Tiene tacos más profundos que el convencional y ofrece mayor capacidad de tracción en determinadas condiciones de trabajo.
              tr
                td.td-c01(data-aos="fade-down") Para terrenos inundados (R2)
                td.td-c01(data-aos="fade-down") Presenta una banda de rodadura con tacos especialmente profundos, utilizada en terrenos húmedos y labores en condiciones de inundación.
              tr
                td(data-aos="fade-down") Para césped o superficies delicadas (R3)
                td(data-aos="fade-down") Tiene una banda de rodadura menos agresiva, diseñada para reducir el daño superficial del terreno.
              tr
                td.td-c01(data-aos="fade-down") Industrial (R4)
                td.td-c01(data-aos="fade-down") Presenta una banda de rodadura más robusta, utilizada en tractores que realizan actividades agrícolas, industriales y de mantenimiento de terrenos.
    p.mb-4 La selección de los neumáticos debe responder a las condiciones del terreno y al tipo de labor que realiza el tractor. Un diseño apropiado permite mejorar la tracción, reducir el deslizamiento y favorecer la estabilidad de la máquina. También contribuye a disminuir daños innecesarios en el suelo y a aprovechar mejor la potencia disponible.
    .row.justify-content-center.mb-0
      .col.col-12
        .cajon.cajon.c02.color-primario.p-4.mb-0
          p.mb-0 Por esta razón, es importante reconocer las características de los diferentes tipos de neumáticos y considerar las especificaciones técnicas del fabricante al momento de seleccionarlos o sustituirlos.
    separador
    #t_4_6.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.6 Presión de inflado de los neumáticos
    .bloque-texto-g.bloque-texto-g--inverso.bl01.p-3.p-sm-4.p-md-5.mb-4(data-aos="flip-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/temas/t4/img61.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La presión de inflado de los neumáticos es un factor importante para el funcionamiento del tractor agrícola, ya que influye en la capacidad de carga, la tracción, la estabilidad y el contacto de las ruedas con el suelo. Una presión adecuada permite que el neumático trabaje de acuerdo con sus características de diseño y las condiciones de operación de la máquina.
        br
        br
        p.mb-0 La presión requerida depende de factores como el tipo de neumático, la carga soportada, la velocidad de desplazamiento y la actividad que realiza el tractor. Por esta razón, no existe un valor único de inflado para todos los equipos; es necesario consultar las especificaciones del fabricante y considerar las condiciones de trabajo.
    .row.justify-content-center.mb-4
      .col-lg-10.col-12
        p.mb-4 Mantener una presión adecuada permite aprovechar las características del neumático y evitar condiciones que afecten su desempeño. Entre sus principales efectos se encuentran:
        .row.justify-content-center.align-items-center.mb-0(data-aos="flip-up")
          .col-lg-7.col-12.mb-md-0.order-lg-2.order-2.mb-lg-0
            LineaTiempoD.color-acento-botones.especial
              .row(numero="1" titulo="Tracción")
                .col-12.mb-4.mb-md-0
                  p.mb-0 Una presión apropiada favorece el contacto de la banda de rodadura con el terreno y contribuye a transmitir la fuerza del tractor.
              .row(numero="2" titulo="Capacidad de carga")
                .col-12.mb-4.mb-md-0
                  p.mb-0 Permite que el neumático soporte el peso del equipo y de los implementos dentro de los límites establecidos.
              .row(numero="3" titulo="Estabilidad")
                .col-12.mb-4.mb-md-0
                  p.mb-0 Contribuye a mantener el comportamiento adecuado del tractor durante el desplazamiento y las maniobras.
              .row(numero="4" titulo="Desgaste")
                .col-12.mb-4.mb-md-0
                  p.mb-0 Una presión inadecuada puede generar un desgaste irregular y reducir la vida útil del neumático.
              .row(numero="5" titulo="Compactación del suelo")
                .col-12.mb-4.mb-md-0
                  p.mb-0 La presión y la distribución de la carga influyen en la interacción entre el neumático y el terreno.
          .col-lg-5.order-lg-1.order-1.mb-lg-0.mb-4.d-none.d-lg-block
            figure
              img(src='@/assets/curso/temas/t4/img62.jpg', alt='')
    p.mb-4 La identificación de las dimensiones y características de los neumáticos facilita la interpretación de sus especificaciones técnicas. En el costado se encuentra información relacionada con el ancho, la relación de aspecto, el tipo de construcción y el diámetro del rin. Estos datos permiten reconocer las características del neumático y consultar las recomendaciones de inflado correspondientes, como se presenta a continuación:
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col-lg-10.col-12
        .titulo-sexto.color-acento-contenido
          h5 Figura 11.
          span Interpretación de la nomenclatura de un neumático agrícola
      .row.justify-content-center
        .col-10
          figure.desktop
            img(src='@/assets/curso/temas/t4/img63.svg', alt='La figura 11 representa la nomenclatura 420/85 R30 grabada en el costado de un neumático. Identifica el ancho de 420 mm, la relación de aspecto del 85 %, la construcción radial (R) y el diámetro del rin de 30 pulgadas.')
      .col-12.mb-0
        figure.movil
          img(src='@/assets/curso/temas/t4/img64.svg', alt='La figura 11 representa la nomenclatura 420/85 R30 grabada en el costado de un neumático. Identifica el ancho de 420 mm, la relación de aspecto del 85 %, la construcción radial (R) y el diámetro del rin de 30 pulgadas.')
    p.mb-4 La presión de inflado debe ajustarse de acuerdo con las recomendaciones técnicas, debido a que tanto el inflado insuficiente como el excesivo pueden afectar el comportamiento del tractor.
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col.col-12
        .tarjeta--container.row
          .col-xl.col-lg-6.tarjeta.tarjeta.c01.p-5
            .row.justify-content-center.mb-3
              .col-lg-7.col-4
                figure(data-aos="fade-up")
                  img(src='@/assets/curso/temas/t4/img65.svg', alt='')(style="width: 85%")
            h4.text-center Presión excesiva
            p.mb-0(data-aos="fade-down") Reduce la superficie de contacto con el terreno, puede disminuir la tracción y ocasionar un desgaste mayor en la parte central de la banda de rodadura.

          .col-xl.col-lg-6.tarjeta.tarjeta.c02.p-5
            .row.justify-content-center.mb-3
              .col-lg-7.col-4
                figure(data-aos="fade-up")
                  img(src='@/assets/curso/temas/t4/img66.svg', alt='')(style="width: 85%")
            h4.text-center Presión insuficiente
            p.mb-0(data-aos="fade-down") Genera una deformación excesiva del neumático, aumenta su temperatura de trabajo y puede ocasionar daños en los flancos y la carcasa.
    p.mb-4 La presión debe comprobarse utilizando un manómetro adecuado y siguiendo las indicaciones del fabricante. Para realizar esta verificación, es importante considerar las siguientes recomendaciones:
    .row.mb-0
      .col-12
        .px-0.py-0
          .row.align-items-center.bg03(data-aos="fade-down")
            .col-lg-4.d-none.d-lg-block.py-0.px-0
              figure(data-aos="zoom-in")
                img(src="@/assets/curso/temas/t4/img67.png", alt="")
            .col-lg-8.px-0.py-0
              SlyderF.custom.color-acento-botones.px-lg-5.py-0.px-0(columnas="col-lg-6 col-xl-6")
                .tarjeta.tarjeta--slyder.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t4/img68.svg", alt="").img100.m-auto
                  h4.text-center Consultar las especificaciones técnicas
                  p.text-center Identificar la presión recomendada para el neumático, la carga y las condiciones de operación.
                .tarjeta.tarjeta--slyder.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t4/img69.svg", alt="").img100.m-auto
                  h4.text-center Utilizar un manómetro
                  p.text-center Emplear un instrumento apropiado para comprobar la presión de cada neumático.
                .tarjeta.tarjeta--slyder.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t4/img70.svg", alt="").img100.m-auto
                  h4.text-center Realizar la medición en condiciones adecuadas
                  p.text-center Verificar la presión cuando los neumáticos estén fríos o según el procedimiento indicado por el fabricante.
                .tarjeta.tarjeta--slyder.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t4/img71.svg", alt="").img100.m-auto
                  h4.text-center Comparar los valores
                  p.text-center Comprobar que las mediciones correspondan con las recomendaciones establecidas para el equipo.
                .tarjeta.tarjeta--slyder.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t4/img72.svg", alt="").img100.m-auto
                  h4.text-center Ajustar la presión
                  p.text-center Agregar o liberar aire cuando sea necesario, utilizando los elementos adecuados y respetando los límites de inflado.
    separador
    #t_4_7.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.7 Relación suelo-máquina y características del rodaje
    p.mb-4 La relación suelo-máquina hace referencia a la interacción entre los neumáticos del tractor agrícola y la superficie del terreno durante el desplazamiento y la ejecución de las labores. Esta interacción influye en la tracción, la estabilidad, la capacidad de desplazamiento y la eficiencia del trabajo, debido a que las condiciones del suelo y las características del rodaje determinan cómo se transmite la fuerza del tractor al terreno.
    figure.mb-0
      img(src='@/assets/curso/temas/t4/img73.png', alt='') 
    .cajon.c01.p-4.mb-4
      p.mb-0 En las actividades agrícolas, el comportamiento del tractor depende de factores como la textura, la humedad, la compactación y la resistencia del suelo, así como del peso de la máquina, la distribución de la carga y las características de los neumáticos. Una adecuada relación entre estos elementos permite aprovechar mejor la potencia del motor, reducir el deslizamiento de las ruedas y evitar efectos negativos sobre el terreno.
    p.mb-4 Durante el desplazamiento del tractor, se presentan diferentes fenómenos relacionados con el contacto entre los neumáticos y el suelo. Entre los principales se encuentran:
    .cajon.cajon.c06.p-5.mb-4
      SlyderB(:datos="datosSlyder")
    p.mb-4 El rodaje comprende los elementos que permiten el desplazamiento del tractor y su contacto con el terreno. En los tractores agrícolas, sus características están relacionadas principalmente con la disposición de las ruedas, el tipo de tracción y las condiciones de los neumáticos.
    .row.justify-content-center.mb-4
      .col-lg-8.col-12
        .tarjeta.tarjeta.c03.px-4.py-2.mb-0
          p.mb-0.text-center Entre las configuraciones de rodaje más comunes se encuentran:
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col-lg-8.col-12.mb-md-0.order-lg-2.order-2.mb-lg-0
        .row.justify-content-center.mb-0
          .col.col-12
            AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta-c01")
              .row(titulo="Tracción en dos ruedas (4 × 2)")
                .col-12.mb-0.mb-md-0
                  p La potencia del motor se transmite a dos ruedas motrices, mientras que las otras cumplen principalmente la función de dirección. Es una configuración utilizada en tractores destinados a labores que no requieren niveles elevados de tracción.
              .row(titulo="Doble tracción (4 × 4)")
                .col-12.mb-0.mb-md-0
                  p La potencia se transmite a las cuatro ruedas, lo que permite mejorar la capacidad de tracción y el desplazamiento en terrenos difíciles.
              .row(titulo="Tracción articulada")
                .col-12.mb-0.mb-md-0
                  p Utiliza un sistema de articulación entre las secciones del tractor para facilitar los cambios de dirección. Se encuentra en algunos tractores de gran potencia utilizados en labores agrícolas de alta exigencia.
      .col-lg-4.order-lg-1.order-1.mb-lg-0.mb-4.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/t4/img79.png', alt='')
    p.mb-4 El comportamiento del tractor durante las labores agrícolas depende de diferentes factores que deben considerarse para lograr un desplazamiento eficiente:
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col.col-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 6.
          span Factores que influyen en la relación suelo-máquina
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th(data-aos="fade-down")(style= "width: 30%") Factor
                th(data-aos="fade-down")(style= "width: 70%") Influencia en la relación suelo-máquina
            tbody
              tr
                td.td-c01(data-aos="fade-down") Humedad del suelo
                td.td-c01(data-aos="fade-down") modifica la resistencia del terreno y puede afectar la capacidad de tracción y el riesgo de compactación.
              tr
                td(data-aos="fade-down") Textura del suelo
                td(data-aos="fade-down") influye en la capacidad de soporte, la adherencia y la resistencia al desplazamiento.
              tr
                td.td-c01(data-aos="fade-down") Peso del tractor
                td.td-c01(data-aos="fade-down") determina parte de la carga que se transmite al terreno a través de los neumáticos.
              tr
                td(data-aos="fade-down") Distribución de la carga
                td(data-aos="fade-down") influye en el contacto de las ruedas con el suelo y en la estabilidad del equipo.
              tr
                td.td-c01(data-aos="fade-down") Tipo de neumático
                td.td-c01(data-aos="fade-down") sus dimensiones y diseño de la banda de rodadura afectan la tracción y la interacción con el terreno.
              tr
                td(data-aos="fade-down") Velocidad de desplazamiento
                td(data-aos="fade-down") influye en el comportamiento del tractor, el deslizamiento y la eficiencia de la labor.
    .row.justify-content-center.mb-4
      .col.col-12
        .cajon.cajon.c02.color-primario.p-4.mb-0
          p.mb-0 La relación adecuada entre el tractor y el terreno permite aprovechar la capacidad de tracción, reducir el deslizamiento excesivo y favorecer la eficiencia de las labores agrícolas. También contribuye a disminuir la compactación del suelo, conservar sus condiciones físicas y evitar esfuerzos innecesarios en los componentes de rodaje.
    p.mb-0 Por esta razón, antes de realizar una labor agrícola es importante considerar las condiciones del terreno, el tipo de neumáticos, la distribución de la carga y las características de la maquinaria. Estos aspectos permiten seleccionar condiciones de operación apropiadas y contribuir al desempeño del tractor y a la conservación del suelo.
    separador
    #t_4_8.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.8 Mantenimiento de los sistemas de dirección y rodaje
    .row.justify-content-center.mb-4
      .col.col-lg-5.col-8.col-md-6.order-lg-2.order-2.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/temas/t4/img80.jpg', alt='')
      .col.col-lg-7.col-12.order-lg-1.order-2
        p.mb-4(data-aos="fade-down") El mantenimiento de los sistemas de dirección y rodaje del tractor agrícola es fundamental para conservar las condiciones de desplazamiento, maniobrabilidad y estabilidad de la máquina. Estas actividades permiten identificar desgastes, daños o alteraciones que pueden afectar el control del tractor y la seguridad durante las labores agrícolas.
        .cajon.cajon.c02.color-primario.p-4.mb-4
          p.mb-0 La revisión periódica de estos sistemas facilita la detección de posibles fallas en los mecanismos de dirección, las conexiones, los elementos de articulación, las ruedas y los neumáticos. Su mantenimiento debe realizarse de acuerdo con las especificaciones técnicas y los intervalos establecidos por el fabricante.
        p.mb-0 El sistema de dirección requiere inspecciones periódicas para comprobar el estado de sus componentes y verificar que responda adecuadamente a los movimientos del volante. Entre las principales actividades de mantenimiento se encuentran:
    .row.justify-content-center.align-items-center.mb-4(data-aos="flip-up")
      SlyderF.color-acento-botones(columnas="col-lg-6 col-xl-4")
        .tarjeta.bg01.px-4.py-5
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/t4/img81.svg' alt='AvatarTop')
          h4.text-center Revisión del volante y la columna de dirección
          p.text-center Comprobar que no presenten daños, holguras excesivas o dificultades durante el giro.
        .tarjeta.bg01.px-4.py-5
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/t4/img82.svg' alt='AvatarTop')
          h4.text-center Inspección de articulaciones y terminales
          p.text-center Verificar el estado de las uniones, rótulas y elementos que transmiten el movimiento hacia las ruedas directrices.
        .tarjeta.bg01.px-4.py-5
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/t4/img83.svg' alt='AvatarTop')
          h4.text-center Comprobación de la asistencia hidráulica
          p.text-center Revisar el nivel y estado del aceite, las mangueras y las conexiones, cuando el tractor cuente con este sistema.
        .tarjeta.bg01.px-4.py-5
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/t4/img84.svg' alt='AvatarTop')
          h4.text-center Identificación de fugas
          p.text-center Inspeccionar los conductos, conexiones y componentes hidráulicos para detectar pérdidas de aceite.
        .tarjeta.bg01.px-4.py-5
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/t4/img85.svg' alt='AvatarTop')
          h4.text-center Verificación de la respuesta de la dirección
          p.text-center Comprobar que el giro sea uniforme y que no se presenten ruidos, vibraciones o resistencia anormal.
    p.mb-4 El mantenimiento del sistema de rodaje permite conservar las condiciones de contacto entre el tractor y el terreno, favorecer la tracción y prevenir el desgaste prematuro de sus componentes. Entre las actividades generales de revisión se encuentran:
    .row.justify-content-center
      .col-xl-4.col-lg-4.col-md-10.col-12.mb-xl-0
        .crd_hover_txt.mb-4(data-aos="flip-left")(@mouseover="mostrarIndicador = true")
          .indicador--hover(v-if="mostrarIndicador")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/t4/img86.jpg", alt="")
          .crd_hover_txt--body
            h5.t1.mb-3 Inspección de los neumáticos
            h5.t2.mb-2 Inspección de los neumáticos
            p.mb-0 Identificar cortes, grietas, deformaciones, desgaste irregular y objetos incrustados en la banda de rodadura.
      .col-xl-4.col-lg-4.col-md-10.col-12.mb-xl-0
        .crd_hover_txt.mb-4(data-aos="flip-left")(@mouseover="mostrarIndicador = true")
          .indicador--hover(v-if="mostrarIndicador")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/t4/img87.jpg", alt="")
          .crd_hover_txt--body
            h5.t1.mb-3 Verificación de la presión de inflado
            h5.t2.mb-2 Verificación de la presión de inflado
            p.mb-0 Comprobar que los valores correspondan con las recomendaciones del fabricante, considerando la carga y las condiciones de trabajo.
      .col-xl-4.col-lg-4.col-md-10.col-12.mb-xl-0
        .crd_hover_txt.mb-4(data-aos="flip-left")(@mouseover="mostrarIndicador = true")
          .indicador--hover(v-if="mostrarIndicador")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/t4/img88.jpg", alt="")
          .crd_hover_txt--body
            h5.t1.mb-3 Revisión de las llantas y los rines
            h5.t2.mb-2 Revisión de las llantas y los rines
            p.mb-0 Verificar que no presenten fisuras, deformaciones, daños o elementos de fijación flojos.
    .row.justify-content-center
      .col-xl-4.col-lg-4.col-md-10.col-12.mb-xl-0
        .crd_hover_txt.mb-4(data-aos="flip-left")(@mouseover="mostrarIndicador = true")
          .indicador--hover(v-if="mostrarIndicador")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/t4/img89.jpg", alt="")
          .crd_hover_txt--body
            h5.t1.mb-3 Comprobación de las tuercas de las ruedas
            h5.t2.mb-2 Comprobación de las tuercas de las ruedas
            p.mb-0 verificar su ajuste de acuerdo con el procedimiento y el torque especificados por el fabricante.
      .col-xl-4.col-lg-4.col-md-10.col-12.mb-xl-0
        .crd_hover_txt.mb-4(data-aos="flip-left")(@mouseover="mostrarIndicador = true")
          .indicador--hover(v-if="mostrarIndicador")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/t4/img90.jpg", alt="")
          .crd_hover_txt--body
            h5.t1.mb-3 Inspección de los elementos de rodaje
            h5.t2.mb-2 Inspección de los elementos de rodaje
            p.mb-0 Revisar los componentes de fijación, ejes y demás elementos relacionados con el desplazamiento del tractor, según su configuración.
    p.mb-4 Las actividades de mantenimiento de los sistemas de dirección y rodaje deben realizarse bajo condiciones que reduzcan los riesgos para las personas y eviten daños en la maquinaria. Para ello, se deben considerar las siguientes recomendaciones:
    .row.justify-content-center.mb-4
      .col-lg-10.col-12
        .cajon.c03.p-4.h-100.w-100
          ol.lista-ol--cuadro.lista-ol--separador
            li 
              .lista-ol--cuadro__vineta.v--green
                span A
              p.mb-0 <b>Inmovilizar el tractor</b>: estacionarlo en una superficie firme y nivelada, aplicar el freno de estacionamiento y apagar el motor.
            li 
              .lista-ol--cuadro__vineta.v--green
                span B
              p.mb-0 <b>Evitar movimientos inesperados</b>: utilizar elementos de bloqueo cuando se requiera intervenir las ruedas o los mecanismos de dirección.
            li 
              .lista-ol--cuadro__vineta.v--green
                span C
              p.mb-0 <b>Utilizar equipos adecuados</b>: emplear herramientas y dispositivos de elevación con capacidad suficiente para soportar el peso del tractor.
            li 
              .lista-ol--cuadro__vineta.v--green
                span D
              p.mb-0 <b>Usar elementos de protección personal</b>: utilizar guantes, calzado de seguridad y protección ocular, según la actividad.
            li 
              .lista-ol--cuadro__vineta.v--green
                span E
              p.mb-0 <b>Seguir las indicaciones del fabricante</b>: consultar los procedimientos técnicos para realizar ajustes, lubricaciones, inspecciones y sustituciones.
    p.mb-0 El mantenimiento de los sistemas de dirección y rodaje contribuye a conservar la capacidad de maniobra, la estabilidad y la tracción del tractor agrícola. La realización de inspecciones periódicas permite reconocer condiciones que requieren atención y prevenir fallas que puedan comprometer la operación y la seguridad durante las actividades agropecuarias.
</template>
<script>
export default {
  name: 'Tema4',
  data: () => ({
    // variables de vue
    datosSlyder: [
      {
        titulo: 'Tracción',
        texto:
          'Fuerza que permite al tractor desplazarse y arrastrar implementos mediante la interacción de los neumáticos con el terreno.',
        imagen: '@/assets/curso/temas/t4/img74.png',
        // leyendaImagen: 'Leyenda_de_la_imagen',
      },
      {
        titulo: 'Deslizamiento de las ruedas',
        texto:
          'Ocurre cuando las ruedas motrices giran más de lo que avanzan sobre el suelo. Un deslizamiento excesivo reduce la eficiencia de la tracción y aumenta el consumo de combustible.',
        imagen: '@/assets/curso/temas/t4/img75.png',
        // leyendaImagen: 'Leyenda_de_la_imagen',
      },
      {
        titulo: 'Compactación del suelo',
        texto:
          'Se produce cuando la presión ejercida por las ruedas modifica la estructura del terreno, disminuyendo los espacios porosos y afectando la circulación del agua y el aire.',
        imagen: '@/assets/curso/temas/t4/img76.png',
        // leyendaImagen: 'Leyenda_de_la_imagen',
      },
      {
        titulo: 'Resistencia a la rodadura',
        texto:
          'Fuerza que se opone al desplazamiento de las ruedas debido a la deformación del neumático y del terreno durante el movimiento.',
        imagen: '@/assets/curso/temas/t4/img77.png',
        // leyendaImagen: 'Leyenda_de_la_imagen',
      },
      {
        titulo: 'Distribución de la carga',
        texto:
          'Corresponde a la forma en que el peso del tractor y los implementos se distribuye sobre las ruedas, lo que influye en la presión ejercida sobre el suelo y en la estabilidad de la máquina.',
        imagen: '@/assets/curso/temas/t4/img78.png',
        // leyendaImagen: 'Leyenda_de_la_imagen',
      },
    ],
  }),
}
</script>
<style lang="sass"></style>
