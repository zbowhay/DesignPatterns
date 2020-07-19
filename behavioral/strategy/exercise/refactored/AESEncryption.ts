import { Encryptor } from './encryption';



export class AESEncryption implements Encryptor {
    encrypt(message: string): string {
        console.log('Encrypting with AES');
        message = 'cat, encrypted with AES';
        return message;
    }
}