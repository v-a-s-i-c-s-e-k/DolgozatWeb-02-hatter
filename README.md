# 2. feladat - Háttér

## Feladat leírása

A feladat célja egy függvény készítése, amely létrehoz és visszaad egy `div` elemet.

A létrehozott `div` elemnek háttérképe van. Ha a felhasználó rákattint az elemre, akkor a háttérkép 2 másodpercre megváltozik, majd automatikusan visszaáll az eredeti háttérképre.

## Elvárt működés

Az oldal betöltése után megjelenik egy háttérképpel rendelkező `div` elem.

Kattintáskor:

- a háttérkép megváltozik,
- az új háttérkép 2 másodpercig látható,
- 2 másodperc után visszaáll az eredeti háttérkép.

## Fájlok

- `index.html` - az oldal HTML szerkezete
- `style.css` - az oldal megjelenésének beállításai
- `script.js` - a JavaScript megoldás
- `README.md` - a feladat dokumentációja

## Tesztelés

A megoldás az `index.html` fájl böngészőben történő megnyitásával tesztelhető.

Teszteléskor ellenőrizni kell, hogy:

- az oldal betöltésekor létrejön a `div` elem,
- a `div` háttérképpel jelenik meg,
- kattintásra megváltozik a háttérkép,
- a háttérkép 2 másodperc után visszaáll az eredeti állapotba.
