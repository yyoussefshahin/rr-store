import { createClient } from '@supabase/supabase-js'

// These are placeholders — your site will use local products until you add real keys
const supabaseUrl = 'https://supabase.com/dashboard/project/gbogyfskevyseolvjdkm/settings/general'
const supabaseAnonKey = 'sb_publishable_N54_-dj8VDg4z4WqdU88YA_X0GfBlVR'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)