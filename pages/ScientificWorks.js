import Link from 'next/link'
import React from 'react'

export default function ScientificWorks() {
  const elements = [
    {id: 1, title: 'Title 1', description: 'Localization, internalization and globalization', image: 'https://via.placeholder.com/250'},
    {id: 2, title: 'Title 2', description: 'Language and Culture in Translation: Competitors or Collaborators?', image: 'https://via.placeholder.com/250'},
    {id: 3, title: 'Title 3', description: 'Description 3', image: 'https://via.placeholder.com/250'},
    {id: 4, title: 'Title 4', description: 'Description 4', image: 'https://via.placeholder.com/250'},
    {id: 5, title: 'Title 5', description: 'Description 5', image: 'https://via.placeholder.com/250'},
    {id: 6, title: 'Title 6', description: 'Description 6', image: 'https://via.placeholder.com/250'},
    {id: 7, title: 'Title 7', description: 'Description 7', image: 'https://via.placeholder.com/250'},
    {id: 8, title: 'Title 8', description: 'Description 8', image: 'https://via.placeholder.com/250'},
    {id: 9, title: 'Title 9', description: 'Description 9', image: 'https://via.placeholder.com/250'},
    {id: 10, title: 'Title 10', description: 'Description 10', image: 'https://via.placeholder.com/250'},
    {id: 11, title: 'Title 11', description: 'Description 11', image: 'https://via.placeholder.com/250'},
    {id: 12, title: 'Title 12', description: 'Description 12', image: 'https://via.placeholder.com/250'},
  ]
  return (
    <div className='m-32 ml-54'>
      <div className='grid grid-cols-4 max-lg:grid-cols-1'>
        {elements.map(element => (
          <div key={element.id} className='m-4'>
            <Link href={`/scientific-works/${element.id}`} passHref>
              <img src={element.image} alt={element.title} />
              <h3 className='text-2xl'>{element.title}</h3>
              <p className='font-bold'>{element.description}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}
