import React from "react";
import { NumberInput } from "./NumberInput";
import { NTDUI } from "../../../../types/ui";
import { Vars } from "../../../../../test/testVariables";

describe("NumberInput Component", () => {
  describe("NumberInput Component styles", () => {
    it("Does Button Component render properly?", () => {
      cy.mount(<NumberInput />);
      // see: https://on.cypress.io/mounting-react
      cy.get('[data-cy="number-input"]').should("be.visible");
    });
    it("Does NumberInput Component label render properly?", () => {
      cy.mount(<NumberInput label="Test Input Label" />);
      // see: https://on.cypress.io/mounting-react
      cy.get('[data-cy="number-input-label"]').should("be.visible");
    });
    it("Does NumberInput Component error label render properly?", () => {
      cy.mount(<NumberInput error={["Test Input Error Label"]} />);
      // see: https://on.cypress.io/mounting-react
      cy.get('[data-cy="number-input-error-label"]').should("be.visible");
    });

    it("Does NumberInput Component background has correct color without appearance prop?", () => {
      for (const [key, value] of Object.entries(NTDUI.MetaColors)) {
        cy.mount(
          <NumberInput
            model={value as NTDUI.MetaColorType}
            label="Test NumberInput"
          />
        );
        cy.get('[data-cy="number-input-field"]')
          .should("have.css", "background-color")
          .and("eq", Vars[`${value}08`]);
      }
    });

    it("Does NumberInput Component background has correct color with solid appearance?", () => {
      for (const [key, value] of Object.entries(NTDUI.MetaColors)) {
        cy.mount(
          <NumberInput
            appearance="solid"
            model={value as NTDUI.MetaColorType}
            label="Test NumberInput"
          />
        );
        cy.get('[data-cy="number-input-field"]')
          .should("have.css", "background-color")
          .and("eq", Vars[`${value}08`]);
      }
    });

    it("Does NumberInput Component background has correct color with soft appearance?", () => {
      for (const [key, value] of Object.entries(NTDUI.MetaColors)) {
        cy.mount(
          <NumberInput
            appearance="soft"
            model={value as NTDUI.MetaColorType}
            label="Test NumberInput"
          />
        );
        cy.get('[data-cy="number-input-field"]')
          .should("have.css", "background-color")
          .and("eq", Vars[`${value}10`]);
      }
    });

    it("Does NumberInput Component background has correct color with simple appearance?", () => {
      for (const [key, value] of Object.entries(NTDUI.MetaColors)) {
        cy.mount(
          <NumberInput
            appearance="simple"
            model={value as NTDUI.MetaColorType}
            label="Test NumberInput"
          />
        );
        cy.get('[data-cy="number-input-field"]')
          .should("have.css", "background-color")
          .and("eq", `rgba(0, 0, 0, 0)`);
      }
    });

    it("Does NumberInput Component border styles with colors are correct?", () => {
      for (const [key, value] of Object.entries(NTDUI.MetaColors)) {
        cy.mount(<NumberInput border model={value as NTDUI.MetaColorType} />);
        cy.get('[data-cy="number-input-field"]')
          .should("have.css", "border")
          .and("eq", `1px solid ${Vars[`${value}05`]}`);
      }
    });
    it("Does NumberInput Component size is correct when use 'size' prop?", () => {
      const numberInputHeights = {
        xs: 28,
        sm: 36,
        md: 44,
        lg: 52,
      };

      for (const [key, value] of Object.entries(NTDUI.MetaSizes)) {
        cy.mount(<NumberInput size={value as NTDUI.MetaSizeType} />);
        cy.get('[data-cy="number-input-field"]').should(($el) => {
          const height: number = +$el.css("height").split("px")[0];
          // expect(Math.floor(height)).to.be.equal(checkboxHeights[value]);
          expect(height).to.be.closeTo(numberInputHeights[value], 1);
        });
      }
    });
    it("Does NumberInput Component shadow is corrent when use 'shade' prop?", () => {
      cy.mount(<NumberInput shade />);
      cy.get('[data-cy="number-input-field"]')
        .should("have.css", "box-shadow")
        .and("eq", "rgba(0, 0, 0, 0.25) 1px 1px 4px 0px");
    });

    it("Does NumberInput Component change styles on pass extra class?", () => {
      cy.mount(
        <NumberInput
          extraClass="number-input-test-class"
          label="Test Checkbox Label"
          error={["Test Error Label"]}
        />
      );
      cy.get('[data-cy="number-input-label"]')
        .should("have.css", "color")
        .and("eq", "rgb(0, 0, 255)");
      cy.get('[data-cy="number-input-field"]')
        .should("have.css", "background-color")
        .and("eq", "rgb(255, 0, 0)");
      cy.get('[data-cy="number-input-error-label"]')
        .should("have.css", "color")
        .and("eq", "rgb(0, 128, 0)");
    });
  });
  describe("NumberInput Component events", () => {
    it("Can attach to NumberInput Component 'onClick' event handler?", () => {
      function onNumberInputClickHandler(e) {
        expect(e?.target?.value).to.equal("Test Value");
      }
      cy.mount(
        <NumberInput
          base={{ onClick: onNumberInputClickHandler, value: "Test Value" }}
        />
      );
      cy.get('[data-cy="number-input-field"]').should("have.prop", "onclick");
      cy.get('[data-cy="number-input-field"]').click();
    });
  });
  describe("NumberInput Component funcionality", () => {
    it("Does NumberInput Component is initially empty without any props?", () => {
      cy.mount(<NumberInput />);
      cy.get('[data-cy="number-input-field"]').invoke("val").should("eq", "");
    });
    it("Does NumberInput Component is filled after pass 'value' prop with correct data?", () => {
      cy.mount(<NumberInput value="Test NumberInput Value" />);
      cy.get('[data-cy="number-input-field"]')
        .invoke("val")
        .should((value) => {
          expect(value).to.be.equal("Test numberInput Value");
        });

      //.invoke("value")
      // .should("eq", "Test numberInput Value");
    });

    it("Does NumberInput Component change value on type something in input field when initialy there are no 'value' prop?", () => {
      cy.mount(<NumberInput />);
      cy.get('[data-cy="number-input-field"]').type("Test NumberInput");
      cy.get('[data-cy="number-input-field"]')
        .invoke("val")
        .should("eq", "Test NumberInput");
    });
  });
});
