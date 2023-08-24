import { ObjectType, Field } from '@nestjs/graphql';
import { Post } from 'src/post/entities/post.entity';
import { Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@ObjectType()
@Entity({ name: 'users' })
export class User {
  @Field()
  @PrimaryGeneratedColumn('uuid',{name:"user_id"})
  userid: string;

  @Field()
  @Column({name:"user_name"})
  fullname: string;

  @Field()
  @Column({name:"phone_number"})
  phonenumber: string;

  @Field(()=>Date)
  @CreateDateColumn({name:'created_date'})
  createdAt: Date;

  @Field(()=>Date)
  @UpdateDateColumn({name:'updated_date'})
  updatedAt: Date;
  
  @Field()
  @DeleteDateColumn({name:'deleted_date'})
  deletedAt: Date;
  
  @Field(() => [Post], {nullable:true})
  @OneToMany(() => Post, (post) => post.user)
  post: Post[];

}
