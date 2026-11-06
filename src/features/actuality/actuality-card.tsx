import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";

export interface ActualityCardProps {
  lieu: string;
  date: string;
  titre: string;
  resume: string;
  href: string;
  /** Catégorie affichée en badge sur l'image (optionnelle) */
  type?: string;
  /** Visuel de la carte (optionnel) */
  image?: string;
  className?: string;
}

export function ActualityCard({
  lieu,
  date,
  titre,
  resume,
  href,
  type,
  image,
  className,
}: ActualityCardProps) {
  return (
    <article
      className={cn(
        "flex h-full w-full flex-col overflow-hidden rounded-[32px] border border-neutral-200 bg-white shadow-sm",
        className
      )}
    >
      {/* Visuel + badge type */}
      <div className="relative aspect-[16/10] w-full shrink-0 bg-neutral-100">
        {image && (
          <Image
            src={process.env.NEXT_PUBLIC_IMAGE_URL + image}
            alt={titre}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        )}

        {type && (
          <span className="absolute left-4 top-4 rounded-full bg-white/90 px-4 py-1.5 text-sm font-medium text-neutral-800 shadow-sm">
            {type}
          </span>
        )}
      </div>

      {/* Contenu */}
      <div className="flex flex-1 flex-col gap-4 p-6">
        {(lieu || date) && (
          <p className="flex flex-wrap items-center gap-x-3 text-sm font-medium text-neutral-600">
            {lieu && <span>{lieu}</span>}
            {lieu && date && (
              <span
                aria-hidden="true"
                className="size-1.5 rounded-full bg-neutral-600"
              />
            )}
            {date && <time>{date}</time>}
          </p>
        )}

        <h3 className="text-2xl font-semibold leading-snug text-neutral-900">
          {titre}
        </h3>

        <p className="line-clamp-3 text-base leading-8 text-neutral-600">
          {resume}
        </p>

        <Link
          href={href}
          aria-label={`Consulter : ${titre}`}
          className="mt-auto flex items-center gap-1 self-end pt-2 text-lg font-medium text-[#0f4c5c] transition-opacity hover:opacity-70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        >
          Consulter
          <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}