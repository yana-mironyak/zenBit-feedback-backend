import {
  Body,
  Controller,
  Post,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { FeedbackService } from './feedback.service';
import { CreateFeedbackDto } from './dto/create-feedback.dto';

@Controller('feedback')
export class FeedbackController {
  constructor(private readonly feedbackService: FeedbackService) {}

  @Post()
  async create(@Body() createFeedbackDto: CreateFeedbackDto) {
    try {
      return await this.feedbackService.createFeedback(createFeedbackDto);
    } catch (error) {
      throw new HttpException(
        'Произошла ошибка при создании документа' + error,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
