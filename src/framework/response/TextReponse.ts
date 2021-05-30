import { TextBody } from './body/TextBody';
import { Response } from './Response';
import { ResponseType } from './ResponseType';

export class TextResponse extends Response {
  public constructor(text: string) {
    super(ResponseType.TEXT, new TextBody(text));
  }
}
