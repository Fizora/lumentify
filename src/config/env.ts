"use server";

export const environment = {
  SUPABASE_URL: process.env.SUPABASE_URL,
  SUPABASE_KEY: process.env.SUPABASE_PUBLISHABLE_KEY,
  SUPABASE_SERVICE_ROLE: process.env.SUPABASE_SERVICE_ROLE_KEY,
};
