import ConsoleOutput from 'logd-console-output';
import { Transport } from 'logd';
export default class ConsoleTransport extends Transport {
    constructor() {
        super();
        // write to the console using this
        this.log = new ConsoleOutput();
        // method map, defining which logger methods are called for which levels
        this.logMethodColorMap = new Map([
            ['debug', 'grey'],
            ['notice', 'grey'],
            ['info', 'white'],
            ['warn', 'yellow.bold'],
            ['error', 'red.bold'],
            ['success', 'green.bold'],
            ['highlight', 'cyan.bold'],
            ['wtf', 'magenta.bold.bgWhite'],
            ['default', 'blue.bold'],
        ]);
        // logger options
        this.options = {
            truncate: 2000
        };
    }
    message(message) {
        this.log.log({
            values: message.data.map((item) => {
                if (item.type === 'error') {
                    // custom object format to print!
                    item.__logd_custom_renderer = 'logd-error';
                    return item;
                }
                else
                    return item.data;
            }),
            color: this.logMethodColorMap.has(message.level.name) ? this.logMethodColorMap.get(message.level.name) : this.logMethodColorMap.get('default'),
            callsite: message.callsite,
            options: this.options,
        });
    }
}
//# sourceMappingURL=ConsoleTransport.js.map