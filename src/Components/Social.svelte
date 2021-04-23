<!--src/Components/Social.svelte-->

<script>
    export let socialData = {};
    const { IMAGES_LIST, HEADING } = socialData;
</script>

<!----------------MARKUP----------------------->

<section id="social-media" class="section grey-bgcolor">
    <div class="container text-center">
        <h2 class="title text-center">{HEADING}</h2>
        <div class="social-icons section-body">
            {#each IMAGES_LIST as list}
                <a 
                    href={list.SOCIAL_LINK}
                    target="_blank">
                    <img src={list.IMG_SRC} alt={list.TITLE}>
                </a>
            {/each}
        </div>
    </div>
</section>

<!----------------STYLE----------------------->

<style>
    .social-icons img {
      width: 75px;
      transition: 0.5s;
    }
    .social-icons a:hover img {
      transform: translateY(-10px);
    }
    a:hover {
      text-decoration: none;
    }
</style>