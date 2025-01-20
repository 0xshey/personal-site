import React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";

interface DialogProps {
	trigger: React.ReactNode;
	content: React.ReactNode;
	title: string;
	type?: "text" | "image";
}

export function Dialog({
	trigger,
	content,
	title,
	type = "text",
}: DialogProps) {
	return (
		<DialogPrimitive.Root>
			<DialogPrimitive.Trigger asChild>{trigger}</DialogPrimitive.Trigger>
			<DialogPrimitive.Portal>
				<DialogPrimitive.Overlay className="fixed inset-0 bg-black/80" />
				<DialogPrimitive.Content
					className={`fixed top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] w-[90vw]  ${
						type === "image" ? "" : "p-4"
					}`}
				>
					<div className="flex w-full items-center justify-between px-4 pb-2">
						<DialogPrimitive.Title asChild>
							<p className="text-lg text-white">{title}</p>
						</DialogPrimitive.Title>
						<DialogPrimitive.Close asChild>
							<button
								className="rounded h-8 w-8 flex items-center justify-center place-self-end"
								aria-label="Close"
							>
								<Cross2Icon color="white" />
							</button>
						</DialogPrimitive.Close>
					</div>
					<div
						className={`bg-background rounded-lg shadow-lg overflow-clip ${
							type === "image" ? "" : "p-4"
						}`}
					>
						{content}
					</div>
				</DialogPrimitive.Content>
			</DialogPrimitive.Portal>
		</DialogPrimitive.Root>
	);
}

export default Dialog;
