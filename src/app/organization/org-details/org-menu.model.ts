export class OrgMenu {
    menuStatus: string;
    menuDescription: string;
    menuLink: string;
    menuLevel: number;
    menuName: string;
    menuContent: string;
    id: number;
    menuParentId: number;
    submenuList ?= new Array<OrgMenu>();
}
