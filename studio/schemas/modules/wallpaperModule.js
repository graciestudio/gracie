export default {
  title: 'Wallpaper Content',
  name: 'wallpaperModule',
  type: 'object',
  fieldsets: [
    {
      name: 'modules',
      title: 'Wallpaper Modules',
      options: {
        collapsible: true,
        collapsed: true
      }
    },
    {
      name: 'main',
      title: 'Wallpaper Main Content',
      options: {
        collapsible: true,
        collapsed: true
      }
    }
  ],
  fields: [
    {
      name: 'id',
      title: 'Id',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'For Collection URL',
      options: {
        source: 'content.main.title',
        slugify: (input) =>
          '/' + input
            .toLowerCase()
            //Remove spaces
            .replace(/\s+/g, "-")
            //Remove special characters
            .replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, ""),
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true
      },
      fieldset: 'main',
      validation: Rule => Rule.required()
    },
    {
      name: 'atfImage',
      title: 'Above the Fold Image',
      type: 'image',
      options: {
        hotspot: true
      },
      fieldset: 'main'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'blockContent',
      fieldset: 'main'
    },
    {
      name: 'width',
      title: 'Width',
      type: 'number'
    },
    {
      name: 'height',
      title: 'Height',
      type: 'number'
    },
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [
        { type: 'inlineImage'}
      ]
    },
    {
      name: 'relatedWallpapers',
      title: 'Related Wallpapers',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'wallpaper'}]
        }
      ]
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'tags',
      options: {}
    },
    {
      name: 'panels',
      title: 'Panels',
      type: 'array',
      of: [
        {type: 'panel'}
      ]
    },
    {
      name: 'modules',
      title: 'Modules',
      type: 'moduleContent',
      fieldset: 'modules'
    }
  ]
}


// Panels
// Related Products
// Related Wallpapers

