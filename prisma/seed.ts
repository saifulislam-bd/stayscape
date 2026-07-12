import { syncDemoListingsToDatabase } from "@/lib/sync-demo-listings";

async function main() {
  await syncDemoListingsToDatabase();
}

main()
  .then(() => {
    process.stdout.write("Demo listings seeded successfully\n");
  })
  .catch((error) => {
    process.stdout.write(
      `Seeding failed: ${error instanceof Error ? error.message : String(error)}\n`,
    );
    process.exitCode = 1;
  });
