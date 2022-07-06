<template>
  <div class="w-full mx-auto max-w-5xl">
    <div class="text-sm breadcrumbs">
      <ul>
        <li><NuxtLink to="/" title="Accueil">Accueil</NuxtLink></li>
        <li>Mon CV</li>
      </ul>
    </div>
    <div>
      <div class="carousel w-full">
        <div id="slide1" class="carousel-item relative w-full">
<!--          <img src="https://placeimg.com/800/200/arch" class="w-full" />-->
          <div>
            <h2 class="text-2xl font-extrabold">Bemove</h2>
            <h3 class="text-xl">Chantepie</h3>
            <p>Depuis 2020</p>
            <p class="py-6">Développement front end, intégration, choix technologiques</p>
            <ul>
              <li>Ariase.com</li>
              <li>Degrouptest.com</li>
              <li>lesartisansdemenageurs.com</li>
              <li>Projets partenaires et internes</li>
              <li>...</li>
            </ul>
            <div class="badge badge-primary">NuxtJS</div>
            <div class="badge badge-primary">Javascript</div>
            <div class="badge badge-primary">Typescript</div>
            <div class="badge badge-primary">SCSS</div>
          </div>
          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" class="btn btn-circle">❮</a>
            <a href="#slide2" class="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide2" class="carousel-item relative w-full">
          <img src="https://placeimg.com/800/200/arch" class="w-full" />
          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" class="btn btn-circle">❮</a>
            <a href="#slide3" class="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide3" class="carousel-item relative w-full">
          <img src="https://placeimg.com/800/200/arch" class="w-full" />
          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" class="btn btn-circle">❮</a>
            <a href="#slide4" class="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide4" class="carousel-item relative w-full">
          <img src="https://placeimg.com/800/200/arch" class="w-full" />
          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" class="btn btn-circle">❮</a>
            <a href="#slide1" class="btn btn-circle">❯</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
