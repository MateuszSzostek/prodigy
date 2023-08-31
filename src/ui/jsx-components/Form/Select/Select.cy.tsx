import React from "react";
import Select from "./Select";
import { NTDUI } from "../../../../types/ui";
import { Vars } from "../../../../../test/testVariables";
import { testSelectOptions } from "../../../../../data";

describe("Select Component", () => {
  describe("Select Component styles", () => {
    it("Does Select Component render properly?", () => {
      cy.mount(<Select options={testSelectOptions} />);
      cy.get('[data-cy="select"]').should("be.visible");
    });
    it("Does Select Component render label properly?", () => {
      cy.mount(
        <Select options={testSelectOptions} label="Test Select Label" />
      );
      // see: https://on.cypress.io/mounting-react
      cy.get('[data-cy="select-label"]').should("be.visible");
    });
    it("Does Select Component field background has correct color?", () => {
      for (const [key, value] of Object.entries(NTDUI.MetaColors)) {
        cy.mount(
          <Select
            options={testSelectOptions}
            model={value as NTDUI.MetaColorType}
            label="Test Checkbox"
          />
        );
        cy.get('[data-cy="select-box"]')
          .should("have.css", "background-color")
          .and("eq", Vars[`${value}10`]);
      }
    });
    it("Does Select Component options box background has correct color?", () => {
      for (const [key, value] of Object.entries(NTDUI.MetaColors)) {
        cy.mount(
          <Select
            options={testSelectOptions}
            model={value as NTDUI.MetaColorType}
            label="Test Checkbox"
          />
        );
        cy.get('[data-cy="select-options-box"]')
          .should("have.css", "background-color")
          .and("eq", Vars[`${value}10`]);
      }
    });
    it("Does Select Component border field styles with colors are correct?", () => {
      for (const [key, value] of Object.entries(NTDUI.MetaColors)) {
        cy.mount(
          <Select
            options={testSelectOptions}
            border
            model={value as NTDUI.MetaColorType}
          />
        );
        cy.get('[data-cy="select-box"]')
          .should("have.css", "border")
          .and("eq", `1px solid ${Vars[`${value}05`]}`);
      }
    });
    it("Does Select Component border option box styles with colors are correct?", () => {
      for (const [key, value] of Object.entries(NTDUI.MetaColors)) {
        cy.mount(
          <Select
            options={testSelectOptions}
            border
            model={value as NTDUI.MetaColorType}
          />
        );
        cy.get('[data-cy="select-options-box"]')
          .should("have.css", "border")
          .and("eq", `1px solid ${Vars[`${value}05`]}`);
      }
    });
    it("Does Select Component size of field box is correct when use 'size' prop?", () => {
      const selectPaddingsY = {
        xs: "3.2px",
        sm: "6.4px",
        md: "9.6px",
        lg: "12.8px",
      };
      const selectPaddingsX = {
        xs: "3.2px",
        sm: "6.4px",
        md: "9.6px",
        lg: "12.8px",
      };

      for (const [key, value] of Object.entries(NTDUI.MetaSizes)) {
        cy.mount(
          <Select
            options={testSelectOptions}
            size={value as NTDUI.MetaSizeType}
          />
        );
        cy.get('[data-cy="select-box"]')
          .should("have.css", "padding-top")
          .and("eq", selectPaddingsY[`${value}`]);
        cy.get('[data-cy="select-box"]')
          .should("have.css", "padding-bottom")
          .and("eq", selectPaddingsY[`${value}`]);
        cy.get('[data-cy="select-box"]')
          .should("have.css", "padding-left")
          .and("eq", selectPaddingsX[`${value}`]);
        cy.get('[data-cy="select-box"]')
          .should("have.css", "padding-right")
          .and("eq", selectPaddingsX[`${value}`]);
      }
    });
    it("Does Select Component size of options box is correct when use 'size' prop?", () => {
      const selectOptionsPaddingsY = {
        xs: "3.2px",
        sm: "6.4px",
        md: "9.6px",
        lg: "12.8px",
      };
      const selectOptionsPaddingsX = {
        xs: "3.2px",
        sm: "6.4px",
        md: "9.6px",
        lg: "12.8px",
      };

      for (const [key, value] of Object.entries(NTDUI.MetaSizes)) {
        cy.mount(
          <Select
            options={testSelectOptions}
            size={value as NTDUI.MetaSizeType}
          />
        );
        cy.get('[data-cy="select-options-box"]')
          .should("have.css", "padding-top")
          .and("eq", selectOptionsPaddingsY[`${value}`]);
        cy.get('[data-cy="select-options-box"]')
          .should("have.css", "padding-bottom")
          .and("eq", selectOptionsPaddingsY[`${value}`]);
        cy.get('[data-cy="select-options-box"]')
          .should("have.css", "padding-left")
          .and("eq", selectOptionsPaddingsX[`${value}`]);
        cy.get('[data-cy="select-options-box"]')
          .should("have.css", "padding-right")
          .and("eq", selectOptionsPaddingsX[`${value}`]);
      }
    });
    it("Does Select Component field box shadow is corrent when use 'shade' prop?", () => {
      cy.mount(<Select options={testSelectOptions} shade />);
      cy.get('[data-cy="select-box"]')
        .should("have.css", "box-shadow")
        .and("eq", "rgba(0, 0, 0, 0.25) 1px 1px 4px 0px");
    });
    it("Does Select Component options box shadow is corrent when use 'shade' prop?", () => {
      cy.mount(<Select options={testSelectOptions} shade />);
      cy.get('[data-cy="select-options-box"]')
        .should("have.css", "box-shadow")
        .and("eq", "rgba(0, 0, 0, 0.25) 1px 1px 4px 0px");
    });

    it("Does Select Component field box appearance is correct when use solid 'appearance' prop?", () => {
      for (const [key, value] of Object.entries(NTDUI.MetaColors)) {
        cy.mount(
          <Select
            options={testSelectOptions}
            appearance={NTDUI.MetaAppearances.solid}
            model={value as NTDUI.MetaColorType}
          />
        );
        cy.get('[data-cy="select-box"]')
          .should("have.css", "border")
          .and("eq", `0px none rgb(0, 0, 0)`);
        cy.get('[data-cy="select-box"]')
          .should("have.css", "background-color")
          .and("eq", `${Vars[`${value}10`]}`);
        cy.get('[data-cy="select-box"]')
          .should("have.css", "color")
          .and("eq", `rgb(0, 0, 0)`);
      }
    });
    it("Does Select Component field box appearance is correct when use soft 'appearance' prop?", () => {
      for (const [key, value] of Object.entries(NTDUI.MetaColors)) {
        cy.mount(
          <Select
            options={testSelectOptions}
            appearance={NTDUI.MetaAppearances.soft}
            model={value as NTDUI.MetaColorType}
          />
        );
        cy.get('[data-cy="select-box"]')
          .should("have.css", "border")
          .and("eq", `0px none rgb(0, 0, 0)`);
        cy.get('[data-cy="select-box"]')
          .should("have.css", "background-color")
          .and("eq", `${Vars[`${value}10`]}`);
        cy.get('[data-cy="select-box"]')
          .should("have.css", "color")
          .and("eq", `rgb(0, 0, 0)`);
      }
    });
    it("Does Select Component field box appearance is correct when use simple 'appearance' prop?", () => {
      for (const [key, value] of Object.entries(NTDUI.MetaColors)) {
        cy.mount(
          <Select
            options={testSelectOptions}
            appearance={NTDUI.MetaAppearances.simple}
            model={value as NTDUI.MetaColorType}
          />
        );
        cy.get('[data-cy="select-box"]')
          .should("have.css", "border")
          .and("eq", `0px none rgb(0, 0, 0)`);
        cy.get('[data-cy="select-box"]')
          .should("have.css", "background-color")
          .and("eq", `rgb(255, 255, 255)`);
        cy.get('[data-cy="select-box"]')
          .should("have.css", "color")
          .and("eq", `rgb(0, 0, 0)`);
      }
    });

    it("Does Select Component options box appearance is correct when use solid 'appearance' prop?", () => {
      for (const [key, value] of Object.entries(NTDUI.MetaColors)) {
        cy.mount(
          <Select
            options={testSelectOptions}
            appearance={NTDUI.MetaAppearances.solid}
            model={value as NTDUI.MetaColorType}
          />
        );
        cy.get('[data-cy="select-options-box"]')
          .should("have.css", "border")
          .and("eq", `0px none rgb(0, 0, 0)`);
        cy.get('[data-cy="select-options-box"]')
          .should("have.css", "background-color")
          .and("eq", `${Vars[`${value}10`]}`);
        cy.get('[data-cy="select-options-box"]')
          .should("have.css", "color")
          .and("eq", `rgb(0, 0, 0)`);
      }
    });
    it("Does Select Component options box appearance is correct when use soft 'appearance' prop?", () => {
      for (const [key, value] of Object.entries(NTDUI.MetaColors)) {
        cy.mount(
          <Select
            options={testSelectOptions}
            appearance={NTDUI.MetaAppearances.soft}
            model={value as NTDUI.MetaColorType}
          />
        );
        cy.get('[data-cy="select-options-box"]')
          .should("have.css", "border")
          .and("eq", `0px none rgb(0, 0, 0)`);
        cy.get('[data-cy="select-options-box"]')
          .should("have.css", "background-color")
          .and("eq", `${Vars[`${value}10`]}`);
        cy.get('[data-cy="select-options-box"]')
          .should("have.css", "color")
          .and("eq", `rgb(0, 0, 0)`);
      }
    });
    it("Does Select Component options box appearance is correct when use simple 'appearance' prop?", () => {
      for (const [key, value] of Object.entries(NTDUI.MetaColors)) {
        cy.mount(
          <Select
            options={testSelectOptions}
            appearance={NTDUI.MetaAppearances.simple}
            model={value as NTDUI.MetaColorType}
          />
        );
        cy.get('[data-cy="select-options-box"]')
          .should("have.css", "border")
          .and("eq", `0px none rgb(0, 0, 0)`);
        cy.get('[data-cy="select-options-box"]')
          .should("have.css", "background-color")
          .and("eq", `rgb(255, 255, 255)`);
        cy.get('[data-cy="select-options-box"]')
          .should("have.css", "color")
          .and("eq", `rgb(0, 0, 0)`);
      }
    });

    it("Does Select Component change styles on pass extra class?", () => {
      cy.mount(
        <Select
          options={testSelectOptions}
          extraClass="select-test-class"
          label="Test Select Label"
          errorLabel="Test Error Label"
        />
      );
      cy.get('[data-cy="select-box"]')
        .should("have.css", "background-color")
        .and("eq", "rgb(255, 0, 0)");
      cy.get('[data-cy="select-options-box"]')
        .should("have.css", "background-color")
        .and("eq", "rgb(255, 0, 0)");
      cy.get('[data-cy="select-label"]')
        .should("have.css", "color")
        .and("eq", "rgb(0, 0, 255)");
      cy.get('[data-cy="select-error-label"]')
        .should("have.css", "color")
        .and("eq", "rgb(0, 0, 255)");
      cy.get('[data-cy="select-selectable-option-1"]')
        .should("have.css", "background-color")
        .and("eq", "rgb(0, 128, 0)");
    });
  });
  describe("Select Component events", () => {
    it("Can attach to Select Component 'onClick' event handler?", () => {
      function onSelectClickHandler(e) {
        expect(e?.target?.value).to.equal("Test Value");
      }
      cy.mount(
        <Select
          options={testSelectOptions}
          base={{ onClick: onSelectClickHandler, value: "Test Value" }}
        />
      );
      cy.get('[data-cy="select-input"]').should("have.prop", "onclick");
      cy.get('[data-cy="select-input"]').click();
    });
  });
  describe("Select Component funcionality", () => {
    it("Does Select Component is initially closed?", () => {
      cy.mount(<Select options={testSelectOptions} />);
      cy.get('[data-cy="checkbox-checkmark-box"]')
        .should("have.css", "visibility")
        .and("eql", "hidden");
      cy.get('[data-cy="checkbox-checkmark-box"]')
        .should("have.css", "opacity")
        .and("eql", "0");
    });

    it("Does Select Component has initialy value when you pass value prop?", () => {
      cy.mount(<Select options={testSelectOptions} />);
      cy.get('[data-cy="checkbox-checkmark-box"]')
        .should("have.css", "visibility")
        .and("eql", "hidden");
      cy.get('[data-cy="checkbox-checkmark-box"]')
        .should("have.css", "opacity")
        .and("eql", "0");
    });

    it("Does Select Component is open after click on it?", () => {
      cy.mount(<Select options={testSelectOptions} />);
      cy.get('[data-cy="checkbox"]').click();
      cy.get('[data-cy="checkbox-checkmark-box"]')
        .should("have.css", "visibility")
        .and("eql", "visible");
      cy.get('[data-cy="checkbox-checkmark-box"]')
        .should("have.css", "opacity")
        .and("eql", "1");
    });

    it("Does Select Component close after click outside selection box?", () => {
      cy.mount(<Select options={testSelectOptions} />);
      cy.get('[data-cy="checkbox"]').click();
      cy.get('[data-cy="checkbox-checkmark-box"]')
        .should("have.css", "visibility")
        .and("eql", "visible");
      cy.get('[data-cy="checkbox-checkmark-box"]')
        .should("have.css", "opacity")
        .and("eql", "1");
    });

    it("Does Select Component change value when you select option in selection box?", () => {
      cy.mount(<Select options={testSelectOptions} />);
      cy.get('[data-cy="checkbox"]').click();
      cy.get('[data-cy="checkbox-checkmark-box"]')
        .should("have.css", "visibility")
        .and("eql", "visible");
      cy.get('[data-cy="checkbox-checkmark-box"]')
        .should("have.css", "opacity")
        .and("eql", "1");
    });
  });
});
