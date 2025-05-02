import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

export enum priorityE {
  LOW = "low",
  MEDIUM = "medium",
  HIGH = "high",
}

export interface ITaskCreate {
  title: string;
  completed: boolean;
  userId: string;
  dueDate: Date;
  priority: priorityE;
  description?: string;
  parentId?: number;
}

@Entity()
export class Task implements ITaskCreate {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  title!: string;

  @Column()
  completed!: boolean;

  @Column({
    nullable: false,
  })
  userId!: string;

  @Column({
    nullable: true,
    type: "timestamp",
  })
  dueDate!: Date;

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

  @Column({
    nullable: true,
  })
  parentId?: number;
}
