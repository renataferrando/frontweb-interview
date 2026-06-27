import CenteredHero from '@/app/components/CenteredHero'
import {ExtractPageBuilderType} from '@/sanity/lib/types'

type CenteredHeroBlockProps = {
  block: ExtractPageBuilderType<'centeredHero'>
  index: number
  // Needed if you want to createDataAttributes to do non-text overlays in Presentation (Visual Editing)
  pageId: string
  pageType: string
}

export default function CenteredHeroBlock({block}: CenteredHeroBlockProps) {
  const {theme, eyebrow, title, description} = block

  return (
    <CenteredHero theme={theme?.name} eyebrow={eyebrow} title={title} description={description} />
  )
}
