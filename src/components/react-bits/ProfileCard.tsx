import { useCallback, useEffect, useRef } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { Linkedin01Icon } from "@hugeicons/core-free-icons";
import "./ProfileCard.css";

interface ProfileCardProps {
  name: string;
  title: string;
  handle: string;
  bio: string;
  avatarUrl?: string;
  avatarPosition?: string;
  linkedinUrl?: string;
  enableTilt?: boolean;
}

export default function ProfileCard({
  name,
  title,
  handle,
  bio,
  avatarUrl,
  avatarPosition = "center top",
  linkedinUrl,
  enableTilt = true,
}: ProfileCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<number | null>(null);

  const resetCard = useCallback(() => {
    const card = cardRef.current;
    if (!card) return;
    card.style.setProperty("--rotate-x", "0deg");
    card.style.setProperty("--rotate-y", "0deg");
    card.style.setProperty("--pointer-x", "50%");
    card.style.setProperty("--pointer-y", "50%");
  }, []);

  useEffect(() => () => {
    if (frameRef.current) cancelAnimationFrame(frameRef.current);
  }, []);

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!enableTilt || !cardRef.current) return;
    const card = cardRef.current;
    const bounds = card.getBoundingClientRect();
    const x = ((event.clientX - bounds.left) / bounds.width) * 100;
    const y = ((event.clientY - bounds.top) / bounds.height) * 100;

    if (frameRef.current) cancelAnimationFrame(frameRef.current);
    frameRef.current = requestAnimationFrame(() => {
      card.style.setProperty("--pointer-x", `${x}%`);
      card.style.setProperty("--pointer-y", `${y}%`);
      card.style.setProperty("--rotate-x", `${(50 - y) / 10}deg`);
      card.style.setProperty("--rotate-y", `${(x - 50) / 10}deg`);
    });
  };

  return (
    <div className="profile-card-wrap">
      <div
        ref={cardRef}
        className="profile-card"
        onPointerMove={handlePointerMove}
        onPointerLeave={resetCard}
      >
        <div className="profile-card__glow" />
        <div className="profile-card__texture" />
        {avatarUrl && <img className="profile-card__avatar" src={avatarUrl} alt={`Portrait of ${name}`} style={{ objectPosition: avatarPosition }} />}
        <div className="profile-card__details" aria-label={`More information about ${name}`}>
          <span className="profile-card__tag">@{handle}</span>
          <p className="profile-card__bio">{bio}</p>
          {linkedinUrl && <a className="profile-card__linkedin" href={linkedinUrl} target="_blank" rel="noreferrer" aria-label={`${name} on LinkedIn`}><HugeiconsIcon icon={Linkedin01Icon} size={20} aria-hidden="true" /><span>LinkedIn</span></a>}
        </div>
        <div className="profile-card__name-tag">
          <h3>{name}</h3>
          <p>{title}</p>
        </div>
      </div>
    </div>
  );
}
