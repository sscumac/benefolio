<template>
  <div
    class="flex-grow flex flex-col"
    style="scroll-behavior: smooth"
    @wheel="horizontalScroll($event, true)"
  >
    <!--  >-->
    <div
      id="slideContainer"
      class="flex-grow sm:overflow-x-scroll flex flex-col justify-center"
    >
      <div
        id="slider"
        class="flex flex-col sm:flex-row justify-start transform p-10"
      >
        <div class="portrait mx-auto mb-12 lg:mb-8">
          <PictureElement path="portrait_small.jpeg" width="auto" />
        </div>
        <!--        info-->
        <div class="text-box">
          <h1 class="font-bold mb-4">Info</h1>
          <div>{{ infoText }}</div>
          <div class="flex mt-10">
            <div class="font-bold mr-2">Kontakt</div>
            <a class="class" href="mailto:mail@studio.eu">mail@studio.eu</a>
          </div>
        </div>
        <!--        impressum-->
        <div>
          <div class="text-box impressum">
            <h1 class="font-bold mb-4">Impressum</h1>
            <p>
              Herausgeber und Autor der Website: Benedikt Stoll <br />
              <a class="class" href="mailto:sebastian.schumacher@hotmail.de"
                >Code: Sebastian Schumacher</a
              >
            </p>
            <p>
              Der Autor übernimmt keinerlei Gewähr für die Aktualität,
              Korrektheit, Vollständigkeit oder Qualität der bereitgestellten
              Informationen. Haftungsansprüche gegen den Autor, die sich auf
              Schäden materieller oder ideeller Art beziehen, welche durch die
              Nutzung oder Nichtnutzung der dargebotenen Informationen bzw.
              durch die Nutzung fehlerhafter und unvollständiger Informationen
              verursacht wurden sind grundsätzlich ausgeschlossen, sofern
              seitens des Autors kein nachweislich vorsätzliches oder grob
              fahrlässiges Verschulden vorliegt.
            </p>
            <p>
              Alle Angebote sind freibleibend und unverbindlich. Der Autor
              behält es sich ausdrücklich vor, Teile der Seiten oder das gesamte
              Angebot ohne gesonderte Ankündigung zu verändern, zu ergänzen, zu
              löschen oder die Veröffentlichung zeitweise oder endgültig
              einzustellen.
            </p>
          </div>
        </div>
        <div class="text-box impressum">
          <h6>Verweise und Links</h6>
          <p>
            Bei direkten oder indirekten Verweisen auf fremde Internetseiten
            (“Links”), die außerhalb des Verantwortungsbereiches des Autors
            liegen, haftet dieser nur dann, wenn er von den Inhalten Kenntnis
            hat und es ihm technisch möglich und zumutbar wäre, die Nutzung im
            Falle rechtswidriger Inhalte zu verhindern. Der Autor erklärt
            hiermit ausdrücklich, dass zum Zeitpunkt der Linksetzung die
            entsprech enden verlinkten Seiten frei von illegalen Inhalten waren.
            Der Autor erklärt weiterhin, dass er keinerlei Einfluss auf die
            aktuelle und zukünftige Gestaltung und auf die Inhalte der
            gelinkten/verknüpften Seiten hat. Deshalb distanziert er sich
            hiermit ausdrücklich von allen Inhalten aller gelinkten /verknüpften
            Seiten, die nach der Linksetzung verändert wurden. Diese
            Feststellung gilt für alle innerhalb des eigenen Internetangebotes
            gesetzten Links und Verweise sowie für Fremdeinträge in vom Autor
            eingerichteten Gästebüchern, Diskussionsforen und Mailinglisten. Für
            illegale, fehlerhafte oder unvollständige Inhalte und insbesondere
            für Schäden, die aus der Nutzung oder Nichtnutzung solcherart
            dargebotener Informationen entstehen, haftet allein der Anbieter der
            Seite, auf welche verwiesen wurde, nicht derjenige, der über Links
            auf die jeweilige Veröffentli chung lediglich verweist.
          </p>
        </div>
        <div class="text-box impressum">
          <h6>Urheberrecht</h6>
          <p>
            Der Autor ist bestrebt, in allen Publikationen die Urheberrechte der
            verwendeten Grafiken, Tondokumente, Videosequenzen und Texte zu
            beachten, von ihm selbst erstellte Grafiken, Tondokumente,
            Videosequenzen und Texte zu nutzen oder auf lizenzfreie Grafiken,
            Tondokumente, Videosequenzen und Texte zurückzugreifen.
          </p>
          <p>
            Das Copyright für veröffentlichte, vom Autor selbst erstellte
            Objekte bleibt allein beim Autor der Seiten. Eine Vervielfältigung
            oder Verwendung solcher Grafiken, Tondokumente, Videosequenzen und
            Texte in anderen elektronischen oder gedruckten Publikationen ist
            ohne ausdrückliche Zustimmung des Autors nicht gestattet.
          </p>
        </div>
        <div class="text-box impressum">
          <h6>Rechtswirksamkeit dieses Haftungsausschlusses</h6>
          <p>
            Dieser Haftungsausschluss ist als Teil des Internetangebotes zu
            betrachten, von dem aus auf diese Seite verwiesen wurde. Sofern
            Teile oder einzelne Formulierungen dieses Textes der geltenden
            Rechtslage nicht, nicht mehr oder nicht vollständig entsprechen
            sollten, bleiben die übrigen Teile des Dokumentes in ihrem Inhalt
            und ihrer Gültigkeit davon unberührt.
          </p>
          <p>Angaben gemäß Teledienstgesetz</p>
          <p>Benedikt Stoll</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Utils from '../utils/utils'
import info from '../assets/text/info.txt'
export default {
  data() {
    return {
      infoText: info,
    }
  },
  methods: {
    horizontalScroll(event, bounceEffect) {
      if (window.screen.width > 500) {
        Utils.horizontalScroll(event, bounceEffect)
      }
    },
  },
}
</script>
<style scoped>
#slider {
  width: 100vw;
}
@media (min-width: 640px) {
  #slider {
    width: 250em;
    /*height: 66vh;*/
  }
  .text-box {
    width: 40em;
    margin-right: 5em;
  }
}

.impressum p {
  margin-top: 1rem;
}
.img-wrapper {
  height: fit-content;
}
</style>
