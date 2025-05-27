/*
  Warnings:

  - You are about to drop the column `expires_at` on the `session` table. All the data in the column will be lost.
  - You are about to drop the column `sid` on the `session` table. All the data in the column will be lost.
  - You are about to alter the column `data` on the `session` table. The data in that column could be lost. The data in that column will be cast from `VarChar(512)` to `VarChar(191)`.
  - Added the required column `expires` to the `session` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `session_sid_key` ON `session`;

-- AlterTable
ALTER TABLE `session` DROP COLUMN `expires_at`,
    DROP COLUMN `sid`,
    ADD COLUMN `expires` DATETIME(3) NOT NULL,
    MODIFY `data` VARCHAR(191) NOT NULL;
