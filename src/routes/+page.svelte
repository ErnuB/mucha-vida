<script>
    import Navbar from "./Navbar.svelte";
    import Modal from "./Modal.svelte";
    import Dialog from './Dialog.svelte'
	  
    let dialog;
    let isOverlayOpen = false;
    let selectedImage = null;
    let alternativeText = null;

    const dialogClose = () => {
      dialog.close();
    }

    function openModal(imagen, altText) {
        selectedImage = imagen;
        alternativeText = altText;
        isOverlayOpen = true;
    };

    function closeModal() {
        selectedImage = null;
        alternativeText = null;
        isOverlayOpen = false;
    };

    let seccion = [
        {id:"ligero", nombre:"Lo Ligero", color:"#fb3199"},
        {id:"sandwich", nombre:"Sandwiches", color:"#df9030"},
        {id:"sopa", nombre:"Sopas", color:"#ff422e"},
        {id:"ensalada", nombre:"Ensaladas", color:"#18b04d"},
        {id:"focaccia", nombre:"Focaccias", color:"#ff422e"},
        {id:"combo", nombre:"Combos", color:"#11ae4e"},
        {id:"baguette", nombre:"Baguettes", color:"#fb3199"},
        {id:"cuernito", nombre:"Cuernitos", color:"#ff5624"},
        {id:"torta", nombre:"Tortas", color:"#2ab0a1"},
        {id:"quesadilla", nombre:"Quesadillas", color:"#ffae47"},
        {id:"extras", nombre:"Extras", color:"#18b04d"},
        {id:"agua", nombre:"Aguas Frescas", color:"#2ab0a1"},
        {id:"jugo", nombre:"Jugos", color:"#00b9f2"},
        {id:"jugo-natural", nombre:"Jugos Naturales", color:"#1c6836"},
        {id:"jugo-grasa", nombre:"Jugos Quema Grasa", color:"#ff2e17"},
        {id:"licuado-leche", nombre:"Licuados con Leche", color:"#ffb63c"},
        {id:"licuado-especial", nombre:"Licuados Especiales", color:"#fb3199"},
        {id:"smoothie", nombre:"Smoothies", color:"#4c2795"},
    ];

    let items = [
        {menu:"gral", category: "ligero", platillo: "Coctel de fruta", descripcion: "Papaya, melón, fresa, plátano, manzana y kiwi.", precioC: "$79", precioG: "", imagen:"/img/coctel-fruta.png"},
        {menu:"gral", category: "ligero", platillo: "Yogurt con fruta", descripcion: "Papaya, melón, fresa, plátano, manzana, granola, coco, pasas, fibra, almendra, miel y yogurt.", precioC: "$95", precioG: "", imagen:"/img/yogurth.png"},
        {menu:"gral", category: "ligero", platillo: "Escamocha", descripcion: "Papaya, melón, fresa, plátano, manzana, granola, coco, pasas, fibra, almendra y leche condensada, acompañada de un preparado de escamocha.", precioC: "   $95", precioG: "", imagen:"/img/escamocha.png"},
        {menu:"gral", category: "sandwich", platillo: "Chicken", descripcion: "Pollo a la plancha (75g), lechuga, queso manchego, tomate y aguacate.", precioC: "$89", precioG: "", imagen:"/img/sandwich.png"},
        {menu:"gral", category: "sandwich", platillo: "Naturalito", descripcion: "Jamón de pavo (15g), lechuga, queso americano, tomate y aguacate.", precioC: "$57", precioG: "", imagen:"/img/sandwich.png"},
        {menu:"gral", category: "sandwich", platillo: "Club Sandwich", descripcion: "Pollo a la plancha (75g), jamón de pavo (30g), lechuga, tomate, aguacate y queso americano, acompañado de pequeña ensalada a base de lechuga, alfalfa, zanahoria, tomate, pepino y aguacate.", precioC: "$117", precioG: "", imagen:"/img/sandwich.png"},
        {menu:"gral", category: "sandwich", platillo: "Panelito", descripcion: "Jamón de pavo (15g), lechuga, queso panela, tomate y aguacate.", precioC: "$60", precioG: "", imagen:"/img/sandwich.png"},
        {menu:"gral", category: "sandwich", platillo: "Cochinita", descripcion: "Cochinita (60g), lechuga, queso manchego, tomate y aguacate", precioC: "$92", precioG: "", imagen:"/img/sandwich.png"},
        {menu:"gral", category: "sandwich", platillo: "Marino", descripcion: "Atún (45g), lechuga, tomate y aguacate.", precioC: "$68", precioG: "", imagen:"/img/sandwich.png"},
        {menu:"gral", category: "sopa", platillo: "Tortilla", descripcion: "Elaborada con caldo de pollo, con queso panela, queso chihuahua, aguacate, crema y fritura de tortilla.", precioC: "$110", precioG: "Con Pollo $140", imagen:"/img/tortilla.png"},
        {menu:"gral", category: "ensalada", platillo: "", descripcion2:"", descripcion: "Proteína para elegir : \n\tPollo a la plancha (M 90g - G 160g) \n\tJamón de pavo (M 70g - G 105g) \n\tAtún (M 100g - G 180g) \n\tQueso panela (M 70g - G 105g)", precioC: "", precioG: "", imagen:""},
        {menu:"gral", category: "ensalada", platillo: "Normal", descripcion: "Mix de lechugas, tomate, zanahoria, col morada, pepino y fritura de maíz o crutones.", precioC: "M. $130", precioG: "G. $165", imagen:"/img/ensalada-normal.png"},
        {menu:"gral", category: "ensalada", platillo: "Especial", descripcion: "Mix de lechugas, tomate, zanahoria, pepino, col morada, arándano, aceituna negra y fritura de maíz o crutones.", precioC: "M. $140", precioG: "G. $175", imagen:"/img/ensalada-especial.png"},
        {menu:"gral", category: "ensalada", platillo: "Griega", descripcion: "Mix de lechugas, elotitos, fusilli (pasta), zanahoria, queso parmesano, tomate, brócoli y fritura de maíz o crutones.", precioC: "M. $140", precioG: "G. $190", imagen:"/img/ensalada.griega.png"},
        {menu:"gral", category: "ensalada", platillo: "Saludable", descripcion: "Mix de lechugas, vinagreta de fresa, espinaca, col morada, fresa, kiwi, arándano, nuez y fritura de maíz o crutones.", precioC: "M. $140", precioG: "G. $185", imagen:"/img/ensalada-saludable.png"},
        {menu:"gral", category: "ensalada", platillo: "Mexicana", descripcion: "Mix de lechugas, aceite de oliva, tomate, zanahoria, pepino, chile morrón, elotitos, col morada y fritura de maíz o crutones.", precioC: "M. $140", precioG: "G. $175", imagen:"/img/ensalada-mexicana.png"},
        {menu:"gral", category: "ensalada", platillo: "Green Chicken", descripcion: "Mix de lechuga, espinaca, queso panela, pepino, fritura de maíz o crutones y pollo a la plancha bañado en aderezo de cilantro.", precioC: "M. $150", precioG: "G. $185", imagen:""},
        {menu:"gral", category: "ensalada", platillo: "Aderezo a elegir: Cilantro, ranch o chipotle.", descripcion: "", precioC: "", precioG: "", imagen:""},
        {menu:"gral", category: "focaccia", platillo: "", descripcion2:"", descripcion: "Todas las focaccias incluyen ensalada de mix de lechugas, zanahoria, tomate, pepino, germinado de alfalfa, aguacate, limón, jalapeños y col morada.", precioC: "", precioG: "", imagen:""},
        {menu:"gral", category: "focaccia", platillo: "Pollo a la plancha", descripcion: "Pollo a la plancha (75g), lechuga, queso manchego, tomate, germinado de alfalfa y aguacate. Aderezo a elegir.", precioC: "$127", precioG: "", imagen:"/img/focaccia-pollo.png"},
        {menu:"gral", category: "focaccia", platillo: "Jamón de Pavo", descripcion: "Jamón de pavo (30g), lechuga, queso americano, queso philadelphia, tomate, germinado de alfalfa y aguacate. Aderezo a elegir.", precioC: "$115", precioG: "", imagen:"/img/focaccia-jamon.png"},
        {menu:"gral", category: "focaccia", platillo: "Mixta", descripcion: "Pollo a la plancha (35g), jamón de pavo (30g), champiñones, lechuga, queso manchego, tomate, germinado de alfalfa y aguacate. Aderezo a elegir.", precioC: "$135", precioG: "", imagen:""},
        {menu:"gral", category: "focaccia", platillo: "Aderezo a elegir: Cilantro, ranch o chipotle.", descripcion: "", precioC: "", precioG: "", imagen:""},
        {menu:"gral", category: "combo", platillo: "Mañanero", descripcion: "Sándwich naturalito de jamón de pavo (30g) con coctel de frutas y té.", precioC: "$135", precioG: "", imagen:"/img/mananero.png"},
        {menu:"gral", category: "combo", platillo: "Baguette", descripcion: "Medio baguette de pollo (30g) con media ensalada fresca con pollo y té.", precioC: "$165", precioG: "", imagen:"/img/combo-pollo.png"},
        {menu:"gral", category: "combo", platillo: "Doradito", descripcion: "Sándwich doradito de jamón de pavo (30g) con ensalada fresca y té.", precioC: "$135", precioG: "", imagen:"/img/combo-doradito.png"},
        {menu:"gral", category: "combo", platillo: "", descripcion2:"", descripcion: "", precioC: "+ $20 cambia tu té por jugo de naranja", precioG: "", imagen:""},
        {menu:"gral", category: "baguette", platillo: "", descripcion2:"", descripcion: "Todos los baguettes van acompañados de ensalada de mix de lechuga, col morada, zanahoria, tomate, pepino, germinado de alfalfa y aguacate. Pan para elegir: Hierbas italianas, queso parmesano, ajonjolí, multigrano y salvado de ajo.", precioC: "", precioG: "", imagen:""},
        {menu:"gral", category: "baguette", platillo: "Pollo a la Plancha", descripcion: "Pollo a la plancha (75g), lechuga, queso manchego, tomate y aguacate.", precioC: "$128", precioG: "", imagen:""},
        {menu:"gral", category: "baguette", platillo: "Jamón de Pavo", descripcion: "Jamón de pavo (30g), lechuga, queso americano, queso crema, tomate, germinado de alfalfa y aguacate.", precioC: "$117", precioG: "", imagen:"/img/baguette-jamon.png"},
        {menu:"gral", category: "baguette", platillo: "Cochinita", descripcion: "Cochinita (60g), lechuga, queso manchego, tomate y aguacate", precioC: "$135", precioG: "", imagen:"/img/baguette-cochinita.png"},
        {menu:"gral", category: "baguette", platillo: "Atún", descripcion: "Atún (45g), lechuga, tomate, germinado de alfalfa y aguacate.", precioC: "$128", precioG: "", imagen:"/img/baguette-atun.png"},
        {menu:"gral", category: "cuernito", platillo: "", descripcion2:"", descripcion: "Todos los cuernitos incluyen ensalada de mix de lechugas, zanahoria, tomate, pepino, germinado de alfalfa y aguacate.", precioC: "", precioG: "", imagen:""},
        {menu:"gral", category: "cuernito", platillo: "Jamón de Pavo", descripcion: "Jamón de pavo (30g), lechuga, queso americano, tomate, germinado de alfalfa y aguacate.", precioC: "$95", precioG: "", imagen:"/img/cuernito-jamon.png"},
        {menu:"gral", category: "cuernito", platillo: "Pollo a la Plancha", descripcion: "Pollo a la plancha (75g), lechuga, queso manchego, tomate y aguacate.", precioC: "$110", precioG: "", imagen:"/img/cuernito-pollo.png"},
        {menu:"gral", category: "cuernito", platillo: "Cochinita", descripcion: "Cochinita (60g), lechuga, queso manchego, tomate y aguacate.", precioC: "$105", precioG: "", imagen:"/img/cuerno-cochinita.png"},
        {menu:"gral", category: "torta", platillo: "Jamón de Pavo", descripcion: "Jamón de pavo (30g), lechuga, queso americano, tomate y aguacate.", precioC: "$75", precioG: "", imagen:"/img/torta-jamon.png"},
        {menu:"gral", category: "torta", platillo: "Cochinita", descripcion: "Cochinita (60g), lechuga, queso manchego, tomate y aguacate.", precioC: "$95", precioG: "", imagen:"/img/torta-cochinita.png"},
        {menu:"gral", category: "torta", platillo: "Pollo a la plancha", descripcion: "Pollo a la plancha (75g), lechuga, queso manchego, tomate, aguacate y aderezo ranch.", precioC: "$90", precioG: "", imagen:"/img/torta-pollo.png"},
        {menu:"gral", category: "torta", platillo: "Especial", descripcion: "Jamón de pavo (15g), cochinita (50g), lechuga, queso manchego, queso americano, tomate y aguacate.", precioC: "$95", precioG: "", imagen:"/img/torta-especial.png"},
        {menu:"gral", category: "torta", platillo: "Pide tu torta ahogada por solo $18", descripcion: "", precioC: "", precioG: "", imagen:""},
        {menu:"gral", category: "quesadilla", platillo: "", descripcion2:"", descripcion: "Todas las quesadillas se pueden hacer con tortilla de harina, integral o nopal. Incluyen ensalada de mix de lechugas, zanahoria, tomate, pepino, germinado de alfalfa y aguacate.", precioC: "", precioG: "", imagen:""},
        {menu:"gral", category: "quesadilla", platillo: "Pollo a la Plancha", descripcion: "45g", precioC: "$67", precioG: "Nopal $65", imagen:"/img/quesadilla-pollo.png"},
        {menu:"gral", category: "quesadilla", platillo: "Cochinita", descripcion: "40g", precioC: "$67", precioG: "Nopal $65", imagen:"/img/quesadilla-cochinita.png"},
        {menu:"gral", category: "quesadilla", platillo: "Jamón de Pavo", descripcion: "30g", precioC: "$55", precioG: "Nopal $48", imagen:"/img/quesadilla-jamon.png"},
        {menu:"gral", category: "extras", platillo: "Caldo para torta", descripcion: "", precioC: "$18", precioG: "", imagen:""},
        {menu:"gral", category: "extras", platillo: "Aderezo ranch", descripcion: "", precioC: "$15 (2oz.)", precioG: "", imagen:""},
        {menu:"gral", category: "extras", platillo: "Aderezo de cilantro", descripcion: "", precioC: "$15 (2oz.)", precioG: "", imagen:""},
        {menu:"gral", category: "extras", platillo: "Aderezo de chipotle", descripcion: "", precioC: "$15 (2oz.)", precioG: "", imagen:""},
        {menu:"gral", category: "extras", platillo: "Porción de pollo (100g)", descripcion: "", precioC: "$40", precioG: "", imagen:""},
        {menu:"gral", category: "agua", platillo: "", descripcion2:"Agua fresca deliciosa con 100% fruta natural, elige a tu gusto", descripcion:" ", precioC: "", precioG: "", imagen:""},
        {menu:"gral", category: "agua", platillo: "Limón", descripcion: "", precioC: "16 oz. $35", precioG: "32 oz. $50", imagen:"/img/limonada.png"},
        {menu:"gral", category: "agua", platillo: "Papaya", descripcion: "", precioC: "16 oz. $35", precioG: "32 oz. $50", imagen:"/img/agua-papaya.png"},
        {menu:"gral", category: "agua", platillo: "Melón", descripcion: "", precioC: "16 oz. $40", precioG: "32 oz. $50", imagen:"/img/agua-melon.png"},
        {menu:"gral", category: "agua", platillo: "Piña", descripcion: "", precioC: "16 oz. $35", precioG: "32 oz. $55", imagen:"/img/agua-pina.png"},
        {menu:"gral", category: "agua", platillo: "Pepino", descripcion: "", precioC: "16 oz. $45", precioG: "32 oz. $55", imagen:"/img/agua-pepino.png"},
        {menu:"gral", category: "agua", platillo: "Fresa-kiwi", descripcion: "", precioC: "16 oz. $55", precioG: "32 oz. $85", imagen:"/img/agua-fresa-kiwi.png"},
        {menu:"gral", category: "agua", platillo: "Fresa-limón", descripcion: "", precioC: "16 oz. $59", precioG: "32 oz. $89", imagen:""},
        {menu:"gral", category: "jugo", platillo: "Antigripal", descripcion: "Limón, miel, jugo de naranja y toronja", precioC: "16 oz. $55", precioG: "32 oz. $89", imagen:"/img/antigripal.png"},
        {menu:"gral", category: "jugo", platillo: "Pura Vida", descripcion: "El jugo verde original de Mucha Vida con apio, piña, nopal, pepino, chayote, manzana verde, espinaca, sábila,perejil, avena, miel, jugo de naranja y jugo de toronja", precioC: "16 oz. $59", precioG: "32 oz. $99", imagen:"/img/pura-vida.png"},
        {menu:"gral", category: "jugo", platillo: "Champion", descripcion: "Apio, piña, nopal, pepino, chayote, sábila, perejil, avena, jugo de naranja, jugo de toronja, jugo de zanahoria y jugo de betabel.", precioC: "16 oz. $59", precioG: "32 oz. $99", imagen:"/img/champion.png"},
        {menu:"gral", category: "jugo", platillo: "Energético", descripcion: "Piña, espinaca, miel y jugo de naranja.", precioC: "16 oz. $59", precioG: "32 oz. $99", imagen:"/img/energetico.png"},
        {menu:"gral", category: "jugo", platillo: "Multisano", descripcion: "Papaya, melón, fresa, manzana roja y jugo de naranja.", precioC: "16 oz. $75", precioG: "32 oz. $120", imagen:"/img/multisano.png"},
        {menu:"gral", category: "jugo-natural", platillo: "Naranja", descripcion: "100% jugo de naranja natural", precioC: "16 oz. $49", precioG: "32 oz. $99", imagen:"/img/jugo-naranja.png"},
        {menu:"gral", category: "jugo-natural", platillo: "Toronja", descripcion: "", precioC: "16 oz. $49", precioG: "32 oz. $99", imagen:"/img/jugo-toronja.png"},
        {menu:"gral", category: "jugo-natural", platillo: "Zanahoria", descripcion: "", precioC: "16 oz. $49", precioG: "32 oz. $89", imagen:"/img/jugo-zanahoria.png"},
        {menu:"gral", category: "jugo-natural", platillo: "Combinados", descripcion: "Jugo fresco con la combinación que desees. Elige a tu gusto", precioC: "16 oz. $55", precioG: "32 oz. $99", imagen:""},
        {menu:"gral", category: "jugo-grasa", platillo: "Caloría", descripcion: "Apio, piña, nopal, miel y jugo de toronja.", precioC: "16 oz. $55", precioG: "32 oz. $89", imagen:"/img/caloria.png"},
        {menu:"gral", category: "jugo-grasa", platillo: "Kilogramo", descripcion: "Apio, piña, limón, jugo de naranja y jugo de toronja.", precioC: "16 oz. $55", precioG: "32 oz. $80", imagen:"/img/kilogramo.png"},
        {menu:"gral", category: "jugo-grasa", platillo: "Kilocaloría", descripcion: "Manzana roja, pepino, jugo de betabel y jugo de zanahoria.", precioC: "16 oz. $55", precioG: "32 oz. $80", imagen:"/img/kilocaloria.png"},
        {menu:"gral", category: "licuado-leche", platillo: "", descripcion2:"Delicioso y fresco licuado con leche y fruta 100% natural, elige a tu gusto", descripcion: "Licuados con leche a elegir (entera, light o deslactosada) y endulzante a elegir (azúcar, splenda o miel). +$12 cambia a leche de coco, almendra o soya.", precioC: "", precioG: "", imagen:""},
        {menu:"gral", category: "licuado-leche", platillo: "Chocomilk", descripcion: "", precioC: "16 oz. $49", precioG: "32 oz. $69", imagen:"/img/chocomilk.png"},
        {menu:"gral", category: "licuado-leche", platillo: "Jimmy Neutrón", descripcion: "Plátano, coco y almendra", precioC: "16 oz. $65", precioG: "32 oz. $85", imagen:"/img/jimmy-neutron.png"},
        {menu:"gral", category: "licuado-leche", platillo: "Hércules", descripcion: "Plátano, chocomilk y granola.", precioC: "16 oz. $55", precioG: "32 oz. $75", imagen:"/img/hercules.png"},
        {menu:"gral", category: "licuado-leche", platillo: "Fresita", descripcion: "Fresa fresca.", precioC: "16 oz. $70", precioG: "32 oz. $110", imagen:"/img/fresita.png"},
        {menu:"gral", category: "licuado-leche", platillo: "Sencillo", descripcion: "1 Ingrediente a escoger: Plátano, papaya, melón, mango (solo en temporada) y manzana roja.", precioC: "16 oz. $55", precioG: "32 oz. $75", imagen:"/img/licuado-papaya.png"},
        {menu:"gral", category: "licuado-leche", platillo: "Combinados", descripcion: "2 Ingredientes a elegir: Chocolate, plátano, papaya, melón, mango (solo en temporada) y manzana roja.", precioC: "16 oz. $75", precioG: "32 oz. $105", imagen:""},
        {menu:"gral", category: "licuado-especial", platillo: "", descripcion2:"", descripcion: "Licuado con leche y yogurt. Leche a elegir (entera, light o deslactosada). Endulzante a elegir (azúcar, splenda o miel). +12 pesos cambia a leche de coco, almendra o soya.", precioC: "", precioG: "", imagen:""},
        {menu:"gral", category: "licuado-especial", platillo: "Sube y Baja", descripcion: "Papaya, plátano, almendra y miel.", precioC: "16 oz. $65", precioG: "32 oz. $89", imagen:"/img/sube-baja.png"},
        {menu:"gral", category: "licuado-especial", platillo: "Extreme Fresa", descripcion: "Fresa y lecherita.", precioC: "16 oz. $79", precioG: "32 oz. $115", imagen:"/img/extreme-fresa.png"},
        {menu:"gral", category: "licuado-especial", platillo: "Aranflepa", descripcion: "Fresa, plátano, arándano y miel.", precioC: "16 oz. $65", precioG: "32 oz. $99", imagen:"/img/aranflepa.png"},
        {menu:"gral", category: "licuado-especial", platillo: "Mente Sana", descripcion: "Fresa, plátano, granola y miel.", precioC: "16 oz. $69", precioG: "32 oz. $99", imagen:"/img/mente-sana.png"},
        {menu:"gral", category: "smoothie", platillo: "", descripcion2:"", descripcion: "Elaborados con hielo, yogurt natural y endulzante a escoger (azúcar, splenda o miel)", precioC: "", precioG: "", imagen:""},
        {menu:"gral", category: "smoothie", platillo: "Naplafre", descripcion: "Fresa, plátano y jugo de naranja.", precioC: "16 oz. $59", precioG: "", imagen:"/img/naplafre.png"},
        {menu:"gral", category: "smoothie", platillo: "Bermuda", descripcion: "Fresa, kiwi y jugo de naranja.", precioC: "16 oz. $59", precioG: "", imagen:"/bermuda.png"},
        {menu:"gral", category: "smoothie", platillo: "Fresaya", descripcion: "Melón, fresa y papaya.", precioC: "16 oz. $72", precioG: "", imagen:""},
        {menu:"gral", category: "smoothie", platillo: "Fresa", descripcion: "Fresa fresca.", precioC: "16 oz. $72", precioG: "", imagen:"/img/smoothie-fresa.png"},
    ];

  function getFilteredItems(category) {
    return items.filter(item => item.category === category);
  }
