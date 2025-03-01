  <h1>📜 React Redux Blog App</h1>
        <p><strong>A full-featured blog application built with React, Redux Toolkit, and Tailwind CSS.</strong></p>

   <h2>🚀 Features</h2>
        <ul>
            <li>Fetch and display blog posts using <strong>Redux Toolkit</strong></li>
            <li>Search functionality to filter posts dynamically</li>
            <li>Pagination support for better UX</li>
            <li>View post details along with comments</li>
            <li>Responsive UI with a modern look using <strong>Tailwind CSS</strong></li>
        </ul>

  <h2>Screenshot and Video</h2>

  

https://github.com/user-attachments/assets/ec73e727-faf5-4868-a2bd-36f20dabbac7






![Screenshot 2025-03-01 113609](https://github.com/user-attachments/assets/8da40555-7513-4786-8cbf-bebb629215a8)

![Screenshot 2025-03-01 113535](https://github.com/user-attachments/assets/3835b843-9869-4060-bec7-fdaf523e3b92)

![Screenshot 2025-03-01 113505](https://github.com/user-attachments/assets/a1251e9b-73b7-432c-bcc5-a4a89fd71208)



        
  <h2>📦 Installation</h2>
        <p>Clone the repository and install dependencies:</p>
        <pre><code>git clone https://github.com/your-repo/blog-app.git
cd blog-app
npm install</code></pre>

   <h2>▶️ Running the App</h2>
        <p>Start the development server:</p>
        <pre><code>npm start</code></pre>

   <h2>🛠 Technologies Used</h2>
        <ul>
            <li>React.js</li>
            <li>Redux Toolkit</li>
            <li>Tailwind CSS</li>
            <li>Axios (for API calls)</li>
        </ul>

   <h2>📌 API Details</h2>
        <p>The app uses JSONPlaceholder as a mock API:</p>
        <ul>
            <li>Fetch all posts: <code>https://jsonplaceholder.typicode.com/posts</code></li>
            <li>Fetch post by ID: <code>https://jsonplaceholder.typicode.com/posts/{id}</code></li>
            <li>Fetch comments for a post: <code>https://jsonplaceholder.typicode.com/posts/{id}/comments</code></li>
        </ul>

   <h2>📄 Folder Structure</h2>
        <pre><code>
/src
│── /components
│   ├── PostList.js
│   ├── PostDetail.js
│   ├── Pagination.js
│   ├── SearchBar.js
│── /features
│   ├── ApiSlice.js
│── store.js
│── index.js
        </code></pre>

  <h2>📝 State Management (Redux Toolkit)</h2>
        <p>The app uses Redux Toolkit to manage state efficiently. Key Redux functionalities include:</p>
        <ul>
            <li><strong>fetchPosts</strong> - Fetch paginated posts</li>
            <li><strong>fetchPostById</strong> - Fetch a single post along with comments</li>
            <li><strong>setSearchTerms</strong> - Update search terms in the store</li>
            <li><strong>setCurrentPage</strong> - Handle pagination state</li>
        </ul>

   <h2>📬 Contributing</h2>
        <p>Contributions are welcome! Feel free to submit issues or pull requests.</p>
    </div>
