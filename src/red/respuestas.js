exports.success = (req, res, msg, status) => {
  res.status(status || 200).send({
    error: false,
    status: status,
    body: msg || "",
  });
};

exports.error = (req, res, msg, status) => {
  res.status(status || 500).send({
    error: true,
    status: status,
    body: msg || "Internal Server Error",
  });
};
