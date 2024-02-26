export abstract class Form {
  protected abstract getService(): any;
  

  public save(): void {
    console.info(`Save form calling ....!`);
    this.before_save;
    // TODO save in service

    this.after_save;
  }

  public before_save(): void {}

  public after_save(): void {}
}
