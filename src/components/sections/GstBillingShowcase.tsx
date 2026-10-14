"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { BrowserChrome } from '@/components/ui/BrowserChrome';
import { productsData } from '@/config/products';
import { 
  ReceiptText, 
  Printer, 
  Download, 
  Share2, 
  Check, 
  AlertCircle, 
  ArrowRight,
  ShieldCheck,
  FileCheck2,
  Calculator,
  Building2
} from 'lucide-react';

export const GstBillingShowcase: React.FC = () => {
  const product = productsData.find((p) => p.id === 'gst-billing')!;
  const [invoiceMode, setInvoiceMode] = useState<'tax' | 'retail'>('tax');

  return (
    <section id="gst-billing" className="py-20 md:py-32 bg-[#FFFFFF] border-y border-[#E3E3DD] scroll-mt-16">
      <Container>
        {/* Section Heading */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#EAF4EE] text-[#176B50] border border-[#CDE5D8] mb-4">
            <ReceiptText className="w-3.5 h-3.5" />
            <span>Product 04 · Invoicing Suite</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#171717] tracking-tight leading-[1.12]">
            {product.headline}
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#686868] leading-relaxed">
            {product.description}
          </p>
        </div>

        {/* Live Interactive Invoice Preview Component */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Controls & Capabilities */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-2xl bg-[#F8F8F5] border border-[#E3E3DD]">
              <h3 className="text-sm font-bold text-[#171717] uppercase tracking-wider mb-2">
                Interactive Document Simulation
              </h3>
              <p className="text-xs text-[#686868] mb-5 leading-relaxed">
                Toggle between registration modes to see how BillToPrint dynamically formats documents for both formal GST filers and unregistered retail shops.
              </p>

              {/* Mode Toggle */}
              <div className="p-1 bg-white rounded-xl border border-[#E3E3DD] flex gap-1 mb-5">
                <button
                  onClick={() => setInvoiceMode('tax')}
                  className={`flex-1 py-2 px-3 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    invoiceMode === 'tax'
                      ? 'bg-[#800020] text-white shadow-xs'
                      : 'text-[#686868] hover:text-[#171717]'
                  }`}
                >
                  Tax Invoice (GSTIN)
                </button>
                <button
                  onClick={() => setInvoiceMode('retail')}
                  className={`flex-1 py-2 px-3 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    invoiceMode === 'retail'
                      ? 'bg-[#171717] text-white shadow-xs'
                      : 'text-[#686868] hover:text-[#171717]'
                  }`}
                >
                  Retail Cash Memo
                </button>
              </div>

              {/* Key Mathematics Highlights */}
              <div className="space-y-3 pt-2 border-t border-[#E3E3DD]">
                <div className="flex items-start gap-2.5 text-xs">
                  <Calculator className="w-4 h-4 text-[#176B50] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[#171717]">Paise-Precise Integer Arithmetic:</span>
                    <span className="text-[#686868] block mt-0.5">Calculates line totals in integer paise to eliminate JavaScript floating-point rounding discrepancies.</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 text-xs">
                  <Building2 className="w-4 h-4 text-[#176B50] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[#171717]">Automatic Tax Routing:</span>
                    <span className="text-[#686868] block mt-0.5">Routes CGST (2.5%) + SGST (2.5%) for UP buyers or IGST (5%) for interstate deliveries.</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 text-xs">
                  <Printer className="w-4 h-4 text-[#176B50] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[#171717]">A4 Portrait Layout:</span>
                    <span className="text-[#686868] block mt-0.5">Strict @media print CSS for crisp desktop printing, PDF download, or thermal slips.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Compliance Guardrail Note */}
            <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200/80 text-xs text-amber-900 flex items-start gap-3">
              <AlertCircle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold">CA Compliance Notice: </span>
                HSN codes, GST rates, and tax registration modes are fully configurable in settings. Store owners should verify applicable saree HSN classifications (e.g. 5007 / 5208) with their Chartered Accountant.
              </div>
            </div>

            {/* CTA */}
            <div className="flex items-center gap-4">
              <Link
                href="#demo-enquiry"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold bg-[#176B50] text-white hover:bg-[#0E4836] shadow-sm transition-all"
              >
                <span>Request BillToPrint Demo</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Right Column: Realistic Luxury Printable A4 Invoice Representation */}
          <div className="lg:col-span-7">
            <div className="bg-[#FAF9F5] p-3 sm:p-6 rounded-2xl border border-[#E3E3DD] apple-window-shadow">
              {/* Document Paper Container */}
              <div className="bg-white p-6 sm:p-8 rounded-xl border border-[#E3E3DD] shadow-sm font-sans text-[#171717] max-w-2xl mx-auto">
                {/* Invoice Top Action Toolbar */}
                <div className="pb-4 mb-4 border-b border-[#E3E3DD] flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" />
                    <span className="font-mono font-bold text-[#800020]">
                      {invoiceMode === 'tax' ? 'INV/2026-27/0412' : 'BILL/2026-27/089'}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button className="flex items-center gap-1 px-2.5 py-1 rounded bg-[#F8F8F5] border border-[#E3E3DD] text-[11px] font-medium text-[#4A4A45]">
                      <Printer className="w-3 h-3" />
                      <span>Print</span>
                    </button>
                    <button className="flex items-center gap-1 px-2.5 py-1 rounded bg-[#800020] text-white text-[11px] font-semibold">
                      <Download className="w-3 h-3" />
                      <span>PDF</span>
                    </button>
                  </div>
                </div>

                {/* Seller & Header */}
                <div className="border-b-2 border-[#800020] pb-4 mb-4 flex flex-col sm:flex-row justify-between items-start gap-4">
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold font-serif text-[#800020] tracking-tight">
                      Shree Banarasi Sarees
                    </h2>
                    <p className="text-[11px] text-[#686868] mt-0.5">
                      Rudauli Chowk, Harpur Aloth, Samastipur - 848103
                    </p>
                    <p className="text-[11px] text-[#686868]">
                      Phone: +91 95251 04774 · Place of Supply: Bihar (10)
                    </p>
                    {invoiceMode === 'tax' && (
                      <div className="mt-1.5 inline-block bg-amber-50 border border-amber-300 px-2 py-0.5 rounded text-[10px] font-mono font-bold text-[#800020]">
                        GSTIN: 10AAACB1234D1Z5
                      </div>
                    )}
                  </div>

                  <div className="text-left sm:text-right">
                    <span className="inline-block px-2.5 py-1 rounded text-[10px] font-extrabold uppercase tracking-wider bg-[#800020] text-white">
                      {invoiceMode === 'tax' ? 'TAX INVOICE' : 'RETAIL CASH MEMO'}
                    </span>
                    <div className="mt-2 text-[11px] space-y-0.5 text-[#686868]">
                      <div>Date: <span className="font-semibold text-[#171717]">14 Oct 2026</span></div>
                      <div>Type: <span className="font-semibold text-[#171717]">Intra-State Supply</span></div>
                    </div>
                  </div>
                </div>

                {/* Buyer / Recipient Details */}
                <div className="p-3 rounded-lg bg-[#FAF9F5] border border-[#E3E3DD] text-[11px] mb-4 grid grid-cols-2 gap-2">
                  <div>
                    <span className="text-[#9A9A92] uppercase font-bold text-[9px] block">Billed To (Customer):</span>
                    <span className="font-bold text-[#171717]">Mrs. Shushila Tripathi</span>
                    <span className="block text-[#686868]">Walk-in Retail Customer</span>
                  </div>
                  <div className="text-right">
                    <span className="text-[#9A9A92] uppercase font-bold text-[9px] block">Payment Mode:</span>
                    <span className="font-bold text-emerald-700">Cash / Paid in Full</span>
                    <span className="block text-[#686868]">Cashier: Counter 01</span>
                  </div>
                </div>

                {/* Line Items Table */}
                <div className="overflow-x-auto mb-4 border border-[#E3E3DD] rounded-lg">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-[#800020] text-white text-[10px] uppercase font-semibold">
                      <tr>
                        <th className="py-2 px-2.5">Item Description</th>
                        <th className="py-2 px-2 text-center">HSN</th>
                        <th className="py-2 px-2 text-center">Qty</th>
                        <th className="py-2 px-2 text-right">Rate (₹)</th>
                        {invoiceMode === 'tax' && <th className="py-2 px-2 text-right">Tax (5%)</th>}
                        <th className="py-2 px-2.5 text-right">Total (₹)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#E3E3DD] text-[11px]">
                      <tr>
                        <td className="py-2 px-2.5 font-medium text-[#171717]">
                          Katan Silk Kadwa Banarasi Saree
                          <span className="block text-[10px] text-[#686868]">SKU: STK-KATAN-004</span>
                        </td>
                        <td className="py-2 px-2 text-center font-mono text-[#686868]">5007</td>
                        <td className="py-2 px-2 text-center font-bold">1</td>
                        <td className="py-2 px-2 text-right font-mono">₹4,200.00</td>
                        {invoiceMode === 'tax' && (
                          <td className="py-2 px-2 text-right font-mono text-[#686868]">₹210.00</td>
                        )}
                        <td className="py-2 px-2.5 text-right font-mono font-bold text-[#171717]">
                          ₹{invoiceMode === 'tax' ? '4,410.00' : '4,200.00'}
                        </td>
                      </tr>
                      <tr>
                        <td className="py-2 px-2.5 font-medium text-[#171717]">
                          Fall & Pico Finishing Addon
                          <span className="block text-[10px] text-[#686868]">In-Store Value Service</span>
                        </td>
                        <td className="py-2 px-2 text-center font-mono text-[#686868]">9988</td>
                        <td className="py-2 px-2 text-center font-bold">1</td>
                        <td className="py-2 px-2 text-right font-mono">₹150.00</td>
                        {invoiceMode === 'tax' && (
                          <td className="py-2 px-2 text-right font-mono text-[#686868]">₹7.50</td>
                        )}
                        <td className="py-2 px-2.5 text-right font-mono font-bold text-[#171717]">
                          ₹{invoiceMode === 'tax' ? '157.50' : '150.00'}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Calculation Summary Breakdown */}
                <div className="flex flex-col sm:flex-row justify-between items-start gap-4 text-xs pt-2">
                  <div className="max-w-xs">
                    <span className="text-[10px] uppercase font-bold text-[#9A9A92] block">Amount in Words:</span>
                    <span className="font-medium text-[#171717] italic text-[11px]">
                      {invoiceMode === 'tax'
                        ? 'Four Thousand Five Hundred Sixty Seven Rupees and Fifty Paise Only'
                        : 'Four Thousand Three Hundred Fifty Rupees Only'}
                    </span>
                  </div>

                  <div className="w-full sm:w-56 space-y-1 text-right text-[11px]">
                    <div className="flex justify-between text-[#686868]">
                      <span>Taxable Amount:</span>
                      <span className="font-mono">₹4,350.00</span>
                    </div>
                    {invoiceMode === 'tax' && (
                      <>
                        <div className="flex justify-between text-[#686868]">
                          <span>CGST (2.5%):</span>
                          <span className="font-mono">₹108.75</span>
                        </div>
                        <div className="flex justify-between text-[#686868]">
                          <span>SGST (2.5%):</span>
                          <span className="font-mono">₹108.75</span>
                        </div>
                      </>
                    )}
                    <div className="flex justify-between font-bold text-[#800020] text-sm pt-1 border-t border-[#800020]">
                      <span>Grand Total:</span>
                      <span className="font-mono">
                        ₹{invoiceMode === 'tax' ? '4,567.50' : '4,350.00'}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Footer Signatory */}
                <div className="mt-6 pt-3 border-t border-[#E3E3DD] flex justify-between items-end text-[10px] text-[#686868]">
                  <span>Thank you for shopping with Shree Banarasi Sarees!</span>
                  <div className="text-right">
                    <div className="h-6" />
                    <span className="border-t border-[#9A9A92] pt-1 block font-semibold text-[#171717]">
                      Authorized Signatory
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
