"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, Sliders, ChevronDown, ChevronLeft, ChevronRight, RefreshCw } from "lucide-react";
import { INVENTORY } from "@/data/inventory";

export default function Inventory() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [maxHP, setMaxHP] = useState(1200);
  const [sortBy, setSortBy] = useState("NEWEST");
  const [page, setPage] = useState(1);

  const categories = ["Hypercars", "Sports Cars", "Electric Vehicles (EVs)", "SUVs"];
  const brands = ["Lamborghini", "Porsche", "Tesla", "Ferrari", "Mercedes-Benz"];

  const toggleCategory = (cat: string) => {
    setSelectedCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );
  };

  const toggleBrand = (brand: string) => {
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
    );
  };

  const filteredInventory = useMemo(() => {
    return INVENTORY.filter((vehicle) => {
      const matchSearch =
        vehicle.model.toLowerCase().includes(searchTerm.toLowerCase()) ||
        vehicle.brand.toLowerCase().includes(searchTerm.toLowerCase());

      const matchCategory =
        selectedCategories.length === 0 || selectedCategories.includes(vehicle.category);

      const matchBrand =
        selectedBrands.length === 0 || selectedBrands.includes(vehicle.brand);

      const matchHP = vehicle.specs.horsepower <= maxHP;

      return matchSearch && matchCategory && matchBrand && matchHP;
    }).sort((a, b) => {
      if (sortBy === "PRICE_LOW_HIGH") return a.price - b.price;
      if (sortBy === "PRICE_HIGH_LOW") return b.price - a.price;
      if (sortBy === "HORSEPOWER") return b.specs.horsepower - a.specs.horsepower;
      return b.year - a.year; // Sort by newest
    });
  }, [searchTerm, selectedCategories, selectedBrands, maxHP, sortBy]);

  return (
    <div className="max-w-[1440px] mx-auto px-8 md:px-16 py-12 min-h-screen">
      {/* Search & Global Filter Bar */}
      <section className="mb-12">
        <div className="flex flex-col md:flex-row gap-6 items-end">
          <div className="flex-grow w-full">
            <label className="font-mono text-xs uppercase mb-2 block opacity-50 tracking-widest">Search Fleet</label>
            <div className="relative group">
              <input
                type="text"
                placeholder="Search by model or series..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-white/5 border-b border-white/20 focus:border-[#adc6ff] focus:ring-0 text-base py-4 px-0 transition-all duration-300 placeholder:text-white/20 font-light focus:outline-none"
              />
              <Search className="absolute right-0 top-1/2 -translate-y-1/2 opacity-30 group-focus-within:opacity-100 transition-opacity w-5 h-5" />
            </div>
          </div>
          <div className="flex gap-4 w-full md:w-auto">
            <button className="flex items-center gap-2 px-6 py-4 bg-white/5 border border-white/10 font-mono text-xs hover:bg-white/10 transition-all active:scale-95 text-white font-bold tracking-wider">
              <Sliders className="w-4 h-4 text-[#adc6ff]" />
              FILTERS
            </button>
            <div className="relative w-full md:w-48">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full bg-transparent border-b border-white/20 focus:border-[#adc6ff] focus:ring-0 font-mono text-xs py-4 appearance-none cursor-pointer text-white/80 focus:outline-none"
              >
                <option value="NEWEST" className="bg-[#131313]">SORT: NEWEST</option>
                <option value="PRICE_LOW_HIGH" className="bg-[#131313]">PRICE: LOW-HIGH</option>
                <option value="PRICE_HIGH_LOW" className="bg-[#131313]">PRICE: HIGH-LOW</option>
                <option value="HORSEPOWER" className="bg-[#131313]">HORSEPOWER</option>
              </select>
              <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none opacity-30 w-4 h-4" />
            </div>
          </div>
        </div>
      </section>

      <div className="flex gap-12">
        {/* Sidebar Filters */}
        <aside className="hidden lg:block w-72 flex-shrink-0 space-y-10 sticky top-32 h-[calc(100vh-160px)] overflow-y-auto pr-4 custom-scrollbar">
          <div>
            <h3 className="font-mono text-xs text-[#adc6ff] mb-6 tracking-widest uppercase font-bold">Categories</h3>
            <div className="space-y-4">
              {categories.map((cat) => (
                <label key={cat} className="flex items-center gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes(cat)}
                    onChange={() => toggleCategory(cat)}
                    className="rounded-none bg-transparent border-white/20 text-[#adc6ff] focus:ring-0 h-4 w-4"
                  />
                  <span className="text-[#c4c7c7] group-hover:text-white transition-colors text-sm">{cat}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-mono text-xs text-[#adc6ff] mb-6 tracking-widest uppercase font-bold">Brands</h3>
            <div className="space-y-4">
              {brands.map((brand) => (
                <label key={brand} className="flex items-center gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={selectedBrands.includes(brand)}
                    onChange={() => toggleBrand(brand)}
                    className="rounded-none bg-transparent border-white/20 text-[#adc6ff] focus:ring-0 h-4 w-4"
                  />
                  <span className="text-[#c4c7c7] group-hover:text-white transition-colors text-sm">{brand}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-mono text-xs text-[#adc6ff] mb-6 tracking-widest uppercase font-bold">Max Horsepower</h3>
            <div className="px-2">
              <input
                type="range"
                min="300"
                max="1200"
                value={maxHP}
                onChange={(e) => setMaxHP(Number(e.target.value))}
                className="w-full h-1 bg-white/10 appearance-none cursor-pointer accent-[#c9c6c5]"
              />
              <div className="flex justify-between mt-3 font-mono text-[10px] opacity-40">
                <span>300 HP</span>
                <span className="text-[#adc6ff] font-bold">{maxHP} HP</span>
                <span>1200 HP</span>
              </div>
            </div>
          </div>
        </aside>

        {/* Inventory List */}
        <section className="flex-grow">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredInventory.map((vehicle) => (
              <div
                key={vehicle.id}
                className="bg-white/[0.03] backdrop-blur-[40px] border border-white/10 p-6 flex flex-col group transition-all duration-500 hover:border-white/30 hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] rounded-lg"
              >
                <div className="relative mb-8 overflow-hidden aspect-[16/9] w-full rounded">
                  <Image
                    src={vehicle.image}
                    alt={vehicle.model}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-white text-black px-3 py-1 font-mono text-[10px] tracking-widest font-bold">
                    V-SERIES PREMIER
                  </div>
                </div>
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h2 className="font-sans text-2xl font-bold mb-1 tracking-tight text-white">{vehicle.brand} {vehicle.model}</h2>
                    <p className="font-mono text-xs text-[#c4c7c7]">{vehicle.variant}</p>
                  </div>
                  <div className="text-right">
                    <div className="font-sans text-2xl font-bold text-[#adc6ff]">${vehicle.price.toLocaleString('en-US')}</div>
                    <div className="font-mono text-[10px] opacity-40 uppercase">MSRP starting at</div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-8">
                  <div className="space-y-2">
                    <span className="font-mono text-[10px] opacity-40 uppercase block">Power</span>
                    <span className="font-sans font-semibold text-sm text-white">{vehicle.specs.horsepower} HP</span>
                    <div
                      className="h-1 bg-white/10 w-full"
                      style={{
                        background: `linear-gradient(90deg, #c9c6c5 ${Math.min(
                          100,
                          (vehicle.specs.horsepower / 1200) * 100
                        )}%, transparent 0%)`,
                      }}
                    ></div>
                  </div>
                  <div className="space-y-2">
                    <span className="font-mono text-[10px] opacity-40 uppercase block">0-60 MPH</span>
                    <span className="font-sans font-semibold text-sm text-white">{vehicle.specs.acceleration_0_100}</span>
                    <div
                      className="h-1 bg-white/10 w-full"
                      style={{
                        background: `linear-gradient(90deg, #c9c6c5 ${Math.min(
                          100,
                          (10 / parseFloat(vehicle.specs.acceleration_0_100)) * 25
                        )}%, transparent 0%)`,
                      }}
                    ></div>
                  </div>
                  <div className="space-y-2">
                    <span className="font-mono text-[10px] opacity-40 uppercase block">Top Speed</span>
                    <span className="font-sans font-semibold text-sm text-white">{vehicle.specs.top_speed}</span>
                    <div
                      className="h-1 bg-white/10 w-full"
                      style={{
                        background: `linear-gradient(90deg, #c9c6c5 ${Math.min(
                          100,
                          (parseFloat(vehicle.specs.top_speed) / 400) * 100
                        )}%, transparent 0%)`,
                      }}
                    ></div>
                  </div>
                </div>

                <div className="mt-auto flex flex-col gap-3">
                  <Link
                    href={`/configure/${vehicle.id}`}
                    className="w-full bg-white text-black font-mono text-xs py-4 text-center hover:bg-[#adc6ff] transition-colors font-bold uppercase tracking-wider active:scale-95 duration-200"
                  >
                    Build & Configure
                  </Link>
                  <div className="flex gap-3">
                    <Link
                      href={`/vehicles/${vehicle.id}`}
                      className="flex-grow border border-white/10 font-mono text-xs py-3 text-center text-white/80 hover:bg-white/5 transition-colors uppercase font-bold tracking-wider"
                    >
                      Specifications
                    </Link>
                    <button className="px-6 border border-white/10 hover:border-white/40 transition-colors flex items-center justify-center text-white">
                      <RefreshCw className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredInventory.length === 0 && (
            <div className="text-center py-24 text-white/40 font-mono">
              No vehicles found matching the filter criteria.
            </div>
          )}

          {/* Pagination */}
          <div className="mt-20 flex justify-center items-center gap-4">
            <button className="w-12 h-12 flex items-center justify-center border border-white/10 hover:border-white/40 transition-colors text-white/60 hover:text-white">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <span className="font-mono text-xs text-white/80">
              PAGE <span className="text-[#adc6ff] font-bold">01</span> / 01
            </span>
            <button className="w-12 h-12 flex items-center justify-center border border-white/10 hover:border-white/40 transition-colors text-white/60 hover:text-white">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
