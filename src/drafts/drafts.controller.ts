import { Controller, Post, Body, UseGuards, Get, Query, Delete } from '@nestjs/common';
import { DraftsService } from './drafts.service';
import { draftDTO } from './draft-dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('drafts')
export class DraftsController {
  constructor(
    private readonly draftsService: DraftsService
  ) {}
  @UseGuards(JwtAuthGuard)
  @Post("saveDraft")
  async saveDraft(
    @Body() 
    draftDTO : draftDTO
  ){
    await this.draftsService.saveDraft(draftDTO);
  }
  @UseGuards(JwtAuthGuard)
  @Post('fetchDrafts')
    async fetchTweets(
      @Body('id') id : string,
      @Query('cursor') cursor ?: string,
      @Query('limit') limit ?: string 
    ){
      const limitNumber = parseInt(limit ?? '10',10);
      return await this.draftsService.fetchDrafts(id,cursor,limitNumber);
    }
  @UseGuards(JwtAuthGuard)
  @Delete('deleteDrafts')
  async deleteDrafts(@Body() ids : string[] ){
    await this.draftsService.deleteDrafts(ids);
  }
  @UseGuards(JwtAuthGuard)
  @Delete('deleteSingleDraft')
  async deleteSingleDraft(@Body('id') id : string ){
    await this.draftsService.deleteSingleDraft(id);
  }
}
