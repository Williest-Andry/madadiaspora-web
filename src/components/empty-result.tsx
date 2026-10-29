type EmptyResultProps = {
  message?: string;
};

export default function EmptyResult({
  message = "Aucun résultat",
}: EmptyResultProps) {
  return (
    <div className="flex h-screen items-start justify-center pt-30">
      <p className="text-muted-foreground text-p-md text-center font-extralight italic">
        {message}
      </p>
    </div>
  );
}
