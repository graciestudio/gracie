import React from 'react'

const imagePreview = ({ value }) => {
  const { image, caption } = value
  
  if (!image?.asset?._ref) {
    return (
      <header style={{ padding: '1rem' }}>
        <h2 style={{
          fontSize: '16px',
          fontSize: '1rem',
          lineHeight: '1.25',
          padding: '4px 0',
          padding: '0.25rem 0',
          margin: '-2px 0 -1px',
          opacity: .5
        }}>There is no image yet.</h2>
      </header>
    )
  }

  const projectId = process.env.SANITY_STUDIO_API_PROJECT_ID
  const dataset = process.env.SANITY_STUDIO_API_DATASET
  const ref = image?.asset?._ref
  const [_file, id, size, extension] = ref.split('-')
  const getUrlFromId = () => {
    // Example ref: file-207fd9951e759130053d37cf0a558ffe84ddd1c9-mp3
    // We don't need the first part, unless we're using the same function for files and images
    return `https://cdn.sanity.io/images/${projectId}/${dataset}/${id}-${size}.${extension}?w=800`
  }
  const fileUrl = getUrlFromId()
  const fileName = id + '.' + extension

  return (
    <div>
      <header style={{ padding: '1rem', borderBottom: '1px solid rgb(93 113 145 / 25%)' }}>
        <h2 style={{
          fontSize: '16px',
          fontSize: '1rem',
          lineHeight: '1.25',
          padding: '4px 0',
          padding: '0.25rem 0',
          margin: '-2px 0 -1px',
        }}>{fileName}</h2>
      </header>
      <img src={fileUrl} style={{ display: 'block', width: '100%', height: 'auto' }}/>
      {caption && <p style={{ padding: '1rem', margin: 0, fontSize: '.9em' }}>{caption}</p>}
    </div>
  )
}

export default {
  name: 'inlineImage',
  title: 'Image',
  type: 'object',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'caption',
      title: 'Caption',
      description: 'Optional',
      type: 'string'
    }
  ],
  preview: {
    select: {
      image: 'image',
      caption: 'caption'
    },
    component: imagePreview,
  }
}