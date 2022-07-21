import { LoggerServiceType } from "../types/Types";

export class LoggerService implements LoggerServiceType {


    logData(data: string): void {
        console.log(data)
    }


}