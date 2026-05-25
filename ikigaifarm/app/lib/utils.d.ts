import type { ClassValue } from "clsx";

export function cn(...inputs: ClassValue[]): string;
export function formatCurrency(amount: number, currency?: string, options?: Intl.NumberFormatOptions): string;
export function generateUniqueId(prefix?: string): string;
export function truncateText(text: string, maxLength: number): string;
export function formatDate(date: Date | number | string, options?: Intl.DateTimeFormatOptions): string;
export function debounce<T extends (...args: unknown[]) => void>(func: T, wait: number): (...args: Parameters<T>) => void;
export function throttle<T extends (...args: unknown[]) => void>(func: T, limit: number): (...args: Parameters<T>) => void;
