module.exports = function(req, res, next) {
  
    if (req.staff.role !== 'Admin')
    return res.json({ status: 403, error: "Access Denied" });
  // res.status(403).send("Access Denied");
  next();
};
