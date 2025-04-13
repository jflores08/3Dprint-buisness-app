//"use client"

import { FC } from "react";

// Import shadcn components
// import { Avatar } from "@radix-ui/react-avatar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const TeamMemberProfileCard: FC<{
  name: string;
  avatar: string;
  jobTitle: string;
}> = ({ name, avatar, jobTitle }) => {
  return (
    <div
      id="ProfileCard"
      className="px-5 flex flex-col items-center justify-center"
    >
      <Avatar className="w-15 h-15">
        <AvatarImage
          src={`/images/teamMember_pics/${avatar}`}
          alt="team_member image"
        />
        <AvatarFallback>teamMemner Pic</AvatarFallback>
      </Avatar>
      <h3>{name}</h3>
      <h4 className="flex justify-end">{jobTitle}</h4>
    </div>
  );
};

export { TeamMemberProfileCard };
