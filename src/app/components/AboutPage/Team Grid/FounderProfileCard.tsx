//"use client"

import { FC } from "react";

// Import shadcn components
import { Link } from "@/i18n/routing";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// Import local components
import LinkedinEmailIcon from "@/app/components/svg/LinkedinEmailIcon";

const FounderProfileCard: FC<{
  name: string;
  avatar: string;
  jobTitle: string;
  href: string;
}> = ({ name, avatar, jobTitle, href }) => {
  return (
    <div id="ProfileCard" className="px-10 flex flex-col items-center ">
      <Avatar className="w-15 h-15">
        <AvatarImage
          src={`/images/teamMember_pics/${avatar}`}
          alt="team_member image"
        />
        <AvatarFallback>teamMemner Pic</AvatarFallback>
      </Avatar>
      <h2>{name}</h2>
      <h3>{jobTitle}</h3>
      <Link href={href}>
        <LinkedinEmailIcon />
      </Link>
    </div>
  );
};

export { FounderProfileCard };
