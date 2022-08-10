<template>
  <v-bottom-navigation app
  :value="value"
  color="red"
  >
      <v-btn link to="/">
        <span>HOME</span>
        <v-icon>mdi-history</v-icon>
      </v-btn>

      <v-btn to="/trivia">
        <span>TRIVIA</span>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn to="/math">
        <span>MATH</span>
        <v-icon>mdi-map-marker</v-icon>
      </v-btn>

      <v-btn to="/year">
        <span>YEAR</span>
        <v-icon>mdi-map-marker</v-icon>
      </v-btn>

      <v-btn to="/date">
        <span>DATE</span>
        <v-icon>mdi-map-marker</v-icon>
      </v-btn>

  </v-bottom-navigation>
</template>

<script>
  export default {
    data: () => ({ value: 1 }),
  }
</script>