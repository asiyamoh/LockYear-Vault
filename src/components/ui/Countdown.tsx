import clsx from 'clsx';
import React from 'react';

interface CountdownProps {
  days?: number;
  hours?: number;
  minutes?: number;
  seconds?: number;
  className?: string;
}

export function Countdown({
  days = 0,
  hours = 0,
  minutes = 0,
  seconds = 0,
  className,
}: CountdownProps) {
  return (
    <div className={clsx('flex items-center justify-center gap-2', className)}>
      <CountdownSegment value={days} label="Days" />
      <CountdownSeparator />
      <CountdownSegment value={hours} label="Hrs" />
      <CountdownSeparator />
      <CountdownSegment value={minutes} label="Min" />
      <CountdownSeparator />
      <CountdownSegment value={seconds} label="Sec" />
    </div>
  );
}

interface CountdownSegmentProps {
  value: number;
  label: string;
}

function CountdownSegment({ value, label }: CountdownSegmentProps) {
  return (
    <div className="flex flex-col items-center">
      <div className="text-3xl font-bold text-text-primary tabular-nums">
        {String(value).padStart(2, '0')}
      </div>
      <div className="text-xs text-text-muted uppercase tracking-wider">
        {label}
      </div>
    </div>
  );
}

function CountdownSeparator() {
  return <div className="text-2xl text-text-muted font-bold">:</div>;
}

export default Countdown;
