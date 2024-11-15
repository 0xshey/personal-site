import { cn } from "@/lib/utils";
import { articleTypes } from "@/api/articles";
import styles from "./article-content.module.css";

export default function ArticleContent({ article }: { article: articleTypes }) {
	return (
		<article
			id="article"
			dangerouslySetInnerHTML={{ __html: article.content.html }}
			className={cn(styles.article, "px-4")}
		/>
	);
}
