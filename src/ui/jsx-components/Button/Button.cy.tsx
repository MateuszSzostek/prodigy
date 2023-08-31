import React from "react";
import Button from "./Button";
import { NTDUI } from "../../../types/ui";
import { Vars } from "../../../../test/testVariables";

describe("Button Component", () => {
  beforeEach(() => {});
  describe("Button Component styles", () => {
    it("Does Button Component render properly?", () => {
      cy.mount(<Button>Test Button</Button>);
      // see: https://on.cypress.io/mounting-react
      cy.get('[data-cy="btn"]').contains("Test Button");
    });
    it("Does Button Component background has correct color?", () => {
      for (const [key, value] of Object.entries(NTDUI.MetaColors)) {
        cy.mount(
          <Button model={value as NTDUI.MetaColorType}> Test Button</Button>
        );
        cy.get('[data-cy="btn"]')
          .should("have.css", "background-color")
          .and("eq", Vars[`${value}05`]);
      }
    });
    it("Does Button Component border styles with colors are correct?", () => {
      for (const [key, value] of Object.entries(NTDUI.MetaColors)) {
        cy.mount(
          <Button border model={value as NTDUI.MetaColorType}>
            Test Button
          </Button>
        );
        cy.get('[data-cy="btn"]')
          .should("have.css", "border")
          .and("eq", `1px solid ${Vars[`${value}05`]}`);
      }
    });
    it("Does Button Component border styles with no other options are correct?", () => {
      cy.mount(<Button border>Test Button</Button>);
      cy.get('[data-cy="btn"]')
        .should("have.css", "border")
        .and("eq", `1px solid ${Vars[`blue05`]}`);
    });
    it("Does Button Component size is correct when use 'size' prop?", () => {
      const btnHeights = {
        xs: "28px",
        sm: "36px",
        md: "44px",
        lg: "52px",
      };

      const btnPaddingsY = {
        xs: "3.2px",
        sm: "8px",
        md: "8px",
        lg: "8px",
      };

      const btnPaddingsX = { xs: "16px", sm: "16px", md: "16px", lg: "16px" };

      for (const [key, value] of Object.entries(NTDUI.MetaSizes)) {
        cy.mount(
          <Button size={value as NTDUI.MetaSizeType}>Test Button</Button>
        );
        cy.get('[data-cy="btn"]')
          .should("have.css", "height")
          .and("eq", btnHeights[value]);
        cy.get('[data-cy="btn"]')
          .should("have.css", "padding-top")
          .and("eq", btnPaddingsY[`${value}`]);
        cy.get('[data-cy="btn"]')
          .should("have.css", "padding-bottom")
          .and("eq", btnPaddingsY[`${value}`]);
        cy.get('[data-cy="btn"]')
          .should("have.css", "padding-left")
          .and("eq", btnPaddingsX[`${value}`]);
        cy.get('[data-cy="btn"]')
          .should("have.css", "padding-right")
          .and("eq", btnPaddingsX[`${value}`]);
      }
    });
    it("Does Button Component shadow is corrent when use 'shade' prop?", () => {
      cy.mount(<Button shade>Test Button</Button>);
      cy.get('[data-cy="btn"]')
        .should("have.css", "box-shadow")
        .and("eq", "rgba(0, 0, 0, 0.25) 1px 1px 4px 0px");
    });
    it("Does Button Component appearance is correct when use solid 'appearance' prop?", () => {
      for (const [key, value] of Object.entries(NTDUI.MetaColors)) {
        cy.mount(
          <Button
            appearance={NTDUI.MetaAppearances.solid}
            model={value as NTDUI.MetaColorType}
          >
            Test Button
          </Button>
        );
        cy.get('[data-cy="btn"]')
          .should("have.css", "border")
          .and("eq", `0px none ${Vars[`${value}10`]}`);
        cy.get('[data-cy="btn"]')
          .should("have.css", "background-color")
          .and("eq", `${Vars[`${value}05`]}`);
        cy.get('[data-cy="btn"]')
          .should("have.css", "color")
          .and("eq", `${Vars[`${value}10`]}`);
      }
    });
    it("Does Button Component appearance is correct when use soft 'appearance' prop?", () => {
      for (const [key, value] of Object.entries(NTDUI.MetaColors)) {
        cy.mount(
          <Button
            appearance={NTDUI.MetaAppearances.soft}
            model={value as NTDUI.MetaColorType}
          >
            Test Button
          </Button>
        );
        cy.get('[data-cy="btn"]')
          .should("have.css", "border")
          .and("eq", `0px none ${Vars[`${value}05`]}`);
        cy.get('[data-cy="btn"]')
          .should("have.css", "background-color")
          .and("eq", `${Vars[`${value}10`]}`);
        cy.get('[data-cy="btn"]')
          .should("have.css", "color")
          .and("eq", `${Vars[`${value}05`]}`);
      }
    });
    it("Does Button Component appearance is correct when use simple 'appearance' prop?", () => {
      for (const [key, value] of Object.entries(NTDUI.MetaColors)) {
        cy.mount(
          <Button
            appearance={NTDUI.MetaAppearances.simple}
            model={value as NTDUI.MetaColorType}
          >
            Test Button
          </Button>
        );
        cy.get('[data-cy="btn"]')
          .should("have.css", "border")
          .and("eq", `0px none ${Vars[`${value}05`]}`);
        cy.get('[data-cy="btn"]')
          .should("have.css", "background-color")
          .and("eq", `${Vars.transparent}`);
        cy.get('[data-cy="btn"]')
          .should("have.css", "color")
          .and("eq", `${Vars[`${value}05`]}`);
      }
    });
    it("Does Button Component change styles on pass extra class?", () => {
      cy.mount(<Button extraClass="btn-test-class">Test Button</Button>);
      cy.get('[data-cy="btn"]')
        .should("have.css", "background-color")
        .and("eq", "rgb(0, 128, 0)");
      cy.get('[data-cy="btn"]')
        .should("have.css", "color")
        .and("eq", "rgb(255, 0, 0)");
      cy.get('[data-cy="btn"]').should("have.css", "height").and("eq", "300px");
    });
  });
  describe("Button Component events", () => {
    it("Can attach to Button Component 'onClick' event handler?", () => {
      cy.mount(<Button base={{ onClick: () => {} }}>Test Button</Button>);
      // see: https://on.cypress.io/mounting-react
      cy.get('[data-cy="btn"]')
        .click()
        .should("have.prop", "onclick")
        .and("not.be.null");
    });
  });
  describe("Button Component properties", () => {
    it("Can change Button Component 'value' property?", () => {
      cy.mount(<Button base={{ value: "test" }}>Test Button</Button>);
      // see: https://on.cypress.io/mounting-react
      cy.get('[data-cy="btn"]')
        .should("have.prop", "value")
        .and("not.be.empty");
    });
    it("Can change Button Component 'type' property?", () => {
      cy.mount(<Button base={{ type: "reset" }}>Test Button</Button>);
      // see: https://on.cypress.io/mounting-react
      cy.get('[data-cy="btn"]').should("have.prop", "type").and("eq", "reset");
    });
    it("Can change Button Component 'id' property?", () => {
      cy.mount(<Button base={{ id: "test-id" }}>Test Button</Button>);
      // see: https://on.cypress.io/mounting-react
      cy.get('[data-cy="btn"]').should("have.prop", "id").and("eq", "test-id");
    });
    it("Can change Button Component 'name' property?", () => {
      cy.mount(<Button base={{ name: "test-name" }}>Test Button</Button>);
      // see: https://on.cypress.io/mounting-react
      cy.get('[data-cy="btn"]')
        .should("have.prop", "name")
        .and("eq", "test-name");
    });
  });
});
