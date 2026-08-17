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
