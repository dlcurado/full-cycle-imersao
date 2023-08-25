import { Controller, Get, Query } from '@nestjs/common';
import { PlacesService } from './places.service';

@Controller('places')
export class PlacesController {
  constructor(private placeService: PlacesService) {}

  @Get()
  findPlace(@Query('text') text: string) {
    console.log('Bateu no NEST');
    return this.placeService.findPlace(text);
  }
}
