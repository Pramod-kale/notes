# Key notes from system design learning

> RADIO framework to solve the problem
>
> R - Req gathering => collect all the possible data needed, understand the problem properly, think of what are the things needed to solve on a high level
>
> A - Architecture / High level design => recognize the key components, how they are related to others.
>
> D - Data model => describing the data entities, state managing, structure of the data, which component they belong to
>
> I - Interface Definition (API) => define the interface between components in the product, functionality of each API, their parameters, their responses.
>
> O - Optimization and Deep dive => explore about the possible optimization, further problem deep dive, and specific areas of improvisation.

---

### [Server-side rendering or client-side rendering?](https://www.greatfrontend.com/questions/system-design/e-commerce-amazon#server-side-rendering-or-client-side-rendering)

* **Server-side rendering (SSR)** : The traditional way of building websites where the server fetches all necessary data, uses them to create the final markup and sends down the HTML needed every time a user visits a page. Most of the rendering work is done on the server.
* **Client-side rendering (CSR)** : The server sends down initial HTML which contains the JavaScript to bootstrap the application. The client then fetches the necessary data, combines it with templates and creates the final page, all within the browser. CSR is typically used with Single-page Application models and subsequent navigation don't require a full page refresh. Most of the rendering work is done on the client.

Benefits of SSR:

* Performance is generally better, First Contentful Paint score is high and SSR-ed pages appear faster than CSR.
* Lower Cumulative Layout Shift score as the final HTML is already present.
* SSR allows for personalization of pages (user-specific content) as opposed to static site generation. Personalization is an important factor for conversion as e-commerce platforms scale up.

Downsides of SSR:

* Page transitions are slower because the entire page has to be constructed on the server for every request.

SEO is important for e-commerce websites, hence SSR should be a priority.

* SPAs by default use **CSR** and MPAs by default use **SSR**.
* A hybrid mode called **universal rendering** (or SSR with hydration) where the server renders the full HTML but after that, rendering and navigation becomes client-side.
* Most universal rendered-sites use popular UI frameworks (e.g. React, Vue, and Angular) and the page will need to be hydrated (add event handlers) after initial load. Hydration also brings about the [double data problem](https://web.dev/rendering-on-the-web/#a-rehydration-problem-one-app-for-the-price-of-two).

---

Pagination types:

1) offset method => where client asks for items based on offsets and limits
2) cursor based method => where client asks for certain number of items after the particular item.
3) infinite scroll => where client asks for more items when the user scrolls to the bottom of the page.
