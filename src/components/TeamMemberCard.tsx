import type { TeamMember } from "@/data/team";

export function TeamMemberCard({ member }: { member: TeamMember }) {
  return (
    <div className="rounded-2xl border border-navy/10 bg-white p-8">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-navy/10 text-lg font-bold text-navy">
        {/* TODO: replace initials avatar with a real headshot */}
        {member.initials}
      </div>
      <p className="mt-5 font-semibold text-navy">{member.name}</p>
      <p className="text-sm text-navy/60">{member.role}</p>
      <p className="mt-3 text-sm text-navy/70">{member.bio}</p>
    </div>
  );
}
