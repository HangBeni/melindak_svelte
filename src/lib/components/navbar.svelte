<script lang="ts">
  let links : Links = [
    { name: "Főoldal", url: "/" },
    { name: "Rólunk", url: "/about_us" },
    { name: "Időpontfogalás", url: "/appointment" },
    {name: "Itt születtem történeteket", url: "/i_birth_here"}
  ];
</script>


<nav>
  <h1>Melindák</h1>
  {
    links.map((link) => (
      <a href={link.url}>{link.name}</a>
    ))
  } 
</nav>
