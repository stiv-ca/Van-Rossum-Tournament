import { Module } from '@nestjs/common';
import { PlayersService } from './players.service';
import { PlayersController } from './players.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Player } from './entities/player.entity';
import { Tournament } from 'src/tournament/entities/tournament.entity';
import { TournamentModule } from 'src/tournament/tournament.module';
import { TournamentService } from 'src/tournament/tournament.service';

@Module({
  imports: [TypeOrmModule.forFeature([Player,Tournament]),TournamentModule],
  controllers: [PlayersController],
  providers: [PlayersService, TournamentService]
})
export class PlayersModule {}
