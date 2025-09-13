import { NextRequest, NextResponse } from 'next/server'

// Handle all HTTP methods for /poll/* to stop spam logs
export async function GET() {
  return new NextResponse(null, { status: 204 })
}

export async function POST() {
  return new NextResponse(null, { status: 204 })
}

export async function PUT() {
  return new NextResponse(null, { status: 204 })
}

export async function DELETE() {
  return new NextResponse(null, { status: 204 })
}

export async function PATCH() {
  return new NextResponse(null, { status: 204 })
}

export async function HEAD() {
  return new NextResponse(null, { status: 204 })
}

export async function OPTIONS() {
  return new NextResponse(null, { status: 204 })
}