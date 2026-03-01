                            Blog post


  This is a simple blog application built with mock blog data and basic authentication using React Context.


I implemented this blog app by first creating a mock array of post objects in a separate file, each containing an id, slug, title, and content. The Blog Index page maps through this array and displays links using the slug, which connect to a dynamic route (/blog/[slug]). Inside the dynamic page, I used the slug from the URL to find the matching post and display its details, showing a “Post not found” message if no match exists. For authentication, I created an AuthContext using useState to manage isAuthenticated, along with login and logout functions. The Navbar conditionally renders links based on the login state, and the Admin page checks isAuthenticated to either show the dashboard or redirect unauthenticated users to the Login page.