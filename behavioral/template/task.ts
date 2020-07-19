import { AuditTrail } from './auditTrail';



export abstract class Task {
    auditTrail: AuditTrail;

    constructor() {
        this.auditTrail = new AuditTrail();
    }

    execute() {
        this.auditTrail.record();
        this.doExecute();
    }

    protected abstract doExecute();
}