import { JwtService } from '@nestjs/jwt';
import { draftDTO } from './draft-dto';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class DraftsService {
  constructor(
    private readonly prisma : PrismaService,
    private readonly JwtService : JwtService
  ) {}
  async saveDraft(draftDTO : draftDTO){
    return await this.prisma.draft.create({data : draftDTO})
  }

  async fetchDrafts(authorization : string,cursor : string | undefined | null ,limitNumber : number){
    const token = authorization.replace("Bearer ",'');
    const response = this.JwtService.verify(token,{secret : process.env.JWT_SECRET});
    
    const drafts = await this.prisma.draft.findMany({
      take : limitNumber + 1,
      orderBy : { id : "desc"},
      cursor : cursor ? {  id: cursor } : undefined,
      skip : cursor ? 1 : 0,
      where : { authorId : response.id }
    })

    let nextCursor : string | null = null;
    
    if(drafts.length > limitNumber){
      const cursorDraft = drafts[limitNumber - 1];
      nextCursor = cursorDraft.id;
      drafts.splice(limitNumber);
    }

    return { drafts , nextCursor};
  }
  async deleteDrafts(ids : string[]){
     await this.prisma.draft.deleteMany({where : {id : { in : ids }}});
    
  }
  async deleteSingleDraft(id : string){
    await this.prisma.draft.delete({where : {id : id}});
  }
}
