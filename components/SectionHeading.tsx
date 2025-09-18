import React from 'react';

type SectionHeadingProps = {
  title: string;
  align?: 'left' | 'center' | 'right';
  widthClass?: string; // Tailwind class to control max width
  className?: string; // Additional classes for outer wrapper
};

const textAlignMap = {
  left: 'text-left',
  center: 'text-center',
  right: 'text-right',
} as const;

const justifyMap = {
  left: 'justify-start',
  center: 'justify-center',
  right: 'justify-end',
} as const;

const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  align = 'center',
  widthClass = 'max-w-[320px]',
  className = '',
}) => {
  const textAlignCls = textAlignMap[align];
  const justifyCls = justifyMap[align];

  return (
    <div className={`${widthClass} mx-auto ${className}`}>
      <div className={`${textAlignCls}`}>
        <h2 className="text-3xl md:text-4xl text-black font-bold mb-1 uppercase tracking-wide">
          {title}
        </h2>
      </div>
      <div className={`mt-2 flex items-center gap-1 ${justifyCls}`}>
        <div className="w-32 h-[3px] bg-sky-600 rounded-full" />
        <div className="w-12 h-[3px] bg-sky-600 rounded-full" />
        <div className="w-4 h-[3px] bg-sky-600 rounded-full" />
        <div className="w-4 h-[3px] bg-sky-600 rounded-full" />
      </div>
    </div>
  );
};

export default SectionHeading;
