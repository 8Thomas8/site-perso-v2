<script setup>
import XpCard from '../components/cards/xp-card.vue';

const experiences = [
  {
    type: 'CDI',
    enterprise: 'Bemove',
    city: 'Chantepie',
    date: 'Depuis 2020',
    resume: {
      skills: [
        'NuxtJS',
        'VueJS',
        'Javascript',
        'Typescript',
        'Scss',
      ],
      comment: 'Développement frontend, intégration et choix technologiques pour tous les sites du groupe, ainsi que des sites partenaires. Développement de correctifs, de nouvelles features ou de nouveaux projets.',
    },
    exemples: [
      {
        href: 'https://www.ariase.com/',
        target: '_blank',
        name: 'Ariase.com',
      },
      {
        href: 'https://www.degrouptest.com/',
        target: '_blank',
        name: 'Degrouptest.com',
      },
      {
        href: 'https://www.lesartisansdemenageurs.fr/',
        target: '_blank',
        name: 'Lesartisansdemenageurs.fr',
      },
      {
        href: 'https://www.bemove.fr/',
        target: '_blank',
        name: 'Bemove.fr',
      },
      {
        href: 'https://www.bemovepro.com/',
        target: '_blank',
        name: 'Bemovepro.com',
      },
      {
        href: 'https://www.lettre-recommandee.com/',
        target: '_blank',
        name: 'Lettre-recommandee.com',
      },
    ],
  },
  {
    type: 'CDI',
    enterprise: 'Apside',
    city: 'Rennes',
    date: '2019 à 2020',
    resume: {
      skills: [
        'Java',
        'Angular 5',
        'Javascript',
        'Typescript',
        'Css',
      ],
      comment: 'Développement frontend et backend sur des correctifs ou de nouvelles features pour le compte de RCI Banque (Renault, Nissan, Mitsubishi), concernant l\'espace client grand public.',
    },
    exemples: [
      {
        href: 'https://www.renaultbank.fr/connexion',
        target: '_blank',
        name: 'Espace client Renaultbank.fr',
      },
    ],
  },
  {
    type: 'Formation',
    enterprise: 'TactFactory',
    city: 'Noyal sur Vilaine',
    date: '2019',
    resume: {
      skills: [
        'Java',
        'Angular',
        'MySQL',
        'UML',
      ],
      comment: 'Formation de 3 mois sur Java et Angular, avec une promesse d\'embauche chez Apside Rennes en cas de réussite. L\'objectif était d\'être opérationnel à la fin de la formation.',
    },
    exemples: [],
  },
  {
    type: 'Formation',
    enterprise: 'Openclassrooms',
    city: 'En ligne',
    date: '2018 à 2019',
    resume: {
      skills: [
        'HTML/CSS',
        'Javascript',
        'Angular',
        'UML',
      ],
      comment: 'Formation  de développeur d\'application frontend de 12 mois, avec obtention d\'un titre RNCP en cas de réussite. L\'objectif était d\'être opérationnel dans le développement from scratch d\'une application web frontend, et de s\'initier aux outils de réflexion et de construction du projet, avant de commencer à coder.',
    },
    exemples: [],
  },
];
</script>

<template>
  <div>
  <Head>
    <Title>Thomas Rousseau - Mon CV</Title>
    <Meta name="description"
          content="Toutes mes expériences professionnelles marquantes dans ce domaine, ainsi que mes formations, sont présentes sur cette page. N'hésitez pas à les consulter."/>
  </Head>
  <section class="flex items-center h-full">
    <div class="w-full mx-auto max-w-5xl">
      <div class="px-4">
        <template v-for="(xp, index) in experiences" :key="index">
          <template v-if="index > 0">
            <div class="divider py-7 lg:py-14">
              <svg class="w-12 h-12 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                   xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
              </svg>
            </div>
          </template>
          <XpCard :xp="xp"/>
        </template>
      </div>
    </div>
  </section>
  </div>
</template>
