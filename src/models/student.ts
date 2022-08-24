import { BeforeInsert, Column, Entity } from "typeorm";
import { BaseEntity} from "@medusajs/medusa";
import { generateEntityId } from "@medusajs/medusa/dist/utils"

@Entity()
export class Student extends BaseEntity {
    @Column({type: 'varchar'})
    name: string | null;

    @BeforeInsert()
    private beforeInsert(): void {
        this.id = generateEntityId(this.id, "student")
    }
}