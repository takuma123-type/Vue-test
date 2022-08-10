<template>
  <v-app>
    <v-content>
      <v-container fluid fill-height>
        <v-layout justify-center align-center>
          <router-view></router-view>
        </v-layout>
      </v-container>
    </v-content>
    <MenuBar />
  </v-app>
</template>

<script>
import MenuBar from "@/components/MenuBar.vue";
import ButtonPlus from "./components/ButtonPlus.vue";

export default {
  name: "App",
  components: {
    MenuBar,
    ButtonPlus
}
};
</script>