import UserQueue from './User/createUser';

export default async function runQueue() {
    const user = new UserQueue();
    await user.create();
}