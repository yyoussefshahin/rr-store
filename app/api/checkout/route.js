export const runtime = 'nodejs'; // <-- ADD THIS LINE TO FIX THE DEPLOYMENT!

import { NextResponse } from 'next/server';
import { createHmac } from 'crypto';

export async function POST(request) {
  try {
    const { amount } = await request.json();

    const merchantId = process.env.KASHIER_MERCHANT_ID;
    const secretKey = process.env.KASHIER_SECRET_KEY;
    
    if (!merchantId || !secretKey) {
      return NextResponse.json({ error: 'Missing Kashier credentials' }, { status: 500 });
    }

    // Force amount to always have 2 decimal places (e.g., 699.00)
    const formattedAmount = parseFloat(amount).toFixed(2);

    const merchantOrderId = `ORDER-${Date.now()}`;
    const currency = 'EGP';

    // FIX: REMOVED mode from signature string. Kashier does not include mode in the hash!
    const signaturePath = `amount=${formattedAmount};currency=${currency};merchantId=${merchantId};merchantOrderId=${merchantOrderId}`;
    
    const signature = createHmac('sha256', secretKey)
      .update(signaturePath)
      .digest('hex');

    return NextResponse.json({
      merchantId,
      merchantOrderId,
      amount: formattedAmount,
      currency,
      signature
    });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}