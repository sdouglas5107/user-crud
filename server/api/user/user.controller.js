'use strict';

const Thing = require("../../sqldb").Thing;

function respondWithResult(res, statusCode) {
    statusCode = statusCode || 200;
    return function (entity) {
        if (entity) {
            return res.status(statusCode).json(entity);
        }
        return null;
    };
}

function removeEntity(res) {
    return function (entity) {
        if (entity) {
            return entity.destroy()
                .then(() => {
                    res.status(204).end();
                });
        }
    };
}

function handleEntityNotFound(res) {
    return function (entity) {
        if (!entity) {
            res.status(404).end();
            return null;
        }
        return entity;
    };
}

function handleError(res, statusCode) {
    statusCode = statusCode || 500;
    return function (err) {
        res.status(statusCode).send(err);
    };
}

// Gets a list of Things
module.exports.index = function index(req, res) {
    return Thing.findAll()
        .then(respondWithResult(res))
        .catch(handleError(res));
};

// Creates a new Thing in the DB
module.exports.create = function create(req, res) {
    return Thing.create(req.body)
        .then(respondWithResult(res, 201))
        .catch(handleError(res));
};

// Deletes a Thing from the DB
module.exports.destroy = function destroy(req, res) {
    return Thing.find({
        where: {
            _id: req.params.id
        }
    })
        .then(handleEntityNotFound(res))
        .then(removeEntity(res))
        .catch(handleError(res));
};
