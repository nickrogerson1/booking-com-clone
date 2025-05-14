# Booking.com Clone 

## About This Project (Intro)

This is a very small Booking.com clone which has a homepage and a search page. The UI has been fleshed out but no additional pages have been added. The user can start their search from the homepage, the results are then scraped from Booking.com and displayed on a separate search page.

### What it was built with / Tech Stack

This app was built with React 19, Next.js 15 and Typescript for additional error checking. Tailwind CSS was also used for a better developer experience and to reduce the amount of CSS served at production. Shadcn was used for creating generic components alongwith with Heroicons and Zod forms.

#### Key Features

-   A beautiful initial search page which is somewhat similar to Booking.com.
-   Users can search by location, length of stay and number of people.
-   Search results scraped directly from Booking.com by oxylabs.io.
-   Search results then displayed on separate search page.
-   Beautiful loading display shown while scraping takes places.

**Unresolved Issues**

-   Due to the high costs of oxylabs to scrape data, I added a dummy-search-results file to emulate the scrape. Anyone cloning this repo can switch between dummy and real results by commenting this out.
-   Oxylabs.io has a rate limiting feature for Booking.com so some results may not be returned and there’s seemingly no way to scale up and avoid this. Also, the Xpaths for parsing the data will likely not work for very long and will need to be updated manually.
-   Had to \`--force\` react-day-picker to React 19.0.0 to get it to deploy for the demo. Can move down to React 18 to fix this or just wait for shadcn to catch up.

**Future Improvements**

-   Add additional search pages through pagination and a paginator button, so users can look through all the results (currently only one page returned).
-   Spin this off into its own booking platform which would require a huge financial investment on advertising, so probably not likely going to happen given the market is already really mature.


## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
