import type { DemoProperty } from "@/types/demo-property";
import { US_LISTINGS_SEED } from "@/data/us-listings-seed";

let inMemoryCache: DemoProperty[] | null = null;

export async function fetchDemoProperties(): Promise<DemoProperty[]> {
  if (!inMemoryCache) {
    inMemoryCache = US_LISTINGS_SEED;
  }
  return inMemoryCache;
}
