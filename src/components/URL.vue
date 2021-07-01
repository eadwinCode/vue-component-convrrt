<template>
  <URLContainer :isEditing="isEdit">
    <URLPreview v-if="!isEdit">
      <!-- URL Type Toggle -->
      <URLActionToggle @click="toggle = !toggle">
        <FontAwesomeIcon :icon="toggleIcon" />
        <URListComponent
          :style="{ display: toggle ? 'block' : 'none' }"
          :actions="urllist.urlActions"
          @onSelectedAction="onSelected"
        />
      </URLActionToggle>
      <!-- Content Preview -->
      <URLPreviewContent>
        <div>
          {{ urllist.currentUrlItem ? urllist.currentUrlItem.value : "URL" }}
        </div>
        <span
          v-if="urllist.currentUrlItem !== null"
          @click="() => urllist.clear()"
          ><FontAwesomeIcon :icon="faTrashAlt"
        /></span>
      </URLPreviewContent>
      <!-- External Link Toggle -->
      <URLToggleExternal @click="openOnNewTab">
        <FontAwesomeIcon :icon="faExternalLinkAlt" />
      </URLToggleExternal>
    </URLPreview>
    <!-- Input Component -->
    <URLInputComponent
      v-else-if="urllist.currentUrlItem !== null"
      :inputType="urllist.currentUrlItem.inputType"
      :validationRules="urllist.currentUrlItem.validationRules"
      @onCancelled="onEditCancelled"
      @onSubmit="inputAccepted"
    />
  </URLContainer>
</template>

<script lang="ts">
import Vue from "vue";
import { URIListModel, URLItemModel } from "./models/urlmodel";
import {
  faEnvelopeOpen,
  faNewspaper,
} from "@fortawesome/free-regular-svg-icons";
import {
  faPhoneAlt,
  faLink,
  faExternalLinkAlt,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
import URListComponent from "./URList.vue";
import URLInputComponent from "./URLInput.vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { URLActionToggle, URLToggleExternal } from "./Buttons";
import { URLPreview, URLPreviewContent, URLContainer } from "./divs";

export default Vue.extend({
  name: "URL",
  components: {
    URLInputComponent,
    URListComponent,
    URLContainer,
    URLActionToggle,
    URLPreview,
    FontAwesomeIcon,
    URLPreviewContent,
    URLToggleExternal,
  },
  computed: {
    toggleIcon: function () {
      if ((this as any).urllist.currentUrlItem === null) {
        return faLink;
      }
      return (this as any).urllist.currentUrlItem.icon;
    },
  },
  data() {
    const urllist = new URIListModel();
    urllist.addUrlComponent(
      faEnvelopeOpen, // icon
      "Link to Email", // title
      "required|email", // validationRule
      "email" // input type
    );
    urllist.addUrlComponent(faNewspaper, "Link to URL", "required");
    urllist.addUrlComponent(faPhoneAlt, "Link to Phone", "required", "number");

    return {
      urllist,
      toggle: false,
      isEdit: false,
      faLink,
      faExternalLinkAlt,
      faTrashAlt,
    };
  },

  methods: {
    onSelected: function (item: URLItemModel) {
      (this as any).urllist.currentUrlItem = item;
      (this as any).toggle = false;
      (this as any).isEdit = true;
      console.log((this as any).urllist);
    },
    inputAccepted: function (value: string) {
      (this as any).isEdit = !(this as any).isEdit;
      (this as any).toggle = false;
      if ((this as any).urllist.currentUrlItem) {
        (this as any).urllist.currentUrlItem.value = value;
      }
      console.log("inputAccepted", value);
    },
    onEditCancelled: function () {
      (this as any).isEdit = !(this as any).isEdit;
      (this as any).urllist.clear();
      console.log("onEditCancelled called");
    },
    openOnNewTab: function () {
      if ((this as any).urllist.currentUrlItem) {
        window.open((this as any).urllist.currentUrlItem.value, "_blank");
      }
    },
  },
});
</script>
