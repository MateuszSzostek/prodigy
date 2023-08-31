import React from "react";
import { TextInput } from "./TextInput";
import { NTDUI } from "../../../../types/ui";
import { Vars } from "../../../../../test/testVariables";

describe("TextInput Component", () => {
  describe("TextInput Component styles", () => {
    it("Does Button Component render properly?", () => {
      cy.mount(<TextInput />);
      // see: https://on.cypress.io/mounting-react
      cy.get('[data-cy="text-input"]').should("be.visible");
    });
    it("Does TextInput Component label render properly?", () => {
      cy.mount(<TextInput label="Test Input Label" />);
      // see: https://on.cypress.io/mounting-react
      cy.get('[data-cy="text-input-label"]').should("be.visible");
    });
    it("Does TextInput Component error label render properly?", () => {
      cy.mount(<TextInput error={["Test Input Error Label"]} />);
      // see: https://on.cypress.io/mounting-react
      cy.get('[data-cy="text-input-error-label"]').should("be.visible");
    });

    it("Does TextInput Component background has correct color without appearance prop?", () => {
      for (const [key, value] of Object.entries(NTDUI.MetaColors)) {
        cy.mount(
          <TextInput
            model={value as NTDUI.MetaColorType}
            label="Test TextInput"
          />
        );
        cy.get('[data-cy="text-input-field"]')
          .should("have.css", "background-color")
          .and("eq", Vars[`${value}08`]);
      }
    });

    it("Does TextInput Component background has correct color with solid appearance?", () => {
      for (const [key, value] of Object.entries(NTDUI.MetaColors)) {
        cy.mount(
          <TextInput
            appearance="solid"
            model={value as NTDUI.MetaColorType}
            label="Test TextInput"
          />
        );
        cy.get('[data-cy="text-input-field"]')
          .should("have.css", "background-color")
          .and("eq", Vars[`${value}08`]);
      }
    });

    it("Does TextInput Component background has correct color with soft appearance?", () => {
      for (const [key, value] of Object.entries(NTDUI.MetaColors)) {
        cy.mount(
          <TextInput
            appearance="soft"
            model={value as NTDUI.MetaColorType}
            label="Test TextInput"
          />
        );
        cy.get('[data-cy="text-input-field"]')
          .should("have.css", "background-color")
          .and("eq", Vars[`${value}10`]);
      }
    });

    it("Does TextInput Component background has correct color with simple appearance?", () => {
      for (const [key, value] of Object.entries(NTDUI.MetaColors)) {
        cy.mount(
          <TextInput
            appearance="simple"
            model={value as NTDUI.MetaColorType}
            label="Test TextInput"
          />
        );
        cy.get('[data-cy="text-input-field"]')
          .should("have.css", "background-color")
          .and("eq", `rgba(0, 0, 0, 0)`);
      }
    });

    it("Does TextInput Component border styles with colors are correct?", () => {
      for (const [key, value] of Object.entries(NTDUI.MetaColors)) {
        cy.mount(<TextInput border model={value as NTDUI.MetaColorType} />);
        cy.get('[data-cy="text-input-field"]')
          .should("have.css", "border")
          .and("eq", `1px solid ${Vars[`${value}05`]}`);
      }
    });
    it("Does TextInput Component size is correct when use 'size' prop?", () => {
      const textInputHeights = {
        xs: 28,
        sm: 36,
        md: 44,
        lg: 52,
      };

      for (const [key, value] of Object.entries(NTDUI.MetaSizes)) {
        cy.mount(<TextInput size={value as NTDUI.MetaSizeType} />);
        cy.get('[data-cy="text-input-field"]').should(($el) => {
          const height: number = +$el.css("height").split("px")[0];
          // expect(Math.floor(height)).to.be.equal(checkboxHeights[value]);
          expect(height).to.be.closeTo(textInputHeights[value], 1);
        });
      }
    });
    it("Does TextInput Component shadow is corrent when use 'shade' prop?", () => {
      cy.mount(<TextInput shade />);
      cy.get('[data-cy="text-input-field"]')
        .should("have.css", "box-shadow")
        .and("eq", "rgba(0, 0, 0, 0.25) 1px 1px 4px 0px");
    });

    it("Does TextInput Component change styles on pass extra class?", () => {
      cy.mount(
        <TextInput
          extraClass="text-input-test-class"
          label="Test Checkbox Label"
          error={["Test Error Label"]}
        />
      );
      cy.get('[data-cy="text-input-label"]')
        .should("have.css", "color")
        .and("eq", "rgb(0, 0, 255)");
      cy.get('[data-cy="text-input-field"]')
        .should("have.css", "background-color")
        .and("eq", "rgb(255, 0, 0)");
      cy.get('[data-cy="text-input-error-label"]')
        .should("have.css", "color")
        .and("eq", "rgb(0, 128, 0)");
    });
  });
  describe("TextInput Component events", () => {
    it("Can attach to TextInput Component 'onClick' event handler?", () => {
      function onTextInputClickHandler(e) {
        expect(e?.target?.value).to.equal("Test Value");
      }
      cy.mount(
        <TextInput
          base={{ onClick: onTextInputClickHandler, value: "Test Value" }}
        />
      );
      cy.get('[data-cy="text-input-field"]').should("have.prop", "onclick");
      cy.get('[data-cy="text-input-field"]').click();
    });
  });
  describe("TextInput Component funcionality", () => {
    it("Does TextInput Component is initially empty without any props?", () => {
      cy.mount(<TextInput />);
      cy.get('[data-cy="text-input-field"]').invoke("val").should("eq", "");
    });
    it("Does TextInput Component is filled after pass 'value' prop with correct data?", () => {
      cy.mount(<TextInput value="Test TextInput Value" />);
      cy.get('[data-cy="text-input-field"]')
        .invoke("val")
        .should((value) => {
          expect(value).to.be.equal("Test TextInput Value");
        });

      //.invoke("value")
      // .should("eq", "Test TextInput Value");
    });

    it("Does TextInput Component change value on type something in input field when initialy there are no 'value' prop?", () => {
      cy.mount(<TextInput />);
      cy.get('[data-cy="text-input-field"]').type("Test TextInput Text");
      cy.get('[data-cy="text-input-field"]')
        .invoke("val")
        .should("eq", "Test TextInput Text");
    });
  });
});
