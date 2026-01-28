import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

// Validate email format
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

// Validate phone format (basic)
function isValidPhone(phone: string): boolean {
  const phoneRegex = /^[\d\s\-\+\(\)]{7,}$/
  return phoneRegex.test(phone)
}

export async function POST(request: NextRequest) {
  try {
    // Parse request body
    const body = await request.json()
    console.log('📨 Received form data:', body)

    // Extract fields
    const { name, email, phone, message } = body

    // Server-side validation
    const errors: Record<string, string> = {}

    if (!name || !name.trim()) {
      errors.name = 'Name is required'
    } else if (name.trim().length < 2) {
      errors.name = 'Name must be at least 2 characters'
    }

    if (!email || !email.trim()) {
      errors.email = 'Email is required'
    } else if (!isValidEmail(email)) {
      errors.email = 'Invalid email format'
    }

    if (!phone || !phone.trim()) {
      errors.phone = 'Phone is required'
    } else if (!isValidPhone(phone)) {
      errors.phone = 'Invalid phone format'
    }

    if (!message || !message.trim()) {
      errors.message = 'Message is required'
    } else if (message.trim().length < 10) {
      errors.message = 'Message must be at least 10 characters'
    }

    // Return validation errors
    if (Object.keys(errors).length > 0) {
      console.log('❌ Validation failed:', errors)
      return NextResponse.json(
        { success: false, errors },
        { status: 400 }
      )
    }

    // Sanitize inputs
    const sanitizedData = {
      name: name.trim(),
      email: email.trim().toLowerCase(),
      phone: phone.trim(),
      message: message.trim(),
      submittedAt: new Date().toISOString(),
    }

    console.log('✅ Validation passed, sanitized data:', sanitizedData)

    // Send confirmation email to user
    const userEmailResponse = await resend.emails.send({
      from: 'noreply@aestheticinterior.com',
      to: sanitizedData.email,
      subject: 'We received your message - Aesthetic Interior Studio',
      html: `
        <h2>Thank you for contacting us!</h2>
        <p>Hi ${sanitizedData.name},</p>
        <p>We've received your message and will get back to you shortly.</p>
        <hr />
        <p><strong>Your Details:</strong></p>
        <p><strong>Name:</strong> ${sanitizedData.name}</p>
        <p><strong>Email:</strong> ${sanitizedData.email}</p>
        <p><strong>Phone:</strong> ${sanitizedData.phone}</p>
        <p><strong>Message:</strong></p>
        <p>${sanitizedData.message.replace(/\n/g, '<br>')}</p>
        <hr />
        <p>Best regards,<br>Aesthetic Interior Studio Team</p>
      `,
    })

    console.log('📧 User email response:', userEmailResponse)

    // Send notification email to admin
    const adminEmailResponse = await resend.emails.send({
      from: 'noreply@aestheticinterior.com',
      to: process.env.ADMIN_EMAIL!,
      subject: `New Contact Form Submission from ${sanitizedData.name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${sanitizedData.name}</p>
        <p><strong>Email:</strong> ${sanitizedData.email}</p>
        <p><strong>Phone:</strong> ${sanitizedData.phone}</p>
        <p><strong>Message:</strong></p>
        <p>${sanitizedData.message.replace(/\n/g, '<br>')}</p>
        <p><strong>Submitted at:</strong> ${sanitizedData.submittedAt}</p>
      `,
    })

    console.log('📧 Admin email response:', adminEmailResponse)

    return NextResponse.json(
      {
        success: true,
        message: 'Form submitted successfully. Check your email for confirmation.',
        data: sanitizedData,
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('❌ API Error:', error)

    return NextResponse.json(
      {
        success: false,
        message: 'An error occurred while processing your request.',
        error: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    )
  }
}