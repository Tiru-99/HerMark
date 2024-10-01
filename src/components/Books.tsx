"use client";

import { useState } from 'react';

interface Book {
  id: number;
  title: string;
  author: string;
  imageUrl: string;
  description: string;
}

const books: Book[] = [
  {
    id: 1,
    title: "Harry Potter and the Prisoner of Azkaban",
    author: "J.K. Rowling",
    imageUrl: "/harrypotter.jpg",
    description: "The third installment in the Harry Potter series, following Harry's third year at Hogwarts School of Witchcraft and Wizardry."
  },
  {
    id: 2,
    title: "The Fault in Our Stars",
    author: "John Green",
    imageUrl: "/faultinourstars.jpg",
    description: "A novel about two teenage cancer patients who fall in love. It explores themes of love, loss, and the meaning of life."
  },
  {
    id: 3,
    title: "Becoming",
    author: "Michelle Obama",
    imageUrl: "/michelleobama.jpg",
    description: "A memoir by former First Lady Michelle Obama, chronicling her life from childhood through her time in the White House."
  },
  {
    id: 4,
    title: "Harry Potter and the Prisoner of Azkaban",
    author: "J.K. Rowling",
    imageUrl: "/harrypotter.jpg",
    description: "The third installment in the Harry Potter series, following Harry's third year at Hogwarts School of Witchcraft and Wizardry."
  }
];

export default function Component() {
  const [hoveredBook, setHoveredBook] = useState<number | null>(null);

  return (
    <div className="container mx-auto px-4 py-8 ">
      <h1 className="md:text-6xl font-thin text-4xl ml-2 md:mb-8 md:ml-16 mt-24 ">Books by our Authors</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 scale-90">
        {books.map((book) => (
          <div
            key={book.id}
            className="relative aspect-[3/4] overflow-hidden group" // Added 'group' class here
            onMouseEnter={() => setHoveredBook(book.id)}
            onMouseLeave={() => setHoveredBook(null)}
          >
            <img
              src={book.imageUrl}
              alt={book.title}
              className="w-full h-full object-cover transition-transform duration-300 ease-in-out" // Added transition for image
            />
            <div className={`absolute inset-0 bg-blue-600 bg-opacity-90 p-4 flex flex-col justify-center items-center text-white transition-opacity duration-300 ease-in-out ${hoveredBook === book.id ? 'opacity-100' : 'opacity-0'}`}>
              <h2 className="text-xl font-bold mb-2 text-center">{book.title}</h2>
              <p className="text-sm mb-2">by {book.author}</p>
              <p className="text-xs text-center">{book.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
