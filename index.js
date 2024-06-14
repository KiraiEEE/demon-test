import express from "express";
import cors from "cors";
import multer from 'multer';
import { sequelize } from "./config/database.js";
import { getAllUsers, getUserById, createUser, updateUser, deleteUser, loginUser, signUpUser, loginUserWithJWT } from "./controllers/UserController.js";
import { getAllBranches, getBranchById, createBranch, updateBranch, deleteBranch } from "./controllers/BranchController.js";
import { getAllDoneTasks, getDoneTasksByCurrentTime, getDoneTasksByDate,getDoneTaskById, createDoneTask, updateDoneTask, deleteDoneTask } from "./controllers/DoneTaskController.js";
import { getAllEquipment, getEquipmentById, createEquipment, updateEquipment, deleteEquipment } from "./controllers/EquipmentController.js";
import { getAllRoles, getRoleById, createRole, updateRole, deleteRole } from "./controllers/RoleController.js";
import { getAllRooms, getRoomById, createRoom, updateRoom, deleteRoom, resetAllRoomStatuses } from "./controllers/RoomController.js";
import { getAllTasks, getTaskById, createTask, updateTask, deleteTask } from "./controllers/TaskController.js";
import { getAllChecklists, getChecklistById, createChecklist, updateChecklist, deleteChecklist } from "./controllers/ChecklistController.js";
import { getAllDocumentations, getDocumentationById, createDocumentation, updateDocumentation, deleteDocumentation } from "./controllers/DocumentationController.js";

const app = express();
app.use(cors()); 
app.use(express.json());
const port = 3000;

const connectToDatabase = async () => {
        try {
        await sequelize.authenticate();
        console.log('Connected to database');
        } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}




app.listen(port, async () => {
    await connectToDatabase();
    console.log(`💫 Server live on port ${port}`);


})





app.get('/users', getAllUsers);
app.get('/users/:id', getUserById);
app.post('/users', createUser);
app.put('/users/:id', updateUser);
app.delete('/users/:id', deleteUser);

app.post('/users/login', loginUser);
app.post('/users/signup', signUpUser);

app.post('/users/loginwithjwt', loginUserWithJWT);


app.get('/branches', getAllBranches);
app.get('/branches/:id', getBranchById);
app.post('/branches', createBranch);
app.put('/branches/:id', updateBranch);
app.delete('/branches/:id', deleteBranch);

app.get('/checklists', getAllChecklists);
app.get('/checklists/:id', getChecklistById);
app.post('/checklists', createChecklist);
app.put('/checklists/:id', updateChecklist);
app.delete('/checklists/:id', deleteChecklist);

app.get('/donetasks', getAllDoneTasks);
app.get('/donetasks/:id', getDoneTaskById);
app.post('/donetasks', createDoneTask);
app.put('/donetasks/:id', updateDoneTask);
app.delete('/donetasks/:id', deleteDoneTask);

app.get('/donetasks/currenttime', getDoneTasksByCurrentTime);
app.get('/donetasks/date', getDoneTasksByDate);



app.get('/equipments', getAllEquipment);
app.get('/equipments/:id', getEquipmentById);
app.post('/equipments', createEquipment);
app.put('/equipments/:id', updateEquipment);
app.delete('/equipments/:id', deleteEquipment);

app.get('/roles', getAllRoles);
app.get('/roles/:id', getRoleById);
app.post('/roles', createRole);
app.put('/roles/:id', updateRole);
app.delete('/roles/:id', deleteRole);

app.get('/rooms', getAllRooms);
app.get('/rooms/:id', getRoomById);
app.post('/rooms', createRoom);
app.put('/rooms/:id', updateRoom);
app.delete('/rooms/:id', deleteRoom);

app.post('/rooms/resetStatuses', resetAllRoomStatuses);


app.get('/tasks', getAllTasks);
app.get('/tasks/:id', getTaskById);
app.post('/tasks', createTask);
app.put('/tasks/:id', updateTask);
app.delete('/tasks/:id', deleteTask);

app.get('/documentations', getAllDocumentations);
app.get('/documentations/:id', getDocumentationById);
app.post('/documentations', createDocumentation);
app.put('/documentations/:id', updateDocumentation);
app.delete('/documentations/:id', deleteDocumentation);



import fs from 'fs';

// Check if the 'images' directory exists, if not create it
if (!fs.existsSync('./images')) {
    fs.mkdirSync('./images', { recursive: true });
}

// Check if the 'files' directory exists, if not create it
if (!fs.existsSync('./files')) {
    fs.mkdirSync('./files', { recursive: true });
}



// Set up storage engine for multer
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './images');
    },
    filename: function(req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// Initialize upload variable
const upload = multer({ storage: storage });

// Route to upload a file
app.post('/upload', upload.single('image'), (req, res) => {
    if (!req.file) {
        return res.status(400).json({ message: 'Please upload a file.' });
    }
    res.status(201).json({ message: 'File uploaded successfully', fileName: req.file.filename });
});

// Define __dirname in ES module scope
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Route to retrieve a file
app.get('/images/:filename', (req, res) => {
    const filename = req.params.filename;
    const filepath = path.join(__dirname, 'images', filename);
    res.sendFile(filepath, err => {
        if (err) {
            res.status(404).json({ message: 'File not found' });
        }
    });
});


// Set up storage engine for multer for general files
const fileStorage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './files');
    },
    filename: function(req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

// Initialize upload variable for files
const uploadFile = multer({ storage: fileStorage });

// Route to upload a general file
app.post('/files', uploadFile.single('file'), (req, res) => {
    if (!req.file) {
        return res.status(400).json({ message: 'Please upload a file.' });
    }
    res.status(201).json({ message: 'File uploaded successfully', fileName: req.file.filename });
});

// Route to retrieve a general file
app.get('/files/:filename', (req, res) => {
    const filename = req.params.filename;
    const filepath = path.join(__dirname, 'files', filename);
    res.sendFile(filepath, err => {
        if (err) {
            res.status(404).json({ message: 'File not found' });
        }
    });
});


import natural from 'natural';
const TfIdf = natural.TfIdf;
const tfidf = new TfIdf();

app.get('/search/donetasks', async (req, res) => {
    const searchText = req.query.problem;
    if (!searchText) {
        return res.status(400).json({ message: 'No search text provided' });
    }
    
    try {
        const doneTasks = await getAllDoneTasks();
        const documents = doneTasks.map(task => task.problem);
        documents.forEach(doc => tfidf.addDocument(doc));
        
        const scores = [];
        tfidf.tfidfs(searchText, (i, measure) => {
            scores.push({ index: i, score: measure });
        });

        const sortedScores = scores.sort((a, b) => b.score - a.score);
        const topMatchIndex = sortedScores[0].index;
        const bestMatch = doneTasks[topMatchIndex];

        res.json({ similarProblem: bestMatch.problem, solution: bestMatch.solution });
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving doneTasks', error: error.message });
    }
});