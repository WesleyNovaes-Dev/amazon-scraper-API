# Amazon Scraper API

This is a project that uses **Bun**, **Axios**, and **JSDOM** to extract product information from Amazon based on a keyword provided by the user. The API has an endpoint `/api/scrape` that, upon receiving a `keyword` query parameter, performs scraping on Amazon's search results page and returns the extracted data in JSON format.

## Features

- Scrapes products from Amazon based on a given keyword.
- Extracts the following details for each found product:
  - **Product Title**
  - **Rating (stars)**: The average rating (review stars).
  - **Number of reviews**: The number of comments and reviews for the product.
  - **Product Image URL**: The URL of the product's main image.
- Filters out products with missing or invalid data (such as missing title, rating, or image).

## Technologies Used

- **Bun**: Package manager and server runtime.
- **Axios**: HTTP request library used to fetch the content from Amazon's page.
- **JSDOM**: Library that emulates a browser and allows manipulation of HTML content from Amazon's page.

## How to Run the Project

### Prerequisites

Make sure you have **Bun** installed on your machine. If you don't have it, follow the installation instructions on the [official Bun website](https://bun.sh/).

### Steps to Run

1. **Clone the repository**:

   First, clone the project repository to your local machine:

   ```bash
   git clone https://github.com/your-username/amazon-scraper-api.git
   cd amazon-scraper-api



