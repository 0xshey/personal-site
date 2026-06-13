"use client";

import type * as THREE from "three";
import { useEffect, useRef } from "react";

export type HeroFont =
	| "helvetiker_bold"
	| "helvetiker_regular"
	| "optimer_bold"
	| "gentilis_bold"
	| "droid_sans_bold"
	| "droid_serif_bold";

export type AsciiPalette =
	| "default"
	| "dense"
	| "blocks"
	| "minimal"
	| "symbols"
	| "dots";

export const PALETTES: Record<AsciiPalette, string> = {
	default: " .:-=+*#%@",
	dense: " .,:;i1tfLCG08@",
	blocks: " ░▒▓█",
	minimal: " .·:",
	symbols: " +×▪■",
	dots: " .·:⁝⁞",
};

const FONT_PATHS: Record<HeroFont, string> = {
	helvetiker_bold: "/fonts/helvetiker_bold.typeface.json",
	helvetiker_regular: "/fonts/helvetiker_regular.typeface.json",
	optimer_bold: "/fonts/optimer_bold.typeface.json",
	gentilis_bold: "/fonts/gentilis_bold.typeface.json",
	droid_sans_bold: "/fonts/droid_sans_bold.typeface.json",
	droid_serif_bold: "/fonts/droid_serif_bold.typeface.json",
};

const LETTERS = ["S", "H", "E", "Y"];
const LETTER_SPACING = 0.2;
const SPRING_DELAY_MS = 3_000;
const SPRING_EASE = 0.04;
const DRAG_SENSITIVITY = 0.018;

// Auto-rotation: interval (seconds) between 180° flips for each letter
const AUTO_ROTATE_INTERVALS_S = [10, 5, 15, 20];
const FLIP_DURATION_MS = 700; // how long one flip takes

interface HeroProps {
	font?: HeroFont;
	palette?: AsciiPalette;
	height?: number;
	ascii?: boolean;
}

