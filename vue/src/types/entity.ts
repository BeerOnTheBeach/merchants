export default class Entity {
    _id: string
    _rev: string
    _type: string
    _createdAt: string
    _updatedAt: string

    constructor(id: string, rev: string, type: string, createdAt: string, updatedAt: string) {
        this._id = id;
        this._rev = rev;
        this._type = type;
        this._createdAt = createdAt;
        this._updatedAt = updatedAt;
    }
}