import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://hequyjegqtyrbefsewgz.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhlcXV5amVncXR5cmJlZnNld2d6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTEwNjQ5NzksImV4cCI6MjAyNjY0MDk3OX0.J1Vq9-nF5HWmuBzn--dvz6QZj2NG7i7R_VGSpebwFaI";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
