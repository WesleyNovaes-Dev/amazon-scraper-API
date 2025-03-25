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

2. **Install the dependencies**:
	```bash
	bun install

3. **Start the server**:
	```bash
	bun start
 
Port: http://localhost:3000.


4. **Making a request to the API*:
   ```bash
    curl "http://localhost:3000/api/scrape?keyword=smartphone"


**Example response:**
 ```bash
[
  {
    "title": "REDMAGIC 10 Pro 144Hz Gaming Phone, Smartphone Android 5G, 12GB RAM+256GB ROM, Snapdragon 8 Elite, 6.85\" 1.5K AMOLED Tela Cheia, FHD+, Câmera 50MP, Dual-Sim, Preto",
    "rating": "No rating",
    "reviews": "Preço, página do produtoR$ 5.799,00R$5.799,00 De: R$ 6.500,00R$6.500,00em até 10x de R$ 579,90R$579,90 sem juros",
    "imageUrl": "https://m.media-amazon.com/images/I/518RsOS8u4L._AC_UL320_.jpg"
  }
]

=======
# amazon-scraper

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run index.ts
```

This project was created using `bun init` in bun v1.2.6. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.
>>>>>>> 2aa4b6f (Create Project / Feat: Server.JS)
