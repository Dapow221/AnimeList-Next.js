"use client";
import React, { useEffect, useState } from "react";
import CardAnime from "./CardAnime";

interface Anime {
  id: number;
  title: string;
}

interface AnimeListResponse {
  data: Anime[];
}

const AnimeList: React.FC = () => {
  const [anime, setAnime] = useState<AnimeListResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://api.jikan.moe/v4/top/anime");
        const data: AnimeListResponse = await response.json();
        setAnime(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <div className="grid grid-cols-4 gap-3">
        {anime?.data.map((data) => (
          <CardAnime data={data} key={data.id} />
        ))}
      </div>
    </div>
  );
};

export default AnimeList;
