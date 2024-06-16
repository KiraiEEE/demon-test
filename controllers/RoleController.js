import Role from '../models/Role.js';

export const getAllRoles = async (req, res) => {
    try {
        const queryConditions = req.query;
        const roles = await Role.findAll({ where: queryConditions });
        res.status(200).json(roles);
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
};

export const getRoleById = async (req, res) => {
    const roleId = req.params.id;
    try {
        const role = await Role.findByPk(roleId);
        if (role) {
            res.status(200).json(role);
        } else {
            res.status(404).json({ message: "Role not found" });
        }
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
};

export const createRole = async (req, res) => {
    const { roomID, roomName } = req.body;
    try {
        const newRole = await Role.create({
            roomID, roomName
        });
        res.status(201).json(newRole);
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
};

export const updateRole = async (req, res) => {
    const roleId = req.params.id;
    const { roomID, roomName } = req.body;
    try {
        const role = await Role.findByPk(roleId);
        if (role) {
            role.roomID = roomID;
            role.roomName = roomName;
            await role.save();
            res.status(200).json(role);
        } else {
            res.status(404).json({ message: "Role not found" });
        }
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
};

export const deleteRole = async (req, res) => {
    const roleId = req.params.id;
    try {
        const role = await Role.findByPk(roleId);
        if (role) {
            await role.destroy();
            res.status(200).json({ message: "Role deleted successfully" });
        } else {
            res.status(404).json({ message: "Role not found" });
        }
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
};
