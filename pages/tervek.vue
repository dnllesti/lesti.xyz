<template>
  <main-wrapper>
    <div class="main content">
      <h1>Tervek</h1>
      <h2>Továbbtanulás</h2>
      <p>
        A jelenlegi állás alapján OKJ-n fogok maradni legalább 1 évet
        informatikai rendszerüzemeltetői-n, hogy jobban bele tudjak merülni a
        hálózatokba + többek között, hogy minél több helyről tudjak tanulni
        párhuzamosan ezekről a dolgokról élen az IoT val (amit még mindig nem
        tudok pontosan hol fogom tudni kellő szinten kitanulni). Diplomáért
        később szeretnék menni, legkorábban OKJ után, hogy ne csak vakon
        rohanjak bele pontosan 0.5 lábon állva és függve gyakorlatilag mindentől
        ami jelenleg körülvesz.
      </p>
      <hr />
      <h2>Hosszútáv</h2>
      <p>
        Hosszútávon a végső célom igazából cégalapítás és összeállás másokkal,
        hogy akár újonnan épülő akár meglévő épületek rendszereit kiépíteni,
        később elektronikus hálózattal együtt. Meglesz ez, egész szép kis
        ötleteim vannak. Természetesen tudom, hogy ez csak a jelenlegi verzió,
        de kaliberben mindig is ilyesmi lesz a terv, ebben biztos vagyok.
      </p>
      <hr />
      <h2>Rövidtáv</h2>
      <p>
        Jelenleg minél több szakmai tapasztalatra van szükségem és főként egy
        stabil keresetre, amitől már elmondhatom magamról, hogy nem csak egy
        random “gyerek” vagyok. Szeretnék minél előbb önállóvá válni és
        elkezdeni a saját életem élését. És mint mondtam, főként ezért létezik
        ez az oldal, hogy ha esetleg tudnának bármilyen tanáccsal, ötlettel,
        lehetőséggel segíteni, azt nagyon megköszönném. Nagyon lelkesen tudok
        dolgozni a céljaimért és mindenért ami fontos nekem, így esélyesen jó
        munkaerő lennék. 
        <br />
        Ha fel szeretnék venni velem a kapcsolatot, kérem keressenek email-ben,
        minden üzenetet szívesen várok - <nuxt-link to="/kapcsolat">kapcsolat</nuxt-link> 😇
      </p>
    </div>
  </main-wrapper>
</template>

<style lang="scss" scoped>
hr {
  margin: 3vh 0 3vh 0;
}
h2 {
  margin: 3vh 0 1vh 0;
  color: #666;
}
.main {
  padding: 5vw 5vw;
  @media (max-width: 1430px) {
    margin: 10vh 2vw;
    p {
      font-size: 0.8rem;
    }
  }
}
.content {
  text-align: justify;
  p {
    font-size: 1.05rem;
    text-align: justify;
    margin-top: 0vh;
  }
}
</style>
