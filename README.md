# Laautor Books Website

This project is a fully functional, responsive web application that fetches and displays books using the [Gutenberg Books API](https://gutendex.com/books). Users can browse books, filter by title and genre, add books to a wishlist, and paginate through the list of books.

[Live Demo](https://all-in-one-authentication.web.app/)

---

## Features

1. **Book List Display:**
   - Fetches and displays books from the [Gutenberg Books API](https://gutendex.com/books).
   - Each book entry includes:
     - Title
     - Author Name
     - Cover Image
     - Genre/Topic
     - Book ID

2. **Search Functionality:**
   - Real-time search bar to filter books by title.

3. **Genre/Topic Filtering:**
   - Dropdown filter to filter books based on genre or topic.

4. **Wishlist:**
   - Users can wishlist books by clicking on a love/like icon.
   - Wishlist is saved to `localStorage` to persist even after refreshing the page.
   - Users can toggle the icon to save or remove books from their wishlist.

5. **Pagination:**
   - Includes pagination controls for navigating through the book list with options for Next, Previous, and numbered pages.

---

## Pages

- **Homepage:** 
  Displays a list of books with search and filter functionalities.
  
- **Wishlist Page:**
  Displays the books the user has wishlisted, retrieved from `localStorage`.

- **Book Details Page:**
  Shows the detailed view of each book when selected from the list.

- **Navbar:**
  A responsive navigation bar that links to different sections of the website.

---

## Technologies Used

- **HTML5**: Markup structure for the web application.
- **CSS3**: Styling the application with responsiveness in mind.
- **JavaScript (ES6+)**: Core functionality for fetching API data, managing the wishlist, filtering, and pagination.
- **LocalStorage**: To store and persist user wishlist data.
- **Bootstrap/Tailwind CSS (optional)**: For styling enhancements (if used).
- **Vanilla CSS**: Preferred for custom styling.

---

## How to Run the Project

1. Clone the repository:
   ```bash
   git clone <repository-url>
