import { Encryptor } from './encryption';


export class DESEncryption implements Encryptor {
    encrypt(message: string): string {
        console.log('Encrypting message with DES');
        message = 'dog, encrypted with DES';
        return message;
    }
}