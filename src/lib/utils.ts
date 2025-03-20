import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function smoothScrollTo(element: HTMLElement): void {
	const start: number = window.scrollY;
	const end: number = element.offsetTop;
	const duration: number = 1500; // Duration of the scroll in milliseconds

	// Easing function type
	const easing = (t: number): number => {
		return t < 0.5
			? 16 * Math.pow(t, 5) // ease in
			: 1 - Math.pow(-2 * t + 2, 5) / 2; // ease out
	};

	let startTime: number | undefined;

	function step(timestamp: number): void {
		if (!startTime) startTime = timestamp;
		const progress: number = (timestamp - startTime) / duration;
		const easedProgress: number = easing(progress);

		window.scrollTo(0, start + (end - start) * easedProgress);

		if (progress < 1) {
			requestAnimationFrame(step);
		}
	}

	requestAnimationFrame(step);
}