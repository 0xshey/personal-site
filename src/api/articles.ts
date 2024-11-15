export interface articleTypes {
	id: string
	title: string
	seo: {
		title: string
		description: string
	}
	features: {
		tableOfContents: {
			items: {
			title: string
			slug: string
			}[]
		}
	}
	publishedAt: string
	coverImage: {
	  	url: string
	}
	slug: string
	content: {
	  	html: string
	}
  }

export default async function getArticles (slug?: string) {
	const res = await fetch('https://gql.hashnode.com', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},

		body: JSON.stringify({
			query: `
				query SinglePostByPublication {
					publication(host: "0xshey.hashnode.dev") {
						id
						posts(first: 10) {
							totalDocuments
							edges {
								node {
								id
								title
								seo {
									title
									description
								}
								features {
									tableOfContents {
									items {
										title
										slug
									}
									}
								}
								publishedAt
								coverImage {
									url
								}
								slug
								content {
									html
								}
								}
							}
						}
					}
				}
			`,
		}),
	})

	const { data } = await res.json()
	const articleList = data.publication.posts.edges
	console.log(`${articleList.length} articles fetched, slug: ${slug}`)

	if (slug) {
		const article = articleList.find(
			(result: { node: { slug: string } }) => result.node.slug === slug
		)?.node || null

		return article
      ? {
			id: article.id,
			title: article.title,
			seo: {
				title: article.seo.title,
				description: article.seo.description,
			},
			features: {
				tableOfContents: {
				items: article.features.tableOfContents.items,
				},
			},
			publishedAt: article.publishedAt,
			coverImage: {
				url: article.coverImage.url,
			},
			slug: article.slug,
			content: {
				html: article.content.html,
			},
        }
      : null
  } else {
    const posts = articleList.map(({ node }: { node: articleTypes }) => ({
		id: node.id,
		title: node.title,
		seo: {
			title: node.seo.title,
			description: node.seo.description,
		},
		publishedAt: node.publishedAt,
		coverImage: {
			url: node.coverImage.url,
		},
		slug: node.slug,
		}))

		return posts
	}
}
