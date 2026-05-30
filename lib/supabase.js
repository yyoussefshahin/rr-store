import { createClient } from '@supabase/supabase-js'

// These are placeholders — your site will use local products until you add real keys
const supabaseUrl = 'https://placeholder.supabase.co'
const supabaseAnonKey = 'placeholder-key'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)