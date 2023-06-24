import { mutation, query } from "./_generated/server";

export const saveSketch = mutation(
  async ({ db }, { prompt }: { prompt: string }) => {
    console.log(prompt);
    db.insert("sketches", {
      prompt,
    });
    return {
      message: "success",
    };
  }
);

export const getPrompts = query(async ({ db }) => {
  return await db.query("sketches").collect();
});
