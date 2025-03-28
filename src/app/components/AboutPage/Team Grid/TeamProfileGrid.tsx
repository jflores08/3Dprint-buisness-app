// Import React components
import { FC } from "react";

// Import MUI components
// import { Grid, Stack, Box } from "@mui/material";

// Import local Data
import { TeamMemberProfileCard } from "./TeamMemberProfileCard";
import { FounderProfileCard } from "./FounderProfileCard";

const TeamProfileGrid: FC<{
  teamData: {
    founders: {
      name: string;
      avatar: string;
      linkedInLink: string;
      job_title: string;
    }[];
    employees: {
      name: string;
      avatar: string;
      job_title: string;
    }[];
  };
}> = ({ teamData }) => {
  const founderData = teamData.founders;
  const employeeData = teamData.employees;

  return (
    <div
      id="teamProfileGrid"
      className="flex flex-col mt-40 mb-10 justify-center"
    >
      {/* Grid of Founders to show Founders */}
      <div
        id="founder-Grid"
        className="grid grid-cols-12 gap-4 mb-20 justify-items-center"
      >
        {/* <div className="container grid-col-12 mb-80 griditems-center justify-center"> */}
        {founderData.map((teamMember) => (
          <div className="lg:col-span-4 xs:col-span-12 flex justify-center">
            <FounderProfileCard
              avatar={teamMember.avatar}
              name={teamMember.name}
              jobTitle={teamMember.job_title}
              href={teamMember.linkedInLink}
              key={teamMember.name}
            />
          </div>
        ))}
      </div>

      {/* Grid of TeamMember to show Employees */}
      <div id="teamMember-Grid" className="grid grid-cols-12  gap-4">
        {employeeData.map((teamMember) => (
          <div className="lg:col-span-3 xs:col-span-12 flex justify-center">
            <TeamMemberProfileCard
              avatar={teamMember.avatar}
              name={teamMember.name}
              jobTitle={teamMember.job_title}
              key={teamMember.name}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
export { TeamProfileGrid };
