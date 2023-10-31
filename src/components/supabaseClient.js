import { createClient } from "@supabase/supabase-js";
const supabaseURL="https://yeqfgossmdzimdhdnyoa.supabase.co";
const supabaseAnonKey="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InllcWZnb3NzbWR6aW1kaGRueW9hIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTg3NTkyNTQsImV4cCI6MjAxNDMzNTI1NH0.Ez1HBhIHm5do8v9Qz-DhV3p9xSPVa9YsB07QINyWyno";

export const supabase=createClient(supabaseURL,supabaseAnonKey);