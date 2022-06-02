export enum CargoEnum {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  PROFESSOR, CORDENADOR, DIRETOR, SUBSTITUTO
}

export class Cargos {
  public label: string;
  public value: string | number;

  constructor(value: string | number, label: string) {
    this.value = value;
    this.label = label;
  }

  public static todos() {
    return new Array(
      new Cargos(CargoEnum[CargoEnum.PROFESSOR], 'Professor'),
      new Cargos(CargoEnum[CargoEnum.CORDENADOR], 'Cordenador'),
      new Cargos(CargoEnum[CargoEnum.DIRETOR], 'Diretor'),
      new Cargos(CargoEnum[CargoEnum.SUBSTITUTO], 'Professor substituto'),
    );
  }
}
