<template>
  <div class="container flex flex-grow justify-center max-w-full">
    <div
      class="mb-20 flex flex-col-reverse mx-auto max-w-screen-xl lg:flex-row"
    >
      <div class="portrait mb-12 lg:mb-8 w-1/2 mx-auto lg:w-auto">
        <PictureElement
          path="european-dream/the_european_dream.png"
          width="756px"
        />
      </div>
      <div class="flex flex-col lg:w-1/2 lg:ml-20">
        <h1 class="font-bold mb-4">{THE EUROPEAN DREAM}</h1>
        <h2 class="font-bold mb-1 mt-4">
          Zeitschrift zur europäischen Grenzpolitik
        </h2>
        <p>
          El moluptat qui aspist ut fugias nemquo maio. Neque quo mosae nobist
          auditatio eliquam quia quia doluptate volles- tiam, conserem. Ut utem
          quunt, niscimus as doluptu scient adipsam, cones ratecto rruptatem. Ut
          quaerferum et rep- ersp erfereptatur aciunt quiatem re quatist, sunt
          aut et abo. Et is aut reni is molorro vidigendi ipsam, nim
          verovidemque is evel molupta cori omnienimet omnihil ipsam re, atati
          dis res con pliquo beratum quiam dolores et erum qui similitat
          occullectas earuptatas alic tet eaquos qui omnis ea quam ipicips
          antectur adit postibusciis eos net occumqu undebis dolupti squaspe
          riandaero molorum essequid maxim quia sum facepelit eos nesedis atur,
          verum, omnim rero eum id magnatem aut laborib ernate autecto volese
          numet ipsunt
        </p>
        <h2 class="font-bold mb-1 mt-4">Komplizierte Sachen</h2>
        <p>
          El moluptat qui aspist ut fugias nemquo maio. Neque quo mosae nobist
          auditatio eliquam quia quia doluptate volles- tiam, conserem. Ut utem
          quunt, niscimus as doluptu scient adipsam, cones ratecto rruptatem. Ut
          quaerferum et rep- ersp erfereptatur aciunt quiatem re quatist, sunt
          aut et abo. Et is aut reni is molorro vidigendi ipsam, nim
          verovidemque is evel molupta cori omnienimet omnihil ipsam re, atati
          dis res con pliquo beratum quiam dolores et erum qui similitat
          occullectas earuptatas alic tet eaquos qui omnis ea quam ipicips
          antectur adit postibusciis eos net occumqu undebis dolupti squaspe
          riandaero molorum essequid maxim quia sum facepelit eos nesedis atur,
          verum, omnim rero eum id magnatem aut laborib ernate autecto volese
          numet ipsunt
        </p>
        <div class="flex-col mt-10">
          <div class="flex">
            <div class="font-bold mr-2">Credits</div>
            <div>Peter Pan</div>
          </div>
          <div class="flex">
            <div class="font-bold mr-2">Jahr</div>

            <div>2012</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.portrait {
  min-width: 250px;
}
</style>
<script>
import PictureElement from '../../components/PictureElement'
export default {
  components: { PictureElement },
}
</script>
<style>
body {
  overflow-x: hidden;
}
</style>
