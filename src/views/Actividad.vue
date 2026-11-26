<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      // Para cuestionario usar: <ActividadController :cuestionario="cuestionario"/>
      // Para parrafo usar: <ActividadController :parrafo="parrafo"/>
      #Actividad                
      <ActividadController :cuestionario="cuestionario"/>
  </template>
<script>
import ActividadController from '@ecored-sena/boulder-kit/plugin/components/actividad/ActividadController.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Microcontroladores y sensores',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> comprobar la comprensión de los fundamentos de electrotecnia e hidráulica, los sistemas auxiliares del motor diésel, los sistemas del tractor agrícola y las medidas de seguridad y salud en el trabajo aplicadas al mantenimiento de maquinaria agrícola.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO.',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es la función principal de un circuito eléctrico en la maquinaria agrícola?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Transmitir energía eléctrica para alimentar diferentes dispositivos.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Almacenar combustible para el funcionamiento del motor.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Regular la presión del aceite hidráulico.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Reducir la temperatura del motor diésel.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia una adecuada comprensión de los fundamentos de electrotecnia e hidráulica, el funcionamiento de los sistemas auxiliares del motor diésel y los principales sistemas del tractor agrícola.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 2,
          texto:
            'Un circuito tiene un voltaje de 12 V y una resistencia de 6 Ω. Según la ley de Ohm, ¿cuál es la corriente eléctrica?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '0,5 A',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: '2 A',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: '6 A',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: '18 A',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia una adecuada comprensión de los fundamentos de electrotecnia e hidráulica, el funcionamiento de los sistemas auxiliares del motor diésel y los principales sistemas del tractor agrícola.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 3,
          texto:
            '¿Cuál de los siguientes instrumentos permite medir voltaje, corriente y resistencia?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Manómetro.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Termómetro.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Multímetro.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Tacómetro.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia una adecuada comprensión de los fundamentos de electrotecnia e hidráulica, el funcionamiento de los sistemas auxiliares del motor diésel y los principales sistemas del tractor agrícola.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 4,
          texto:
            '¿Qué característica identifica a una fuente de corriente continua?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La corriente cambia periódicamente de sentido.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La corriente mantiene un sentido de circulación.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'La energía se transmite exclusivamente mediante fluidos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'La corriente depende únicamente de la presión atmosférica.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia una adecuada comprensión de los fundamentos de electrotecnia e hidráulica, el funcionamiento de los sistemas auxiliares del motor diésel y los principales sistemas del tractor agrícola.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 5,
          texto:
            '¿Cuál es una medida de prevención frente a los riesgos eléctricos durante el mantenimiento?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Manipular conexiones con las manos húmedas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Utilizar cables deteriorados si el equipo funciona.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Verificar las condiciones del circuito y aislar la energía cuando corresponda.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Realizar mediciones de resistencia con el circuito energizado.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia una adecuada comprensión de los fundamentos de electrotecnia e hidráulica, el funcionamiento de los sistemas auxiliares del motor diésel y los principales sistemas del tractor agrícola.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 6,
          texto:
            '¿Qué principio explica que la presión aplicada a un fluido confinado se transmite en todas las direcciones?',
          imagen: '@/assets/actividad/imagen6.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Principio de Arquímedes.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Principio de inercia.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Ley de Ohm.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Principio de Pascal.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia una adecuada comprensión de los fundamentos de electrotecnia e hidráulica, el funcionamiento de los sistemas auxiliares del motor diésel y los principales sistemas del tractor agrícola.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 7,
          texto:
            '¿Qué propiedad permite que un fluido ejerza una fuerza sobre una superficie debido a la presión?',
          imagen: '@/assets/actividad/imagen7.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Su capacidad de transmitir presión.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Su capacidad de producir electricidad.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Su capacidad de generar combustión.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Su capacidad de reducir el peso de los componentes.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia una adecuada comprensión de los fundamentos de electrotecnia e hidráulica, el funcionamiento de los sistemas auxiliares del motor diésel y los principales sistemas del tractor agrícola.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 8,
          texto: '¿Cuál es la equivalencia aproximada de 1 bar?',
          imagen: '@/assets/actividad/imagen8.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '10 kPa',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: '100 kPa',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: '1.000 kPa',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: '10.000 kPa',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia una adecuada comprensión de los fundamentos de electrotecnia e hidráulica, el funcionamiento de los sistemas auxiliares del motor diésel y los principales sistemas del tractor agrícola.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 9,
          texto:
            '¿Cuál es la función principal del sistema de admisión de aire del motor diésel?',
          imagen: '@/assets/actividad/imagen9.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Suministrar aire limpio para el proceso de combustión.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Expulsar los gases de combustión al exterior.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Distribuir el aceite entre las piezas móviles.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Regular la temperatura del refrigerante.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia una adecuada comprensión de los fundamentos de electrotecnia e hidráulica, el funcionamiento de los sistemas auxiliares del motor diésel y los principales sistemas del tractor agrícola.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 10,
          texto:
            '¿Qué componente del sistema de lubricación impulsa el aceite hacia los conductos del motor?',
          imagen: '@/assets/actividad/imagen10.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El radiador.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'El inyector.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'El silenciador.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La bomba de aceite.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Ha superado la actividad y demuestra sólidos conocimientos sobre el componente formativo.',
          mensaje_incorrecto:
            'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
        },
        {
          id: 11,
          texto:
            '¿Cuál es el propósito principal del sistema de refrigeración del motor diésel?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Aumentar la presión del combustible.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Mantener la temperatura del motor dentro de condiciones adecuadas de funcionamiento.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Incrementar la velocidad de desplazamiento del tractor.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Eliminar las partículas del aceite mediante combustión.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia una adecuada comprensión de los fundamentos de electrotecnia e hidráulica, el funcionamiento de los sistemas auxiliares del motor diésel y los principales sistemas del tractor agrícola.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 12,
          texto:
            '¿En qué consiste el proceso de desairado del sistema de alimentación de combustible?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Retirar los gases de escape del cilindro.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Aumentar la cantidad de aceite del motor.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Eliminar el aire presente en las tuberías y conductos del sistema.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Reducir la presión de los neumáticos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia una adecuada comprensión de los fundamentos de electrotecnia e hidráulica, el funcionamiento de los sistemas auxiliares del motor diésel y los principales sistemas del tractor agrícola.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 13,
          texto:
            '¿Para qué se utiliza el análisis de aceite como herramienta predictiva?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Para determinar la velocidad máxima del tractor.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Para detectar desgaste, contaminación o alteraciones en el lubricante.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Para medir la presión de inflado de los neumáticos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Para calcular la capacidad del tanque de combustible.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia una adecuada comprensión de los fundamentos de electrotecnia e hidráulica, el funcionamiento de los sistemas auxiliares del motor diésel y los principales sistemas del tractor agrícola.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 14,
          texto:
            '¿Cuál es la función del sistema de transmisión del tractor agrícola?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Transmitir la potencia del motor hacia las ruedas y otros mecanismos.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Filtrar el aire que ingresa al motor.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Controlar la composición del aceite lubricante.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Regular la cantidad de refrigerante del radiador.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia una adecuada comprensión de los fundamentos de electrotecnia e hidráulica, el funcionamiento de los sistemas auxiliares del motor diésel y los principales sistemas del tractor agrícola.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 15,
          texto:
            '¿Qué componente del sistema hidráulico transforma la energía del fluido en movimiento lineal?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El filtro hidráulico.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'El depósito hidráulico.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'El cilindro hidráulico.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'La tubería hidráulica.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia una adecuada comprensión de los fundamentos de electrotecnia e hidráulica, el funcionamiento de los sistemas auxiliares del motor diésel y los principales sistemas del tractor agrícola.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 16,
          texto:
            '¿Qué factor debe considerarse al determinar la presión de inflado de los neumáticos de un tractor?',
          imagen: '@/assets/actividad/imagen6.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Únicamente el color de la banda de rodadura.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'El nivel de combustible del tanque.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Solamente la antigüedad del tractor.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'La carga soportada, el tipo de neumático y las condiciones de operación.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia una adecuada comprensión de los fundamentos de electrotecnia e hidráulica, el funcionamiento de los sistemas auxiliares del motor diésel y los principales sistemas del tractor agrícola.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 17,
          texto:
            '¿Qué efecto puede ocasionar una presión insuficiente en los neumáticos agrícolas?',
          imagen: '@/assets/actividad/imagen7.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Una deformación excesiva y un aumento de temperatura del neumático.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'La eliminación completa de la compactación del suelo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La reducción automática del peso del tractor.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El aumento de la capacidad del tanque hidráulico.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia una adecuada comprensión de los fundamentos de electrotecnia e hidráulica, el funcionamiento de los sistemas auxiliares del motor diésel y los principales sistemas del tractor agrícola.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 18,
          texto:
            '¿Qué se entiende por ergonomía en las actividades de mantenimiento?',
          imagen: '@/assets/actividad/imagen8.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La determinación de la potencia del motor.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'La clasificación de los combustibles según su composición.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'El cálculo de la presión de los sistemas hidráulicos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'La adaptación de las tareas, herramientas y espacios a las capacidades de las personas.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia una adecuada comprensión de los fundamentos de electrotecnia e hidráulica, el funcionamiento de los sistemas auxiliares del motor diésel y los principales sistemas del tractor agrícola.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 19,
          texto:
            'Durante la revisión de una máquina agrícola, ¿qué debe hacerse para identificar y valorar los riesgos?',
          imagen: '@/assets/actividad/imagen9.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Iniciar la reparación sin revisar las condiciones del equipo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Reconocer los peligros, analizar sus posibles consecuencias y valorar la probabilidad de ocurrencia.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Utilizar únicamente herramientas nuevas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Revisar solamente el aspecto exterior de la maquinaria.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia una adecuada comprensión de los fundamentos de electrotecnia e hidráulica, el funcionamiento de los sistemas auxiliares del motor diésel y los principales sistemas del tractor agrícola.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 20,
          texto:
            '¿Cuál es el nivel de intervención que ocupa el último lugar en la jerarquía de controles de riesgos?',
          imagen: '@/assets/actividad/imagen10.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Eliminación del peligro.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Controles de ingeniería.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Controles administrativos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Elementos de protección personal.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia una adecuada comprensión de los fundamentos de electrotecnia e hidráulica, el funcionamiento de los sistemas auxiliares del motor diésel y los principales sistemas del tractor agrícola.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
    parrafo: {
      tema: 'Comprendiendo el diseño de presupuestos y estrategias de ahorro',
      titulo: 'Completar frases',
      introduccion:
        '<b> Objetivo:</b> identificar conceptos clave relacionados con el presupuesto personal, la cultura del ahorro y la planificación financiera.',
      instruccion:
        'Complete correctamente los enunciados con la palabra que falta según los contenidos estudiados en el componente formativo.',
      imagen: '@/assets/actividad/imagen1.png',
      barajarPreguntas: true,
      textos: [
        {
          id: 1,
          texto:
            'El [respuesta] personal es una herramienta que permite proyectar ingresos y egresos para mantener la estabilidad económica.',
          respuesta: 'presupuesto',
        },
        {
          id: 2,
          texto:
            'La constancia en el cumplimiento del presupuesto refleja un alto nivel de [respuesta] financiera.',
          respuesta: 'disciplina',
        },
        {
          id: 3,
          texto:
            'Ahorrar no es lo que sobra, sino lo que se [respuesta] guardar antes de gastar.',
          respuesta: 'planifica',
        },
        {
          id: 4,
          texto:
            'Un gasto innecesario que puede eliminarse sin afectar la calidad de vida básica se denomina gasto [respuesta].',
          respuesta: 'discrecional',
        },
        {
          id: 5,
          texto:
            'La cultura del ahorro promueve el uso responsable de los [respuesta] disponibles.',
          respuesta: 'recursos',
        },
        {
          id: 6,
          texto:
            'El estado de [respuesta] personales permite analizar la relación entre ingresos y egresos en un periodo determinado.',
          respuesta: 'resultados',
        },
        {
          id: 7,
          texto:
            'Cuando los ingresos son mayores que los egresos se generan una [respuesta] que puede destinarse al ahorro.',
          respuesta: 'utilidad',
        },
        {
          id: 8,
          texto:
            'Uno de los beneficios de ejecutar un presupuesto es la reducción del [respuesta] financiero.',
          respuesta: 'estrés',
        },
        {
          id: 9,
          texto:
            'Evitar gastos impulsivos y mantener límites presupuestales refleja [respuesta] financiera.',
          respuesta: 'disciplina',
        },
        {
          id: 10,
          texto:
            'Contar con un fondo de [respuesta] permite enfrentar gastos inesperados sin afectar el presupuesto.',
          respuesta: 'emergencia',
        },
      ],
    },
  }),
}
</script>
