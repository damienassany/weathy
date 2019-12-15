import * as React from "react";
import { storiesOf } from "@storybook/react";
import { Day } from ".";
import { Icons } from "../Icon";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 200px;
`;

storiesOf("Day", module)
  .add("Default", () => (
    <Day
      icon={Icons["02d"]}
      label={"Mon. 16"}
      temperatures={{ min: "1°", max: "5°" }}
    />
  ))
  .add("Sized", () => (
    <Wrapper>
      <Day
        icon={Icons["02d"]}
        label={"Mon. 16"}
        temperatures={{ min: "1°", max: "5°" }}
      />
    </Wrapper>
  ))
  .add("Selected", () => (
    <Wrapper>
      <Day
        selected={true}
        icon={Icons["02d"]}
        label={"Mon. 16"}
        temperatures={{ min: "1°", max: "5°" }}
      />
    </Wrapper>
  ));
