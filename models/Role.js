import { sequelize } from "../config/database.js";
import { Model, DataTypes } from "sequelize";

export default class Role extends Model {
// this is the most useless model ever lol
  static associate(models) {

  }
}

Role.init({
  roomID: DataTypes.INTEGER,
  roomName: DataTypes.STRING
}, {
  sequelize,
  modelName: 'Role',
  tableName: 'Roles'
});
