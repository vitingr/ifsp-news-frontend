import type { Article } from '@/types/models/article'
import type { Category } from '@/types/models/category'

export interface EditArticleFormProps {
  article: Article
  availableCategories: Category[]
}
