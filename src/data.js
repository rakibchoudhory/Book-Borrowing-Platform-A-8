export const getBooks = async() => {
  const res = await fetch(
    "https://online-book-borrowing-platfrom.vercel.app/data.json",
  );
  const data = await res.json();
  return data.books;
};
