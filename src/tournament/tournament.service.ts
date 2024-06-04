import { Injectable } from '@nestjs/common';
import { CreateTournamentDto } from './dto/create-tournament.dto';
import { UpdateTournamentDto } from './dto/update-tournament.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Tournament } from './entities/tournament.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TournamentService {

  constructor(

    @InjectRepository(Tournament)
    private readonly tournamentRepository: Repository<Tournament>,

  ) { }

  async create(createTournamentDto: CreateTournamentDto) {
    return await this.tournamentRepository.save(createTournamentDto);
  }

  async findAll() {
    return await this.tournamentRepository.find();;
  }

  async findOne(id: number) {
    return await this.tournamentRepository.findOneBy({id}) ;
  }

  async update(id: number, updateTournamentDto: UpdateTournamentDto) {
    return await this.tournamentRepository.update(id, updateTournamentDto);
  }

  async remove(id: number) {
    return await this.tournamentRepository.softDelete({id});
  }
}
