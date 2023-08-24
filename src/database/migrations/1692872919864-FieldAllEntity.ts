import { MigrationInterface, QueryRunner } from "typeorm";

export class FieldAllEntity1692872919864 implements MigrationInterface {
    name = 'FieldAllEntity1692872919864'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "post" ADD "post_order" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "post" ADD "created_date" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "post" ADD "updated_date" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "post" ADD "deleted_date" TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE "users" ADD "phone_number" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ADD "created_date" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "users" ADD "updated_date" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "users" ADD "deleted_date" TIMESTAMP`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "deleted_date"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "updated_date"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "created_date"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "phone_number"`);
        await queryRunner.query(`ALTER TABLE "post" DROP COLUMN "deleted_date"`);
        await queryRunner.query(`ALTER TABLE "post" DROP COLUMN "updated_date"`);
        await queryRunner.query(`ALTER TABLE "post" DROP COLUMN "created_date"`);
        await queryRunner.query(`ALTER TABLE "post" DROP COLUMN "post_order"`);
    }

}
