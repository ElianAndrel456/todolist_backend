import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { TaskCreate } from "../schema/request/task.create.schema";

export enum priorityE {
  LOW = "low",
  MEDIUM = "medium",
  HIGH = "high",
}

@Entity()
export class Task implements TaskCreate {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  title!: string;

  @Column()
  completed!: boolean;

  @Column({
    nullable: true,
    type: "timestamp",
  })
  dueDate!: Date | null;

  @Column({
    type: "enum",
    enum: priorityE,
    default: priorityE.LOW,
  })
  priority!: priorityE;

  @Column({
    nullable: true,
    type: "text",
  })
  description?: string;

  @CreateDateColumn()
  created_a!: Date;

  @UpdateDateColumn()
  updated_at!: Date;
}
