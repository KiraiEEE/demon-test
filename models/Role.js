import { sequelize } from "../config/database.js";
import { Model, DataTypes } from "sequelize";

export default class Role extends Model {
// this is the most useless model ever lol
  static associate(models) {

  }
}

Role.init({
<<<<<<< HEAD
  SuperAdmin: DataTypes.BOOLEAN,
  Admin: DataTypes.BOOLEAN,
  Tech: DataTypes.BOOLEAN
=======
  roomID: DataTypes.INTEGER,
  roomName: DataTypes.STRING
>>>>>>> master
}, {
  sequelize,
  modelName: 'Role',
  tableName: 'Roles'
});
<<<<<<< HEAD

=======
>>>>>>> master
