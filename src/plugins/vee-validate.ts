import {
  required,
  digits,
  email,
  max,
  regex,
  min,
  max_value,
  min_value,
} from "vee-validate/dist/rules";
import { extend, setInteractionMode } from "vee-validate";

setInteractionMode("eager");

extend("digits", {
  ...digits,
  message: "{_field_} needs to be {length} digits. ({_value_})",
});

extend("required", {
  ...required,
  message: "{_field_} can not be empty",
});

extend("max", {
  ...max,
  message: "{_field_} may not be greater than {length} characters",
});

extend("min", {
  ...min,
  message: "{_field_} may be greater than {length} characters",
});

extend("max_value", {
  ...max_value,
  message: "{_field_} value is too long",
});

extend("min_value", {
  ...min_value,
  message: "{_field_} value is too short",
});

extend("regex", {
  ...regex,
  message: "{_field_} {_value_} does not match {regex}",
});

extend("email", {
  ...email,
  message: "Email must be valid",
});
