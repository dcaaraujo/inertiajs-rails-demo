<script setup>
import { computed, ref } from "vue";
import { format } from "date-fns";

defineProps({
  title: String,
  loginPath: String,
});

const currentDate = ref(new Date());
setInterval(() => {
  currentDate.value = new Date();
}, 1000);

const formattedDate = computed(() => {
  const date = currentDate.value;
  return format(date, "dd/MM/yyyy hh:mm:ss");
});
</script>

<template>
  <div class="container">
    <div class="block">
      <h1 class="title">{{ title }}</h1>
    </div>
    <div class="block">The current time is {{ formattedDate }}</div>
    <div class="block">
      <a id="login-button" :href="loginPath" class="button is-primary">Login</a>
    </div>
  </div>
</template>
