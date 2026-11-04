type OptionalContactSectionProps = {
  title: string;
  contacts: string[] | undefined;
};

export default function OptionalContactSection({
  title,
  contacts,
}: OptionalContactSectionProps) {
  return (
    <div className="flex w-[50%] flex-col gap-1">
      <p className="text-p-xs text-text-card leading-[16px] tracking-[0px]">
        {title}
      </p>
      <div className="flex h-[38px] w-full flex-col gap-1">
        {contacts && contacts.length > 0 ? (
          contacts.slice(0, 2).map((contact, index) => (
            <p
              key={index}
              className="text-p-sm text-text-bagde w-full leading-[16px] tracking-[0px]"
            >
              {contact}
            </p>
          ))
        ) : (
          <p className="text-p-sm text-text-bagde w-full leading-[16px] tracking-[0px]">
            {"---"}
          </p>
        )}
      </div>
    </div>
  );
}
