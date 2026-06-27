import {defineField, defineType} from 'sanity'
import {BlockElementIcon} from '@sanity/icons'

/**
 * Centered Hero schema object.  Maps to the frontend `CenteredHero` component.
 */

export const centeredHero = defineType({
  name: 'centeredHero',
  title: 'Centered Hero',
  type: 'object',
  icon: BlockElementIcon,
  fields: [
    defineField({
      name: 'eyebrow',
      title: 'Eyebrow',
      type: 'string',
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'theme',
      title: 'Theme',
      type: 'theme',
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({title}) {
      return {
        title: title || 'Untitled Centered Hero',
        subtitle: 'Centered Hero',
      }
    },
  },
})
