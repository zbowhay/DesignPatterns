import { AuditTrail } from './auditTrail';
import { Task } from './task';



export class GenerateReportTask extends Task {
    protected doExecute() {
        console.log('Generate report');
    }
}