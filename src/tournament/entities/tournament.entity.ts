import { Column, Entity, OneToMany } from "typeorm";
import { Player } from "src/players/entities/player.entity";


@Entity()
export class Tournament {

    @Column({primary: true, generated : true})
    id: number;

    @Column()
    name: string;

    @Column()
    date : string;

    @Column()
    location: string;

    @OneToMany(() => Player , (player) => player.tournament)
    players: Player[];

}
