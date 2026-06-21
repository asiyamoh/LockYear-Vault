-- CreateEnum
CREATE TYPE "public"."LockStatus" AS ENUM ('PENDING_CONFIRMATION', 'LOCKED', 'MATURED', 'WITHDRAWN');

-- CreateEnum
CREATE TYPE "public"."LedgerEventType" AS ENUM ('LOCK_CREATED', 'LOCK_CONFIRMED', 'LOCK_MATURED');

-- CreateTable
CREATE TABLE "public"."DemoUser" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "hasSeenIntro" BOOLEAN NOT NULL DEFAULT false,
    "isDemo" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "DemoUser_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Lock" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "amountCents" INTEGER NOT NULL,
    "unlockAt" TIMESTAMP(3) NOT NULL,
    "status" "public"."LockStatus" NOT NULL DEFAULT 'PENDING_CONFIRMATION',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Lock_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."LedgerEvent" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "lockId" TEXT,
    "eventType" "public"."LedgerEventType" NOT NULL,
    "amountCents" INTEGER,
    "metadata" JSONB NOT NULL DEFAULT '{}',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "LedgerEvent_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Lock_userId_idx" ON "public"."Lock"("userId");

-- CreateIndex
CREATE INDEX "Lock_userId_status_idx" ON "public"."Lock"("userId", "status");

-- CreateIndex
CREATE INDEX "LedgerEvent_userId_idx" ON "public"."LedgerEvent"("userId");

-- CreateIndex
CREATE INDEX "LedgerEvent_lockId_idx" ON "public"."LedgerEvent"("lockId");

-- AddForeignKey
ALTER TABLE "public"."Lock" ADD CONSTRAINT "Lock_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."DemoUser"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."LedgerEvent" ADD CONSTRAINT "LedgerEvent_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."DemoUser"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."LedgerEvent" ADD CONSTRAINT "LedgerEvent_lockId_fkey" FOREIGN KEY ("lockId") REFERENCES "public"."Lock"("id") ON DELETE SET NULL ON UPDATE CASCADE;
