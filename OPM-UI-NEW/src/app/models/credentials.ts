export class Credentials {
    public username;
    public password;

    setUsername(value: String): void {
        this.username = value;
    }

    getUsername() {
        return this.username;
    }

    setPassword(value: String): void {
        this.password = value;
    }

    getPassword() {
        return this.password;
    }

}