</script>

<svelte:head>
  <title>Menú Mucha vida</title>
  <link rel="icon" href="">
</svelte:head>

<header class="w-full flex flex-col justify-center items-center h-92">
  <div class="m-1 bg-cover flex flex-col relative justify-center items-center">
      <img src="/img/mucha-vida.png" class="w-2/3 relative z-10" alt="Mucha Vida">
      <img src="/img/manchas.png" alt="Mancha Naranja" class="absolute z-0 -top-6 left-0">
  </div>
  <p class="uppercase font-bold font-bonesly text-4xl">Menú</p>
</header>
<Navbar />
{#each seccion as seccionItem}
<div id="{seccionItem.id}" class="scroll-mt-20"></div>
<div class="my-4 p-2 mx-2 shadow-[0_8px_30px_rgb(0,0,0,0.12)]" style="background-image: url(/img/papel.jpg);">
    <div>
        <p class="mx-4 text-7xl text-center font-bonesly 2xl" style="color:{seccionItem.color};">{seccionItem.nombre}</p>
    </div>
    {#each getFilteredItems(seccionItem.id) as item}
    {#if item.descripcion ==="" && item.platillo === "" && item.imagen === ""}
    <p class="text-center mt-6 font-bonesly text-3xl text-pink-500">{item.precioC}</p>
    {:else if item.platillo === "" && item.imagen === ""}
    <p style="color:{seccionItem.color};" class="font-semibold text-center text-lg my-2 [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">{item.descripcion2}</p>
    <p class="text-sm text-center mx-4 whitespace-pre-wrap">{item.descripcion}</p>
    {:else if item.descripcion ==="" && item.precioC === "" && item.imagen === ""}
    <p class="text-center mt-6 font-bold">{item.platillo}</p>
    {:else if item.imagen === ""}
    <div class="flex flex-col justify-center item-center my-1 mx-4">
        <div>
            <div class="flex items-center">
                <p class="text-xl font-bold">{item.platillo}</p>
                <div class="flex gap-5 font-bold text-red-700 justify-end my-1 flex-grow">
                    <p>{item.precioC}</p>
                    <p>{item.precioG}</p>
                </div>
            </div>
            <p class="text-sm font-medium text-justify">{item.descripcion}</p>
        </div>
    </div>
    {:else if item.precioG === ""}
    <div class="flex flex-col justify-center item-center my-1 mx-4">
      <div>
          <div class="flex items-center">
              <button on:click={() => openModal(item.imagen, '')} class="text-xl font-bold">{item.platillo}&thinsp;<i class='bx bxs-camera'></i></button>
              <div class="flex gap-5 font-bold text-red-700 justify-end my-1 flex-grow">
                  <p>{item.precioC}</p>
              </div>
          </div>
          <p class="text-sm font-medium text-justify">{item.descripcion}</p>
      </div>
  </div>
    {:else}
    <div class="flex flex-col justify-center item-center my-1 mx-4">
      <div>
          <div class="flex items-center">
              <button on:click={() => openModal(item.imagen, '')} class="text-xl font-bold">{item.platillo}&thinsp;<i class="fa-regular fa-image text-black"></i></button>
              <div class="flex gap-5 font-bold text-red-700 justify-end my-1 flex-grow">
                  <p>{item.precioC}</p>
                  <p>{item.precioG}</p>
              </div>
          </div>
          <p class="text-sm font-medium text-justify">{item.descripcion}</p>
      </div>
  </div>
    {/if}
    {/each}
</div>
{/each}
<div class="py-10"></div>
<footer class="fixed bottom-0 bg-pradera py-2 w-full" style="background-image: url(/img/papel-verde.jpg);">
  <!-- <div class="flex flex-col justify-center items-center bg-white">
    <p class="font-base uppercase font-bold pt-2">Ordena a domicilio</p>
    <div class="flex py-2 px-6 justify-between items-center gap-28">
      <a href="https://www.rappi.com.mx/culiacan/restaurantes/delivery/32126-la-pradera"><img class="max-h-8" src="/img/rappi.png" alt="Rappi"></a>
      <a href="https://www.ubereats.com/mx/store/la-pradera-las-quintas/6uNaw5LbQYOWzWKomXYnuA"><img class="max-h-8" src="/img/uber.png" alt="Uber"></a>
      <a href="https://www.didi-food.com/es-MX/food/store/5764607552088965378/Retaurante-La-Pradera"><img class="max-h-8" src="/img/didi.png" alt="Didi"></a>
    </div>
  </div> -->
    <div class="flex px-2 items-center gap-5">
      <button class="bg-white text-2xl border-black border-2 text-center self-center rounded-xl pb-1 px-3 w-2/3" on:click={() => dialog.showModal()}>Sucursales</button>
<Dialog bind:dialog on:close={() => console.log('closed')}>
  <div class="fixed inset-0 bg-black opacity-80" on:click={dialogClose} on:keyup={dialogClose}></div>
  <ul class="relative inset-0 p-4 rounded-3xl" style="background-image: url(/img/papel.jpg);">
    <p class="text-5xl font-bonesly text-yellow-500 text-center -mb-4">Patria</p>
    <li class="my-4">
      <div class="gap-3 flex items-center justify-between">
        <i class='bx bxs-map text-4xl text-red-600'></i>
        <a href="https://maps.app.goo.gl/NrxfoAf2LthPNrHM9" on:click={dialogClose}  target="_blank">Av. Patria 2956, Las Huertas, 80290 Culiacán Rosales, Sin., Mexico</a>
      </div>
      <div class="gap-3 flex items-center justify-center">
        <i class='bx bxs-phone-call text-2xl'></i>
        <a href="tel:+526677270090" class="text-left text-xl" on:click={dialogClose}  target="_blank">667 727 0090</a>
      </div>
    </li>
    <p class="text-5xl font-bonesly text-yellow-500 text-center -mb-4">Barrancos</p>
    <li class="my-4">
      <div class="gap-3 flex items-center justify-between">
        <i class='bx bxs-map text-4xl text-red-600'></i>
        <a href="https://maps.app.goo.gl/cY6YQMe65bqx8jGR6" on:click={dialogClose}  target="_blank">Av. Benjamín Hill 4394, Ferrocarrilera, 80194 Culiacán Rosales, Sin., Mexico</a>
      </div>
      <div class="gap-3 flex items-center justify-center">
        <i class='bx bxs-phone-call text-2xl'></i>
        <a href="tel:+526671730550" class="text-left text-xl" on:click={dialogClose}  target="_blank">667 173 0550</a>
      </div>
    </li>
    <p class="text-5xl font-bonesly text-yellow-500 text-center -mb-4">Almada</p>
    <li class="my-4">
      <div class="gap-3 flex items-center justify-between">
        <i class='bx bxs-map text-4xl text-red-600'></i>
        <a href="https://maps.app.goo.gl/e6bHFLKJhKLx6BtY8" on:click={dialogClose}  target="_blank">Calle Gral. Juan José Rios 999-b, Jorge Almada, 80200 Culiacán Rosales, Sin., Mexico</a>
      </div>
      <div class="gap-3 flex items-center justify-center">
        <i class='bx bxs-phone-call text-2xl'></i>
        <a href="tel:+526677128028" class="text-left text-xl" on:click={dialogClose}  target="_blank">667 712 8028</a>
      </div>
    </li>
    <p class="text-5xl font-bonesly text-yellow-500 text-center -mb-4">Conquista</p>
    <li class="my-4">
      <div class="gap-3 flex items-center justify-between">
        <i class='bx bxs-map text-4xl text-red-600'></i>
        <a href="https://maps.app.goo.gl/hxQh53YrT6ihGsDh6" on:click={dialogClose}  target="_blank">Rolando Arjona 3500 local 1, Valle Dorado, 80058 Culiacán Rosales, Sin., Mexico</a>
      </div>
      <div class="gap-3 flex items-center justify-center">
        <i class='bx bxs-phone-call text-2xl'></i>
        <a href="tel:+526674764658" class="text-left text-xl" on:click={dialogClose}  target="_blank">667 476 4658</a>
      </div>
    </li>
    <p class="text-5xl font-bonesly text-yellow-500 text-center -mb-4">La Cruz</p>
    <li class="my-4">
      <div class="gap-3 flex items-center justify-between">
        <i class='bx bxs-map text-4xl text-red-600'></i>
        <a href="https://maps.app.goo.gl/pFjUgiFmK16QtaT29" on:click={dialogClose}  target="_blank">Sur 1 94, Centro, 82700 La Cruz, Sin., Mexico</a>
      </div>
      <div class="gap-3 flex items-center justify-center">
        <i class='bx bxs-phone-call text-2xl'></i>
        <a href="tel:+526969610095" class="text-left text-xl" on:click={dialogClose}  target="_blank">696 961 0095</a>
      </div>
    </li>
  </ul>
</Dialog>
        <div class="flex flex-col justify-center items-center w-1/3">
            <p class="self-center">Siguenos:</p>
            <div class="flex gap-6 items-center">
              <a href="https://www.facebook.com/MuchaVidaCln/" target="_blank"><i class='bx bxl-facebook text-3xl text-blue-700'></i></a>
              <a href="https://www.instagram.com/muchavida.cln/" target="_blank"><i class=' bx bxl-instagram bg-gradient-to-bl from-pink-500 via-red-500 to-yellow-500 text-transparent bg-clip-text text-4xl'></i></a>
            </div>
        </div>
    </div>
</footer>
{#if isOverlayOpen}
  <Modal imagen={selectedImage} altText={alternativeText} closeModal={closeModal} hasImage={selectedImage !== null} />
{/if}