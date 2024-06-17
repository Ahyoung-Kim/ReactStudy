import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const ReactHookFormPage = () => {
  const [input, setInput] = useState({
    field1: "",
    field2: "",
  });

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onChange = (e) => {
    const { name, value } = e.target;

    setInput({
      ...input,
      [name]: value,
    });
  };

  const onSubmit = (data) => {
    console.log(data);
  };

  useEffect(() => {
    console.log("rendering");
  });

  return (
    <div>
      {/* useState */}
      <input name="field1" value={input.field1} onChange={onChange} />
      <input name="field2" value={input.field2} onChange={onChange} />

      {/* 리액트 훅 폼 */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("field1", {
            required: "field1 채우세요",
          })}
        />
        <input
          {...register("field2", {
            required: "field2 채우세요",
          })}
        />

        <button type="submit">GO</button>
      </form>
    </div>
  );
};

export default ReactHookFormPage;
