'use strict';

const User = require("../../sqldb").User;

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

module.exports.index = function index(req, res) {
    return User.findAll()
        .then(respondWithResult(res))
        .catch(handleError(res));
};

module.exports.create = function create(req, res) {
    return User.create(req.body)
        .then(respondWithResult(res, 201))
        .catch(handleError(res));
};

module.exports.destroy = function destroy(req, res) {
    return User.find({
        where: {
            _id: req.params.id
        }
    })
        .then(handleEntityNotFound(res))
        .then(removeEntity(res))
        .catch(handleError(res));
};
