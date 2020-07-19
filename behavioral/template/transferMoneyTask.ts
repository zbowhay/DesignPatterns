import { AuditTrail } from './auditTrail';
import { Task } from './task';



export class TransferMoneyTask extends Task {
    protected doExecute() {
        console.log('Transfer Money');
    }
}