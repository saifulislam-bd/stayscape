import { PrismaClient } from "@/generated/prisma/client";
import { PrismaNeon } from "@prisma/adapter-neon";

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

const connectionString = process.env.DATABASE_URL;
if (!connectionString) {
  throw new Error("Missing DATABASE_URL environment variable");
}

const adapter = new PrismaNeon({ connectionString });

const prismaLogLevel =
  process.env.PRISMA_LOG_QUERIES === "true"
    ? (["query", "error"] as const)
    : (["error"] as const);

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: [...prismaLogLevel],
    adapter,
  });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
