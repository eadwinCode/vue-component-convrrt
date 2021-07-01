export class URLItemModel {
  icon: any;
  title: string;
  validationRules: string;
  inputType: string;
  value = "";

  constructor(
    icon: any,
    title: string,
    validationRules: string,
    inputType: string
  ) {
    this.icon = icon;
    this.title = title;
    this.validationRules = validationRules;
    this.inputType = inputType;
  }

  public clear() {
    this.value = "";
  }
}

export class URIListModel {
  urlActions: Array<URLItemModel> = [];
  currentUrlItem: URLItemModel | null = null;

  public addURLItem(urlItem: URLItemModel) {
    this.urlActions.push(urlItem);
  }

  public addUrlComponent(
    icon: any,
    title: string,
    validationRules = "required",
    inputType = "text"
  ) {
    const urlItem = new URLItemModel(icon, title, validationRules, inputType);
    this.addURLItem(urlItem);
  }

  public clear() {
    this.currentUrlItem = null;
  }
}
