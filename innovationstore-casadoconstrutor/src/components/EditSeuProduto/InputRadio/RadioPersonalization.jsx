import { useState } from "react";
import { Controller } from "react-hook-form";
import { Radio } from "./styles";

export const RadioPersonalization = ({
  control,
  option,
  defaultValue,
  name,
}) => {
  return (
    <div>
      <Controller
        key={option.id}
        name={name}
        control={control}
        defaultValue={option}
        render={({ field }) => (
          <Radio checked={field.value?.value === option.value}>
            <input
              {...field}
              type="radio"
              value={option.value}
              onChange={() => {
                field.onChange(option);
              }}
            />
          </Radio>
        )}
      />
    </div>
  );
};
