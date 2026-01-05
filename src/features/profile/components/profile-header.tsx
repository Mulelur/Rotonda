import { SimpleTooltip } from "@/components/ui/tooltip";
import { USER } from "@/features/profile/data/user";
import { cn } from "@/lib/utils";
import { FlipSentences } from "@/registry/flip-sentences";

import { PronounceMyName } from "./pronounce-my-name";
import { VerifiedIcon } from "./verified-icon";

export function ProfileHeader() {
  return (
    <div className="screen-line-after flex border-x border-edge">
      <div className="shrink-0 border-r border-edge">
        <div className="mx-[2px] my-[3px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="size-32 rounded-full ring-1 ring-border ring-offset-2 ring-offset-background select-none sm:size-40"
            alt={`${USER.displayName}'s avatar`}
            src={USER.avatar}
            fetchPriority="high"
          />
        </div>

        {/* Flag of Viet Nam */}
        {/* <svg
          className="absolute top-0 -left-px h-8 sm:h-9"
          viewBox="0 0 30 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="30" height="20" fill="#F00" />
          <polygon
            points="15,4 11.47,14.85 20.71,8.15 9.29,8.15 18.53,14.85"
            fill="#FFEB00"
          />
        </svg> */}

        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-0 -left-px h-8 sm:h-9"
          viewBox="0 0 90 60"
        >
          <title>Flag of South Africa</title>
          <defs>
            <clipPath id="t">
              <path d="m0 0 45 30L0 60z" />
            </clipPath>
            <clipPath id="f">
              <path d="m0 0h90v60H0z" />
            </clipPath>
          </defs>
          <path fill="#E03C31" d="m0 0h90v30H45z" />
          <path fill="#001489" d="m0 60h90V30H45z" />
          <g clipPath="url(#f)" fill="none">
            <path stroke="#FFF" strokeWidth="20" d="m90 30H45L0 0v60l45-30" />
            <path
              fill="#000"
              stroke="#ffb81c"
              strokeWidth="20"
              clipPath="url(#t)"
              d="m0 0 45 30L0 60"
            />
            <path
              stroke="#007749"
              strokeWidth="12"
              d="m0 0 45 30h45M0 60l45-30"
            />
          </g>
        </svg>

        {/* <svg
          className="absolute top-0 -left-px h-8 sm:h-9"
          // viewBox="0 0 30 20"
          xmlns="http://www.w3.org/2000/svg"
          // width="90"
          // height="60"
          viewBox="0 0 90 60"
        >
          <defs>
            <clipPath id="b">
              <path d="m0 0 45 30L0 60z" />
            </clipPath>
            <clipPath id="a">
              <path d="M0 0h90v60H0z" />
            </clipPath>
          </defs>
          <path fill="#E03C31" d="M0 0h90v30H45z" />
          <path fill="#001489" d="M0 60h90V30H45z" />
          <g clip-path="url(#a)" fill="none">
            <path
              stroke="#FFFFF"
              stroke-width="20"
              d="M90 30H45L0 0v60l45-30"
            />
            <path
              fill="#000000"
              stroke="#FFB81C"
              stroke-width="20"
              clip-path="url(#b)"
              d="m0 0 45 30L0 60"
            />
            <path
              stroke="#007749"
              stroke-width="12"
              d="m0 0 45 30h45M0 60l45-30"
            />
          </g>
        </svg> */}
      </div>

      <div className="flex flex-1 flex-col">
        <div
          className={cn(
            "flex grow items-end pb-1 pl-4",
            "bg-[repeating-linear-gradient(315deg,var(--pattern-foreground)_0,var(--pattern-foreground)_1px,transparent_0,transparent_50%)] bg-size-[10px_10px] [--pattern-foreground:var(--color-edge)]/56"
          )}
        >
          <div className="line-clamp-1 font-mono text-xs text-zinc-300 select-none max-sm:hidden dark:text-zinc-800">
            {"text-3xl "}
            <span className="inline dark:hidden">text-zinc-950</span>
            <span className="hidden dark:inline">text-zinc-50</span>
            {" font-medium"}
          </div>
        </div>

        <div className="border-t border-edge">
          <h1 className="flex items-center pl-4 text-3xl font-semibold">
            {USER.displayName}
            &nbsp;
            <SimpleTooltip content="Verified">
              <VerifiedIcon className="size-[0.6em] translate-y-px text-info select-none" />
            </SimpleTooltip>
            {USER.namePronunciationUrl && (
              <>
                &nbsp;
                <PronounceMyName
                  className="translate-y-px"
                  namePronunciationUrl={USER.namePronunciationUrl}
                />
              </>
            )}
          </h1>

          <div className="h-12 border-t border-edge py-1 pl-4 sm:h-auto">
            <FlipSentences sentences={USER.flipSentences} />
          </div>
        </div>
      </div>
    </div>
  );
}
