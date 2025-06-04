import { Prisma } from "@prisma/client";

export const documentPick = {
  doc_id: true,
  doc_path: true,
} as const;

export type DocumentDTO = Prisma.documentGetPayload<{
  select: typeof documentPick;
}>;
