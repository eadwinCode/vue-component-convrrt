<template>
  <StyledValidationProvider
    v-slot="v"
    ref="provider"
    name="field"
    :rules="validationRules"
    tag="div"
  >
    <InputField
      :type="inputType"
      :value="value"
      @input="value = $event.target.value"
      :hasErrors="v.errors.length > 0"
    />
    <div>
      <OkButton :hasErrors="v.errors.length > 0" @click="onSubmit"
        ><FontAwesomeIcon :icon="faCheck"
      /></OkButton>
      <CloseButton :hasErrors="v.errors.length > 0" @click="onCancelled"
        ><FontAwesomeIcon :icon="faTimes"
      /></CloseButton>
    </div>
  </StyledValidationProvider>
</template>

<script lang="ts">
import Vue from "vue";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { StyledValidationProvider } from "./validators";
import { OkButton, CloseButton } from "./Buttons";
import { InputField } from "./Inputs";

export default Vue.extend({
  name: "URLInputComponent",
  components: {
    // ValidationProvider,
    StyledValidationProvider,
    OkButton,
    FontAwesomeIcon,
    CloseButton,
    InputField,
  },
  props: {
    inputType: {
      required: true,
      type: String,
    },
    validationRules: {
      required: true,
      type: String,
    },
  },
  data() {
    const value = "";
    return { value, faCheck, faTimes };
  },
  methods: {
    onSubmit: async function () {
      const result: {
        valid: boolean;
        required: boolean;
        errors: Array<string>;
      } = await (this.$refs.provider as any).validate();
      if (result.valid) {
        this.$emit("onSubmit", this.value);
      }
    },
    onCancelled: function () {
      this.value = "";
      this.$emit("onCancelled");
    },
  },
});
</script>
