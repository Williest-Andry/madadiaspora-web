import { notFound } from "next/navigation";
import { DetailsContent } from "@/features/details/components/details-content";
import { isDetailsType } from "@/interfaces/details/types";

export default async function DetailsPage({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ type?: string }>;
}) {
  const { id } = await params;
  const { type } = await searchParams;

  if (!isDetailsType(type)) notFound();

  return <DetailsContent type={type} id={id} />;
}