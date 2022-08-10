<template>
  <v-card  white max-width="400" class="mx-auto">
  <v-card-title class="headline">{{ number.text }}</v-card-title>
  <v-divider class="mx-3"></v-divider>
  <v-card-actions>
    <v-spacer></v-spacer>
    <v-card-subtitle class="mx-auto">type: {{ number.type }}</v-card-subtitle>
    <v-card-subtitle class="mx-auto">date: </v-card-subtitle>
  </v-card-actions>
  <ButtonPlus @click="set()"></ButtonPlus>
</v-card>
</template>

<script>
import Number from "../API/Number";
import ButtonPlus from "@/components/ButtonPlus.vue";

export default {
    data() {
        return {
            number: "test",
        };
    },
    created() {
        Number.getNumberAPI()
            .then((response) => {
            this.number = response.data;
            console.log(this.number);
        })
            .catch((error) => {
            console.log("Error" + error.response);
        });
    },
    method: {
        set() {
            localStorage.setItem(this.number);
        }
    },
    components: { ButtonPlus }
};
</script>