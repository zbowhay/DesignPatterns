import { Encryptor } from './encryption';
import { AESEncryption } from './AESEncryption';
import { DESEncryption } from './DESEncryption';


export class ChatClient {
    send(message: string, encryptionAlgo: Encryptor) {
        const encrypted = encryptionAlgo.encrypt(message)
        console.log(`Sending the encrypted message (${encrypted}) ...`);
    }
}



const chatClient = new ChatClient();
chatClient.send('super secret', new AESEncryption());
chatClient.send('super secret 2', new DESEncryption());