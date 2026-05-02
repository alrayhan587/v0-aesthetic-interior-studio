import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

// Helper function to serialize BigInt
function serializeBigInt(obj: any) {
  return JSON.parse(
    JSON.stringify(obj, (key, value) =>
      typeof value === 'bigint' ? value.toString() : value
    )
  );
}

// GET - Get all leads or get single lead by ID
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (id) {
      // Get single lead by ID
      const lead = await prisma.lead.findUnique({
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        where: { id: id } as any,
      });

      if (!lead) {
        return NextResponse.json({ error: 'Lead not found' }, { status: 404 });
      }

      return NextResponse.json(serializeBigInt(lead));
    }

    // Get all leads
    const leads = await prisma.lead.findMany({
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      orderBy: { createdAt: 'desc' } as any,
    });

    return NextResponse.json(serializeBigInt(leads));
  } catch (error) {
    console.error('Error fetching leads:', error);
    return NextResponse.json({ error: 'Failed to fetch leads' }, { status: 500 });
  }
}

// POST - Create a new lead
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, email, status } = body;

    // Validate required fields
    if (!name || !phone || !email || !status) {
      return NextResponse.json(
        { error: 'Missing required fields: name, phone, email, status' },
        { status: 400 }
      );
    }

    const newLead = await prisma.lead.create({
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      data: { name, phone, email, status } as any,
    });

    return NextResponse.json(serializeBigInt(newLead), { status: 201 });
  } catch (error) {
    console.error('Error creating lead:', error);
    return NextResponse.json({ error: 'Failed to create lead' }, { status: 500 });
  }
}

// PUT - Update an existing lead
export async function PUT(request: Request) {
  try {
    const body = await request.json();
    const { id, name, phone, email, status } = body;

    if (!id) {
      return NextResponse.json({ error: 'Lead ID is required' }, { status: 400 });
    }

    // Check if lead exists
    const existingLead = await prisma.lead.findUnique({
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      where: { id: id } as any,
    });

    if (!existingLead) {
      return NextResponse.json({ error: 'Lead not found' }, { status: 404 });
    }

    const updatedLead = await prisma.lead.update({
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      where: { id: id } as any,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      data: {
        name: name ?? existingLead.name,
        phone: phone ?? existingLead.phone,
        email: email ?? existingLead.email,
        status: status ?? existingLead.status,
      } as any,
    });

    return NextResponse.json(serializeBigInt(updatedLead));
  } catch (error) {
    console.error('Error updating lead:', error);
    return NextResponse.json({ error: 'Failed to update lead' }, { status: 500 });
  }
}

// DELETE - Delete a lead
export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json({ error: 'Lead ID is required' }, { status: 400 });
    }

    // Check if lead exists
    const existingLead = await prisma.lead.findUnique({
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      where: { id: id } as any,
    });

    if (!existingLead) {
      return NextResponse.json({ error: 'Lead not found' }, { status: 404 });
    }

    await prisma.lead.delete({
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      where: { id: id } as any,
    });

    return NextResponse.json({ message: 'Lead deleted successfully' });
  } catch (error) {
    console.error('Error deleting lead:', error);
    return NextResponse.json({ error: 'Failed to delete lead' }, { status: 500 });
  }
}
