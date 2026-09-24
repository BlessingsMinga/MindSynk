import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

import './GooeyNav.css';

// Adapted from React Bits <GooeyNav />:
// - active item is controlled by the router (activeIndex prop, -1 = none)
// - items render as react-router <Link>s ({ label, to })
// - gooey effect uses an SVG alpha-threshold filter so brand colours survive on a light navbar
const GooeyNav = ({
  items,
  activeIndex = -1,
  animationTime = 600,
  particleCount = 15,
  particleDistances = [60, 10],
  particleR = 100,
  timeVariance = 300,
  colors = [1, 2, 3, 1, 2, 3, 1, 4]
}) => {
  const containerRef = useRef(null);
  const navRef = useRef(null);
  const filterRef = useRef(null);
  const prevIndexRef = useRef(null);

  const noise = (n = 1) => n / 2 - Math.random() * n;

  const getXY = (distance, pointIndex, totalPoints) => {
    const angle = ((360 + noise(8)) / totalPoints) * pointIndex * (Math.PI / 180);
    return [distance * Math.cos(angle), distance * Math.sin(angle)];
  };

  const createParticle = (i, t, d, r) => {
    let rotate = noise(r / 10);
    return {
      start: getXY(d[0], particleCount - i, particleCount),
      end: getXY(d[1] + noise(7), particleCount - i, particleCount),
      time: t,
      scale: 1 + noise(0.2),
      color: colors[Math.floor(Math.random() * colors.length)],
      rotate: rotate > 0 ? (rotate + r / 20) * 10 : (rotate - r / 20) * 10
    };
  };

  const makeParticles = element => {
    const d = particleDistances;
    const r = particleR;
    const bubbleTime = animationTime * 2 + timeVariance;
    element.style.setProperty('--time', `${bubbleTime}ms`);

    for (let i = 0; i < particleCount; i++) {
      const t = animationTime * 2 + noise(timeVariance * 2);
      const p = createParticle(i, t, d, r);
      element.classList.remove('active');

      setTimeout(() => {
        const particle = document.createElement('span');
        const point = document.createElement('span');
        particle.classList.add('particle');
        particle.style.setProperty('--start-x', `${p.start[0]}px`);
        particle.style.setProperty('--start-y', `${p.start[1]}px`);
        particle.style.setProperty('--end-x', `${p.end[0]}px`);
        particle.style.setProperty('--end-y', `${p.end[1]}px`);
        particle.style.setProperty('--time', `${p.time}ms`);
        particle.style.setProperty('--scale', `${p.scale}`);
        particle.style.setProperty('--color', `var(--color-${p.color}, white)`);
        particle.style.setProperty('--rotate', `${p.rotate}deg`);

        point.classList.add('point');
        particle.appendChild(point);
        element.appendChild(particle);
        requestAnimationFrame(() => {
          element.classList.add('active');
        });
        setTimeout(() => {
          try {
            element.removeChild(particle);
          } catch {
            // Do nothing
          }
        }, t);
      }, 30);
    }
  };

  const updateEffectPosition = element => {
    if (!containerRef.current || !filterRef.current) return;
    const containerRect = containerRef.current.getBoundingClientRect();
    const pos = element.getBoundingClientRect();

    Object.assign(filterRef.current.style, {
      left: `${pos.x - containerRect.x}px`,
      top: `${pos.y - containerRect.y}px`,
      width: `${pos.width}px`,
      height: `${pos.height}px`
    });
  };

  useEffect(() => {
    const filter = filterRef.current;
    if (!navRef.current || !containerRef.current || !filter) return;

    const prevIndex = prevIndexRef.current;
    prevIndexRef.current = activeIndex;

    const activeLi = navRef.current.querySelectorAll('li')[activeIndex];
    if (!activeLi) {
      filter.classList.remove('active');
      filter.querySelectorAll('.particle').forEach(p => filter.removeChild(p));
      return;
    }

    updateEffectPosition(activeLi);

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prevIndex !== null && prevIndex !== activeIndex && !reduceMotion) {
      filter.querySelectorAll('.particle').forEach(p => filter.removeChild(p));
      makeParticles(filter);
    } else {
      filter.classList.add('active');
    }

    const resizeObserver = new ResizeObserver(() => {
      const currentActiveLi = navRef.current?.querySelectorAll('li')[activeIndex];
      if (currentActiveLi) {
        updateEffectPosition(currentActiveLi);
      }
    });

    resizeObserver.observe(containerRef.current);
    return () => resizeObserver.disconnect();
  }, [activeIndex]);

  return (
    <div className="gooey-nav-container" ref={containerRef}>
      <svg className="gooey-nav-svg" aria-hidden="true" focusable="false">
        <defs>
          <filter id="gooey-nav-goo" x="-100%" y="-400%" width="300%" height="900%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -9" result="goo" />
            <feComposite in="SourceGraphic" in2="goo" operator="atop" />
          </filter>
        </defs>
      </svg>
      <nav>
        <ul ref={navRef}>
          {items.map((item, index) => (
            <li key={item.to} className={activeIndex === index ? 'active' : ''}>
              <Link to={item.to} aria-current={activeIndex === index ? 'page' : undefined}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <span className="effect filter" ref={filterRef} />
    </div>
  );
};

export default GooeyNav;
