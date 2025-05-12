const router = require("../users/user.route");
const Initiative = require("./initiative.model");


// Создание инициативы
const postInitiative = async (req, res) => {
    try {
        const newInitiative = new Initiative({ ...req.body });
        await newInitiative.save();
        res.status(200).send({ message: "Initiative created successfully", initiative: newInitiative });
    } catch (error) {
        console.error("Error creating initiative", error);
        res.status(500).send({ message: "Failed to create initiative" });
    }
};

// Получение всех инициатив
const getAllInitiatives = async (req, res) => {
    try {
        const initiatives = await Initiative.find().sort({ createdAt: -1 });
        res.status(200).send(initiatives);
    } catch (error) {
        console.error("Error fetching initiatives", error);
        res.status(500).send({ message: "Failed to fetch initiatives" });
    }
};

// Получение одной инициативы
const getSingleInitiative = async (req, res) => {
    try {
        const { id } = req.params;
        const initiative = await Initiative.findById(id);
        if (!initiative) {
            return res.status(404).send({ message: "Initiative not found!" });
        }
        res.status(200).send(initiative);
    } catch (error) {
        console.error("Error fetching initiative", error);
        res.status(500).send({ message: "Failed to fetch initiative" });
    }
};

// Обновление инициативы
const updateInitiative = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedInitiative = await Initiative.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedInitiative) {
            return res.status(404).send({ message: "Initiative not found!" });
        }
        res.status(200).send({ message: "Initiative updated successfully", initiative: updatedInitiative });
    } catch (error) {
        console.error("Error updating initiative", error);
        res.status(500).send({ message: "Failed to update initiative" });
    }
};

// Удаление инициативы
const deleteInitiative = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedInitiative = await Initiative.findByIdAndDelete(id);
        if (!deletedInitiative) {
            return res.status(404).send({ message: "Initiative not found!" });
        }
        res.status(200).send({ message: "Initiative deleted successfully", initiative: deletedInitiative });
    } catch (error) {
        console.error("Error deleting initiative", error);
        res.status(500).send({ message: "Failed to delete initiative" });
    }
};

module.exports=  {
  postInitiative,
  getAllInitiatives,
  getSingleInitiative,
  updateInitiative,
  deleteInitiative
}; 


