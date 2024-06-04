import { Tournament } from 'src/tournament/entities/tournament.entity';
import { Column, DeleteDateColumn, Entity, ManyToOne } from 'typeorm'

@Entity()
export class Player {
    
    @Column({primary : true, generated : true})
    id: number;
    
    @Column()
    name: string;

    @Column()
    score: number;

    @DeleteDateColumn()
    deleteAt: Date;

    @ManyToOne(() => Tournament , (tournament) => tournament.players)
    tournament: Tournament;
}
