import { useEffect, useState } from 'react';
import Constants from 'expo-constants';

export interface Wallpaper {
    "url" :string,
    "name" : string
}

export function useWallpaper(): { wallpapers: Wallpaper[], loading: boolean, error: string | null } {
  const [wallpapers, setWallpapers] = useState<Wallpaper[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchWallpapers = async () => {
      try {
        const apiKey ="49436091-6b2642ed15fcaf2676bc2c579";
        // console.log(apiKey);
        if (!apiKey) {
          throw new Error('API key not found');
        }

        const response = await fetch(
          `https://pixabay.com/api/?key=${apiKey}&q=nature&image_type=photo&per_page=100`
        );
        const data = await response.json();
        setWallpapers(data.hits.map((hit: any) => ({
          url: hit.webformatURL,
          name: hit.tags.split(',')[0].trim(),
        })));
      } catch (err) {
        setError('Failed to fetch wallpapers');
      } finally {
        setLoading(false);
      }
    };

    fetchWallpapers();
  }, []);

  return { wallpapers, loading, error };
}
