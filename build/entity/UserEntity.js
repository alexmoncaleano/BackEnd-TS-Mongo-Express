"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserEntity = void 0;
class UserEntity {
    constructor(idUser, typeId, nameUser, lastNameUser, emailUser, telephoneUser) {
        this.idUser = idUser;
        this.typeIdUser = typeId;
        this.nameUser = nameUser;
        this.lastNameUser = lastNameUser;
        this.emailUser = emailUser;
        this.telephoneUser = telephoneUser;
    }
}
exports.UserEntity = UserEntity;
exports.default = UserEntity;
