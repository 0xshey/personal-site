import fs from "fs";
import path from "path";
import matter from "gray-matter";

const WRITING_DIR = path.join(process.cwd(), "src/content/writing");

export type ArticleMeta = {
	title: string;
	slug: string;
	date: string;
	description: string;
	category: string;
};

export type Article = ArticleMeta & {
	content: string;
};

export function getArticleSlugs(): string[] {
	if (!fs.existsSync(WRITING_DIR)) return [];
	return fs
		.readdirSync(WRITING_DIR)
		.filter((f) => f.endsWith(".md"))
		.map((f) => f.replace(/\.md$/, ""));
}

export function getArticle(slug: string): Article | null {
	const filePath = path.join(WRITING_DIR, `${slug}.md`);
	if (!fs.existsSync(filePath)) return null;
	const { data, content } = matter(fs.readFileSync(filePath, "utf8"));
	return {
		title: data.title ?? slug,
		slug,
		date: data.date ? String(data.date) : "",
		description: data.excerpt ?? data.description ?? "",
		category: data.category ?? "Writing",
		content,
	};
}

export function getAllArticles(): ArticleMeta[] {
	return getArticleSlugs()
		.map((slug) => getArticle(slug) as ArticleMeta)
		.sort((a, b) => (a.date > b.date ? -1 : 1));
}
