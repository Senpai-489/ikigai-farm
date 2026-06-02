
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
      rounded-[2rem]
      border border-[#e6ddd4]
      bg-gradient-to-br from-[#fffdf9] to-[#f7f1ea]
      shadow-[0_15px_40px_rgba(0,0,0,0.08)]
      transition-all duration-500
      hover:-translate-y-2
      hover:shadow-[0_25px_60px_rgba(0,0,0,0.12)]
    "
    >
      {/* Header */}
      <div className="relative overflow-hidden bg-gradient-to-r from-[#1f6b35] to-[#2d8f4b] px-8 py-6">
        <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-white/10 blur-2xl" />

        <h3 className="relative text-center text-2xl font-bold text-white md:text-3xl">
          {title}
        </h3>

        <p className="mt-2 text-center text-sm text-white/80">
          Your celebration timeline
        </p>
      </div>

      {/* Column Headings */}
      <div className="grid grid-cols-[90px_1fr] border-b border-[#ece4dc] bg-[#f6efe7] px-5 py-3">
        <div className="text-sm font-bold uppercase tracking-wide text-[#1f6b35]">
          Time
        </div>

        <div className="text-sm font-bold uppercase tracking-wide text-[#1f6b35]">
          Activity
        </div>
      </div>

      {/* Timeline */}
      <div className="p-5">
        <div className="space-y-3">
          {schedule.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="
                group/item
                grid
                grid-cols-[90px_1fr]
                items-start
                gap-4
                rounded-2xl
                bg-white
                p-4
                shadow-[0_6px_18px_rgba(0,0,0,0.05)]
                transition-all duration-300
                hover:scale-[1.02]
                hover:shadow-[0_12px_24px_rgba(0,0,0,0.08)]
              "
              >
                {/* Time */}
                <div className="font-semibold text-[#6b5f3a]">
                  {item.time}
                </div>

                {/* Activity */}
                <div className="flex items-start gap-3">
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

                  <p className="leading-relaxed text-[#3b372f]">
                    {item.activity}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-[#ece4dc] bg-[#faf5ef] px-6 py-4 text-center">
        <span className="text-sm text-[#6b5f3a]">
          Subject to minor timing adjustments
        </span>
      </div>
    </div>
  );
};

export default GlimpseCard;
