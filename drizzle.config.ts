import "dotenv/config";
import type { Config } from "drizzle-kit";

export default {
  schema: "./db/schema.ts",
  out: "./drizzle",
  provider: "postgresql",
  dbCredentials: {
    connectionString: process.env.DATABASE_URL!,
  },
} as Config;