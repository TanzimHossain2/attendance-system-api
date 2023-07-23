function error(status = 500, msg = 'Something Went Wrong') {
    const err = new Error(msg);
    err.status = status;
    return err;
}

module.exports = error;