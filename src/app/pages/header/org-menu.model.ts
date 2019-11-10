export class OrgMenu {
    menuStatus: string;
    menuDescription: string;
    menuLink: string;
    menuLevel: number;
    menuName: string;
    id: number;
    menuContent: string;
    menuParentId: number;
    submenuList ?= new Array<OrgMenu>();
}
