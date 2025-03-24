# Reddit-project
A Reddit-inspired web application built with React, Next.js, and Tailwind CSS. The app mimics the core features of Reddit, including user authentication, dynamic post feeds, subreddit browsing, and more.

## Key Features and Functionality
1. User Authentication (Login/Sign-up Modal)
* Login Modal: Users can log in through a modal that appears when clicking the "Log In" button in the navbar.
* The modal allows users to switch between login and sign-up forms.
* Sign-up Modal: Users can create a new account with a registration form inside the same modal.
* Replaces the standard "Sign Up" button with a "Get App" button, which leads to a modal with a QR code to download the Reddit app for mobile devices.

2. Popular Communities Section
* Dynamic Fetching: The app dynamically fetches real subreddit icons and names from Reddit’s API.
* Only 5 popular subreddits are displayed at once to keep the page lightweight and user-friendly.
* Navigation: Each subreddit is clickable, and clicking on a subreddit could lead to a dedicated page with posts from that community (future feature).

3. Post Feed
* Post Content: The post feed contains a list of posts with essential information: Subreddit, User, Post, Title, Image, Upvotes and Comments count.

* Dynamic Loading: Posts are displayed in a scrollable feed format, with new posts dynamically loading as the user scrolls.

* The "You're all caught up!" message appears once users reach the bottom of the feed, accompanied by the Reddit logo.

4. Right Sidebar
* Popular Communities: A right sidebar shows a list of popular communities, enhancing the user’s navigation experience.
* It is lazy-loaded to optimize performance and only appears on larger screens (desktop or tablet).

5. Navbar
* Navigation: Includes a simple, responsive navbar with: The Reddit logo linking to the homepage; Links to navigate between "Home" and "Popular" sections; A "Log In" button for user authentication; A search bar to search for posts across the platform.
* Layout: The navbar is sticky on top and adapts to different screen sizes, ensuring easy navigation.

6. Responsive Layout
* Mobile & Desktop: The app is responsive, adjusting automatically based on the screen size; On mobile, the sidebar collapses into a more compact view for better usability; The right sidebar with popular communities is only visible on desktop and larger screens.

7. "You're All Caught Up!" Message
* Message Display: When users scroll to the bottom of the post feed, a message is shown saying, "You're all caught up!" along with the Reddit logo.
This feature mimics the behavior on the official Reddit app when a user finishes loading all available posts.

## Technologies Used
1. React.js: Frontend framework used to build the user interface.

2. Next.js: Framework for server-side rendering and routing.

3. Tailwind CSS: Utility-first CSS framework for styling.

4. React Icons: Icon library used for navigation and UI components.

5. Dynamic Imports: Used for lazy-loading components like the right sidebar to improve app performance.