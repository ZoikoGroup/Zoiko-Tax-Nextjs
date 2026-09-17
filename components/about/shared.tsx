import clsx from "clsx";
import type { LucideIcon } from "lucide-react";

export {
  Container,
  NumberedCard,
  Reveal,
  Section,
  SectionIntro,
  StaggerGroup,
  StaggerItem,
  bgImage,
  buttonClasses,
} from "@/components/home/shared";

/** Description style shared by About section intros. */
export const introDescription = "max-w-180 text-base leading-7 sm:text-lg";

export const panelShadow = "shadow-[0_4px_16px_0_rgba(0,0,0,0.05)]";

type Column = {
  label: string;
  /** Header label color. */
  headClassName?: string;
  /** Body cell text style. */
  cellClassName: string;
};

type DataTableProps = {
  columns: Column[];
  rows: string[][];
  /** Tailwind grid template used from `md` up, e.g. "md:grid-cols-[1fr_1.4fr_1.4fr]". */
  gridClassName: string;
  className?: string;
};

/**
 * Real table semantics on desktop; on small screens each row becomes a stacked
 * card where every cell is prefixed with its column label.
 */
export function DataTable({ columns, rows, gridClassName, className }: DataTableProps) {
  const grid = clsx("grid grid-cols-1 gap-x-8 md:items-center", gridClassName);

  return (
    <div
      role="table"
      className={clsx(
        "overflow-hidden rounded-[20px] bg-white outline outline-1 -outline-offset-1 outline-zinc-200",
        panelShadow,
        className,
      )}
    >
      <div
        role="row"
        className={clsx(grid, "hidden border-b border-zinc-200 bg-table-head px-7 py-4 md:grid")}
      >
        {columns.map((column) => (
          <span
            key={column.label}
            role="columnheader"
            className={clsx(
              "text-xs font-bold uppercase",
              column.headClassName ?? "text-plum-700",
            )}
          >
            {column.label}
          </span>
        ))}
      </div>

      {rows.map((row, r) => (
        <div
          key={row[0]}
          role="row"
          className={clsx(
            grid,
            "gap-y-2 px-5 py-4 sm:px-7 md:min-h-14",
            r < rows.length - 1 && "border-b border-gray-100",
          )}
        >
          {row.map((cell, c) => (
            <div key={columns[c].label} role="cell">
              <span className="mb-0.5 block text-[10px] font-bold uppercase text-plum-700 md:hidden">
                {columns[c].label}
              </span>
              <span className={columns[c].cellClassName}>{cell}</span>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

type IconCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
  iconBoxClassName?: string;
  iconClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
};

export function IconCard({
  icon: Icon,
  title,
  description,
  className,
  iconBoxClassName = "size-10 rounded-[10px] bg-violet-50",
  iconClassName = "size-5 text-plum-700",
  titleClassName = "mt-3.5 text-base font-bold text-ink",
  descriptionClassName = "mt-2 text-xs leading-5 text-ink-muted",
}: IconCardProps) {
  return (
    <div className={clsx("flex h-full flex-col", className)}>
      <span className={clsx("flex shrink-0 items-center justify-center", iconBoxClassName)}>
        <Icon aria-hidden className={iconClassName} strokeWidth={2} />
      </span>
      <h3 className={titleClassName}>{title}</h3>
      <p className={descriptionClassName}>{description}</p>
    </div>
  );
}
