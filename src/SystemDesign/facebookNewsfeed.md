# Question: Design a news feed application where users can see updates and interact with them.

> Using RADIO Framework:

## <ins>R</ins>equirements:
1) Browse news feed
2) Reacting to the posts
3) creating and publishing new posts

### What kind of Posts are supported:
* Text and Images based

### What kind of pagination to be used:
* Infinite scrolling, load more posts when scrolled to the bottom.

### Will it be used on mobile application or web application?
* Web application preferred but mobile compatibility would be nice.

## <ins>A</ins>rchitecture

### Components responsible for
* Server: Provides HTTP based REST API to fetch the posts.
* Controller: Controls the data flow withing the application and makes server requests.
* Client Store: Stores the data across the application in the context of news feed, most of the data is fetched from the server.
* Feed UI: Contains list of posts and UI for composing the posts
    * Feed UI: Present the data from feed and contains options for reacting to the posts.
    * Post Compose UI: Allows user to compose new posts. generally uses WSYIWYG editor

### Rendering Approach:
* Server side rendering: Rendering HTML on the server side and most traditional way, best for static pages, SEO friendly. examples: blog posts, documentation are built with SSR.
* Client side rendering: Rendering in browser by dynamically generating DOM elements into the page by using javascript. Best for Web application.

News feed lies somewhere in between CSR and SSR. Facebook uses a hybrid approach. Rendering the posts and contents on server side and hydrating the events and interaction on the client side. Subsequent content while scrolling will be handled by CSR.

## <ins>D</ins>ata Model:
    For Designing Data Model: create a table for each attribute of data consumed by the application, follow the below columns.
    Entity | Source | Belongs to | Fields

* Feed | Server | Feed UI | list of posts and pagination metadata
* Post | Server | Feed Post | id, content, author, created_at, reactions, image_url
* User | Server | Client Store | id, name, profile_image_url
* NewPost | Forms | Post composer | message, image_url

## <ins>I</ins>nterface design:
generally consists of api design and api requirements and stuffs.

## <ins>O</ins>ptimisation:

* Code Splitting
    * Lazy loading - lazy load the non critical content after the initial load.
    * Code splitting - split the code into multiple bundles and load them on demand.

for news feed there is only a single page to load, so code splitting is not required. but anyhow, we can lazy load the posts while scrolling.

* Keyboard shortcuts -  for navigation and interaction. allows keyboard users to flexibly navigate the page.
* Error State - Clearly display the errors when API call fails or when there's no network connectivity.

### Feed List Optimisation:
1. Infinite Scrolling - load more posts when the content scrolled to the bottom, users will see the loader for sometime and then the new posts will be loaded. To avoid the flickering of the loader, generally the trigger will be placed around a 1 viewport distance from the bottom of the feed.
The trigger point can be dynamically placed based on the internet speed and how fast is the user scrolling. There are two ways this can be achieved:
    * Using scroll event listeners - Attach a scroll event listener with throttled function or setInterval to check the scroll position and load the next content.
    * Using Intersection Observer API -to monitor when the set marker is entering or leaving the viewport or intersecting with the target element.

2.  Virtualized List -
3. Dynamic loading count - for cursor based pagination, the number of posts a user can see can be dynamically calculated based on the screen size.
4. Stale feeds - When the page is left inactive there might be new posts at the top, in this case the user can be prompted to refresh the feed to see the latest posts, facebook does force refresh and scrolls to the top. New posts data can be replaced from the client memory to free up the memory.


