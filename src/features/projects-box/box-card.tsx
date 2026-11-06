import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";

import { cn } from "@/lib/utils";
import Link from "next/link";

export interface BoxCardProjetProps {
  id: string;
  lieu: string;
  type: string;
  titre: string;
  /** Numéro de téléphone (le bouton n'apparaît que s'il est fourni) */
  contact?: string;
  /** Adresse e-mail (le bouton n'apparaît que s'elle est fournie) */
  mail?: string;
  /** Visuel de la carte (optionnel) */
  image?: string;
  className?: string;
}

export function BoxCardProjet({
  id,
  lieu,
  type,
  titre,
  contact,
  mail,
  image,
  className,
}: BoxCardProjetProps) {
  const actionClass =
    "flex h-12 w-[75px] items-center justify-center rounded-full border border-neutral-200 bg-neutral-50 transition-colors hover:bg-neutral-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f5a524]";

  return (
    <Link href={`/details/${id}?type=project`}>
      <article
        className={cn(
          "w-full h-full overflow-hidden rounded-[32px] border border-neutral-200 bg-white p-3 shadow-sm flex flex-col justify-between",
          className
        )}
      >
        {/* Visuel + badge lieu */}
        <div className="relative aspect-[1/1] w-full overflow-hidden rounded-[24px] bg-neutral-100">
          {image && (
            <Image
              src={process.env.NEXT_PUBLIC_IMAGE_URL + image}
              alt={titre}
              fill
              sizes="(max-width: 640px) 100vw, 494px"
              className="object-cover"
            />
          )}

          {lieu && (
            <div className="absolute left-3 top-3 flex items-center gap-2 rounded-full bg-white/95 px-4 py-2 shadow-sm">
              <MapPin className="size-4 shrink-0 text-secondary" aria-hidden="true" />
              <span className="text-sm font-medium text-[#0f4c5c]">{lieu}</span>
            </div>
          )}
        </div>

        {/* Contenu */}
        <div className="px-2 pb-2 pt-4 flex-1 flex flex-col justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-secondary">
              {type}
            </p>
            <h3 className="mt-2 text-2xl font-medium leading-tight text-[#0f4c5c] line-clamp-2">
              {titre}
            </h3>
          </div>

          {/* Actions */}
          {(mail || contact) && (
            <div className="mt-6 flex justify-end gap-3 self-end">
              {mail && (
                <a
                  href={`mailto:${mail}`}
                  aria-label={`Envoyer un e-mail à ${mail}`}
                  className={actionClass}
                >
                  <Mail className="size-5 text-secondary" aria-hidden="true" />
                </a>
              )}
              {contact && (
                <a
                  href={`tel:${contact.replace(/\s/g, "")}`}
                  aria-label={`Appeler le ${contact}`}
                  className={actionClass}
                >
                  <Phone className="size-5 text-secondary" aria-hidden="true" />
                </a>
              )}
            </div>
          )}
        </div>
      </article>
    </Link>
  );
}