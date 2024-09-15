Features
Data Table with Server-side Pagination: The table loads paginated data from an external API.
Lazy Loading: Data is loaded on-demand as you navigate through pages.
Row Selection: Users can select multiple rows across pages and manage the selection through a custom input panel.
Custom Overlay Panel: A panel is used to input the number of rows to be selected.
TypeScript Support: The project is written in TypeScript for improved type safety.

Technologies Used
React for the user interface.
PrimeReact for the DataTable and UI components.
Axios for HTTP requests to fetch data from an API.
TypeScript for type safety and better developer experience.

Table of Contents
Installation
Usage
API
Acknowledgments
Installation


Follow these steps to set up the project on your local machine:

Prerequisites
Node.js (version 14+ recommended)
npm (installed globally)

Steps
Clone the repository:
git clone https://github.com/Deveshsingh2004/datatable_assignment.git
cd DataTableAssignment

Install dependencies:
npm install
Run the development server:
npm run dev
Open the application in your browser:
http://localhost:3000

Usage
When the application is launched, you will see a data table displaying artwork details.
You can navigate through the pages using the pagination controls at the bottom of the table.
To select multiple rows, click the checkboxes in the first column of the table. The selection will be persisted even when you navigate across pages.
Use the overlay panel (by clicking the arrow icon in the title column) to input the number of rows to be selected automatically.
Available Scripts
In the project directory, you can run:


API
Data Source
The app fetches artwork data from the Art Institute of Chicago API.

Endpoint: https://api.artic.edu/api/v1/artworks
Request Parameters:
page: Indicates the page number for pagination.
Functions
fetchData(page: number)
Fetches artwork data from the API for the given page.

selectRecordsAcrossPages
Utility function for selecting multiple rows across pages based on the number of rows required.

Acknowledgments
PrimeReact for providing great UI components.
Art Institute of Chicago API for the artwork dataset.
