const express = require("express");
const router = express.Router();
const List = require("../controllers/api-showTreatmemts");
const search = require("../controllers/api-search");
const user = require("../controllers/api-user");

const list = require("../controllers/api-List");

const comments = require("../controllers/api-Comments");

const uploadImmg = require("../controllers/api-upload-img");
const upload = require("../config/db/file");
// router.get("/treatments/:id", YourController.ShowTreatmentsById);
const medicines = require("../controllers/api-medicines");
router.get("/search", search.search);

router.get("/treatments", List.getList);
router.get("/treatments/:id", List.getListID);
router.get("/treatments/:diseaseId/:ten", List.getFruitID);
router.get("/treatments/:diseaseId/:ten/:thuoc", List.getThuocID);

router.get("/medicines", medicines.getListMedisines);
router.get("/medicines/:typeName", medicines.getListMedisinesName);

router.get("/checkadmin", user.authenticateToken, user.authorizeAdmin);

router.get("/admin/allUser", user.allUser);
router.delete("/admin/allUser/:userId", user.detleteUser);

router.get("/getList", list.getListBenh);
router.post("/createList", list.postListBenh);
router.delete("/deteleLoaiBenh/:id", list.delete);

router.post("/upload", upload.single("uploaded_file"), uploadImmg.uploadImage);
router.post("/comments", comments.createComment);

router.post("/register", user.register);
router.post("/login", user.login);
// router.get("/getloginUser", user.login);

router.get("/userId", user.authenticateToken);

module.exports = router;
