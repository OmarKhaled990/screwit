

import Image from "next/image";

type Stat = {
  title: string;
  value: string | number;
  icon: string;
  chipBg: string;
};

const stats: Stat[] = [
  { title: "Total projects",     value: 50,  icon: "/icons/folder.svg", chipBg: "bg-slate-800"  },
  { title: "Total test cases",   value: 400, icon: "/icons/cases.svg",  chipBg: "bg-blue-600"   },
  { title: "Total passed cases", value: 250, icon: "/icons/vector.svg", chipBg: "bg-emerald-500"},
  { title: "Total failed cases", value: 150, icon: "/icons/x.svg",      chipBg: "bg-red-500"    },
];

export default function Page() {
  return (
    <main className="w-full px-4 sm:px-6 md:px-8 xl:px-10 2xl:px-12 pb-8 sm:pb-12 pt-2">
      {/* Toolbar under header - RESPONSIVE */}
      <div className="mb-4 sm:mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0">
        <h2 className="text-base font-semibold text-slate-800">Dashboard</h2>
        <div className="flex items-center gap-2 sm:gap-3 w-full sm:w-auto">
          <button className="btn btn-ghost text-xs sm:text-sm flex-1 sm:flex-none">
            <Image src="/icons/calendar.svg" alt="" width={16} height={16} />
            <span className="hidden xs:inline">Calendar</span>
          </button>
          <button className="btn btn-primary text-xs sm:text-sm flex-1 sm:flex-none">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="5"  x2="12" y2="19" />
              <line x1="5"  y1="12" x2="19" y2="12" />
            </svg>
            <span className="hidden xs:inline">Add new project</span>
            <span className="xs:hidden">Add</span>
          </button>
        </div>
      </div>

      {/* TOP STATS - RESPONSIVE GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 xl:gap-12">
        {stats.map((s) => (
          <div key={s.title} className="card p-4 sm:p-6">
            <div className="flex items-center gap-3 sm:gap-4">
              <div className={`h-7 w-7 sm:h-8 sm:w-8 rounded-full ${s.chipBg} shadow-soft ring-1 ring-black/5 flex items-center justify-center flex-shrink-0`}>
                <img src={s.icon} alt="" className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              </div>
              <div className="min-w-0">
                <p className="text-sm sm:text-[15px] font-medium text-slate-600 truncate">{s.title}</p>
                <p className="text-2xl sm:text-3xl lg:text-4xl font-semibold leading-tight">{s.value}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* MIDDLE ROW - RESPONSIVE */}
      <div className="mt-8 sm:mt-12 grid grid-cols-1 xl:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
        {/* Test Cases Card - RESPONSIVE */}
        <div className="card p-4 sm:p-6">
          <div className="flex items-start justify-between mb-4 sm:mb-6">
            <div className="flex items-center gap-2">
              <h3 className="text-lg md:text-xl font-semibold">Test cases</h3>
              <span title="Info" className="text-slate-400 hidden sm:inline">ℹ</span>
            </div>
            <button className="text-sm text-slate-500 cursor-pointer flex items-center gap-1">
              <span className="hidden sm:inline">Reset</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
                <path d="M21 3v5h-5" />
                <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
                <path d="M3 21v-5h5" />
              </svg>
            </button>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
            {/* Donut Chart - RESPONSIVE */}
            <div className="flex-shrink-0">
              <div className="relative w-[160px] h-[160px] sm:w-[180px] sm:h-[180px] lg:w-[200px] lg:h-[200px]">
                <Image
                  src="/images/donut.svg"
                  alt="Test cases donut chart"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
            
            {/* Legend - RESPONSIVE */}
            <div className="flex-1 w-full space-y-2 sm:space-y-3">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="h-2.5 w-6 sm:h-3 sm:w-8 rounded-full bg-emerald-500 flex-shrink-0"></div>
                <span className="text-xs sm:text-sm text-slate-500 flex-1">Passed</span>
                <span className="text-xs sm:text-sm font-medium text-slate-700 whitespace-nowrap">130 Test case</span>
              </div>
              
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="h-2.5 w-6 sm:h-3 sm:w-8 rounded-full bg-amber-400 flex-shrink-0"></div>
                <span className="text-xs sm:text-sm text-slate-500 flex-1">Active</span>
                <span className="text-xs sm:text-sm font-medium text-slate-700 whitespace-nowrap">70 Test case</span>
              </div>
              
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="h-2.5 w-6 sm:h-3 sm:w-8 rounded-full bg-slate-400 flex-shrink-0"></div>
                <span className="text-xs sm:text-sm text-slate-500 flex-1">Blocked</span>
                <span className="text-xs sm:text-sm font-medium text-slate-700 whitespace-nowrap">100 Test case</span>
              </div>
              
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="h-2.5 w-6 sm:h-3 sm:w-8 rounded-full bg-red-500 flex-shrink-0"></div>
                <span className="text-xs sm:text-sm text-slate-500 flex-1">Failed</span>
                <span className="text-xs sm:text-sm font-medium text-slate-700 whitespace-nowrap">100 Test case</span>
              </div>
            </div>
          </div>
        </div>

        {/* Coming Soon Card - RESPONSIVE */}
        <div className="card flex flex-col items-center justify-center p-6 sm:p-8 text-center min-h-[280px] sm:min-h-[320px]">
          <div className="flex h-[120px] w-[120px] sm:h-[160px] sm:w-[160px] lg:h-[180px] lg:w-[180px] items-center justify-center rounded-full bg-slate-100 ring-1 ring-black/5">
            <Image src="/images/coming-soon.svg" alt="" width={100} height={100} className="sm:w-[130px] sm:h-[130px] lg:w-[150px] lg:h-[150px]" />
          </div>
          <h3 className="mt-3 sm:mt-4 text-lg md:text-xl font-semibold">Coming Soon</h3>
          <p className="text-sm text-slate-500 max-w-xs">Stay tuned! A powerful new feature is on the way</p>
        </div>
      </div>

      {/* BOTTOM ROW - RESPONSIVE */}
      <div className="mt-8 sm:mt-12 grid grid-cols-1 xl:grid-cols-12 gap-6 sm:gap-8 lg:gap-12">
        <div className="xl:col-span-8 card p-4 sm:p-6">
          <div className="mb-3 sm:mb-4 flex items-center gap-2">
            <h3 className="text-lg md:text-xl font-semibold">Projects Insights</h3>
            <span title="Info" className="text-slate-400 hidden sm:inline">ℹ</span>
          </div>
          <div className="rounded-[12px] border border-slate-200 bg-white p-3 sm:p-5 shadow-soft w-full">
            <div className="relative w-full h-[200px] sm:h-[300px] lg:h-[400px]">
              <Image
                src="/images/bar-chart.svg"
                alt="bar chart"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 100vw, 66vw"
                priority
              />
            </div>
          </div>
        </div>

        <div className="xl:col-span-4 space-y-6 sm:space-y-8 lg:space-y-12">
          <div className="card p-4 sm:p-6">
            <div className="mb-3 sm:mb-4 flex items-center gap-2">
              <h3 className="text-lg md:text-xl font-semibold">Test Priority</h3>
              <span title="Info" className="text-slate-400 hidden sm:inline">ℹ</span>
            </div>
            <div className="relative w-full h-[120px] sm:h-[150px]">
              <Image src="/images/priority.svg" alt="priority" fill className="object-contain" />
            </div>
          </div>

          <div className="card p-4 sm:p-6">
            <div className="mb-3 sm:mb-4 flex items-center gap-2">
              <h3 className="text-lg md:text-xl font-semibold">Project States</h3>
            </div>
            <div className="relative w-full h-[120px] sm:h-[150px]">
              <Image src="/images/states.svg" alt="states" fill className="object-contain" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}