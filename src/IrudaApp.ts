import { IrudaBot } from './model/bot/IrudaBot';
import { ExpressReceiver } from './model/ExpressReceiver';

export class IrudaApp {
  public main(): void {
    const receiver = new ExpressReceiver();
    receiver.setBot(new IrudaBot());
    receiver.run();
  }
}
