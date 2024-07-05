"use client"
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { elements } from '@/constants/translations'
import { Button, Card, CardBody, CardFooter, CardHeader,Pagination } from '@nextui-org/react'
import { Select, Option } from '@/utils/material-tailwind'

export default function ScientificWorks() {
  const [value, setValue] = useState('15')
  const [pages, setPages] = useState()
  const [currentPage, setCurrentPage] = useState(1)
  
  const handleChange = (value) => {
    setValue(value)
    setCurrentPage(1)
  }

  const handlePage = (page) => {
    setCurrentPage(page)
  }

  useEffect(() => {
    const length = elements.length
    const pages = Math.round(length/value)
    setPages(pages)
  },[value])

  const startIdx = (currentPage - 1) * parseInt(value);
  const endIdx = startIdx + parseInt(value);
  const currentElements = elements.slice(startIdx, endIdx);

  return (
    <div className='mx-auto w-5/6 mt-32'>
      <div className='ml-auto w-52'>
        <Select value={value} label='Show per page' onChange={(value) => handleChange(value)}>
          <Option value='15'>15</Option>
          <Option value='30'>30</Option>
          <Option value='50'>50</Option>
        </Select>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2'>
        {currentElements.map((element, index) => {
          if(index >= value) {
            return
          }
          return (
            <Card key={element.id} className='m-4'>
              {/* <Link href={`/scientific-works/${element.id}`} passHref> */}
                <CardHeader>
                  <div className='mx-auto w-auto'>
                    <img src={element.image} alt={element.title} />
                  </div>
                </CardHeader>
                <CardBody>
                  <h3 className='text-2xl'>{element.title}</h3>
                  <p className='font-bold'>{element.description}</p>
                </CardBody>
                <CardFooter className='flex justify-between'>
                  <Button color='default'>Original</Button>
                  <Button color='primary'>Translation</Button>
                </CardFooter>
              {/* </Link> */}
            </Card>
          )
        })}
      </div>
      <Pagination showControls total={pages} initialPage={1} onChange={(page) => handlePage(page)}/>
    </div>
  )
}
