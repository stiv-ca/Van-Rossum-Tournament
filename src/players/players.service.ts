import { BadRequestException, Injectable } from '@nestjs/common';
import { CreatePlayerDto } from './dto/create-player.dto';
import { UpdatePlayerDto } from './dto/update-player.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Player } from './entities/player.entity';
import { Repository } from 'typeorm';
import { Tournament } from 'src/tournament/entities/tournament.entity';

@Injectable()
export class PlayersService {

  constructor(

    @InjectRepository(Player)
    private readonly playerRepository: Repository<Player>,

    @InjectRepository(Tournament)
    private readonly tournamentRepository: Repository<Tournament>

  ) {}

  async create(createPlayerDto: CreatePlayerDto) {

    const tournament = await this.tournamentRepository.findOne({ where : {name: createPlayerDto.tournament}})

    if(!tournament) {
      throw new BadRequestException('tournament not found')
    }

    return await this.playerRepository.save({
      ...createPlayerDto,
      tournament,
    });
  }

  async findAll() {
    return await this.playerRepository.find();
  }

  async findOne(id: number) {
    return await this.playerRepository.findOneBy({id});
  }

  async update(id: number, updatePlayerDto: UpdatePlayerDto) {
    return //await this.playerRepository.update(id, updatePlayerDto);
  }

  async remove(id: number) {
    return await this.playerRepository.softDelete({id});
  }
}
