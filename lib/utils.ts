import { twMerge } from "tailwind-merge";
import { type ClassValue, clsx } from "clsx";
import { ChangeEvent } from "react";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}
