import { INVENTORY } from "@/data/inventory";
import ConfigureClient from "./ConfigureClient";

export async function generateStaticParams() {
  return INVENTORY.map((vehicle) => ({
    id: vehicle.id,
  }));
}

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function ConfigurePage({ params }: PageProps) {
  const { id } = await params;
  return <ConfigureClient id={id} />;
}
