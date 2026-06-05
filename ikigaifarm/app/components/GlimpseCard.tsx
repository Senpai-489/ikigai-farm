import React from "react";
import { LucideIcon } from "lucide-react";

type ScheduleItem = {
  time: string;
  activity: string;
  icon: LucideIcon;
};

type ProgramScheduleProps = {
  title: string;
  schedule: ScheduleItem[];
};

const GlimpseCard = ({
  title,
  schedule,
}: ProgramScheduleProps) => {
  return (
    <div
      className="
        group
        overflow-hidden
        rounded-[1.5rem] md:rounded-[2rem]
        border border-[#e6ddd4]
        bg-gradient-to-br from-[#fffdf9] to-[#f7f1ea]
        shadow-[0_15px_40px_rgba(0,0,0,0.08)]
        transition-all duration-500
        hover:-translate-y-1 md:hover:-translate-y-2
        hover:shadow-[0_25px_60px_rgba(0,0,0,0.12)]
      "
    >
      {/* Header */}
      <div className="relative overflow-hidden bg-gradient-to-r from-[#1f6b35] to-[#2d8f4b] px-5 py-5 md:px-8 md:py-6">
        <div className="absolute right-0 top-0 h-24 w-24 md:h-32 md:w-32 rounded-full bg-white/10 blur-2xl" />

        <h3 className="relative text-center text-xl font-bold text-white sm:text-2xl md:text-3xl">
          {title}
        </h3>

        <p className="mt-2 text-center text-xs sm:text-sm text-white/80">
          Your celebration timeline
        </p>
      </div>

      {/* Desktop Headings */}
      <div className="hidden md:grid grid-cols-[100px_1fr] gap-24 border-b border-[#ece4dc] bg-[#f6efe7] px-5 py-3">
        <div className="text-sm font-bold uppercase tracking-wide text-[#1f6b35]">
          Time
        </div>

        <div className="text-sm font-bold uppercase tracking-wide text-[#1f6b35]">
          Activity
        </div>
      </div>

      {/* Timeline */}
      <div className="p-3 sm:p-4 md:p-5">
        <div className="space-y-3">
          {schedule.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="
                  group/item
                  rounded-xl md:rounded-2xl
                  bg-white
                  p-4
                  shadow-[0_6px_18px_rgba(0,0,0,0.05)]
                  transition-all duration-300
                  hover:shadow-[0_12px_24px_rgba(0,0,0,0.08)]
                "
              >
                {/* Mobile Layout */}
                <div className="md:hidden mb-3">
                  <span className="inline-flex rounded-full bg-[#f4ede3] px-3 py-1 text-sm font-semibold text-[#6b5f3a]">
                    {item.time}
                  </span>
                </div>

                {/* Desktop Layout */}
                <div className="grid gap-3 md:grid-cols-[100px_1fr] md:gap-4">
                  <div className="hidden md:block font-semibold text-[#6b5f3a]">
                    {item.time}
                  </div>

                  <div className="flex items-center gap-3">
                    <div
                      className="
                        flex h-10 w-10 shrink-0
                        items-center justify-center
                        rounded-full
                        bg-[#e9f7ee]
                      "
                    >
                      <Icon
                        size={18}
                        className="text-[#1f6b35]"
                      />
                    </div>

                    <p className="text-sm sm:text-base leading-relaxed text-[#3b372f]">
                      {item.activity}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-[#ece4dc] bg-[#faf5ef] px-4 py-4 md:px-6 text-center">
        <span className="text-xs sm:text-sm text-[#6b5f3a]">
          Subject to minor timing adjustments
        </span>
      </div>
    </div>
  );
};

export default GlimpseCard;