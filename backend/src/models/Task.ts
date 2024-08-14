import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../index";

class Task extends Model {
    public id!: number;
    public title!: string;
    public description!: string;
    public completed!: boolean;
}

Task.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
        },
        completed: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
    },
    {
        sequelize,
        tableName: 'tasks',
    }
);

export default Task;