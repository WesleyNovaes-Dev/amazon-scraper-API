import express from 'express';
import axios from 'axios';
import { JSDOM } from 'jsdom';

const app = express();
const port = 3000;

// Função para fazer scraping da página da Amazon
const scrapeAmazon = async (keyword) => {
    const url = `https://www.amazon.com.br/s?k=${encodeURIComponent(keyword)}`;
    console.log('Fetching URL:', url);  // Log da URL gerada
  
    try {
      const { data } = await axios.get(url, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
        }
      });
      console.log('Received HTML data:', data.substring(0, 500));  // Log da resposta da Amazon (primeiros 500 caracteres)
  
      const dom = new JSDOM(data);
      const products = [];
  
      const items = dom.window.document.querySelectorAll('.s-main-slot .s-result-item');
      console.log('Found products:', items.length);  // Log do número de produtos encontrados
  
      items.forEach((item) => {
        const title = item.querySelector('h2 span')?.textContent || 'No title';
        const rating = item.querySelector('.a-icon-alt')?.textContent || 'No rating';
        const reviews = item.querySelector('.a-size-base')?.textContent || 'No reviews';
        const imageUrl = item.querySelector('.s-image')?.src || 'No image URL';
  
        // Verifique se os dados são válidos antes de adicionar ao array
        if (title !== 'No title' && rating !== 'No rating' && reviews !== 'No reviews' && imageUrl !== 'No image URL') {
          products.push({
            title,
            rating,
            reviews,
            imageUrl
          });
        }
      });
  
      return products;
    } catch (error) {
      console.error('Error during scraping:', error.message);  // Log do erro
      throw new Error('Failed to fetch data from Amazon');
    }
  };
    

// Endpoint /api/scrape
app.get('/api/scrape', async (req, res) => {
  const keyword = req.query.keyword;
  if (!keyword) {
    return res.status(400).json({ error: 'Keyword is required' });
  }

  try {
    const products = await scrapeAmazon(keyword);
    return res.json(products);
  } catch (error) {
    return res.status(500).json({ error: 'Failed to scrape data' });
  }
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
