const playlistImg = "https://imgs.unsplash.com/photo-1553524082-82690780f842?auto=format&fit=crop&q=80&w=192.53&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

// En un futuro hacerlo en una base de datos ( mongodb )

export interface Playlist {
  id: string;
  albumId: number;
  title: string;
  img: string;
  genre: string;
}

export interface Song {
  id: number;
  albumId: number;
  src: string;
  img: string;
  title: string;
  artists: string[];
  duration: string;
}

export const playlists: Playlist[] = [
  {
    id: '1',
    albumId: 1,
    title: "Rhymes & Beats",
    img:
      "https://cdn.pixabay.com/photo/2014/08/08/21/30/b-boying-413726_1280.jpg",
    genre: "Rap",
  },
  {
    id: '2',
    albumId: 2,
    title: "Pop Party Anthems",
    img:
      "https://cdn.pixabay.com/photo/2016/06/27/07/30/elvis-presley-1482026_1280.jpg",
    genre: "Pop",
  },
  {
    id: '3',
    albumId: 3,
    title: "Rock Classics Revived",
    img:
      "https://cdn.pixabay.com/photo/2017/02/22/16/04/guitar-2089802_1280.jpg",
    genre: "Rock",
  },
  {
    id: '4',
    albumId: 4,
    title: "Electro Groove Journey",
    img:
      "https://cdn.pixabay.com/photo/2016/07/20/22/15/crowd-1531431_1280.jpg",
    genre: "Electronic",
  },
  {
    id: '5',
    albumId: 5,
    title: "Island Vibes Reggae",
    img:
      "https://cdn.pixabay.com/photo/2017/02/19/19/52/bob-marley-2080758_1280.jpg",
    genre: "Reggae",
  },
  {
    id: '6',
    albumId: 6,
    title: "All Genre Jams",
    img:
      "https://cdn.pixabay.com/photo/2016/08/15/16/48/vinyl-1595847_1280.jpg",
    genre: "Mix",
  }
];

