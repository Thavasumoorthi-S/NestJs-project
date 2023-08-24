import { Delete } from '@nestjs/common';
import { ObjectType, Field, Int } from '@nestjs/graphql';
import { User } from 'src/user/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@ObjectType()
@Entity({ name: 'post' })

export class Post {

  @Field()
  @PrimaryGeneratedColumn('uuid',{name:"post_id"})
  postid: string;
  
  @Field()
  @Column({name:'post_name'})
  postname: string;

  @Field(()=>Int)
  @Column({name:'post_order'})
  postorder: string;

  @Field(()=>Date)
  @CreateDateColumn({name:'created_date'})
  createdAt: Date;

  @Field(()=>Date)
  @UpdateDateColumn({name:'updated_date'})
  updatedAt: Date;
  
  @Field(()=>Date)
  @DeleteDateColumn({name:'deleted_date'})
  deletedAt: Date;

  @Field()
  @Column({name:'user_id'})
  userId:string

  @Field()
  @ManyToOne(() => User, (user) => user.post)
  @JoinColumn({ name: 'user_id' })
  user: User;

}
