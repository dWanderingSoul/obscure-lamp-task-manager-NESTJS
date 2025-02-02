import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    OneToMany,
  } from 'typeorm';
  import { Task } from '../tasks/task.entity';
  
  @Entity()
  export class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;
  
    @Column({ unique: true })
    email: string;
  
    @Column({ unique: true, nullable: true })
    username: string;
  
    @Column()
    password: string;
  
    @OneToMany(() => Task, (task) => task.createdBy)
    tasks: Task[];
  }
  