import clsx from 'clsx';
import React from 'react';

interface ContentSectionProps {
  id: string;
  children: React.ReactNode;
  className?: string;
}

interface ContentTextProps {
  variant?: 'intro' | 'body' | 'closing' | 'muted';
  children: React.ReactNode;
  className?: string;
}

function ContentSectionRoot({ id, children, className }: ContentSectionProps) {
  return (
    <section
      id={id}
      className={clsx(
        'scroll-mt-28 py-12 px-8 lg:px-16',
        'space-y-6',
        className
      )}
    >
      {children}
    </section>
  );
}

function ContentText({
  variant = 'body',
  children,
  className,
}: ContentTextProps) {
  const variantClasses = {
    intro: 'text-lg md:text-xl text-text-primary leading-relaxed',
    body: 'text-base text-text-secondary leading-relaxed',
    closing: 'text-base text-text-muted italic leading-relaxed mt-6',
    muted: 'text-base text-text-muted leading-relaxed',
  };

  return <p className={clsx(variantClasses[variant], className)}>{children}</p>;
}

export const ContentSection = Object.assign(ContentSectionRoot, {
  Text: ContentText,
});

export default ContentSection;
