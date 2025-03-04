/**
 * Medium Fetcher - Fetches articles from Medium via RSS feed
 */
class MediumFetcher {
  constructor(username) {
    this.username = username;
    this.rssUrl = `https://medium.com/feed/${username}`;
    this.proxyUrl = 'https://api.rss2json.com/v1/api.json?rss_url=';
  }

  async fetchArticles() {
    try {
      const response = await fetch(`${this.proxyUrl}${encodeURIComponent(this.rssUrl)}`);
      
      if (!response.ok) {
        throw new Error('Failed to fetch Medium articles');
      }
      
      const data = await response.json();
      
      if (data.status !== 'ok') {
        throw new Error('Invalid RSS feed');
      }
      
      // Transform Medium articles to match our news article format
      return data.items.map(item => {
        // Extract first image from content or use default
        const imgRegex = /<img[^>]+src="([^">]+)"/;
        const imgMatch = item.content.match(imgRegex);
        const image = imgMatch ? imgMatch[1] : 'img/genaricArticle.jpg';
        
        return {
          title: item.title,
          url: item.link,
          date: item.pubDate,
          source: 'Medium',
          image: image,
          isMedium: true
        };
      });
    } catch (error) {
      console.error('Error fetching Medium articles:', error);
      return [];
    }
  }
} 