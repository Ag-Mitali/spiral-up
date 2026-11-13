import { NextRequest, NextResponse } from 'next/server'

// Replace this with your deployed Google Apps Script Web App URL
// See: .kiro/google-apps-script.js for the script to paste in your Sheet
const APPS_SCRIPT_URL = process.env.APPS_SCRIPT_URL || ''

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()

    if (!APPS_SCRIPT_URL) {
      console.warn('APPS_SCRIPT_URL is not set. Logging submission:', body)
      return NextResponse.json({ success: true, warning: 'Sheet not connected yet' })
    }

    const response = await fetch(APPS_SCRIPT_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    })

    if (!response.ok) {
      throw new Error(`Apps Script responded with ${response.status}`)
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Form submission error:', error)
    return NextResponse.json({ success: false, error: 'Submission failed' }, { status: 500 })
  }
}
