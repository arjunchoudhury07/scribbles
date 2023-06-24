"use client";
import { useMutation, useQuery } from "convex/react";
import { useForm } from "react-hook-form";
import { api } from "../../convex/_generated/api";

export default function Home() {
  const saveSketchMutation = useMutation(api.sketches.saveSketch);
  const prompts = useQuery(api.sketches.getPrompts);
  console.log(prompts);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{ prompt: string }>();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <form
        onSubmit={handleSubmit(async (formData) => {
          await saveSketchMutation(formData);
        })}
      >
        <input {...register("prompt", { required: true })} />
        {errors.prompt && <span>This field is required</span>}

        <input type="submit" />
      </form>
      {prompts?.map((prompt) => (
        <div key={prompt._id}>{prompt.prompt}</div>
      ))}
    </main>
  );
}
