import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()

    const { name, email, phone, message } = body

    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    const { error } = await supabase
      .from('contact_leads')
      .insert([
        { name, email, phone, message }
      ])

    if (error) {
      console.log('SUPABASE ERROR:', error)
      return NextResponse.json({ error }, { status: 500 })
    }

    return NextResponse.json({ success: true })

  } catch (err) {
    console.log('API ERROR:', err)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
