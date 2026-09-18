interface ProcessStepProps {
  number: string;
  title: string;
  description: string;
}

export function ProcessStep({ number, title, description }: ProcessStepProps) {
  return (
    <div className="flex gap-6 border-b border-navy/10 py-6 last:border-b-0">
      <span className="shrink-0 text-3xl font-bold text-orange sm:text-4xl" aria-hidden="true">
        {number}
      </span>
      <div>
        <h3 className="text-lg font-bold text-navy">{title}</h3>
        <p className="mt-1 text-sm text-navy/70">{description}</p>
      </div>
    </div>
  );
}
