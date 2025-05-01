// TODO added all custom methods (which have been announced global.d.ts file) in the Date prototype
export {};

declare global {
  interface Date {
    add(value: number, unit: "days" | "months" | "years"): Date;
    subtract(value: number, unit: "days" | "months" | "years"): Date;
    sum(otherDate: Date): Date;
    difference(otherDate: Date): number;
    eachDayOfInterval(endDate: Date): Array<Date>;
    log(): undefined;
  }
}

Date.prototype.add = function (
  value: number,
  unit: "days" | "months" | "years",
): Date {
  const date = new Date(this);
  if (unit === "days") {
    date.setDate(date.getDate() + value);
  }
  if (unit === "months") {
    date.setMonth(date.getMonth() + value);
  }
  if (unit === "years") {
    date.setFullYear(date.getFullYear() + value);
  }
  return date;
};

Date.prototype.subtract = function (
  value: number,
  unit: "days" | "months" | "years",
): Date {
  return this.add(-value, unit);
};

Date.prototype.sum = function (otherDate: Date): Date {
  const result = new Date(this);
  result.setTime(this.getTime() + otherDate.getTime());
  return result;
};

Date.prototype.difference = function (otherDate: Date): number {
  const diffMs = Math.abs(this.getTime() - otherDate.getTime());
  return Math.floor(diffMs / (1000 * 60 * 60 * 24));
};

Date.prototype.eachDayOfInterval = function (endDate: Date): Array<Date> {
  const dates: Date[] = [];
  const current = new Date(this);
  const target = new Date(endDate);

  while (current <= target) {
    dates.push(new Date(current));
    current.setDate(current.getDate() + 1);
  }

  return dates;
};

Date.prototype.log = function (): undefined {
  console.log(this.toISOString());
  return;
};
