"use client";

import { cn } from "@/lib/utils";

export interface TabItem {
  id: string;
  label: string;
}

interface TabNavigationProps {
  tabs: TabItem[];
  activeTab: string;
  setActiveTab: (tab: string) => void;

  className?: string; // Wrapper container
  tabClassName?: string; // Tab style
  activeTabClassName?: string; // Active tab style
  tabWrapperClassName?: string; // Inner wrapper (optional)
}

export default function TabNavigation({
  tabs,
  activeTab,
  setActiveTab,
  className = "",
  tabClassName = "",
  activeTabClassName = "",
  tabWrapperClassName = "",
}: TabNavigationProps) {
  return (
    <div className={cn("border rounded-[48px] overflow-hidden", className)}>
      <div
        className={cn(
          "flex gap-0.5 flex-nowrap overflow-x-auto scrollbar-none",
          tabWrapperClassName
        )}
      >
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;

          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "relative px-6 py-2 m-1 rounded-[48px] text-base font-medium whitespace-nowrap transition-all duration-300 ease-in-out",
                "before:absolute before:inset-0 before:w-full before:rounded-[50px] before:content-[''] before:z-0 before:pointer-events-none before:opacity-0 before:transition-opacity before:duration-300",
                isActive ? "before:opacity-100" : "",
                tabClassName,
                isActive && activeTabClassName
              )}
            >
              <span className="relative z-10">{tab.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
