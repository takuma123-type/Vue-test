<template>
  <v-app class="button-plus">
    <div class="text-center ma-4">
      <v-btn
        fab
        color="primary"
      >
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </div>
  </v-app>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
  .button-plus {
  position: fixed;
  bottom: 18px;
   right: 18px;
   width: 7em;
}
</style>