"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Box, Cpu, Settings } from "lucide-react";
import { INVENTORY } from "@/data/inventory";

interface VehicleDetailClientProps {
  id: string;
}

export default function VehicleDetailClient({ id }: VehicleDetailClientProps) {
  const vehicle = INVENTORY.find((v) => v.id === id);

  const [downPayment, setDownPayment] = useState(120000);
  const [months, setMonths] = useState(48);

  if (!vehicle) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-white">
        <h2 className="font-sans text-3xl font-bold mb-4">Vehicle Not Found</h2>
        <Link href="/inventory" className="text-[#adc6ff] hover:underline font-mono">
          Back to Inventory
        </Link>
      </div>
    );
  }

  const monthlyPayment = Math.max(
    0,
    Math.round((vehicle.price - downPayment) / months + (vehicle.price * 0.039) / 12)
  );

  return (
    <div className="bg-[#131313] text-[#e5e2e1] min-h-screen">
      {/* Hero Gallery */}
      <section className="relative h-[85vh] overflow-hidden">
        <div className="relative w-full h-full">
          <Image
            alt={vehicle.model}
            src={vehicle.image}
            fill
            sizes="100vw"
            className="object-cover opacity-80"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
        <div className="absolute bottom-12 left-8 md:left-16 right-8 md:right-16 max-w-[1440px] mx-auto flex flex-col md:flex-row md:items-end justify-between">
          <div className="mb-8 md:mb-0">
            <span className="font-mono text-[#adc6ff] text-xs mb-4 block tracking-[0.3em] uppercase font-bold">
              V-SERIES PREMIER
            </span>
            <h1 className="font-sans text-4xl md:text-6xl font-bold text-white mb-2 uppercase tracking-tighter">
              {vehicle.brand} {vehicle.model}
            </h1>
            <p className="font-sans text-xl text-[#c4c7c7] font-light uppercase tracking-widest">
              {vehicle.variant}
            </p>
          </div>
          <div className="flex gap-4">
            <div className="w-2 h-2 rounded-full bg-[#adc6ff]"></div>
            <div className="w-2 h-2 rounded-full bg-white/20"></div>
            <div className="w-2 h-2 rounded-full bg-white/20"></div>
          </div>
        </div>
      </section>

      {/* Performance Telemetry */}
      <section className="bg-[#0e0e0e] border-y border-white/5 py-12">
        <div className="max-w-[1440px] mx-auto px-8 md:px-16 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-4">
            <div className="flex justify-between items-end">
              <span className="font-mono text-white/40 uppercase text-[10px] tracking-widest font-bold">Acceleration 0-100</span>
              <span className="font-sans text-4xl font-bold text-white">
                {vehicle.specs.acceleration_0_100}
              </span>
            </div>
            <div className="h-[2px] bg-[#adc6ff]/50 w-full"></div>
          </div>
          <div className="space-y-4">
            <div className="flex justify-between items-end">
              <span className="font-mono text-white/40 uppercase text-[10px] tracking-widest font-bold">Peak Power Output</span>
              <span className="font-sans text-4xl font-bold text-white">
                {vehicle.specs.horsepower} <span className="text-xl">HP</span>
              </span>
            </div>
            <div className="h-[2px] bg-[#adc6ff]/50 w-full"></div>
          </div>
          <div className="space-y-4">
            <div className="flex justify-between items-end">
              <span className="font-mono text-white/40 uppercase text-[10px] tracking-widest font-bold">Maximum Velocity</span>
              <span className="font-sans text-4xl font-bold text-white">
                {vehicle.specs.top_speed}
              </span>
            </div>
            <div className="h-[2px] bg-[#adc6ff]/50 w-full"></div>
          </div>
        </div>
      </section>

      {/* Detailed Specs */}
      <section className="py-24 max-w-[1440px] mx-auto px-8 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          <div>
            <h2 className="font-sans text-3xl font-bold text-white mb-12 uppercase tracking-tight">Technical Specification</h2>
            <div className="space-y-6">
              <div className="flex justify-between py-5 border-b border-white/10">
                <span className="font-mono text-xs text-[#c4c7c7] tracking-wider uppercase font-bold">ENGINE TYPE</span>
                <span className="text-sm text-white font-medium max-w-md text-right">{vehicle.specs.engine}</span>
              </div>
              <div className="flex justify-between py-5 border-b border-white/10">
                <span className="font-mono text-xs text-[#c4c7c7] tracking-wider uppercase font-bold">TRANSMISSION</span>
                <span className="text-sm text-white font-medium">{vehicle.specs.transmission}</span>
              </div>
              <div className="flex justify-between py-5 border-b border-white/10">
                <span className="font-mono text-xs text-[#c4c7c7] tracking-wider uppercase font-bold">DRIVETRAIN</span>
                <span className="text-sm text-white font-medium">{vehicle.specs.drivetrain}</span>
              </div>
              {vehicle.specs.range && (
                <div className="flex justify-between py-5 border-b border-white/10">
                  <span className="font-mono text-xs text-[#c4c7c7] tracking-wider uppercase font-bold">RANGE</span>
                  <span className="text-sm text-white font-medium">{vehicle.specs.range}</span>
                </div>
              )}
              <div className="flex justify-between py-5 border-b border-white/10">
                <span className="font-mono text-xs text-[#c4c7c7] tracking-wider uppercase font-bold">WEIGHT</span>
                <span className="text-sm text-white font-medium">{vehicle.specs.weight}</span>
              </div>
            </div>
          </div>
          <div className="bg-white/[0.03] backdrop-blur-[40px] border border-white/10 p-10 space-y-8 rounded-lg">
            <h3 className="font-mono text-xs text-[#adc6ff] tracking-widest uppercase font-bold">Velocity Dynamics</h3>
            <p className="text-[#c4c7c7] leading-relaxed text-base">
              The {vehicle.model} defines a new paradigm in terms of performance, sportiness and driving pleasure from its unprecedented architecture, design, and active carbon structure.
            </p>
            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="p-6 bg-white/5 border border-white/5 rounded">
                <span className="block font-sans text-3xl font-bold text-white mb-2">13+</span>
                <span className="font-mono text-[10px] text-[#c4c7c7] uppercase">Driving Modes</span>
              </div>
              <div className="p-6 bg-white/5 border border-white/5 rounded">
                <span className="block font-sans text-3xl font-bold text-white mb-2">Active</span>
                <span className="font-mono text-[10px] text-[#c4c7c7] uppercase">Aero Wing</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature grid */}
      <section className="py-24 bg-[#1c1b1b] border-t border-white/5">
        <div className="max-w-[1440px] mx-auto px-8 md:px-16">
          <h2 className="font-sans text-3xl font-bold text-white mb-16 text-center uppercase tracking-tight">Pinnacle Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/[0.03] border border-white/10 p-8 space-y-6 hover:border-[#adc6ff]/50 transition-colors group rounded">
              <Settings className="w-10 h-10 text-[#adc6ff]" />
              <h3 className="font-sans text-xl font-bold text-white uppercase">Active Aero</h3>
              <p className="text-sm text-[#c4c7c7] leading-relaxed">
                Integrated rear wing adjusts automatically to provide optimal downforce or drag reduction across distinct dynamic settings.
              </p>
            </div>
            <div className="bg-white/[0.03] border border-white/10 p-8 space-y-6 hover:border-[#adc6ff]/50 transition-colors group rounded">
              <Cpu className="w-10 h-10 text-[#adc6ff]" />
              <h3 className="font-sans text-xl font-bold text-white uppercase">Aerodynamic Vectoring</h3>
              <p className="text-sm text-[#c4c7c7] leading-relaxed">
                Advanced performance motors deliver torque vectoring for clean cornering control and track responsiveness.
              </p>
            </div>
            <div className="bg-white/[0.03] border border-white/10 p-8 space-y-6 hover:border-[#adc6ff]/50 transition-colors group rounded">
              <Box className="w-10 h-10 text-[#adc6ff]" />
              <h3 className="font-sans text-xl font-bold text-white uppercase">Carbon Chassis</h3>
              <p className="text-sm text-[#c4c7c7] leading-relaxed">
                Full carbon construction reduces structural weight while boosting torsional strength for racecar stiffness.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Simulator */}
      <section className="py-24 max-w-[1440px] mx-auto px-8 md:px-16">
        <div className="bg-white/[0.03] border border-white/10 p-12 relative overflow-hidden rounded-xl">
          <div className="absolute -right-24 -top-24 w-64 h-64 bg-[#adc6ff]/10 blur-[100px] rounded-full"></div>
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-sans text-3xl font-bold text-white mb-4 uppercase">Investment Simulator</h2>
              <p className="text-base text-[#c4c7c7] mb-8">Calculate your tailored financial arrangement for the {vehicle.model} series.</p>
              <div className="space-y-10">
                <div>
                  <div className="flex justify-between mb-4">
                    <label className="font-mono text-white text-[10px] uppercase font-bold tracking-wider">Down Payment</label>
                    <span className="font-mono text-[#adc6ff] font-bold">${downPayment.toLocaleString('en-US')}</span>
                  </div>
                  <input
                    type="range"
                    min={Math.round(vehicle.price * 0.1)}
                    max={Math.round(vehicle.price * 0.8)}
                    step="5000"
                    value={downPayment}
                    onChange={(e) => setDownPayment(Number(e.target.value))}
                    className="w-full h-1 bg-white/10 appearance-none cursor-pointer accent-[#adc6ff]"
                  />
                </div>
                <div>
                  <div className="flex justify-between mb-4">
                    <label className="font-mono text-white text-[10px] uppercase font-bold tracking-wider">Finance Term</label>
                    <span className="font-mono text-[#adc6ff] font-bold">{months} Months</span>
                  </div>
                  <div className="grid grid-cols-4 gap-2">
                    {[12, 24, 48, 60].map((m) => (
                      <button
                        key={m}
                        onClick={() => setMonths(m)}
                        className={`py-3 border font-mono text-[10px] transition-colors font-bold ${
                          months === m
                            ? "border-[#adc6ff] text-[#adc6ff]"
                            : "border-white/10 hover:border-[#adc6ff]"
                        }`}
                      >
                        {m}M
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-black/40 p-10 border border-white/5 flex flex-col items-center text-center">
              <span className="font-mono text-[#c4c7c7]/50 text-[10px] uppercase mb-4 tracking-widest">Monthly Commitment</span>
              <div className="font-sans text-5xl font-bold text-white mb-2">${monthlyPayment.toLocaleString('en-US')}</div>
              <span className="font-mono text-[#adc6ff] text-xs mb-8 uppercase tracking-widest font-bold">3.9% APR ESTIMATED</span>
              <button className="w-full bg-white text-black font-mono py-5 uppercase font-bold tracking-wider hover:bg-[#adc6ff] transition-all">
                Secure Allocation
              </button>
              <p className="mt-6 font-mono text-[9px] text-white/40 leading-relaxed uppercase">
                Subject to credit approval. Terms and conditions apply. Performance figures based on factory testing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Configure CTA */}
      <section className="relative py-32 overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-[#adc6ff]/5 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-[1440px] mx-auto px-8 md:px-16 text-center">
          <span className="font-mono text-[#adc6ff] mb-6 block uppercase tracking-[0.4em] font-bold text-xs">One of One</span>
          <h2 className="font-sans text-4xl md:text-5xl text-white mb-12 uppercase tracking-tighter font-bold">
            Configure Your Build
          </h2>
          <div className="flex flex-col md:flex-row justify-center gap-6">
            <Link
              href={`/configure/${vehicle.id}`}
              className="px-12 py-5 bg-white text-black font-mono text-xs uppercase hover:bg-[#adc6ff] transition-all font-bold tracking-wider"
            >
              Enter Configurator
            </Link>
            <button className="px-12 py-5 border border-white/20 font-mono text-xs uppercase text-white hover:bg-white/10 transition-all font-bold tracking-wider">
              Download Brochure
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
