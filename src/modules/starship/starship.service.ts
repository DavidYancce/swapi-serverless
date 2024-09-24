import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocument } from '@aws-sdk/lib-dynamodb';
import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { SWAPIProvider } from '../../providers/swapi/swapi.provider';
import { CreateStarshipDto } from './dto/create-starship.dto';
import { translateObject } from './entity/starship.mapper';
import { Starship } from './entity/startship.dto';


@Injectable()
export class StarshipService {
  ddbDocClient: DynamoDBDocument;

  constructor(private swapiProvider: SWAPIProvider) {
    const dynamoDBClient = new DynamoDBClient();
    this.ddbDocClient = DynamoDBDocument.from(dynamoDBClient);
  }

  async findAllInSpanish() {
    const results = await this.ddbDocClient.scan({
      TableName: process.env.STARSHIP_TABLE_NAME,
    });
    return results.Items;
  }

  async create(createStarshipDto: CreateStarshipDto) {
    await this.ddbDocClient.put({
      TableName: process.env.STARSHIP_TABLE_NAME,
      Item: {
        ...createStarshipDto,
        id: uuidv4(),
        created: new Date().toISOString(),
        edited: new Date().toISOString(),
      },
    });
  }

  async findAll() {
    const rawStarships: Starship[] = await this.swapiProvider.getAllStarships();
    return rawStarships.map((starship) => translateObject(starship));
  }
}
