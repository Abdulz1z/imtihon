/** @format */

function renderBooks(array, parent, template) {
   // parent.textContent = null;

   console.log(array);
   array.forEach(book => {
      const newBook = template.content.cloneNode(true);
      const elImg = findElement("#bookImg", newBook);
      const elTitle = findElement("#bookTitle", newBook);
      // const elAuthors = findElement('#bookAuthors', newBook)
      const elBookDay = findElement("#bookDay", newBook);
      const bookmarkButton = findElement(
         "#bookmarkButton",
         newBook
      );

      elImg.src = book.volumeInfo.imageLinks.thumbnail;
      elTitle.textContent = book.volumeInfo.title;
      console.log(elTitle);
      // elAuthors.textContent = book.volumeInfo.;
      elBookDay.textContent = book.volumeInfo.publishedDate;

      bookmarkButton.addEventListener("click", () => {
         localStorage.setItem("id", book.id);
      });

      parent.appendChild(newBook);
   });
}

function renderBookmark(
   bookArray,
   bookParent,
   bookTemplate
) {
   bookArray.forEach(bookmarked => {
      console.log(bookmarked);
      const newBook = bookTemplate.content.cloneNode(true);
      const elTitle = findElement("#bookName", newBook);
      // const elAuthors = findElement('#bookAuthors', newBook)

      elTitle.textContent = bookmarked.volumeInfo.title;
      console.log(elTitle);
      // elAuthors.textContent = book.volumeInfo.;

      bookParent.appendChild(newBook);
   });
}
