<script lang="ts">
    import { links } from "$lib/utils/links";
</script>

<div>
    <nav class="navbar">
        <ul>
            <li class="logo">Melindák</li>
            {#each links as link}
                <a href={link.url}>{link.name}</a>
            {/each}
        </ul>
    </nav>
</div>
