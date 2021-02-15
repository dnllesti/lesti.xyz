<template>
  <nav>

    <ul class="nav_links">
      <li><NuxtLink  to="/">Nyitólap</NuxtLink></li>
      <li><NuxtLink  to="/rolam">Rólam</NuxtLink></li>
      <li><NuxtLink  to="/projects">Projektek</NuxtLink></li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
@media (max-width: 767px) {

  li,
  a {
    padding: 1vh 0;
    font-weight: 500;
    font-size: 1.5rem;
    color: $main_contra;
    text-decoration: none;
  }
  .nav_links {
    list-style: none;
    padding:0;
  }
  .nav_links li {
    display: block;
    text-align: center;
  }
  .nav_links li a {
    transition: all 0.3 ease 0s;
  }

  .nav_links li a:hover {
    color: rgba($main_contra, 0.7);
  }
}
@media (min-width: 768px) {
  li,
  a {
    font-weight: 500;
    font-size: 1.2rem;
    color: $main_contra;
    text-decoration: none;
  }
  .nav_links {
    list-style: none;
    margin-right: 20px;
  }
  .nav_links li {
    display: inline-block;
    padding: 0px 20px;
  }
  .nav_links li a {
    transition: all 0.3 ease 0s;
  }

  .nav_links li a:hover {
    color: rgba($main_contra, 0.7);
  }
}
</style>