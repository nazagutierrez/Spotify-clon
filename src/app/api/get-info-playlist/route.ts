import { playlists, songs as allSongs } from "@/db/localDatabase";
import { NextApiRequest, NextApiResponse } from "next";

export async function GET(req: NextApiRequest, res: NextApiResponse) {
  if (req.url == undefined) return;

  const urlObject = new URL(req.url);
  const id = urlObject.searchParams.get("id");

  const playlist = playlists.find((playlist) => playlist.id === id);
  const songs = allSongs.filter((song) => song.albumId == playlist?.albumId);

  return new Response(JSON.stringify({ playlist, songs }), {
    headers: { "content-type": "application/json" },
  });
}
