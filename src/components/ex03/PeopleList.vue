<template>
  <div class="card-content">
    <b-field label="แสดงรายชื่อทั้งหมด" v-if="people.length">
      <b-table :data="people" 
        :columns="columns" 
        :selected.sync="people.deletePerson">
      </b-table>
    </b-field>
  </div>
</template>
<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
        checkedRows: [],
      columns: [
        {field: "stuId", label: "ID"},
        { field: "title", label: "คำนำหน้า" },
        { field: "firstName", label: "ชื่อ" },
        { field: "lastName", label: "นามสกุล" },
        { field: "isActive", label: "Active" }
      ]
    };
  },
  computed: {
    ...mapState("people", ["people"])
  },
  methods: {
    deletePerson() {
      this.$store.dispatch("people/deletePerson", {
          stuId: this.person.stuId,
        title: this.person.title,
        firstName: this.person.firstName,
        lastName: this.person.lastName,
        isActive: this.person.isActive,
      });
    }
  }
};
</script>