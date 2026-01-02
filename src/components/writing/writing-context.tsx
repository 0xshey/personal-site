"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface WritingContextType {
	activeId: string;
	setActiveId: (id: string) => void;
	isDimmed: boolean;
	setIsDimmed: (val: boolean) => void;
}

const WritingContext = createContext<WritingContextType | undefined>(undefined);

export function WritingProvider({ children }: { children: ReactNode }) {
	const [activeId, setActiveId] = useState<string>("");
	const [isDimmed, setIsDimmed] = useState<boolean>(false);

	return (
		<WritingContext.Provider
			value={{ activeId, setActiveId, isDimmed, setIsDimmed }}
		>
			{children}
		</WritingContext.Provider>
	);
}

export function useWriting() {
	const context = useContext(WritingContext);
	if (context === undefined) {
		throw new Error("useWriting must be used within a WritingProvider");
	}
	return context;
}
