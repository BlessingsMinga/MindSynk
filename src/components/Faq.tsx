import { ChevronDown } from "lucide-react";
import type { FaqItem } from "@/data/faq";

export function Faq({ items }: { items: FaqItem[] }) {
  return (
    <div className="mx-auto max-w-3xl divide-y divide-navy/10 rounded-2xl border border-navy/10 bg-white">
      {items.map((item) => (
        <details key={item.question} className="group p-6">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-navy">
            {item.question}
            <ChevronDown
              className="h-5 w-5 shrink-0 text-navy/50 transition-transform group-open:rotate-180"
              aria-hidden="true"
            />
          </summary>
          <p className="mt-3 text-sm text-navy/70">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
