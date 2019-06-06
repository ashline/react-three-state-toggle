import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import { Welcome } from "@storybook/react/demo";

import ThreeStateToggle from "..";

storiesOf("Welcome", module).add("to Storybook", () => (
  <Welcome showApp={linkTo("ThreeStateToggle")} />
));
// .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
storiesOf("ThreeStateToggle", module).add("Component", () => (
  <ThreeStateToggle />
));
