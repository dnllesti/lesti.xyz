<template>
  <div>
    <div class="container">
      <div class="left">
        <div>
          <Logo />
          <h1 class="title">Lesti Dániel</h1>
        </div>
      </div>

      <div class="content">
          <h2 class="subtitle">Ki is vagyok?</h2>

        <p>
          Egy 18 éves főállásban szakgimnazista srác vagyok és az átlagosnál pontosan sokkal több dologgal szeretek foglalkozni mint egy okosabb dzsungelben élő leveli béka.
          Szeretem az unikornisokat, meg van pár ilyen dolgom viszont ide egy fokkal értelmesebb dolgokat is szeretnék írni.
        </p>
        <p>Szabadidőmben a jövőmet tervezgetem főleg és dolgokat csinálok amik előre visznek abba az irányba amerre tolni szeretném az egész életem idővel. </p>
        <p>Nagyon szeretek hálózatokkal foglalkozni, ahogy megvan a saját kis egyéniségem és idővel vezetőnek se leszek utolsó,
           hisz megvannak hozzá az adottságaim. <br/> Több szempontból sztereotíp fiatal vagyok, de több szempontból nem. 
           Ha valamit nem szeretek, azzal nem foglalkozok, viszont ami érdekel abba szivemet lelkemet beleadva csinálom 
           és addig fejlesztem magam amég meg nem elégszek az eredménnyel.</p>
           <p>
             Nagy terveim vannak. Van amenyik tényszerűen nem reális, viszont irányt mutatnak és mindig tudom ezálltal, hogy mikor mit kell tennem, ahoz hogy közelebb kerüljek hozzájuk.
           </p>
           <p>
             Per pillanat csak saját projektjeim vannak, amiken vagy egyedül vagy csoporttal ügyködünk, viszont nagyon szeretnék elkezdeni dolgozni is valamikor a közeljövőben akár hálózatokkal, akár fejlesztőként. 
           </p>
           <p>
             Amennyiben bármilyen ügyben meg szeretnének keresni több mint boldog lennék ha írnának egy üzenetet bármelyik elérhetőségemen.
           </p>
  <NuxtLink class="contact" to="/contact"> <button>Kapcsolat</button> </NuxtLink>

      </div>
    </div>
  </div>
</template>

<script>
export default {
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

<style lang="scss" scoped>
.left {
  div {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
}
button {
  color: $cta_one_contra;
  padding: 9px 25px;
  background-color: $cta_one;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3 ease 0s;
  font-weight: 500;
  font-size: 1.2rem;
  text-decoration: none;
  margin: 2vh auto;
  display: block;
}
.container {
  margin: 0 auto;
  min-height: 100vh;
  padding-top: 5vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: $main_color;
}

a {
  color: $cta_one;
  text-decoration: none;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 2rem;
  color: $main_contra;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: $main_contra;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
@media (max-width: 960px) {
  .container {
    flex-wrap: wrap;
  }
  .left {
    display: flex;
    flex-wrap: wrap;
    padding-top: 5vh;
    justify-content: center;
    align-items: center;
    * {
      display: block;
    }
    .title{
      width: 100%;
    }
  }
  .logo {
  }
  .title {
    font-size: 4rem;
    margin-top: 3vh;
    width: 100vw;
  }
  p {
    font-size: 1.2rem;
    text-align: justify;
    margin-top: 5vh;
    padding: 0 7vw;
  }
  button:nth-last-of-type(1) {
    margin: 5vh auto;
  }
}

@media (min-width: 961px) {
  * {
    text-decoration: none !important;
  }
  .left {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    height: 30vh;
    box-sizing: border-box;
    justify-content: center;
    align-items: center;
    * {
      display: block;
    }
    img{
      height: 10vh;
      width: auto;;
    }
  }
  .content {
    margin: 0 auto;
    height: 80%;
    overflow-y: scroll;
    width: 60%;
    background-color: $main_color;
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
  }
  .content::-webkit-scrollbar {
  display: none;
  }
  .container {
    min-height: 100vh;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    background-color: $main_color;
  }

  .title {
    font-family: 'Quicksand', 'Source Sans Pro', -apple-system,
      BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
      sans-serif;
    display: block;
    width: 100%;
    font-weight: 300;
    font-size: 4rem;
    color: $main_contra;
    letter-spacing: 1px;
    margin-top: 2vh;
  }

  .subtitle {
    font-weight: 300;
    font-size: 42px;
    color: $main_contra;
    word-spacing: 5px;
    padding-bottom: 15px;
  }

  p {
    margin: 2vh 5vw;
    font-size: 1.2rem;
    text-align: justify;
    color: $main_contra;
    vertical-align: middle;
  }
    button:nth-last-of-type(1) {
    margin: 10vh auto 10vh auto;
    font-size: 1.5rem;
    padding: 1rem 2rem;
  }
}
</style>
