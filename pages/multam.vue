<template>
  <main-wrapper>
    <div class="main content">
      <h1>Múltam</h1>
      <h2>Iskola / Tanulmányok</h2>
      <p>
        Szakgimnáziumba a BMSZC Petrik-be jöttem fel Pestre vidékről, ahol
        jelenleg is Informatika szakon vagyok egész elfogadható tanulmányi
        eredményekkel. Most félévem 5.0-ra sikerült és szinte sose esett le az
        átlagom 4.8 alá, viszont ez közel sem jelenti azt, hogy stréber lennék.
        Szerencsére megvannak az adottságaim ahhoz, hogy nagyon gyorsan tanuljak
        és elérjek mindent amit szeretnék idővel. Iskola mellett régen elkezdtem
        jópár Udemy-s kurzust webfejlesztésről, ami után elkezdtem jobban
        foglalkozi évekig frontend frameworkökkel, többek között React- al és
        Vue-val, amik közül az utóbbinál ragadtam le egy kicsit, hisz nagyon
        megszerettem. Ezek által nagyon szépen megtanultam, hogy működik és
        miért is jó ez az önfejlesztés és egyéni tanulás dolog, amellett, hogy
        már nagyon profin tudok mondatokat elemezni és álmomból felkeltve is fel
        tudom sorolni a görög oszlop fajtákat. Pontosan tudom, hogy az, hogy
        “informatika” szakon vagyok és végzek közel sem ér jóformán semmit
        szakmailag, ezért is kezdtem bele abba a kis kampányomban, ahonnal jó
        eséllyel ide kerültek, hiszen a rendszerüzemeltetés / hálózatok és IoT
        nem pont az amit csak úgy tudnék a semmiből itthon tanulni sajnos.
        Szeretnék végre rendes tényleges eredményeket is elérni, amihez
        segítségre lesz szükségem, de ezekről a <nuxt-link to="/tervek">Terveim</nuxt-link> oldalon írok
        részletesebben.
      </p>
      <hr />
      <h2>Munkahelyek</h2>
      <p>
        Mint minden jó középiskolás egy Mekiben kezdtem a karrierem talán 3
        évvel ezelőtt nyáron, ahol igazából az össz tapasztalatom amit szereztem
        kimerült abban, hogy most már nagyon királyul tudok itthon wrap-et
        tekerni és soha többé nem szeretnék hasonló helyen dolgozni. Ezután
        elkezdtem dolgozni a Zuglói Gyermektáborban Soltvadkerten, ahol
        általános iskolásokat táboroztatunk évente 2-3-4 héten keresztül,
        programokat szervezve nekik, ahol igazából mindent csinálunk
        gyakorlatilag amit csak szükséges, legyen szó hangosításról, vetítésről
        vagy gyakorlatilag majdnem bármiről ami szóba jöhet. Idén nyáron viszont
        egy pár fokkal menőbb helyeken is lehetőségem volt munkálkodni,
        padlófűtést és csőfűtést építettünk ki például egy stadionban és egy
        brutál ingatlan komplexumban na meg a Városligetben. Ezek mellett egy
        iroda hálózatát építettük teljesen át, lecserélve a régi kábelezést
        újra, lefektetve kb 700 m UTP kábelt és felszerelve ~20 fali
        csatlakozót. Itt főleg kábelcsatornákkal legóztam sokat valamint a
        csatlakozóknak jó részét én szereltem fel. Itt tetszett meg az a
        gondolat, hogy akár még dolgozhatnék is aktívan ilyenekkel, így jött az
        ötlet, hogy nekiállok keresgélni. Itt tartunk most. 😇
      </p>
      <hr />
      <h2>Nem közoktatás, nemis munkahely de legalább ingyen</h2>
      <p>
        Az idők során elkerültem 1-2 furcsa helyre, többek között a már említett
        vegyész szakszervezethez, ahol valamilyen varázslatos (amúgy teljesen
        érthető) okból ifjúsági tagozatvezető-helyettes lettem kemény 17 évesen
        úgy, hogy a második legfiatalabb személy 25 volt, míg a harmadik 30. Itt
        aktívan próbáltuk felturbózni a tagozatunkat, viszont ez bedőlt az
        enyhén brutális bürokrácia miatt sajnos, de azért részt vettem 1-2
        nemzetközi találkozón és továbbképzésen, ahol szinkrontolmácsokkal
        felfegyverkezve próbáltuk megváltani a világot, több kevesebb liter kávé
        elfogyasztása mellett természetesen. Ezek mellett jártam heti 1x az
        ELTE-re csupán önkéntes alapon
        <a href="http://atomcsill.elte.hu/NEW/">Az atomoktól a csillagokig</a>
        rendezvénysorozatra, ahol mindenről tartanak előadást ami
        természettudomány. Itt ismerkedtem meg egy kutató doktorral, aki a
        KFKI-ban kutat tanítás mellett és vezet egy (jelenleg COVID miatt
        felfüggesztett) diák kutató csoportot, aminek tagja lehettem kemény 1
        napig, még le nem záratták jóformán a teljes Központi Fizikai Kutató
        Intézetet a vírus miatt. Az utóbbi 2-t nagyon szeretném tovább
        folytatni, amint lehetőségem lesz rá, hisz elképesztően élvezem őket és
        elvileg szívesen várnak is vissza.
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
  @media (max-width: 959px) {
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
  h2 {
    text-align: left;
  }
}
</style>
