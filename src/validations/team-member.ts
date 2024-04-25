import { ApiProperty, ApiResponseProperty } from '@nestjs/swagger';
import { IsNotEmpty, Length } from 'class-validator';

export class teamMember {
  @ApiResponseProperty({
    example: '8b693427-29b0-4c6e-877f-f782f1551f0d',
  })
  id?: string;

  @ApiProperty({
    description: 'Name must be greater than 3 and less than 30 characters.',
    example: 'John Doe',
  })
  @IsNotEmpty()
  @Length(3, 30)
  name: string;

  @ApiProperty({
    description: 'Position of the man in the field.',
    example: 'Striker',
  })
  @IsNotEmpty()
  position: string;
}
