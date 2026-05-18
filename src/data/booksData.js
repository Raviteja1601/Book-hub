const readStatuses = ['READ', 'CURRENTLY_READING', 'WANT_TO_READ']

const booksData = Array.from({length: 120}, (_, index) => {
  const bookNumber = index + 1
  const status = readStatuses[index % readStatuses.length]
  const rating = (3 + (index % 20) * 0.1).toFixed(1)
  const title = `BookHub Story ${bookNumber}`
  return {
    id: `book-${String(bookNumber).padStart(3, '0')}`,
    title,
    author_name: `Author ${bookNumber}`,
    authorName: `Author ${bookNumber}`,
    cover_pic: `https://picsum.photos/seed/book${bookNumber}/150/220`,
    coverPic: `https://picsum.photos/seed/book${bookNumber}/150/220`,
    rating,
    read_status: status,
    readStatus: status,
    about_author: `Author ${bookNumber} is a celebrated storyteller known for dramatic pacing and memorable characters. In this book, they explore themes of hope, discovery, and the unexpected turns of daily life.`,
    aboutAuthor: `Author ${bookNumber} is a celebrated storyteller known for dramatic pacing and memorable characters. In this book, they explore themes of hope, discovery, and the unexpected turns of daily life.`,
    about_book: `BookHub Story ${bookNumber} takes the reader on an immersive journey through vivid settings and relatable characters. Each chapter builds toward a satisfying conclusion while keeping a lively rhythm and emotional warmth.`,
    aboutBook: `BookHub Story ${bookNumber} takes the reader on an immersive journey through vivid settings and relatable characters. Each chapter builds toward a satisfying conclusion while keeping a lively rhythm and emotional warmth.`,
  }
})

export default booksData
