import { useState } from "react";
import { Controller } from "react-hook-form";
import { Radio } from "./styles";

export const RadioInputExample = ({ control, option, defaultValue, name }) => {
  return (
    <div>
      <Controller
        key={option.id}
        name={name}
        control={control}
        defaultValue={defaultValue}
        render={({ field }) => (
          <Radio checked={field.value === option.value}>
            <input
              {...field}
              type="radio"
              value={option.value}
              onChange={() => field.onChange(option.value)}
            />
          </Radio>
        )}
      />
    </div>
  );
};
