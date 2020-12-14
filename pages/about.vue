<template>
  <div>
    <div class="container">
      <div class="left centered-flex">
        <project-left title="Lesti Dániel" />
      </div>
      <div class="right">
        <div class="content">
          <p>
            Egy 18 éves főállásban szakgimnazista srác vagyok és az átlagosnál
            pontosan sokkal több dologgal szeretek foglalkozni mint egy okosabb
            dzsungelben élő leveli béka. Szeretem az unikornisokat, meg van pár
            ilyen dolgom viszont ide egy fokkal értelmesebb dolgokat is
            szeretnék írni.
          </p>
          <p>
            Szabadidőmben a jövőmet tervezgetem főleg és dolgokat csinálok amik
            előre visznek abba az irányba amerre tolni szeretném az egész életem
            idővel.
          </p>
          <p>
            Nagyon szeretek hálózatokkal foglalkozni, ahogy megvan a saját kis
            egyéniségem és idővel vezetőnek se leszek utolsó, hisz megvannak
            hozzá az adottságaim. Több szempontból sztereotíp fiatal vagyok, de
            több szempontból nem. Ha valamit nem szeretek, azzal nem
            foglalkozok, viszont ami érdekel abba szivemet lelkemet beleadva
            csinálom és addig fejlesztem magam amég meg nem elégszek az
            eredménnyel.
          </p>
          <p>
            Nagy terveim vannak. Van amenyik tényszerűen nem reális, viszont
            irányt mutatnak és mindig tudom ezálltal, hogy mikor mit kell
            tennem, ahoz hogy közelebb kerüljek hozzájuk.
          </p>
          <p>
            Per pillanat csak saját projektjeim vannak, amiken vagy egyedül vagy
            csoporttal ügyködünk, viszont nagyon szeretnék elkezdeni dolgozni is
            valamikor a közeljövőben akár hálózatokkal, akár fejlesztőként.
          </p>
          <p>
            Amennyiben bármilyen ügyben meg szeretnének keresni több mint boldog
            lennék ha írnának egy üzenetet bármelyik elérhetőségemen.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '~/assets/scss/leftright.scss';

.right {
  display: flex;
  align-items: center;
  p {
    font-size: 1.2rem;
    text-align: justify;
    margin-top: 2vh;
    padding: 0 7vw;
    @media (max-width: 960px) {
      margin-top: 4vh;
      padding: 0 7vw;
    }
  }
}
</style>

<script>
import projectLeft from '../components/project/projectLeft.vue'
export default {
  components: { projectLeft },
  head: {
    title: 'About Lesti - lesti.xyz',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content:
          'Egy fura fejlesztő srác, aki szeret hálózatokkal, gépekkel és álltalánosan mindennel foglalkozni ami elektromos.',
      },
      {
        hid: 'og:description',
        name: 'og:description',
        content:
          'Egy fura fejlesztő srác, aki szeret hálózatokkal, gépekkel és álltalánosan mindennel foglalkozni ami elektromos.',
      },
      {
        hid: 'og:title',
        name: 'og:title',
        content: 'About Lesti - lesti.xyz',
      },
      {
        hid: 'og:url',
        name: 'og:url',
        content: 'https://lesti.xyz/about',
      },
      {
        name: 'lang',
        content: 'hu',
      },
      {
        hid: 'og:image',
        name: 'og:image',
        property: 'og:image',
        content: 'https://lesti.xyz/lesti_OG.png',
      },
    ],
  },
}
</script>
