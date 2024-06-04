import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TournamentModule } from './tournament/tournament.module';
import { PlayersModule } from './players/players.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5431,  
      username: 'myuser',
      password: 'mypassword',
      database: 'mydatabase',
      autoLoadEntities: true,
      synchronize: true  
    }),
  PlayersModule,
  TournamentModule
  ],
})
export class AppModule {}
