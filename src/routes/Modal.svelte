<script>
    export let imagen;
    export let closeModal;
    export let altText;
    export let hasImage;
  </script>
  
  <div class="fixed inset-0 flex items-center justify-center z-40">
    <div class="fixed inset-0 opacity-90" style="background-image: url(/img/papel-verde.jpg);" on:click={closeModal}></div>
    <div class="relative">
      <button class="absolute top-2 right-4 text-xl text-white" on:click={closeModal}>
        <i class='bx bx-x text-3xl'></i>
      </button>
      {#if hasImage}
        <img class="w-[95%] m-auto" src={imagen} alt={altText} />
      {/if}
    </div>
  </div>
  