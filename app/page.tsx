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
    // keep a tiny gap under the sticky header; adjust if you want tighter
    <main className="w-full px-6 md:px-8 xl:px-10 2xl:px-12 pb-12 pt-2">
      {/* Toolbar under header */}
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-base font-semibold text-slate-800">Dashboard</h2>
        <div className="flex items-center gap-3">
          <button className="btn btn-ghost">
            <Image src="/icons/calendar.svg" alt="" width={16} height={16} />
            <span>Calendar</span>
          </button>
          <button className="btn btn-primary">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="5"  x2="12" y2="19" />
              <line x1="5"  y1="12" x2="19" y2="12" />
            </svg>
            <span>Add new project</span>
          </button>
        </div>
      </div>

      {/* TOP STATS */}
      <div className="grid grid-cols-12 gap-12">
        {stats.map((s) => (
          <div key={s.title} className="col-span-12 sm:col-span-6 xl:col-span-3 card p-6">
            <div className="flex items-center gap-4">
              <div className={`h-8 w-8 rounded-full ${s.chipBg} shadow-soft ring-1 ring-black/5 flex items-center justify-center`}>
                <img src={s.icon} alt="" className="h-4 w-4" />
              </div>
              <div>
                <p className="text-[15px] font-medium text-slate-600">{s.title}</p>
                <p className="text-4xl font-semibold leading-tight">{s.value}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* MIDDLE ROW */}
      <div className="mt-12 grid grid-cols-12 gap-12">
        {/* Test Cases Card - FIXED */}
        <div className="col-span-12 xl:col-span-6 card p-6">
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center gap-2">
              <h3 className="text-lg md:text-xl font-semibold">Test cases</h3>
              <span title="Info" className="text-slate-400">ℹ</span>
            </div>
            <button className="text-sm text-slate-500 cursor-pointer flex items-center gap-1">
              Reset
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
                <path d="M21 3v5h-5" />
                <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
                <path d="M3 21v-5h5" />
              </svg>
            </button>
          </div>
          
          <div className="flex items-center gap-8">
            {/* Donut Chart */}
            <div className="flex-shrink-0">
              <div className="relative w-[200px] h-[200px]">
                <Image
                  src="/images/donut.svg"
                  alt="Test cases donut chart"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
            
            {/* Legend */}
            <div className="flex-1 space-y-3">
              <div className="flex items-center gap-3">
                <div className="h-3 w-8 rounded-full bg-emerald-500 flex-shrink-0"></div>
                <span className="text-sm text-slate-500 flex-1">Passed</span>
                <span className="text-sm font-medium text-slate-700">130 Test case</span>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="h-3 w-8 rounded-full bg-amber-400 flex-shrink-0"></div>
                <span className="text-sm text-slate-500 flex-1">Active</span>
                <span className="text-sm font-medium text-slate-700">70 Test case</span>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="h-3 w-8 rounded-full bg-slate-400 flex-shrink-0"></div>
                <span className="text-sm text-slate-500 flex-1">Blocked</span>
                <span className="text-sm font-medium text-slate-700">100 Test case</span>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="h-3 w-8 rounded-full bg-red-500 flex-shrink-0"></div>
                <span className="text-sm text-slate-500 flex-1">Failed</span>
                <span className="text-sm font-medium text-slate-700">100 Test case</span>
              </div>
            </div>
          </div>
        </div>

        {/* Coming Soon Card */}
        <div className="col-span-12 xl:col-span-6 card flex flex-col items-center justify-center p-6 text-center">
          <div className="flex h-[220px] w-[220px] items-center justify-center rounded-full bg-slate-100 ring-1 ring-black/5">
            <Image src="/images/coming-soon.svg" alt="" width={160} height={160} />
          </div>
          <h3 className="mt-4 text-lg md:text-xl font-semibold">Coming Soon</h3>
          <p className="text-sm text-slate-500">Stay tuned! A powerful new feature is on the way</p>
        </div>
      </div>

      {/* BOTTOM ROW */}
      <div className="mt-12 grid grid-cols-12 gap-12">
        <div className="col-span-12 xl:col-span-8 card p-6">
          <div className="mb-4 flex items-center gap-2">
            <h3 className="text-lg md:text-xl font-semibold">Projects Insights</h3>
            <span title="Info" className="text-slate-400">ℹ</span>
          </div>
          <div className="mt-2 rounded-[12px] border border-slate-200 bg-white p-5 shadow-soft w-full">
            <div className="relative w-full" style={{ aspectRatio: "823 / 428" }}>
              <Image
                src="/images/bar-chart.svg"
                alt="bar chart"
                fill
                className="object-contain"
                sizes="(min-width:1280px) 66vw, 100vw"
                priority
              />
            </div>
          </div>
        </div>

        <div className="col-span-12 xl:col-span-4 space-y-12">
          <div className="card p-6">
            <div className="mb-4 flex items-center gap-2">
              <h3 className="text-lg md:text-xl font-semibold">Test Priority</h3>
              <span title="Info" className="text-slate-400">ℹ</span>
            </div>
            <Image src="/images/priority.svg" alt="priority" width={1200} height={300} className="w-full h-auto" />
          </div>

          <div className="card p-6">
            <div className="mb-4 flex items-center gap-2">
              <h3 className="text-lg md:text-xl font-semibold">Project States</h3>
            </div>
            <Image src="/images/states.svg" alt="states" width={1200} height={300} className="w-full h-auto" />
          </div>
        </div>
      </div>
    </main>
  );
}