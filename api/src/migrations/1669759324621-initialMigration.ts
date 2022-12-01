import { MigrationInterface, QueryRunner } from "typeorm";

export class initialMigration1669759324621 implements MigrationInterface {
    name = 'initialMigration1669759324621'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "client" DROP COLUMN "createdAt"`);
        await queryRunner.query(`ALTER TABLE "client" ADD "createdAt" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "client" DROP COLUMN "createdAt"`);
        await queryRunner.query(`ALTER TABLE "client" ADD "createdAt" TIMESTAMP NOT NULL`);
    }

}
