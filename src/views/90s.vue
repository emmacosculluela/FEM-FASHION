<template>
  <div class="container">
    <h1>90s</h1>
    <p class="body2"> Els 90 es van caracteritzar per un retorn del <b>minimalisme</b>, en contrast amb les tendències més elaborades i cridaneres dels anys 80. Algunes peces de roba habituals femenines eren tops curts, vestits de <i>baby doll</i>, jaquetes de cuir negre amb espatlleres, texans de colors o brodats, malles, Keds i ballerines.</p>
    <pre></pre>
    <div class="moda90s">
      <img src="../assets/Moda90s.jpg" alt="Moda 90s" class="imatgeResponsive"> 
      </div>
      <pre> </pre>
             <div class="modaGrunge">
                 <img src="../assets/ModaGrunge.jpg" alt="Moda grunge" class="imatgeResponsive"> 
                 <aside class="body2">A mitjans de 1992, l’estil <b>grunge</b> va començar a ser una tendència molt popular. Aquest consistia principalment en camises de franel·la <i>oversize</i>, samarretes de bandes, texans trencats, Doc Martens i botes de combat.</aside>
                 <div class="reset"></div> 
            </div>
            <pre></pre>
            <div class="modaCasualChic ">
                 <img src="../assets/ModaCasualChick.jpg" alt="Moda casual chic" class="imatgeResponsive"> 
                 <aside class="body2">Davant l’enfocament incomformista de la moda, del 1998 al 2001, l'aspecte <b>casual chic</b> va guanyar l'atractiu general, amb texans foscos de rentat de pedra, petos, tops curts de tirants d’espagueti, xandalls i altra roba esportiva. </aside>
                 <div class="reset"></div> 
            </div>
            <pre> </pre>
            <pre> </pre>
  </div>
</template>

<style scoped>
.body2 {
    font-family: Georgia, 'Times New Roman', Times, serif; /*tipografia*/
    color: black; /*color*/
    font-size: 1.2rem; /*mida*/
    line-height: 1.6em; /*espai entre línies*/
    margin: 0;
} 

p {
    margin-bottom: 1.6em; /*espai entre paràgrafs*/
}

.modaGrunge img{
    float: left;
    width: 20%;
    margin-right: 15px;
}

.modaGrunge, .modaCasualChic {
    text-align: left;
}

.modaCasualChic img{
    float: right;
    width: 35%;
    margin-left: 15px;
}

.moda90s img{
    width: 40%;
}
</style>