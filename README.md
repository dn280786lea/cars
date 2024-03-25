## App for a car Rent camper

## Description.

The application consists of 3 pages:

- home page with a general description of the services provided by the company.
- a page containing a catalogue of cars
- a page with ads that have been added to the user's favourites.

All pages have a header with a page menu, a viewing area for the main
information, and a footer with the contact details of the app owner.

## Home page.

1. It has a hero section with a general description of the service and a link to
   the catalogue page car catalogue page.
2. If necessary, sections with information about the company, detailed
   description of services and car rental conditions.

## Car catalogue page

### Section with car cards

1. When you open the page, the first 4 car rental ads from the database are
   rendered.
2. Each next 4 ads from the database can be loaded on the page by clicking on
   the `Load more` button. It is located under the ads.
3. When all the ads from the database are loaded, the `Load more` button
   disappears.
4. When you click on the heart button on the ad card, it is added to the list of
   favourites to the list of favourites, and the colour of the button changes to
   blue.
5. When the page refreshes, the end result of the user's actions is recorded
   (favourites cars remain in the list of favourites). Implemented using local
   storage.
6. If you click on the "heart" button again, the advert is removed from the the
   list of favourites, and the colour of the button changes to its original
   state.
7. Clicking on the Learn more button opens a modal window with detailed
   information about the car and its rental conditions.

### Modal window with detailed information about the car

1. The modal window is closed by clicking on the button in the form of a
   "cross", by clicking on the `backdrop` button or by pressing the `Esc` key.

## Page of selected cars

1. Renders the cars that have been added to the list of favourites.
2. If there are no selected cars, a blank page is displayed with a blank page
   with an offer to visit the car catalogue and a link to the catalogue.

## Test task

## Description.

Create an application for a company that provides car rental services in
Ukraine. for rent in Ukraine. The application consists of 3 pages:

- home page with a general description of the services provided by the company.
  Styling and design is at your discretion.
- a page containing a catalogue
- a page with ads that have been added to the user's favourites The external The
  appearance of the application should consist of a sidebar and a viewing area.

Create a routing using React Router. The application should have the following
routes:

- `"/"` - the home page with a general description of the services provided by
  the company
- `"/catalogue"` - a page containing a catalogue of cars of different
  configurations
- `"/favourites"` - a page with ads that have been added by the user to
  favourites

Advert

1. Create an `advert` in **Mockapi**
