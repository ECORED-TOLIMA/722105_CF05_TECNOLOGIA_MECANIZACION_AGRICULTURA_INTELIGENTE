<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Sistemas auxiliares del motor diésel
    .row.justify-content-center.mb-4
      .col.col-lg-5.col-8.col-md-6.order-lg-2.order-2.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/temas/t3/img01.jpg', alt='')
      .col.col-lg-7.col-12.order-lg-1.order-2
        p.mb-2(data-aos="fade-down") El motor diésel cuenta con diferentes sistemas auxiliares que permiten mantener las condiciones necesarias para su funcionamiento y contribuir a su eficiencia y durabilidad. Estos sistemas cumplen funciones específicas relacionadas con el suministro de aire, la evacuación de los gases de combustión, la lubricación de las piezas móviles, el control de la temperatura y la alimentación de combustible.
        .cajon.cajon.color-secundario.px-4.py-3.mb-0
          p.mb-0 En la maquinaria agrícola, el funcionamiento adecuado de estos sistemas es fundamental, debido a que los motores trabajan bajo diferentes condiciones de carga y durante jornadas prolongadas. Por esta razón, es importante reconocer sus componentes, comprender sus funciones e identificar las condiciones que pueden afectar su desempeño.
    p.mb-0 Se estudiarán los sistemas de admisión de aire, escape, lubricación, refrigeración y alimentación de combustible. También se abordará el proceso de desairado del sistema de alimentación y el análisis de aceite como herramienta predictiva para reconocer posibles condiciones de desgaste o anomalías en el motor.
    separador
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.1 Sistema de admisión de aire
    .row.justify-content-center.mb-4
      .col.col-lg-6.col-8.col-md-6.order-lg-1.order-2.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/temas/t3/img01.jpg', alt='')
      .col.col-lg-6.col-12.order-lg-2.order-2
        .cajon.cajon.color-secundario.px-4.py-3.mb-4
          p.mb-0 El sistema de admisión de aire cumple una función fundamental en el motor diésel, ya que suministra el aire necesario para el proceso de combustión. Su funcionamiento permite que ingrese aire limpio y en la cantidad requerida hacia los cilindros, donde se comprime antes de la inyección del combustible. Una adecuada entrada de aire favorece la combustión y contribuye al rendimiento del motor.
        p.mb-0(data-aos="fade-down") En la maquinaria agrícola, este sistema debe funcionar correctamente, debido a que los motores trabajan en ambientes donde existe presencia frecuente de polvo, tierra, residuos vegetales y otras partículas que pueden ingresar por la toma de aire. Por esta razón, sus componentes cumplen funciones de captación, filtración y conducción del aire hacia el motor.
    p.mb-4 El sistema de admisión está integrado por diferentes componentes que permiten captar el aire del ambiente, retirar las partículas contaminantes y conducirlo hasta los cilindros. Entre los principales se encuentran:
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10.col-12
        p.mb-4 En los tractores y otras máquinas agrícolas, la energía eléctrica se utiliza para alimentar diferentes sistemas y dispositivos. Entre sus principales aplicaciones se encuentran:
        .row.justify-content-center.align-items-center.mb-0(data-aos="flip-up")
          .col-lg-7.col-12.mb-md-0.order-lg-1.order-2.mb-lg-0
            LineaTiempoD.color-acento-botones.especial
              .row(numero="1" titulo="Toma de aire")
                .col-12.mb-4.mb-md-0
                  p.mb-0 Permite captar el aire del ambiente y dirigirlo hacia el sistema de admisión.
              .row(numero="2" titulo="Prefiltro")
                .col-12.mb-4.mb-md-0
                  p.mb-0 Retiene partículas de mayor tamaño, como polvo y residuos, antes de que el aire llegue al filtro principal. Su presencia y diseño dependen del tipo de motor.
              .row(numero="3" titulo="Filtro de aire")
                .col-12.mb-4.mb-md-0
                  p.mb-0 Retiene partículas de polvo y otras impurezas para evitar que ingresen al motor y ocasionen desgaste en sus componentes internos.
              .row(numero="4" titulo="Conductos de admisión")
                .col-12.mb-4.mb-md-0
                  p.mb-0 Permiten transportar el aire filtrado hacia el múltiple de admisión o directamente hacia los cilindros, según el diseño del motor.
              .row(numero="5" titulo="Múltiple de admisión")
                .col-12.mb-4.mb-md-0
                  p.mb-0 Distribuye el aire hacia los diferentes cilindros para facilitar el proceso de combustión.
              .row(numero="6" titulo="Turbocompresor")
                .col-12.mb-4.mb-md-0
                  p.mb-0 En los motores que lo incorporan, aumenta la cantidad de aire que ingresa a los cilindros mediante su compresión, favoreciendo el aprovechamiento del combustible.
          .col-lg-5.order-lg-2.order-1.mb-lg-0.mb-4.d-none.d-lg-block
            figure
              img(src='@/assets/curso/temas/t3/img03.png', alt='')
    .row.justify-content-center.mb-4
      .col.col-lg-10.col-12
        .cajon.cajon.c02.color-primario.p-4.mb-0
          p.mb-0 El proceso comienza con la captación del aire del ambiente a través de la toma de aire. Posteriormente, el aire pasa por los elementos de prefiltrado y filtración, donde se retienen las partículas que podrían afectar el funcionamiento del motor. Una vez limpio, circula por los conductos de admisión hasta llegar al múltiple o a los cilindros.
    p En los motores diésel que cuentan con turbocompresor, el aire filtrado pasa por este dispositivo, donde aumenta su presión antes de ingresar a los cilindros. De esta manera, se incrementa la cantidad de aire disponible para el proceso de combustión.
    p.mb-4 El mantenimiento del sistema de admisión permite conservar el suministro adecuado de aire y prevenir daños ocasionados por la entrada de partículas contaminantes. Entre las actividades generales de revisión se encuentran:
    .row.justify-content-center.align-items-center.mb-4(data-aos="flip-up")
      SlyderF.color-acento-botones(columnas="col-lg-6 col-xl-4")
        .tarjeta.bg01.px-4.py-5
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/t3/img04.svg' alt='AvatarTop')
          h4.text-center Inspección del filtro de aire
          p.text-center Comprobar su estado y realizar la limpieza o sustitución de acuerdo con las indicaciones del fabricante.
        .tarjeta.bg01.px-4.py-5
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/t3/img05.svg' alt='AvatarTop')
          h4.text-center Revisión de conductos y conexiones
          p.text-center Verificar que no existan fisuras, obstrucciones, desprendimientos o uniones defectuosas que permitan la entrada de aire sin filtrar.
        .tarjeta.bg01.px-4.py-5
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/t3/img06.svg' alt='AvatarTop')
          h4.text-center Limpieza del prefiltro
          p.text-center Retirar las partículas acumuladas cuando el diseño del componente lo permita.
        .tarjeta.bg01.px-4.py-5
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/t3/img07.svg' alt='AvatarTop')
          h4.text-center Comprobación del turbocompresor
          p.text-center Revisar visualmente sus conexiones y reconocer posibles fugas o condiciones anormales, cuando el motor cuente con este dispositivo.
        .tarjeta.bg01.px-4.py-5
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/t3/img08.svg' alt='AvatarTop')
          h4.text-center Verificación de los indicadores de restricción
          p.text-center Comprobar las señales que advierten una obstrucción del filtro, si el equipo dispone de este sistema.
    .row.justify-content-center.mb-4
      .col.col-lg-1.col-6.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/t3/img09.svg', alt='')
      .col.col-lg-11.col-12.order-lg-2.order-2
        .cajon.cajon.c03.px-4.py-3
          p.mb-0(data-aos="fade-down") Un filtro de aire obstruido puede restringir el suministro de aire al motor y afectar su rendimiento. Por otra parte, un filtro deteriorado o instalado incorrectamente puede permitir el ingreso de partículas que ocasionan desgaste en los cilindros y otros componentes internos.
    p.mb-0 Por esta razón, las actividades de inspección y mantenimiento deben realizarse de acuerdo con las especificaciones del fabricante y las condiciones de trabajo de la maquinaria. En equipos que operan en ambientes con alta concentración de polvo, es especialmente importante prestar atención al estado del sistema de admisión para conservar el funcionamiento y la vida útil del motor diésel.
    separador
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.2 Sistema de escape
    .row.justify-content-center.mb-4
      .col.col-lg-5.col-8.col-md-6.order-lg-2.order-2.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/temas/t3/img10.jpg', alt='')
      .col.col-lg-7.col-12.order-lg-1.order-2
        p.mb-4(data-aos="fade-down") El sistema de escape tiene como función conducir y evacuar los gases producidos durante la combustión del combustible en el motor diésel. Además, contribuye a reducir el ruido generado por el funcionamiento del motor y, según su diseño, a controlar las emisiones contaminantes antes de liberar los gases al ambiente.
        .cajon.cajon.color-secundario.p-4.mb-0
          p.mb-0 En la maquinaria agrícola, este sistema debe mantenerse en condiciones adecuadas para facilitar la evacuación de los gases y evitar fugas que puedan afectar el funcionamiento del motor o poner en riesgo a las personas. Sus componentes están diseñados para conducir los gases desde los cilindros hasta el exterior, mediante un recorrido que puede incluir dispositivos de tratamiento de emisiones.
    p.mb-4 El sistema de escape está conformado por diferentes elementos que permiten transportar, acondicionar y evacuar los gases de combustión. Entre sus principales componentes se encuentran:
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col-lg-10.col-12
        .titulo-sexto.color-acento-contenido
          h5 Figura 4.
          span Componentes del sistema de escape del motor diésel
      .row.justify-content-center
        .col-10
          figure.desktop
            img(src='@/assets/curso/temas/t3/img11.svg', alt='La figura 4 representa un sistema de escape de un motor diésel e identifica el múltiple de escape, el turbocompresor, las tuberías de escape, el catalizador, el filtro de partículas diésel (DPF), el silenciador y la salida de escape. Las flechas indican el sentido de circulación de los gases.')
      .col-12.mb-0
        figure.movil
          img(src='@/assets/curso/temas/t3/img12.svg', alt='La figura 4 representa un sistema de escape de un motor diésel e identifica el múltiple de escape, el turbocompresor, las tuberías de escape, el catalizador, el filtro de partículas diésel (DPF), el silenciador y la salida de escape. Las flechas indican el sentido de circulación de los gases.')
    .row.justify-content-center.align-items-center.mb-4(data-aos="flip-up")
      SlyderF.color-acento-botones(columnas="col-lg-6 col-xl-4")
        .tarjeta.bg01.px-4.py-5
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/t3/img13.svg' alt='AvatarTop')
          h4.text-center Múltiple de escape
          p.text-center Recoge los gases producidos durante la combustión en los cilindros y los conduce hacia la tubería de escape.
        .tarjeta.bg01.px-4.py-5
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/t3/img14.svg' alt='AvatarTop')
          h4.text-center Tuberías de escape
          p.text-center Transportan los gases desde el múltiple hasta los dispositivos de reducción de ruido y control de emisiones, cuando están presentes.
        .tarjeta.bg01.px-4.py-5
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/t3/img15.svg' alt='AvatarTop')
          h4.text-center Turbocompresor
          p.text-center En los motores que cuentan con este dispositivo, aprovecha la energía de los gases de escape para accionar una turbina conectada a un compresor que aumenta la presión del aire de admisión.
        .tarjeta.bg01.px-4.py-5
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/t3/img16.svg' alt='AvatarTop')
          h4.text-center Silenciador
          p.text-center Reduce el ruido producido por la salida de los gases de combustión.
        .tarjeta.bg01.px-4.py-5
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/t3/img17.svg' alt='AvatarTop')
          h4.text-center Catalizador
          p.text-center En los motores que lo incorporan, contribuye a transformar determinados gases contaminantes en sustancias menos perjudiciales.
        .tarjeta.bg01.px-4.py-5
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/t3/img18.svg' alt='AvatarTop')
          h4.text-center Filtro de partículas diésel (DPF)
          p.text-center Retiene partículas de hollín presentes en los gases de escape y, mediante un proceso de regeneración, permite reducir su acumulación.
        .tarjeta.bg01.px-4.py-5
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/t3/img19.svg' alt='AvatarTop')
          h4.text-center Salida de escape
          p.text-center Conduce los gases hacia el exterior de la maquinaria.
    p.mb-4 El proceso comienza cuando se abre la válvula de escape y los gases generados durante la combustión salen de los cilindros. Estos gases pasan al múltiple de escape, que los reúne y conduce hacia la tubería correspondiente.
    .row.justify-content-center.mb-4
      .col.col-lg-3.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/temas/t3/img20.svg', alt='')
      .col.col-lg-9.col-12.order-lg-2.order-2
        .cajon.cajon.c02.px-4.py-3.mb-3
          p.mb-0 En los motores equipados con turbocompresor, una parte de la energía de los gases se aprovecha para impulsar la turbina del dispositivo. Posteriormente, los gases continúan su recorrido por los demás componentes del sistema, como el silenciador y los dispositivos de tratamiento de emisiones, hasta salir al ambiente.
        p(data-aos="fade-down") El recorrido y los elementos que intervienen pueden variar según el diseño del motor, su tecnología y los sistemas de control de emisiones incorporados por el fabricante.
        p.mb-0 La revisión del sistema de escape permite identificar condiciones que pueden afectar la evacuación de los gases, incrementar el ruido o generar riesgos durante la operación de la maquinaria. Entre las actividades generales de mantenimiento se encuentran:
    .row.justify-content-center.align-items-center.mb-4(data-aos="flip-up")
      .col-lg-6.col-12.mb-md-0.order-lg-1.order-2.mb-lg-0
        LineaTiempoD.color-acento-botones.especial
          .row(numero="1" titulo="Inspección de tuberías y uniones")
            .col-12.mb-4.mb-md-0
              p.mb-0 Comprobar que no presenten fisuras, perforaciones, corrosión o conexiones flojas que ocasionen fugas.
          .row(numero="2" titulo="Revisión del múltiple de escape")
            .col-12.mb-4.mb-md-0
              p.mb-0 Identificar posibles grietas, deformaciones o señales de fugas de gases.
          .row(numero="3" titulo="Verificación del silenciador")
            .col-12.mb-4.mb-md-0
              p.mb-0 Comprobar su estado físico y reconocer daños que puedan disminuir su capacidad para reducir el ruido.
          .row(numero="4" titulo="Revisión de los dispositivos de control de emisiones")
            .col-12.mb-4.mb-md-0
              p.mb-0 Verificar las condiciones de los componentes instalados, como el catalizador y el filtro de partículas diésel, de acuerdo con las indicaciones del fabricante.
          .row(numero="5" titulo="Comprobación de soportes y fijaciones")
            .col-12.mb-4.mb-md-0
              p.mb-0 Verificar que las tuberías y demás componentes estén correctamente sujetos para evitar vibraciones o desprendimientos.
      .col-lg-6.order-lg-2.order-1.mb-lg-0.mb-4.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/t3/img21.jpg', alt='')
    .row.justify-content-center.mb-4
      .col.col-12
        .cajon.cajon.color-secundario.p-4.mb-0
          p.mb-0 Las fugas en el sistema de escape pueden permitir la salida de gases calientes y productos de combustión en lugares no previstos. Además, una obstrucción puede dificultar la evacuación de los gases y afectar el rendimiento del motor. Por ello, las revisiones deben realizarse con el motor apagado y frío, siguiendo las recomendaciones de seguridad y mantenimiento del fabricante.
    p.mb-0 El mantenimiento adecuado del sistema de escape contribuye a conservar el funcionamiento del motor, reducir el ruido, controlar las emisiones y prevenir riesgos asociados con la exposición a los gases de combustión.
    separador
    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.3 Sistema de lubricación
    .row.justify-content-center.align-items-stretch.mb-4.g-0
      .col-lg-7.col-12.order-lg-2.order-2
        .cajon.c01.px-4.py-3.h-100.w-100
          p.mb-4 El sistema de lubricación tiene como función suministrar aceite a las piezas móviles del motor diésel para reducir la fricción y el desgaste que se producen durante su funcionamiento. Además, contribuye a disipar parte del calor generado, retirar partículas e impurezas y proteger las superficies internas contra la corrosión.
          .row.mb-0
            .col-lg-2.d-none.d-lg-block
              figure
                img(src='@/assets/curso/temas/t3/img23.svg', alt='')
            .col.col-10
              p.mb-0(data-aos="fade-down") En la maquinaria agrícola, este sistema es fundamental porque los motores trabajan durante periodos prolongados y pueden estar sometidos a diferentes condiciones de carga y temperatura. Una lubricación adecuada permite conservar las condiciones de funcionamiento de los componentes internos y prolongar la vida útil del motor.
      .col-lg-5.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-4
        figure
          img(src='@/assets/curso/temas/t3/img22.jpg', alt='')
    p.mb-4 El sistema de lubricación está integrado por diferentes componentes que permiten almacenar, impulsar, filtrar y distribuir el aceite hacia las partes del motor que requieren lubricación. Entre los principales se encuentran:
    .row.mb-4
      .col-12
        .px-0.py-0
          .row.align-items-center.bg03(data-aos="fade-down")
            .col-lg-4.d-none.d-lg-block.py-0.px-0
              figure(data-aos="zoom-in")
                img(src="@/assets/curso/temas/t3/img24.png", alt="")
            .col-lg-8.px-0.py-0
              SlyderF.custom.color-acento-botones.px-lg-5.py-0.px-0(columnas="col-lg-6 col-xl-6")
                .tarjeta.tarjeta--slyder.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t3/img25.svg", alt="").img100.m-auto
                  h4.text-center Cárter
                  p.text-center Depósito ubicado en la parte inferior del motor, donde se almacena el aceite lubricante.
                .tarjeta.tarjeta--slyder.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t3/img26.svg", alt="").img100.m-auto
                  h4.text-center Bomba de aceite
                  p.text-center Impulsa el aceite y permite que circule por los conductos del sistema, manteniendo la presión necesaria para su distribución.
                .tarjeta.tarjeta--slyder.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t3/img27.svg", alt="").img100.m-auto
                  h4.text-center Colador de aceite
                  p.text-center Retiene partículas de mayor tamaño antes de que el aceite ingrese a la bomba, contribuyendo a proteger sus componentes.
                .tarjeta.tarjeta--slyder.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t3/img28.svg", alt="").img100.m-auto
                  h4.text-center Filtro de aceite
                  p.text-center Retiene partículas e impurezas presentes en el lubricante para evitar que circulen por el motor y ocasionen desgaste.
                .tarjeta.tarjeta--slyder.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t3/img29.svg", alt="").img100.m-auto
                  h4.text-center Conductos de lubricación
                  p.text-center Permiten transportar y distribuir el aceite hacia los diferentes componentes internos del motor.
                .tarjeta.tarjeta--slyder.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t3/img30.svg", alt="").img100.m-auto
                  h4.text-center Válvula reguladora de presión
                  p.text-center Controla la presión del aceite y evita que supere los valores establecidos para el funcionamiento del sistema.
                .tarjeta.tarjeta--slyder.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t3/img31.svg", alt="").img100.m-auto
                  h4.text-center Enfriador de aceite
                  p.text-center En los motores que lo incorporan, ayuda a controlar la temperatura del lubricante mediante el intercambio de calor.
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col-lg-10.col-12
        .titulo-sexto.color-acento-contenido
          h5 Figura 5.
          span Componentes del sistema de lubricación del motor diésel
      .row.justify-content-center
        .col-10
          figure.desktop
            img(src='@/assets/curso/temas/t3/img32.svg', alt='La figura 5 representa los componentes principales del sistema de lubricación de un motor diésel: cárter, colador de aceite, bomba de aceite, válvula reguladora de presión, filtro de aceite, enfriador de aceite y conductos de lubricación. Las flechas indican el sentido de circulación del aceite desde el cárter hacia los componentes internos del motor.')
      .col-12.mb-0
        figure.movil
          img(src='@/assets/curso/temas/t3/img33.svg', alt='La figura 5 representa los componentes principales del sistema de lubricación de un motor diésel: cárter, colador de aceite, bomba de aceite, válvula reguladora de presión, filtro de aceite, enfriador de aceite y conductos de lubricación. Las flechas indican el sentido de circulación del aceite desde el cárter hacia los componentes internos del motor.')
    .row.justify-content-center.mb-4
      .col.col-lg-5.col-8.col-md-6.order-lg-2.order-2.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/temas/t3/img34.jpg', alt='')
      .col.col-lg-7.col-12.order-lg-1.order-2
        .cajon.cajon.color-secundario.px-4.py-3.mb-2
          p.mb-0 El proceso comienza cuando la bomba succiona el aceite almacenado en el cárter a través del colador. Luego, lo impulsa hacia el filtro, donde se retienen las partículas e impurezas que podrían afectar los componentes internos del motor.
        p.mb-2(data-aos="fade-down") Una vez filtrado, el aceite circula por los conductos de lubricación y llega a las diferentes piezas móviles, como los cojinetes del cigüeñal y los apoyos del árbol de levas. Durante este recorrido, forma una película entre las superficies en movimiento, lo que reduce el contacto directo, la fricción y el desgaste.
        .cajon.cajon.c02.px-4.py-3.mb-0
          p.mb-0 Después de cumplir su función, el aceite retorna al cárter por efecto de la gravedad, donde permanece almacenado hasta que vuelve a ser impulsado por la bomba. Este proceso se repite mientras el motor está en funcionamiento.
    p.mb-4 El mantenimiento del sistema de lubricación permite conservar las condiciones adecuadas del aceite y garantizar su circulación hacia los componentes del motor. Entre las actividades generales de revisión se encuentran:
    .row.mb-4
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/t3/img35.svg' alt='')
          .tarjeta.c03
            .p-4
              h4.text-center Verificación del nivel de aceite
              p.mb-0.text-center Comprobar que se encuentre dentro de los límites indicados por el fabricante, utilizando la varilla de medición o el sistema de control del equipo.
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/t3/img36.svg' alt='')
          .tarjeta.c03
            .p-4
              h4.text-center Revisión del estado del aceite
              p.mb-0.text-center Observar sus condiciones y reconocer posibles señales de contaminación, presencia de agua o cambios anormales.
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/t3/img37.svg' alt='')
          .tarjeta.c03
            .p-4
              h4.text-center Cambio de aceite
              p.mb-0.text-center Realizarlo de acuerdo con los intervalos de mantenimiento y las especificaciones del fabricante.
    .row.mb-4
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/t3/img38.svg' alt='')
          .tarjeta.c03
            .p-4
              h4.text-center Sustitución del filtro
              p.mb-0.text-center Cambiarlo según las recomendaciones técnicas para conservar la capacidad de retención de impurezas.
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/t3/img39.svg' alt='')
          .tarjeta.c03
            .p-4
              h4.text-center Inspección de fugas
              p.mb-0.text-center Revisar el cárter, los conductos, las conexiones y los filtros para identificar pérdidas de lubricante.
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/t3/img40.svg' alt='')
          .tarjeta.c03
            .p-4
              h4.text-center Comprobación de la presión de aceite
              p.mb-0.text-center Verificar que los valores se encuentren dentro del rango establecido para el motor.
    p.mb-4 La falta de aceite, el uso de un lubricante inadecuado o la presencia de contaminantes pueden afectar la formación de la película lubricante y provocar un aumento de la fricción y la temperatura. Estas condiciones pueden ocasionar desgaste prematuro y daños en los componentes internos del motor.
    .row.justify-content-center.mb-0
      .col.col-lg-1.col-6.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/t3/img41.svg', alt='')
      .col.col-lg-11.col-12.order-lg-2.order-2
        p.mb-0(data-aos="fade-down") Por esta razón, es importante utilizar el aceite recomendado por el fabricante y cumplir los intervalos de revisión y cambio establecidos. El mantenimiento adecuado del sistema de lubricación contribuye a proteger las piezas móviles, conservar el rendimiento del motor y prevenir fallas durante la operación de la maquinaria agrícola.
    separador
    #t_3_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.4 Sistema de refrigeración
    .row.justify-content-center.mb-4
      .col.col-lg-5.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/temas/t3/img42.jpg', alt='')
      .col.col-lg-7.col-12.order-lg-2.order-2
        .cajon.cajon.color-secundario.p-4.mb-4
          p.mb-0 El sistema de refrigeración tiene como función mantener la temperatura del motor diésel dentro de los rangos establecidos para su funcionamiento. Durante la combustión se genera una gran cantidad de calor que, si no se controla adecuadamente, puede ocasionar el sobrecalentamiento y afectar componentes como los cilindros, pistones, culata y válvulas.
        p.mb-4(data-aos="fade-down") En la maquinaria agrícola, este sistema es especialmente importante porque los motores suelen trabajar durante jornadas prolongadas y bajo diferentes condiciones de carga y temperatura ambiental. Su funcionamiento permite disipar el exceso de calor y conservar las condiciones térmicas necesarias para el desempeño del motor.
        p.mb-0 Los motores diésel pueden utilizar diferentes métodos para controlar su temperatura, entre los que se encuentran:
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col.col-12
        .tarjeta--container.row
          .col-xl.col-lg-6.tarjeta.tarjeta.c01.p-5
            .row.justify-content-center.mb-3
              .col-lg-7.col-4
                figure(data-aos="fade-up")
                  img(src='@/assets/curso/temas/t3/img43.svg', alt='')(style="width: 85%")
            h4.text-center Refrigeración por aire
            p.mb-0(data-aos="fade-down") Utiliza el aire que circula alrededor del motor para retirar el calor. Algunos motores incorporan aletas de refrigeración que aumentan la superficie de contacto con el aire y facilitan la disipación térmica.
          .col-xl.col-lg-6.tarjeta.tarjeta.c02.p-5
            .row.justify-content-center.mb-3
              .col-lg-7.col-4
                figure(data-aos="fade-up")
                  img(src='@/assets/curso/temas/t3/img44.svg', alt='')(style="width: 85%")
            h4.text-center Refrigeración por líquido
            p.mb-0(data-aos="fade-down") Utiliza un refrigerante que circula por conductos internos del motor y absorbe el calor generado durante la combustión. Posteriormente, el líquido pasa por un radiador, donde libera el calor hacia el ambiente.
    .row.justify-content-center.mb-4
      .col.col-lg-1.col-6.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/t3/img45.svg', alt='')
      .col.col-lg-9.col-12.order-lg-2.order-2
        .cajon.cajon.c01.px-4.py-3
          p.mb-0(data-aos="fade-down") En los tractores agrícolas es frecuente encontrar sistemas de refrigeración por líquido, debido a su capacidad para controlar la temperatura del motor en diferentes condiciones de trabajo.
    p.mb-4 Este sistema está conformado por varios componentes que permiten hacer circular el refrigerante, absorber el calor del motor y disiparlo hacia el ambiente. Entre los principales se encuentran:
    .row.justify-content-center.align-items-center.mb-4(data-aos="flip-up")
      SlyderF.color-acento-botones(columnas="col-lg-6 col-xl-4")
        .tarjeta.bg01.px-4.py-5
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/t3/img46.svg' alt='AvatarTop')
          h4.text-center Radiador
          p.text-center Permite transferir al aire el calor absorbido por el refrigerante durante su circulación por el motor.
        .tarjeta.bg01.px-4.py-5
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/t3/img47.svg' alt='AvatarTop')
          h4.text-center Bomba de agua
          p.text-center Impulsa el refrigerante a través de los conductos del motor y del radiador.
        .tarjeta.bg01.px-4.py-5
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/t3/img48.svg' alt='AvatarTop')
          h4.text-center Termostato
          p.text-center Regula el paso del refrigerante hacia el radiador de acuerdo con la temperatura del motor, facilitando que alcance y mantenga su temperatura de funcionamiento.
        .tarjeta.bg01.px-4.py-5
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/t3/img49.svg' alt='AvatarTop')
          h4.text-center Ventilador
          p.text-center Genera una corriente de aire que atraviesa el radiador para favorecer la disipación del calor.
        .tarjeta.bg01.px-4.py-5
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/t3/img50.svg' alt='AvatarTop')
          h4.text-center Mangueras y conductos
          p.text-center Transportan el refrigerante entre el motor, el radiador y los demás componentes del circuito.
        .tarjeta.bg01.px-4.py-5
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/t3/img51.svg' alt='AvatarTop')
          h4.text-center Depósito de expansión
          p.text-center Permite compensar los cambios de volumen del refrigerante ocasionados por las variaciones de temperatura y facilita la verificación de su nivel.
        .tarjeta.bg01.px-4.py-5
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/t3/img52.svg' alt='AvatarTop')
          h4.text-center Refrigerante
          p.text-center Fluido encargado de absorber y transportar el calor del motor. Generalmente contiene agua y aditivos que ayudan a proteger el sistema contra la corrosión, la congelación y la formación de depósitos.
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col-lg-10.col-12
        .titulo-sexto.color-acento-contenido
          h5 Figura 6.
          span Componentes del sistema de refrigeración del motor diésel
      .row.justify-content-center
        .col-10
          figure.desktop
            img(src='@/assets/curso/temas/t3/img53.svg', alt='La figura 6 representa un sistema de refrigeración por líquido de un motor diésel e identifica el radiador, la bomba de agua, el termostato, el ventilador, las mangueras y conductos, el depósito de expansión y el refrigerante. Las flechas naranjas indican el recorrido del refrigerante caliente hacia el radiador y las azules representan su retorno al motor después de enfriarse.')
      .col-12.mb-0
        figure.movil
          img(src='@/assets/curso/temas/t3/img54.svg', alt='La figura 6 representa un sistema de refrigeración por líquido de un motor diésel e identifica el radiador, la bomba de agua, el termostato, el ventilador, las mangueras y conductos, el depósito de expansión y el refrigerante. Las flechas naranjas indican el recorrido del refrigerante caliente hacia el radiador y las azules representan su retorno al motor después de enfriarse.')
    p.mb-4 El funcionamiento comienza cuando la bomba de agua impulsa el refrigerante a través de los conductos internos del motor. Durante su recorrido, el líquido absorbe parte del calor generado por la combustión y por el movimiento de los componentes internos.
    .row.justify-content-center.mb-4
      .col.col-12
        .cajon.cajon.color-secundario.p-4.mb-0
          p.mb-0 Cuando el motor alcanza la temperatura establecida, el termostato permite el paso del refrigerante caliente hacia el radiador. Allí, el líquido circula por conductos y superficies de intercambio térmico que facilitan la transferencia del calor al aire. El ventilador contribuye a mantener el flujo de aire a través del radiador, especialmente cuando la maquinaria trabaja a bajas velocidades o permanece detenida.
    p Una vez que disminuye su temperatura, el refrigerante retorna al motor para continuar el ciclo. Este proceso se repite mientras el motor está en funcionamiento y permite mantener la temperatura dentro de los rangos establecidos por el fabricante.
    p.mb-4 El mantenimiento del sistema de refrigeración permite prevenir el sobrecalentamiento y conservar las condiciones adecuadas de funcionamiento del motor. Entre las actividades generales de revisión se encuentran:
    .row.mb-4
      .col-12
        .px-0.py-0
          .row.align-items-center.bg03(data-aos="fade-down")
            .col-lg-4.d-none.d-lg-block.py-0.px-0
              figure(data-aos="zoom-in")
                img(src="@/assets/curso/temas/t3/img56.png", alt="")
            .col-lg-8.px-0.py-0
              SlyderF.custom.color-acento-botones.px-lg-5.py-0.px-0(columnas="col-lg-6 col-xl-6")
                .tarjeta.tarjeta--slyder.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t3/img57.svg", alt="").img100.m-auto
                  h4.text-center Verificación del nivel de refrigerante
                  p.text-center Comprobar que se encuentre dentro de los límites indicados por el fabricante y realizar el ajuste cuando sea necesario.
                .tarjeta.tarjeta--slyder.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t3/img58.svg", alt="").img100.m-auto
                  h4.text-center Inspección del radiador
                  p.text-center Revisar que no presente fugas, obstrucciones o acumulación de residuos que dificulten el paso del aire.
                .tarjeta.tarjeta--slyder.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t3/img59.svg", alt="").img100.m-auto
                  h4.text-center Revisión de mangueras y conexiones
                  p.text-center Identificar grietas, deterioro, deformaciones o fugas de refrigerante.
                .tarjeta.tarjeta--slyder.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t3/img60.svg", alt="").img100.m-auto
                  h4.text-center Comprobación del ventilador:
                  p.text-center Verificar el estado de sus aspas y el funcionamiento de su mecanismo de accionamiento.
                .tarjeta.tarjeta--slyder.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t3/img61.svg", alt="").img100.m-auto
                  h4.text-center Revisión de la bomba de agua
                  p.text-center Identificar posibles fugas, ruidos anormales o señales de deterioro.
                .tarjeta.tarjeta--slyder.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t3/img62.svg", alt="").img100.m-auto
                  h4.text-center Verificación del termostato
                  p.text-center Comprobar que regule adecuadamente la circulación del refrigerante, de acuerdo con las especificaciones técnicas.
                .tarjeta.tarjeta--slyder.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t3/img63.svg", alt="").img100.m-auto
                  h4.text-center Control del estado del refrigerante
                  p.text-center Revisar sus condiciones y realizar el cambio según los intervalos y las recomendaciones del fabricante.
    .row.justify-content-center.align-items-center.mb-4
      .col.col-lg-1.col-6.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/t3/img55.svg', alt='')
      .col.col-lg-9.col-12.order-lg-2.order-2
        p.mb-0(data-aos="fade-down") La falta de refrigerante, las obstrucciones en el radiador, las fugas o las fallas en la bomba de agua y el termostato pueden provocar un aumento excesivo de la temperatura del motor. Esta condición puede ocasionar daños en la junta de culata, deformaciones y deterioro de otros componentes internos.
    .row.justify-content-center.mb-4
      .col-lg-10.col-12
        p.mb-0 Por esta razón, las revisiones deben realizarse de manera periódica y siguiendo las indicaciones del fabricante. También es importante evitar abrir el radiador o el depósito presurizado cuando el motor está caliente, debido al riesgo de quemaduras por la salida de vapor o líquido a alta temperatura.
    .row.justify-content-center.mb-4
      .col.col-12
        .cajon.cajon.color-secundario.p-4.mb-0
          p.mb-0 El mantenimiento adecuado del sistema de refrigeración contribuye a conservar la temperatura de funcionamiento del motor, prevenir daños por sobrecalentamiento y prolongar la vida útil de la maquinaria agrícola.
    separador
    #t_3_5.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.5 Sistema de alimentación de combustible
    .bloque-texto-g.bl01.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/temas/t2/img64.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0(data-aos="fade-down") El sistema de alimentación de combustible tiene como función suministrar el diésel al motor en las condiciones de presión, cantidad y oportunidad requeridas para el proceso de combustión. Su funcionamiento permite almacenar el combustible, filtrarlo y conducirlo hasta los inyectores, que se encargan de introducirlo en los cilindros en forma pulverizada.
        br
        br
        p.mb-0 En la maquinaria agrícola, este sistema es fundamental para garantizar el funcionamiento del motor y responder a las diferentes condiciones de carga durante las labores del campo. La calidad del combustible y el estado de sus componentes influyen en el rendimiento, el consumo y la vida útil del motor.
    p.mb-4 El sistema está conformado por diferentes elementos que permiten almacenar, transportar, filtrar y suministrar el combustible al motor. Entre los principales se encuentran:
    .row.mb-4
      .col-lg-6
        .tarjeta-avatar-b.mb-4
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/t3/img65.svg' alt='AvatarTop')
          .tarjeta.tarjeta.c03
            .p-4
              h4 Tanque de combustible
              p Almacena el diésel necesario para el funcionamiento del motor.
      .col-lg-6
        .tarjeta-avatar-b.mb-4
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/t3/img66.svg' alt='AvatarTop')
          .tarjeta.tarjeta.c03
            .p-4
              h4 Bomba de alimentación
              p Transporta el combustible desde el tanque hacia los filtros y el sistema de inyección, según el diseño del motor.
      .col-lg-6
        .tarjeta-avatar-b.mb-4
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/t3/img67.svg' alt='AvatarTop')
          .tarjeta.tarjeta.c03
            .p-4
              h4 Prefiltro o separador de agua
              p Retiene partículas de mayor tamaño y separa el agua que puede estar presente en el combustible, protegiendo los componentes posteriores.
      .col-lg-6
        .tarjeta-avatar-b.mb-4
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/t3/img68.svg' alt='AvatarTop')
          .tarjeta.tarjeta.c03
            .p-4
              h4 Filtro de combustible
              p Retiene impurezas de menor tamaño que podrían obstruir o deteriorar los componentes del sistema de inyección.
              br
      .col-lg-6
        .tarjeta-avatar-b.mb-4
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/t3/img69.svg' alt='AvatarTop')
          .tarjeta.tarjeta.c03
            .p-4
              h4 Bomba de inyección o sistema de alta presión
              p Suministra el combustible a la presión requerida para su posterior distribución hacia los inyectores. Su configuración depende del tipo de sistema de inyección.
      .col-lg-6
        .tarjeta-avatar-b.mb-4
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/t3/img70.svg' alt='AvatarTop')
          .tarjeta.tarjeta.c03
            .p-4
              h4 Inyectores
              p Introducen el combustible en los cilindros mediante una pulverización que facilita su mezcla con el aire comprimido y favorece la combustión.
      .col-lg-6
        .tarjeta-avatar-b.mb-4
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/t3/img71.svg' alt='AvatarTop')
          .tarjeta.tarjeta.c03
            .p-4
              h4 Tuberías de combustible
              p Conducen el diésel entre los diferentes componentes del sistema. En los sistemas de alta presión deben soportar las presiones de trabajo establecidas por el fabricante.
      .col-lg-6
        .tarjeta-avatar-b.mb-4
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/t3/img72.svg' alt='AvatarTop')
          .tarjeta.tarjeta.c03
            .p-4
              h4 Líneas de retorno
              p Permiten devolver al tanque el combustible sobrante, de acuerdo con el diseño del sistema.
              br
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col-lg-10.col-12
        .titulo-sexto.color-acento-contenido
          h5 Figura 7.
          span Componentes del sistema de alimentación de combustible del motor diésel
      .row.justify-content-center
        .col-10
          figure.desktop
            img(src='@/assets/curso/temas/t3/img73.svg', alt='La figura 7 representa un sistema de refrigeración por líquido de un motor diésel e identifica el radiador, la bomba de agua, el termostato, el ventilador, las mangueras y conductos, el depósito de expansión y el refrigerante. Las flechas naranjas indican el recorrido del refrigerante caliente hacia el radiador y las azules representan su retorno al motor después de enfriarse.')
      .col-12.mb-0
        figure.movil
          img(src='@/assets/curso/temas/t3/img74.svg', alt='La figura 7 representa un sistema de refrigeración por líquido de un motor diésel e identifica el radiador, la bomba de agua, el termostato, el ventilador, las mangueras y conductos, el depósito de expansión y el refrigerante. Las flechas naranjas indican el recorrido del refrigerante caliente hacia el radiador y las azules representan su retorno al motor después de enfriarse.')
    p.mb-4 El proceso comienza cuando el combustible almacenado en el tanque es conducido por la bomba de alimentación hacia los elementos de filtración. Durante este recorrido, el prefiltro o separador de agua retiene partículas de mayor tamaño y ayuda a retirar el agua presente en el diésel. Posteriormente, el combustible pasa por el filtro, donde se eliminan otras impurezas que podrían afectar el funcionamiento del sistema de inyección.
    .row.justify-content-center.mb-4
      .col.col-lg-4.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/temas/t3/img75.jpg', alt='')
      .col.col-lg-8.col-12.order-lg-2.order-2
        p.mb-4(data-aos="fade-down") Una vez filtrado, el combustible llega a la bomba de inyección o al sistema de alta presión, que lo suministra a los inyectores en las condiciones requeridas por el motor. Los inyectores pulverizan el diésel dentro de los cilindros, donde se mezcla con el aire comprimido y se produce la combustión.
        .cajon.cajon.c06.p-4.mb-0
          p.mb-0 El combustible que no es utilizado puede regresar al tanque mediante las líneas de retorno, según la configuración del sistema. Este proceso permite mantener el suministro de diésel y garantizar las condiciones necesarias para el funcionamiento del motor.
    p.mb-4 El mantenimiento de este sistema permite conservar la calidad del combustible y prevenir fallas relacionadas con la obstrucción, contaminación o deterioro de sus componentes. Entre las actividades generales de revisión se encuentran:
    .row.justify-content-center.align-items-center.mb-4(data-aos="flip-up")
      .col-lg-6.col-12.mb-md-0.order-lg-1.order-2.mb-lg-0
        LineaTiempoD.color-acento-botones.especial
          .row(numero="1" titulo="Inspección del tanque")
            .col-12.mb-4.mb-md-0
              p.mb-0 Comprobar que no presente fugas, acumulación de sedimentos o presencia de agua.
          .row(numero="2" titulo="Revisión del prefiltro o separador de agua")
            .col-12.mb-4.mb-md-0
              p.mb-0 Verificar su estado y realizar la purga cuando el diseño del componente lo permita, siguiendo las indicaciones del fabricante.
          .row(numero="3" titulo="Sustitución de los filtros")
            .col-12.mb-4.mb-md-0
              p.mb-0 Realizar el cambio de acuerdo con los intervalos establecidos y utilizar los elementos recomendados para el motor.
          .row(numero="4" titulo="Inspección de tuberías y conexiones")
            .col-12.mb-4.mb-md-0
              p.mb-0 Identificar fugas, fisuras, deterioro o uniones defectuosas.
          .row(numero="5" titulo="Verificación de la bomba de alimentación")
            .col-12.mb-4.mb-md-0
              p.mb-0 Reconocer posibles fugas o alteraciones en el suministro de combustible.
          .row(numero="6" titulo="Revisión del sistema de inyección")
            .col-12.mb-4.mb-md-0
              p.mb-0 Atender las señales de funcionamiento irregular y realizar las comprobaciones técnicas correspondientes mediante personal capacitado.
      .col-lg-6.order-lg-2.order-1.mb-lg-0.mb-4.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/t3/img76.jpg', alt='')
    .row.justify-content-center.align-items-center.mb-4
      .col.col-lg-1.col-6.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/t3/img77.svg', alt='')
      .col.col-lg-9.col-12.order-lg-2.order-2
        .cajon.cajon.c01.px-4.py-2
          p.mb-0(data-aos="fade-down") La presencia de agua o partículas contaminantes en el combustible puede ocasionar obstrucciones, corrosión y desgaste en los componentes del sistema de inyección. Asimismo, los filtros saturados o las fugas en las conexiones pueden afectar el suministro de diésel y provocar dificultades en el funcionamiento del motor.
    p.mb-0 Por esta razón, es importante utilizar combustible de calidad, mantener limpios los elementos de almacenamiento y cumplir los intervalos de mantenimiento recomendados por el fabricante. Estas acciones contribuyen a conservar el rendimiento del motor, prevenir fallas y prolongar la vida útil de la maquinaria agrícola.
    separador
    #t_3_6.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.6 Proceso de desairado del sistema de alimentación de combustible
    p.mb-4 El desairado es el procedimiento mediante el cual se elimina el aire que puede ingresar al sistema de alimentación de combustible del motor diésel. Su presencia en las tuberías, filtros o conductos puede interrumpir el suministro de combustible, afectar la presión necesaria para la inyección y ocasionar dificultades de arranque o funcionamiento irregular del motor.
    .bloque-texto-g.bl01.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/temas/t3/img78.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0(data-aos="fade-down") Este procedimiento puede ser necesario después de realizar actividades de mantenimiento, como el cambio de filtros, la reparación de tuberías o el vaciado del tanque de combustible, así como cuando el sistema se queda sin diésel. El desairado permite restablecer el suministro continuo de combustible y favorecer el funcionamiento del motor. Su realización debe seguir las instrucciones del fabricante, ya que puede variar según el tipo de sistema de inyección.
    p.mb-4 En los sistemas que cuentan con dispositivos de purga y bomba manual de alimentación, el proceso general puede comprender las siguientes actividades:
    .row.justify-content-center
      .col-lg-10.col-12
        PasosA.color-acento-contenido.mb-4(tipo="n")
          .row.justify-content-center
            .col-lg-6.order-lg-1.order-2(data-aos="fade-right")
              h4 Verificar las condiciones iniciales
              p.mb-0 Comprobar que exista suficiente combustible en el tanque e identificar los puntos de purga establecidos por el fabricante.
            .col-lg-6.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
              img(src='@/assets/curso/temas/t3/img79.jpg', alt="")
          .row.justify-content-center
            .col-lg-6.col-8.mb-lg-0.mb-4(data-aos="fade-right")
              img(src='@/assets/curso/temas/t3/img80.jpg', alt="")
            .col-lg-6(data-aos="fade-left")
              h4 Identificar los elementos de purga
              p.mb-0 Localizar los tornillos o dispositivos destinados a liberar el aire, que pueden estar ubicados en el prefiltro, el filtro de combustible o la bomba de alimentación.
          .row.justify-content-center
            .col-lg-6.order-lg-1.order-2(data-aos="fade-right")
              h4 Accionar la bomba manual
              p.mb-0 Cuando el sistema dispone de ella, utilizarla de acuerdo con las indicaciones del fabricante para impulsar el combustible y facilitar la salida del aire.
            .col-lg-6.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
              img(src='@/assets/curso/temas/t3/img81.jpg', alt="")
          .row.justify-content-center
            .col-lg-6.col-8.mb-lg-0.mb-4(data-aos="fade-right")
              img(src='@/assets/curso/temas/t3/img82.jpg', alt="")
            .col-lg-6(data-aos="fade-left")
              h4 Comprobar la salida de combustible
              p.mb-0 Verificar que el combustible salga sin burbujas de aire por los puntos de purga. Después, cerrar los dispositivos siguiendo el procedimiento indicado.
          .row.justify-content-center
            .col-lg-6.order-lg-1.order-2(data-aos="fade-right")
              h4 Verificar el funcionamiento
              p.mb-0 Comprobar que no existan fugas y realizar el arranque del motor cuando el procedimiento haya finalizado correctamente.
            .col-lg-6.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
              img(src='@/assets/curso/temas/t3/img83.jpg', alt="")
    p Es importante tener en cuenta que no todos los motores requieren una purga manual. Algunos sistemas incorporan mecanismos automáticos de desaireación o procedimientos específicos que deben respetarse.
    p.mb-4 Durante el proceso de desairado es necesario considerar las siguientes recomendaciones:
    .row.mb-4
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/t3/img84.svg' alt='')
          .tarjeta.c03
            .p-4
              h4.text-center Consultar el manual del fabricante
              p.mb-0.text-center Identificar el procedimiento correspondiente al motor y al sistema de inyección.
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/t3/img85.svg' alt='')
          .tarjeta.c03
            .p-4
              h4.text-center Mantener la limpieza
              p.mb-0.text-center Evitar que ingresen polvo, agua u otras partículas al circuito de combustible.
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/t3/img86.svg' alt='')
          .tarjeta.c03
            .p-4
              h4.text-center Utilizar elementos de protección personal
              p.mb-0.text-center Emplear guantes y protección ocular para evitar el contacto con el diésel.
    .row.mb-4
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/t3/img87.svg' alt='')
          .tarjeta.c03
            .p-4
              h4.text-center Evitar fuentes de ignición
              p.mb-0.text-center Mantener el combustible alejado de llamas, chispas y superficies calientes.
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/t3/img88.svg' alt='')
          .tarjeta.c03
            .p-4
              h4.text-center Prevenir fugas
              p.mb-0.text-center Comprobar que las conexiones y los dispositivos de purga queden correctamente cerrados.
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/t3/img89.svg' alt='')
          .tarjeta.c03
            .p-4
              h4.text-center No aflojar tuberías de alta presión
              p.mb-0.text-center Especialmente en sistemas Common Rail, debido a las presiones elevadas que pueden provocar lesiones graves.
    p.mb-0 El desairado adecuado contribuye a restablecer el suministro de combustible y favorecer el arranque y funcionamiento del motor diésel. Por ello, es importante reconocer cuándo se requiere este procedimiento y realizarlo de acuerdo con las especificaciones técnicas y las medidas de seguridad establecidas por el fabricante.
    separador
    #t_3_7.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.7 Análisis de aceite como herramienta predictiva
    .row.justify-content-center.align-items-stretch.mb-4.g-0
      .col-lg-8.col-12.order-lg-1.order-2
        .cajon.c01.px-4.py-3.h-100.w-100
          p El análisis de aceite es una técnica de mantenimiento predictivo que permite evaluar las condiciones del lubricante y obtener información sobre el estado interno del motor diésel. Mediante el estudio de sus propiedades y de las sustancias presentes en la muestra, es posible identificar señales de desgaste, contaminación o alteraciones que pueden afectar el funcionamiento de sus componentes.
          p.mb-0(data-aos="fade-down") En la maquinaria agrícola, esta herramienta resulta importante porque permite reconocer posibles problemas antes de que se conviertan en fallas que ocasionen daños mayores o interrupciones en las actividades productivas. Además, facilita la toma de decisiones relacionadas con el mantenimiento, al proporcionar información sobre las condiciones del aceite y los posibles cambios que presenta durante su utilización.
      .col-lg-4.col-8.col-md-6.order-lg-2.order-1.mb-lg-0.mb-4
        figure
          img(src='@/assets/curso/temas/t3/img90.jpg', alt='')
    .row.justify-content-center.mb-4
      .col-lg-10.col-12
        p.mb-0 El análisis de aceite permite obtener información útil para evaluar el estado del lubricante y las condiciones de funcionamiento del motor. Entre sus principales objetivos se encuentran:
    .row.justify-content-center.align-items-center.mb-4(data-aos="flip-up")
      SlyderF.color-acento-botones(columnas="col-lg-6 col-xl-4")
        .tarjeta.bg01.px-4.py-5
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/t3/img91.svg' alt='AvatarTop')
          h4.text-center Detectar desgaste
          p.text-center Identificar partículas metálicas que pueden indicar fricción o deterioro de los componentes internos.
        .tarjeta.bg01.px-4.py-5
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/t3/img92.svg' alt='AvatarTop')
          h4.text-center Reconocer contaminación
          p.text-center Identificar la presencia de agua, combustible, polvo u otras sustancias que alteren las propiedades del lubricante.
        .tarjeta.bg01.px-4.py-5
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/t3/img93.svg' alt='AvatarTop')
          h4.text-center Evaluar el estado del aceite
          p.text-center Determinar si conserva características adecuadas para cumplir su función de lubricación.
        .tarjeta.bg01.px-4.py-5
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/t3/img94.svg' alt='AvatarTop')
          h4.text-center Anticipar posibles fallas
          p.text-center Reconocer cambios anormales que pueden advertir sobre problemas en el motor.
        .tarjeta.bg01.px-4.py-5
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/t3/img95.svg' alt='AvatarTop')
          h4.text-center Orientar el mantenimiento
          p.text-center Proporcionar información para programar revisiones, reparaciones o cambios de aceite.
    .row.justify-content-center.mb-4
      .col-lg-10.col-12
        p.mb-4 El análisis de laboratorio puede evaluar diferentes características del lubricante y elementos presentes en la muestra. Entre los parámetros más comunes se encuentran:
        .row.justify-content-center.align-items-center.mb-4(data-aos="flip-up")
          .col-lg-7.col-12.mb-md-0.order-lg-1.order-2.mb-lg-0
            LineaTiempoD.color-acento-botones.especial
              .row(numero="1" titulo="Viscosidad")
                .col-12.mb-4.mb-md-0
                  p.mb-0 Permite determinar la resistencia del aceite a fluir y verificar si conserva las características requeridas para lubricar los componentes.
              .row(numero="2" titulo="Número de acidez (TAN)")
                .col-12.mb-4.mb-md-0
                  p.mb-0 Indica el nivel de acidez del lubricante y permite identificar cambios asociados con su deterioro.
              .row(numero="3" titulo="Presencia de partículas metálicas")
                .col-12.mb-4.mb-md-0
                  p.mb-0 Permite reconocer elementos como hierro, cobre o aluminio, cuya concentración puede aportar información sobre el desgaste de diferentes componentes.
              .row(numero="4" titulo="Contenido de agua")
                .col-12.mb-4.mb-md-0
                  p.mb-0 Permite detectar contaminación por humedad o ingreso de refrigerante, que puede afectar la lubricación y favorecer la corrosión.
              .row(numero="5" titulo="Dilución por combustible")
                .col-12.mb-4.mb-md-0
                  p.mb-0 Identifica la presencia de diésel en el aceite, condición que puede disminuir su viscosidad y afectar su capacidad lubricante.
              .row(numero="6" titulo="Presencia de contaminantes")
                .col-12.mb-4.mb-md-0
                  p.mb-0 Permite reconocer partículas de polvo, residuos y otras sustancias que pueden ingresar al sistema de lubricación.
          .col-lg-5.order-lg-2.order-1.mb-lg-0.mb-4.d-none.d-lg-block
            figure
              img(src='@/assets/curso/temas/t3/img96.png', alt='')
        p.mb-0 El análisis de aceite comprende varias etapas que permiten obtener e interpretar información sobre las condiciones del lubricante:
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col.col-12
        .tarjeta--container.row
          .col-xl.col-lg-6.tarjeta.tarjeta.c01.p-5
            .row.justify-content-center.mb-3
              .col-lg-7.col-4
                figure(data-aos="fade-up")
                  img(src='@/assets/curso/temas/t3/img97.svg', alt='')(style="width: 90%")
            h4.text-center Toma de muestra
            p Se recoge una cantidad representativa de aceite siguiendo las indicaciones del fabricante y del laboratorio. Es importante utilizar recipientes limpios para evitar contaminaciones externas.
          .col-xl.col-lg-6.tarjeta.tarjeta.c02.p-5
            .row.justify-content-center.mb-3
              .col-lg-7.col-4
                figure(data-aos="fade-up")
                  img(src='@/assets/curso/temas/t3/img98.svg', alt='')(style="width: 90%")
            h4.text-center Análisis de laboratorio
            p Se evalúan las propiedades fisicoquímicas del lubricante y la presencia de partículas, agua u otros contaminantes.
          .col-xl.col-lg-6.tarjeta.tarjeta.c04.p-5
            .row.justify-content-center.mb-3
              .col-lg-7.col-4
                figure(data-aos="fade-up")
                  img(src='@/assets/curso/temas/t3/img99.svg', alt='')(style="width: 90%")
            h4.text-center Interpretación de resultados 
            p Se comparan los valores obtenidos con los rangos de referencia, las especificaciones del fabricante y los resultados de análisis anteriores, cuando están disponibles.
          .col-xl.col-lg-6.tarjeta.tarjeta.c05.p-5
            .row.justify-content-center.mb-3
              .col-lg-7.col-4
                figure(data-aos="fade-up")
                  img(src='@/assets/curso/temas/t3/img100.svg', alt='')(style="width: 90%")
            h4.text-center Toma de decisiones
            p Con base en los resultados, se determinan las acciones de mantenimiento necesarias, como continuar el seguimiento, revisar un componente, realizar una reparación o cambiar el lubricante.
    p.mb-4 El análisis de aceite proporciona información que permite conocer las condiciones del motor sin necesidad de desmontar sus componentes internos. Su aplicación periódica facilita el seguimiento del desgaste, la detección de contaminantes y la identificación de cambios en las propiedades del lubricante.
    .row.justify-content-center.align-items-center.mb-4
      .col.col-lg-1.col-6.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/t3/img101.svg', alt='')
      .col.col-lg-11.col-12.order-lg-2.order-2
        .cajon.cajon.c01.px-4.py-1
          p.mb-0(data-aos="fade-down") Los resultados deben interpretarse considerando el tipo de motor, las condiciones de operación, el tiempo de uso del aceite y las recomendaciones del fabricante. Un resultado aislado no siempre confirma una falla, por lo que es conveniente comparar los análisis realizados durante diferentes periodos para reconocer tendencias y variaciones.
    p.mb-0 De esta manera, el análisis de aceite se convierte en una herramienta de apoyo para la planificación del mantenimiento predictivo, ya que permite tomar decisiones oportunas, prevenir daños mayores y contribuir a la confiabilidad y vida útil de la maquinaria agrícola.
</template>
<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
}
</script>
<style lang="sass"></style>
