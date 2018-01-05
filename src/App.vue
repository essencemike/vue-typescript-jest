<template>
  <div id="app">
    <img @click="updateStatusAsync(!loading)" src="./assets/logo.png">
    <span @click="updateStatus(!loading)">{{ typescript }} {{ loading }}</span>
    <router-view/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { Getter, Mutation, Action } from 'vuex-class';
import * as TYPES from '@/constants';

@Component
export default class App extends Vue {
  typescript: string = 'I`m typescript';

  @Getter loading: boolean;
  @Mutation(TYPES.UPDATE_STATUS) updateStatus: any;
  @Action(TYPES.UPDATE_STATUS) updateStatusAsync: any;
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
