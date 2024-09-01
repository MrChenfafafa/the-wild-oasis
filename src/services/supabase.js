import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://eggiakvqpahkkkvydfmc.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVnZ2lha3ZxcGFoa2trdnlkZm1jIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQ3NTg0MTYsImV4cCI6MjA0MDMzNDQxNn0.4MyMv7z5gYh54OJ9Y5fUpZdy8bz7sOTD9FvqzT0ERjg";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
