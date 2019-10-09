<template>
  <div class="card-content">
    <b-field label="ค่าที่เลือก">
      <b-slider size="is-large" @input="fireChanges" v-model="sliderValue"></b-slider>
    </b-field>
  </div>
</template>
<script>
import { EventBus } from "../../plugins/event-bus.js";

export default {
  created() {
    EventBus.$on('user-change-number', (number) => (this.sliderValue = number));
  },
  data() {
    return {
      sliderValue: 0,
    };
  },
  methods: {
      fireChanges() {
      EventBus.$emit("user-change-slider", this.sliderValue);
    },
  }
};
</script>