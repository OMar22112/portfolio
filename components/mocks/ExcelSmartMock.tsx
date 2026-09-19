import {
  CircleHelp,
  FileSpreadsheet,
  Files,
  GitMerge,
  Import,
  Settings,
  SlidersHorizontal,
  UploadCloud,
  CheckCircle2,
} from "lucide-react";

/**
 * Stylised, static mock of the Excel-Smart import screen.
 * Rendered in CSS so the card matches the real screenshots without a bitmap.
 */
export function ExcelSmartMock() {
  const nav = [
    { label: "Import", icon: Import, active: true },
    { label: "Files", icon: Files },
    { label: "Mapping", icon: GitMerge },
    { label: "Review", icon: SlidersHorizontal },
    { label: "Settings", icon: Settings },
  ];

  return (
    <div
      className="shot aspect-[16/10] w-full select-none overflow-hidden text-[#1f2421]"
      role="img"
      aria-label="Excel-Smart import screen: upload a spreadsheet and let AI map it to the right accounts"
    >
      <div className="grid h-full grid-cols-[30%_1fr] text-[0.55rem] leading-tight sm:text-[0.62rem]">
        {/* Sidebar */}
        <aside className="flex flex-col border-r border-black/10 bg-[#F3F5F2] p-2.5 sm:p-3">
          <div className="mb-3 flex items-center gap-1.5 font-semibold">
            <span className="flex h-3.5 w-3.5 items-center justify-center rounded-[3px] bg-[#1f2421] text-[0.45rem] font-bold text-white">
              X
            </span>
            Excel-Smart
          </div>
          <ul className="space-y-0.5">
            {nav.map(({ label, icon: Icon, active }) => (
              <li
                key={label}
                className={
                  active
                    ? "flex items-center gap-1.5 rounded-md bg-[#DCEBD6] px-2 py-1.5 font-medium text-[#1f4d2b]"
                    : "flex items-center gap-1.5 rounded-md px-2 py-1.5 text-[#5d655f]"
                }
              >
                <Icon className="h-2.5 w-2.5 shrink-0" aria-hidden="true" />
                {label}
              </li>
            ))}
          </ul>
        </aside>

        {/* Main */}
        <div className="flex flex-col bg-[#F9FAF8] p-2.5 sm:p-3.5">
          <div className="mb-2 flex items-center justify-between">
            <div>
              <p className="text-[0.75rem] font-semibold sm:text-[0.85rem]">Import spreadsheet</p>
              <p className="text-[#7a827c]">Upload your financial data and let AI map it to the right accounts.</p>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="flex items-center gap-1 rounded-full border border-black/10 px-1.5 py-0.5 text-[#5d655f]">
                <CircleHelp className="h-2.5 w-2.5" aria-hidden="true" />
                Help
              </span>
              <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#1f2421] text-[0.45rem] font-semibold text-white">
                OA
              </span>
            </div>
          </div>

          <div className="flex flex-1 flex-col items-center justify-center rounded-lg border border-dashed border-black/20 bg-white px-3 py-4 text-center">
            <UploadCloud className="mb-1.5 h-5 w-5 text-[#5d655f]" aria-hidden="true" />
            <p className="font-medium">Drop your file here or click to browse</p>
            <p className="text-[#8b938d]">Supports Excel, CSV, and Google Sheets</p>
          </div>

          <div className="mt-2 flex items-center justify-between rounded-lg border border-black/10 bg-white px-2.5 py-2">
            <div className="flex items-center gap-2">
              <FileSpreadsheet className="h-3.5 w-3.5 text-[#2f7a4a]" aria-hidden="true" />
              <div>
                <p className="font-medium">transactions.xlsx</p>
                <p className="text-[#8b938d]">12,480 rows · 8.4 MB</p>
              </div>
            </div>
            <CheckCircle2 className="h-3.5 w-3.5 text-[#2f7a4a]" aria-hidden="true" />
          </div>
        </div>
      </div>
    </div>
  );
}
