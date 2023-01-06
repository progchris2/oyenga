import {PrismaClient, Prisma} from "@prisma/client";

export interface DatabaseInterface {
    initialize(): void;

    execute(): PrismaClient<Prisma.PrismaClientOptions, never, Prisma.RejectOnNotFound | Prisma.RejectPerOperation | undefined>;
}
