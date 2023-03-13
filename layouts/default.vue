<template>
  <div class="flex min-h-screen flex-col bg-base-200">
        <ComponentsHeader/>

        <main class="flex-grow py-8 pt-3">
          <!-- Page content here -->
          <slot/>
        </main>

        <ComponentsFooter/>
  </div>
</template>
