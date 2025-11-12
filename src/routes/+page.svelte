<script lang="ts">
    import Hero from "$lib/components/hero.svelte";
    import { baba } from "$lib/assets/kepek/melinda_baba.png";
</script>

<main class="content-container">
    <Hero />
    <div class="container">
        <p>
            A „Melindák” szülésfelkészítő célja , hogy a kismamáknak biztos
            támaszt nyújtsunk a várandósságuk alatt, ez az idő nyugodt, boldog,
            kiegyensúlyozott legyen.Amikor elérkezik életük legfontosabb napja,
            felkészülten, félelemtől mentesen érkezzenek a szülőszobára. A
            szülésfelkészítés, várandós kismamák segítése, támogatásának ötlete,
            már korábban megfogalmazódott bennünk, de a jelen kialakult helyzet
            segített igazán ahhoz, hogy mindezeket megvalósítsuk.
        </p>
        <p>
            20 éves szülésznői tapasztalatainkat a Pécsi Tudományegyetem
            Klinikai Központ Szülészeti és Nőgyógyászati Klinikáján szereztük.
            Az adott időszak alatt folyamatos szakmai képzéseken vettünk részt.
            A szülőszobán eltöltött hosszú évek alatt felbecsülhetetlen
            szülésznői gyakorlatra tettünk szert a várandósok támogatásában és a
            szüléskísérésekben. Az eltöltött évek számunkra a szülésznői
            hivatástudat életformává vált.
        </p>
        <p>
            Jelenleg is a klinika falai között a szülőszobán folytatjuk
            munkánkat, kísérjük a várandós kismamákat a jóslófájásoktól -olykor
            az első szívhang megjelenésétől-a gyermekágyas időszak végéig.
        </p>
        <img
            src={baba}
            class="imgbasic img-right"
            alt="Kárász Melinda egy babával"
        />
        <p>
            Munkánk során gyakran találkozunk olyan kismamákkal, akik elvesznek
            a rendelkezésre álló rengeteg igaz, esetleg téves információk,
            hiedelmek és babonák között. Szülésfelkészítőnkön a várandós
            kismamáknak és a leendő édesapáknak előre egyeztetett időpontban
            bensőséges, meghitt környezetben, biztosítunk lehetőséget, hogy
            bátran tabuk és előítéletek nélkül, nyíltan tudjunk beszélni a
            várandósság és a szülés körüli eseményekről. Valamint, egyénre
            szabottan a kismama igényeihez igazodva reális válaszokat kapjanak
            kérdéseikre.
        </p>
        <p>
            A találkozás során válaszokat kaphatnak többek között, hogy mire
            lesz szüksége a kórházi csomagban. Beszélünk a szülés megindulásának
            jeleiről, és körbejárjuk a szülés egyes szakaszait, a vajjúdás
            folyamatát, hogy mi történik a testünkben a vajjúdás alatt.
            Tájékozódhatnak a vajjúdási, és szülési testhelyzetekről,
            alternatívákról. Információt kapnak a természetes, és mesterséges
            fájdalomcsillapítási lehetőségekről.
        </p>
        <p>
            Beszélgetésünk során a kismamában kialakulhat egy kép saját szülési
            tervéről, melyben a várandós személye, és az ő elképzelései,
            gondolatai kerülnek előtérbe. Ismereteket szereznek a
            császármetszésről, és a császármetszés utáni hüvelyi szülés
            lehetőségéről. Gátvédelemben vagy gátmetszéssel történő szülésről, a
            késői köldökellátás fontosságáról. A leendő édesapák megtudhatják,
            hogy mi a szerepük a szülőszobában, miben segíthetik a kismamát,
            valamint a szülőszobában zajló eseményekre is felkészítjük.
        </p>
        <p>
            Segítséget tudunk biztosítani köldökzsinórvérből származó őssejtek
            levételével kapcsolatos információkról, illetve szakemberrel a
            kapcsolatot felvenni. Az „aranyóra”, és a szőrkontaktus
            fontosságáról, és mi a szerepe az újszülött fejlődésében.
            Bepillantást nyerhetnek a szülés utáni gyermekágyas időszak,
            szépségéről, olykor nehézségekről, és a testben lezajló
            változásokról. Az anyatejes táplálás fontosságáról, a tejtermelődés
            folyamatáról, és az igényszerinti szoptatásról. A baba-barát kórház
            jelentéséről.
        </p>
        <p>
            Összefoglalva, igyekszünk reális és biztos támaszt adni a
            várandósság alatt. Igyekszünk ott, és abban segíteni, amiben a
            legnagyobb szükség van ránk.
        </p>
        <h2 style="padding-top: 10px;">Áraink</h2>
        <table class="table-light">
            <tbody>
                <tr>
                    <td>Első alkalom</td>
                    <td class="price">20 000 Ft</td>
                </tr>
                <tr>
                    <td>További konzultációk</td>
                    <td class="price">15 000 Ft</td>
                </tr>
            </tbody>
        </table>
        <p>
            Az első alkalom ára tartalmazza a korlátlan telefonos
            segítségnyújtást
        </p>
        <div class="b-cont">
            <a href="/foglalas" class="button">Időpontfoglalás</a>
        </div>
    </div>
</main>
