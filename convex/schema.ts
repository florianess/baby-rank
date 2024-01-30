import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
    players: defineTable({
        name: v.string(),
        elo: v.int64(),
    }),
    teams: defineTable({
        color: v.union(
            v.literal("red"),
            v.literal("blue")
          ),
        p1: v.id("players"),
        p2: v.id("players"),
        p1Elo: v.int64(),
        p2Elo: v.int64(),
        score: v.int64()
    }),
    games: defineTable({
        winner: v.id("teams"),
        looser: v.id("teams"),
    }),
});