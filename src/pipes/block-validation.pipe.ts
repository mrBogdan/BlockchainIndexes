import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class BlockValidationPipe implements PipeTransform<string, number> {
  transform(value: string, metadata: ArgumentMetadata): number {
    if (value === 'latest') {
      return value as any;
    }
    const val = parseInt(value);

    if (isNaN(val)) {
      throw new BadRequestException('Should be number or \'latest\'');
    }

    return val;
  }
}
