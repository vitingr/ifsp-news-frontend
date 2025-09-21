export interface ArticleDynamicPage {
  params: Promise<{
    slug: string
  }>
}
