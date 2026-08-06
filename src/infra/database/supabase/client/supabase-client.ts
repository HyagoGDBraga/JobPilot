import { createClient } from "@supabase/supabase-js";
import { env } from "../../../../env/env.zod";
const supaURl = env.SUPABASE_URL;
const supaPublishKey = env.SUPABASE_PUBLISHABLE_KEY;
export const supabaseClient = createClient(supaURl, supaPublishKey);
