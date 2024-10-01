"use client"

import { useState } from 'react'

const authors = [
  {
    id: 1,
    name: "J.K. Rowling",
    imageUrl: "/harrypotter.jpg",
    bio: "J.K. Rowling is the author of the Harry Potter series, which has sold over 500 million copies worldwide. She has received numerous awards for her work in literature and philanthropy.",
    bookTitle: "Harry Potter and the Prisoner of Azkaban"
  },
  {
    id: 2,
    name: "John Green",
    imageUrl: "/faultinourstars.jpg",
    bio: "John Green is a bestselling author known for his young adult novels. His works often explore themes of coming-of-age and existentialism.",
    bookTitle: "The Fault in Our Stars"
  },
  {
    id: 3,
    name: "Michelle Obama",
    imageUrl: "/michelleobama.jpg",
    bio: "Michelle Obama is a lawyer, author, and former First Lady of the United States. Her memoir 'Becoming' has become one of the best-selling books of all time.",
    bookTitle: "Becoming"
  }
]

export default function Authorcomp() {
  const [selectedAuthor, setSelectedAuthor] = useState(authors[0])

  return (
    <div className="flex flex-col md:flex-row bg-gray-900 text-white h-auto min-h-screen md:mt-24">
      {/* Image Section */}
      <div className="w-full md:w-2/5">
        <img
          src={selectedAuthor.imageUrl}
          alt={`Image of ${selectedAuthor.name}`}
          className="w-full h-[60vh] md:h-screen object-cover"
        />
      </div>

      {/* Author Info Section */}
      <div className="w-full md:w-3/5 p-4 md:p-8 bg-gray-900 flex flex-col">
        <h1 className="text-2xl md:text-4xl font-serif text-yellow-400 mb-2 md:mb-4">
          {selectedAuthor.name}
        </h1>
        <p className="mb-4 md:mb-8 text-sm md:text-base">
          {selectedAuthor.bio}
        </p>
        <h2 className="text-xl md:text-2xl font-serif mb-2 md:mb-4">Top Books</h2>

        {/* Authors Thumbnails */}
        <div className="flex flex-wrap gap-4 mb-4 md:mb-8">
          {authors.map((author) => (
            <div
              key={author.id}
              className="relative w-20 h-30 md:w-24 md:h-36 cursor-pointer transition-transform transform hover:scale-105"
              onClick={() => setSelectedAuthor(author)}
            >
              <img
                src={author.imageUrl}
                alt={`${author.bookTitle} cover`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                <span className="text-white text-xs text-center px-2">{author.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
