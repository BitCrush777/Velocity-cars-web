"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Save, Calendar, Share2, ZoomIn, Info, Eye } from "lucide-react";
import Configurator3D from "@/components/Configurator3D";
import { INVENTORY } from "@/data/inventory";

interface ConfigureClientProps {
  id: string;
}

export default function ConfigureClient({ id }: ConfigureClientProps) {
  const vehicle = INVENTORY.find((v) => v.id === id) || INVENTORY[0];

  // Configurator states
  const [activeTab, setActiveTab] = useState<"paint" | "wheels" | "calipers" | "bodykit" | "accessories">("paint");
  const [paintColor, setPaintColor] = useState("#ff5500"); // Orange default
  const [paintFinish, setPaintFinish] = useState<"metallic" | "matte" | "satin" | "chrome" | "gloss">("metallic");
  const [wheelType, setWheelType] = useState<"sport" | "luxury" | "racing" | "carbon" | "chrome">("sport");
  const [caliperColor, setCaliperColor] = useState("#e50914"); // Red default
  const [hasSplitter, setHasSplitter] = useState(false);
  const [hasSpoiler, setHasSpoiler] = useState(false);
  const [hasPremiumAudio, setHasPremiumAudio] = useState(false);

  // Pricing calculations
  const extraCosts = useMemo(() => {
    let extra = 0;
    if (paintFinish === "chrome") extra += 12000;
    if (paintFinish === "matte") extra += 6500;
    if (wheelType === "carbon") extra += 8500;
    if (wheelType === "chrome") extra += 4500;
    if (hasSplitter) extra += 3500;
    if (hasSpoiler) extra += 5000;
    if (hasPremiumAudio) extra += 2500;
    return extra;
  }, [paintFinish, wheelType, hasSplitter, hasSpoiler, hasPremiumAudio]);

  const totalPrice = vehicle.price + extraCosts;

  const paintOptions = [
    { name: "Orange Apodis", hex: "#ff5500" },
    { name: "Obsidian Black", hex: "#111111" },
    { name: "Diamond White", hex: "#f0f0f0" },
    { name: "Shark Blue", hex: "#0077ff" },
    { name: "Guards Red", hex: "#cc0000" },
  ];

  const caliperOptions = [
    { name: "Racing Red", hex: "#e50914" },
    { name: "Acid Yellow", hex: "#d8f600" },
    { name: "Electric Blue", hex: "#0070f3" },
    { name: "Stealth Black", hex: "#111111" },
  ];

  return (
    <main className="flex-grow flex flex-col relative overflow-hidden h-[calc(100vh-80px)] bg-[#131313] w-full">
      <div className="relative flex flex-grow h-full overflow-hidden w-full">
        {/* 3D Configurator Canvas Area */}
        <div className="absolute inset-0 z-0">
          <Configurator3D
            color={paintColor}
            finish={paintFinish}
            wheelType={wheelType}
            caliperColor={caliperColor}
            hasSplitter={hasSplitter}
            hasSpoiler={hasSpoiler}
          />
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[#131313] via-transparent to-transparent opacity-60"></div>
          
          {/* HUD Overlay */}
          <div className="absolute top-10 left-10 flex flex-col gap-2 z-10 pointer-events-none">
            <div className="flex items-center gap-4">
              <span className="text-[#adc6ff] font-mono text-[10px] tracking-widest uppercase font-bold">Telemetry active</span>
              <div className="h-[1px] w-12 bg-[#adc6ff]/30"></div>
            </div>
            <h1 className="font-sans text-4xl md:text-5xl font-bold tracking-tighter leading-none text-white uppercase">
              {vehicle.model}
            </h1>
          </div>
        </div>

        {/* Floating Price Indicator */}
        <div className="absolute top-10 right-10 z-20">
          <div className="bg-white/[0.03] backdrop-blur-[40px] border border-white/10 px-8 py-6 rounded-xl flex flex-col items-end gap-1 border-t-2 border-t-[#adc6ff]">
            <span className="font-mono text-[9px] text-[#c4c7c7] uppercase">Estimated Total</span>
            <div className="flex items-baseline gap-2">
              <span className="text-white font-sans text-3xl font-bold">${totalPrice.toLocaleString('en-US')}</span>
              <span className="font-mono text-[10px] text-[#c4c7c7] uppercase">USD</span>
            </div>
            <div className="flex gap-4 mt-4 border-t border-white/5 pt-4 w-full justify-between">
              <div className="flex flex-col">
                <span className="text-[9px] font-mono text-[#c4c7c7] uppercase">0-100 KMH</span>
                <span className="text-white font-bold text-sm">{vehicle.specs.acceleration_0_100}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[9px] font-mono text-[#c4c7c7] uppercase">Power</span>
                <span className="text-white font-bold text-sm">{vehicle.specs.horsepower} HP</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[9px] font-mono text-[#c4c7c7] uppercase">Engine</span>
                <span className="text-white font-bold text-sm truncate max-w-[80px]">{vehicle.specs.transmission.split(" ")[0]}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Side Panel Controls */}
        <aside className="absolute right-10 top-[200px] bottom-[120px] w-96 z-30 pointer-events-none">
          <div className="w-full h-full bg-white/[0.03] backdrop-blur-[40px] border border-white/10 rounded-2xl flex flex-col pointer-events-auto border-l-2 border-l-[#adc6ff] shadow-2xl overflow-hidden">
            {/* Tabs */}
            <div className="flex border-b border-white/10 bg-white/5">
              {(["paint", "wheels", "calipers", "bodykit", "accessories"] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex-1 py-4 font-mono text-[10px] uppercase tracking-wider transition-colors ${
                    activeTab === tab ? "text-[#adc6ff] border-b-2 border-b-[#adc6ff] font-bold" : "text-white/60 hover:text-white"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Tab content */}
            <div className="flex-grow overflow-y-auto p-6 custom-scrollbar flex flex-col gap-8">
              {activeTab === "paint" && (
                <section className="space-y-6">
                  <div className="flex justify-between items-center">
                    <h3 className="font-mono text-xs text-white uppercase tracking-widest font-bold">Exterior Finish</h3>
                    <span className="text-[10px] text-[#adc6ff] bg-[#adc6ff]/10 px-2 py-0.5 rounded font-bold uppercase">
                      {paintFinish}
                    </span>
                  </div>
                  <div className="grid grid-cols-4 gap-4">
                    {paintOptions.map((opt) => (
                      <button
                        key={opt.name}
                        onClick={() => setPaintColor(opt.hex)}
                        className={`aspect-square rounded-full border-2 p-1 bg-transparent group relative transition-transform hover:scale-110 ${
                          paintColor === opt.hex ? "border-[#adc6ff]" : "border-transparent"
                        }`}
                      >
                        <div className="w-full h-full rounded-full shadow-inner" style={{ backgroundColor: opt.hex }}></div>
                        <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[9px] font-mono opacity-0 group-hover:opacity-100 whitespace-nowrap transition-opacity text-white bg-black/60 px-1 rounded z-50">
                          {opt.name}
                        </span>
                      </button>
                    ))}
                  </div>

                  <div className="mt-8">
                    <h4 className="font-mono text-xs text-white uppercase tracking-widest mb-3 font-bold">Finish Quality</h4>
                    <div className="grid grid-cols-3 gap-2">
                      {(["gloss", "metallic", "matte", "satin", "chrome"] as const).map((finish) => (
                        <button
                          key={finish}
                          onClick={() => setPaintFinish(finish)}
                          className={`py-3 rounded-lg font-mono text-[9px] uppercase tracking-wider border transition-colors ${
                            paintFinish === finish
                              ? "bg-white/10 border-[#adc6ff] text-[#adc6ff] font-bold"
                              : "bg-white/5 border-white/5 text-white/60 hover:text-white"
                          }`}
                        >
                          {finish}
                        </button>
                      ))}
                    </div>
                  </div>
                </section>
              )}

              {activeTab === "wheels" && (
                <section className="space-y-6">
                  <h3 className="font-mono text-xs text-white uppercase tracking-widest font-bold">Performance Wheels</h3>
                  <div className="flex flex-col gap-4">
                    {[
                      { type: "sport", name: "21\" Turbine Sport", desc: "Standard Equipment", price: 0 },
                      { type: "carbon", name: "22\" Cyber Carbon", desc: "For extreme track downforce", price: 8500 },
                      { type: "chrome", name: "22\" Liquid Chrome", desc: "Showroom chrome shine", price: 4500 },
                    ].map((opt) => (
                      <div
                        key={opt.type}
                        onClick={() => setWheelType(opt.type as any)}
                        className={`bg-white/5 p-4 rounded-xl flex items-center gap-4 cursor-pointer hover:bg-white/10 transition-all border ${
                          wheelType === opt.type ? "border-[#adc6ff]" : "border-white/5"
                        }`}
                      >
                        <div className="w-12 h-12 bg-white/5 rounded-lg flex-shrink-0 flex items-center justify-center">
                          <Info className="w-6 h-6 text-[#adc6ff]" />
                        </div>
                        <div className="flex flex-grow justify-between items-center">
                          <div>
                            <p className="font-bold text-sm text-white">{opt.name}</p>
                            <p className="text-[10px] text-white/50 font-mono">{opt.desc}</p>
                          </div>
                          <span className="font-mono text-xs text-[#adc6ff] font-bold">
                            {opt.price === 0 ? "Included" : `+$${opt.price.toLocaleString('en-US')}`}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {activeTab === "calipers" && (
                <section className="space-y-6">
                  <h3 className="font-mono text-xs text-white uppercase tracking-widest font-bold">Brake Caliper Color</h3>
                  <div className="grid grid-cols-4 gap-4">
                    {caliperOptions.map((opt) => (
                      <button
                        key={opt.name}
                        onClick={() => setCaliperColor(opt.hex)}
                        className={`aspect-square rounded-full border-2 p-1 bg-transparent group relative transition-transform hover:scale-110 ${
                          caliperColor === opt.hex ? "border-[#adc6ff]" : "border-transparent"
                        }`}
                      >
                        <div className="w-full h-full rounded-full shadow-inner" style={{ backgroundColor: opt.hex }}></div>
                        <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[9px] font-mono opacity-0 group-hover:opacity-100 whitespace-nowrap transition-opacity text-white bg-black/60 px-1 rounded z-50">
                          {opt.name}
                        </span>
                      </button>
                    ))}
                  </div>
                </section>
              )}

              {activeTab === "bodykit" && (
                <section className="space-y-6">
                  <h3 className="font-mono text-xs text-white uppercase tracking-widest font-bold">Aggressive Aero Package</h3>
                  <div className="space-y-4">
                    <label className="flex items-center justify-between p-4 bg-white/5 border border-white/5 rounded-xl cursor-pointer hover:bg-white/10 transition-all">
                      <div>
                        <p className="text-sm font-bold text-white">Carbon Front Splitter</p>
                        <p className="text-[10px] text-white/50 font-mono">Increase front axle stability</p>
                      </div>
                      <input
                        type="checkbox"
                        checked={hasSplitter}
                        onChange={(e) => setHasSplitter(e.target.checked)}
                        className="rounded bg-transparent border-white/20 text-[#adc6ff] focus:ring-0 h-5 w-5"
                      />
                    </label>

                    <label className="flex items-center justify-between p-4 bg-white/5 border border-white/5 rounded-xl cursor-pointer hover:bg-white/10 transition-all">
                      <div>
                        <p className="text-sm font-bold text-white">Carbon Active Rear Wing</p>
                        <p className="text-[10px] text-white/50 font-mono">DRS downforce modification</p>
                      </div>
                      <input
                        type="checkbox"
                        checked={hasSpoiler}
                        onChange={(e) => setHasSpoiler(e.target.checked)}
                        className="rounded bg-transparent border-white/20 text-[#adc6ff] focus:ring-0 h-5 w-5"
                      />
                    </label>
                  </div>
                </section>
              )}

              {activeTab === "accessories" && (
                <section className="space-y-6">
                  <h3 className="font-mono text-xs text-white uppercase tracking-widest font-bold">Premium Extras</h3>
                  <div className="space-y-4">
                    <label className="flex items-center justify-between p-4 bg-white/5 border border-white/5 rounded-xl cursor-pointer hover:bg-white/10 transition-all">
                      <div>
                        <p className="text-sm font-bold text-white">Burmester 4D Audio</p>
                        <p className="text-[10px] text-white/50 font-mono">Exclusive high fidelity sound</p>
                      </div>
                      <input
                        type="checkbox"
                        checked={hasPremiumAudio}
                        onChange={(e) => setHasPremiumAudio(e.target.checked)}
                        className="rounded bg-transparent border-white/20 text-[#adc6ff] focus:ring-0 h-5 w-5"
                      />
                    </label>
                  </div>
                </section>
              )}
            </div>
          </div>
        </aside>

        {/* Navigation bottom controls bar */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-full max-w-2xl z-40 px-6">
          <div className="bg-white/[0.03] backdrop-blur-[40px] border border-white/10 h-16 rounded-full flex items-center justify-between px-2 shadow-2xl">
            <button className="flex-1 h-12 flex items-center justify-center gap-3 hover:bg-white/5 rounded-full transition-all group text-white">
              <Save className="w-5 h-5 text-white/50 group-hover:text-[#adc6ff]" />
              <span className="font-mono text-[10px] uppercase tracking-widest">Save Config</span>
            </button>
            <div className="h-8 w-[1px] bg-white/10"></div>
            <Link
              href={`/vehicles/${vehicle.id}`}
              className="flex-[1.5] h-12 flex items-center justify-center gap-3 bg-white text-black rounded-full mx-2 hover:bg-[#adc6ff] hover:text-black transition-all font-mono text-[10px] uppercase tracking-widest font-bold active:scale-95 duration-200"
            >
              <Calendar className="w-4 h-4" />
              Book Test Drive
            </Link>
            <div className="h-8 w-[1px] bg-white/10"></div>
            <button className="flex-1 h-12 flex items-center justify-center gap-3 hover:bg-white/5 rounded-full transition-all group text-white">
              <Share2 className="w-5 h-5 text-white/50 group-hover:text-[#adc6ff]" />
              <span className="font-mono text-[10px] uppercase tracking-widest">Share Config</span>
            </button>
          </div>
        </div>

        {/* Viewport helper buttons */}
        <div className="absolute bottom-6 left-10 z-30 flex flex-col gap-4">
          <button className="w-12 h-12 bg-white/[0.05] border border-white/10 rounded-full flex items-center justify-center hover:bg-[#adc6ff] hover:text-black transition-all text-white">
            <ZoomIn className="w-5 h-5" />
          </button>
          <button className="w-12 h-12 bg-white/[0.05] border border-white/10 rounded-full flex items-center justify-center hover:bg-[#adc6ff] hover:text-black transition-all text-white">
            <Eye className="w-5 h-5" />
          </button>
        </div>
      </div>
    </main>
  );
}
