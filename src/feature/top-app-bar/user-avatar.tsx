import {
  Avatar,
  AvatarBadge,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";

export default function UserAvatar() {
  return (
    <Avatar size="lg">
      <AvatarImage src="/top-mock-profile.jpg" alt="mock profile" />
      <AvatarFallback>CN</AvatarFallback>
      <AvatarBadge className="bg-green-600 dark:bg-green-800" />
    </Avatar>
  );
}
