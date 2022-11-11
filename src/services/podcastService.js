import { createClient } from '@supabase/supabase-js'

const API_URL = 'https://bxfwuyweuulatsylxysg.supabase.co'
// eslint-disable-next-line max-len
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ4Znd1eXdldXVsYXRzeWx4eXNnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgxNjcxOTYsImV4cCI6MTk4Mzc0MzE5Nn0.tJqjs9FvT80--Abwe4qeowVPgpojMjymMKox_h9-_nw'
const supabase = createClient(API_URL, API_KEY)

export function podcastService() {
  return {
    getAllPodcasts() {
      return supabase.from('podcasts').select('*')
    }
  }
}
