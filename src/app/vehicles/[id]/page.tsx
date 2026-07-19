import { INVENTORY } from "@/data/inventory";
import VehicleDetailClient from "./VehicleDetailClient";

export async function generateStaticParams() {
  return INVENTORY.map((vehicle) => ({
    id: vehicle.id,
  }));
}

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function VehicleDetailPage({ params }: PageProps) {
  const { id } = await params;
  return <VehicleDetailClient id={id} />;
}
