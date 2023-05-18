console.log('funguju!');

// 1
// Žárovky
// to dáš
// Vzpomeňte si na příklad se zapínámím a vypínáním žárovky. V tomto cvičení žárovku naprogramujeme pomocí komponent a DOM elementů.

// Vytvořte si repozitář ze šablony cviceni-zarovka.
// Otevřete si stránku v prohlížeči. Měli byste vidět jednu žárovku.
// Prohlédněte si soubor index.html a podívejte se, jak je žárovka vytvořena.
// V oddělené složce vytvořte komponentu Bulb, která vyrobí DOM element pro žárovku. Komponenta bude vyžadovat jednu prop s názvem isOn udávajcí, zda je žárovka zapnutá či nikoliv. Zapnutí žárovky proveďte tak, že na element přidáte třídu bulb--on.
import { Bulb } from "./Bulb/index.js";
// Smažte obsah elementu #app v index.html. Pomocí append do něj vložte tři žárovky, jednu zapnutou a dvě vypnuté.
// Na div element uvnitř komponenty připojte posluchač událost click. Ten žárovku při kliknutí rozsvítí/zhasne tím, že pomocí replaceWith nahradí starou žárovku novou žárovkou.
// Vyzkoušejte, že dokážete na stránce nezávisle rozsvítit a zhasnout všechny tři žárovky.
const appElement = document.querySelector('#app');



const zarovky = [
    {
    isOn:true,
    },
    {
    isOn:false,
    },
    {
    isOn:false,
    }
]


const zarovkyElment = zarovky.map((zarovka)=>
    Bulb(zarovka));
appElement.append(...zarovkyElment);




 