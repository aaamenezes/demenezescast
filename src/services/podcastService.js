import { createClient } from '@supabase/supabase-js'

const API_URL = 'https://bxfwuyweuulatsylxysg.supabase.co'
// eslint-disable-next-line max-len
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ4Znd1eXdldXVsYXRzeWx4eXNnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgxNjcxOTYsImV4cCI6MTk4Mzc0MzE5Nn0.tJqjs9FvT80--Abwe4qeowVPgpojMjymMKox_h9-_nw'
const supabase = createClient(API_URL, API_KEY)

export function podcastService() {
  const databaseTable = 'podcasts'

  function insert(podcastToInsert) {
    return supabase
      .from(databaseTable)
      .insert(podcastToInsert)
  }

  function getAll() {
    return supabase
      .from(databaseTable)
      .select('*')
  }

  function remove(id) {
    return supabase
      .from(databaseTable)
      .delete()
      .match({ id })
  }

  function observer(callback) {
    return supabase
      .from(databaseTable)
      .on('INSERT', callback)
      .on('DELETE', callback)
      .subscribe()
  }

  return { insert, getAll, remove, observer }
}
