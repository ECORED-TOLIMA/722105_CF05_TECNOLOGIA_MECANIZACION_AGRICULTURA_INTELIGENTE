<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p El componente formativo aborda los fundamentos de electrotecnia e hidráulica aplicados a la maquinaria agrícola, incluyendo sus conceptos, magnitudes, propiedades, fuentes de energía e instrumentos de medición. También desarrolla las características y funciones de los sistemas auxiliares del motor diésel y los principales sistemas del tractor agrícola, así como aspectos relacionados con su mantenimiento, el análisis de aceite y la interacción entre los neumáticos y el suelo. Finalmente, integra los fundamentos de seguridad y salud en el trabajo, considerando la normativa aplicable, la ergonomía, los elementos de protección personal, la identificación de peligros y la prevención y el control de riesgos durante las actividades de mantenimiento.
    .row.justify-content-center
      .col-12.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="La síntesis presenta los cinco ejes temáticos del componente formativo: electrotecnia, hidráulica, sistemas auxiliares del motor diésel, sistemas del tractor agrícola y seguridad y salud en el trabajo, junto con sus principales conceptos y aplicaciones en el mantenimiento seguro de la maquinaria agrícola.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis
</template>
<script>
export default {
  name: 'Sintesis',
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