export const songs: Song[] = [
  {
    id: 1,
    albumId: 1,
    src: "../app/assets/audio/rap/Boom Bap Flick - Quincas Moreira.mp3",
    title: "Boom Bap Flick",
    img: "",
    artists: ["Quincas Moreira"],
    duration: "3:05",
  },
  {
    id: 2,
    albumId: 1,
    src: "../app/assets/audio/rap/Gully Dreams - Hanu Dixit.mp3",
    title: "Gully Dreams",
    img: "",
    artists: ["Hanu Dixit"],
    duration: "1:52",
  },
  {
    id: 3,
    albumId: 1,
    src: "../app/assets/audio/rap/Lawrence - TrackTribe.mp3",
    title: "Lawrence",
    img: "",
    artists: ["TrackTribe"],
    duration: "3:54",
  },
  {
    id: 4,
    albumId: 1,
    src: "../app/assets/audio/rap/Underground Academy - Hanu Dixit.mp3",
    title: "Underground Academy",
    img: "",
    artists: ["Hanu Dixit"],
    duration: "2:01",
  },
  {
    id: 5,
    albumId: 2,
    src: "../app/assets/audio/pop/Drop the Tapes - TrackTribe.mp3",
    title: "Drop the Tapes",
    img: "",
    artists: ["TrackTribe"],
    duration: "3:49",
  },
  {
    id: 6,
    albumId: 2,
    src: "../app/assets/audio/pop/Flying - Track Tribe.mp3",
    title: "Flying",
    img: "",
    artists: ["Track Tribe"],
    duration: "2:23",
  },
  {
    id: 7,
    albumId: 2,
    src: "../app/assets/audio/pop/Guess Ill Never Know - TrackTribe.mp3",
    title: "Guess Ill Never Know",
    img: "",
    artists: ["Track Tribe"],
    duration: "3:24",
  },
  {
    id: 8,
    albumId: 2,
    src: "../app/assets/audio/pop/Waterpark Radio Ad - Freedom Trail Studio.mp3",
    title: "Waterpark Radio Ad",
    img: "",
    artists: ["Freedom Trail Studio"],
    duration: "1:56",
  },
  {
    id: 9,
    albumId: 3,
    src: "../app/assets/audio/rock/For Time To Disappear - Go By Ocean _ Ryan McCaffrey.mp3",
    title: "For Time To Disappear",
    img: "",
    artists: ["Go By Ocean", "Ryan McCaffrey"],
    duration: "3:16",
  },
  {
    id: 10,
    albumId: 3,
    src: "../app/assets/audio/rock/Outreach - Go By Ocean _ Ryan McCaffrey.mp3",
    title: "Outreach",
    img: "",
    artists: ["Go By Ocean", "Ryan McCaffrey"],
    duration: "3:32",
  },
  {
    id: 11,
    albumId: 3,
    src: "../app/assets/audio/rock/Point Being - Go By Ocean _ Ryan McCaffrey.mp3",
    title: "Point Being",
    img: "",
    artists: ["Go By Ocean", "Ryan McCaffrey"],
    duration: "2:38",
  },
  {
    id: 12,
    albumId: 3,
    src: "../app/assets/audio/rock/Speak The Truth - Go By Ocean _ Ryan McCaffrey.mp3",
    title: "Speak The Truth",
    img: "",
    artists: ["Go By Ocean", "Ryan McCaffrey"],
    duration: "3:36",
  },
  {
    id: 13,
    albumId: 4,
    src: "../app/assets/audio/electronic/A Sitar Story - Hanu Dixit.mp3",
    title: "A Sitar Story",
    img: "",
    artists: ["Hanu Dixit"],
    duration: "2:00",
  },
  {
    id: 14,
    albumId: 4,
    src: "../app/assets/audio/electronic/Crash & Burn - Aakash Gandhi.mp3",
    title: "Crash & Burn",
    img: "",
    artists: ["Aakash Gandhi"],
    duration: "2:07",
  },
  {
    id: 15,
    albumId: 4,
    src: "../app/assets/audio/electronic/Rains Of Meghalaya - Hanu Dixit.mp3",
    title: "Rains Of Meghalaya",
    img: "",
    artists: ["Hanu Dixit"],
    duration: "2:02",
  },
  {
    id: 16,
    albumId: 4,
    src: "../app/assets/audio/electronic/Shake It - Aakash Gandhi.mp3",
    title: "Shake It",
    img: "",
    artists: ["Aakash Gandhi"],
    duration: "1:52",
  },
  {
    id: 17,
    albumId: 5,
    src: "../app/assets/audio/reggae/Islabonita - An Jone.mp3",
    title: "Islabonita",
    img: "",
    artists: ["An Jone"],
    duration: "2:20",
  },
  {
    id: 18,
    albumId: 5,
    src: "../app/assets/audio/reggae/Make Love Not War - Patiño.mp3",
    title: "Make Love Not War",
    img: "",
    artists: ["Patiño"],
    duration: "3:12",
  },
  {
    id: 19,
    albumId: 5,
    src: "../app/assets/audio/reggae/Oh Fire - Carmen María and Edu Espinal.mp3",
    title: "Oh Fire",
    img: "",
    artists: ["Carmen María and Edu Espinal"],
    duration: "2:21",
  },
  {
    id: 20,
    albumId: 5,
    src: "../app/assets/audio/reggae/Two Sides - SefChol.mp3",
    title: "Two Sides",
    img: "",
    artists: ["SefChol"],
    duration: "3:14",
  },
  {
    id: 21,
    albumId: 6,
    src: "../app/assets/audio/electronic/Crash & Burn - Aakash Gandhi.mp3",
    title: "Crash & Burn",
    img: "",
    artists: ["Aakash Gandhi"],
    duration: "2:07",
  },
  {
    id: 22,
    albumId: 6,
    src: "../app/assets/audio/reggae/Make Love Not War - Patiño.mp3",
    title: "Make Love Not War",
    img: "",
    artists: ["Patiño"],
    duration: "3:12",
  },
  {
    id: 23,
    albumId: 6,
    src: "../app/assets/audio/pop/Flying - Track Tribe.mp3",
    title: "Flying",
    img: "",
    artists: ["Track Tribe"],
    duration: "2:23",
  },
  {
    id: 24,
    albumId: 6,
    src: "../app/assets/audio/rap/Boom Bap Flick - Quincas Moreira.mp3",
    title: "Boom Bap Flick",
    img: "",
    artists: ["Quincas Moreira"],
    duration: "3:05",
  },
]