"use client";

import { useDetails } from "@/hooks/details/use-details";
import { DetailsType } from "@/interfaces/details/types";
import DOMPurify from "isomorphic-dompurify";

interface DetailsContentProps {
  type: DetailsType;
  id: string;
}

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "";

function formatDate(value?: string) {
  if (!value) return null;
  return new Date(value).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function DetailsContent({ type, id }: DetailsContentProps) {
  const { data, isLoading, isError } = useDetails(type, id);

  if (isLoading) {
    return <p className="text-muted-foreground">Chargement...</p>;
  }

  if (isError || !data) {
    return <p className="text-destructive">Contenu introuvable.</p>;
  }

  const startDate = formatDate(data.startDate);
  const endDate = formatDate(data.endDate);
  const location = [data.city, data.country].filter(Boolean).join(", ");

  // On retire les styles inline venant de l'éditeur riche du backend
  const safeHtml = DOMPurify.sanitize(data.descriptionHtml, {
    FORBID_ATTR: ["style"],
  });

  return (
    <article className="flex flex-col gap-4">
      {data.coverUrl && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${data.coverUrl}`}
          alt={data.title}
          className="w-full max-h-96 rounded-2xl object-cover"
        />
      )}


      <div className="flex flex-wrap gap-x-6 gap-y-1 text-sm text-muted-foreground">
        {location && <span>{location}</span>}
        {startDate && (
          <span>
            {endDate && endDate !== startDate
              ? `Du ${startDate} au ${endDate}`
              : startDate}
          </span>
        )}
      </div>
      
      <h1 className="text-2xl font-bold">{data.title}</h1>

      <div
        className="flex flex-col gap-4"
        dangerouslySetInnerHTML={{ __html: safeHtml }}
      />

      {(data.phones.length > 0 || data.emails.length > 0) && (
        <section className="flex flex-col gap-1">
          <h2 className="text-lg font-semibold">Contact</h2>
          {data.phones.map((phone) => (
            <a key={phone} href={`tel:${phone}`} className="text-sm underline">
              {phone}
            </a>
          ))}
          {data.emails.map((email) => (
            <a
              key={email}
              href={`mailto:${email}`}
              className="text-sm underline"
            >
              {email}
            </a>
          ))}
        </section>
      )}
    </article>
  );
}