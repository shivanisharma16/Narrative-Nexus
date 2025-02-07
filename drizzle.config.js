/** @type { import("drizzle-kit").Config} */

export default {
    schema: "./utils/schema.tsx",
    dialect: "postgresql",
    //out: "./drizzle",
    dbCredentials: {
      url:'postgresql://accounts:6WflOV4tbsnG@ep-wispy-recipe-a55o6szs.us-east-2.aws.neon.tech/AI-Generator?sslmode=require'
    }
  };