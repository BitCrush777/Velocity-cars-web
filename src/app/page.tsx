"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { ArrowRight, Sparkles, Shield, Cpu } from "lucide-react";
import BackgroundShader from "@/components/BackgroundShader";
import { INVENTORY } from "@/data/inventory";

export default function Home() {
  const [financePrice, setFinancePrice] = useState(145000);
  const [months, setMonths] = useState(48);

  const monthlyPayment = Math.round((financePrice - financePrice * 0.2) / months + (financePrice * 0.039) / 12);

  return (
    <div className="bg-[#131313] text-[#e5e2e1] min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 w-full h-full opacity-40 z-0">
          <BackgroundShader />
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="font-sans text-5xl md:text-7xl font-bold tracking-tighter leading-none mb-8 max-w-4xl mx-auto">
            Design Your Dream.<br />
            <span className="text-[#adc6ff]">Drive Your Future.</span>
          </h1>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <Link
              href="/configure/lamborghini-revuelto-2024"
              className="bg-white text-black px-10 py-4 font-mono text-xs uppercase tracking-widest hover:bg-[#adc6ff] hover:text-black transition-all duration-300 w-full md:w-auto font-bold"
            >
              Customize Your Car
            </Link>
            <Link
              href="/inventory"
              className="border border-white/20 backdrop-blur-md px-10 py-4 font-mono text-xs uppercase tracking-widest hover:border-white transition-all duration-300 w-full md:w-auto text-white font-bold"
            >
              Browse Inventory
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 z-10">
          <span className="font-mono text-[10px] uppercase tracking-widest text-white">Scroll to Explore</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-white/10 via-white/50 to-transparent"></div>
        </div>
      </section>

      {/* Featured Selection */}
      <section className="py-32 px-8 md:px-16 max-w-[1440px] mx-auto">
        <div className="flex justify-between items-end mb-16">
          <div>
            <span className="font-mono text-[#adc6ff] uppercase tracking-widest mb-2 block text-xs">Premium Lineup</span>
            <h2 className="font-sans text-4xl font-bold tracking-tight text-white">Precision Selection</h2>
          </div>
          <Link
            href="/inventory"
            className="font-mono text-xs text-[#c4c7c7] hover:text-white transition-colors flex items-center gap-2"
          >
            View All Inventory <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {INVENTORY.slice(0, 3).map((vehicle, idx) => (
            <Link
              key={vehicle.id}
              href={`/vehicles/${vehicle.id}`}
              className={`bg-white/[0.03] backdrop-blur-[40px] border border-white/10 hover:border-white/30 p-6 rounded-lg transition-all duration-500 hover:-translate-y-2 flex flex-col ${
                idx === 1 ? "border-l-2 border-l-[#adc6ff]" : ""
              }`}
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded mb-6 w-full">
                <Image
                  src={vehicle.image}
                  alt={vehicle.model}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  priority
                />
              </div>
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-sans text-2xl font-bold text-white mb-1">{vehicle.model}</h3>
                  <p className="font-mono text-[10px] text-[#c4c7c7] uppercase">{vehicle.variant}</p>
                </div>
                <div className="text-right">
                  <p className="font-mono text-[#adc6ff] text-base font-bold">${vehicle.price.toLocaleString('en-US')}</p>
                  <p className="font-mono text-[10px] text-[#c4c7c7] uppercase">Starting at</p>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4 border-t border-white/5 pt-6 mt-auto">
                <div>
                  <p className="font-mono text-[10px] text-[#c4c7c7] uppercase mb-1">Power</p>
                  <p className="font-sans text-lg font-bold text-white">
                    {vehicle.specs.horsepower} <span className="text-[10px] opacity-50 font-normal">HP</span>
                  </p>
                </div>
                <div>
                  <p className="font-mono text-[10px] text-[#c4c7c7] uppercase mb-1">0-60 MPH</p>
                  <p className="font-sans text-lg font-bold text-white">
                    {vehicle.specs.acceleration_0_100.replace("s", "")} <span className="text-[10px] opacity-50 font-normal">SEC</span>
                  </p>
                </div>
                <div>
                  <p className="font-mono text-[10px] text-[#c4c7c7] uppercase mb-1">Top Speed</p>
                  <p className="font-sans text-lg font-bold text-white">
                    {vehicle.specs.top_speed.split(" ")[0]} <span className="text-[10px] opacity-50 font-normal">KM/H</span>
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Engineering Philosophy & Investment Simulator */}
      <section className="py-32 bg-[#0e0e0e] relative overflow-hidden">
        <div className="px-8 md:px-16 max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 relative z-10">
          {/* Engineering Philosophy */}
          <div>
            <h2 className="font-sans text-4xl font-bold tracking-tight text-white mb-12">The Engineering Philosophy</h2>
            <div className="space-y-12">
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center border border-[#adc6ff] rounded-full text-[#adc6ff]">
                  <Cpu className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-sans text-xl font-bold text-white mb-2">Bespoke Fabrication</h4>
                  <p className="text-[#c4c7c7] max-w-md">Every vehicle is hand-finished by master technicians, ensuring no two Velocity motors are identical.</p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center border border-[#adc6ff] rounded-full text-[#adc6ff]">
                  <Sparkles className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-sans text-xl font-bold text-white mb-2">Next-Gen Powertrains</h4>
                  <p className="text-[#c4c7c7] max-w-md">Our hybrid and pure-electric platforms redefine the boundaries of torque and sustainability.</p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center border border-[#adc6ff] rounded-full text-[#adc6ff]">
                  <Shield className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-sans text-xl font-bold text-white mb-2">Velocity Guardian</h4>
                  <p className="text-[#c4c7c7] max-w-md">A comprehensive 10-year engineering warranty that follows the vehicle, not just the owner.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Finance Calculator */}
          <div className="bg-white/[0.05] backdrop-blur-[40px] border border-white/10 p-10 rounded-xl border-t-2 border-t-[#adc6ff] shadow-2xl">
            <h3 className="font-sans text-2xl font-bold text-white mb-8">Investment Simulator</h3>
            <div className="space-y-8">
              <div>
                <div className="flex justify-between mb-4">
                  <label className="font-mono text-xs text-[#c9c6c5] uppercase tracking-wider">Vehicle Price</label>
                  <span className="font-mono text-[#adc6ff] font-bold">${financePrice.toLocaleString('en-US')}</span>
                </div>
                <input
                  type="range"
                  min="50000"
                  max="1000000"
                  step="10000"
                  value={financePrice}
                  onChange={(e) => setFinancePrice(Number(e.target.value))}
                  className="w-full h-1 bg-white/10 appearance-none cursor-pointer accent-[#adc6ff]"
                />
              </div>

              <div>
                <div className="flex justify-between mb-4">
                  <label className="font-mono text-xs text-[#c9c6c5] uppercase tracking-wider">Amortization (Months)</label>
                  <div className="flex gap-1">
                    {[12, 24, 36, 48, 60, 72].map((m) => (
                      <div
                        key={m}
                        onClick={() => setMonths(m)}
                        className={`w-3 h-8 cursor-pointer transition-colors ${
                          months >= m ? "bg-[#adc6ff]" : "bg-white/10"
                        }`}
                      />
                    ))}
                  </div>
                </div>
                <div className="flex justify-between font-mono text-[10px] text-[#c4c7c7]">
                  <span>12M</span>
                  <span className="text-[#adc6ff]">{months}M</span>
                  <span>72M</span>
                </div>
              </div>

              <div className="bg-white/5 p-6 rounded border border-white/5">
                <p className="font-mono text-[10px] uppercase text-[#c4c7c7] mb-2">Estimated Monthly Performance Payment</p>
                <div className="flex items-baseline gap-2">
                  <span className="font-sans text-5xl font-bold text-white">${monthlyPayment.toLocaleString('en-US')}</span>
                  <span className="font-mono text-xs text-[#c4c7c7]">/ mo</span>
                </div>
              </div>

              <button className="w-full py-4 bg-[#adc6ff] text-[#313030] font-mono text-xs uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all duration-500 font-bold">
                Request Personalized Quote
              </button>
              <p className="text-center font-mono text-[9px] text-[#c4c7c7] uppercase">Subject to credit approval via Velocity Finance.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
