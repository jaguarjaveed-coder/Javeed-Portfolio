import { existsSync } from "node:fs";
import { join } from "node:path";

// Server-only: resolves the first of the given public/ filenames that
// actually exists on disk, so image slots can be built ahead of the asset
// landing without crashing the build. Returns null if none are present.
export function findPublicAsset(...filenames: string[]): string | null {
  for (const filename of filenames) {
    if (existsSync(join(process.cwd(), "public", filename))) {
      return `/${filename}`;
    }
  }
  return null;
}

// Server-only: true if the given public/ filename exists on disk. For
// rendering a set of independent, optional assets (e.g. a logo strip) where
// each missing file should just be skipped, not substituted for another.
export function publicAssetExists(filename: string): boolean {
  return existsSync(join(process.cwd(), "public", filename));
}
