import {MigrationInterface, QueryRunner} from "typeorm";

export class Test1515623081342 implements MigrationInterface {

  async up(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.query("ALTER TABLE `post` CHANGE `name` `title` VARCHAR(500)");
  }

  async down(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.query("ALTER TABLE `post` CHANGE `title` `name` VARCHAR(255)");
  }

}
