type OptionalContactSectionProps = {
  title: string;
  contacts: string[];
};

export default function OptionalContactSection({
  title,
  contacts,
}: OptionalContactSectionProps) {
  return (
    <div className="flex w-[50%] flex-col">
      <p className="text-p-xs text-text-card leading-[16px] tracking-[0px]">
        {title}
      </p>
      <div className="h-[36px] w-full">
        {contacts.length > 0 ? (
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
