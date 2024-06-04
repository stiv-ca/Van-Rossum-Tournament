import { Column, DeleteDateColumn, Entity } from 'typeorm'

@Entity()
export class Player {
    
    @Column({primary : true, generated : true})
    id : number;
    
    @Column()
    name : string;

    @Column()
    score : number;

    @DeleteDateColumn()
    deleteAt: Date;
}
