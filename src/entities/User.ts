import { IsEmail, Length } from "class-validator";
import {
    BaseEntity,
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from "typeorm";

@Entity()
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    @Length(1, 255)
    name!: string;

    @Column()
    @Length(1, 255)
    username!: string;

    @Column({ unique: true })
    @IsEmail()
    email!: string;

    @Column()
    @Length(1, 255)
    password!: string;

    @Column({ type: "longtext", nullable: true })
    token!: string;

    @CreateDateColumn({
        type: "timestamp",
        default: () => "CURRENT_TIMESTAMP(6)",
    })
    created_at!: Date;

    @UpdateDateColumn({
        type: "timestamp",
        default: () => "CURRENT_TIMESTAMP(6)",
        onUpdate: "CURRENT_TIMESTAMP(6)",
    })
    updated_at!: Date;
}
