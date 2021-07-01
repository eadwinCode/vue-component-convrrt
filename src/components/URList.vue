<template>
  <ListURL>
    <template v-for="(action, idx) in actions">
      <ListItemURL @click="selected(action)" :key="idx">
        <FontAwesomeIcon :icon="action.icon" />
        {{ action.title }}
      </ListItemURL>
    </template>
  </ListURL>
</template>

<script lang="ts">
import Vue from "vue";
import { URLItemModel } from "./models/urlmodel";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { IMainTheme } from "@/theme/theme";
import { styled } from "@egoist/vue-emotion";

const ListURL = styled("ul")`
  background-color: ${({ theme }: { theme: IMainTheme; hasErrors: boolean }) =>
    theme.colors.white};
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  padding-left: 0;
  margin-bottom: 0;
  margin-top: 0;
  list-style: none;
  filter: drop-shadow(0px 16px 24px rgba(96, 97, 112, 0.3));
  position: relative;

  &:after {
    display: flex;
    content: "";
    background: ${({ theme }: { theme: IMainTheme; hasErrors: boolean }) =>
      theme.colors.white};
    transform: rotate(90deg);
    position: absolute;
    width: 12px;
    height: 6px;
    left: calc(50% - 12px / 2 + 57px);
    top: calc(50% - 6px / 2 - 3px);
  }
`;

const ListItemURL = styled("li")`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px 12px;
  cursor: pointer;
  font-size: 11px;
  line-height: 16px;
  overflow: auto;

  &:hover {
    background: ${({ theme }: { theme: IMainTheme; hasErrors: boolean }) =>
      theme.colors.lighterGray};
  }
  svg {
    padding-right: 0.5rem;
  }
`;

export default Vue.extend({
  name: "URListComponent",
  components: {
    ListURL,
    FontAwesomeIcon,
    ListItemURL,
  },
  props: {
    actions: {
      type: Array,
      required: true,
    },
  },
  methods: {
    selected: function (item: URLItemModel) {
      this.$emit("onSelectedAction", item);
    },
  },
});
</script>