export default function Hero({
	font = "helvetiker_bold",
	palette = "default",
	height = 320,
	ascii = true,
}: HeroProps) {
	const containerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const container = containerRef.current;
		if (!container) return;

		let mounted = true;
		let cleanup: (() => void) | undefined;

		(async () => {
			const [THREE, { FontLoader }, { TextGeometry }, { AsciiEffect }] =
				await Promise.all([
					import("three"),
					import("three/examples/jsm/loaders/FontLoader.js"),
					import("three/examples/jsm/geometries/TextGeometry.js"),
					import("three/examples/jsm/effects/AsciiEffect.js"),
				]);

			if (!mounted) return;

			const w = container.clientWidth;
			const h = container.clientHeight;

			const scene = new THREE.Scene();
			const FOV = 40;
			const camera = new THREE.PerspectiveCamera(FOV, w / h, 0.1, 100);
			camera.position.z = 7.5;

			// Tracks the full 3D width of SHEY once the font has loaded
			let totalWidth3D = 0;

			// Push the camera back so the text fits with px-4 (16px) clear on each side.
			// Called on font load and every resize. On wide screens the floor of 4.5 applies.
			const PADDING_PX = 40;
			const fitCamera = () => {
				const cw = container.clientWidth;
				const ch = container.clientHeight;
				camera.aspect = cw / ch;
				if (totalWidth3D > 0) {
					const tanHalf = Math.tan(THREE.MathUtils.degToRad(FOV / 2));
					// Text fills (cw - 2×16px) of the viewport width
					const usable = Math.max(cw - 2 * PADDING_PX, 1);
					const minZ =
						(totalWidth3D * cw) /
						(usable * 2 * tanHalf * camera.aspect);
					camera.position.z = Math.max(minZ, 4.5);
				}
				camera.updateProjectionMatrix();
			};

			// ascii=true  → AsciiEffect post-process; opaque black bg for correct sampling
			// ascii=false → raw WebGL canvas; transparent bg so page shows through
			const renderer = new THREE.WebGLRenderer({
				antialias: true,
				alpha: !ascii,
			});
			renderer.setClearColor(0x000000, ascii ? 1 : 0);
			renderer.setSize(w, h);

			scene.add(new THREE.AmbientLight(0xffffff, 0.15));
			const key = new THREE.DirectionalLight(0xffffff, 1.4);
			key.position.set(3, 4, 5);
			scene.add(key);

			// Unified handles so the rest of the code doesn't branch
			let activeEl: HTMLElement;
			let renderFrame: () => void;
			let resizeSurface: (nw: number, nh: number) => void;

			if (ascii) {
				const effect = new AsciiEffect(renderer, PALETTES[palette], {
					invert: true,
					resolution: 0.15,
				});
				effect.setSize(w, h);
				activeEl = effect.domElement;
				renderFrame = () => effect.render(scene, camera);
				resizeSurface = (nw, nh) => effect.setSize(nw, nh);
			} else {
				const canvas = renderer.domElement;
				canvas.style.width = "100%";
				canvas.style.height = "100%";
				activeEl = canvas;
				renderFrame = () => renderer.render(scene, camera);
				resizeSurface = () => {};
			}

			const el = activeEl;
			el.style.position = "absolute";
			el.style.inset = "0";
			el.style.overflow = "hidden";
			// Events fall through the overlay to the container div
			el.style.pointerEvents = "none";
			container.appendChild(el);

			// === Ripple gradient color effect (ascii mode only) ===
			// Alternates lime (right→left) and yellow (left→right) every 7s.
			// Uses background-clip:text so the animated gradient tints the ASCII chars.
			const RIPPLE_INTERVAL_MS = 7_000;
			const RIPPLE_DURATION_MS = 1_800; // width of the colour band sweeping across
			const styleId = `hero-ripple-${Math.random().toString(36).slice(2)}`;
			let ripplePhase: "lime" | "yellow" | "none" = "none";
			let rippleEl: HTMLElement | null = null;

			if (ascii) {
				const styleTag = document.createElement("style");
				styleTag.id = styleId;
				// Direction maths for background-size: 200%:
				//   bg_offset = -(position%) × element_width
				//   lime band sits at 35-65% of the 200%-wide bg
				//   → in element coords: bg_offset + 0.7W … bg_offset + 1.3W
				// position -100% → offset +W → band at 1.7W–2.3W (off right) ← start lime
				// position  200% → offset -2W → band at -1.3W–-0.7W (off left) ← end lime
				// Reverse for yellow (left→right).
				styleTag.textContent = `
@keyframes ripple-lime {
  from { background-position: -100% 0; }
  to   { background-position:  200% 0; }
}
@keyframes ripple-yellow {
  from { background-position: 200% 0; }
  to   { background-position: -100% 0; }
}
#${styleId}-target.ripple-lime,
#${styleId}-target.ripple-yellow {
  background-size: 200% 100%;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
}
#${styleId}-target.ripple-lime {
  background-image: linear-gradient(90deg,
    #0a0a0a 0%, #0a0a0a 28%,
    #84cc16 38%, #84cc16 62%,
    #0a0a0a 72%, #0a0a0a 100%
  );
  animation: ripple-lime ${RIPPLE_DURATION_MS}ms linear forwards;
}
#${styleId}-target.ripple-yellow {
  background-image: linear-gradient(90deg,
    #0a0a0a 0%, #0a0a0a 28%,
    #facc15 38%, #facc15 62%,
    #0a0a0a 72%, #0a0a0a 100%
  );
  animation: ripple-yellow ${RIPPLE_DURATION_MS}ms linear forwards;
}
				`.trim();
				document.head.appendChild(styleTag);

				// Target the outer div (AsciiEffect domElement), not the <table> —
				// background-clip:text on a <table> is not rendered by Chromium.
				el.id = `${styleId}-target`;
				rippleEl = el;
			}

			let nextRippleAt = Date.now() + RIPPLE_INTERVAL_MS;
			let rippleTimeoutId: ReturnType<typeof setTimeout> | null = null;

			const triggerRipple = () => {
				if (!rippleEl) return;
				// Clear any pending class-removal from the previous ripple before
				// starting the next one — a delayed timeout firing mid-animation is
				// what causes the ripple to be cut off.
				if (rippleTimeoutId !== null) {
					clearTimeout(rippleTimeoutId);
					rippleTimeoutId = null;
				}
				ripplePhase = ripplePhase === "lime" ? "yellow" : "lime";
				rippleEl.classList.remove("ripple-lime", "ripple-yellow");
				// Force reflow so removing+adding the same class restarts the animation
				void (rippleEl as HTMLElement).offsetWidth;
				rippleEl.classList.add(`ripple-${ripplePhase}`);
				nextRippleAt = Date.now() + RIPPLE_INTERVAL_MS;

				// Remove the class once the sweep is done — inherited color restores automatically
				rippleTimeoutId = setTimeout(() => {
					rippleEl?.classList.remove("ripple-lime", "ripple-yellow");
					rippleTimeoutId = null;
				}, RIPPLE_DURATION_MS + 50);
			};

			// === Per-letter state ===
			const letterMeshes: THREE.Mesh[] = [];
			const letterLastInteraction: number[] = LETTERS.map(() => 0);

			// Auto-rotation state per letter
			const autoStates = LETTERS.map((_, i) => ({
				nextFlipAt: Date.now() + AUTO_ROTATE_INTERVALS_S[i] * 1000,
				isFlipping: false,
				flipStartTime: 0,
				flipStartAngle: 0,
				flipTargetAngle: 0,
			}));

			// === Drag state ===
			let isDragging = false;
			let activeIndex: number | null = null;
			let lastClientX = 0;

			const raycaster = new THREE.Raycaster();

			// === Font load + mesh creation ===
			const loader = new FontLoader();
			loader.load(FONT_PATHS[font], (loadedFont) => {
				if (!mounted) return;

				const textOpts = {
					font: loadedFont as never,
					size: 2.0,
					depth: 0.6,
					curveSegments: 4,
					bevelEnabled: true,
					bevelThickness: 0.05,
					bevelSize: 0.025,
					bevelSegments: 2,
				};

				// First pass: build geometries and measure widths
				const geos = LETTERS.map((letter) => {
					const g = new TextGeometry(letter, textOpts);
					g.computeBoundingBox();
					return g;
				});

				// Record each letter's geometric center in layout space (before centering geos).
				// cursor advances by visual width so letters sit flush; the center x is the
				// midpoint of the bbox, which becomes the rotation pivot once we call geo.center().
				let cursor = 0;
				const letterCenterXs: number[] = [];
				for (const geo of geos) {
					const { min, max } = geo.boundingBox!;
					letterCenterXs.push(cursor + (min.x + max.x) / 2);
					cursor += max.x - min.x + LETTER_SPACING;
				}
				const totalWidth = cursor - LETTER_SPACING;
				const halfWidth = totalWidth / 2;

				// Store measured word width and refit the camera so the text fills the viewport
				// at the current screen size (important on narrow/mobile screens).
				totalWidth3D = totalWidth;
				fitCamera();

				// Shift each geometry so its bounding-box center is at the local origin.
				// After this, mesh.rotation rotates around the letter's own center, not its edge.
				geos.forEach((g) => g.center());

				// Create meshes — position places the (now-centered) origin at the correct world x.
				// geo.center() also handled y, so mesh.position.y stays 0.
				geos.forEach((geo, i) => {
					const mesh = new THREE.Mesh(
						geo,
						new THREE.MeshPhongMaterial({
							color: 0xffffff,
							shininess: 60,
						}),
					);
					mesh.position.x = letterCenterXs[i] - halfWidth;
					letterMeshes.push(mesh);
					scene.add(mesh);
				});
			});

			// === Pointer helpers ===
			const toNDC = (clientX: number, clientY: number): THREE.Vector2 => {
				const rect = container.getBoundingClientRect();
				return new THREE.Vector2(
					((clientX - rect.left) / rect.width) * 2 - 1,
					-((clientY - rect.top) / rect.height) * 2 + 1,
				);
			};

			const hitLetter = (clientX: number, clientY: number): number => {
				if (letterMeshes.length === 0) return -1;
				raycaster.setFromCamera(toNDC(clientX, clientY), camera);
				const hits = raycaster.intersectObjects(letterMeshes);
				return hits.length > 0
					? letterMeshes.indexOf(hits[0].object as THREE.Mesh)
					: -1;
			};

			// === Mouse/touch handlers ===
			const onMouseDown = (e: MouseEvent) => {
				const idx = hitLetter(e.clientX, e.clientY);
				if (idx === -1) return;
				activeIndex = idx;
				isDragging = true;
				lastClientX = e.clientX;
				container.style.cursor = "grabbing";
				// Cancel any in-flight auto-flip so the drag takes over cleanly
				autoStates[idx].isFlipping = false;
			};

			const onWindowMouseMove = (e: MouseEvent) => {
				if (!isDragging || activeIndex === null) return;
				const delta = e.clientX - lastClientX;
				letterMeshes[activeIndex].rotation.y +=
					delta * DRAG_SENSITIVITY;
				letterLastInteraction[activeIndex] = Date.now();
				lastClientX = e.clientX;
			};

			// Hover: show grab cursor only over letters
			const onContainerMouseMove = (e: MouseEvent) => {
				if (isDragging) return;
				const idx = hitLetter(e.clientX, e.clientY);
				container.style.cursor = idx !== -1 ? "grab" : "default";
			};

			const onMouseUp = () => {
				if (isDragging && activeIndex !== null) {
					letterLastInteraction[activeIndex] = Date.now();
				}
				isDragging = false;
				activeIndex = null;
				container.style.cursor = "default";
			};

			const onTouchStart = (e: TouchEvent) => {
				e.preventDefault();
				const t = e.touches[0];
				const idx = hitLetter(t.clientX, t.clientY);
				if (idx === -1) return;
				activeIndex = idx;
				isDragging = true;
				lastClientX = t.clientX;
				autoStates[idx].isFlipping = false;
			};

			const onWindowTouchMove = (e: TouchEvent) => {
				if (!isDragging || activeIndex === null) return;
				e.preventDefault();
				const delta = e.touches[0].clientX - lastClientX;
				letterMeshes[activeIndex].rotation.y +=
					delta * DRAG_SENSITIVITY;
				letterLastInteraction[activeIndex] = Date.now();
				lastClientX = e.touches[0].clientX;
			};

			const onTouchEnd = () => {
				if (isDragging && activeIndex !== null) {
					letterLastInteraction[activeIndex] = Date.now();
				}
				isDragging = false;
				activeIndex = null;
			};

			container.addEventListener("mousedown", onMouseDown);
			container.addEventListener("mousemove", onContainerMouseMove);
			window.addEventListener("mousemove", onWindowMouseMove);
			window.addEventListener("mouseup", onMouseUp);
			container.addEventListener("touchstart", onTouchStart, {
				passive: false,
			});
			window.addEventListener("touchmove", onWindowTouchMove, {
				passive: false,
			});
			window.addEventListener("touchend", onTouchEnd);

			// === Animation loop ===
			let rafId: number;
			const animate = () => {
				rafId = requestAnimationFrame(animate);

				const now = Date.now();

				// Ripple colour trigger
				if (ascii && now >= nextRippleAt) triggerRipple();
				letterMeshes.forEach((mesh, i) => {
					const isActivelyDragged = isDragging && activeIndex === i;
					const state = autoStates[i];

					// Auto-flip: schedule and animate a 180° rotation
					if (!isActivelyDragged) {
						if (!state.isFlipping && now >= state.nextFlipAt) {
							state.isFlipping = true;
							state.flipStartTime = now;
							state.flipStartAngle = mesh.rotation.y;
							state.flipTargetAngle = mesh.rotation.y + Math.PI;
							// Schedule the next flip after this one finishes + the interval
							state.nextFlipAt =
								now + FLIP_DURATION_MS + AUTO_ROTATE_INTERVALS_S[i] * 1000;
						}

						if (state.isFlipping) {
							const t = Math.min(
								(now - state.flipStartTime) / FLIP_DURATION_MS,
								1,
							);
							// Ease-in-out cubic
							const eased =
								t < 0.5
									? 4 * t * t * t
									: 1 - Math.pow(-2 * t + 2, 3) / 2;
							mesh.rotation.y =
								state.flipStartAngle +
								(state.flipTargetAngle - state.flipStartAngle) * eased;
							if (t >= 1) {
								mesh.rotation.y = state.flipTargetAngle;
								state.isFlipping = false;
							}
							return; // skip spring-back while flipping
						}
					}

					// Spring-back to 0 after manual drag idle for SPRING_DELAY_MS
					if (!isActivelyDragged) {
						const idle = now - letterLastInteraction[i];
						if (
							letterLastInteraction[i] > 0 &&
							idle > SPRING_DELAY_MS &&
							Math.abs(mesh.rotation.y) > 0.001
						) {
							mesh.rotation.y *= 1 - SPRING_EASE;
						}
					}
				});

				renderFrame();
			};
			animate();

			// === Resize ===
			const onResize = () => {
				const nw = container.clientWidth;
				const nh = container.clientHeight;
				fitCamera();
				renderer.setSize(nw, nh);
				resizeSurface(nw, nh);
			};
			window.addEventListener("resize", onResize);

			// === Cleanup ===
			cleanup = () => {
				cancelAnimationFrame(rafId);
				if (rippleTimeoutId !== null) clearTimeout(rippleTimeoutId);
				document.getElementById(styleId)?.remove();
				window.removeEventListener("resize", onResize);
				window.removeEventListener("mousemove", onWindowMouseMove);
				window.removeEventListener("mouseup", onMouseUp);
				window.removeEventListener("touchmove", onWindowTouchMove);
				window.removeEventListener("touchend", onTouchEnd);
				container.removeEventListener("mousedown", onMouseDown);
				container.removeEventListener(
					"mousemove",
					onContainerMouseMove,
				);
				container.removeEventListener("touchstart", onTouchStart);
				if (container.contains(el)) container.removeChild(el);
				renderer.dispose();
				letterMeshes.forEach((mesh) => {
					mesh.geometry.dispose();
					const mats: THREE.Material[] = Array.isArray(mesh.material)
						? mesh.material
						: [mesh.material];
					mats.forEach((m) => m.dispose());
				});
			};
		})();

		return () => {
			mounted = false;
			cleanup?.();
		};
	}, [font, palette, ascii]);

	return (
		<div
			ref={containerRef}
			className="relative"
			style={{
				height,
				// Break out of max-w-lg to full viewport width
				width: "100vw",
				left: "50%",
				transform: "translateX(-50%)",
			}}
		/>
	);
}
