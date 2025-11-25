import { Min,IsInt } from "class-validator";
export class fetch3Users{
  @IsInt()
  @Min(0)
  skip?: number = 0;

  @IsInt()
  @Min(1)
  take?: number = 3;

}