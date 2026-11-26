<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.justify-content-center.align-items-center.mb-4
      .cajon.mb-0
        p.mb-0(data-aos="fade-down") La maquinaria agrícola desempeña un papel fundamental en el desarrollo de las actividades agropecuarias, ya que facilita las labores del campo y contribuye a mejorar la eficiencia de los procesos productivos. Para garantizar su funcionamiento y prolongar su vida útil, es necesario conocer los principios técnicos que explican el funcionamiento de sus diferentes sistemas, así como reconocer las condiciones que requieren atención durante las actividades de mantenimiento.
    .row.justify-content-center.mb-4
      .col.col-lg-4.col-8.col-md-6.order-lg-1.order-2.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/temas/intro/img01.jpg', alt='')
      .col.col-lg-8.col-12.order-lg-2.order-2
        .cajon.cajon.color-secundario.p-4.mb-4
          p.mb-0 En este componente formativo se abordarán los fundamentos de electrotecnia e hidráulica, las características y funciones de los sistemas auxiliares del motor diésel y los principales sistemas del tractor agrícola, entre ellos el eléctrico, hidráulico, de transmisión, dirección y rodaje. También se estudiarán las actividades generales de mantenimiento y la importancia del análisis de aceite como herramienta para anticipar posibles fallas.
        p.mb-0(data-aos="fade-down") De igual manera, se desarrollarán aspectos relacionados con la seguridad y salud en el trabajo, considerando la normativa aplicable, la ergonomía, el uso de elementos de protección personal, la identificación de peligros y la prevención y el control de riesgos durante las actividades de mantenimiento.
    .row.justify-content-center.align-items-center.mb-4
      .col.col-12.order-lg-2.order-2
        .cajon.cajon.c02.p-4
          p.mb-0 Estos conocimientos permitirán comprender el funcionamiento de la maquinaria agrícola y reconocer la importancia de realizar actividades de mantenimiento de manera planificada y segura, contribuyendo a la conservación de los equipos, la protección de las personas y el desarrollo eficiente de las labores agrícolas.
    p.mb-4 Para complementar la comprensión de los temas abordados, se recomienda acceder al siguiente video.
    .row.justify-content-center.align-items-center.mb-0
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/7-WjNV4psrk?si=ja5NeK3Xi27EyRxa" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
</template>
<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>
<style lang="sass"></style>
