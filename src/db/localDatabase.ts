import { StaticImageData } from "next/image";
import playlistImg from "../app/components/playlists/playlist-pruebaa.avif";

export interface Playlist {
  id: string;
  title: string;
  img: StaticImageData;
  artists: string[];
}

export const playlists: Playlist[] = [
  {
    id: "1",
    title: "Mi playlist",
    img: playlistImg,
    artists: ["Duki"],
  },
  {
    id: "2",
    title: "aaaaa",
    img: playlistImg,
    artists: ["Duki"],
  },
  {
    id: "3",
    title: "UN nOMBRE RE LARGOOO",
    img: playlistImg,
    artists: ["Duki"],
  },
  {
    id: "4",
    title: "jejeje",
    img: playlistImg,
    artists: ["Duki"],
  },
  {
    id: "5",
    title: "SADASDASD",
    img: playlistImg,
    artists: ["Duki"],
  },
  {
    id: "6",
    title: "Duki temas",
    img: playlistImg,
    artists: ["Duki"],
  },
  {
    id: "7",
    title: "Maria becerra album",
    img: playlistImg,
    artists: ["Duki"],
  },
  {
    id: "8",
    title: "Midel temas",
    img: playlistImg,
    artists: ["Duki"],
  },
  {
    id: "9",
    title: "Viejas",
    img: playlistImg,
    artists: ["Duki"],
  },
  {
    id: "10",
    title: "nuevas",
    img: playlistImg,
    artists: ["Duki"],
  },
  {
    id: "11",
    title: "asdasdasf",
    img: playlistImg,
    artists: ["Duki"],
  },
  {
    id: "12",
    title: "Viejdsfsdgdsfgas",
    img: playlistImg,
    artists: ["Duki"],
  },
  {
    id: "13",
    title: "Viejagggggs",
    img: playlistImg,
    artists: ["Duki"],
  },
  {
    id: "14",
    title: "aaViejagggggs",
    img: playlistImg,
    artists: ["Duki"],
  },
  {
    id: "15",
    title: "ffViejagggggs",
    img: playlistImg,
    artists: ["Duki"],
  },
];

// crear Interfaces | types de las canciones

// crear Interfaces | types de las playlists

// En un futuro hacerlo en una base de datos ( mongodb )
