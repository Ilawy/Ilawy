import PocketBase from "pocketbase";
import type { TypedPocketBase } from "../types/pocketbase-types";

export const PROJECTS_COLLECTION = "personal_projects";

export function createPB() {
  return new PocketBase(import.meta.env.POCKETBASE_URL) as TypedPocketBase;
}
