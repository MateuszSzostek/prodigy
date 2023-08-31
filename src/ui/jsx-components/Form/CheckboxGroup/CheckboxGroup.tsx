import React, { useEffect, useRef, useState } from "react";
import { NTDSelect } from "../../../../types/select";

export default function CheckboxGroup(props: NTDSelect.ISelect) {
  const [selected, setSelected] = useState<number>(0);

  //useEffect(() => {
  // const event = { currentTarget: { value: props?.options[selected]?.id } };
  // props?.register?.onChange(event);
  //}, [selected]);

  //function onInputValueChangeHandler(e) {
  //  setSelected(0);
  //}

  /*
  useEffect(() => {
    window.addEventListener(
      `onInputValueChange-${props?.name}`,
      onInputValueChangeHandler
    );
    return () => {
      window.removeEventListener(
        `onInputValueChange-${props?.name}`,
        onInputValueChangeHandler
      );
    };
  }, []);
  */

  return (
    <div className="checkbox-group__container relative">
      <fieldset>
        {props?.label && <legend>{props?.label}</legend>}
        <div>
          <input type="checkbox" id="scales" name="test-checkbox-group" />
          <label htmlFor="scales">Scales</label>
        </div>

        <div>
          <input type="checkbox" id="horns" name="test-checkbox-group" />
          <label htmlFor="horns">Horns</label>
        </div>
        {props?.errorLabel && (
          <label className={`color-red-05`}>{props?.errorLabel}</label>
        )}
      </fieldset>
    </div>
  );
}
