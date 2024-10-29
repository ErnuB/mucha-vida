<script>
    import { onMount } from 'svelte';

    let seccion = [
        {id:"ligero", nombre:"Lo Ligero", color:"#fb3199"},
        {id:"sandwich", nombre:"Sandwiches", color:"#df9030"},
        {id:"sopa", nombre:"Sopas", color:"#ff422e"},
        {id:"ensalada", nombre:"Ensaladas", color:"#18b04d"},
        {id:"focaccia", nombre:"Focaccias", color:"#ff422e"},
        {id:"combo", nombre:"Combos", color:"#11ae4e"},
        {id:"baguette", nombre:"Baguettes", color:"#fb3199"},
        {id:"quesadilla", nombre:"Quesadillas", color:"#ffae47"},
        {id:"cuernito", nombre:"Cuernitos", color:"#ff5624"},
        {id:"torta", nombre:"Tortas", color:"#2ab0a1"},
        {id:"extras", nombre:"Extras", color:"#18b04d"},
        {id:"agua", nombre:"Bebidas", color:"#2ab0a1"},
    ];


    let isNavOpen = false;

    let toggleNav = () => {
    isNavOpen = !isNavOpen;
    updateAriaExpanded();
  };

  const closeNav = () => {
    isNavOpen = false;
    updateAriaExpanded();
  };

  const updateAriaExpanded = () => {
    const navBar = document.getElementById('nav-bar');
    if (navBar) {
      navBar.setAttribute('aria-expanded', isNavOpen.toString());
    }
  };

  onMount(() => {
    updateAriaExpanded();
  });
</script>

<section class="sticky top-0 flex h-20 flex-col z-30" style="background-image: url(/img/papel-verde.jpg);">
    <div class="flex items-center justify-center">
        <div class="mx-4 grow">
            <a href="/">
                <img src="/img/mucha-vida.png" alt="Mucha Vida" class="max-h-14">
            </a>
        </div>
        <button class="p-6" aria-expanded="{isNavOpen}" aria-controls="nav-bar" on:click={toggleNav}><i class='bx bx-menu text-4xl'></i></button>
    </div>
{#if isNavOpen}
    <nav id="nav-bar" class="bg-white font-base font-semibold text-xl text-right">
        {#each seccion as seccionItem}
        <div class="relative my-4 pr-10">
            <a href="#{seccionItem.id}" class="" style="color: {seccionItem.color};" on:click={closeNav}>{seccionItem.nombre}</a>
        </div>
        {/each}
    </nav>
{/if}
</section>
