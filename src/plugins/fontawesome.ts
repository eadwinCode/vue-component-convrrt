import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faEnvelopeOpen,
  faNewspaper,
} from "@fortawesome/free-regular-svg-icons";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";

// this will bundle only registered icons to reduce bundle size
const icons = [faEnvelopeOpen, faNewspaper, faPhoneAlt];

library.add(...icons);
