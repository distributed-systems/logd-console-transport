import ConsoleOutput from 'logd-console-output';
import { Message, Transport } from 'logd';
export default class ConsoleTransport extends Transport {
    log: ConsoleOutput;
    logMethodColorMap: Map<string, string>;
    options: {
        truncate: number;
    };
    constructor();
    message(message: Message): void;
}
//# sourceMappingURL=ConsoleTransport.d.ts.map