import { createClient } from "@postiva/client";

export const postivaClient = createClient({
  apiKey: import.meta.env.VITE_POSTIVA_API_KEY as string,
  workspaceId: import.meta.env.VITE_POSTIVA_WORKSPACE_ID as string,
});
