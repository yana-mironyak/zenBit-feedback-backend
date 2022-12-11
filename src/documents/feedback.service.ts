import { Injectable } from '@nestjs/common';
import { DataSource, InsertResult } from 'typeorm';
import { CreateFeedbackDto } from './dto/create-feedback.dto';
import { Feedback } from './entities/feedback.entity';

@Injectable()
export class FeedbackService {
  constructor(private dataSource: DataSource) {}

  async createFeedback(
    createFeedbackDto: CreateFeedbackDto,
  ): Promise<InsertResult> {
    return await this.dataSource
      .createQueryBuilder()
      .insert()
      .into(Feedback)
      .values([
        {
          name: createFeedbackDto.name,
          email: createFeedbackDto.email,
          message: createFeedbackDto.message,
        },
      ])
      .execute();
  }
}
