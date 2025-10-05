import { supabase } from "./supabase"

export interface ContactFormData {
  name: string
  number: string
  subject: string
  message: string
  status?: string
  created_at?: string
}

export const contactQueries = {
  insertContact: async (contactData: ContactFormData) => {
    const { data, error } = await supabase
      .from('contacts')
      .insert([
        {
          ...contactData,
          status: 'new',
          created_at: new Date().toISOString()
        }
      ])
      .select()

    if (error) throw error
    return data
  },

  // Get all contacts (admin only)
  getContacts: async () => {
    const { data, error } = await supabase
      .from('contacts')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) throw error
    return data
  },

  updateContactStatus: async (id: string, status: string) => {
    const { data, error } = await supabase
      .from('contacts')
      .update({ status, updated_at: new Date().toISOString() })
      .match({ id })
      .select()

    if (error) throw error
    return data
  }
}