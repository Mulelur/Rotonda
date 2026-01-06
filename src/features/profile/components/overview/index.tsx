import { GlobeIcon, MapPinIcon, MarsIcon, VenusIcon } from "lucide-react";
import Image from "next/image";

import { USER } from "@/features/profile/data/user";
import { urlToName } from "@/utils/url";

import { Panel, PanelContent } from "../panel";
import { EmailItem } from "./email-item";
import { IntroItem } from "./intro-item";
import { JobItem } from "./job-item";
import { PhoneItem } from "./phone-item";

export function Overview() {
  return (
    <Panel>
      <h2 className="sr-only">Overview</h2>

      <PanelContent className="space-y-2">
        {USER.jobs.map((job, index) => {
          return (
            <JobItem
              key={index}
              title={job.title}
              company={job.company}
              website={job.website}
            />
          );
        })}

        <>
          <div className="flex gap-1">
            <IntroItem icon={MapPinIcon} content={USER.address} />
            <span className="flex items-center gap-1">
              <Image
                src="https://flagcdn.com/za.svg"
                alt="US Flag"
                className="inline-block h-4 w-4"
                width={500}
                height={500}
              />
            </span>
          </div>
        </>

        <PhoneItem phoneNumber={USER.phoneNumber} />

        <EmailItem email={USER.email} />

        <IntroItem
          icon={GlobeIcon}
          content={urlToName(USER.website)}
          href={USER.website}
        />

        <IntroItem
          icon={USER.gender === "male" ? MarsIcon : VenusIcon}
          content={USER.pronouns}
        />
      </PanelContent>
    </Panel>
  );
}
