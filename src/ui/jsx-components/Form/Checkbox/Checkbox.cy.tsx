import React from "react";
import Checkbox from "./Checkbox";
import { NTDUI } from "../../../../types/ui";
import { Vars } from "../../../../../test/testVariables";

describe("Checkbox Component", () => {
  describe("Checkbox Component styles", () => {
    it("Does Button Component render properly?", () => {
      cy.mount(<Checkbox />);
      // see: https://on.cypress.io/mounting-react
      cy.get('[data-cy="checkbox"]').should("be.visible");
    });
    it("Does Button Component render label properly?", () => {
      cy.mount(<Checkbox label="Test Checkbox" />);
      // see: https://on.cypress.io/mounting-react
      cy.get('[data-cy="checkbox-label"]').should("be.visible");
    });
    it("Does Checkbox Component background has correct color?", () => {
      for (const [key, value] of Object.entries(NTDUI.MetaColors)) {
        cy.mount(
          <Checkbox
            model={value as NTDUI.MetaColorType}
            label="Test Checkbox"
          />
        );
        cy.get('[data-cy="checkbox-box"]')
          .should("have.css", "background-color")
          .and("eq", Vars[`${value}10`]);
      }
    });
    it("Does Checkbox Component background has correct color when has checked status?", () => {
      for (const [key, value] of Object.entries(NTDUI.MetaColors)) {
        cy.mount(
          <Checkbox
            model={value as NTDUI.MetaColorType}
            label="Test Checkbox"
          />
        );
        cy.get('[data-cy="checkbox-checkmark-box"]')
          .should("have.css", "background-color")
          .and("eq", Vars[`${value}05`]);
      }
    });
    it("Does Checkbox Component checkmark has correct color when has checked status?", () => {
      for (const [key, value] of Object.entries(NTDUI.MetaColors)) {
        cy.mount(
          <Checkbox
            model={value as NTDUI.MetaColorType}
            label="Test Checkbox"
          />
        );
        cy.get('[data-cy="checkbox-checkmark-box"]')
          .should("have.css", "color")
          .and("eq", Vars[`${value}10`]);
      }
    });
    it("Does Checkbox Component border styles with colors are correct?", () => {
      for (const [key, value] of Object.entries(NTDUI.MetaColors)) {
        cy.mount(<Checkbox border model={value as NTDUI.MetaColorType} />);
        cy.get('[data-cy="checkbox-box"]')
          .should("have.css", "border")
          .and("eq", `1px solid ${Vars[`${value}05`]}`);
      }
    });
    it("Does Checkbox Component size is correct when use 'size' prop?", () => {
      const checkboxHeights = {
        xs: 28,
        sm: 30,
        md: 36,
        lg: 41,
      };

      for (const [key, value] of Object.entries(NTDUI.MetaSizes)) {
        cy.mount(<Checkbox size={value as NTDUI.MetaSizeType} />);
        cy.get('[data-cy="checkbox"]').should(($el) => {
          const height: number = +$el.css("height").split("px")[0];
          // expect(Math.floor(height)).to.be.equal(checkboxHeights[value]);
          expect(height).to.be.closeTo(checkboxHeights[value], 1);
        });
      }
    });
    it("Does Checkbox Component shadow is corrent when use 'shade' prop?", () => {
      cy.mount(<Checkbox shade />);
      cy.get('[data-cy="checkbox-box"]')
        .should("have.css", "box-shadow")
        .and("eq", "rgba(0, 0, 0, 0.25) 1px 1px 4px 0px");
    });
    it("Does Checkbox Component appearance is correct when use solid 'appearance' prop?", () => {
      for (const [key, value] of Object.entries(NTDUI.MetaColors)) {
        cy.mount(
          <Checkbox
            appearance={NTDUI.MetaAppearances.solid}
            model={value as NTDUI.MetaColorType}
          />
        );
        cy.get('[data-cy="checkbox-box"]')
          .should("have.css", "border")
          .and("eq", `0px none rgb(0, 0, 0)`);
        cy.get('[data-cy="checkbox-box"]')
          .should("have.css", "background-color")
          .and("eq", `${Vars[`${value}10`]}`);
        cy.get('[data-cy="checkbox-checkmark-box"]')
          .should("have.css", "background-color")
          .and("eq", `${Vars[`${value}05`]}`);
        cy.get('[data-cy="checkbox-checkmark"]')
          .should("have.css", "color")
          .and("eq", `${Vars[`${value}10`]}`);
      }
    });
    it("Does Button Component appearance is correct when use soft 'appearance' prop?", () => {
      for (const [key, value] of Object.entries(NTDUI.MetaColors)) {
        cy.mount(
          <Checkbox
            appearance={NTDUI.MetaAppearances.soft}
            model={value as NTDUI.MetaColorType}
          />
        );
        cy.get('[data-cy="checkbox-box"]')
          .should("have.css", "border")
          .and("eq", `0px none rgb(0, 0, 0)`);
        cy.get('[data-cy="checkbox-box"]')
          .should("have.css", "background-color")
          .and("eq", `${Vars[`${value}10`]}`);
        cy.get('[data-cy="checkbox-checkmark-box"]')
          .should("have.css", "background-color")
          .and("eq", `${Vars[`${value}10`]}`);
        cy.get('[data-cy="checkbox-checkmark"]')
          .should("have.css", "color")
          .and("eq", `${Vars[`${value}05`]}`);
      }
    });
    it("Does Checkbox Component appearance is correct when use simple 'appearance' prop?", () => {
      for (const [key, value] of Object.entries(NTDUI.MetaColors)) {
        cy.mount(
          <Checkbox
            appearance={NTDUI.MetaAppearances.simple}
            model={value as NTDUI.MetaColorType}
          />
        );
        cy.get('[data-cy="checkbox-box"]')
          .should("have.css", "border")
          .and("eq", `0px none rgb(0, 0, 0)`);
        cy.get('[data-cy="checkbox-box"]')
          .should("have.css", "background-color")
          .and("eq", `rgba(0, 0, 0, 0)`);
        cy.get('[data-cy="checkbox-checkmark-box"]')
          .should("have.css", "background-color")
          .and("eq", `rgba(0, 0, 0, 0)`);
        cy.get('[data-cy="checkbox-checkmark"]')
          .should("have.css", "color")
          .and("eq", `${Vars[`${value}05`]}`);
      }
    });
    it("Does Button Component change styles on pass extra class?", () => {
      cy.mount(
        <Checkbox
          extraClass="checkbox-test-class"
          label="Test Checkbox Label"
          errorLabel="Test Error Label"
        />
      );
      cy.get('[data-cy="checkbox-box"]')
        .should("have.css", "background-color")
        .and("eq", "rgb(255, 255, 0)");
      cy.get('[data-cy="checkbox-checkmark-box"]')
        .should("have.css", "background-color")
        .and("eq", "rgb(68, 102, 187)");
      cy.get('[data-cy="checkbox-checkmark"]')
        .should("have.css", "color")
        .and("eq", "rgb(236, 240, 248)");
      cy.get('[data-cy="checkbox-label"]')
        .should("have.css", "color")
        .and("eq", "rgb(0, 0, 139)");
      cy.get('[data-cy="checkbox-input"]')
        .should("have.css", "height")
        .and("eq", "400px");
      cy.get('[data-cy="checkbox-error-label"]')
        .should("have.css", "color")
        .and("eq", "rgb(0, 128, 0)");
    });
  });
  describe("Checkbox Component events", () => {
    it("Can attach to Checkbox Component 'onClick' event handler?", () => {
      function onCheckBoxClickHandler(e) {
        expect(e?.target?.value).to.equal("Test Value");
      }
      cy.mount(
        <Checkbox
          base={{ onClick: onCheckBoxClickHandler, value: "Test Value" }}
        />
      );
      cy.get('[data-cy="checkbox-input"]').should("have.prop", "onclick");
      cy.get('[data-cy="checkbox-input"]').click();
    });
  });
  describe("Checkbox Component funcionality", () => {
    it("Does Checkbox Component is initially unchecked without any props?", () => {
      cy.mount(<Checkbox />);
      cy.get('[data-cy="checkbox-checkmark-box"]')
        .should("have.css", "visibility")
        .and("eql", "hidden");
      cy.get('[data-cy="checkbox-checkmark-box"]')
        .should("have.css", "opacity")
        .and("eql", "0");
    });
    it("Does Checkbox Component is checked after click on it without any props?", () => {
      cy.mount(<Checkbox />);
      cy.get('[data-cy="checkbox"]').click();
      cy.get('[data-cy="checkbox-checkmark-box"]')
        .should("have.css", "visibility")
        .and("eql", "visible");
      cy.get('[data-cy="checkbox-checkmark-box"]')
        .should("have.css", "opacity")
        .and("eql", "1");
    });
    it("Does Checkbox Component is initially unchecked with checked prop set to false?", () => {
      cy.mount(<Checkbox checked={false} />);
      cy.get('[data-cy="checkbox-checkmark-box"]')
        .should("have.css", "visibility")
        .and("eql", "hidden");
      cy.get('[data-cy="checkbox-checkmark-box"]')
        .should("have.css", "opacity")
        .and("eql", "0");
    });
    it("Does Checkbox Component is checked after click on it with checked prop set to false?", () => {
      cy.mount(<Checkbox checked={false} />);
      cy.get('[data-cy="checkbox"]').click();
      cy.get('[data-cy="checkbox-checkmark-box"]')
        .should("have.css", "visibility")
        .and("eql", "visible");
      cy.get('[data-cy="checkbox-checkmark-box"]')
        .should("have.css", "opacity")
        .and("eql", "1");
    });

    it("Does Checkbox Component is initially checked with checked prop set to true?", () => {
      cy.mount(<Checkbox checked={true} />);
      cy.get('[data-cy="checkbox-checkmark-box"]')
        .should("have.css", "visibility")
        .and("eql", "visible");
      cy.get('[data-cy="checkbox-checkmark-box"]')
        .should("have.css", "opacity")
        .and("eql", "1");
    });
    it("Does Checkbox Component is unchecked after click on it with checked prop set to true?", () => {
      cy.mount(<Checkbox checked={true} />);
      cy.get('[data-cy="checkbox"]').click();
      cy.get('[data-cy="checkbox-checkmark-box"]')
        .should("have.css", "visibility")
        .and("eql", "hidden");
      cy.get('[data-cy="checkbox-checkmark-box"]')
        .should("have.css", "opacity")
        .and("eql", "0");
    });

    it("Does Checkbox Component state change when you click on invisible input that cover whole component area?", () => {
      cy.mount(<Checkbox label="Test Checkbox Label" />);
      cy.get('[data-cy="checkbox-input"]').click();
      cy.get('[data-cy="checkbox"]')
        .should("have.css", "visibility")
        .and("eql", "visible");
      cy.get('[data-cy="checkbox-checkmark-box"]')
        .should("have.css", "opacity")
        .and("eql", "1");
    });
  });
});
