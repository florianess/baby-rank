"use client";

import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

function Players() {
  const players = useQuery(api.players.get)

  return (
    <Table>
      <TableCaption>Joueurs</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Nom</TableHead>
          <TableHead>Elo</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        { players?.map((player) => (
          <TableRow key={player._id}>
            <TableCell>{player.name}</TableCell>
            <TableCell>{String(player.elo)}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

function Games() {
  const games = useQuery(api.games.get)

  return (
    <Table>
      <TableCaption>Matchs</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>W</TableHead>
          <TableHead>L</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        { games?.map((game) => (
          <TableRow key={game._id}>
            <TableCell>{game.winner}</TableCell>
            <TableCell>{game.looser}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

function NewGame() {
  
}

export default function Home() {
  return (
    <div className="flex">
      <Players />
      <Games />
    </div>
  );
}
